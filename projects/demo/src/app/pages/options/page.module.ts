import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { OptionsComponent } from './options.component';
import { SampleContainerComponent } from './sample-container/sample-container.component';
import { SampleModalComponent } from './sample-modal/sample-modal.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: OptionsComponent }]), SharedModule],
  declarations: [OptionsComponent, SampleContainerComponent, SampleModalComponent],
})
export class PageModule {}
