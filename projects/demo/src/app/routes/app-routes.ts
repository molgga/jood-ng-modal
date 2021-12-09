import { Routes } from '@angular/router';
import { DemoLayoutComponent } from '../composition/layout/demo-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoLayoutComponent,
    children: [
      {
        path: '',
        // loadChildren: () => import('./pages/home/page.module').then((m) => m.PageModule),
        loadChildren: () => import('../pages/getting-started/page.module').then((m) => m.PageModule),
      },
      {
        path: 'getting-started',
        data: { key: 'getting-started' },
        loadChildren: () => import('../pages/getting-started/page.module').then((m) => m.PageModule),
      },
      {
        path: 'open-strategy',
        data: { key: 'open-strategy' },
        loadChildren: () => import('../pages/open-strategy/page.module').then((m) => m.PageModule),
      },
      {
        path: 'pass-data-result',
        data: { key: 'pass-data-result' },
        loadChildren: () => import('../pages/pass-data-result/page.module').then((m) => m.PageModule),
      },
      {
        path: 'options',
        data: { key: 'options' },
        loadChildren: () => import('../pages/options/page.module').then((m) => m.PageModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
