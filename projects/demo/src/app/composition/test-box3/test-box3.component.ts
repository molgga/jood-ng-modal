import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { JdModalRefToken, JdModalRef, JdModalPullDownCloseService } from '@jood/ng-modal';

@Component({
  providers: [JdModalPullDownCloseService],
  selector: 'test-box3',
  templateUrl: './test-box3.component.html',
  styleUrls: ['./test-box3.component.scss'],
})
export class TestBox3Component implements OnInit {
  constructor(
    private modalPullDown: JdModalPullDownCloseService,
    @Inject(JdModalRefToken) public modalRef: JdModalRef
  ) {}

  @ViewChild('refScrollElement') refScrollElement!: ElementRef<HTMLElement>;

  testScrollBoxList = [0];

  ngOnInit() {
    const count = Math.round(Math.random() * 10) + 2;
    this.testScrollBoxList = Array(count)
      .fill(0)
      .map((x, i) => i);
  }

  ngAfterViewInit() {
    this.modalPullDown.setConfig({
      dragResistance: 1.2,
      triggerReleaseGap: 800,
      triggerReleaseMinY: 100,
    });
    if (this.refScrollElement.nativeElement) {
      this.modalPullDown.setScrollPanelElement(this.refScrollElement.nativeElement);
    }
    this.modalPullDown.init();
  }

  onClose() {
    this.modalRef.close();
  }

  ngOnDestroy() {
    this.modalPullDown.destroy();
  }
}
