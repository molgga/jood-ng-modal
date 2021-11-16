import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('code-box'),
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CodeBoxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
