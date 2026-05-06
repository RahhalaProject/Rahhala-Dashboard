import{a as st}from"./chunk-KMS7NP6X.js";import{a as ot}from"./chunk-EJ6BUHJF.js";import{a as lt,b as pt}from"./chunk-GWEDRTCQ.js";import{b as rt}from"./chunk-QETBR2DP.js";import{e as nt,i as it}from"./chunk-RT24IGRX.js";import{Ba as Z,Ea as tt,Fa as et,Ga as D,ja as X,ta as Y,ua as S}from"./chunk-I3WKUYHL.js";import{k as G,o as J,t as W}from"./chunk-B6OEZQF5.js";import{$ as u,Cb as P,Db as M,Eb as L,Fb as v,Jb as h,Kb as c,Lc as p,Ma as s,Mc as $,Nb as C,Ob as O,Pb as b,Qb as f,R as E,Ra as w,S as V,Tb as j,U as A,W as g,Wb as q,Xb as _,aa as d,ab as N,ba as z,bb as Q,eb as H,ec as U,fb as R,gb as m,ia as F,na as x,ob as B,uc as K,vb as r,wb as y,xb as T,yb as k}from"./chunk-TAXPTBQK.js";var at=`
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button.p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button.p-button:focus-visible,
    .p-splitbutton-dropdown.p-button:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button.p-button:not(:disabled):hover,
    .p-splitbutton-button.p-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown.p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button.p-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`;var ct=["content"],mt=["dropdownicon"],bt=["defaultbtn"],ft=["menu"];function _t(n,a){n&1&&L(0)}function wt(n,a){if(n&1){let t=v();P(0),y(1,"button",8),h("click",function(e){u(t);let o=c();return d(o.onDefaultButtonClick(e))}),m(2,_t,1,0,"ng-container",9),T(),M()}if(n&2){let t=c();s(),_(t.cx("pcButton")),r("severity",t.severity)("text",t.text)("outlined",t.outlined)("size",t.size)("icon",t.icon)("iconPos",t.iconPos)("disabled",t.disabled)("pAutoFocus",t.autofocus)("pTooltip",t.tooltip)("tooltipOptions",t.tooltipOptions)("pt",t.ptm("pcButton")),B("tabindex",t.tabindex)("aria-label",(t.buttonProps==null?null:t.buttonProps.ariaLabel)||t.label),s(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)}}function yt(n,a){if(n&1){let t=v();y(0,"button",10,2),h("click",function(e){u(t);let o=c();return d(o.onDefaultButtonClick(e))}),T()}if(n&2){let t=c();_(t.cx("pcButton")),r("severity",t.severity)("text",t.text)("outlined",t.outlined)("size",t.size)("icon",t.icon)("iconPos",t.iconPos)("label",t.label)("disabled",t.buttonDisabled)("pAutoFocus",t.autofocus)("pTooltip",t.tooltip)("tooltipOptions",t.tooltipOptions)("pt",t.ptm("pcButton")),B("tabindex",t.tabindex)("aria-label",t.buttonProps==null?null:t.buttonProps.ariaLabel)}}function Tt(n,a){if(n&1&&k(0,"span"),n&2){let t=c();_(t.dropdownIcon)}}function ht(n,a){n&1&&(z(),k(0,"svg",12))}function gt(n,a){}function Bt(n,a){n&1&&m(0,gt,0,0,"ng-template")}function vt(n,a){if(n&1&&(P(0),m(1,ht,1,0,"svg",11)(2,Bt,1,0,null,9),M()),n&2){let t=c();s(),r("ngIf",!t.dropdownIconTemplate&&!t._dropdownIconTemplate),s(),r("ngTemplateOutlet",t.dropdownIconTemplate||t._dropdownIconTemplate)}}var Ct={root:({instance:n})=>["p-splitbutton p-component",{"p-splitbutton-raised":n.raised,"p-splitbutton-rounded":n.rounded,"p-splitbutton-outlined":n.outlined,"p-splitbutton-text":n.text,[`p-splitbutton-${n.size==="small"?"sm":"lg"}`]:n.size}],pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown p-button-icon-only"},ut=(()=>{class n extends Z{name="splitbutton";style=at;classes=Ct;static \u0275fac=(()=>{let t;return function(e){return(t||(t=x(n)))(e||n)}})();static \u0275prov=E({token:n,factory:n.\u0275fac})}return n})();var dt=new A("SPLITBUTTON_INSTANCE"),St=(()=>{class n extends et{$pcSplitButton=g(dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}model;severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;icon;iconPos="left";label;tooltip;tooltipOptions;styleClass;menuStyle;menuStyleClass;dropdownIcon;appendTo="body";dir;expandAriaLabel;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";buttonProps;menuButtonProps;autofocus;set disabled(t){this._disabled=t??!1,this.buttonDisabled=t??!1,this.menuButtonDisabled=t??!1}get disabled(){return this._disabled}tabindex;menuButtonDisabled=!1;buttonDisabled=!1;onClick=new w;onMenuHide=new w;onMenuShow=new w;onDropdownClick=new w;buttonViewChild;menu;contentTemplate;dropdownIconTemplate;templates;ariaId;isExpanded=F(!1);_disabled;_componentStyle=g(ut);_contentTemplate;_dropdownIconTemplate;onInit(){this.ariaId=X("pn_id_")}onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"dropdownicon":this._dropdownIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onDefaultButtonClick(t){this.onClick?.emit(t),this.menu?.hide()}onDropdownButtonClick(t){this.onDropdownClick.emit(t),this.menu?.toggle({currentTarget:this.el?.nativeElement,relativeAlign:this.appendTo==null})}onDropdownButtonKeydown(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())}onHide(){this.isExpanded.set(!1),this.onMenuHide.emit()}onShow(){this.isExpanded.set(!0),this.onMenuShow.emit()}static \u0275fac=(()=>{let t;return function(e){return(t||(t=x(n)))(e||n)}})();static \u0275cmp=N({type:n,selectors:[["p-splitbutton"],["p-splitButton"],["p-split-button"]],contentQueries:function(i,e,o){if(i&1&&(C(o,ct,4),C(o,mt,4),C(o,Y,4)),i&2){let l;b(l=f())&&(e.contentTemplate=l.first),b(l=f())&&(e.dropdownIconTemplate=l.first),b(l=f())&&(e.templates=l)}},viewQuery:function(i,e){if(i&1&&(O(bt,5),O(ft,5)),i&2){let o;b(o=f())&&(e.buttonViewChild=o.first),b(o=f())&&(e.menu=o.first)}},hostVars:2,hostBindings:function(i,e){i&2&&_(e.cn(e.cx("root"),e.styleClass))},inputs:{model:"model",severity:"severity",raised:[2,"raised","raised",p],rounded:[2,"rounded","rounded",p],text:[2,"text","text",p],outlined:[2,"outlined","outlined",p],size:"size",plain:[2,"plain","plain",p],icon:"icon",iconPos:"iconPos",label:"label",tooltip:"tooltip",tooltipOptions:"tooltipOptions",styleClass:"styleClass",menuStyle:"menuStyle",menuStyleClass:"menuStyleClass",dropdownIcon:"dropdownIcon",appendTo:"appendTo",dir:"dir",expandAriaLabel:"expandAriaLabel",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonProps:"buttonProps",menuButtonProps:"menuButtonProps",autofocus:[2,"autofocus","autofocus",p],disabled:[2,"disabled","disabled",p],tabindex:[2,"tabindex","tabindex",$],menuButtonDisabled:[2,"menuButtonDisabled","menuButtonDisabled",p],buttonDisabled:[2,"buttonDisabled","buttonDisabled",p]},outputs:{onClick:"onClick",onMenuHide:"onMenuHide",onMenuShow:"onMenuShow",onDropdownClick:"onDropdownClick"},features:[U([ut,{provide:dt,useExisting:n},{provide:tt,useExisting:n}]),R([D]),H],decls:8,vars:26,consts:[["defaultButton",""],["menu",""],["defaultbtn",""],[4,"ngIf","ngIfElse"],["type","button","pButton","","pRipple","",3,"click","keydown","size","severity","text","outlined","disabled","pt"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"onHide","onShow","id","popup","model","styleClass","appendTo","showTransitionOptions","hideTransitionOptions","pt"],["type","button","pButton","","pRipple","",3,"click","severity","text","outlined","size","icon","iconPos","disabled","pAutoFocus","pTooltip","tooltipOptions","pt"],[4,"ngTemplateOutlet"],["type","button","pButton","","pRipple","",3,"click","severity","text","outlined","size","icon","iconPos","label","disabled","pAutoFocus","pTooltip","tooltipOptions","pt"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-down"]],template:function(i,e){if(i&1){let o=v();m(0,wt,3,16,"ng-container",3)(1,yt,2,16,"ng-template",null,0,K),y(3,"button",4),h("click",function(I){return u(o),d(e.onDropdownButtonClick(I))})("keydown",function(I){return u(o),d(e.onDropdownButtonKeydown(I))}),m(4,Tt,1,2,"span",5)(5,vt,3,2,"ng-container",6),T(),y(6,"p-tieredmenu",7,1),h("onHide",function(){return u(o),d(e.onHide())})("onShow",function(){return u(o),d(e.onShow())}),T()}if(i&2){let o=j(2);r("ngIf",e.contentTemplate||e._contentTemplate)("ngIfElse",o),s(3),_(e.cx("pcDropdown")),r("size",e.size)("severity",e.severity)("text",e.text)("outlined",e.outlined)("disabled",e.menuButtonDisabled)("pt",e.ptm("pcDropdown")),B("aria-label",(e.menuButtonProps==null?null:e.menuButtonProps.ariaLabel)||e.expandAriaLabel)("aria-haspopup",(e.menuButtonProps==null?null:e.menuButtonProps.ariaHasPopup)||!0)("aria-expanded",(e.menuButtonProps==null?null:e.menuButtonProps.ariaExpanded)||e.isExpanded())("aria-controls",(e.menuButtonProps==null?null:e.menuButtonProps.ariaControls)||e.ariaId),s(),r("ngIf",e.dropdownIcon),s(),r("ngIf",!e.dropdownIcon),s(),q(e.menuStyle),r("id",e.ariaId)("popup",!0)("model",e.model)("styleClass",e.menuStyleClass)("appendTo",e.appendTo)("showTransitionOptions",e.showTransitionOptions)("hideTransitionOptions",e.hideTransitionOptions)("pt",e.ptm("pcMenu"))}},dependencies:[W,G,J,rt,st,nt,ot,it,pt,lt,S],encapsulation:2,changeDetection:0})}return n})(),ee=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Q({type:n});static \u0275inj=V({imports:[St,S,S]})}return n})();export{St as a,ee as b};
