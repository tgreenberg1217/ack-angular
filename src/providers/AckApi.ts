//import "rxjs/add/operator/toPromise";
import { Injectable, EventEmitter } from "@angular/core"

/*Angular4
import {
  Http, Response, Request
} from "@angular/common";
*/

import {
  HttpParams,
  HttpEventType,
  HttpHeaders,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEvent
} from "@angular/common/http"

import { AckCache, cacheModel } from "./AckCache";
import { AckQue } from "./AckQue";

//specific to failed POST/PUT
export interface sendFailMeta{
  offlineId?   : number|string
  lastAttempt? : Date
  attempts?    : number
  maxTry?      : number
}

export interface httpOptions{
  url?            : string
  params?         : any
  body?           : any
  method?         : "GET"|"POST"|"PUT"|"PATCH"|"DELETE"|string
  headers?        : any//{[index: string]: string | string[]}
  timeout?        : number
  offlineModel?   : cacheModel|string
  sendFailMeta?   : sendFailMeta
  promise?        : "response"|"all"|"data"|string//typically just the body data is promised. Anything but data returns response
  reportProgress? : boolean
}

export interface apiConfig{
  //promise? : "all"|"data"//typically just the body data is promised
  baseUrl? : string
  //params?  : any//query vars
  $http?   : httpOptions
}

export function TimeOutError(message){
  Error["captureStackTrace"](this, this.constructor)
  this.name = this.constructor.name
  this.status = 504
  this.code = "gateway_timeout"
  this.message = message || "Could not connect to server or server did not respond in a timely manner. Please check internet connection and then try again."
}
TimeOutError.prototype = Object.create(Error.prototype)

/** Http util with offline config for request failures */
@Injectable() export class AckApi{
  //Angular5
  response:EventEmitter<HttpResponse<HttpEvent<Event>>> = new EventEmitter()
  //Angular4
  //response:EventEmitter<Response> = new EventEmitter()
  
  Request:EventEmitter<HttpRequest<HttpEvent<Event>>> = new EventEmitter()
  AuthError:EventEmitter<Error> = new EventEmitter()
  ApiError:EventEmitter<Error> = new EventEmitter()

  AckCache = new AckCache()
  AckQue = new AckQue()
  config:apiConfig = <apiConfig>{
    baseUrl:"",
    $http:{
      method:"GET",
      headers:{},
      timeout: 6500//4000//8000
    }
  }

  constructor(public HttpClient:HttpClient){
    this.paramConfig()
  }

  /** an empty function for inheritance to hook into */
  paramConfig(){}

  /** START HERE. Handlers must be registered before sending requests
    @options{maxTry:50}
  */
  registerHandler(
    name:string,
    handler?:(config:httpOptions)=>any,
    options?:sendFailMeta
  ){
    options = options || {maxTry:50}
    handler = handler || (config=>this.request(config))
    this.AckQue.registerHandler(name, handler)
    return this
  }

  getQue(name:string){
    return this.AckQue.get(name)
  }

  getCache(name:string){
    return this.AckCache.get(name)
  }

  /** when back online, run this function */
  processQue(name:string):Promise<any>{
    this.AckQue.paramHandler(name,config=>this._fetch(config))
    return this.AckQue.processQue(name)
  }

  /** clears POST/PUT/PATCH/DELETE que */
  clearQue(name:string){
    return this.AckQue.clear(name)
    //.then( ()=>this.AckCache.clear(name) )
  }

  /** clears GET cache */
  clearCache(name){
    return this.AckCache.clear(name)
  }

  /** method all request transactions tunnel thru to instead try for cache first
    HINT: @config.offlineModel, when defined:
      - POST/PUT/PATCH requests goto que if they fail.
      - GET responses are cached with optional expires or maxAge option
  */
  request(
    config:httpOptions
  ):Promise<HttpRequest<HttpEvent<Event>>|any>{
    const defaults:httpOptions = { ...this.config.$http }

    defaults.headers = { ...this.config.$http.headers }//cause a deeper clone and break memory ref with apiConfig.$http

    const request = Object.assign(defaults, (config||{}))
    request.url = this.config.baseUrl + request.url

    //removed 11/16/2017
    //Object.assign(request.headers, this.config.$http.headers)//enforced config/defaults . apiConfig act as an overwriter of headers

    //has cache instructions?
    if( request.offlineModel ){
      return this.requestOfflineModel(request)
    }

    return this._fetch(request)
  }

  getCacheByNamedRequest(
    request:httpOptions
  ):Promise<any>{
    const offlineModel = <cacheModel>request.offlineModel
    return this.AckCache.get( offlineModel.name )
    .then(routes=>{
      routes = routes || {}
      const cacheName = this.getSotageNameByRequest(request)
      return routes[ cacheName ]//get cache by url
    })
    .then(cache=>this.processCacheGet(cache,request))
  }

  getSotageNameByRequest(
    request:httpOptions
  ):string{
    if( request.params ){
      const paramKeys = Object.keys(request.params)

      if(!paramKeys.length)return request.url
      
      let url = request.url + (request.url.search(/\?/)>=0 ? "&" : "?")
      paramKeys.sort().forEach(name=>url+=name+"="+request.params[name]+"&")

      return url.substring(0, url.length-1)//remove last amp
    }

    return request.url
  }

  requestOfflineModel(
    request:httpOptions
  ):Promise<HttpResponse<HttpEvent<Event>>>{
    let offlineModel = <cacheModel>request.offlineModel
    
    if(offlineModel && offlineModel.constructor==String){
      request.offlineModel = offlineModel = <cacheModel>{ name:request.offlineModel }
    }

    if (request.method === "GET") {
      return this.getCacheByNamedRequest(request)
    }

    this.AckQue.paramHandler(offlineModel.name,config=>this._fetch(config))

    //request is a PUT, POST, PATCH, or DELETE
    return this._fetch(request)
    .catch( e=>this.postRequestFail(e,request) )//if fail, save config for later
  }

  processCacheGet(
    cache:any,
    cfg:httpOptions
  ):Promise<HttpResponse<HttpEvent<Event>>>{
    if(cache==null)return this._fetch(cfg)

    const offlineModel = <cacheModel>cfg.offlineModel
    
    return this.AckCache.cacheToReturn(offlineModel.name, cache, offlineModel)
    .then(rtn=>{
      const willExpire = this.AckCache.optionsKillCache( offlineModel )

      if( rtn && !willExpire ){
        console.log("AckApi fetched cache that will never expire. Set offlineModel.expires=0 or offlineModel.maxAge=0 to avoid this message", rtn)
      }

      if( rtn!=null ){
        return rtn
      }

      return this._fetch(cfg)
    })
  }

  postRequestFail(
    e, request:httpOptions
  ):Promise<any>{
    const saveWorthy = e.status == 0 || e.status == -1 || e.status == 503

    if(!saveWorthy)return Promise.reject(e)

    request.sendFailMeta = request.sendFailMeta || <sendFailMeta>{}
    request.sendFailMeta.offlineId = Date.now()//this.getSotageNameByRequest(request)
    request.sendFailMeta.lastAttempt = new Date()
    request.sendFailMeta.attempts = request.sendFailMeta.attempts==null ? 1 : ++request.sendFailMeta.attempts
    request.sendFailMeta.maxTry = request.sendFailMeta.maxTry || 50
    const tryAgainLater = request.sendFailMeta.maxTry && request.sendFailMeta.attempts <= request.sendFailMeta.maxTry

    e.sendFailMeta = request.sendFailMeta

    if(tryAgainLater){
      const requestSave = Object.assign({}, request)
      delete requestSave.offlineModel//only used for GET method
      const offlineModel = <cacheModel>request.offlineModel
      return this.AckQue.set(offlineModel.name, requestSave)
      .then( ()=>Promise.reject(e) )
    }

    return Promise.reject(e)
  }

  /** master method for sending requests and caching responses using $http requests
    @cfg{
      catch:"data"//typically only error data is returned, but if catch!="data" then entire response is returned for a caught error
      promise:"data"//typically only data is returned, but if promise!="data" then entire response is returned
      headers:{}//when sending a file "Content-Type":undefined so that no content-type header is sent
    }
  */
  _fetch(
    cfg:httpOptions
  ):Promise<HttpResponse<HttpEvent<Event>>> {
    upgradeConfig(cfg)

    const cfgPlus = {...cfg}

    if( cfg.params ){
      cfgPlus.params = new HttpParams({
        fromObject:cfg.params
      })
    }

    if( cfg.headers ){
      cfgPlus.headers = new HttpHeaders( cfg.headers )
    }

    const request = new HttpRequest(
      cfg.method,
      cfg.url,
      cfg.body,
      cfgPlus
    )

    return new Promise((resolve,reject)=>{
      let resolved = false
      this.Request.emit( request )
      
      const req = this.HttpClient.request( request )
      .subscribe(event=>{
        if (event.type === HttpEventType.Response) {
          resolved = true
          resolve(event)
        }
      },err=>{
        resolved=true
        reject(err)
      })

      if( cfg.timeout ){
        setTimeout(()=>{
          if(resolved)return
          req.unsubscribe()
          const timeoutError = new TimeOutError("Request timed out. Server did NOT respond timely enough")
          timeoutError.timeout = cfg.timeout
          reject( timeoutError )
        }, cfg.timeout)
      }
    })
    .then((response:HttpResponse<HttpEvent<Event>>)=>
      this.processFetchByConfig(response,cfg)
     )
    .catch( e=>this.httpFailByConfig(e,cfg) )
  }

  processFetchByConfig(
    response:HttpResponse<HttpEvent<Event>>,
    request:httpOptions
  ):Promise<HttpResponse<HttpEvent<Event>>>{
    this.response.emit(response)//let subscribers of all responses know we got one
    
    const data = response.body || response["_body"]//Angular5.body Angular4._body
    const isJson = data && response.headers.get("Content-Type")=="application/json"

    if(isJson && !response["data"]){
      try{
        response["data"] = JSON.parse( data )
      }catch(e){}
    }

    response["data"] = data//Since angularJs backwords compat and leaves original body string alone
    const isDataMode = !request.promise || request.promise=="data"
    const output = isDataMode ? data : response
    const isCacheReponse = request.method === "GET" && request.offlineModel

    if ( isCacheReponse ) {
      return this.requestResponseToCache(request, output)
      .then( ()=>output )
    }

    return Promise.resolve( output )
  }

  httpFailByConfig(e,cfg){
    const isReduceData = cfg.catch==null||cfg.catch=="data"
    const isCatchData = isReduceData && e.data && e.data.error

    //find JSON error object and reduce to
    if(isCatchData){
      const newError = new Error()
      Object.assign(newError, e.data.error)
      e = newError
    }

    if(e.status==401){
      this.AuthError.emit(e)
    }else{
      this.ApiError.emit(e)
    }

    return Promise.reject(e)
  }

  requestResponseToCache(
    request, output
  ):Promise<any>{
    const cachename = request.offlineModel.name || request.offlineModel
    return this.AckCache.get(cachename)
    .then(routes=>{
      routes = routes || {}
      const cacheName = this.getSotageNameByRequest(request)
      routes[ cacheName ] = <cacheModel>{cache:output}
      this.AckCache.dataOptionsCache(routes[ request.url ], request.offlineModel, output)
      return routes
    })
    .then(routes=>this.AckCache.set(cachename, routes))
  }
  
  get(
    path:string,
    config?:httpOptions
  ):Promise<HttpResponse<HttpEvent<Event>>>{
    const cfg = Object.assign({}, config)
    cfg.method = "GET"
    cfg.url = path
    return this.request( cfg )
  }

  post(
    path:string, data:any, config?:httpOptions
  ):Promise<HttpResponse<HttpEvent<Event>>>{
    const cfg = Object.assign({}, config)
    cfg.method = "POST"
    //cfg.data = data
    cfg.body = data
    cfg.url = path
    return this.request( cfg )
  }

  delete(
    path:string, config?:httpOptions
  ):Promise<HttpResponse<HttpEvent<Event>>>{
    const cfg = Object.assign({}, config)
    cfg.method = "DELETE"
    cfg.url = path
    return this.request( cfg )
  }

  put(
    path, data, config?
  ):Promise<HttpResponse<HttpEvent<Event>>>{
    const cfg = Object.assign({}, config)
    cfg.method = "PUT"
    //cfg.data = data
    cfg.body = data
    cfg.url = path
    return this.request( cfg )
  }

  /** all process ques with be run with navigator.onLine */
  /*monitorOnlineStatus(){
    const onOnline = ()=>{
      this.AckQue.processAllQues()
    }

    window.addEventListener("online", onOnline)
  }*/
}

/** prevent angular1 from assuming the header to send is application/json */
function upgradeConfig(
  cfg:httpOptions
):httpOptions{
  cfg.method = cfg.method || "GET"

  cfg.reportProgress = cfg.reportProgress || false

  //A trick from AngularJs to prevent header auto population
  /*const isFormData = cfg.body && FormData && cfg.body.constructor==FormData
  if(isFormData){
    const preventAutoContentType =  !cfg.headers || Object.keys(cfg.headers).filter(h=>h.search(/content-type/i)<0)
    
    if(preventAutoContentType){
      cfg.headers["Content-Type"] = undefined//"multipart/form-data;"
    }
  }*/

  //cast url variables nulls to empty-string
  if( cfg.params ){
    for(let key in cfg.params){
      if( cfg.params[key]==null ){
        cfg.params[key]=""
      }
    }
  }

  return cfg
}