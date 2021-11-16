import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: HomeComponent }]), SharedModule],
  declarations: [HomeComponent],
})
export class PageModule {}
