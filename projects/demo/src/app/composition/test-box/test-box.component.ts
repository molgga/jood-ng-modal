import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRefToken, JdModalRef, JdModalBeforeLeaveService } from '@jood/ng-modal';

@Component({
  providers: [JdModalBeforeLeaveService],
  selector: 'test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.css'],
})
export class TestBoxComponent implements OnInit {
  constructor(@Inject(JdModalRefToken) public modalRef: JdModalRef) {}

  ngOnInit() {}

  onClose() {
    this.modalRef.close();
  }

  ngOnDestroy() {}
}
