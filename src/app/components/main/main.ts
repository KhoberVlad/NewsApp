import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './main.html',
})
export class Main implements OnInit {
  articles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPopularNews();
  }
@Input() set category(value: string) {
  if (value) this.loadCategory(value);
}
  loadPopularNews() {
    this.http.get<any>(
      'https://newsapi.org/v2/everything?q=world&sortBy=popularity&apiKey=3bf006d9547742b791df11f63f810b2f'
    ).subscribe(res => {
      this.articles = [...res.articles].slice(0, 10);
        console.log('Loaded popular news:', this.articles);
    });
  }

  loadCategory(category: string) {
    if (!category) return;

    this.http.get<any>(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3bf006d9547742b791df11f63f810b2f`
    ).subscribe(res => {
      this.articles = [...res.articles].slice(0, 10);
       console.log(`Loaded ${category} news:`, this.articles);
    });
  }

  trackByArticle(index: number, article: any) {
    return article.url; 
  }
}