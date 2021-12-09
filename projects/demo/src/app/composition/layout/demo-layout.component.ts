import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { delay } from '@jood/common/functional';
import { createNaviList } from '../../routes/create-navi-list';

@Component({
  selector: 'lib-demo-layout',
  templateUrl: './demo-layout.component.html',
  styleUrls: ['./demo-layout.component.scss'],
})
export class DemoLayoutComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        takeUntil(this.destroyed),
        filter((evt): evt is NavigationEnd => evt instanceof NavigationEnd)
      )
      .subscribe(this.onRouterChanged.bind(this));

    this.breakpointObserver
      .observe([this.layoutQueryNarrow])
      .pipe(takeUntil(this.destroyed))
      .subscribe(this.onLayoutQueryChanged.bind(this));
  }

  destroyed = new Subject<void>();
  routeList = createNaviList();
  routeActivateKey: string = '';
  layoutQueryNarrow = '(max-width: 1200px)';
  drawerMode: MatDrawerMode = 'side';
  drawerOpened = true;

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
      this.routeActivateKey = data.key || '';
    });
  }

  onLayoutQueryChanged(state: BreakpointState) {
    if (state.breakpoints[this.layoutQueryNarrow]) {
      this.drawerMode = 'over';
      this.drawerOpened = false;
    } else {
      this.drawerMode = 'side';
      this.drawerOpened = true;
    }
  }

  async onDrawerRouteClick() {
    if (!this.drawerOpened) {
      await delay(200);
      this.asideDrawer.close();
    }
  }

  onDrawerToggle() {
    this.asideDrawer.toggle();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
