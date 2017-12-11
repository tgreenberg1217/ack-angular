import {
  Directive,
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

//import { AckModal } from "./AckModal.component"
import { AckApp } from "../providers/AckApp"
import { fxArray } from "../prefx"
import { string } from "./templates/ack-modal-layout.pug"

@Component({
  selector:'ack-modal-layout',
  template:string,
  animations:fxArray
}) export class AckModalLayout{
  @Input() isModelMode:boolean = false  
  @Output() close:EventEmitter<AckModalLayout> = new EventEmitter()
  @Input() wrapStyle:any
  @Input() wrapCellStyle:any
  @Input() allowClose:boolean = true
  @Input() backgroundColor:any
  @Input() showModel:boolean
  @Output() showModelChange:EventEmitter<boolean> = new EventEmitter()
  //@Input() template:ElementRef<any>

  constructor(
    public element:ElementRef,
    public AckApp:AckApp
  ){
    //after possible double click, close on outside content click
    setTimeout(()=>this.clickListenForClose(), 400)
  }

  clickListenForClose(){
    this.element.nativeElement.addEventListener('click', event=>{
      if(!this.allowClose)return false

      const eTar = event.srcElement || event.toElement || event.target
      const isDirectChild = eTar == this.element.nativeElement.children[0] || eTar == this.element.nativeElement.children[0].children[0]
      
      if( isDirectChild ){
        this.fireClose()
      }

      return true
    })
  }

  ngOnInit(){
    setTimeout(()=>{
      //this.refChange.emit( this )
      if( this.isModelMode || (this.isModelMode==null && this.showModelChange.observers.length) ){
        this.isModelMode = true
      }

      this.backgroundColor = this.backgroundColor || 'rgba(255,255,255,0.95)'
      //this.backgroundColorChange.emit(this.backgroundColor)
    }, 0)
  }

  fireClose(){
    this.showModelChange.emit( this.showModel=false )
    this.close.emit(this)
  }
}