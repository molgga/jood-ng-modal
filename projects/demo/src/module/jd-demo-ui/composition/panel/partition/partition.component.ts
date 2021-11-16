import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { toSelector } from '../../../config';

@Component({
  selector: toSelector('partition'),
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss'],
})
export class PartitionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() type = '';
  @Input() size = '';

  @HostBinding('class')
  get hostClass() {
    const cls: any = {};
    if (this.type) cls[`type-${this.type}`] = true;
    if (this.size) cls[`size-${this.size}`] = true;
    return cls;
  }
}
