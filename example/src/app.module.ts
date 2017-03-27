export const strapTime = Date.now()

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { RouteWatcher } from "ack-angular/RouteWatcher.class"
import { RouteDocWatcher } from "ack-angular/RouteDocWatcher.component"
import * as pipes from "ack-angular/pipes"
import * as ackComponents from "ack-angular/components"

import * as packJson from "ack-angular/package.json"

import * as ackFx from 'ack-angular-fx'
import { fxArray } from './prefx'

import { Ng2PageScrollModule } from 'ng2-page-scroll';

import {string as ackAppStageTemplate} from './templates/ack-app-stage.pug'
import {string as animationExamples} from './templates/animation-examples.pug'
import {string as overviewExamples} from './templates/overview-examples.pug'
import {string as componentsExamples} from './templates/components-examples.pug'
import {string as pipesExamples} from './templates/pipes-examples.pug'
import {string as servicesExamples} from './templates/services-examples.pug'

import * as states from "./states.object";
import { routing } from "./route-test"
//import { declarations as states,routing } from "./route-test"


@Component({
  selector: 'ack-app-stage'
  ,template: ackAppStageTemplate
  ,animations:fxArray
}) export class AppComponent {
  public version = packJson['version']

  ngAfterViewInit(){
    console.log('Total Wire Time:', Date.now()-strapTime+'ms')
    if( window['startAckTime'] ){
      console.log('Total Script Load Time:', Date.now()-window['startAckTime']+'ms')
    }
  }
}

@Component({
  selector: 'animation-examples'
  ,template: animationExamples
  ,animations:fxArray
}) export class AnimationExamples {
  public list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
  public delayArray = ackFx.delayArray
}

@Component({
  selector: 'overview-examples'
  ,template: overviewExamples
}) export class OverviewExamples {}

@Component({
  selector: 'components-examples'
  ,template: componentsExamples
  ,animations:fxArray
}) export class ComponentsExamples {}

@Component({
  selector: 'pipes-examples'
  ,template: pipesExamples
}) export class PipesExamples {}

@Component({
  selector: 'services-examples'
  ,template: servicesExamples
}) export class ServicesExamples {}

export const declarations = [
  AppComponent,
  AppComponent,
  RouteDocWatcher,
  AnimationExamples,
  OverviewExamples,
  ComponentsExamples,
  PipesExamples,
  ServicesExamples,
  ...pipes.declarations,
  ...states.declarations,
  ...ackComponents.declarations
]

//const fxLoadTime = Date.now()
//ackFx.upgradeComponents(declarations, fxArray)
//console.log('FX Load Time', Date.now()-fxLoadTime+'ms')

@NgModule({
  imports:[
    BrowserModule
    ,BrowserAnimationsModule
    ,FormsModule
    //,UIRouterModule.forRoot(routeConfig)
    //,routing
    //,Ng2PageScrollModule.forRoot()
  ],
  declarations: declarations,
  providers:[RouteWatcher],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class AppModule {}

console.log('Ng Define Time', Date.now()-strapTime+'ms')