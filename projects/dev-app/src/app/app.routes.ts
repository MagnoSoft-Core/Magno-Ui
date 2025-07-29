import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./pages/users/users').then((m) => m.Users),
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
];
