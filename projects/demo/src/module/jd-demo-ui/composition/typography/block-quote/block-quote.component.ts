import { Component, OnInit } from '@angular/core';
import { toSelector } from '../../../config/index';

@Component({
  selector: toSelector('block-quote'),
  templateUrl: './block-quote.component.html',
  styleUrls: ['./block-quote.component.scss'],
})
export class BlockQuoteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
