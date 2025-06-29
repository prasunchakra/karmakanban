import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/landing/pages/landing/landing').then(m => m.Landing) },
  { path: 'portfolio', loadComponent: () => import('./features/profile/pages/profile-list/profile-list').then(m => m.ProfileList) },
  { path: 'portfolio/:username', loadComponent: () => import('./features/profile/pages/portfolio/portfolio').then(m => m.Portfolio) },
  { path: 'portfolio-builder', loadComponent: () => import('./features/profile/pages/portfolio-builder/portfolio-builder').then(m => m.PortfolioBuilder) }
];
