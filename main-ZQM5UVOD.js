import{k as Z,q as X}from"./chunk-WJZEPXCR.js";import{I as Y,O as G,a as V,c as z,d as L,e as A,f as H,g as I,h as U,i as W,j as F}from"./chunk-KTMXBOQA.js";import{f as J,g as p,h as N,m as K,n as R,p as Q,u as _}from"./chunk-LUKAJ5E2.js";import{Ba as u,C as E,Qa as x,Ra as g,Ta as y,U as O,V as P,Va as D,Vb as M,Wa as v,Y as l,Z as d,ba as f,ca as c,cc as B,ha as j,ia as m,ka as T,lb as k,o as S}from"./chunk-O46NLII2.js";var C=(o,e)=>{let r=localStorage.getItem("token"),t=c(W);return r!=null?!0:(t.navigate(["/login"]),!1)};var ae=[{path:"",loadChildren:()=>import("./chunk-GGY5PRP2.js").then(o=>o.PaginaInicialModule),canActivate:[C]},{path:"pagina-inicial",loadChildren:()=>import("./chunk-GGY5PRP2.js").then(o=>o.PaginaInicialModule),canActivate:[C]},{path:"login",loadChildren:()=>import("./chunk-2E54EWJB.js").then(o=>o.LoginModule)}],$=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=d({imports:[F.forRoot(ae),F]});let o=e;return o})();var q=(()=>{let e=class e{constructor(){this.title="frontend"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=j({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(i,n){i&1&&k(0,"router-outlet")},dependencies:[U]});let o=e;return o})();var se="@",le=(()=>{let e=class e{constructor(t,i,n,s,a){this.doc=t,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=c(g,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-OTACWJ7C.js")).catch(i=>{throw new P(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,i){let n=this.delegate.createRenderer(t,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new w(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let ne=a.createRenderer(t,i);s.use(ne)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){x()},e.\u0275prov=l({token:e,factory:e.\u0275fac});let o=e;return o})(),w=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,i){this.delegate.insertBefore(e,r,t,i)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,i){this.delegate.setAttribute(e,r,t,i)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,i){this.delegate.setStyle(e,r,t,i)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(i=>i.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(i=>i.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(se)}};function ee(o="animations"){return D("NgAsyncAnimations"),T([{provide:y,useFactory:(e,r,t)=>new le(e,r,t,o),deps:[M,A,v]},{provide:u,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var de=(()=>{let e=class e extends R{constructor(t,i,n){super(t,i,n,c(g,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(i){return new(i||e)(f(M),f(p),f(N))},e.\u0275prov=l({token:e,factory:e.\u0275fac});let o=e;return o})();function ce(){return new K}function me(o,e,r){return new _(o,e,r)}var oe=[{provide:N,useFactory:ce},{provide:R,useClass:de},{provide:y,useFactory:me,deps:[A,R,v]}],te=[{provide:p,useFactory:()=>new Q},{provide:u,useValue:"BrowserAnimations"},...oe],ue=[{provide:p,useClass:J},{provide:u,useValue:"NoopAnimations"},...oe],re=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:t.disableAnimations?ue:te}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=d({providers:te,imports:[I]});let o=e;return o})();var b=(()=>{let e=class e{intercept(t,i){let n=localStorage.getItem("token");return n!=null&&(t=t.clone({setHeaders:{Authorization:"Bearer "+n}})),t.clone().url.match("http://localhost:9090/auth/login"),i.handle(t).pipe(O(a=>{a instanceof V&&a.url?.match("http://localhost:9090/auth/login")&&localStorage.setItem("token",a.body.token),console.log(a)}),E(a=>((a.status===401||a.status===403)&&localStorage.removeItem("token"),S(()=>a))))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=l({token:e,factory:e.\u0275fac});let o=e;return o})();var ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e,bootstrap:[q]}),e.\u0275inj=d({providers:[ee(),b,{provide:z,useClass:b,multi:!0}],imports:[I,B,$,X,Y,Z,re,L,G]});let o=e;return o})();H().bootstrapModule(ie).catch(o=>console.error(o));
