import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { OpenStrategyComponent } from './open-strategy.component';
import { SampleStrategyComponent } from './sample-strategy/sample-strategy.component';
import { CustomOpenModalComponent } from './custom-open-modal/custom-open-modal.component';
import { FullBodyModalComponent } from './full-body-modal/full-body-modal.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: OpenStrategyComponent }]), SharedModule],
  declarations: [OpenStrategyComponent, SampleStrategyComponent, CustomOpenModalComponent, FullBodyModalComponent],
})
export class PageModule {}
