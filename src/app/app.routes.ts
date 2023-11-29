import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./Component/login-component/login/login.component'),
  },
  {
    path: 'home',
    loadComponent: () => import('./Component/home/home.component'),
  },
];
