import { Component, OnInit } from '@angular/core';
import { toSelector } from '../../../config/index';

@Component({
  selector: toSelector('section'),
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
