import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JdDemoUiModule } from '../../module/jd-demo-ui/jd-demo-ui.module';

@NgModule({
  imports: [JdDemoUiModule],
  exports: [CommonModule, JdDemoUiModule],
})
export class SharedModule {}
