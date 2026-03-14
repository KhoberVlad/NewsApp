import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive , RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Output() search = new EventEmitter<string>();

  onCategory(category: string) {
    this.search.emit(category);
  }
}
