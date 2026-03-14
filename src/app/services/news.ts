import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NewsService {
  category = signal<string>('');

  setCategory(category: string) {
    this.category.set(category);
  }
}