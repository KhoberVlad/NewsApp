import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Output() search = new EventEmitter<string>();

  onCategory(category: string) {
    this.search.emit(category);
  }
}
