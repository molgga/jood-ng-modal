import { Component, ViewEncapsulation } from '@angular/core';
import { toSelector } from '../../../config/index';

@Component({
  selector: toSelector('p'),
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PComponent {}
