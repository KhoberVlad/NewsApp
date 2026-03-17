import { Component, OnInit, effect, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { NewsService } from '../../services/news';
import { IfValidImage } from '../../directives/if-valid-image';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, Card, IfValidImage],
  templateUrl: './main.html',
})
export class Main implements OnInit {
  articles: any[] = [];
  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private newsService: NewsService
  ) {
    effect(() => {
      const category = this.newsService.category();
      console.log('Category changed:', category);
      if (category) {
        this.loadCategory(category);
      }
    });
  }

  ngOnInit(): void {
    this.loadPopularNews();
  }
loadPopularNews() {
  this.http.get<any>(`${PROXY}/everything?q=world`)
    .subscribe(res => {
      this.articles = [...res.articles].slice(0, 10);
      console.log('Loaded popular news:', this.articles);
      this.cdr.detectChanges();
    });
}

loadCategory(category: string) {
  if (!category) return;
  this.http.get<any>(`${PROXY}/top-headlines?category=${category}`)
    .subscribe(res => {
      this.articles = [...res.articles].slice(0, 10);
      console.log(`Loaded ${category} news:`, this.articles);
      this.cdr.detectChanges();
    });
}

  trackByArticle(index: number, article: any) {
    return article.url;
  }
}const PROXY  = 'https://newsapp-y3k9.onrender.com';