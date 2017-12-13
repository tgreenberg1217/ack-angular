import {
  Directive,
  Input,
  Output,
  EventEmitter
} from "@angular/core"

@Directive({
  selector: '[screenScrollModelY]'
}) export class ScreenScrollModelY{
  onScroll

  @Input() screenScrollModelY
  @Output() screenScrollModelYChange = new EventEmitter()
  
  constructor(){
    this.onScroll = function(){
      this.screenScrollModelY = window['pageYOffset']
      this.screenScrollModelYChange.emit(this.screenScrollModelY)
    }.bind(this)
    this.onScroll()
    window.addEventListener("scroll", this.onScroll)
  }

  ngOnInit(){
    setTimeout(()=>this.onScroll(), 0)//two way bind often needs init override
  }

  ngOnDestroy(){
    window.removeEventListener("scroll", this.onScroll)
  }
}