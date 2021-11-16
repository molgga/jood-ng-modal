import { Component, OnInit } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('h4'),
  templateUrl: './h4.component.html',
  styleUrls: ['./h4.component.scss'],
})
export class H4Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
