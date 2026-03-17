import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIfNew]'
})
export class ShowIfNew {

  private days = 7; 

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appShowIfNew(date: string | Date | null | undefined) {
    this.viewContainer.clear();

    if (!date) return;

    const publishDate = new Date(date);
    const now = new Date();

    const diffDays = (now.getTime() - publishDate.getTime()) / (1000 * 3600 * 24);

    if (diffDays <= this.days) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}