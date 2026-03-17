import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallback {

  @Input() appImgFallback: string = 'images.jpg';

  constructor(private el: ElementRef) {}

  @HostListener('error')
  onError() {
    this.el.nativeElement.src = this.appImgFallback;
  }
}