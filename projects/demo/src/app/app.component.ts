import { Component } from '@angular/core';
import { JdModalEntryComponent, JdModalService, StackBottom, StackRight } from '@jood/ng-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '@jood/ng-modal';

  constructor(private jdModalService: JdModalService) {
    jdModalService.setUseBlockBodyScroll(true);
    jdModalService.setUseHistoryState(true);
    jdModalService.setDefaultEntryComponent(JdModalEntryComponent);
    jdModalService.init();
  }

  get myTitle() {
    return this.title;
  }

  ngOnInit() {}
}
