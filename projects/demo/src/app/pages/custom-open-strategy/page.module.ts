import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { CustomOpenStrategyComponent } from './custom-open-strategy.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: CustomOpenStrategyComponent }]), SharedModule],
  declarations: [CustomOpenStrategyComponent],
})
export class PageModule {}