import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { PassDataResultComponent } from './pass-data-result.component';
import { SampleContainerComponent } from './sample-container/sample-container.component';
import { SampleModalComponent } from './sample-modal/sample-modal.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: PassDataResultComponent }]), SharedModule],
  declarations: [PassDataResultComponent, SampleContainerComponent, SampleModalComponent],
})
export class PageModule {}
