import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

//COMPONENTS
import { AckApp } from "./components/AckApp.component"
import { AckAppTemplates } from "./components/AckAppTemplates.component"
import { AckModal } from "./components/AckModal.component"
import { AckModalLayout } from "./components/AckModalLayout.component"
import { AckCloseIcon } from "./components/AckCloseIcon.component"
import { AckArray } from "./AckArray.directive"
import { AckAggregate } from "./AckAggregate.directive"
import { AckOptions } from "./components/AckOptions.component"
import { AckOptionsModal } from "./components/AckOptionsModal.component"
import { AbsoluteOverflowX } from "./components/AbsoluteOverflowX.component"
import { ErrorWell } from "./components/ErrorWell.component"
import { AckFixedElementStage } from "./components/AckFixedElementStage.component"
import { ReaderHeaderBody, ReaderHeader, ReaderBody } from "./components/ReaderHeaderBody.component"

//DIRECTIVES
import { ScrollPastFixed } from "./components/ScrollPastFixed.component"
import { ShakeOn } from "./directives/ShakeOn.directive"
import { FocusOn } from "./directives/FocusOn.directive"
import { Init } from "./directives/Init.directive"
import { SelectOn } from "./directives/SelectOn.directive"
import { InnerHtmlModel } from "./directives/InnerHtmlModel.directive"
import { ElementSizeModel, ElementHeightModel, ElementWidthModel } from "./directives/ElementSizeModel.directive"
import { ScreenScrollHeightDiff } from "./directives/ScreenScrollHeightDiff.directive"
import { ScreenScroll } from "./directives/ScreenScroll.directive"
import { ScreenScrollModelY } from "./directives/ScreenScrollModelY.directive"
import { ScreenWidthModel } from "./directives/ScreenWidthModel.directive"
import { ScreenHeightModel } from "./directives/ScreenHeightModel.directive"
import { HtmlWidthModel } from "./directives/HtmlWidthModel.directive"
import { HtmlHeightModel } from "./directives/HtmlHeightModel.directive"
import { StatusOnlineModel } from "./directives/StatusOnlineModel.directive"
import { StatusOfflineModel } from "./directives/StatusOfflineModel.directive"

@Directive({
  selector: '[var]',
  exportAs: 'var'
}) export class VarDirective {
  @Input() var:any;
}

@Directive({selector:'[enterKey]'})
export class EnterKey{
  @Output() enterKey:EventEmitter<Event> = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      var yesNo = [13,10].indexOf(event.which||event.keyCode)>=0
      if(yesNo){
        this.enterKey.emit(event)
      }
    })
  }
}

@Directive({selector:'[escapeKey]'})
export class EscapeKey{
  @Output() escapeKey:EventEmitter<Event> = new EventEmitter()
  
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      const code = event.which||event.keyCode
      if(code==27){
        this.escapeKey.emit(event)
      }
    })
  }
}

/** Disallow keyboard access to the backspace key */
@Directive({selector:'[preventBackKey]'})
export class PreventBackKey {
  @Output() preventBackKey = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      var yesNo = [8].indexOf(event.which||event.keyCode)<0
      if(!yesNo){
        this.preventBackKey.emit(event)
        if(event.preventDefault){
          event.preventDefault()
        }
      }
      return yesNo
    })
  }
}

/** Disallow keyboard access to the enter keys */
@Directive({selector:'[preventEnterKey]'})
export class PreventEnterKey{
  @Output() preventEnterKey = new EventEmitter()
  constructor(public element:ElementRef){
    element.nativeElement.addEventListener('keydown', (event)=>{
      var yesNo = [13,10].indexOf(event.which||event.keyCode)<0
      if(!yesNo){
        this.preventEnterKey.emit(event)
        if(event.preventDefault){
          event.preventDefault()
        }
      }
      return yesNo
    })
  }
}

@Component({
  selector:'input-hint',
  template:'<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
}) export class InputHint {
  @Input() hintStyle = {'font-size':'75%','color':'#BBB'}
}


/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
@Directive({
  selector:'[formChanged]'//Also try : (formAlter) directive that watches the form "input" event
}) export class FormChanged{
  //static parameters = [[ElementRef]]
  onChange

  @Output() formChanged = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = function(event){
      this.formChanged.emit(event)
    }.bind(this)

    element.nativeElement.addEventListener('change',this.onChange)
  }

  ngOnDestroy(){
    this.element.nativeElement.removeEventListener('change',this.onChange)
  }
}

/** when ever change or input form event triggered, bindings are called */
@Directive({
  selector:'[formAlter]'
}) export class FormAlter{
  //-static parameters = [[ElementRef]]
  onChange:(Event)=>void
  @Output() formAlter = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = function(event){
      this.formAlter.emit(event)
    }.bind(this)

    element.nativeElement.addEventListener('input',this.onChange)
    element.nativeElement.addEventListener('change',this.onChange)
  }

  ngOnDestroy(){
    this.element.nativeElement.removeEventListener('change',this.onChange)
    this.element.nativeElement.removeEventListener('input',this.onChange)
  }
}


export const declarations = [
  //Directives
  Init,
  SelectOn,
  FocusOn,
  VarDirective,
  InnerHtmlModel,
  FormAlter,
  FormChanged,
  EnterKey,
  EscapeKey,
  PreventBackKey,
  PreventEnterKey,
  ScreenScrollModelY,
  ScreenWidthModel,
  ScreenHeightModel,
  ScreenScroll,
  ScrollPastFixed,
  ScreenScrollHeightDiff,
  HtmlWidthModel,
  HtmlHeightModel,
  ShakeOn,
  StatusOnlineModel,
  StatusOfflineModel,
  ElementSizeModel,
  ElementWidthModel,
  ElementHeightModel,
  InputHint,
  
  //components
  ErrorWell,
  AbsoluteOverflowX,

  //sorta ack-angular-templates
  ReaderHeaderBody,
  ReaderHeader,
  ReaderBody,

  //ack-angular-templates
  AckCloseIcon,
  AckApp,
  AckAppTemplates,
  AckOptions,
  AckOptionsModal,
  AckModal,
  AckModalLayout,
  AckArray,
  AckAggregate,
  AckFixedElementStage
]