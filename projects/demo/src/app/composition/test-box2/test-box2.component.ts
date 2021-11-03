import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRefToken, JdModalRef, JdModalBeforeLeaveService } from '@jood/ng-modal';

@Component({
  providers: [JdModalBeforeLeaveService],
  selector: 'test-box',
  templateUrl: './test-box2.component.html',
  styleUrls: ['./test-box2.component.scss'],
})
export class TestBox2Component implements OnInit {
  constructor(
    private modalBeforeLeave: JdModalBeforeLeaveService,
    @Inject(JdModalRefToken) public modalRef: JdModalRef
  ) {}

  testChangeValue = '';

  ngOnInit() {
    this.modalBeforeLeave.attach();

    this.modalBeforeLeave.onBeforeLeaveValidate(() => {
      return this.testChangeValue === '';
    });

    this.modalBeforeLeave.onBeforeLeaveConfirm(async () => {
      return new Promise((resolve) => {
        resolve(confirm(`back? ${this.modalRef.id}`));
      });
    });

    // this.modalBeforeLeave.onBeforeLeaveValidate(async () => {
    //   return new Promise((resolve) => {
    //     const testPendingDom = document.createElement('div');
    //     testPendingDom.style.position = 'fixed';
    //     testPendingDom.style.top = '0';
    //     testPendingDom.style.left = '0';
    //     testPendingDom.style.width = '100%';
    //     testPendingDom.style.height = '100%';
    //     testPendingDom.style.display = 'flex';
    //     testPendingDom.style.alignItems = 'center';
    //     testPendingDom.style.justifyContent = 'center';
    //     testPendingDom.style.color = '#fff';
    //     testPendingDom.style.fontSize = '24px';
    //     testPendingDom.style.background = 'rgba(0,0,0,0.4)';
    //     testPendingDom.style.zIndex = '99999';
    //     testPendingDom.innerText = '...pending...';
    //     document.body.appendChild(testPendingDom);
    //     setTimeout(() => {
    //       document.body.removeChild(testPendingDom);
    //       resolve(this.testChangeValue === '');
    //     }, 1000);
    //   });
    // });

    // this.modalBeforeLeave.onBeforeLeaveConfirm(async () => {
    //   return confirm(`back? ${this.modalRef.id}`);
    // });
  }

  onClose() {
    this.modalRef.close();
  }

  ngOnDestroy() {
    this.modalBeforeLeave.detach();
  }
}
