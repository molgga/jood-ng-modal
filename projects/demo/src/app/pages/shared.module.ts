import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JdDemoUiModule } from '../../module/jd-demo-ui/jd-demo-ui.module';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [],
  exports: [CommonModule, FormsModule, JdDemoUiModule, MaterialModule],
})
export class SharedModule {}
