import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent implements OnInit {
  constructor() {}

  codeAppModule = require('!raw-loader!./code/codeAppModule.txt').default;
  codeAppComponent = require('!raw-loader!./code/codeAppComponent.txt').default;
  codeSampleModal = require('!raw-loader!./code/codeSampleModal.txt').default;

  ngOnInit() {}
}
