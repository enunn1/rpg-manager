import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  },

  {
    path: 'campaigns',
    loadChildren: () =>
      import('./features/campaigns/campaigns.routes').then(m => m.CAMPAIGNS_ROUTES)
  },

  {
    path: 'characters',
    loadChildren: () =>
      import('./features/characters/characters.routes').then(m => m.CHARACTER_ROUTES)
  },

  {
    path: 'sessions',
    loadChildren: () =>
      import('./features/sessions/sessions.routes').then(m => m.SESSION_ROUTES)
  },

  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found')
        .then(c => c.NotFoundComponent)
  }
];
