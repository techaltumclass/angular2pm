import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChnageclass]'
})
export class ChnageclassDirective {

  constructor(private readonly el: ElementRef,
    private readonly renderer: Renderer2) {
    console.log(el.nativeElement);

    const element = el.nativeElement.querySelector('changetext');
   
  }

  @HostListener('mouseenter') onMouseClick() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'pink');
  }

  onClick() {
   
  }

}
