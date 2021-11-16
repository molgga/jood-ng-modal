import { Component, OnInit } from '@angular/core';
import { toSelector } from '../../../config';

@Component({
  selector: toSelector('hsplit'),
  templateUrl: './hsplit.component.html',
  styleUrls: ['./hsplit.component.scss'],
})
export class HsplitComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
