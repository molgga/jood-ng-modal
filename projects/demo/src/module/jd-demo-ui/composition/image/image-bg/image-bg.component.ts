import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { toSelector } from '../../../config/index';

@Component({
  selector: toSelector('image-bg'),
  templateUrl: './image-bg.component.html',
  styleUrls: ['./image-bg.component.scss'],
})
export class ImageBgComponent implements OnInit {
  constructor() {}

  @Input() src = '';
  @Input() height = '';

  @HostBinding('style')
  get hostStyle() {
    const styles: any = {};
    if (this.height) styles.height = this.height;
    if (this.src) styles.backgroundImage = `url(${this.src})`;
    return styles;
  }

  ngOnInit() {}
}
