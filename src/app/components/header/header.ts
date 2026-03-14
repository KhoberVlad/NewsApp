import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NewsService } from '../../services/news';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchQuery: string = '';

  constructor(private newsService: NewsService) {}

  onSearch() {
    this.newsService.setCategory(this.searchQuery);
  }

  onCategory(category: string) {
    this.newsService.setCategory(category);
    console.log('Category selected:', category);
  }
}