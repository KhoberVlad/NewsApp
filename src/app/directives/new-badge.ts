import { Directive, Input, OnInit , ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewBadge]',
  standalone: true
})
export class NewBadge implements OnInit {
  @Input("appNewBadge") publishedAt! : Date;
 constructor(private el: ElementRef) {}

  ngOnInit() {
     if (!this.publishedAt) return;

    const publishedDate = new Date(this.publishedAt);
    const now = new Date();
    const diffDays = (now.getTime() - publishedDate.getTime()) / (1000*60*60*24);
    if(diffDays <= 7){
          const element = this.el.nativeElement as HTMLElement;
          const badge = document.createElement("h2");
          badge.style.color = "red";
          badge.style.padding = "0 0 0 10px";
          badge.innerHTML = "NEW:";
          badge.style.fontSize = "1.5em";
          badge.style.display = "inline-block";
          element.prepend(badge);
    }
  }
}
