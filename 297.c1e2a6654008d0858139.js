"use strict";(self.webpackChunkjood_ng_modal=self.webpackChunkjood_ng_modal||[]).push([[297],{2297:(i,u,n)=>{n.r(u),n.d(u,{PageModule:()=>R});var s=n(6199),Z=n(5046),e=n(3018),A=n(1803),D=n(6552),f=n(6646),M=n(5965),h=n(5257),v=n(4050),p=n(8295),r=n(9983),C=n(665),c=n(1095),g=n(8583);let T=(()=>{class o{constructor(t){this.modalRef=t,this.passData=null,this.resultName="",this.resultCount=0}ngOnInit(){var t,a;this.passData=this.modalRef.data,this.resultName=`Hello ${(null===(t=this.passData)||void 0===t?void 0:t.passName)||""}`,this.resultCount=1e3*((null===(a=this.passData)||void 0===a?void 0:a.passCount)||0)}close(){this.modalRef.close({resultName:this.resultName,resultCount:this.resultCount})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.c))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sample-modal"]],decls:17,vars:5,consts:[[1,"pass-print"],[1,"pass-label"],["appearance","standard"],["matInput","","type","text",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-stroked-button","",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"span",1),e._uU(2,"passData:"),e.qZA(),e._uU(3),e.ALo(4,"json"),e.qZA(),e.TgZ(5,"div"),e.TgZ(6,"mat-form-field",2),e.TgZ(7,"mat-label"),e._uU(8,"resultName"),e.qZA(),e.TgZ(9,"input",3),e.NdJ("ngModelChange",function(d){return a.resultName=d}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div"),e.TgZ(11,"mat-form-field",2),e.TgZ(12,"mat-label"),e._uU(13,"resultCount"),e.qZA(),e.TgZ(14,"input",4),e.NdJ("ngModelChange",function(d){return a.resultCount=d}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"button",5),e.NdJ("click",function(){return a.close()}),e._uU(16,"Pass Result&Close"),e.qZA()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,3,a.passData),""),e.xp6(6),e.Q6J("ngModel",a.resultName),e.xp6(5),e.Q6J("ngModel",a.resultCount))},directives:[p.KE,p.hX,r.Nt,C.Fj,C.JJ,C.On,C.wV,c.lW],pipes:[g.Ts],styles:["[_nghost-%COMP%]{display:block;padding:20px;background:#fff}.pass-print[_ngcontent-%COMP%]{white-space:pre-wrap;padding:10px;box-sizing:border-box;border-radius:4px;background:#f0f0f0}.pass-label[_ngcontent-%COMP%]{font-size:12px;color:#666}"]}),o})();var S=n(194);let b=(()=>{class o{constructor(t){this.modalService=t,this.passName="Foo",this.passCount=1}ngOnInit(){}openModal(){this.modalService.open({component:T,overlayClose:!0,data:{passName:this.passName,passCount:this.passCount}}).observeClosed().pipe((0,h.q)(1)).subscribe(t=>{t?this.resultData=t:console.log(t,"result === undefined // overlayClose? history back? ...")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.u))},o.\u0275cmp=e.Xpm({type:o,selectors:[["sample-container"]],decls:19,vars:5,consts:[[1,"fields"],[1,"field"],["appearance","standard"],["matInput","","type","text",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],[1,"action"],["mat-raised-button","","color","primary",3,"click"],[1,"result-print"],[1,"result-label"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"mat-form-field",2),e.TgZ(3,"mat-label"),e._uU(4,"passName"),e.qZA(),e.TgZ(5,"input",3),e.NdJ("ngModelChange",function(d){return a.passName=d}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",1),e.TgZ(7,"mat-form-field",2),e.TgZ(8,"mat-label"),e._uU(9,"passCount"),e.qZA(),e.TgZ(10,"input",4),e.NdJ("ngModelChange",function(d){return a.passCount=d}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",5),e.TgZ(12,"button",6),e.NdJ("click",function(){return a.openModal()}),e._uU(13,"Open"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",7),e.TgZ(15,"span",8),e._uU(16,"resultData:"),e.qZA(),e._uU(17),e.ALo(18,"json"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngModel",a.passName),e.xp6(5),e.Q6J("ngModel",a.passCount),e.xp6(7),e.hij(" ",e.lcZ(18,3,a.resultData),""))},directives:[p.KE,p.hX,r.Nt,C.Fj,C.JJ,C.On,C.wV,c.lW],pipes:[g.Ts],styles:["[_nghost-%COMP%]{display:block}.fields[_ngcontent-%COMP%]{display:flex;align-items:flex-end;margin:0 -5px}.fields[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{flex:1;margin:0 5px}.fields[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.fields[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix{width:auto!important}.fields[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{margin:0 5px;padding-bottom:1.34375em}.result-print[_ngcontent-%COMP%]{white-space:pre-wrap;padding:10px;box-sizing:border-box;border-radius:4px;background:#f0f0f0}.result-label[_ngcontent-%COMP%]{font-size:12px;color:#666}"]}),o})();var E=n(9651),B=n(5747),_=n(8786),j=n(362),U=n(3524),x=n(7828);let P=(()=>{class o{constructor(){this.codeSampleContainerTs=n(5533).Z,this.codeSampleContainerHtml=n(2994).Z,this.codeSampleContainerScss=n(2327).Z,this.codeSampleModalTs=n(7119).Z,this.codeSampleModalHtml=n(6796).Z,this.codeSampleModalScss=n(4783).Z}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["lib-pass-data-result"]],decls:54,vars:10,consts:[["animationDuration","0ms","color","primary","backgroundColor","primary"],["label","container.component.ts"],[3,"code"],["label","container.component.html"],["label","container.component.scss"],["code","interface SampleModalData {\n  passName: string;\n  passCount: number;\n}\n\ninterface SampleModalResult {\n  resultName: string;\n  resultCount: number;\n}"],["code","this.modalService.open<SampleModalResult, SampleModalData>({ ... })"],["src","assets/images/pass_data_n_result_4.png","imageAlign","left","description","modalService \ubaa8\ub2ec\uc744 \uc5f4\ub54c \uc804\ub2ec\ud574\uc57c\ud560 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ucf54\ub4dc \ud78c\ud2b8",3,"isBorder"],["src","assets/images/pass_data_n_result_3.png","imageAlign","left","description","modalService \ubaa8\ub2ec\uc758 \uacb0\uacfc\uac12\uc744 \ubc1b\uc744\ub54c \uacb0\uacfc\uc5d0 \ub300\ud55c \ucf54\ub4dc \ud78c\ud2b8",3,"isBorder"],["code","@Inject(JdModalRefToken) private modalRef: JdModalRef<SampleModalResult, SampleModalData>"],["src","assets/images/pass_data_n_result_1.png","imageAlign","left","description","modalRef \ub85c \uc804\ub2ec\ub41c \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ucf54\ub4dc \ud78c\ud2b8",3,"isBorder"],["src","assets/images/pass_data_n_result_2.png","imageAlign","left","description","modalRef \ub97c close \uc2dc \uc804\ub2ec\ud560 \uacb0\uacfc\uac12\uc5d0 \ub300\ud55c \ucf54\ub4dc \ud78c\ud2b8",3,"isBorder"]],template:function(t,a){1&t&&(e.TgZ(0,"jdmi-section"),e.TgZ(1,"jdmi-h2"),e._uU(2,"\ub370\uc774\ud130\uc640 \uacb0\uacfc \uc8fc\uace0\ubc1b\uae30\u{1f60e}"),e.qZA(),e.TgZ(3,"jdmi-p"),e._uU(4,"\ubaa8\ub2ec\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uac70\ub098, \ubaa8\ub2ec\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294 \ubc29\ubc95"),e.qZA(),e.qZA(),e.TgZ(5,"jdmi-section"),e.TgZ(6,"jdmi-h3"),e._uU(7,"Example"),e.qZA(),e._UZ(8,"sample-container"),e.qZA(),e.TgZ(9,"jdmi-section"),e.TgZ(10,"jdmi-h3"),e._uU(11,"Example code: Container"),e.qZA(),e.TgZ(12,"jdmi-code-box"),e.TgZ(13,"mat-tab-group",0),e.TgZ(14,"mat-tab",1),e._UZ(15,"jdmi-code-view",2),e.qZA(),e.TgZ(16,"mat-tab",3),e._UZ(17,"jdmi-code-view",2),e.qZA(),e.TgZ(18,"mat-tab",4),e._UZ(19,"jdmi-code-view",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"jdmi-section"),e.TgZ(21,"jdmi-h3"),e._uU(22,"Example code: Modal"),e.qZA(),e.TgZ(23,"jdmi-code-box"),e.TgZ(24,"mat-tab-group",0),e.TgZ(25,"mat-tab",1),e._UZ(26,"jdmi-code-view",2),e.qZA(),e.TgZ(27,"mat-tab",3),e._UZ(28,"jdmi-code-view",2),e.qZA(),e.TgZ(29,"mat-tab",4),e._UZ(30,"jdmi-code-view",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(31,"jdmi-partition"),e.TgZ(32,"jdmi-section"),e.TgZ(33,"jdmi-h3"),e._uU(34,"Generic Types"),e.qZA(),e.TgZ(35,"jdmi-p"),e._uU(36," \uc704\uc5d0 \uc608\uc81c\ub97c \ubcf4\uba74 \uc11c\ube44\uc2a4(JdModalService)\uc5d0\uc11c \ubaa8\ub2ec\uc744 \uc5f4\ub54c, \ubaa8\ub2ec(JdModalRef)\uc744 Inject \ud560 \ub54c \uc120\uc5b8\ub41c Generic types \uc774 \uc788\uc2b5\ub2c8\ub2e4. "),e._UZ(37,"br"),e._uU(38,"\uccab\ubc88\uc9f8\ub294 \ubaa8\ub2ec\ub85c \ubd80\ud130 \uc804\ub2ec\ubc1b\ub294(\uacb0\uacfc) \ud0c0\uc785, \ub450\ubc88\uc9f8\ub294 \ubaa8\ub2ec\ub85c \uc804\ub2ec\ud558\ub294(\ub370\uc774\ud130) \ud0c0\uc785 \uc785\ub2c8\ub2e4. "),e._UZ(39,"br"),e._uU(40,"\ud504\ub85c\uc81d\ud2b8 \uaddc\ubaa8\uc5d0 \ub530\ub77c \uad00\ub9ac\ud574\uc57c \ud558\ub294 \ubaa8\ub2ec\uc758 \uc218\uac00 \ub9ce\uc544\uc9c0\uace0 \uc8fc\uace0\ubc1b\ub294 \ub370\uc774\ud130\uac00 \ub9ce\uc544\uc9c8\uc218\ub85d \uae30\uc5b5\ud558\uae30 \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5b8\uc820\uac00\ub294 \uc720\uc9c0\ubcf4\uc218\ub97c \ud574\uc57c\ud558\ub294 \ud300\uc6d0\uacfc \ub098\ub97c \uc704\ud574 \uc120\uc5b8 \uac00\ub2a5\ud55c \ud0c0\uc785\uc744 \uc801\uc808\ud788 \uc0ac\uc6a9\ud558\uc138\uc694. "),e.qZA(),e._UZ(41,"jdmi-code-view",5),e.TgZ(42,"jdmi-h4"),e._uU(43,"JdModalService Data&Result"),e.qZA(),e.TgZ(44,"jdmi-p"),e._uU(45,"\ubaa8\ub2ec\uc744 \uc5f4\ub54c\uc640 \uacb0\uacfc\ub97c \uad6c\ub3c5\ud560 \ub54c\uc758 \ucf54\ub4dc \ud78c\ud2b8 \uc608"),e.qZA(),e._UZ(46,"jdmi-code-view",6),e._UZ(47,"jdmi-image-box",7),e._UZ(48,"jdmi-image-box",8),e.TgZ(49,"jdmi-h4"),e._uU(50,"JdModalRef Data&Result"),e.qZA(),e._UZ(51,"jdmi-code-view",9),e._UZ(52,"jdmi-image-box",10),e._UZ(53,"jdmi-image-box",11),e.qZA()),2&t&&(e.xp6(15),e.Q6J("code",a.codeSampleContainerTs),e.xp6(2),e.Q6J("code",a.codeSampleContainerHtml),e.xp6(2),e.Q6J("code",a.codeSampleContainerScss),e.xp6(7),e.Q6J("code",a.codeSampleModalTs),e.xp6(2),e.Q6J("code",a.codeSampleModalHtml),e.xp6(2),e.Q6J("code",a.codeSampleModalScss),e.xp6(17),e.Q6J("isBorder",!0),e.xp6(1),e.Q6J("isBorder",!0),e.xp6(4),e.Q6J("isBorder",!0),e.xp6(1),e.Q6J("isBorder",!0))},directives:[A.e,D.O,f.b,M.k,b,E.e,B.SP,B.uX,_.v,j.p,U.R,x.j],styles:[""]}),o})(),R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[s.Bz.forChild([{path:"",component:P}]),Z.m]]}),o})()},2994:(i,u,n)=>{n.d(u,{Z:()=>s});const s='<div>\n  <input [(ngModel)]="passName" type="text" />\n  <input [(ngModel)]="passCount" type="number" />\n</div>\n<div>resultData: {{ resultData | json }}</div>\n<button (click)="openModal()">Open</button>'},2327:(i,u,n)=>{n.d(u,{Z:()=>s});const s=":host {\n  display: block;\n}"},5533:(i,u,n)=>{n.d(u,{Z:()=>s});const s="import { Component, OnInit } from '@angular/core';\nimport { take } from 'rxjs/operators';\nimport { JdModalService } from '@jood/ng-modal';\nimport { SampleModalComponent, SampleModalResult, SampleModalData } from '../sample-modal/sample-modal.component';\n\n@Component({\n  selector: 'sample-container',\n  templateUrl: './for-code.html',\n  styleUrls: ['./for-code.scss'],\n})\nexport class SampleContainerComponent implements OnInit {\n  constructor(private modalService: JdModalService) {}\n\n  ngOnInit() {}\n\n  passName: string = 'Foo';\n  passCount: number = 0;\n  resultData!: SampleModalResult;\n\n  openModal() {\n    this.modalService\n      .open<SampleModalResult, SampleModalData>({\n        component: SampleModalComponent,\n        overlayClose: true,\n        data: {\n          passName: this.passName,\n          passCount: this.passCount,\n        },\n      })\n      .observeClosed()\n      .pipe(take(1))\n      .subscribe((result) => {\n        if (result) {\n          this.resultData = result;\n        } else {\n          console.log(result, 'result === undefined // overlayClose? history back? ...');\n        }\n      });\n  }\n}\n"},6796:(i,u,n)=>{n.d(u,{Z:()=>s});const s='<div>passData: {{ passData | json }}</div>\n<div>\n  <input [(ngModel)]="resultName" type="text" />\n  <input [(ngModel)]="resultCount" type="number" />\n</div>\n<button (click)="close()">close</button>\n'},4783:(i,u,n)=>{n.d(u,{Z:()=>s});const s=":host {\n  display: block;\n  width: 280px;\n  height: 140px;\n  background: #fff;\n}\n"},7119:(i,u,n)=>{n.d(u,{Z:()=>s});const s="import { Component, Inject, OnInit } from '@angular/core';\nimport { JdModalRef, JdModalRefToken } from '@jood/ng-modal';\n\nexport interface SampleModalData {\n  passName: string;\n  passCount: number;\n}\n\nexport interface SampleModalResult {\n  resultName: string;\n  resultCount: number;\n}\n\n@Component({\n  selector: 'sample-modal',\n  templateUrl: './for-code.html',\n  styleUrls: ['./for-code.scss'],\n})\nexport class SampleModalComponent implements OnInit {\n  constructor(@Inject(JdModalRefToken) private modalRef: JdModalRef<SampleModalResult, SampleModalData>) {}\n\n  passData: SampleModalData | null = null;\n  resultName: string = '';\n  resultCount: number = 0;\n\n  ngOnInit() {\n    this.passData = this.modalRef.data;\n    this.resultName = `Hello ${this.passData?.passName || ''}`;\n    this.resultCount = (this.passData?.passCount || 0) * 1000;\n  }\n\n  close() {\n    this.modalRef.close({ resultName: this.resultName, resultCount: this.resultCount });\n  }\n}\n"}}]);