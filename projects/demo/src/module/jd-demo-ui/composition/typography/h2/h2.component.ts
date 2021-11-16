import { Component, OnInit } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('h2'),
  templateUrl: './h2.component.html',
  styleUrls: ['./h2.component.scss'],
})
export class H2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
