import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBadge } from '../../directives/new-badge';
import { FadeOnHover } from '../../directives/fade-on-hover';
import { ImgFallback } from '../../directives/img-fallback';
@Component({
  selector: 'app-card',
  imports: [CommonModule, NewBadge,FadeOnHover, ImgFallback],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true
})
export class Card {
  @Input() article: any;

}
