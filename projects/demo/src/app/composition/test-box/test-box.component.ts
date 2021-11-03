import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRefToken, JdModalRef } from '@jood/ng-modal';

@Component({
  providers: [],
  selector: 'test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.scss'],
})
export class TestBoxComponent implements OnInit {
  constructor(@Inject(JdModalRefToken) public modalRef: JdModalRef) {}

  get test1() {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ foo');
    return 'foo';
  }

  ngOnInit() {
    // setInterval(() => console.log('tick'), 1000);
  }

  onClose() {
    this.modalRef.close();
  }

  ngOnDestroy() {}
}
