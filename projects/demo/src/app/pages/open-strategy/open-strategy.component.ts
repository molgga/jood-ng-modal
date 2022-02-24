import { Component, OnInit } from '@angular/core';
import { JdModalService } from '@jood/ng-modal';
import { getSampleStrategy } from './getSampleStrategy';
import { SampleStrategyComponent } from './sample-strategy/sample-strategy.component';
import { CustomOpenStrategy } from './custom-open-strategy';
import { CustomOpenModalComponent } from './custom-open-modal/custom-open-modal.component';
import { FullBodyStrategy } from './full-body-strategy';
import { FullBodyModalComponent } from './full-body-modal/full-body-modal.component';

@Component({
  selector: 'lib-open-strategy',
  templateUrl: './open-strategy.component.html',
  styleUrls: ['./open-strategy.component.scss'],
})
export class OpenStrategyComponent implements OnInit {
  constructor(private modalService: JdModalService) {}

  ngOnInit() {}

  codeCustomOpenStrategy = require('!raw-loader!./code/codeCustomOpenStrategy.txt').default;
  codeDemoComponent = require('!raw-loader!./code/codeDemoComponent.txt').default;
  codeModalBoxComponent = require('!raw-loader!./code/codeModalBoxComponent.txt').default;
  codeEntryHtml = require('!raw-loader!./code/codeEntryHtml.txt').default;

  onOpenSampleStrategy(sampleStrategy: string) {
    const sampleOptions = getSampleStrategy(sampleStrategy);
    this.modalService.open({
      component: SampleStrategyComponent,
      overlayClose: true,
      floatingMode: true,
      data: { sampleStrategy },
      ...sampleOptions,
    });
  }

  onOpenCustomOpenStrategy() {
    this.modalService.open({
      component: CustomOpenModalComponent,
      openStrategy: new CustomOpenStrategy(),
      duration: 360,
      overlayClose: true,
      floatingMode: true,
    });
  }

  onOpenFullBodyStrategy() {
    this.modalService.open({
      component: FullBodyModalComponent,
      openStrategy: new FullBodyStrategy(),
      duration: 360,
      overlayClose: true,
      floatingMode: false,
    });
  }
}
