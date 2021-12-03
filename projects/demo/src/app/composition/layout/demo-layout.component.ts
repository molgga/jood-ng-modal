import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'lib-demo-layout',
  templateUrl: './demo-layout.component.html',
  styleUrls: ['./demo-layout.component.scss'],
})
export class DemoLayoutComponent implements OnInit {
  constructor() {}

  @ViewChild('asideDrawer') asideDrawer!: MatDrawer;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.asideDrawer);
  }

  onDrawerToggle() {
    this.asideDrawer.toggle();
  }
}
