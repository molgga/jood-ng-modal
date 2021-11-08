import { Component } from '@angular/core';
import { JdModalService, StackBottom, StackNormal, StackRight } from '@jood/ng-modal';
import { TestBoxComponent } from './composition/test-box/test-box.component';
import { TestBox2Component } from './composition/test-box2/test-box2.component';
import { TestBox3Component } from './composition/test-box3/test-box3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  constructor(private jdModalService: JdModalService) {
    jdModalService.setUseBlockBodyScroll(true);
    jdModalService.setUseHistoryState(true);
  }

  get myTitle() {
    return this.title;
  }

  onClick1() {
    this.jdModalService.open({
      component: TestBoxComponent,
      overlayClose: true,
      disableShadow: true,
      floatingMode: true,
    });
  }

  onClick2() {
    this.jdModalService.open({
      component: TestBox2Component,
      overlayClose: true,
      floatingMode: true,
      openStrategy: new StackRight(),
    });
  }

  onClick3() {
    this.jdModalService.open({
      component: TestBox3Component,
      overlayClose: true,
      floatingMode: true,
      openStrategy: new StackBottom(),
    });
  }

  ngOnInit() {}
}
