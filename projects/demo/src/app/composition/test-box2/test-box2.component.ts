import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRefToken, JdModalRef, JdModalBeforeLeaveService } from '@jood/ng-modal';

@Component({
  providers: [JdModalBeforeLeaveService],
  selector: 'test-box',
  templateUrl: './test-box2.component.html',
  styleUrls: ['./test-box2.component.css'],
})
export class TestBox2Component implements OnInit {
  constructor(
    private modalBeforeLeave: JdModalBeforeLeaveService,
    @Inject(JdModalRefToken) public modalRef: JdModalRef
  ) {}

  ngOnInit() {
    this.modalBeforeLeave.setBeforeLeaveConfirm(async () => {
      return new Promise((resolve) => {
        resolve(confirm(`back? ${this.modalRef.id}`));
      });
    });

    this.modalBeforeLeave.setBeforeLeaveValidate(() => {
      return false;
    });

    this.modalBeforeLeave.attach();
  }

  onClose() {
    this.modalRef.close();
  }

  ngOnDestroy() {
    this.modalBeforeLeave.detach();
  }
}
