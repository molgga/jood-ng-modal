import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoLayoutComponent } from 'projects/demo/src/app/composition/layout/demo-layout.component';
import { SharedModule } from 'projects/demo/src/app/pages/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DemoLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/page.module').then((m) => m.PageModule),
      },
      {
        path: 'getting-started',
        loadChildren: () => import('./pages/getting-started/page.module').then((m) => m.PageModule),
      },
      {
        path: 'custom-open-strategy',
        loadChildren: () => import('./pages/custom-open-strategy/page.module').then((m) => m.PageModule),
      },
      {
        path: 'pass-data-result',
        loadChildren: () => import('./pages/pass-data-result/page.module').then((m) => m.PageModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [DemoLayoutComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
