import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRef, JdModalRefToken, JdModalService } from '@jood/ng-modal';
import { getSampleStrategy } from '../getSampleStrategy';

@Component({
  selector: 'lib-sample-strategy',
  templateUrl: './sample-strategy.component.html',
  styleUrls: ['./sample-strategy.component.scss'],
})
export class SampleStrategyComponent implements OnInit {
  constructor(private modalService: JdModalService, @Inject(JdModalRefToken) private modalRef: JdModalRef) {}

  ngOnInit() {}

  onNestedOpen() {
    const sampleStrategy = this.modalRef.data?.sampleStrategy;
    const sampleOptions = getSampleStrategy(sampleStrategy);
    this.modalService.open({
      component: SampleStrategyComponent,
      overlayClose: true,
      floatingMode: true,
      data: { sampleStrategy },
      ...sampleOptions,
    });
  }

  onClose() {
    this.modalRef.close();
  }
}
