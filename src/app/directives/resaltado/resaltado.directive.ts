import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log('directiva llamada')

  }
  @Input('appResaltado') newColor!:string;

  @HostListener('mouseenter')mouseEntro(){
    console.log(this.newColor)
    this.resaltar(this.newColor||'yellow')
  //  this.el.nativeElement.style.backgroundColor="yellow"
  }
  @HostListener('mouseleave')mouseSalio(){
    this.resaltar('white')
    // this.el.nativeElement.style.backgroundColor=null
   }
   private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor=color;
   }
}
