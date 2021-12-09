import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './pages/shared.module';
import { routes } from './routes/app-routes';
import { DemoLayoutComponent } from './composition/layout/demo-layout.component';

@NgModule({
  declarations: [DemoLayoutComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
