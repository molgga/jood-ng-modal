import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { toSelector } from '../../../config/index';

@Component({
  selector: toSelector('image-box'),
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss'],
})
export class ImageBoxComponent implements OnInit {
  constructor() {}

  @Input() src = '';
  @Input() width = 'auto';
  @Input() height = 'auto';
  @Input() alt = '';
  @Input() description = '';

  @Input()
  @HostBinding('class.is-border')
  isBorder = false;

  @Input() imageAlign = 'center';
  @HostBinding('class')
  get classAlign() {
    return this.imageAlign ? `align-${this.imageAlign}` : '';
  }

  ngOnInit() {}
}
