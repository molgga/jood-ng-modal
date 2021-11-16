import { Component, OnInit } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('h1'),
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.scss'],
})
export class H1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
