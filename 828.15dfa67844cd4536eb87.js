"use strict";(self.webpackChunkjood_ng_modal=self.webpackChunkjood_ng_modal||[]).push([[828],{2828:(a,e,n)=>{n.r(e),n.d(e,{PageModule:()=>v});var d=n(3952),r=n(6598),o=n(3018),c=n(1803),s=n(6552),C=n(8786),i=n(5965),g=n(6646),A=n(9651),p=n(5747);let M=(()=>{class t{constructor(){this.codeAppModule=n(4944).Z,this.codeAppComponent=n(5244).Z,this.codeSampleModal=n(8932).Z}ngOnInit(){}}return t.\u0275fac=function(m){return new(m||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["lib-getting-started"]],decls:22,vars:3,consts:[["code","$ npm install @jood/ng-modal"],[1,"jdmi-p-highlight"],["animationDuration","0ms","color","primary","backgroundColor","primary"],["label","app.module.ts"],[3,"code"],["label","app.component.ts"],["label","sample-modal.component.ts"]],template:function(m,u){1&m&&(o.TgZ(0,"jdmi-section"),o.TgZ(1,"jdmi-h2"),o._uU(2,"Installation"),o.qZA(),o._UZ(3,"jdmi-code-view",0),o.qZA(),o.TgZ(4,"jdmi-section"),o.TgZ(5,"jdmi-h3"),o._uU(6,"Quick start"),o.qZA(),o.TgZ(7,"jdmi-p"),o._uU(8," module \uc5d0\uc11c "),o.TgZ(9,"mark",1),o._uU(10,"JdModalModule"),o.qZA(),o._uU(11,"\uc744 imports \uc5d0 \ucd94\uac00\ud558\uace0, \uba87\uac00\uc9c0 \ucd08\uae30 \uc124\uc815\uc744 \ud558\ub294\uac83\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),o._UZ(12,"br"),o._uU(13,"\uc0ac\uc6a9\ubc95\uc744 \uc775\ud788\uae30 \uc804\uc5d0 \uc544\ub798 \uac04\ub2e8\ud55c \uc0d8\ud50c \ucf54\ub4dc\ub97c \ucc38\uace0\ud558\uc138\uc694. "),o.qZA(),o.TgZ(14,"jdmi-code-box"),o.TgZ(15,"mat-tab-group",2),o.TgZ(16,"mat-tab",3),o._UZ(17,"jdmi-code-view",4),o.qZA(),o.TgZ(18,"mat-tab",5),o._UZ(19,"jdmi-code-view",4),o.qZA(),o.TgZ(20,"mat-tab",6),o._UZ(21,"jdmi-code-view",4),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&m&&(o.xp6(17),o.Q6J("code",u.codeAppModule),o.xp6(2),o.Q6J("code",u.codeAppComponent),o.xp6(2),o.Q6J("code",u.codeSampleModal))},directives:[c.e,s.O,C.v,i.k,g.b,A.e,p.SP,p.uX],styles:[""]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(m){return new(m||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[d.Bz.forChild([{path:"",component:M}]),r.m]]}),t})()},5244:(a,e,n)=>{n.d(e,{Z:()=>d});const d="import { Component } from '@angular/core';\nimport { JdModalEntryComponent, JdModalService, StackBottom } from '@jood/ng-modal';\nimport { SampleModalComponent } from './sample-modal.component';\n\n@Component({\n  selector: 'app-root',\n  template: `\n    <button (click)=\"onModalOpen()\">Open</button>\n    <router-outlet></router-outlet>\n    <jd-modal-provider></jd-modal-provider>\n  `,\n  styles: [''],\n})\nexport class AppComponent {\n  constructor(private modalService: JdModalService) {\n    modalService.setUseBlockBodyScroll(true);\n    modalService.setUseHistoryState(true);\n    modalService.setDefaultEntryComponent(JdModalEntryComponent);\n    modalService.init();\n  }\n\n  onModalOpen() {\n    this.modalService.open({\n      component: SampleModalComponent,\n      openStrategy: new StackBottom(),\n      overlayClose: true\n    });\n  }\n}\n"},4944:(a,e,n)=>{n.d(e,{Z:()=>d});const d="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { JdModalModule } from '@jood/ng-modal';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [CommonModule, BrowserModule, JdModalModule],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}"},8932:(a,e,n)=>{n.d(e,{Z:()=>d});const d="import { Component, Inject } from '@angular/core';\nimport { JdModalRefToken, JdModalRef } from '@jood/ng-modal';\n\n@Component({\n  selector: 'lib-modal-box',\n  template: `<button (click)=\"onClose()\">onClose</button>`,\n  styles: [`\n    :host {\n      display: block;\n      margin: 0 auto;\n      padding: 20px;\n      width: 92vw;\n      height: 40vh;\n      max-width: 480px;\n      box-sizing: border-box;\n      background: #fff;\n    }\n  `],\n})\nexport class SampleModalComponent {\n  constructor(@Inject(JdModalRefToken) private modalRef: JdModalRef) {}\n\n  onClose() {\n    this.modalRef.close();\n  }\n}\n"}}]);