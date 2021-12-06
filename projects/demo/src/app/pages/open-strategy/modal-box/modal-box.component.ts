import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRef, JdModalRefToken, JdModalService } from '@jood/ng-modal';
import { CustomOpenStrategy } from '../custom-open-strategy';

@Component({
  selector: 'lib-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss'],
})
export class ModalBoxComponent implements OnInit {
  constructor(private modalService: JdModalService, @Inject(JdModalRefToken) private modalRef: JdModalRef) {}

  ngOnInit() {}

  onOpen() {
    this.modalService.open({
      component: ModalBoxComponent,
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
