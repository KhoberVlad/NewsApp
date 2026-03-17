import { Directive ,Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeOnHover]',
})
export class FadeOnHover {
  @Input('appFadeHover') hoverOpacity: number = 0.5;
constructor(private el: ElementRef, private renderer: Renderer2) {}
 
  @HostListener('mouseenter') onMouseEnter(){
    this.fade(this.hoverOpacity);
}
  @HostListener('mouseleave') onMouseLeave() {
    this.fade(1);

  }
    private fade(opacity: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.3s');
    this.renderer.setStyle(this.el.nativeElement, 'opacity', opacity);
  }
}
