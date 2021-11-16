import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('code-view'),
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CodeViewComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) platformId: string) {
    if (isPlatformBrowser(platformId)) {
      this.isBrowser = true;
    }
  }

  isBrowser = false;

  @Input() code = '';
  @Input() lineNumbers = false;

  ngOnInit() {}
}
