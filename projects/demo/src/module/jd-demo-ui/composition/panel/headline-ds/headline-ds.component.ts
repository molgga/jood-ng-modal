import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('headline-ds'),
  templateUrl: './headline-ds.component.html',
  styleUrls: ['./headline-ds.component.scss'],
})
export class HeadlineDsComponent implements OnInit {
  constructor() {}

  @Input() title = '';
  @Input() description = '';
  @Input() src = '';
  @Input() height = '400px';
  @Input() color = '';
  @Input() disableDim = false;
  @Input() disableGradiant = false;

  @HostBinding('style')
  get hostStyle() {
    const styles: any = {};
    if (this.height) styles.minHeight = this.height;
    return styles;
  }

  get backgroundStyle() {
    const styles: any = {};
    if (this.src) styles.backgroundImage = `url(${this.src})`;
    if (this.color) styles.backgroundColor = this.color;
    return styles;
  }

  @HostBinding('class')
  get hostClasses() {
    return {
      'disable-dim': this.disableDim,
      'disable-gradiant': this.disableGradiant,
    };
  }

  ngOnInit() {}
}
