import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { GettingStartedComponent } from './getting-started.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: GettingStartedComponent }]), SharedModule],
  declarations: [GettingStartedComponent],
})
export class PageModule {}
