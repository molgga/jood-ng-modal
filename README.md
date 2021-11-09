# @jood/ng-modal

@TODO

* app.module.ts
```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { JdModalModule } from '@jood/ng-modal';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, JdModalModule], // 모듈 추가
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

* app.component.ts
```typescript
// app.components.ts
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JdModalEntryComponent, JdModalService, StackBottom, StackRight } from '@jood/ng-modal';
import { TestBoxComponent } from './composition/test-box/test-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  listener: Subscription | null;

  constructor(private jdModalService: JdModalService) { // 서비스 초기 구성
    jdModalService.setUseBlockBodyScroll(true);
    jdModalService.setUseHistoryState(true);
    jdModalService.setDefaultEntryComponent(JdModalEntryComponent);
  }

  onClick() {
    if (this.listener) {
      this.listener.unsubscribe();
      this.listener = null;
    }
    const modalRef = this.jdModalService.open({ // 모달 열기
      component: TestBoxComponent,
      overlayClose: true,
      disableShadow: true,
      floatingMode: true,
    });
    this.listener = modalRef.observeClosed().subscribe(result => {
      console.log(result); // TestBoxComponent close result
    });
  }
  ngOnInit() {}
}
```

* app.component.html
```html
<button (click)="onClick()">onClick</button>

<jd-modal-provider></jd-modal-provider> <!-- 프로바이더 -->
```

* test-box.component.ts
```typescript
// test-box.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { JdModalRefToken, JdModalRef } from '@jood/ng-modal';

@Component({
  providers: [],
  selector: 'test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.scss'],
})
export class TestBoxComponent implements OnInit {
  constructor(@Inject(JdModalRefToken) public modalRef: JdModalRef) {}

  ngOnInit() {}

  onClose() {
    this.modalRef.close({ hello: 'result' });
  }
}

```

***

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.
