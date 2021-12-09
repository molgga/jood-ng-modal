import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRef, JdModalRefToken } from '@jood/ng-modal';

export interface SampleModalData {
  passName: string;
  passCount: number;
}

export interface SampleModalResult {
  resultName: string;
  resultCount: number;
}

@Component({
  selector: 'sample-modal',
  templateUrl: './for-demo.html',
  styleUrls: ['./for-demo.scss'],
})
export class SampleModalComponent implements OnInit {
  constructor(@Inject(JdModalRefToken) private modalRef: JdModalRef<SampleModalResult, SampleModalData>) {}

  passData: SampleModalData | null = null;
  resultName: string = '';
  resultCount: number = 0;

  ngOnInit() {
    this.passData = this.modalRef.data;
    this.resultName = `Hello ${this.passData?.passName || ''}`;
    this.resultCount = (this.passData?.passCount || 0) * 1000;
  }

  close() {
    this.modalRef.close({ resultName: this.resultName, resultCount: this.resultCount });
  }
}
