import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterEvent, ActivatedRoute, Data } from '@angular/router';
import { filter, map } from 'rxjs/operators';

function createAsideRouteList() {
  return [
    {
      title: '',
      children: [
        {
          path: '/getting-started',
          key: 'getting-started',
          title: 'Getting Started',
          description: 'Installation, Quick start',
        },
        {
          path: '/pass-data-result',
          key: 'pass-data-result',
          title: 'Pass Data&Result',
          description: 'with GenericTypes',
        },
        {
          path: '/custom-open-strategy',
          key: 'custom-open-strategy',
          title: 'Open strategy',
          description: 'Style, Animation, StackDirection',
        },
      ],
    },
  ];
}

@Component({
  selector: 'lib-demo-layout',
  templateUrl: './demo-layout.component.html',
  styleUrls: ['./demo-layout.component.scss'],
})
export class DemoLayoutComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((evt): evt is NavigationEnd => evt instanceof NavigationEnd))
      .subscribe(this.onRouterChanged.bind(this));
  }

  routeList = createAsideRouteList();
  activateRouteKey: string = '';

  @ViewChild('asideDrawer') asideDrawer!: MatDrawer;

  @HostBinding('class')
  get classses() {
    return {
      'aside-opened': this.asideDrawer?.opened,
    };
  }

  ngOnInit() {}

  onRouterChanged(evt: NavigationEnd) {
    const observe = this.route.children?.length ? this.route.children[0].data : this.route.data;
    observe.subscribe((data) => {
      this.activateRouteKey = data.key || '';
    });
  }

  onDrawerToggle() {
    this.asideDrawer.toggle();
  }
}
