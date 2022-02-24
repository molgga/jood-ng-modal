import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRef, JdModalRefToken, JdModalService } from '@jood/ng-modal';
import { CustomOpenStrategy } from '../custom-open-strategy';

@Component({
  selector: 'lib-custom-open-modal',
  templateUrl: './custom-open-modal.component.html',
  styleUrls: ['./custom-open-modal.component.scss'],
})
export class CustomOpenModalComponent implements OnInit {
  constructor(private modalService: JdModalService, @Inject(JdModalRefToken) private modalRef: JdModalRef) {}

  ngOnInit() {}

  onOpen() {
    this.modalService.open({
      component: CustomOpenModalComponent,
      openStrategy: new CustomOpenStrategy(),
      duration: 360,
      overlayClose: true,
      floatingMode: true,
    });
  }

  onClose() {
    this.modalRef.close();
  }
}
