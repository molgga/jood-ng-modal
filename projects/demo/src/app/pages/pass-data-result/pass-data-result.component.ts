import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-pass-data-result',
  templateUrl: './pass-data-result.component.html',
  styleUrls: ['./pass-data-result.component.scss'],
})
export class PassDataResultComponent implements OnInit {
  constructor() {}

  codeSampleContainerTs = require('!raw-loader!./code/codeSampleContainer.ts.txt').default;
  codeSampleContainerHtml = require('!raw-loader!./code/codeSampleContainer.html.txt').default;
  codeSampleContainerScss = require('!raw-loader!./code/codeSampleContainer.scss.txt').default;
  codeSampleModalTs = require('!raw-loader!./code/codeSampleModal.ts.txt').default;
  codeSampleModalHtml = require('!raw-loader!./code/codeSampleModal.html.txt').default;
  codeSampleModalScss = require('!raw-loader!./code/codeSampleModal.scss.txt').default;

  ngOnInit() {}
}
