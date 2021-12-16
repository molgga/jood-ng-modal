import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { JdModalService } from '@jood/ng-modal';
import { SampleModalComponent, SampleModalData, SampleOptions } from '../sample-modal/sample-modal.component';

@Component({
  selector: 'sample-container',
  templateUrl: './for-demo.html',
  styleUrls: ['./for-demo.scss'],
})
export class SampleContainerComponent implements OnInit {
  constructor(private modalService: JdModalService) {}

  ngOnInit() {}

  options: SampleOptions = {
    duration: 280,
    overlayClose: true,
    disableShadow: true,
    floatingMode: true,
    fullHeight: false,
  };

  ngOnDestroy() {
    this.modalService.closeAll();
  }

  onOpen() {
    this.openModal();
  }

  openModal() {
    this.modalService.open<void, SampleModalData>({
      component: SampleModalComponent,
      ...this.options,
      data: { testOptions: this.options },
    });
  }
}
