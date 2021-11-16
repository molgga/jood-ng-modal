import { Component, Input, OnInit } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('headline'),
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {
  constructor() {}

  @Input() title = '';
  @Input() description = '';

  ngOnInit() {}
}
