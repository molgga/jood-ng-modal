import { Component, OnInit } from '@angular/core';
import { JdModalService } from '@jood/ng-modal';
import { CustomOpenStrategy } from './custom-open-strategy';
import { ModalBoxComponent } from './modal-box.component';

@Component({
  selector: 'lib-custom-open-strategy',
  templateUrl: './custom-open-strategy.component.html',
  styleUrls: ['./custom-open-strategy.component.scss'],
})
export class CustomOpenStrategyComponent implements OnInit {
  constructor(private modalService: JdModalService) {}

  ngOnInit() {}

  codeCustomOpenStrategy = require('!raw-loader!./code/codeCustomOpenStrategy.txt').default;
  codeDemoComponent = require('!raw-loader!./code/codeDemoComponent.txt').default;
  codeModalBoxComponent = require('!raw-loader!./code/codeModalBoxComponent.txt').default;

  onOpen() {
    this.modalService.open({
      component: ModalBoxComponent,
      openStrategy: new CustomOpenStrategy(),
      duration: 360,
      overlayClose: true,
      floatingMode: true,
    });
  }
}
