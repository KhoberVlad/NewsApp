import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Card } from './components/card/card';
import { Contact } from './components/contact/contact';
import { AboutUs } from './components/about-us/about-us';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, HttpClientModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('News');
}