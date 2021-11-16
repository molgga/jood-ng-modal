import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { toSelector } from '../../../config/index';

@Component({
  selector: toSelector('code-collapse'),
  templateUrl: './code-collapse.component.html',
  styleUrls: ['./code-collapse.component.scss'],
})
export class CodeCollapseComponent implements OnInit {
  constructor() {}

  isExpanded = false;

  @Input() initExpand = true;

  @HostBinding('class')
  get hostClass() {
    return {
      'is-expanded': this.isExpanded,
    };
  }

  onToggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.isExpanded = this.initExpand;
  }
}
