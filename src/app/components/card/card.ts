import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBadge } from '../../directives/new-badge';
@Component({
  selector: 'app-card',
  imports: [CommonModule, NewBadge],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true
})
export class Card {
    @Input() article: any;

}
