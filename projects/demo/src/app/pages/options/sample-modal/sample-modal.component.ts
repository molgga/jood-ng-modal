import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRef, JdModalRefToken, JdModalService, ModalData } from '@jood/ng-modal';

export type SampleOptions = Omit<ModalData, 'component' | 'entryComponent' | 'data'>;

export interface SampleModalData {
  testOptions: SampleOptions;
}

@Component({
  selector: 'sample-modal',
  templateUrl: './for-demo.html',
  styleUrls: ['./for-demo.scss'],
})
export class SampleModalComponent implements OnInit {
  constructor(
    private modalService: JdModalService,
    @Inject(JdModalRefToken) private modalRef: JdModalRef<void, SampleModalData>
  ) {
    this.testOptions = this.modalRef.data?.testOptions || {};
  }

  testOptions!: SampleOptions;

  ngOnInit() {}

  openModal() {
    const testOptions = this.modalRef.data?.testOptions || {};
    this.modalService.open<void, SampleModalData>({
      component: SampleModalComponent,
      ...this.testOptions,
      data: { testOptions: this.testOptions },
    });
  }

  closeModal() {
    this.modalRef.close();
  }
}
