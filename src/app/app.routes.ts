import { Routes } from '@angular/router';
import { Portfolio } from './features/profile/pages/portfolio/portfolio';
import { ProfileListPublic } from './features/profile/pages/profile-list-public/profile-list-public';

export const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfileListPublic },
  { path: 'portfolio/:username', component: Portfolio }
];
