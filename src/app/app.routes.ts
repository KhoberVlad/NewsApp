import { Routes } from '@angular/router';
import { AboutUs } from './components/about-us/about-us';
import { Contact } from './components/contact/contact';
import { Main } from './components/main/main';

export const routes: Routes = [
  { path: '',  redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: Main },
  { path: 'about-us', component: AboutUs },
  { path: 'contact', component: Contact }
];
