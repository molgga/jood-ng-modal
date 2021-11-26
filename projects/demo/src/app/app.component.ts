import { Component } from '@angular/core';
import { JdModalEntryComponent, JdModalService, StackBottom, StackRight } from '@jood/ng-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '@jood/ng-modal';

  constructor(private modalService: JdModalService) {
    this.modalService.setUseBlockBodyScroll(true);
    this.modalService.setUseHistoryState(true);
    this.modalService.setDefaultEntryComponent(JdModalEntryComponent);
    this.modalService.init();
  }

  get myTitle() {
    return this.title;
  }

  ngOnInit() {}
}
