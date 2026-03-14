import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchQuery: string = '';

  @Output() search = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {}

  onSearch() {
    this.search.emit(this.searchQuery);
  }
  onCategory(category: string) {  
    this.search.emit(category);
  }
}