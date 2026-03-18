import { Routes } from '@angular/router';
import { AboutUs } from './components/about-us/about-us';
import { Contact } from './components/contact/contact';
import { Main } from './components/main/main';
import { PolicyPrivacy } from './components/policy-privacy/policy-privacy';
import { LoginUpForm } from './components/login-up-form/login-up-form';
import { SignUpForm } from './components/sign-up-form/sign-up-form';
export const routes: Routes = [
  { path: '',  redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: Main },
  { path: 'about-us', component: AboutUs },
  { path: 'contact', component: Contact },
  { path: 'privacy', component: PolicyPrivacy },
  { path: 'sign-up', component: SignUpForm },
  { path: 'login-up', component: LoginUpForm }
];
