"use strict";(self.webpackChunkTimeManagment=self.webpackChunkTimeManagment||[]).push([[82],{3082:(y,p,s)=>{s.r(p),s.d(p,{WelcomeModule:()=>T});var l=s(8579),u=s(2911),m=s(590),o=s(1571),_=s(7556),g=s(3097),h=s(4471),c=s(6895),C=s(4880),f=s(977),d=s(6422),P=s(3308);function M(i,r){1&i&&o._UZ(0,"app-loader")}function w(i,r){if(1&i){const t=o.EpF();o.TgZ(0,"app-registration",12),o.NdJ("isClose",function(){o.CHM(t);const e=o.oxw();return o.KtG(e.closeRegistrationPopup())})("goRegister",function(e){o.CHM(t);const a=o.oxw();return o.KtG(a.registration(e))})("goLogin",function(){o.CHM(t);const e=o.oxw();return e.closeRegistrationPopup(),o.KtG(e.showLoginPopup())}),o.qZA()}if(2&i){const t=o.oxw();o.Q6J("isDataSent",t.isDataSent)}}function O(i,r){if(1&i){const t=o.EpF();o.TgZ(0,"app-login",13),o.NdJ("isClose",function(){o.CHM(t);const e=o.oxw();return o.KtG(e.closeLoginPopup())})("goLogin",function(e){o.CHM(t);const a=o.oxw();return o.KtG(a.login(e))})("goReg",function(){o.CHM(t);const e=o.oxw();return o.KtG(e.showRegistrationPopup())})("forgot",function(){o.CHM(t);const e=o.oxw();return o.KtG(e.showForgotPopup())}),o.qZA()}if(2&i){const t=o.oxw();o.Q6J("isCorrectData",t.isLoginDataCorrect)}}function v(i,r){if(1&i){const t=o.EpF();o.TgZ(0,"app-forgot",14),o.NdJ("isClose",function(){o.CHM(t);const e=o.oxw();return o.KtG(e.closeForgotPopup())})("backToLog",function(){o.CHM(t);const e=o.oxw();return e.closeForgotPopup(),o.KtG(e.showLoginPopup())})("error",function(e){o.CHM(t);const a=o.oxw();return a.closeForgotPopup(),o.KtG(null==a.errorComponent?null:a.errorComponent.toggleShow(e))}),o.qZA()}}const x=[{path:"",component:(()=>{class i{constructor(t,n,e){this.loginService=t,this.router=n,this.loaderService=e,this.isShowRegistration=!1,this.isShowLogin=!1,this.isLoginDataCorrect=!0,this.isDataSent=!1,this.isShowForgot=!1,this.message=""}ngOnInit(){}ngAfterViewInit(){this.loaderService.isLoading.next(!1)}showLoginPopup(){this.isShowLogin=!0}closeLoginPopup(){this.isShowLogin=!1}showRegistrationPopup(){this.loaderService.isLoading.next(!1),this.isShowLogin=!1,this.isShowRegistration=!0,this.loaderService.isLoading.next(!1)}closeRegistrationPopup(){this.isShowRegistration=!1}showForgotPopup(){this.isShowLogin=!1,this.isShowForgot=!0}closeForgotPopup(){this.isShowForgot=!1}login(t){this.loaderService.isLoading.next(!0),this.loginService.login(t.email,t.password).pipe((0,m.P)()).subscribe(n=>{this.closeLoginPopup(),this.router.navigate(["main"])},n=>{this.loaderService.isLoading.next(!1),n.status>=400&&n.status<500?(this.closeLoginPopup(),this.errorComponent?.toggleShow("\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!")):n.status>=500&&n.status<600?(this.closeLoginPopup(),this.errorComponent?.toggleShow("\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d!")):(this.closeLoginPopup(),this.errorComponent?.toggleShow("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443!"))})}registration(t){this.loaderService.isLoading.next(!0),this.loginService.registration(t.name,t.email,t.password,t.re_password).pipe((0,m.P)()).subscribe(n=>{this.isDataSent=!0,this.loaderService.isLoading.next(!1)},n=>{this.loaderService.isLoading.next(!1),n.status>=400&&n.status<500?(this.closeRegistrationPopup(),this.loaderService.isLoading.next(!1),this.errorComponent?.toggleShow("\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!")):n.status>=500&&n.status<600?(this.closeRegistrationPopup(),this.loaderService.isLoading.next(!1),this.errorComponent?.toggleShow("\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d!")):(this.closeRegistrationPopup(),this.loaderService.isLoading.next(!1),this.errorComponent?.toggleShow("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443!"))})}ngOnDestroy(){this.loaderService.isLoading.next(!1)}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(_.e),o.Y36(g.F0),o.Y36(h.D))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-welcome"]],viewQuery:function(t,n){if(1&t&&(o.Gf(l.R,7),o.Gf(u.q,7)),2&t){let e;o.iGM(e=o.CRH())&&(n.loader=e.first),o.iGM(e=o.CRH())&&(n.errorComponent=e.first)}},decls:26,vars:6,consts:[[4,"ngIf"],[3,"logIn"],[1,"content"],[3,"click"],[1,"blob"],[1,"shape"],["src","../../assets/welcome-page-phone-and-pc.svg"],[3,"isDataSent","isClose","goRegister","goLogin",4,"ngIf"],[3,"isCorrectData","isClose","goLogin","goReg","forgot",4,"ngIf"],[3,"isClose","backToLog","error",4,"ngIf"],[3,"close"],["error",""],[3,"isDataSent","isClose","goRegister","goLogin"],[3,"isCorrectData","isClose","goLogin","goReg","forgot"],[3,"isClose","backToLog","error"]],template:function(t,n){1&t&&(o.YNc(0,M,1,0,"app-loader",0),o.ALo(1,"async"),o.TgZ(2,"main")(3,"div")(4,"app-header",1),o.NdJ("logIn",function(){return n.showLoginPopup()}),o.qZA(),o.TgZ(5,"section")(6,"div",2)(7,"h1"),o._uU(8,"\u0412\u043e\u0437\u044c\u043c\u0438 \u0441\u0432\u043e\u0451 "),o.TgZ(9,"span"),o._uU(10,"\u0432\u0440\u0435\u043c\u044f"),o.qZA(),o._uU(11," \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c!"),o.qZA(),o.TgZ(12,"h2"),o._uU(13,"\u041c\u044b \u043f\u043e\u043c\u043e\u0436\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u044b\u043c, \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u044b\u043c \u0438 "),o._UZ(14,"br"),o._uU(15,"\u043c\u043e\u0442\u0438\u0432\u0438\u0440\u0443\u044e\u0449\u0438\u043c."),o.qZA(),o.TgZ(16,"button",3),o.NdJ("click",function(){return n.showLoginPopup()}),o._uU(17,"\u041d\u0430\u0447\u0430\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"),o.qZA()(),o.TgZ(18,"div",4)(19,"div",5),o._UZ(20,"img",6),o.qZA()()()()(),o.YNc(21,w,1,1,"app-registration",7),o.YNc(22,O,1,1,"app-login",8),o.YNc(23,v,1,0,"app-forgot",9),o.TgZ(24,"app-error",10,11),o.NdJ("close",function(){return n.showLoginPopup()}),o.qZA()),2&t&&(o.Q6J("ngIf",o.lcZ(1,4,n.loaderService.isLoading)),o.xp6(21),o.Q6J("ngIf",n.isShowRegistration),o.xp6(1),o.Q6J("ngIf",n.isShowLogin),o.xp6(1),o.Q6J("ngIf",n.isShowForgot))},dependencies:[c.O5,C.G,f.G,d.w,P.o,u.q,l.R,c.Ov],styles:['@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{margin:0;padding:0}  app-header header div{display:flex!important}main[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;width:1720px}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;height:70vh;display:flex;justify-content:space-between;align-items:center}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:50%;display:flex;justify-content:center;align-items:center;flex-direction:column}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Montserrat;font-style:normal;font-weight:500;font-size:2.4vw;color:0}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8c61e8}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:15px;font-family:Montserrat;font-style:normal;font-weight:400;font-size:1.7vw;text-align:center;color:#000}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:35%;height:60px;margin-top:40px;background:#E6EEFF;box-shadow:0 4px 10px #c6c8ff;border-radius:7px;border:none;outline:none;cursor:pointer;font-family:Montserrat;font-style:normal;font-weight:500;font-size:1.5vw}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .blob[_ngcontent-%COMP%]{width:45%;height:auto;display:flex;justify-content:center;align-items:center;position:relative}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .blob[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]{width:30vw;height:30vw;background:linear-gradient(64deg,#949eeb 23%,#949eeb 23%,#BAA0F1 80%);animation:wave 12s ease-in-out infinite;display:flex;align-items:center;justify-content:center}main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .blob[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90%;height:90%}@media (max-width: 900px) and (orientation: portrait){section[_ngcontent-%COMP%]{flex-wrap:wrap;width:100%;flex-direction:column;justify-content:space-between!important;height:94%!important}.content[_ngcontent-%COMP%]{width:100%!important}h1[_ngcontent-%COMP%]{font-size:3vw!important}h2[_ngcontent-%COMP%]{font-size:2.5vw!important}button[_ngcontent-%COMP%]{font-size:2.7vw!important}.blob[_ngcontent-%COMP%]{width:100%!important}.shape[_ngcontent-%COMP%]{width:90%!important;height:47vw!important}}app-login[_ngcontent-%COMP%]{z-index:3}app-registration[_ngcontent-%COMP%]{z-index:3}@keyframes wave{0%,to{border-radius:66% 34% 37% 63%/57% 31% 69% 43%}50%{border-radius:26% 74% 51% 49%/22% 53% 47% 78%}}']}),i})()},{path:"**",redirectTo:"main"}];let L=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[g.Bz.forChild(x),g.Bz]}),i})();var S=s(1925);let T=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[c.ez,L,S.m]}),i})()}}]);