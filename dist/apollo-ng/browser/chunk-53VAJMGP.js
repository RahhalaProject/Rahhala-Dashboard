import{$ as Zo,$a as Jo,A as qo,Ab as ke,Bb as Ae,Ca as z,Cb as or,Da as Qo,Db as me,E as Ni,Eb as be,Fb as Li,Gb as rr,Ha as ie,Ia as Ln,Ib as sr,Jb as mt,Ka as Xt,Kb as ar,L as Ko,Lb as N,Ma as xe,Mb as It,Na as E,Nb as Mt,O as j,P as On,Pa as Pn,Q as Me,R as v,S as R,Sa as G,Ta as k,U as C,Ua as I,Ub as O,V as de,Va as Bn,W as f,Wa as w,Wb as Pi,X as Rn,Xa as X,Xb as Qt,Ya as Ce,_ as Yo,_a as Vn,a as b,aa as Et,ab as er,b as se,ba as wt,c as Ii,ca as ot,d as Nn,db as fe,ea as St,eb as Tt,fa as ce,fc as lr,g as Mi,ga as kn,gb as Ft,hb as tr,hc as Bi,ia as Xo,ib as nr,ic as ur,j as Ue,ja as W,jb as x,jc as Ee,kb as Ne,kc as K,lb as Oe,lc as le,m as zo,ma as Oi,mb as Ye,n as xi,na as rt,nb as Ri,nc as F,oa as _,ob as ki,oc as Vi,pb as ft,qa as De,qb as $n,qc as bt,r as ht,rb as jn,rc as dr,sb as gt,sc as cr,tb as Un,ua as At,ub as ir,uc as A,vb as ge,vc as Ze,wb as Q,x as Go,xb as _e,y as Wo,yb as J,zb as Re}from"./chunk-5F5CXVEU.js";var fr=null;function yt(){return fr}function wl(t){fr??=t}var $i=class{},Jt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>f(gr),providedIn:"platform"})}return t})(),Sl=new C(""),gr=(()=>{class t extends Jt{_location;_history;_doc=f(ce);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return yt().getBaseHref(this._doc)}onPopState(e){let n=yt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=yt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Hn(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function pr(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Le(t){return t&&t[0]!=="?"?`?${t}`:t}var xt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>f(mr),providedIn:"root"})}return t})(),zn=new C(""),mr=(()=>{class t extends xt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(ce).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Hn(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Le(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+Le(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+Le(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(de(Jt),de(zn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),br=(()=>{class t{_subject=new Ue;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Fl(pr(hr(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Le(n))}normalize(e){return t.stripTrailingSlash(Tl(this._basePath,hr(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Le(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Le(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=Le;static joinWithSlash=Hn;static stripTrailingSlash=pr;static \u0275fac=function(n){return new(n||t)(de(xt))};static \u0275prov=v({token:t,factory:()=>Al(),providedIn:"root"})}return t})();function Al(){return new br(de(xt))}function Tl(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function hr(t){return t.replace(/\/index.html$/,"")}function Fl(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Il=(()=>{class t extends xt{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Hn(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+Le(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+Le(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(de(Jt),de(zn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),wr={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},Yi=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(Yi||{});var pe=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(pe||{}),B=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(B||{}),ye=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(ye||{}),ve={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Sr(t){return ge(t)[Q.LocaleId]}function Ar(t,i,e){let n=ge(t),o=[n[Q.DayPeriodsFormat],n[Q.DayPeriodsStandalone]],r=Te(o,i);return Te(r,e)}function Tr(t,i,e){let n=ge(t),o=[n[Q.DaysFormat],n[Q.DaysStandalone]],r=Te(o,i);return Te(r,e)}function Fr(t,i,e){let n=ge(t),o=[n[Q.MonthsFormat],n[Q.MonthsStandalone]],r=Te(o,i);return Te(r,e)}function Ir(t,i){let n=ge(t)[Q.Eras];return Te(n,i)}function en(t,i){let e=ge(t);return Te(e[Q.DateFormat],i)}function tn(t,i){let e=ge(t);return Te(e[Q.TimeFormat],i)}function nn(t,i){let n=ge(t)[Q.DateTimeFormat];return Te(n,i)}function He(t,i){let e=ge(t),n=e[Q.NumberSymbols][i];if(typeof n>"u"){if(i===ve.CurrencyDecimal)return e[Q.NumberSymbols][ve.Decimal];if(i===ve.CurrencyGroup)return e[Q.NumberSymbols][ve.Group]}return n}function Mr(t,i){return ge(t)[Q.NumberFormats][i]}function Ml(t){return ge(t)[Q.Currencies]}function xr(t){if(!t[Q.ExtraData])throw new j(2303,!1)}function Nr(t){let i=ge(t);return xr(i),(i[Q.ExtraData][2]||[]).map(n=>typeof n=="string"?ji(n):[ji(n[0]),ji(n[1])])}function Or(t,i,e){let n=ge(t);xr(n);let o=[n[Q.ExtraData][0],n[Q.ExtraData][1]],r=Te(o,i)||[];return Te(r,e)||[]}function Te(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new j(2304,!1)}function ji(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}function Rr(t,i,e="en"){let n=Ml(e)[t]||wr[t]||[],o=n[1];return i==="narrow"&&typeof o=="string"?o:n[0]||t}var xl=2;function kr(t){let i,e=wr[t];return e&&(i=e[2]),typeof i=="number"?i:xl}var Nl=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Gn={},Ol=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Lr(t,i,e,n){let o=Ul(t);i=Xe(e,i)||i;let s=[],a;for(;i;)if(a=Ol.exec(i),a){s=s.concat(a.slice(1));let d=s.pop();if(!d)break;i=d}else{s.push(i);break}let l=o.getTimezoneOffset();n&&(l=Br(n,l),o=jl(o,n));let u="";return s.forEach(d=>{let c=Vl(d);u+=c?c(o,e,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function Zn(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function Xe(t,i){let e=Sr(t);if(Gn[e]??={},Gn[e][i])return Gn[e][i];let n="";switch(i){case"shortDate":n=en(t,ye.Short);break;case"mediumDate":n=en(t,ye.Medium);break;case"longDate":n=en(t,ye.Long);break;case"fullDate":n=en(t,ye.Full);break;case"shortTime":n=tn(t,ye.Short);break;case"mediumTime":n=tn(t,ye.Medium);break;case"longTime":n=tn(t,ye.Long);break;case"fullTime":n=tn(t,ye.Full);break;case"short":let o=Xe(t,"shortTime"),r=Xe(t,"shortDate");n=Wn(nn(t,ye.Short),[o,r]);break;case"medium":let s=Xe(t,"mediumTime"),a=Xe(t,"mediumDate");n=Wn(nn(t,ye.Medium),[s,a]);break;case"long":let l=Xe(t,"longTime"),u=Xe(t,"longDate");n=Wn(nn(t,ye.Long),[l,u]);break;case"full":let d=Xe(t,"fullTime"),c=Xe(t,"fullDate");n=Wn(nn(t,ye.Full),[d,c]);break}return n&&(Gn[e][i]=n),n}function Wn(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function Pe(t,i,e="-",n,o){let r="";(t<0||o&&t<=0)&&(o?t=-t+1:(t=-t,r=e));let s=String(t);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),r+s}function Rl(t,i){return Pe(t,3).substring(0,i)}function te(t,i,e=0,n=!1,o=!1){return function(r,s){let a=kl(t,r);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return Rl(a,i);let l=He(s,ve.MinusSign);return Pe(a,i,l,n,o)}}function kl(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new j(2301,!1)}}function H(t,i,e=pe.Format,n=!1){return function(o,r){return Ll(o,r,t,i,e,n)}}function Ll(t,i,e,n,o,r){switch(e){case 2:return Fr(i,o,n)[t.getMonth()];case 1:return Tr(i,o,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(r){let u=Nr(i),d=Or(i,o,n),c=u.findIndex(p=>{if(Array.isArray(p)){let[h,g]=p,D=s>=h.hours&&a>=h.minutes,m=s<g.hours||s===g.hours&&a<g.minutes;if(h.hours<g.hours){if(D&&m)return!0}else if(D||m)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(c!==-1)return d[c]}return Ar(i,o,n)[s<12?0:1];case 3:return Ir(i,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new j(2302,!1)}}function qn(t){return function(i,e,n){let o=-1*n,r=He(e,ve.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case 0:return(o>=0?"+":"")+Pe(s,2,r)+Pe(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+Pe(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+Pe(s,2,r)+":"+Pe(Math.abs(o%60),2,r);case 3:return n===0?"Z":(o>=0?"+":"")+Pe(s,2,r)+":"+Pe(Math.abs(o%60),2,r);default:throw new j(2310,!1)}}}var Pl=0,Yn=4;function Bl(t){let i=Zn(t,Pl,1).getDay();return Zn(t,0,1+(i<=Yn?Yn:Yn+7)-i)}function Pr(t){let i=t.getDay(),e=i===0?-3:Yn-i;return Zn(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Ui(t,i=!1){return function(e,n){let o;if(i){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();o=1+Math.floor((s+r)/7)}else{let r=Pr(e),s=Bl(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return Pe(o,t,He(n,ve.MinusSign))}}function Kn(t,i=!1){return function(e,n){let r=Pr(e).getFullYear();return Pe(r,t,He(n,ve.MinusSign),i)}}var Hi={};function Vl(t){if(Hi[t])return Hi[t];let i;switch(t){case"G":case"GG":case"GGG":i=H(3,B.Abbreviated);break;case"GGGG":i=H(3,B.Wide);break;case"GGGGG":i=H(3,B.Narrow);break;case"y":i=te(0,1,0,!1,!0);break;case"yy":i=te(0,2,0,!0,!0);break;case"yyy":i=te(0,3,0,!1,!0);break;case"yyyy":i=te(0,4,0,!1,!0);break;case"Y":i=Kn(1);break;case"YY":i=Kn(2,!0);break;case"YYY":i=Kn(3);break;case"YYYY":i=Kn(4);break;case"M":case"L":i=te(1,1,1);break;case"MM":case"LL":i=te(1,2,1);break;case"MMM":i=H(2,B.Abbreviated);break;case"MMMM":i=H(2,B.Wide);break;case"MMMMM":i=H(2,B.Narrow);break;case"LLL":i=H(2,B.Abbreviated,pe.Standalone);break;case"LLLL":i=H(2,B.Wide,pe.Standalone);break;case"LLLLL":i=H(2,B.Narrow,pe.Standalone);break;case"w":i=Ui(1);break;case"ww":i=Ui(2);break;case"W":i=Ui(1,!0);break;case"d":i=te(2,1);break;case"dd":i=te(2,2);break;case"c":case"cc":i=te(7,1);break;case"ccc":i=H(1,B.Abbreviated,pe.Standalone);break;case"cccc":i=H(1,B.Wide,pe.Standalone);break;case"ccccc":i=H(1,B.Narrow,pe.Standalone);break;case"cccccc":i=H(1,B.Short,pe.Standalone);break;case"E":case"EE":case"EEE":i=H(1,B.Abbreviated);break;case"EEEE":i=H(1,B.Wide);break;case"EEEEE":i=H(1,B.Narrow);break;case"EEEEEE":i=H(1,B.Short);break;case"a":case"aa":case"aaa":i=H(0,B.Abbreviated);break;case"aaaa":i=H(0,B.Wide);break;case"aaaaa":i=H(0,B.Narrow);break;case"b":case"bb":case"bbb":i=H(0,B.Abbreviated,pe.Standalone,!0);break;case"bbbb":i=H(0,B.Wide,pe.Standalone,!0);break;case"bbbbb":i=H(0,B.Narrow,pe.Standalone,!0);break;case"B":case"BB":case"BBB":i=H(0,B.Abbreviated,pe.Format,!0);break;case"BBBB":i=H(0,B.Wide,pe.Format,!0);break;case"BBBBB":i=H(0,B.Narrow,pe.Format,!0);break;case"h":i=te(3,1,-12);break;case"hh":i=te(3,2,-12);break;case"H":i=te(3,1);break;case"HH":i=te(3,2);break;case"m":i=te(4,1);break;case"mm":i=te(4,2);break;case"s":i=te(5,1);break;case"ss":i=te(5,2);break;case"S":i=te(6,1);break;case"SS":i=te(6,2);break;case"SSS":i=te(6,3);break;case"Z":case"ZZ":case"ZZZ":i=qn(0);break;case"ZZZZZ":i=qn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=qn(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=qn(2);break;default:return null}return Hi[t]=i,i}function Br(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function $l(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function jl(t,i,e){let o=t.getTimezoneOffset(),r=Br(i,o);return $l(t,-1*(r-o))}function Ul(t){if(yr(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[o,r=1,s=1]=t.split("-").map(a=>+a);return Zn(o,r-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Nl))return Hl(n)}let i=new Date(t);if(!yr(i))throw new j(2311,!1);return i}function Hl(t){let i=new Date(0),e=0,n=0,o=t[8]?i.setUTCFullYear:i.setFullYear,r=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),o.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(i,s,a,l,u),i}function yr(t){return t instanceof Date&&!isNaN(t.valueOf())}var zl=/^(\d+)?\.((\d+)(-(\d+))?)?$/,vr=22,Xn=".",on="0",Gl=";",Wl=",",zi="#",Dr="\xA4";function ql(t,i,e,n,o,r,s=!1){let a="",l=!1;if(!isFinite(t))a=He(e,ve.Infinity);else{let u=Zl(t);s&&(u=Yl(u));let d=i.minInt,c=i.minFrac,p=i.maxFrac;if(r){let T=r.match(zl);if(T===null)throw new j(2306,!1);let $=T[1],P=T[3],re=T[5];$!=null&&(d=Gi($)),P!=null&&(c=Gi(P)),re!=null?p=Gi(re):P!=null&&c>p&&(p=c)}Xl(u,c,p);let h=u.digits,g=u.integerLen,D=u.exponent,m=[];for(l=h.every(T=>!T);g<d;g++)h.unshift(0);for(;g<0;g++)h.unshift(0);g>0?m=h.splice(g,h.length):(m=h,h=[0]);let y=[];for(h.length>=i.lgSize&&y.unshift(h.splice(-i.lgSize,h.length).join(""));h.length>i.gSize;)y.unshift(h.splice(-i.gSize,h.length).join(""));h.length&&y.unshift(h.join("")),a=y.join(He(e,n)),m.length&&(a+=He(e,o)+m.join("")),D&&(a+=He(e,ve.Exponential)+"+"+D)}return t<0&&!l?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function Vr(t,i,e,n,o){let r=Mr(i,Yi.Currency),s=Kl(r,He(i,ve.MinusSign));return s.minFrac=kr(n),s.maxFrac=s.minFrac,ql(t,s,i,ve.CurrencyGroup,ve.CurrencyDecimal,o).replace(Dr,e).replace(Dr,"").trim()}function Kl(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(Gl),o=n[0],r=n[1],s=o.indexOf(Xn)!==-1?o.split(Xn):[o.substring(0,o.lastIndexOf(on)+1),o.substring(o.lastIndexOf(on)+1)],a=s[0],l=s[1]||"";e.posPre=a.substring(0,a.indexOf(zi));for(let d=0;d<l.length;d++){let c=l.charAt(d);c===on?e.minFrac=e.maxFrac=d+1:c===zi?e.maxFrac=d+1:e.posSuf+=c}let u=a.split(Wl);if(e.gSize=u[1]?u[1].length:0,e.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let d=o.length-e.posPre.length-e.posSuf.length,c=r.indexOf(zi);e.negPre=r.substring(0,c).replace(/'/g,""),e.negSuf=r.slice(c+d).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Yl(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function Zl(t){let i=Math.abs(t)+"",e=0,n,o,r,s,a;for((o=i.indexOf(Xn))>-1&&(i=i.replace(Xn,"")),(r=i.search(/e/i))>0?(o<0&&(o=r),o+=+i.slice(r+1),i=i.substring(0,r)):o<0&&(o=i.length),r=0;i.charAt(r)===on;r++);if(r===(a=i.length))n=[0],o=1;else{for(a--;i.charAt(a)===on;)a--;for(o-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(i.charAt(r))}return o>vr&&(n=n.splice(0,vr-1),e=o-1,o=1),{digits:n,exponent:e,integerLen:o}}function Xl(t,i,e){if(i>e)throw new j(2307,!1);let n=t.digits,o=n.length-t.integerLen,r=Math.min(Math.max(i,o),e),s=r+t.integerLen,a=n[s];if(s>0){n.splice(Math.max(t.integerLen,s));for(let c=s;c<n.length;c++)n[c]=0}else{o=Math.max(0,o),t.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let c=1;c<s;c++)n[c]=0}if(a>=5)if(s-1<0){for(let c=0;c>s;c--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[s-1]++;for(;o<Math.max(0,r);o++)n.push(0);let l=r!==0,u=i+t.integerLen,d=n.reduceRight(function(c,p,h,g){return p=p+c,g[h]=p<10?p:p-10,l&&(g[h]===0&&h>=u?g.pop():l=!1),p>=10?1:0},0);d&&(n.unshift(d),t.integerLen++)}function Gi(t){let i=parseInt(t);if(isNaN(i))throw new j(2305,!1);return i}var Wi=/\s+/,Cr=[],Ql=(()=>{class t{_ngEl;_renderer;initialClasses=Cr;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Wi):Cr}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Wi):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Wi).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(E(De),E(xe))};static \u0275dir=I({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Qn=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},$r=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new Qn(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),_r(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);_r(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(E(Pn),E(Xt),E(dr))};static \u0275dir=I({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function _r(t,i){t.context.$implicit=i.item}var Zi=(()=>{class t{_viewContainer;_context=new Jn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Er(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Er(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(E(Pn),E(Xt))};static \u0275dir=I({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Jn=class{$implicit=null;ngIf=null};function Er(t,i){if(t&&!t.createEmbeddedView)throw new j(2020,!1)}var Xi=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:Qo.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(E(De),E(cr),E(xe))};static \u0275dir=I({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),vt=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(E(Pn))};static \u0275dir=I({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[rt]})}return t})();function Qi(t,i){return new j(2100,!1)}var qi=class{createSubscription(i,e,n){return Ee(()=>i.subscribe({next:e,error:n}))}dispose(i){Ee(()=>i.unsubscribe())}},Ki=class{createSubscription(i,e,n){return i.then(o=>e?.(o),o=>n?.(o)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},Jl=new Ki,eu=new qi,tu=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=f(Xo);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Vn(e))return Jl;if(Jo(e))return eu;throw Qi(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(E(bt,16))};static \u0275pipe=Bn({name:"async",type:t,pure:!1})}return t})();var nu="mediumDate",jr=new C(""),Ur=new C(""),iu=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,o){this.locale=e,this.defaultTimezone=n,this.defaultOptions=o}transform(e,n,o,r){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??nu,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Lr(e,s,r||this.locale,a)}catch(s){throw Qi(t,s.message)}}static \u0275fac=function(n){return new(n||t)(E(Bi,16),E(jr,24),E(Ur,24))};static \u0275pipe=Bn({name:"date",type:t,pure:!0})}return t})();var ou=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,o="symbol",r,s){if(!ru(e))return null;s||=this._locale,typeof o=="boolean"&&(o=o?"symbol":"code");let a=n||this._defaultCurrencyCode;o!=="code"&&(o==="symbol"||o==="symbol-narrow"?a=Rr(a,o==="symbol"?"wide":"narrow",s):a=o);try{let l=su(e);return Vr(l,s,a,n,r)}catch(l){throw Qi(t,l.message)}}static \u0275fac=function(n){return new(n||t)(E(Bi,16),E(ur,16))};static \u0275pipe=Bn({name:"currency",type:t,pure:!0})}return t})();function ru(t){return!(t==null||t===""||t!==t)}function su(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new j(2309,!1);return t}var ne=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({})}return t})();function Ji(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var rn=class{};var uu="browser",du="server";function ei(t){return t===uu}function to(t){return t===du}var hh=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new eo(f(ce),window)})}return t})(),eo=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(se(b({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=cu(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(On(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(se(b({},e),{left:o-s[0],top:r-s[1]}))}};function cu(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(s)return s}o=n.nextNode()}}return null}function st(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[st(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Hr(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Dt(t,i){if(t&&i){let e=n=>{Hr(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function pu(){return window.innerWidth-document.documentElement.offsetWidth}function zr(t){typeof t=="string"?Dt(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,pu()+"px"),Dt(document.body,t?.className||"p-overflow-hidden"))}function at(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Gr(t){typeof t=="string"?at(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),at(document.body,t?.className||"p-overflow-hidden"))}function sn(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Wr(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],o=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",i.width=o.width||t.offsetWidth,i.height=o.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function qr(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function io(t){return t?Math.abs(t.scrollLeft):0}function hu(){let t=document.documentElement;return(window.pageXOffset||io(t))-(t.clientLeft||0)}function fu(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function gu(t){return t?getComputedStyle(t).direction==="rtl":!1}function Dh(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Wr(t),l=a.height,u=a.width,d=i.offsetHeight,c=i.offsetWidth,p=i.getBoundingClientRect(),h=fu(),g=hu(),D=qr(),m,y,T="top";p.top+d+l>D.height?(m=p.top+h-l,T="bottom",m<0&&(m=h)):m=d+p.top+h,p.left+u>D.width?y=Math.max(0,p.left+g+c-u):y=p.left+g,gu(t)?t.style.insetInlineEnd=y+"px":t.style.insetInlineStart=y+"px",t.style.top=m+"px",t.style.transformOrigin=T,e&&(t.style.marginTop=T==="bottom"?`calc(${(o=(n=sn(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=sn(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Ch(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Kr(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function _h(t,i,e=!0,n=void 0){var o;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Wr(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=qr(),u,d,c=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,c="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?d=a.left*-1:a.left+r.width>l.width?d=(a.left+r.width-l.width)*-1:d=0,t.style.top=u+"px",t.style.insetInlineStart=d+"px",t.style.transformOrigin=c,e){let p=(o=sn(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=c==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function Yr(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function mu(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Yr(t))}function an(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function Zr(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),an(i)?i:void 0}function bu(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=Zr(r);return mu(s)?s:r?.nodeType===9?r:void 0}}}function Eh(t,i){let e=bu(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function ti(t,i={}){if(an(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?e(n,u):Object.entries(u).map(([p,h])=>n==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?ti(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function ni(t,i={},...e){if(t){let n=document.createElement(t);return ti(n,i),n.append(...e),n}}function wh(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function yu(t,i){return an(t)?Array.from(t.querySelectorAll(i)):[]}function Nt(t,i){return an(t)?t.matches(i)?t:t.querySelector(i):null}function Sh(t,i){t&&document.activeElement!==t&&t.focus(i)}function Xr(t,i=""){let e=yu(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function Ah(t,i){let e=Xr(t,i);return e.length>0?e[0]:null}function oo(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Th(t){var i;if(t){let e=(i=Yr(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function Fh(t,i){let e=Xr(t,i);return e.length>0?e[e.length-1]:null}function Qr(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||io(document.documentElement)||io(document.body)||0)}}return{top:"auto",left:"auto"}}function ro(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Ih(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function so(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Mh(t){return!!(t&&t.offsetParent!=null)}function xh(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Jr(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Nh(t,i){let e=Zr(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function Oh(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,u=t.clientHeight,d=ro(i);a<0?t.scrollTop=l+a:a+d>u&&(t.scrollTop=l+a-u+d)}function es(t,i="",e){an(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function ts(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var vu=Object.defineProperty,ns=Object.getOwnPropertySymbols,Du=Object.prototype.hasOwnProperty,Cu=Object.prototype.propertyIsEnumerable,is=(t,i,e)=>i in t?vu(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,os=(t,i)=>{for(var e in i||(i={}))Du.call(i,e)&&is(t,e,i[e]);if(ns)for(var e of ns(i))Cu.call(i,e)&&is(t,e,i[e]);return t};function rs(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[rs(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function _u(t){return typeof t=="function"&&"call"in t&&"apply"in t}function ao(...t){return t?.reduce((i,e={})=>{for(let n in e){let o=e[n];if(n==="style")i.style=os(os({},i.style),e.style);else if(n==="class"||n==="className")i[n]=rs(i[n],e[n]);else if(_u(o)){let r=i[n];i[n]=r?(...s)=>{r(...s),o(...s)}:o}else i[n]=o}return i},{})}var Eu=Object.defineProperty,ss=Object.getOwnPropertySymbols,wu=Object.prototype.hasOwnProperty,Su=Object.prototype.propertyIsEnumerable,as=(t,i,e)=>i in t?Eu(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Au=(t,i)=>{for(var e in i||(i={}))wu.call(i,e)&&as(t,e,i[e]);if(ss)for(var e of ss(i))Su.call(i,e)&&as(t,e,i[e]);return t};function ze(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function lo(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!lo(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let d=t instanceof RegExp,c=i instanceof RegExp;if(d!=c)return!1;if(d&&c)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!lo(t[a],i[a],e))return!1;return!0}function Tu(t,i){return lo(t,i)}function ii(t){return typeof t=="function"&&"call"in t&&"apply"in t}function L(t){return!ze(t)}function lt(t,i){if(!t||!i)return null;try{let e=t[i];if(L(e))return e}catch{}if(Object.keys(t).length){if(ii(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function Ge(t,i,e){return e?lt(t,e)===lt(i,e):Tu(t,i)}function Ph(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Ge(t,e))return!0}return!1}function Be(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function ls(t={},i={}){let e=Au({},t);return Object.keys(i).forEach(n=>{let o=n;Be(i[o])&&o in t&&Be(t[o])?e[o]=ls(t[o],i[o]):e[o]=i[o]}),e}function uo(...t){return t.reduce((i,e,n)=>n===0?e:ls(i,e),{})}function Bh(t,i){let e=-1;if(L(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function ae(t,...i){return ii(t)?t(...i):t}function Fe(t,i=!0){return typeof t=="string"&&(i||t!=="")}function ut(t){return Fe(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function oi(t,i="",e={}){let n=ut(i).split("."),o=n.shift();if(o){if(Be(t)){let r=Object.keys(t).find(s=>ut(s)===o)||"";return oi(ae(t[r],e),n.join("."),e)}return}return ae(t,e)}function co(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Vh(t){return t instanceof Date}function us(t){return L(t)&&!isNaN(t)}function $h(t=""){return L(t)&&t.length===1&&!!t.match(/\S| /)}function Ve(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function po(...t){return uo(...t)}function Ct(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function we(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function ri(t){return Fe(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}var si={};function ln(t="pui_id_"){return Object.hasOwn(si,t)||(si[t]=0),si[t]++,`${t}${si[t]}`}var ue=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),Wh=(()=>{class t{static AND="and";static OR="or"}return t})(),qh=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let u of n){let d=lt(l,u);if(this.filters[r](d,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=we(n.toString()).toLocaleLowerCase(o);return we(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=we(n.toString()).toLocaleLowerCase(o);return we(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=we(n.toString()).toLocaleLowerCase(o);return we(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=we(n.toString()).toLocaleLowerCase(o),s=we(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:we(e.toString()).toLocaleLowerCase(o)==we(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:we(e.toString()).toLocaleLowerCase(o)!=we(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(Ge(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kh=(()=>{class t{messageSource=new Ue;clearSource=new Ue;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Yh=(()=>{class t{clickSource=new Ue;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ot=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(E(Xt))};static \u0275dir=I({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Y=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[ne]})}return t})(),Zh=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var vs=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(E(xe),E(De))};static \u0275dir=I({type:t})}return t})(),Fu=(()=>{class t extends vs{static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=I({type:t,features:[w]})}return t})(),Qe=new C("");var Iu={provide:Qe,useExisting:Me(()=>Ds),multi:!0};function Mu(){let t=yt()?yt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var xu=new C(""),Ds=(()=>{class t extends vs{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Mu())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(E(xe),E(De),E(xu,8))};static \u0275dir=I({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&_e("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[O([Iu]),w]})}return t})();function yo(t){return t==null||vo(t)===0}function vo(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Do=new C(""),Co=new C(""),Nu=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ds=class{static min(i){return Ou(i)}static max(i){return Ru(i)}static required(i){return ku(i)}static requiredTrue(i){return Lu(i)}static email(i){return Pu(i)}static minLength(i){return Bu(i)}static maxLength(i){return Vu(i)}static pattern(i){return $u(i)}static nullValidator(i){return Cs()}static compose(i){return Ts(i)}static composeAsync(i){return Is(i)}};function Ou(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Ru(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function ku(t){return yo(t.value)?{required:!0}:null}function Lu(t){return t.value===!0?null:{required:!0}}function Pu(t){return yo(t.value)||Nu.test(t.value)?null:{email:!0}}function Bu(t){return i=>{let e=i.value?.length??vo(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Vu(t){return i=>{let e=i.value?.length??vo(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function $u(t){if(!t)return Cs;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(yo(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function Cs(t){return null}function _s(t){return t!=null}function Es(t){return Vn(t)?zo(t):t}function ws(t){let i={};return t.forEach(e=>{i=e!=null?b(b({},i),e):i}),Object.keys(i).length===0?null:i}function Ss(t,i){return i.map(e=>e(t))}function ju(t){return!t.validate}function As(t){return t.map(i=>ju(i)?i:e=>i.validate(e))}function Ts(t){if(!t)return null;let i=t.filter(_s);return i.length==0?null:function(e){return ws(Ss(e,i))}}function Fs(t){return t!=null?Ts(As(t)):null}function Is(t){if(!t)return null;let i=t.filter(_s);return i.length==0?null:function(e){let n=Ss(e,i).map(Es);return Go(n).pipe(ht(ws))}}function Ms(t){return t!=null?Is(As(t)):null}function cs(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function xs(t){return t._rawValidators}function Ns(t){return t._rawAsyncValidators}function ho(t){return t?Array.isArray(t)?t:[t]:[]}function li(t,i){return Array.isArray(t)?t.includes(i):t===i}function ps(t,i){let e=ho(i);return ho(t).forEach(o=>{li(e,o)||e.push(o)}),e}function hs(t,i){return ho(i).filter(e=>!li(t,e))}var ui=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Fs(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ms(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},_t=class extends ui{name;get formDirective(){return null}get path(){return null}},$e=class extends ui{_parent=null;name=null;valueAccessor=null},di=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Uu={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},mf=se(b({},Uu),{"[class.ng-submitted]":"isSubmitted"}),Os=(()=>{class t extends di{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(E($e,2))};static \u0275dir=I({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&mt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[w]})}return t})(),bf=(()=>{class t extends di{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(E(_t,10))};static \u0275dir=I({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&mt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[w]})}return t})();var un="VALID",ai="INVALID",Rt="PENDING",dn="DISABLED",dt=class{},ci=class extends dt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},cn=class extends dt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},pn=class extends dt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},kt=class extends dt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},fo=class extends dt{source;constructor(i){super(),this.source=i}},fn=class extends dt{source;constructor(i){super(),this.source=i}};function _o(t){return(gi(t)?t.validators:t)||null}function Hu(t){return Array.isArray(t)?Fs(t):t||null}function Eo(t,i){return(gi(i)?i.asyncValidators:t)||null}function zu(t){return Array.isArray(t)?Ms(t):t||null}function gi(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Rs(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new j(1e3,"");if(!n[e])throw new j(1001,"")}function ks(t,i,e){t._forEachChild((n,o)=>{if(e[o]===void 0)throw new j(1002,"")})}var Lt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ee(this.statusReactive)}set status(i){Ee(()=>this.statusReactive.set(i))}_status=K(()=>this.statusReactive());statusReactive=W(void 0);get valid(){return this.status===un}get invalid(){return this.status===ai}get pending(){return this.status==Rt}get disabled(){return this.status===dn}get enabled(){return this.status!==dn}errors;get pristine(){return Ee(this.pristineReactive)}set pristine(i){Ee(()=>this.pristineReactive.set(i))}_pristine=K(()=>this.pristineReactive());pristineReactive=W(!0);get dirty(){return!this.pristine}get touched(){return Ee(this.touchedReactive)}set touched(i){Ee(()=>this.touchedReactive.set(i))}_touched=K(()=>this.touchedReactive());touchedReactive=W(!1);get untouched(){return!this.touched}_events=new Ue;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(ps(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(ps(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(hs(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(hs(i,this._rawAsyncValidators))}hasValidator(i){return li(this._rawValidators,i)}hasAsyncValidator(i){return li(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(se(b({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new pn(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new pn(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(se(b({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new cn(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new cn(!0,n))}markAsPending(i={}){this.status=Rt;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new kt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(se(b({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=dn,this.errors=null,this._forEachChild(o=>{o.disable(se(b({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ci(this.value,n)),this._events.next(new kt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(se(b({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=un,this._forEachChild(n=>{n.enable(se(b({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(se(b({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===un||this.status===Rt)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ci(this.value,e)),this._events.next(new kt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(se(b({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?dn:un}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Rt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=Es(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new kt(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new ie,this.statusChanges=new ie}_calculateStatus(){return this._allControlsDisabled()?dn:this.errors?ai:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Rt)?Rt:this._anyControlsHaveStatus(ai)?ai:un}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new cn(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new pn(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){gi(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Hu(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=zu(this._rawAsyncValidators)}},pi=class extends Lt{constructor(i,e,n){super(_o(e),Eo(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){ks(this,!0,i),Object.keys(i).forEach(n=>{Rs(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fn(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((o,r)=>{n=e(n,o,r)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var go=class extends pi{};var mi=new C("",{providedIn:"root",factory:()=>bi}),bi="always";function Ls(t,i){return[...i.path,t]}function mo(t,i,e=bi){wo(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Wu(t,i),Ku(t,i),qu(t,i),Gu(t,i)}function fs(t,i,e=!0){let n=()=>{};i.valueAccessor&&(i.valueAccessor.registerOnChange(n),i.valueAccessor.registerOnTouched(n)),fi(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function hi(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Gu(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function wo(t,i){let e=xs(t);i.validator!==null?t.setValidators(cs(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ns(t);i.asyncValidator!==null?t.setAsyncValidators(cs(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();hi(i._rawValidators,o),hi(i._rawAsyncValidators,o)}function fi(t,i){let e=!1;if(t!==null){if(i.validator!==null){let o=xs(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(i.asyncValidator!==null){let o=Ns(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let n=()=>{};return hi(i._rawValidators,n),hi(i._rawAsyncValidators,n),e}function Wu(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ps(t,i)})}function qu(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ps(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Ps(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ku(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Yu(t,i){t==null,wo(t,i)}function Zu(t,i){return fi(t,i)}function Bs(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Xu(t){return Object.getPrototypeOf(t.constructor)===Fu}function Qu(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Vs(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===Ds?e=r:Xu(r)?n=r:o=r}),o||n||e||null}function Ju(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function gs(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function ms(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var hn=class extends Lt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(_o(e),Eo(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),gi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ms(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new fn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){gs(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){gs(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){ms(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var ed=t=>t instanceof hn;var td={provide:$e,useExisting:Me(()=>So)},bs=Promise.resolve(),So=(()=>{class t extends $e{_changeDetectorRef;callSetDisabledState;control=new hn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new ie;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Vs(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Bs(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){mo(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){bs.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&A(n);bs.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Ls(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(E(_t,9),E(Do,10),E(Co,10),E(Qe,10),E(bt,8),E(mi,8))};static \u0275dir=I({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[O([td]),w,rt]})}return t})();var vf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var $s=new C("");var nd={provide:_t,useExisting:Me(()=>id)},id=(()=>{class t extends _t{callSetDisabledState;get submitted(){return Ee(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=K(()=>this._submittedReactive());_submittedReactive=W(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new ie;constructor(e,n,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(fi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return mo(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){fs(e.control||null,e,!1),Ju(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this._submittedReactive.set(!0),Qu(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new fo(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,o=this.form.get(e.path);n!==o&&(fs(n||null,e),ed(o)&&(mo(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Yu(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&Zu(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){wo(this.form,this),this._oldForm&&fi(this._oldForm,this)}static \u0275fac=function(n){return new(n||t)(E(Do,10),E(Co,10),E(mi,8))};static \u0275dir=I({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&_e("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[O([nd]),w,rt]})}return t})();var od={provide:$e,useExisting:Me(()=>rd)},rd=(()=>{class t extends $e{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new ie;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Vs(this,r)}ngOnChanges(e){this._added||this._setUpControl(),Bs(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Ls(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(E(_t,13),E(Do,10),E(Co,10),E(Qe,10),E($s,8))};static \u0275dir=I({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[O([od]),w,rt]})}return t})();var js=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({})}return t})(),bo=class extends Lt{constructor(i,e,n){super(_o(e),Eo(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){ks(this,!1,i),i.forEach((n,o)=>{Rs(this,!1,o),this.at(o).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,o)=>{this.at(o)&&this.at(o).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,o)=>{n.reset(i[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fn(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};function ys(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Df=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let o=this._reduceControls(e),r={};return ys(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new pi(o,r)}record(e,n=null){let o=this._reduceControls(e);return new go(o,n)}control(e,n,o){let r={};return this.useNonNullable?(ys(n)?r=n:(r.validators=n,r.asyncValidators=o),new hn(e,se(b({},r),{nonNullable:!0}))):new hn(e,n,o)}array(e,n,o){let r=e.map(s=>this._createControl(s));return new bo(r,n,o)}_reduceControls(e){let n={};return Object.keys(e).forEach(o=>{n[o]=this._createControl(e[o])}),n}_createControl(e){if(e instanceof hn)return e;if(e instanceof Lt)return e;if(Array.isArray(e)){let n=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(n,o,r)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Us=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:mi,useValue:e.callSetDisabledState??bi}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[js]})}return t})(),Cf=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:$s,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:mi,useValue:e.callSetDisabledState??bi}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[js]})}return t})();var ad=Object.defineProperty,ld=Object.defineProperties,ud=Object.getOwnPropertyDescriptors,yi=Object.getOwnPropertySymbols,Gs=Object.prototype.hasOwnProperty,Ws=Object.prototype.propertyIsEnumerable,Hs=(t,i,e)=>i in t?ad(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,q=(t,i)=>{for(var e in i||(i={}))Gs.call(i,e)&&Hs(t,e,i[e]);if(yi)for(var e of yi(i))Ws.call(i,e)&&Hs(t,e,i[e]);return t},Bt=(t,i)=>ld(t,ud(i)),Je=(t,i)=>{var e={};for(var n in t)Gs.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&yi)for(var n of yi(t))i.indexOf(n)<0&&Ws.call(t,n)&&(e[n]=t[n]);return e};var dd=ts(),oe=dd,gn=/{([^}]*)}/g,qs=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Ks=/var\([^)]+\)/g;function zs(t){return Fe(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function cd(t){return Be(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function pd(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ao(t="",i=""){return pd(`${Fe(t,!1)&&Fe(i,!1)?`${t}-`:t}${i}`)}function Ys(t="",i=""){return`--${Ao(t,i)}`}function hd(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Zs(t,i="",e="",n=[],o){if(Fe(t)){let r=t.trim();if(hd(r))return;if(Ve(r,gn)){let s=r.replaceAll(gn,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(d=>Ve(u,d)));return`var(${Ys(e,ri(l.join("-")))}${L(o)?`, ${o}`:""})`});return Ve(s.replace(Ks,"0"),qs)?`calc(${s})`:s}return r}else if(us(t))return t}function fd(t,i,e){Fe(i,!1)&&t.push(`${i}:${e};`)}function Pt(t,i){return t?`${t}{${i}}`:""}function Xs(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,d="",c=null,p=0;for(;u<=s.length;){let h=s[u];if((h==='"'||h==="'"||h==="`")&&s[u-1]!=="\\"&&(c=c===h?null:h),!c&&(h==="("&&p++,h===")"&&p--,(h===","||u===s.length)&&p===0)){let g=d.trim();g.startsWith("dt(")?l.push(Xs(g,a)):l.push(n(g)),d="",u++;continue}h!==void 0&&(d+=h),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],u=t.slice(a+3,l),d=e(u,i),c=i(...d);t=t.slice(0,a)+c+t.slice(l+1)}return t}var Fo=t=>{var i;let e=M.getTheme(),n=To(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=To(e,t,void 0,"value");return{name:o,variable:n,value:r}},et=(...t)=>To(M.getTheme(),...t),To=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=M.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=Ve(i,gn)?i:`{${i}}`;return n==="value"||ze(n)&&a==="strict"?M.getTokenValue(i):Zs(l,void 0,s,[o.excludedKeyRegex],e)}return""};function Vt(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=ae(i[r],{dt:et}))!=null?s:"")},"");return Xs(e,et)}return ae(t,{dt:et})}var gd=(t={})=>{let{preset:i,options:e}=t;return{preset(n){return i=i?po(i,n):n,this},options(n){return e=e?q(q({},e),n):n,this},primaryPalette(n){let{semantic:o}=i||{};return i=Bt(q({},i),{semantic:Bt(q({},o),{primary:n})}),this},surfacePalette(n){var o,r;let{semantic:s}=i||{},a=n&&Object.hasOwn(n,"light")?n.light:n,l=n&&Object.hasOwn(n,"dark")?n.dark:n,u={colorScheme:{light:q(q({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:q(q({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return i=Bt(q({},i),{semantic:q(q({},s),u)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:o=!1}={}){return{preset:n?M.getPreset():i,options:o?M.getOptions():e}},update({mergePresets:n=!0,mergeOptions:o=!0}={}){let r={preset:n?po(M.getPreset(),i):i,options:o?q(q({},M.getOptions()),e):e};return M.setTheme(r),r},use(n){let o=this.define(n);return M.setTheme(o),o}}};function md(t,i={}){let e=M.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:d,path:c}=l.pop();for(let p in d){let h=d[p],g=cd(h),D=Ve(p,r)?Ao(c):Ao(c,ri(p));if(Be(g))l.push({node:g,path:D});else{let m=Ys(D),y=Zs(g,D,n,[r]);fd(a,m,y);let T=D;n&&T.startsWith(n+"-")&&(T=T.slice(n.length+1)),s.push(T.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Pt(o,u)}}var je={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return md(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,u,d,c;let{preset:p,options:h}=i,g,D,m,y,T,$,P;if(L(p)&&h.transform!=="strict"){let{primitive:re,semantic:he,extend:Se}=p,Ke=he||{},{colorScheme:pt}=Ke,Cn=Je(Ke,["colorScheme"]),_n=Se||{},{colorScheme:En}=_n,Yt=Je(_n,["colorScheme"]),Zt=pt||{},{dark:wn}=Zt,Sn=Je(Zt,["dark"]),An=En||{},{dark:Tn}=An,Fn=Je(An,["dark"]),In=L(re)?this._toVariables({primitive:re},h):{},Mn=L(Cn)?this._toVariables({semantic:Cn},h):{},xn=L(Sn)?this._toVariables({light:Sn},h):{},$o=L(wn)?this._toVariables({dark:wn},h):{},jo=L(Yt)?this._toVariables({semantic:Yt},h):{},Uo=L(Fn)?this._toVariables({light:Fn},h):{},Ho=L(Tn)?this._toVariables({dark:Tn},h):{},[sl,al]=[(r=In.declarations)!=null?r:"",In.tokens],[ll,ul]=[(s=Mn.declarations)!=null?s:"",Mn.tokens||[]],[dl,cl]=[(a=xn.declarations)!=null?a:"",xn.tokens||[]],[pl,hl]=[(l=$o.declarations)!=null?l:"",$o.tokens||[]],[fl,gl]=[(u=jo.declarations)!=null?u:"",jo.tokens||[]],[ml,bl]=[(d=Uo.declarations)!=null?d:"",Uo.tokens||[]],[yl,vl]=[(c=Ho.declarations)!=null?c:"",Ho.tokens||[]];g=this.transformCSS(t,sl,"light","variable",h,n,o),D=al;let Dl=this.transformCSS(t,`${ll}${dl}`,"light","variable",h,n,o),Cl=this.transformCSS(t,`${pl}`,"dark","variable",h,n,o);m=`${Dl}${Cl}`,y=[...new Set([...ul,...cl,...hl])];let _l=this.transformCSS(t,`${fl}${ml}color-scheme:light`,"light","variable",h,n,o),El=this.transformCSS(t,`${yl}color-scheme:dark`,"dark","variable",h,n,o);T=`${_l}${El}`,$=[...new Set([...gl,...bl,...vl])],P=ae(p.css,{dt:et})}return{primitive:{css:g,tokens:D},semantic:{css:m,tokens:y},global:{css:T,tokens:$},style:P}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,u;let d,c,p;if(L(i)&&e.transform!=="strict"){let h=t.replace("-directive",""),g=i,{colorScheme:D,extend:m,css:y}=g,T=Je(g,["colorScheme","extend","css"]),$=m||{},{colorScheme:P}=$,re=Je($,["colorScheme"]),he=D||{},{dark:Se}=he,Ke=Je(he,["dark"]),pt=P||{},{dark:Cn}=pt,_n=Je(pt,["dark"]),En=L(T)?this._toVariables({[h]:q(q({},T),re)},e):{},Yt=L(Ke)?this._toVariables({[h]:q(q({},Ke),_n)},e):{},Zt=L(Se)?this._toVariables({[h]:q(q({},Se),Cn)},e):{},[wn,Sn]=[(a=En.declarations)!=null?a:"",En.tokens||[]],[An,Tn]=[(l=Yt.declarations)!=null?l:"",Yt.tokens||[]],[Fn,In]=[(u=Zt.declarations)!=null?u:"",Zt.tokens||[]],Mn=this.transformCSS(h,`${wn}${An}`,"light","variable",e,o,r,s),xn=this.transformCSS(h,Fn,"dark","variable",e,o,r,s);d=`${Mn}${xn}`,c=[...new Set([...Sn,...Tn,...In])],p=ae(y,{dt:et})}return{css:d,tokens:c,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,d=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:u,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${ae(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,d])=>l.push(`${u}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,d])=>{if(Be(d)&&Object.hasOwn(d,"css")){let c=Ct(d.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${c}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((d,[c,p])=>d.push(`${c}="${p}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Ct(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&gn.test(this.value)){let c=this.value.trim().replace(gn,p=>{var h;let g=p.slice(1,-1),D=this.tokens[g];if(!D)return console.warn(`Token not found for path: ${g}`),"__UNRESOLVED__";let m=D.computed(a,l,u);return Array.isArray(m)&&m.length===2?`light-dark(${m[0].value},${m[1].value})`:(h=m?.value)!=null?h:"__UNRESOLVED__"});d=qs.test(c.replace(Ks,"0"))?`calc(${c})`:c}return ze(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(a,l,u)=>{Object.entries(a).forEach(([d,c])=>{let p=Ve(d,i.variable.excludedKeyRegex)?l:l?`${l}.${zs(d)}`:zs(d),h=u?`${u}.${d}`:d;Be(c)?s(c,p,h):(o[p]||(o[p]={paths:[],computed:(g,D={},m=[])=>{if(o[p].paths.length===1)return o[p].paths[0].computed(o[p].paths[0].scheme,D.binding,m);if(g&&g!=="none")for(let y=0;y<o[p].paths.length;y++){let T=o[p].paths[y];if(T.scheme===g)return T.computed(g,D.binding,m)}return o[p].paths.map(y=>y.computed(y.scheme,D[y.scheme],m))}}),o[p].paths.push({path:h,value:c,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!Ve(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:d}=u,c=Je(u,["colorScheme"]);return a[d]=c,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Pt(L(i)?`${t}${i},${t} ${i}`:t,n):Pt(t,Pt(i??":root,:host",n))},transformCSS(t,i,e,n,o={},r,s,a){if(L(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=e==="dark"?u.reduce((d,{type:c,selector:p})=>(L(p)&&(d+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,c,i)),d),""):Pt(a??":root,:host",i)}if(l){let u={name:"primeui",order:"primeui"};Be(l)&&(u.name=ae(l.name,{name:t,type:n})),L(u.name)&&(i=Pt(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},M={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Bt(q({},i),{options:q(q({},this.defaults.options),i.options)}),this._tokens=je.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),oe.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Bt(q({},this.theme),{preset:t}),this._tokens=je.createTokens(t,this.defaults),this.clearLoadedStyleNames(),oe.emit("preset:change",t),oe.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Bt(q({},this.theme),{options:t}),this.clearLoadedStyleNames(),oe.emit("options:change",t),oe.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return je.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return je.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return je.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return je.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return je.getPreset(o)},getLayerOrderCSS(t=""){return je.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return je.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return je.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return je.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),oe.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&oe.emit("theme:load"))}};function xf(...t){let i=uo(M.getPreset(),...t);return M.setPreset(i),i}function Nf(t){return gd().surfacePalette(t).update().preset}var Qs=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var bd=0,Js=(()=>{class t{document=f(ce);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++bd}`,id:d=void 0,media:c=void 0,nonce:p=void 0,first:h=!1,props:g={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let D=this.document.head;es(s,"nonce",p),h&&D.firstChild?D.insertBefore(s,D.firstChild):D.appendChild(s),ti(s,{type:"text/css",media:c,nonce:p,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:d,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $t={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},yd=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,V=(()=>{class t{name="base";useStyle=f(Js);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(Vt`${ae(e,{dt:et})}`);return r?this.useStyle.use(Ct(r),b({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(o="")=>M.transformCSS(e.name||this.name,`${o}${Vt`${n}`}`));loadBaseCSS=(e={})=>this.load(yd,e);loadBaseStyle=(e={},n="")=>this.load(Qs,e,(o="")=>M.transformCSS(e.name||this.name,`${o}${Vt`${n}`}`));getCommonTheme=e=>M.getCommon(this.name,e);getComponentTheme=e=>M.getComponent(this.name,e);getPresetTheme=(e,n,o)=>M.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>M.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=ae(this.css,{dt:et}),r=Ct(Vt`${o}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>M.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[M.getStyleSheet(this.name,e,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Vt`${ae(this.style,{dt:et})}`,a=Ct(M.transformCSS(r,s)),l=Object.entries(n).reduce((u,[d,c])=>u.push(`${d}="${c}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vd=(()=>{class t{theme=W(void 0);csp=W({nonce:void 0});isThemeChanged=!1;document=f(ce);baseStyle=f(V);constructor(){le(()=>{oe.on("theme:change",e=>{Ee(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),le(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){M.clearLoadedStyleNames(),oe.clear()}onThemeChange(e){M.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!M.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,b({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,b({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(b({name:"global-style"},s),r),M.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Io=(()=>{class t extends vd{ripple=W(!1);platformId=f(At);inputStyle=W(null);inputVariant=W(null);overlayAppendTo=W("self");overlayOptions={};csp=W({nonce:void 0});unstyled=W(void 0);pt=W(void 0);ptOptions=W(void 0);filterMatchModeOptions={text:[ue.STARTS_WITH,ue.CONTAINS,ue.NOT_CONTAINS,ue.ENDS_WITH,ue.EQUALS,ue.NOT_EQUALS],numeric:[ue.EQUALS,ue.NOT_EQUALS,ue.LESS_THAN,ue.LESS_THAN_OR_EQUAL_TO,ue.GREATER_THAN,ue.GREATER_THAN_OR_EQUAL_TO],date:[ue.DATE_IS,ue.DATE_IS_NOT,ue.DATE_BEFORE,ue.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Ue;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=b(b({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:d,overlayAppendTo:c,zIndex:p,ptOptions:h,pt:g,unstyled:D}=e||{};n&&this.csp.set(n),c&&this.overlayAppendTo.set(c),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),d&&(this.filterMatchModeOptions=d),p&&(this.zIndex=p),g&&this.pt.set(g),h&&this.ptOptions.set(h),D&&this.unstyled.set(D),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dd=new C("PRIME_NG_CONFIG");function tg(...t){let i=t?.map(n=>({provide:Dd,useValue:n,multi:!1})),e=er(()=>{let n=f(Io);t?.forEach(o=>n.setConfig(o))});return Rn([...i,e])}var ea=(()=>{class t extends V{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Z=new C("PARENT_INSTANCE"),ee=(()=>{class t{document=f(ce);platformId=f(At);el=f(De);injector=f(St);cd=f(bt);renderer=f(xe);config=f(Io);$parentInstance=f(Z,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=f(ea);baseStyle=f(V);scopedStyleEl;parent=this.$params.parent;cn=st;_themeScopedListener;dt=F();unstyled=F();pt=F();ptOptions=F();$attrSelector=ln("pc");get $name(){return this.componentName||this.constructor?.name?.replace(/^_/,"")||"UnknownComponent"}get $hostName(){return this.hostName}$unstyled=K(()=>this.unstyled()!==void 0?this.unstyled():this.config?.unstyled()||!1);$pt=K(()=>ae(this.pt()||this.directivePT(),this.$params));directivePT=W(void 0);get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>ae(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||ae(e,this.$params))}get $style(){return b(b({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){le(e=>{this.document&&!to(this.platformId)&&(oe.off("theme:change",this._themeScopedListener),this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{oe.off("theme:change",this._themeScopedListener)})}),le(e=>{this.document&&!to(this.platformId)&&(oe.off("theme:change",this._loadCoreStyles),this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))),e(()=>{oe.off("theme:change",this._loadCoreStyles)})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.el?.nativeElement?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return ii(e)?e(...n):ao(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",o={}){return oi(e,n,o)}_hook(e,...n){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);o?.(...n),r?.(...n)}}_load(){$t.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),$t.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);L(e)&&this.baseStyle.load(e,b({name:"global"},this.$styleOptions))}_loadCoreStyles(){!$t.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),$t.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!M.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,b({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,b({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(b({name:"global-style"},this.$styleOptions),r),M.setLoadedStyleName("common")}if(!M.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,b({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(b({name:`${this.$style?.name}-style`},this.$styleOptions),n),M.setLoadedStyleName(this.$style?.name)}if(!M.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,b({name:"layer-order",first:!0},this.$styleOptions)),M.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},o=this.$style?.load(n,b({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){$t.clearLoadedStyleNames(),oe.on("theme:change",e.bind(this))}_removeThemeListeners(){oe.off("theme:change",this._loadCoreStyles),oe.off("theme:change",this._load),oe.off("theme:change",this._themeScopedListener)}_getPTValue(e={},n="",o={},r=!0){let s=/./g.test(n)&&!!o[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,o):this._useDefaultPT(this._getPTClassValue,n,o):void 0,d=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,se(b({},o),{global:u||{}})),c=this._getPTDatasets(n);return a||!a&&d?l?this._mergeProps(l,u,d,c):b(b(b({},u),d),c):b(b({},d),c)}_getPTDatasets(e=""){let n="data-pc-",o=e==="root"&&L(this.$pt()?.["data-pc-section"]);return e!=="transition"&&se(b({},e==="root"&&se(b({[`${n}name`]:ut(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${n}extend`]:ut(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:ut(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,o){let r=this._getOptionValue(e,n,o);return Fe(r)||co(r)?{class:r}:r}_getPT(e,n="",o){let r=(s,a=!1)=>{let l=o?o(s):s,u=ut(n),d=ut(this.$hostName||this.$name);return(a?u!==d?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,o,r){let s=a=>n?.call(this,a,o,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),d=s(e.value);return u===void 0&&d===void 0?void 0:Fe(d)?d:Fe(u)?u:a||!a&&d?l?this._mergeProps(l,u,d):b(b({},u),d):d}return s(e)}_useGlobalPT(e,n,o){return this._usePT(this.$globalPT,e,n,o)}_useDefaultPT(e,n,o){return this._usePT(this.$defaultPT,e,n,o)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,b(b({},this.$params),n))}ptms(e,n={}){return e.reduce((o,r)=>(o=ao(o,this.ptm(r,n))||{},o),{})}ptmo(e={},n="",o={}){return this._getPTValue(e,n,b({instance:this},o),!1)}cx(e,n={}){return this.$unstyled()?void 0:st(this._getOptionValue(this.$style.classes,e,b(b({},this.$params),n)))}sx(e="",n=!0,o={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,b(b({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,b(b({},this.$params),o));return b(b({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[O([ea,V]),rt]})}return t})();var vi=(()=>{class t extends ee{modelValue=W(void 0);$filled=K(()=>L(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=I({type:t,features:[w]})}return t})();var S=(()=>{class t{el;renderer;pBind=F(void 0);_attrs=W(void 0);attrs=K(()=>this._attrs()||this.pBind());styles=K(()=>this.attrs()?.style);classes=K(()=>st(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,le(()=>{let a=this.attrs()||{},{style:o,class:r}=a,s=Ii(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let d=l.slice(2).toLowerCase();if(!this.listeners.some(c=>c.eventName===d)){let c=this.renderer.listen(this.el.nativeElement,d,u);this.listeners.push({eventName:d,unlisten:c})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Ge(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(E(De),E(xe))};static \u0275dir=I({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,o){n&2&&(ar(o.styles()),N(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),Ie=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({})}return t})();var Cd=["*"],_d={root:"p-fluid"},ta=(()=>{class t extends V{name="fluid";classes=_d;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var na=new C("FLUID_INSTANCE"),mn=(()=>{class t extends ee{$pcFluid=f(na,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=f(ta);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&N(o.cx("root"))},features:[O([ta,{provide:na,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w],ngContentSelectors:Cd,decls:1,vars:0,template:function(n,o){n&1&&(Re(),ke(0))},dependencies:[ne],encapsulation:2,changeDetection:0})}return t})();var ia=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Ed=`
    ${ia}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,wd={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},oa=(()=>{class t extends V{name="inputtext";style=Ed;classes=wd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ra=new C("INPUTTEXT_INSTANCE"),Zg=(()=>{class t extends vi{hostName="";ptInputText=F();bindDirectiveInstance=f(S,{self:!0});$pcInputText=f(ra,{optional:!0,skipSelf:!0})??void 0;ngControl=f($e,{optional:!0,self:!0});pcFluid=f(mn,{optional:!0,host:!0,skipSelf:!0});pSize;variant=F();fluid=F(void 0,{transform:A});invalid=F(void 0,{transform:A});$variant=K(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=f(oa);constructor(){super(),le(()=>{this.ptInputText()&&this.directivePT.set(this.ptInputText())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,o){n&1&&_e("input",function(s){return o.onInput(s)}),n&2&&N(o.cx("root"))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[O([oa,{provide:ra,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w]})}return t})(),Xg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({})}return t})();var sa=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Sd=`
    ${sa}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ad={root:"p-ink"},aa=(()=>{class t extends V{name="ripple";style=Sd;classes=Ad;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Di=(()=>{class t extends ee{zone=f(Ln);_componentStyle=f(aa);animationListener;mouseDownListener;timeout;constructor(){super(),le(()=>{ei(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(at(n,"p-ink-active"),!oo(n)&&!so(n)){let a=Math.max(Kr(this.el.nativeElement),ro(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=Qr(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-so(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-oo(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Dt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&at(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&at(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),at(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Jr(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[O([aa]),w]})}return t})(),um=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({})}return t})();var Mo=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=$=>{if($)return getComputedStyle($).getPropertyValue("position")==="relative"?$:r($.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),h=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*d},g,D,m="top";l.top+a+s.height>c.height?(g=l.top-h.top-s.height,m="bottom",l.top+g<0&&(g=-1*l.top)):(g=a+l.top-h.top,m="top");let y=l.left+s.width-c.width,T=l.left-h.left;if(s.width>c.width?D=(l.left-h.left)*-1:y>0?D=T-y:D=l.left-h.left,e.style.top=g+"px",e.style.left=D+"px",e.style.transformOrigin=m,o){let $=sn(/-anchor-gutter$/)?.value;e.style.marginTop=m==="bottom"?`calc(${$??"2px"} * -1)`:$??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,d=n.getBoundingClientRect(),c=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),g,D;d.top+l+s>h.height?(g=d.top+c-s,e.style.transformOrigin="bottom",g<0&&(g=c)):(g=l+d.top+c,e.style.transformOrigin="top"),d.left+a>h.width?D=Math.max(0,d.left+p+u-a):D=d.left+p,e.style.top=g+"px",e.style.left=D+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let d of u){let c=this.findSingle(a,d);c&&s(c)&&n.push(c)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,c=e.scrollTop,p=e.clientHeight,h=this.getOuterHeight(n);d<0?e.scrollTop=c+d:d+h>p&&(e.scrollTop=c+d-p+h)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?o(r,u):Object.entries(u).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function hm(){zr({variableName:Fo("scrollbar.width").name})}function fm(){Gr({variableName:Fo("scrollbar.width").name})}var la=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Mo.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ci=(()=>{class t extends ee{autofocus=!1;focused=!1;platformId=f(At);document=f(ce);host=f(De);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ei(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Mo.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=I({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[w]})}return t})();var ua=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Fd=`
    ${ua}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Id={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":L(i)&&String(i).length===1,"p-badge-dot":ze(i),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},da=(()=>{class t extends V{name="badge";style=Fd;classes=Id;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ca=new C("BADGE_INSTANCE");var xo=(()=>{class t extends ee{$pcBadge=f(ca,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=F();badgeSize=F();size=F();severity=F();value=F();badgeDisabled=F(!1,{transform:A});_componentStyle=f(da);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(N(o.cn(o.cx("root"),o.styleClass())),sr("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[O([da,{provide:ca,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w],decls:1,vars:1,template:function(n,o){n&1&&It(0),n&2&&Mt(o.value())},dependencies:[ne,Y,Ie],encapsulation:2,changeDetection:0})}return t})(),pa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[xo,Y,Y]})}return t})();var xd=["*"],Nd=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ha=(()=>{class t extends V{name="baseicon";css=Nd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jt=(()=>{class t extends ee{spin=!1;_componentStyle=f(ha);getClassNames(){return st("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&N(o.getClassNames())},inputs:{spin:[2,"spin","spin",A]},features:[O([ha]),w],ngContentSelectors:xd,decls:1,vars:0,template:function(n,o){n&1&&(Re(),ke(0))},encapsulation:2,changeDetection:0})}return t})();var Od=["data-p-icon","check"],Xm=(()=>{class t extends jt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["","data-p-icon","check"]],features:[w],attrs:Od,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(ot(),ft(0,"path",0))},encapsulation:2})}return t})();var Rd=["data-p-icon","spinner"],fa=(()=>{class t extends jt{pathId;onInit(){this.pathId="url(#"+ln()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["","data-p-icon","spinner"]],features:[w],attrs:Rd,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(ot(),Ri(0,"g"),ft(1,"path",0),ki(),Ri(2,"defs")(3,"clipPath",1),ft(4,"rect",2),ki()()),n&2&&(fe("clip-path",o.pathId),z(3),ir("id",o.pathId))},encapsulation:2})}return t})();var kd=["data-p-icon","times"],ib=(()=>{class t extends jt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["","data-p-icon","times"]],features:[w],attrs:kd,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(ot(),ft(0,"path",0))},encapsulation:2})}return t})();var ga=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Ld=["content"],Pd=["loadingicon"],Bd=["icon"],Vd=["*"],_a=(t,i)=>({class:t,pt:i});function $d(t,i){t&1&&gt(0)}function jd(t,i){if(t&1&&Ye(0,"span",7),t&2){let e=J(3);N(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon)),x("pBind",e.ptm("loadingIcon")),fe("aria-hidden",!0)}}function Ud(t,i){if(t&1&&(ot(),Ye(0,"svg",8)),t&2){let e=J(3);N(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),x("pBind",e.ptm("loadingIcon"))("spin",!0),fe("aria-hidden",!0)}}function Hd(t,i){if(t&1&&($n(0),Ce(1,jd,1,4,"span",3)(2,Ud,1,5,"svg",6),jn()),t&2){let e=J(2);z(),x("ngIf",e.loadingIcon),z(),x("ngIf",!e.loadingIcon)}}function zd(t,i){}function Gd(t,i){if(t&1&&Ce(0,zd,0,0,"ng-template",9),t&2){let e=J(2);x("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Wd(t,i){if(t&1&&($n(0),Ce(1,Hd,3,2,"ng-container",2)(2,Gd,1,1,null,5),jn()),t&2){let e=J();z(),x("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),z(),x("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Qt(3,_a,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function qd(t,i){if(t&1&&Ye(0,"span",7),t&2){let e=J(2);N(e.cn("icon",e.iconClass())),x("pBind",e.ptm("icon"))}}function Kd(t,i){}function Yd(t,i){if(t&1&&Ce(0,Kd,0,0,"ng-template",9),t&2){let e=J(2);x("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Zd(t,i){if(t&1&&($n(0),Ce(1,qd,1,3,"span",3)(2,Yd,1,1,null,5),jn()),t&2){let e=J();z(),x("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),z(),x("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Qt(3,_a,e.cx("icon"),e.ptm("icon")))}}function Xd(t,i){if(t&1&&(Ne(0,"span",7),It(1),Oe()),t&2){let e=J();N(e.cx("label")),x("pBind",e.ptm("label")),fe("aria-hidden",e.icon&&!e.label),z(),Mt(e.label)}}function Qd(t,i){if(t&1&&Ye(0,"p-badge",10),t&2){let e=J();x("value",e.badge)("severity",e.badgeSeverity)("pt",e.ptm("pcBadge"))}}var Jd={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Ut=(()=>{class t extends V{name="button";style=ga;classes=Jd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ma=new C("BUTTON_INSTANCE"),ba=new C("BUTTON_DIRECTIVE_INSTANCE"),ya=new C("BUTTON_LABEL_INSTANCE"),va=new C("BUTTON_ICON_INSTANCE"),ct={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Da=(()=>{class t extends ee{ptButtonLabel=F();$pcButtonLabel=f(ya,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});constructor(){super(),le(()=>{this.ptButtonLabel()&&this.directivePT.set(this.ptButtonLabel())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&mt("p-button-label",!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"]},features:[O([Ut,{provide:ya,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w]})}return t})(),Ca=(()=>{class t extends ee{ptButtonIcon=F();$pcButtonIcon=f(va,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});constructor(){super(),le(()=>{this.ptButtonIcon()&&this.directivePT.set(this.ptButtonIcon())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&mt("p-button-icon",!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"]},features:[O([Ut,{provide:va,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w]})}return t})(),Ib=(()=>{class t extends ee{$pcButtonDirective=f(ba,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});_componentStyle=f(Ut);ptButtonDirective=F();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),le(()=>{this.ptButtonDirective()&&this.directivePT.set(this.ptButtonDirective())})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=F(void 0,{transform:A});iconSignal=Vi(Ca);labelSignal=Vi(Da);isIconOnly=K(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ct);pcFluid=f(mn,{optional:!0,host:!0,skipSelf:!0});isTextButton=K(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){Dt(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let e=[ct.button,ct.component];return this.icon&&!this.label&&ze(this.htmlElement.textContent)&&e.push(ct.iconOnly),this.loading&&(e.push(ct.disabled,ct.loading),!this.icon&&this.label&&e.push(ct.labelOnly),this.icon&&!this.label&&!ze(this.htmlElement.textContent)&&e.push(ct.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Nt(this.htmlElement,".p-button-label")&&this.label){let n=ni("span",{class:this.cx("label"),"p-bind":this.ptm("label"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Nt(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.label?"p-button-icon-"+this.iconPos:null,o=this.getIconClass(),r=ni("span",{class:this.cn(this.cx("icon"),n,o),"aria-hidden":"true","p-bind":this.ptm("icon")});!this.loadingIcon&&this.loading&&(r.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(r,this.htmlElement.firstChild)}}updateLabel(){let e=Nt(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Nt(this.htmlElement,".p-button-icon"),n=Nt(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(Li(r,o.iconSignal,Ca,5),Li(r,o.labelSignal,Da,5)),n&2&&rr(2)},hostVars:4,hostBindings:function(n,o){n&2&&mt("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],hostName:"hostName",text:[2,"text","text",A],plain:[2,"plain","plain",A],raised:[2,"raised","raised",A],size:"size",outlined:[2,"outlined","outlined",A],rounded:[2,"rounded","rounded",A],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[O([Ut,{provide:ba,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w]})}return t})(),ec=(()=>{class t extends ee{hostName="";$pcButton=f(ma,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});_componentStyle=f(Ut);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=F(void 0,{transform:A});onClick=new ie;onFocus=new ie;onBlur=new ie;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=f(mn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(Ae(r,Ld,5),Ae(r,Pd,5),Ae(r,Bd,5),Ae(r,Ot,4)),n&2){let s;me(s=be())&&(o.contentTemplate=s.first),me(s=be())&&(o.loadingIconTemplate=s.first),me(s=be())&&(o.iconTemplate=s.first),me(s=be())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",A],raised:[2,"raised","raised",A],rounded:[2,"rounded","rounded",A],text:[2,"text","text",A],plain:[2,"plain","plain",A],outlined:[2,"outlined","outlined",A],link:[2,"link","link",A],tabindex:[2,"tabindex","tabindex",Ze],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",A],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",A],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[O([Ut,{provide:ma,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w],ngContentSelectors:Vd,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt"]],template:function(n,o){n&1&&(Re(),Ne(0,"button",0),_e("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),ke(1),Ce(2,$d,1,0,"ng-container",1)(3,Wd,3,6,"ng-container",2)(4,Zd,3,6,"ng-container",2)(5,Xd,2,5,"span",3)(6,Qd,1,3,"p-badge",4),Oe()),n&2&&(N(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),x("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),fe("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),z(2),x("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),z(),x("ngIf",o.loading),z(),x("ngIf",!o.loading),z(),x("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),z(),x("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ne,Zi,vt,Xi,Di,Ci,fa,pa,xo,Y,S],encapsulation:2,changeDetection:0})}return t})(),Mb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[ne,ec,Y,Y]})}return t})();var Ea=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var tc=["*"],nc={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},wa=(()=>{class t extends V{name="iconfield";style=Ea;classes=nc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Sa=new C("ICONFIELD_INSTANCE"),ic=(()=>{class t extends ee{hostName="";_componentStyle=f(wa);$pcIconField=f(Sa,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,o){n&2&&N(o.cn(o.cx("root"),o.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[O([wa,{provide:Sa,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w],ngContentSelectors:tc,decls:1,vars:0,template:function(n,o){n&1&&(Re(),ke(0))},dependencies:[ne,Ie],encapsulation:2,changeDetection:0})}return t})(),Wb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[ic]})}return t})();var oc=["*"],rc={root:"p-inputicon"},Aa=(()=>{class t extends V{name="inputicon";classes=rc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Ta=new C("INPUTICON_INSTANCE"),sc=(()=>{class t extends ee{hostName="";styleClass;_componentStyle=f(Aa);$pcInputIcon=f(Ta,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,o){n&2&&N(o.cn(o.cx("root"),o.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[O([Aa,{provide:Ta,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w],ngContentSelectors:oc,decls:1,vars:0,template:function(n,o){n&1&&(Re(),ke(0))},dependencies:[ne,Y,Ie],encapsulation:2,changeDetection:0})}return t})(),sy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[sc,Y,Y]})}return t})();var zt=class{},Gt=class{},qe=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),r=e.slice(n+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let r=i.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var wi=class{encodeKey(i){return Fa(i)}encodeValue(i){return Fa(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function ac(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var lc=/%(\d[a-f0-9])/gi,uc={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Fa(t){return encodeURIComponent(t).replace(lc,(i,e)=>uc[e]??i)}function _i(t){return`${t}`}var nt=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new wi,i.fromString){if(i.fromObject)throw new j(2805,!1);this.map=ac(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(_i):[_i(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(r=>{e.push({param:n,value:r,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(_i(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(_i(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Si=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function dc(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ia(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Ma(t){return typeof Blob<"u"&&t instanceof Blob}function xa(t){return typeof FormData<"u"&&t instanceof FormData}function cc(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var bn="Content-Type",Ai="Accept",Lo="X-Request-URL",Ra="text/plain",ka="application/json",La=`${ka}, ${Ra}, */*`,Ht=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,o){this.url=e,this.method=i.toUpperCase();let r;if(dc(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new j(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer&&(this.referrer=r.referrer),this.transferCache=r.transferCache}if(this.headers??=new qe,this.context??=new Si,!this.params)this.params=new nt,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ia(this.body)||Ma(this.body)||xa(this.body)||cc(this.body)?this.body:this.body instanceof nt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||xa(this.body)?null:Ma(this.body)?this.body.type||null:Ia(this.body)?null:typeof this.body=="string"?Ra:this.body instanceof nt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ka:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,r=i.keepalive??this.keepalive,s=i.priority||this.priority,a=i.cache||this.cache,l=i.mode||this.mode,u=i.redirect||this.redirect,d=i.credentials||this.credentials,c=i.referrer||this.referrer,p=i.integrity||this.integrity,h=i.transferCache??this.transferCache,g=i.timeout??this.timeout,D=i.body!==void 0?i.body:this.body,m=i.withCredentials??this.withCredentials,y=i.reportProgress??this.reportProgress,T=i.headers||this.headers,$=i.params||this.params,P=i.context??this.context;return i.setHeaders!==void 0&&(T=Object.keys(i.setHeaders).reduce((re,he)=>re.set(he,i.setHeaders[he]),T)),i.setParams&&($=Object.keys(i.setParams).reduce((re,he)=>re.set(he,i.setParams[he]),$)),new t(e,n,D,{params:$,headers:T,context:P,reportProgress:y,responseType:o,withCredentials:m,transferCache:h,keepalive:r,cache:a,priority:s,timeout:g,mode:l,redirect:u,credentials:d,referrer:c,integrity:p})}},it=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(it||{}),Wt=class{headers;status;statusText;url;ok;type;redirected;constructor(i,e=200,n="OK"){this.headers=i.headers||new qe,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.ok=this.status>=200&&this.status<300}},yn=class t extends Wt{constructor(i={}){super(i)}type=it.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},qt=class t extends Wt{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=it.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected})}},We=class extends Wt{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Pa=200,pc=204;function No(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer}}var Ba=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let r;if(e instanceof Ht)r=e;else{let l;o.headers instanceof qe?l=o.headers:l=new qe(o.headers);let u;o.params&&(o.params instanceof nt?u=o.params:u=new nt({fromObject:o.params})),r=new Ht(e,n,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,integrity:o.integrity,timeout:o.timeout})}let s=xi(r).pipe(qo(l=>this.handler.handle(l)));if(e instanceof Ht||o.observe==="events")return s;let a=s.pipe(Wo(l=>l instanceof qt));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(ht(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new j(2806,!1);return l.body}));case"blob":return a.pipe(ht(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new j(2807,!1);return l.body}));case"text":return a.pipe(ht(l=>{if(l.body!==null&&typeof l.body!="string")throw new j(2808,!1);return l.body}));case"json":default:return a.pipe(ht(l=>l.body))}case"response":return a;default:throw new j(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new nt().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,No(o,n))}post(e,n,o={}){return this.request("POST",e,No(o,n))}put(e,n,o={}){return this.request("PUT",e,No(o,n))}static \u0275fac=function(n){return new(n||t)(de(zt))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),hc=/^\)\]\}',?\n/;function Na(t){if(t.url)return t.url;let i=Lo.toLocaleLowerCase();return t.headers.get(i)}var Va=new C(""),Ei=(()=>{class t{fetchImpl=f(Oo,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=f(Ln);destroyRef=f(kn);handle(e){return new Mi(n=>{let o=new AbortController;this.doRequest(e,o.signal,n).then(Ro,s=>n.error(new We({error:s})));let r;return e.timeout&&(r=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{r!==void 0&&clearTimeout(r),o.abort()}})}doRequest(e,n,o){return Nn(this,null,function*(){let r=this.createRequestInit(e),s;try{let g=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,b({signal:n},r)));fc(g),o.next({type:it.Sent}),s=yield g}catch(g){o.error(new We({error:g,status:g.status??0,statusText:g.statusText,url:e.urlWithParams,headers:g.headers}));return}let a=new qe(s.headers),l=s.statusText,u=Na(s)??e.urlWithParams,d=s.status,c=null;if(e.reportProgress&&o.next(new yn({headers:a,status:d,statusText:l,url:u})),s.body){let g=s.headers.get("content-length"),D=[],m=s.body.getReader(),y=0,T,$,P=typeof Zone<"u"&&Zone.current,re=!1;if(yield this.ngZone.runOutsideAngular(()=>Nn(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield m.cancel(),re=!0;break}let{done:Se,value:Ke}=yield m.read();if(Se)break;if(D.push(Ke),y+=Ke.length,e.reportProgress){$=e.responseType==="text"?($??"")+(T??=new TextDecoder).decode(Ke,{stream:!0}):void 0;let pt=()=>o.next({type:it.DownloadProgress,total:g?+g:void 0,loaded:y,partialText:$});P?P.run(pt):pt()}}})),re){o.complete();return}let he=this.concatChunks(D,y);try{let Se=s.headers.get(bn)??"";c=this.parseBody(e,he,Se,d)}catch(Se){o.error(new We({error:Se,headers:new qe(s.headers),status:s.status,statusText:s.statusText,url:Na(s)??e.urlWithParams}));return}}d===0&&(d=c?Pa:0);let p=d>=200&&d<300,h=s.redirected;p?(o.next(new qt({body:c,headers:a,status:d,statusText:l,url:u,redirected:h})),o.complete()):o.error(new We({error:c,headers:a,status:d,statusText:l,url:u,redirected:h}))})}parseBody(e,n,o,r){switch(e.responseType){case"json":let s=new TextDecoder().decode(n).replace(hc,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(r<200||r>=300)return s;throw a}case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:o});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},o;if(o=e.credentials,e.withCredentials&&(o="include"),e.headers.forEach((r,s)=>n[r]=s.join(",")),e.headers.has(Ai)||(n[Ai]=La),!e.headers.has(bn)){let r=e.detectContentTypeHeader();r!==null&&(n[bn]=r)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:o,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity}}concatChunks(e,n){let o=new Uint8Array(n),r=0;for(let s of e)o.set(s,r),r+=s.length;return o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Oo=class{};function Ro(){}function fc(t){t.then(Ro,Ro)}function $a(t,i){return i(t)}function gc(t,i){return(e,n)=>i.intercept(e,{handle:o=>t(o,n)})}function mc(t,i,e){return(n,o)=>Zo(e,()=>i(n,r=>t(r,o)))}var ja=new C(""),Fi=new C(""),Ua=new C(""),Po=new C("",{providedIn:"root",factory:()=>!0});function bc(){let t=null;return(i,e)=>{t===null&&(t=(f(ja,{optional:!0})??[]).reduceRight(gc,$a));let n=f(Oi);if(f(Po)){let r=n.add();return t(i,e).pipe(Ni(r))}else return t(i,e)}}var Ti=(()=>{class t extends zt{backend;injector;chain=null;pendingTasks=f(Oi);contributeToStability=f(Po);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Fi),...this.injector.get(Ua,[])]));this.chain=n.reduceRight((o,r)=>mc(o,r,this.injector),$a)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(Ni(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(de(Gt),de(Yo))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var yc=/^\)\]\}',?\n/,vc=RegExp(`^${Lo}:`,"m");function Dc(t){return"responseURL"in t&&t.responseURL?t.responseURL:vc.test(t.getAllResponseHeaders())?t.getResponseHeader(Lo):null}var ko=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new j(-2800,!1);let n=this.xhrFactory;return xi(null).pipe(Ko(()=>new Mi(r=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((m,y)=>s.setRequestHeader(m,y.join(","))),e.headers.has(Ai)||s.setRequestHeader(Ai,La),!e.headers.has(bn)){let m=e.detectContentTypeHeader();m!==null&&s.setRequestHeader(bn,m)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let m=e.responseType.toLowerCase();s.responseType=m!=="json"?m:"text"}let a=e.serializeBody(),l=null,u=()=>{if(l!==null)return l;let m=s.statusText||"OK",y=new qe(s.getAllResponseHeaders()),T=Dc(s)||e.url;return l=new yn({headers:y,status:s.status,statusText:m,url:T}),l},d=()=>{let{headers:m,status:y,statusText:T,url:$}=u(),P=null;y!==pc&&(P=typeof s.response>"u"?s.responseText:s.response),y===0&&(y=P?Pa:0);let re=y>=200&&y<300;if(e.responseType==="json"&&typeof P=="string"){let he=P;P=P.replace(yc,"");try{P=P!==""?JSON.parse(P):null}catch(Se){P=he,re&&(re=!1,P={error:Se,text:P})}}re?(r.next(new qt({body:P,headers:m,status:y,statusText:T,url:$||void 0})),r.complete()):r.error(new We({error:P,headers:m,status:y,statusText:T,url:$||void 0}))},c=m=>{let{url:y}=u(),T=new We({error:m,status:s.status||0,statusText:s.statusText||"Unknown Error",url:y||void 0});r.error(T)},p=c;e.timeout&&(p=m=>{let{url:y}=u(),T=new We({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:y||void 0});r.error(T)});let h=!1,g=m=>{h||(r.next(u()),h=!0);let y={type:it.DownloadProgress,loaded:m.loaded};m.lengthComputable&&(y.total=m.total),e.responseType==="text"&&s.responseText&&(y.partialText=s.responseText),r.next(y)},D=m=>{let y={type:it.UploadProgress,loaded:m.loaded};m.lengthComputable&&(y.total=m.total),r.next(y)};return s.addEventListener("load",d),s.addEventListener("error",c),s.addEventListener("timeout",p),s.addEventListener("abort",c),e.reportProgress&&(s.addEventListener("progress",g),a!==null&&s.upload&&s.upload.addEventListener("progress",D)),s.send(a),r.next({type:it.Sent}),()=>{s.removeEventListener("error",c),s.removeEventListener("abort",c),s.removeEventListener("load",d),s.removeEventListener("timeout",p),e.reportProgress&&(s.removeEventListener("progress",g),a!==null&&s.upload&&s.upload.removeEventListener("progress",D)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(de(rn))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Ha=new C(""),Cc="XSRF-TOKEN",_c=new C("",{providedIn:"root",factory:()=>Cc}),Ec="X-XSRF-TOKEN",wc=new C("",{providedIn:"root",factory:()=>Ec}),vn=class{},Sc=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ji(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(de(ce),de(_c))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function Ac(t,i){let e=t.url.toLowerCase();if(!f(Ha)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=f(vn).getToken(),o=f(wc);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),i(t)}var Dn=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(Dn||{});function Bo(t,i){return{\u0275kind:t,\u0275providers:i}}function za(...t){let i=[Ba,ko,Ti,{provide:zt,useExisting:Ti},{provide:Gt,useFactory:()=>f(Va,{optional:!0})??f(ko)},{provide:Fi,useValue:Ac,multi:!0},{provide:Ha,useValue:!0},{provide:vn,useClass:Sc}];for(let e of t)i.push(...e.\u0275providers);return Rn(i)}function Tc(t){return Bo(Dn.Interceptors,t.map(i=>({provide:Fi,useValue:i,multi:!0})))}var Oa=new C("");function Ga(){return Bo(Dn.LegacyInterceptors,[{provide:Oa,useFactory:bc},{provide:Fi,useExisting:Oa,multi:!0}])}function Fc(){return Bo(Dn.Fetch,[Ei,{provide:Va,useExisting:Ei},{provide:Gt,useExisting:Ei}])}var Ic=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({providers:[za(Ga())]})}return t})();var Wa=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),u=this.isDate(e);if(l!=u)return!1;if(l&&u)return i.getTime()==e.getTime();var d=i instanceof RegExp,c=e instanceof RegExp;if(d!=c)return!1;if(d&&c)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),o=i;for(let r=0,s=n.length;r<s;++r){if(o==null)return null;o=o[n[r]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let o;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,o){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],o)>e){n.splice(s,0,i),r=!0;break}r||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==i){n=o;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,o=1){let r=-1,s=this.isEmpty(i),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof i=="string"&&typeof e=="string"?r=i.localeCompare(e,n,{numeric:!0}):r=i<e?-1:i>e?1:0,r}static sort(i,e,n=1,o,r=1){let s=t.compare(i,e,o,n),a=n;return(t.isEmpty(i)||t.isEmpty(e))&&(a=r===1?n:r),a*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return b(b({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,u=e instanceof Date;if(l!=u)return!1;if(l&&u)return i.getTime()==e.getTime();var d=i instanceof RegExp,c=e instanceof RegExp;if(d!=c)return!1;if(d&&c)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},qa=0;function Qy(t="pn_id_"){return qa++,`${t}${qa}`}function Mc(){let t=[],i=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var Jy=Mc();var Kt=(()=>{class t extends vi{required=F(void 0,{transform:A});invalid=F(void 0,{transform:A});disabled=F(void 0,{transform:A});name=F();_disabled=W(!1);$disabled=K(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=I({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[w]})}return t})();var Ka=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var xc=["icon"],Nc=["content"],Xa=t=>({$implicit:t});function Oc(t,i){t&1&&gt(0)}function Rc(t,i){if(t&1&&Ye(0,"span",0),t&2){let e=J(3);N(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),x("pBind",e.ptm("icon"))}}function kc(t,i){if(t&1&&Tt(0,Rc,1,3,"span",2),t&2){let e=J(2);Ft(e.onIcon||e.offIcon?0:-1)}}function Lc(t,i){t&1&&gt(0)}function Pc(t,i){if(t&1&&Ce(0,Lc,1,0,"ng-container",1),t&2){let e=J(2);x("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Pi(2,Xa,e.checked))}}function Bc(t,i){if(t&1&&(Tt(0,kc,1,1)(1,Pc,1,4,"ng-container"),Ne(2,"span",0),It(3),Oe()),t&2){let e=J();Ft(e.iconTemplate?1:0),z(2),N(e.cx("label")),x("pBind",e.ptm("label")),z(),Mt(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Vc=`
    ${Ka}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,$c={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Ya=(()=>{class t extends V{name="togglebutton";style=Vc;classes=$c;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Za=new C("TOGGLEBUTTON_INSTANCE"),jc={provide:Qe,useExisting:Me(()=>Vo),multi:!0},Vo=(()=>{class t extends Kt{$pcToggleButton=f(Za,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=F(void 0,{transform:A});onChange=new ie;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=f(Ya);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,r){if(n&1&&(Ae(r,xc,4),Ae(r,Nc,4),Ae(r,Ot,4)),n&2){let s;me(s=be())&&(o.iconTemplate=s.first),me(s=be())&&(o.contentTemplate=s.first),me(s=be())&&(o.templates=s)}},hostVars:8,hostBindings:function(n,o){n&1&&_e("keydown",function(s){return o.onKeyDown(s)})("click",function(s){return o.toggle(s)}),n&2&&(fe("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-pressed",o.checked?"true":"false")("role","button")("tabindex",o.tabindex!==void 0?o.tabindex:o.$disabled()?-1:0)("data-pc-name","togglebutton"),N(o.cn(o.cx("root"),o.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Ze],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",A],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[O([jc,Ya,{provide:Za,useExisting:t},{provide:Z,useExisting:t}]),X([Di,S]),w],decls:3,vars:8,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(n,o){n&1&&(Ne(0,"span",0),Ce(1,Oc,1,0,"ng-container",1),Tt(2,Bc,4,5),Oe()),n&2&&(N(o.cx("content")),x("pBind",o.ptm("content")),z(),x("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",Pi(6,Xa,o.checked)),z(),Ft(o.contentTemplate?-1:2))},dependencies:[ne,vt,Y,Ie,S],encapsulation:2,changeDetection:0})}return t})();var Qa=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Uc=["item"],Hc=(t,i)=>({$implicit:t,index:i});function zc(t,i){return this.getOptionLabel(i)}function Gc(t,i){t&1&&gt(0)}function Wc(t,i){if(t&1&&Ce(0,Gc,1,0,"ng-container",3),t&2){let e=J(2),n=e.$implicit,o=e.$index,r=J();x("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Qt(2,Hc,n,o))}}function qc(t,i){t&1&&Ce(0,Wc,1,5,"ng-template",null,0,lr)}function Kc(t,i){if(t&1){let e=Un();Ne(0,"p-togglebutton",2),_e("onChange",function(o){let r=Et(e),s=r.$implicit,a=r.$index,l=J();return wt(l.onOptionSelect(o,s,a))}),Tt(1,qc,2,0),Oe()}if(t&2){let e=i.$implicit,n=J();x("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.$disabled()||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid())("pt",n.ptm("pcToggleButton")),z(),Ft(n.itemTemplate||n._itemTemplate?1:-1)}}var Yc=`
    ${Qa}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,Zc={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},Ja=(()=>{class t extends V{name="selectbutton";style=Yc;classes=Zc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var el=new C("SELECTBUTTON_INSTANCE"),Xc={provide:Qe,useExisting:Me(()=>tl),multi:!0},tl=(()=>{class t extends Kt{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=F();fluid=F(void 0,{transform:A});onOptionClick=new ie;onChange=new ie;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=f(Ja);$pcSelectButton=f(el,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?lt(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?lt(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?lt(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let s=this.getOptionValue(n),a;if(this.multiple)r?a=this.value.filter(l=>!Ge(l,s,this.equalityKey||void 0)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:o})}changeTabIndexes(e,n){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});n==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!Ge(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,o=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(Ge(r,o,this.dataKey)){n=!0;break}}}else n=Ge(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,r){if(n&1&&(Ae(r,Uc,4),Ae(r,Ot,4)),n&2){let s;me(s=be())&&(o.itemTemplate=s.first),me(s=be())&&(o.templates=s)}},hostVars:4,hostBindings:function(n,o){n&2&&(fe("role","group")("aria-labelledby",o.ariaLabelledBy),N(o.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",A],tabindex:[2,"tabindex","tabindex",Ze],multiple:[2,"multiple","multiple",A],allowEmpty:[2,"allowEmpty","allowEmpty",A],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",A],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[O([Xc,Ja,{provide:el,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&tr(0,Kc,2,11,"p-togglebutton",1,zc,!0),n&2&&nr(o.options)},dependencies:[Vo,Us,Os,So,ne,vt,Y,Ie],encapsulation:2,changeDetection:0})}return t})(),K0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[tl,Y,Y]})}return t})();var nl=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`;var Qc=["input"],Jc=`
    ${nl}

    /* For PrimeNG */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`,ep={root:({instance:t})=>["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-radiobutton-sm p-inputfield-sm":t.size()==="small","p-radiobutton-lg p-inputfield-lg":t.size()==="large"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},il=(()=>{class t extends V{name="radiobutton";style=Jc;classes=ep;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ol=new C("RADIOBUTTON_INSTANCE"),tp={provide:Qe,useExisting:Me(()=>rl),multi:!0},np=(()=>{class t{accessors=[];add(e,n){this.accessors.push([e,n])}remove(e){this.accessors=this.accessors.filter(n=>n[1]!==e)}select(e){this.accessors.forEach(n=>{this.isSameGroup(n,e)&&n[1]!==e&&n[1].writeValue(e.value)})}isSameGroup(e,n){return e[0].control?e[0].control.root===n.control.control.root&&e[1].name()===n.name():!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rl=(()=>{class t extends Kt{$pcRadioButton=f(ol,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;tabindex;inputId;ariaLabelledBy;ariaLabel;styleClass;autofocus;binary;variant=F();size=F();onClick=new ie;onFocus=new ie;onBlur=new ie;inputViewChild;$variant=K(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());checked;focused;control;_componentStyle=f(il);injector=f(St);registry=f(np);onInit(){this.control=this.injector.get($e),this.registry.add(this.control,this)}onChange(e){this.$disabled()||this.select(e)}select(e){this.$disabled()||(this.checked=!0,this.writeModelValue(this.checked),this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}writeControlValue(e,n){this.checked=this.binary?!!e:e==this.value,n(this.checked),this.cd.markForCheck()}onDestroy(){this.registry.remove(this)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,o){if(n&1&&or(Qc,5),n&2){let r;me(r=be())&&(o.inputViewChild=r.first)}},hostVars:2,hostBindings:function(n,o){n&2&&N(o.cx("root"))},inputs:{value:"value",tabindex:[2,"tabindex","tabindex",Ze],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",A],binary:[2,"binary","binary",A],variant:[1,"variant"],size:[1,"size"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[O([tp,il,{provide:ol,useExisting:t},{provide:Z,useExisting:t}]),X([S]),w],decls:4,vars:20,consts:[["input",""],["type","radio",3,"focus","blur","change","checked","pAutoFocus","pBind"],[3,"pBind"]],template:function(n,o){if(n&1){let r=Un();Ne(0,"input",1,0),_e("focus",function(a){return Et(r),wt(o.onInputFocus(a))})("blur",function(a){return Et(r),wt(o.onInputBlur(a))})("change",function(a){return Et(r),wt(o.onChange(a))}),Oe(),Ne(2,"div",2),Ye(3,"div",2),Oe()}n&2&&(N(o.cx("input")),x("checked",o.checked)("pAutoFocus",o.autofocus)("pBind",o.ptm("input")),fe("id",o.inputId)("name",o.name())("required",o.required()?"":void 0)("disabled",o.$disabled()?"":void 0)("value",o.modelValue())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-checked",o.checked)("tabindex",o.tabindex),z(2),N(o.cx("box")),x("pBind",o.ptm("box")),z(),N(o.cx("icon")),x("pBind",o.ptm("icon")))},dependencies:[ne,Ci,Y,Ie,S],encapsulation:2,changeDetection:0})}return t})(),gv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=R({imports:[rl,Y,Y]})}return t})();export{yt as a,wl as b,$i as c,Sl as d,xt as e,mr as f,br as g,Il as h,Ql as i,$r as j,Zi as k,Xi as l,vt as m,tu as n,iu as o,ou as p,ne as q,Ji as r,rn as s,uu as t,ei as u,hh as v,Gt as w,nt as x,Ba as y,za as z,Tc as A,Fc as B,Ic as C,Hr as D,Dt as E,at as F,qr as G,hu as H,fu as I,Dh as J,Ch as K,Kr as L,_h as M,an as N,bu as O,Eh as P,ni as Q,wh as R,yu as S,Nt as T,Sh as U,Xr as V,Ah as W,oo as X,Th as Y,Fh as Z,ro as _,Ih as $,so as aa,Mh as ba,xh as ca,Nh as da,Oh as ea,es as fa,ze as ga,Tu as ha,L as ia,lt as ja,Ge as ka,Ph as la,Bh as ma,Vh as na,$h as oa,ln as pa,ue as qa,Wh as ra,qh as sa,Kh as ta,Yh as ua,Ot as va,Y as wa,Zh as xa,Fo as ya,gd as za,xf as Aa,Nf as Ba,V as Ca,Io as Da,tg as Ea,Z as Fa,ee as Ga,S as Ha,Ie as Ia,Qe as Ja,Ds as Ka,ds as La,$e as Ma,Os as Na,bf as Oa,So as Pa,vf as Qa,id as Ra,rd as Sa,Df as Ta,Us as Ua,Cf as Va,vi as Wa,mn as Xa,Zg as Ya,Xg as Za,Mo as _a,hm as $a,fm as ab,la as bb,Ci as cb,xo as db,pa as eb,jt as fb,Xm as gb,fa as hb,ib,Di as jb,um as kb,Ib as lb,ec as mb,Mb as nb,ic as ob,Wb as pb,sc as qb,sy as rb,Wa as sb,Qy as tb,Jy as ub,Kt as vb,tl as wb,K0 as xb,rl as yb,gv as zb};
