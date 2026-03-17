import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfValidImage]',
  standalone: true
})
export class IfValidImage {
  @Input() set appIfValidImage(url: string) {
    this.viewContainer.clear();
    if (url && url.startsWith('http')) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
