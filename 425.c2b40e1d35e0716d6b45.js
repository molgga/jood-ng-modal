"use strict";(self.webpackChunkjood_ng_modal=self.webpackChunkjood_ng_modal||[]).push([[425],{3425:(l,C,e)=>{e.r(C),e.d(C,{PageModule:()=>q});var i=e(6199),y=e(5046);class A{shadow(){return{pivot:{boxShadow:"10px 0 10px 2px rgba(0, 0, 0, 0.04), 3px 0 3px rgba(0, 0, 0, 0.02)"}}}base(u){return{entry:{justifyContent:"flex-start",alignItems:"initial"},pivot:{transition:`transform ${u}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${.85*(u||240)}ms`,transform:"translateX(-102%)",borderRadius:"0px"}}}opening(){return{pivot:{transform:"translateX(0%)"},overlay:{opacity:.3}}}floatingOpening(){return[{pivot:{transform:"translateX(8%)"},overlay:{opacity:.05}},{pivot:{transform:"translateX(4%)"},overlay:{opacity:.2}},{pivot:{transform:"translateX(0%)"},overlay:{opacity:.3}}]}opened(){return{}}closing(){return{pivot:{},overlay:{opacity:0}}}}class v{shadow(){return{pivot:{boxShadow:"-10px 0 10px 2px rgba(0, 0, 0, 0.04), -3px 0 3px rgba(0, 0, 0, 0.02)"}}}base(u){return{entry:{justifyContent:"flex-end",alignItems:"initial"},pivot:{transition:`transform ${u}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${.85*(u||240)}ms`,transform:"translateX(102%)",borderRadius:"0px"}}}opening(){return{pivot:{transform:"translateX(0%)"},overlay:{opacity:.3}}}floatingOpening(){return[{pivot:{transform:"translateX(-8%)"},overlay:{opacity:.05}},{pivot:{transform:"translateX(-4%)"},overlay:{opacity:.2}},{pivot:{transform:"translateX(0%)"},overlay:{opacity:.3}}]}opened(){return{}}closing(){return{pivot:{},overlay:{opacity:0}}}}class Z{shadow(){return{pivot:{boxShadow:"0 0 5px rgba(0, 0, 0, 0.02), 0 -10px 10px 1px rgba(0, 0, 0, 0.04), 0 -3px 3px rgba(0, 0, 0, 0.06)"}}}base(u){return{entry:{justifyContent:"center",alignItems:"flex-end"},pivot:{transition:`transform ${u}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${.85*(u||240)}ms`,transform:"translateY(102%)",borderRadius:"10px 10px 0 0",marginTop:"20px"}}}opening(){return{pivot:{transform:"translateY(0%)"},overlay:{opacity:.3}}}floatingOpening(){return[{pivot:{transform:"scale(0.94, 0.94) translateY(-8%)"},overlay:{opacity:.05}},{pivot:{transform:"scale(0.97, 0.97) translateY(-4%)"},overlay:{opacity:.2}},{pivot:{transform:"translateY(0%)"},overlay:{opacity:.3}}]}opened(){return{}}closing(){return{pivot:{},overlay:{opacity:0}}}}class f{shadow(){return{pivot:{boxShadow:"0 0 5px rgba(0, 0, 0, 0.02), 0 10px 10px 1px rgba(0, 0, 0, 0.04), 0 3px 3px rgba(0, 0, 0, 0.06)"}}}base(u){return{entry:{justifyContent:"center",alignItems:"flex-start"},pivot:{transition:`transform ${u}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${.85*(u||240)}ms`,transform:"translateY(-102%)",borderRadius:"0 0 10px 10px"}}}opening(){return{pivot:{transform:"translateY(0%)"},overlay:{opacity:.3}}}floatingOpening(){return[{pivot:{transform:"scale(0.94, 0.94) translateY(6%)"},overlay:{opacity:.05}},{pivot:{transform:"scale(0.97, 0.97) translateY(3%)"},overlay:{opacity:.2}},{pivot:{transform:"translateY(0%)"},overlay:{opacity:.3}}]}opened(){return{}}closing(){return{pivot:{},overlay:{opacity:0}}}}var b=e(1701);function m(o){let u,n=!1;switch(o){case"left":u=new A,n=!0;break;case"right":u=new v,n=!0;break;case"bottom":u=new Z;break;case"top":u=new f;break;default:u=new b.v}return{openStrategy:u,fullHeight:n}}var c=e(4050),t=e(3018),p=e(194),s=e(1095);let S=(()=>{class o{constructor(n,a){this.modalService=n,this.modalRef=a}ngOnInit(){}onNestedOpen(){var n;const a=null===(n=this.modalRef.data)||void 0===n?void 0:n.sampleStrategy,r=m(a);this.modalService.open(Object.assign({component:o,overlayClose:!0,floatingMode:!0,data:{sampleStrategy:a}},r))}onClose(){this.modalRef.close()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.u),t.Y36(c.c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["lib-sample-strategy"]],decls:6,vars:0,consts:[["mat-flat-button","","color","primary",1,"btn",3,"click"],["mat-flat-button","","color","accent",1,"btn",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"sample-strategy works!"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return a.onNestedOpen()}),t._uU(3,"onNestedOpen"),t.qZA(),t.TgZ(4,"button",1),t.NdJ("click",function(){return a.onClose()}),t._uU(5,"onClose"),t.qZA())},directives:[s.lW],styles:["[_nghost-%COMP%]{display:block;padding:20px;width:90vw;max-width:420px;height:100%;min-height:320px;box-sizing:border-box;background:#fff}[_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{margin:2px}"]}),o})();class d{constructor(){this.duration=240}base(u=240){return this.duration=u,{modal:{transformStyle:"preserve-3d",perspective:"1000px"},pivot:{transition:`transform ${u}ms cubic-bezier(0.215, 0.610, 0.355, 1), opacity ${.85*this.duration}ms`,transform:"translateY(300px) rotateX(-135deg) scale(0, 0)",opacity:0},overlay:{opacity:0,backgroundColor:"rgba(255,0,0,1)"}}}shadow(){return{pivot:{}}}opening(){return{pivot:{transform:"translateY(80px) rotateX(0) scale(1, 1)",opacity:1},overlay:{opacity:.3}}}floatingOpening(){return[{pivot:{transform:"translateY(-60px) rotateX(0) scale(0.85, 0.85)",opacity:1},overlay:{opacity:.3}},{pivot:{transform:"translateY(-40px) rotateX(0) scale(0.9, 0.9)",opacity:1},overlay:{opacity:.4}},{pivot:{transform:"translateY(80px) rotateX(0) scale(1, 1)",opacity:1},overlay:{opacity:.5}}]}opened(){return{pivot:{border:"10px dashed #000",transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1)",transform:"translateY(0px)"}}}closing(){return{pivot:{transitionDuration:.8*this.duration+"ms",transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1)",transform:"translateY(50px)",opacity:0},overlay:{opacity:0}}}}let D=(()=>{class o{constructor(n,a){this.modalService=n,this.modalRef=a}ngOnInit(){}onOpen(){this.modalService.open({component:o,openStrategy:new d,duration:360,overlayClose:!0,floatingMode:!0})}onClose(){this.modalRef.close()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.u),t.Y36(c.c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["lib-custom-open-modal"]],decls:7,vars:0,consts:[[1,"btn"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,a){1&n&&(t._uU(0,"custom-open-modal works!!\n"),t.TgZ(1,"div",0),t.TgZ(2,"button",1),t.NdJ("click",function(){return a.onOpen()}),t._uU(3,"onNestedOpen"),t.qZA(),t.qZA(),t.TgZ(4,"div",0),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.onClose()}),t._uU(6,"onClose"),t.qZA(),t.qZA())},directives:[s.lW],styles:["[_nghost-%COMP%]{display:block;margin:0 auto;padding:20px;width:92vw;height:40vh;max-width:480px;box-sizing:border-box;background:#fff}.btn[_ngcontent-%COMP%]{padding:10px}"]}),o})();class B{constructor(){this.duration=240}base(u=240){return this.duration=u,{modal:{},pivot:{transition:`transform ${u}ms cubic-bezier(0.215, 0.610, 0.355, 1), opacity 200ms`,transform:"translateY(150px)"},overlay:{opacity:.2}}}shadow(){return{pivot:{}}}opening(){return{pivot:{transform:"translateY(0px)",opacity:1}}}floatingOpening(){return[{pivot:{transform:"translateY(0px)",opacity:1}}]}opened(){return{pivot:{transform:"translateY(0px)"}}}closing(){return{pivot:{transform:"translateY(120px)",opacity:0},overlay:{opacity:0}}}}let O=(()=>{class o{constructor(n,a){this.modalService=n,this.modalRef=a}ngOnInit(){}onOpen(){this.modalService.open({component:o,openStrategy:new B,duration:360,overlayClose:!0,floatingMode:!1})}onClose(){this.modalRef.close()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.u),t.Y36(c.c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["lib-full-body-modal"]],decls:7,vars:0,consts:[[1,"btn"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,a){1&n&&(t._uU(0,"full-body-modal works!!\n"),t.TgZ(1,"div",0),t.TgZ(2,"button",1),t.NdJ("click",function(){return a.onOpen()}),t._uU(3,"onNestedOpen"),t.qZA(),t.qZA(),t.TgZ(4,"div",0),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.onClose()}),t._uU(6,"onClose"),t.qZA(),t.qZA())},directives:[s.lW],styles:["[_nghost-%COMP%]{display:block;padding:20px;width:100vw;height:100vh;box-sizing:border-box;background:#fff}.btn[_ngcontent-%COMP%]{padding:10px}"]}),o})();var h=e(1803),_=e(6552),T=e(6646),E=e(3524),x=e(5859),U=e(8786),k=e(5965),j=e(9651),F=e(794),g=e(5747);let M=(()=>{class o{constructor(n){this.modalService=n,this.codeCustomOpenStrategy=e(5703).Z,this.codeDemoComponent=e(5390).Z,this.codeModalBoxComponent=e(1433).Z,this.codeEntryHtml=e(7213).Z}ngOnInit(){}onOpenSampleStrategy(n){const a=m(n);this.modalService.open(Object.assign({component:S,overlayClose:!0,floatingMode:!0,data:{sampleStrategy:n}},a))}onOpenCustomOpenStrategy(){this.modalService.open({component:D,openStrategy:new d,duration:360,overlayClose:!0,floatingMode:!0})}onOpenFullBodyStrategy(){this.modalService.open({component:O,openStrategy:new B,duration:360,overlayClose:!0,floatingMode:!1})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["lib-open-strategy"]],decls:132,vars:5,consts:[[1,"jdmi-p-highlight"],["mat-raised-button","","color","primary",1,"exm-stack-btn",3,"click"],["slot","aside","code","// Example 1\nonOpen() {\n  this.modalService.open({\n    component: SomeComponent,\n    openStrategy: new StackBottom(),\n    floatingMode: true,\n  });\n}"],["slot","bside","code","// Example 2\nonOpen() {\n  this.modalService.open({\n    component: SomeComponent,\n    openStrategy: new StackRight(),\n    floatingMode: true,\n  });\n}"],[1,"jdmi-p-ul"],[1,"jdmi-p-li"],["mat-raised-button","","color","primary",3,"click"],[3,"initExpand"],["animationDuration","0ms","color","primary","backgroundColor","primary"],["label","CustomOpenStrategy.ts"],[3,"code"],["label","DemoComponent.ts"],["label","ModalBoxComponent.ts"],["target","_blank","href","https://github.com/molgga/jood-ng-modal/tree/main/projects/demo/src/app/pages/open-strategy"]],template:function(n,a){1&n&&(t.TgZ(0,"jdmi-section"),t.TgZ(1,"jdmi-h2"),t._uU(2,"OpenStrategy"),t.qZA(),t.TgZ(3,"jdmi-p"),t._uU(4," OpenStrategy \ub294 "),t.TgZ(5,"mark",0),t._uU(6,"\ubaa8\ub2ec\uc774 \uc5f4\ub9ac\uace0 \ub2eb\uc744 \ub54c\uc758 \uc560\ub2c8\uba54\uc774\uc158(CSS style) \uc744 \uc815\uc758"),t.qZA(),t._uU(7,"\ud569\ub2c8\ub2e4. "),t._UZ(8,"br"),t._uU(9,"interface OpenStrategy \uc744 \uad6c\ud604\ud558\uba74 \ubaa8\ub2ec\uc774 \uc5f4\ub9ac\uac70\ub098, \ub2eb\ud790 \ub54c\uc758 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc5c6\uc560\uac70\ub098 \uc7ac\uc815\uc758 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),t._UZ(10,"br"),t._uU(11,"\uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ubaa8\ub2ec \uc560\ub2c8\uba54\uc774\uc158\uc740 \uc774\ubbf8 \uba87\uac00\uc9c0 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. "),t._UZ(12,"br"),t.TgZ(13,"button",1),t.NdJ("click",function(){return a.onOpenSampleStrategy("")}),t._uU(14," StackNormal(\uae30\ubcf8\uac12) "),t.qZA(),t.TgZ(15,"button",1),t.NdJ("click",function(){return a.onOpenSampleStrategy("left")}),t._uU(16," StackLeft "),t.qZA(),t.TgZ(17,"button",1),t.NdJ("click",function(){return a.onOpenSampleStrategy("right")}),t._uU(18," StackRight "),t.qZA(),t.TgZ(19,"button",1),t.NdJ("click",function(){return a.onOpenSampleStrategy("top")}),t._uU(20," StackTop "),t.qZA(),t.TgZ(21,"button",1),t.NdJ("click",function(){return a.onOpenSampleStrategy("bottom")}),t._uU(22," StackBottom "),t.qZA(),t.qZA(),t.TgZ(23,"jdmi-h4"),t._uU(24,"\uc801\uc6a9 \uc608"),t.qZA(),t.TgZ(25,"jdmi-hsplit"),t._UZ(26,"jdmi-code-view",2),t._UZ(27,"jdmi-code-view",3),t.qZA(),t.qZA(),t.TgZ(28,"jdmi-section"),t.TgZ(29,"jdmi-h2"),t._uU(30,"Implements OpenStrategy"),t.qZA(),t.TgZ(31,"jdmi-p"),t.TgZ(32,"mark",0),t._uU(33,"OpenStrategy"),t.qZA(),t._uU(34," \ub97c \uad6c\ud604\ud574\uc11c \uc27d\uac8c \uc560\ub2c8\uba54\uc774\uc158(style)\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),t._UZ(35,"br"),t._uU(36,"\ub098\ub9cc\uc758 OpenStartegy \ub97c \uc9c1\uc811 \uad6c\ud604\ud558\uae30 \uc704\ud574 \uba87\uac00\uc9c0\ub294 \uc54c\uace0 \uc9c4\ud589\ud558\ub294\uac8c \uc88b\uc2b5\ub2c8\ub2e4. "),t.TgZ(37,"ul",4),t.TgZ(38,"li",5),t._uU(39,"\uc704\uc5d0\uc11c \uc774\ubbf8 \uc815\uc758\ub418\uc5b4 \uc788\ub358 StackNormal, StackBottom \ub4f1 \uc740 OpenStrategy \uc758 \uad6c\ud604\uccb4 \uc785\ub2c8\ub2e4."),t.qZA(),t.TgZ(40,"li",5),t._uU(41," OpenStrategy \ub294 \ubaa8\ub2ec\uc758 \uc8fc\uc694 \ub3d9\uc791 \uc2dc\uc810\uc778 \uae30\ubcf8 \uc0c1\ud0dc(base) -> \uc5f4\ub9ac\uae30 \uc2dc\uc791(opening) -> \uc644\uc804\ud788 \uc5f4\ub9bc(opened) -> \ub2eb\ud788\uae30 \uc2dc\uc791(closing)\ud560 \ub54c\uc758 style(CSS)\uc138\ud2b8\ub97c \ubc18\ud658\ud558\uace0 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uaddc\uaca9\uc785\ub2c8\ub2e4. "),t.qZA(),t.TgZ(42,"li",5),t._uU(43," \uc8fc\uc694 \uc2dc\uc810\uc778 \uac01 "),t.TgZ(44,"mark",0),t._uU(45,"Method"),t.TgZ(46,"sup"),t._uU(47,"1)"),t.qZA(),t.qZA(),t._uU(48," \ub294 style(CSS) \uc138\ud2b8\ub97c \ubc18\ud658 \ud558\uace0 \uc8fc\ub85c EntryComponent\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. "),t.qZA(),t.TgZ(49,"li",5),t._uU(50,"\ubc18\ud658\ub41c style \uc740 merge \ub418\uc5b4 (EntryComponent \uc758) \uac01 \ud328\ub110\uc5d0 style \uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(51,"jdmi-section"),t.TgZ(52,"jdmi-h3"),t._uU(53,"\uad6c\ud604\ud574\uc57c\ud560 Method"),t.TgZ(54,"sup"),t._uU(55,"1)"),t.qZA(),t.qZA(),t.TgZ(56,"jdmi-p"),t.TgZ(57,"ul",4),t.TgZ(58,"li",5),t.TgZ(59,"jdmi-h4"),t._uU(60,"base()"),t.qZA(),t.TgZ(61,"jdmi-p"),t._uU(62,"\ubaa8\ub2ec\uc774 \uc5f4\ub9b4\ub54c \ubd80\ud130 \ub2eb\ud790 \ub54c\uae4c\uc9c0 \uae30\ubcf8 style \uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),t.qZA(),t.qZA(),t.TgZ(63,"li",5),t.TgZ(64,"jdmi-h4"),t._uU(65,"shadow()"),t.qZA(),t.TgZ(66,"jdmi-p"),t._uU(67," \ubaa8\ub2ec\uc774 \uc5f4\ub9b4\ub54c \ubd80\ud130 \ub2eb\ud790 \ub54c\uae4c\uc9c0 \uae30\ubcf8 shadow \ucc98\ub9ac\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. "),t._UZ(68,"br"),t._uU(69,"shadow \ub3c4 base(), opening(), opened() \ub4f1 \uc5d0\uc11c style \ub85c \ucc98\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4\ub9cc, \uc2e4 \uc0ac\uc6a9\uc0ac\ub840\uc5d0\uc11c shadow \ub9cc \uc81c\uac70\ub97c \ud574\uc57c\ud558\ub294 \uacbd\uc6b0(\ud37c\ud3ec\uba3c\uc2a4 \ubb38\uc81c \ub4f1)\ub85c \uc778\ud574 \ubcc4\ub3c4 \uc815\uc758\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. "),t._UZ(70,"br"),t._uU(71,"shadow \ub294 disableShadow \uc635\uc158\uacfc \uc5f0\uad00\uc774 \uc788\uc2b5\ub2c8\ub2e4. "),t.qZA(),t.qZA(),t.TgZ(72,"li",5),t.TgZ(73,"jdmi-h4"),t._uU(74,"opening() | floatingOpening()"),t.qZA(),t.TgZ(75,"jdmi-p"),t._uU(76," \ubaa8\ub2ec\uc774 \uc5f4\ub9ac\uae30 \uc2dc\uc791\ud560 \ub54c\uc758 style \ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ubaa8\ub2ec\uc774 "),t.TgZ(77,"mark",0),t._uU(78,"\uc911\ucca9"),t.qZA(),t._uU(79,"\ub420 \ub54c\uc758 \ucc98\ub9ac\ub97c \uc704\ud574, opening \uacfc floatingOpening \uc73c\ub85c \uad6c\ubd84\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. "),t._UZ(80,"br"),t._uU(81,"floatingMode \uac00 false(\uae30\ubcf8\uac12)\uc77c \ub54c opening() \uc774 \uc0ac\uc6a9 \ub429\ub2c8\ub2e4. \ubaa8\ub2ec\uc774 \uc911\ucca9\ub418\uc5b4 \uc5f4\ub9ac\ub294\uac83 \uc0c1\uad00\uc5c6\uc774 \ud55c\uac00\uc9c0\uc758 style \ub9cc \ubc18\ud658\ud569\ub2c8\ub2e4. "),t._UZ(82,"br"),t._uU(83,"floatingMode \uac00 true \uc77c \ub54c floatingOpening() \uc774 \uc0ac\uc6a9 \ub429\ub2c8\ub2e4. \ubaa8\ub2ec\uc774 \uc911\ucca9\ub418\ub294 \uc21c\uc11c(index)\uc5d0 \ub530\ub77c \uc0ac\uc6a9\ub420 style[] \ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. "),t._UZ(84,"br"),t._uU(85,"floatingMode \uc635\uc158\uacfc \uc5f0\uad00\uc774 \uc788\uc2b5\ub2c8\ub2e4. "),t.qZA(),t.qZA(),t.TgZ(86,"li",5),t.TgZ(87,"jdmi-h4"),t._uU(88,"opened()"),t.qZA(),t.TgZ(89,"jdmi-p"),t._uU(90,"\ubaa8\ub2ec\uc774 \uc644\uc804\ud788 \uc5f4\ub9b0 \ud6c4 \uc801\uc6a9\ub420 style \uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),t.qZA(),t.qZA(),t.TgZ(91,"li",5),t.TgZ(92,"jdmi-h4"),t._uU(93,"closing()"),t.qZA(),t.TgZ(94,"jdmi-p"),t._uU(95,"\ubaa8\ub2ec\uc774 \ub2eb\ud788\uae30 \uc2dc\uc791\ud560 \ub54c\uc758 style \uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(96,"jdmi-section"),t.TgZ(97,"jdmi-h2"),t._uU(98,"Example 1"),t.qZA(),t.TgZ(99,"jdmi-p"),t._uU(100," OpenStartegy \ub97c \uad6c\ud604\ud55c \uc0d8\ud50c\uc785\ub2c8\ub2e4. CustomOpenStrategy \uc758 \ucf54\ub4dc\uac00 \uc870\uae08 \ubc29\ub300\ud574 \ubcf4\uc774\uc9c0\ub9cc, style \uc815\uc758 \ucf54\ub4dc \uc678\uc5d0 \ud2b9\ubcc4\ud55c\uac74 \uc5c6\ub2e4\ub294\uac78 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),t._UZ(101,"br"),t._uU(102,"\ubc18\ud658\ud558\ub294 style \ub4e4\uc774 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ub418\ub294\uc9c0 \uc870\uae08 \ub354 \uc774\ud574\ud558\uae30 \uc27d\ub3c4\ub85d \ub9e8 \ubc11\uc5d0 EntryComponent \uc758 html \ucf54\ub4dc\ub97c \ub123\uc5b4\ub1a8\uc2b5\ub2c8\ub2e4. "),t.qZA(),t.TgZ(103,"jdmi-p"),t.TgZ(104,"button",6),t.NdJ("click",function(){return a.onOpenCustomOpenStrategy()}),t._uU(105,"CustomOpenStrategy \uc73c\ub85c \uc5f4\uae30"),t.qZA(),t.qZA(),t.TgZ(106,"jdmi-code-box"),t.TgZ(107,"jdmi-code-collapse",7),t.TgZ(108,"mat-tab-group",8),t.TgZ(109,"mat-tab",9),t._UZ(110,"jdmi-code-view",10),t.qZA(),t.TgZ(111,"mat-tab",11),t._UZ(112,"jdmi-code-view",10),t.qZA(),t.TgZ(113,"mat-tab",12),t._UZ(114,"jdmi-code-view",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(115,"jdmi-h4"),t._uU(116,"\uc774\ud574\ub97c \ub3d5\uae30\uc704\ud55c EntryComponent \uc758 HTML"),t.qZA(),t.TgZ(117,"jdmi-p"),t._uU(118,"styles \ub77c\ub294 \uac83\uc758 modal, overlay \ub4f1\uc774 html \uc758 style \uc18d\uc131\uc5d0 \uc0ac\uc6a9\ub41c\uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),t.qZA(),t._UZ(119,"jdmi-code-view",10),t.qZA(),t.TgZ(120,"jdmi-section"),t.TgZ(121,"jdmi-h2"),t._uU(122,"Example 2"),t.qZA(),t.TgZ(123,"jdmi-p"),t._uU(124," \uc774\ub7f0\uc2dd\uc758 \ud654\uba74\uc744 \uc704\ud574\uc11c\ub3c4 \uac04\ub2e8\ud558\uac8c OpenStrategy \ub97c \ub9cc\ub4e4\uc218 \uc788\uc2b5\ub2c8\ub2e4. "),t.qZA(),t.TgZ(125,"jdmi-p"),t.TgZ(126,"button",6),t.NdJ("click",function(){return a.onOpenFullBodyStrategy()}),t._uU(127," FullBodyStrategy \uc73c\ub85c \uc5f4\uae30 "),t.qZA(),t._uU(128," \xa0\xa0 "),t.TgZ(129,"mark",0),t.TgZ(130,"a",13),t._uU(131," \uc804\uccb4 \uc608\uc81c \ucf54\ub4dc "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(107),t.Q6J("initExpand",!1),t.xp6(3),t.Q6J("code",a.codeCustomOpenStrategy),t.xp6(2),t.Q6J("code",a.codeDemoComponent),t.xp6(2),t.Q6J("code",a.codeModalBoxComponent),t.xp6(5),t.Q6J("code",a.codeEntryHtml))},directives:[h.e,_.O,T.b,s.lW,E.R,x.k,U.v,k.k,j.e,F.F,g.SP,g.uX],styles:[".exm-stack-btn[_ngcontent-%COMP%]{margin:5px}"]}),o})(),q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[i.Bz.forChild([{path:"",component:M}]),y.m]]}),o})()},5703:(l,C,e)=>{e.d(C,{Z:()=>i});const i="import { OpenStrategy, OpenStrategyStyleSet } from '@jood/ng-modal';\n\nexport class CustomOpenStrategy implements OpenStrategy {\n  duration = 240;\n\n  base(duration: number = 240): OpenStrategyStyleSet {\n    this.duration = duration;\n    const timingOpacity = this.duration * 0.85;\n    return {\n      modal: {\n        transformStyle: 'preserve-3d',\n        perspective: '1000px',\n      },\n      pivot: {\n        transition: `transform ${duration}ms cubic-bezier(0.215, 0.610, 0.355, 1), opacity ${timingOpacity}ms`,\n        transform: 'translateY(-300px) rotateX(135deg) scale(0.2, 0.2)',\n        opacity: 0,\n      },\n      overlay: {\n        opacity: 0,\n      },\n    };\n  }\n\n  shadow(): OpenStrategyStyleSet {\n    return {\n      pivot: {},\n    };\n  }\n\n  opening(): OpenStrategyStyleSet {\n    return {\n      pivot: {\n        transform: 'translateY(50px) rotateX(15deg) scale(1, 1)',\n        opacity: 1,\n      },\n      overlay: { opacity: 0.3 },\n    };\n  }\n\n  floatingOpening(): OpenStrategyStyleSet[] {\n    return [\n      {\n        // last\n        pivot: { transform: 'translateY(-60px) rotateX(-10deg) scale(0.85, 0.85)', opacity: 1 },\n        overlay: { opacity: 0.3, backgroundColor: 'rgba(0,0,255,1)' },\n      },\n      {\n        // second\n        pivot: { transform: 'translateY(-40px) rotateX(-5deg) scale(0.9, 0.9)', opacity: 1 },\n        overlay: { opacity: 0.4, backgroundColor: 'rgba(0,255,0,1)' },\n      },\n      {\n        // first\n        pivot: { transform: 'translateY(50px) rotateX(15deg) scale(1, 1)', opacity: 1 },\n        overlay: { opacity: 0.5, backgroundColor: 'rgba(255,0,0,1)' },\n      },\n    ];\n  }\n\n  opened(): OpenStrategyStyleSet {\n    return {\n      pivot: {\n        transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1)',\n        transform: 'translateY(0px)',\n      },\n    };\n  }\n\n  closing(): OpenStrategyStyleSet {\n    return {\n      pivot: {\n        transitionDuration: `${this.duration * 0.8}ms`,\n        transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1)',\n        transform: 'translateY(50px)',\n        opacity: 0,\n      },\n      overlay: { opacity: 0 },\n    };\n  }\n}\n"},5390:(l,C,e)=>{e.d(C,{Z:()=>i});const i="import { Component, OnInit } from '@angular/core';\nimport { JdModalService } from '@jood/ng-modal';\nimport { CustomOpenStrategy } from './custom-open-strategy';\nimport { ModalBoxComponent } from './modal-box.component';\n\n@Component({\n  selector: 'lib-demo',\n  template: '<button (click)=\"onOpen()\">onOpen</button>'\n})\nexport class DemoComponent implements OnInit {\n  constructor(private modalService: JdModalService) {}\n\n  ngOnInit() {}\n\n  onOpen() {\n    this.modalService.open({\n      component: ModalBoxComponent,\n      openStrategy: new CustomOpenStrategy(), // your CustomOpenStrategy.ts\n      duration: 360,\n      overlayClose: true,\n      floatingMode: true,\n    });\n  }\n}\n"},7213:(l,C,e)=>{e.d(C,{Z:()=>i});const i='<div class="overlay" [style]="styles.overlay" (click)="onOverlayClick($event)"></div>\n<div #refModalPanel class="modal-panel" [style]="styles.modal">\n  <div class="pivot" [style]="styles.pivot">\n    <div class="content">\n      <ng-container jdModalComponentResolver></ng-container>\n    </div>\n  </div>\n</div>\n'},1433:(l,C,e)=>{e.d(C,{Z:()=>i});const i="import { Component, Inject, OnInit } from '@angular/core';\nimport { JdModalService, JdModalRefToken, JdModalRef } from '@jood/ng-modal';\nimport { CustomOpenStrategy } from './custom-open-strategy';\n\n@Component({\n  selector: 'lib-modal-box',\n  template: `\n    modal-box works!\n    <div class=\"btn\">\n      <button (click)=\"onOpen()\">onOpen</button>\n    </div>\n    <div class=\"btn\">\n      <button (click)=\"onClose()\">onClose</button>\n    </div>\n    `,\n  styles: [`\n    :host {\n      display: block;\n      margin: 0 auto;\n      padding: 20px;\n      width: 92vw;\n      height: 40vh;\n      max-width: 480px;\n      box-sizing: border-box;\n      background: #fff;\n    }\n    .btn {\n      padding: 10px;\n    }\n  `],\n})\nexport class ModalBoxComponent implements OnInit {\n  constructor(\n    private modalService: JdModalService,\n    @Inject(JdModalRefToken) private modalRef: JdModalRef\n  ) {}\n\n  ngOnInit() {}\n\n  onOpen() {\n    // nested open\n    this.modalService.open({\n      component: ModalBoxComponent,\n      openStrategy: new CustomOpenStrategy(),\n      duration: 360,\n      overlayClose: true,\n      floatingMode: true,\n    });\n  }\n\n  onClose() {\n    // modal close\n    this.modalRef.close();\n  }\n}\n"}}]);