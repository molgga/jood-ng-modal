import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { OpenStrategyComponent } from './open-strategy.component';
import { SampleStrategyComponent } from './sample-strategy/sample-strategy.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: OpenStrategyComponent }]), SharedModule],
  declarations: [OpenStrategyComponent, SampleStrategyComponent],
})
export class PageModule {}
