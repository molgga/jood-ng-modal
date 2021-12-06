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
          title: '설치 및 시작',
          description: '개발 목표부터 간단하게 시작하기',
        },
        {
          path: '/pass-data-result',
          key: 'pass-data-result',
          title: '데이터와 결과 주고받기',
          description: '데이터를 주고 받는 방법과 Generic 타입까지',
        },
        {
          path: '/open-strategy',
          key: 'open-strategy',
          title: 'Open Strategy',
          description: '모달이 열리는 방식 지정과 이를 확장하는 방법',
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
