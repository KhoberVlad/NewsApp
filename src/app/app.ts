import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Card } from './card/card';
import { NewList } from './new-list/new-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HttpClientModule, Header, Footer, Card, NewList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('News');
  selectedCategory: string = '';

  onSearch(category: string) {
    this.selectedCategory = category;
  }
}
