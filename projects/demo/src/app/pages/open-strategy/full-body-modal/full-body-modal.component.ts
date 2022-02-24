import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRef, JdModalRefToken, JdModalService } from '@jood/ng-modal';
import { FullBodyStrategy } from '../full-body-strategy';

@Component({
  selector: 'lib-full-body-modal',
  templateUrl: './full-body-modal.component.html',
  styleUrls: ['./full-body-modal.component.scss'],
})
export class FullBodyModalComponent implements OnInit {
  constructor(private modalService: JdModalService, @Inject(JdModalRefToken) private modalRef: JdModalRef) {}

  ngOnInit() {}

  onOpen() {
    this.modalService.open({
      component: FullBodyModalComponent,
      openStrategy: new FullBodyStrategy(),
      duration: 360,
      overlayClose: true,
      floatingMode: false,
    });
  }

  onClose() {
    this.modalRef.close();
  }
}
