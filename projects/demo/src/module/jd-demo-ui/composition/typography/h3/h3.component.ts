import { Component, OnInit } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('h3'),
  templateUrl: './h3.component.html',
  styleUrls: ['./h3.component.scss'],
})
export class H3Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
