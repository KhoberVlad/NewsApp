import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NewsService } from '../../services/news';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(private newsService: NewsService) {}

  onCategory(category: string) {
    this.newsService.setCategory(category);
    console.log('Footer category selected:', category);
  }
}