import{$ as ve,Ca as ce,Fa as le,Ha as R,Ia as pe,Ja as de,Ma as me,Xa as Te,Ya as De,cb as Ee,fb as q,gb as Se,i as re,ib as Ne,k as oe,ka as Be,l as we,la as Ve,m as ae,q as se,va as ue,vb as he,wa as K}from"./chunk-53VAJMGP.js";import{Bb as j,Ca as h,Cb as te,Db as M,Eb as F,Ha as E,Kb as Ce,Lb as g,Na as ye,Q as W,R as X,S as Z,Sa as S,Ta as Y,U as J,Ua as Ie,Ub as ne,W as D,Wa as v,Xa as ee,Xb as ke,Ya as f,a as fe,aa as d,b as _e,ba as m,ca as I,db as L,ea as ge,ja as xe,jb as s,kb as B,kc as ie,lb as V,mb as w,nc as C,oa as k,pb as P,qb as U,rb as $,tb as O,uc as y,vc as Q,xb as N,yb as u}from"./chunk-5F5CXVEU.js";var Qe=["data-p-icon","minus"],Me=(()=>{class i extends q{static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275cmp=S({type:i,selectors:[["","data-p-icon","minus"]],features:[v],attrs:Qe,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,t){n&1&&(I(),P(0,"path",0))},encapsulation:2})}return i})();var Fe=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var We=["icon"],Xe=["input"],Ze=(i,c)=>({checked:i,class:c});function Je(i,c){if(i&1&&w(0,"span",8),i&2){let e=u(3);g(e.cx("icon")),s("ngClass",e.checkboxIcon)("pBind",e.ptm("icon"))}}function Ye(i,c){if(i&1&&(I(),w(0,"svg",9)),i&2){let e=u(3);g(e.cx("icon")),s("pBind",e.ptm("icon"))}}function et(i,c){if(i&1&&(U(0),f(1,Je,1,4,"span",6)(2,Ye,1,3,"svg",7),$()),i&2){let e=u(2);h(),s("ngIf",e.checkboxIcon),h(),s("ngIf",!e.checkboxIcon)}}function tt(i,c){if(i&1&&(I(),w(0,"svg",10)),i&2){let e=u(2);g(e.cx("icon")),s("pBind",e.ptm("icon"))}}function nt(i,c){if(i&1&&(U(0),f(1,et,3,2,"ng-container",3)(2,tt,1,3,"svg",5),$()),i&2){let e=u();h(),s("ngIf",e.checked),h(),s("ngIf",e._indeterminate())}}function it(i,c){}function rt(i,c){i&1&&f(0,it,0,0,"ng-template")}var ot=`
    ${Fe}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,at={root:({instance:i})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":i.checked,"p-disabled":i.$disabled(),"p-invalid":i.invalid(),"p-variant-filled":i.$variant()==="filled","p-checkbox-sm p-inputfield-sm":i.size()==="small","p-checkbox-lg p-inputfield-lg":i.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Re=(()=>{class i extends ce{name="checkbox";style=ot;classes=at;static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();var ze=new J("CHECKBOX_INSTANCE"),st={provide:de,useExisting:W(()=>Ae),multi:!0},Ae=(()=>{class i extends he{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=C();size=C();onChange=new E;onFocus=new E;onBlur=new E;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:Ve(this.value,this.modelValue())}_indeterminate=xe(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=D(Re);bindDirectiveInstance=D(R,{self:!0});$pcCheckbox=D(ze,{optional:!0,skipSelf:!0})??void 0;$variant=ie(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let n,t=this.injector.get(me,null,{optional:!0,self:!0}),r=t&&!this.formControl?t.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(o=>!Be(o,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275cmp=S({type:i,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,t,r){if(n&1&&(j(r,We,4),j(r,ue,4)),n&2){let o;M(o=F())&&(t.checkboxIconTemplate=o.first),M(o=F())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&te(Xe,5),n&2){let r;M(r=F())&&(t.inputViewChild=r.first)}},hostVars:5,hostBindings:function(n,t){n&2&&(L("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.$disabled()),g(t.cn(t.cx("root"),t.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",y],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Q],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",y],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",y],autofocus:[2,"autofocus","autofocus",y],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[ne([st,Re,{provide:ze,useExisting:i},{provide:le,useExisting:i}]),ee([R]),v],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(n,t){if(n&1){let r=O();B(0,"input",1,0),N("focus",function(a){return d(r),m(t.onInputFocus(a))})("blur",function(a){return d(r),m(t.onInputBlur(a))})("change",function(a){return d(r),m(t.handleChange(a))}),V(),B(2,"div",2),f(3,nt,3,2,"ng-container",3)(4,rt,1,0,null,4),V()}n&2&&(Ce(t.inputStyle),g(t.cn(t.cx("input"),t.inputClass)),s("checked",t.checked)("pBind",t.ptm("input")),L("id",t.inputId)("value",t.value)("name",t.name())("tabindex",t.tabindex)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),h(2),g(t.cx("box")),s("pBind",t.ptm("box")),h(),s("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),h(),s("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",ke(21,Ze,t.checked,t.cx("icon"))))},dependencies:[se,re,oe,ae,K,Se,Me,pe,R],encapsulation:2,changeDetection:0})}return i})(),_n=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Y({type:i});static \u0275inj=Z({imports:[Ae,K,K]})}return i})();var Le=(()=>{class i extends he{pcFluid=D(Te,{optional:!0,host:!0,skipSelf:!0});fluid=C(void 0,{transform:y});variant=C();size=C();inputSize=C();pattern=C();min=C();max=C();step=C();minlength=C();maxlength=C();$variant=ie(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275dir=Ie({type:i,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[v]})}return i})();var ut=["data-p-icon","angle-down"],Ue=(()=>{class i extends q{static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275cmp=S({type:i,selectors:[["","data-p-icon","angle-down"]],features:[v],attrs:ut,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,t){n&1&&(I(),P(0,"path",0))},encapsulation:2})}return i})();var ct=["data-p-icon","angle-up"],$e=(()=>{class i extends q{static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275cmp=S({type:i,selectors:[["","data-p-icon","angle-up"]],features:[v],attrs:ct,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,t){n&1&&(I(),P(0,"path",0))},encapsulation:2})}return i})();var Oe=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var lt=["clearicon"],pt=["incrementbuttonicon"],dt=["decrementbuttonicon"],mt=["input"];function ht(i,c){if(i&1){let e=O();I(),B(0,"svg",7),N("click",function(){d(e);let t=u(2);return m(t.clear())}),V()}if(i&2){let e=u(2);g(e.cx("clearIcon")),s("pBind",e.ptm("clearIcon"))}}function bt(i,c){}function ft(i,c){i&1&&f(0,bt,0,0,"ng-template")}function _t(i,c){if(i&1){let e=O();B(0,"span",8),N("click",function(){d(e);let t=u(2);return m(t.clear())}),f(1,ft,1,0,null,9),V()}if(i&2){let e=u(2);g(e.cx("clearIcon")),s("pBind",e.ptm("clearIcon")),h(),s("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function gt(i,c){if(i&1&&(U(0),f(1,ht,1,3,"svg",5)(2,_t,2,4,"span",6),$()),i&2){let e=u();h(),s("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),h(),s("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function xt(i,c){if(i&1&&w(0,"span",13),i&2){let e=u(2);s("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon)}}function yt(i,c){if(i&1&&(I(),w(0,"svg",15)),i&2){let e=u(3);s("pBind",e.ptm("incrementButtonIcon"))}}function It(i,c){}function Ct(i,c){i&1&&f(0,It,0,0,"ng-template")}function kt(i,c){if(i&1&&(U(0),f(1,yt,1,1,"svg",14)(2,Ct,1,0,null,9),$()),i&2){let e=u(2);h(),s("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),h(),s("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function wt(i,c){if(i&1&&w(0,"span",13),i&2){let e=u(2);s("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon)}}function vt(i,c){if(i&1&&(I(),w(0,"svg",17)),i&2){let e=u(3);s("pBind",e.ptm("decrementButtonIcon"))}}function Bt(i,c){}function Vt(i,c){i&1&&f(0,Bt,0,0,"ng-template")}function Tt(i,c){if(i&1&&(U(0),f(1,vt,1,1,"svg",16)(2,Vt,1,0,null,9),$()),i&2){let e=u(2);h(),s("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),h(),s("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Dt(i,c){if(i&1){let e=O();B(0,"span",10)(1,"button",11),N("mousedown",function(t){d(e);let r=u();return m(r.onUpButtonMouseDown(t))})("mouseup",function(){d(e);let t=u();return m(t.onUpButtonMouseUp())})("mouseleave",function(){d(e);let t=u();return m(t.onUpButtonMouseLeave())})("keydown",function(t){d(e);let r=u();return m(r.onUpButtonKeyDown(t))})("keyup",function(){d(e);let t=u();return m(t.onUpButtonKeyUp())}),f(2,xt,1,2,"span",12)(3,kt,3,2,"ng-container",2),V(),B(4,"button",11),N("mousedown",function(t){d(e);let r=u();return m(r.onDownButtonMouseDown(t))})("mouseup",function(){d(e);let t=u();return m(t.onDownButtonMouseUp())})("mouseleave",function(){d(e);let t=u();return m(t.onDownButtonMouseLeave())})("keydown",function(t){d(e);let r=u();return m(r.onDownButtonKeyDown(t))})("keyup",function(){d(e);let t=u();return m(t.onDownButtonKeyUp())}),f(5,wt,1,2,"span",12)(6,Tt,3,2,"ng-container",2),V()()}if(i&2){let e=u();g(e.cx("buttonGroup")),s("pBind",e.ptm("buttonGroup")),h(),g(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),s("pBind",e.ptm("incrementButton")),L("disabled",e.$disabled()?"":void 0)("aria-hidden",!0),h(),s("ngIf",e.incrementButtonIcon),h(),s("ngIf",!e.incrementButtonIcon),h(),g(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),s("pBind",e.ptm("decrementButton")),L("disabled",e.$disabled()?"":void 0)("aria-hidden",!0),h(),s("ngIf",e.decrementButtonIcon),h(),s("ngIf",!e.decrementButtonIcon)}}function Et(i,c){if(i&1&&w(0,"span",13),i&2){let e=u(2);s("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon)}}function St(i,c){if(i&1&&(I(),w(0,"svg",15)),i&2){let e=u(3);s("pBind",e.ptm("incrementButtonIcon"))}}function Nt(i,c){}function Mt(i,c){i&1&&f(0,Nt,0,0,"ng-template")}function Ft(i,c){if(i&1&&(U(0),f(1,St,1,1,"svg",14)(2,Mt,1,0,null,9),$()),i&2){let e=u(2);h(),s("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),h(),s("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Rt(i,c){if(i&1){let e=O();B(0,"button",11),N("mousedown",function(t){d(e);let r=u();return m(r.onUpButtonMouseDown(t))})("mouseup",function(){d(e);let t=u();return m(t.onUpButtonMouseUp())})("mouseleave",function(){d(e);let t=u();return m(t.onUpButtonMouseLeave())})("keydown",function(t){d(e);let r=u();return m(r.onUpButtonKeyDown(t))})("keyup",function(){d(e);let t=u();return m(t.onUpButtonKeyUp())}),f(1,Et,1,2,"span",12)(2,Ft,3,2,"ng-container",2),V()}if(i&2){let e=u();g(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),s("pBind",e.ptm("incrementButton")),L("disabled",e.$disabled()?"":void 0)("aria-hidden",!0),h(),s("ngIf",e.incrementButtonIcon),h(),s("ngIf",!e.incrementButtonIcon)}}function zt(i,c){if(i&1&&w(0,"span",13),i&2){let e=u(2);s("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon)}}function At(i,c){if(i&1&&(I(),w(0,"svg",17)),i&2){let e=u(3);s("pBind",e.ptm("decrementButtonIcon"))}}function Lt(i,c){}function Ut(i,c){i&1&&f(0,Lt,0,0,"ng-template")}function $t(i,c){if(i&1&&(U(0),f(1,At,1,1,"svg",16)(2,Ut,1,0,null,9),$()),i&2){let e=u(2);h(),s("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),h(),s("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Ot(i,c){if(i&1){let e=O();B(0,"button",11),N("mousedown",function(t){d(e);let r=u();return m(r.onDownButtonMouseDown(t))})("mouseup",function(){d(e);let t=u();return m(t.onDownButtonMouseUp())})("mouseleave",function(){d(e);let t=u();return m(t.onDownButtonMouseLeave())})("keydown",function(t){d(e);let r=u();return m(r.onDownButtonKeyDown(t))})("keyup",function(){d(e);let t=u();return m(t.onDownButtonKeyUp())}),f(1,zt,1,2,"span",12)(2,$t,3,2,"ng-container",2),V()}if(i&2){let e=u();g(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),s("pBind",e.ptm("decrementButton")),L("disabled",e.$disabled()?"":void 0)("aria-hidden",!0),h(),s("ngIf",e.decrementButtonIcon),h(),s("ngIf",!e.decrementButtonIcon)}}var Gt=`
    ${Oe}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,jt={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},Ge=(()=>{class i extends ce{name="inputnumber";style=Gt;classes=jt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=k(i)))(t||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();var je=new J("INPUTNUMBER_INSTANCE"),Kt={provide:de,useExisting:W(()=>Ke),multi:!0},Ke=(()=>{class i extends Le{injector;$pcInputNumber=D(je,{optional:!0,skipSelf:!0})??void 0;_componentStyle=D(Ge);bindDirectiveInstance=D(R,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new E;onFocus=new E;onBlur=new E;onKeyDown=new E;onClear=new E;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;ngControl=null;constructor(e){super(),this.injector=e}onChanges(e){["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}onInit(){this.ngControl=this.injector.get(me,null,{optional:!0}),this.constructParser(),this.initialized=!0}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(o,a,l)=>{if(!(o==null||isNaN(o)||!isFinite(o)))return Math.max(a,Math.min(l,Math.floor(o)))},n=e(this.minFractionDigits,0,20),t=e(this.maxFractionDigits,0,100),r=n!=null&&t!=null&&n>t?t:n;return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:r,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([o,a])=>a!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,n);let t=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),r=new Map(t.map((o,a)=>[o,a]));this._numeral=new RegExp(`[${t.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>r.get(o)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,_e(fe({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=this._suffix?new RegExp(this._suffix,""):/(?:)/,t=this._prefix?new RegExp(this._prefix,""):/(?:)/,r=this._currency?new RegExp(this._currency,""):/(?:)/,o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let a=+o;return isNaN(a)?null:a}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},r),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(r+t),a=this.maxlength();a&&a<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,r,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let a=n;a<=r.length;a++){let l=a===0?0:a-1;if(this.isNumeralChar(r.charAt(l))){this.input.nativeElement.setSelectionRange(a,a);break}}break;case"ArrowRight":for(let a=t;a>=0;a--)if(this.isNumeralChar(r.charAt(a))){this.input.nativeElement.setSelectionRange(a,a);break}break;case"Tab":case"Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let a=r.charAt(n-1),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:b}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let p=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,o=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(a))this._decimal.lastIndex=0,p?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=r.slice(0,n-1)+r.slice(n);else if(l>0&&n>l){let x=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";o=r.slice(0,n-1)+x+r.slice(n)}else b===1?(o=r.slice(0,n-1)+"0"+r.slice(n),o=this.parseValue(o)>0?o:""):o=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&this._currency&&a.search(this._currency)!=-1&&(o=r.slice(1));this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let a=r.charAt(n),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:b}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let p=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,o=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(a))this._decimal.lastIndex=0,p?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=r.slice(0,n)+r.slice(n+1);else if(l>0&&n>l){let x=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";o=r.slice(0,n)+x+r.slice(n+1)}else b===1?(o=r.slice(0,n)+"0"+r.slice(n+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:a,selectionStart:l,selectionEnd:b}=this.input.nativeElement,p=this.parseValue(a+t),x=p!=null?p.toString():"",G=a.substring(l,b),_=this.parseValue(G),z=_!=null?_.toString():"";if(l!==b&&z.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:o});return}let T=this.maxlength();T&&x.length>T||(48<=n&&n<=57||o||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:o})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let o=this.input?.nativeElement.selectionStart,a=this.input?.nativeElement.selectionEnd,l=this.input?.nativeElement.value.trim(),{decimalCharIndex:b,minusCharIndex:p,suffixCharIndex:x,currencyCharIndex:G}=this.getCharIndexes(l),_;if(t.isMinusSign)o===0&&(_=l,(p===-1||a!==0)&&(_=this.insertText(l,n,0,a)),this.updateValue(e,_,n,"insert"));else if(t.isDecimalSign)b>0&&o===b?this.updateValue(e,l,n,"insert"):b>o&&b<a?(_=this.insertText(l,n,o,a),this.updateValue(e,_,n,"insert")):b===-1&&this.maxFractionDigits&&(_=this.insertText(l,n,o,a),this.updateValue(e,_,n,"insert"));else{let z=this.numberFormat.resolvedOptions().maximumFractionDigits,T=o!==a?"range-insert":"insert";if(b>0&&o>b){if(o+n.length-(b+1)<=z){let A=G>=o?G-1:x>=o?x:l.length;_=l.slice(0,o)+n+l.slice(o+n.length,A)+l.slice(A),this.updateValue(e,_,n,T)}}else _=this.insertText(l,n,o,a),this.updateValue(e,_,n,T)}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let a=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,a>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,o=null,a=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<a)&&(e-=a);let l=t.charAt(e);if(this.isNumeralChar(l))return e+a;let b=e-1;for(;b>=0;)if(l=t.charAt(b),this.isNumeralChar(l)){o=b+a;break}else b--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else{for(b=e;b<r;)if(l=t.charAt(b),this.isNumeralChar(l)){o=b+a;break}else b++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o)}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==ve()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,r){let o=this.input?.nativeElement.value,a=null;n!=null&&(a=this.parseValue(n),a=!a&&!this.allowEmpty?0:a,this.updateInput(a,t,r,n),this.handleOnInput(e,o,a))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){if(e==="-"||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,r){n=n||"";let o=this.input?.nativeElement.value,a=this.formatValue(e),l=o.length;if(a!==r&&(a=this.concatValues(a,r)),l===0){this.input.nativeElement.value=a,this.input.nativeElement.setSelectionRange(0,0);let p=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(p,p)}else{let b=this.input.nativeElement.selectionStart,p=this.input.nativeElement.selectionEnd,x=this.maxlength();if(x&&a.length>x&&(a=a.slice(0,x),b=Math.min(b,x),p=Math.min(p,x)),x&&x<a.length)return;this.input.nativeElement.value=a;let G=a.length;if(t==="range-insert"){let _=this.parseValue((o||"").slice(0,b)),T=(_!==null?_.toString():"").split("").join(`(${this.groupChar})?`),A=new RegExp(T,"g");A.test(a);let Pe=n.split("").join(`(${this.groupChar})?`),be=new RegExp(Pe,"g");be.test(a.slice(A.lastIndex)),p=A.lastIndex+be.lastIndex,this.input.nativeElement.setSelectionRange(p,p)}else if(G===l)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(p+1,p+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(p-1,p-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(p,p);else if(t==="delete-back-single"){let _=o.charAt(p-1),z=o.charAt(p),T=l-G,A=this._group.test(z);A&&T===1?p+=1:!A&&this.isNumeralChar(_)&&(p+=-1*T+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(p,p)}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let z=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(z,z)}else p=p+(G-l),this.input.nativeElement.setSelectionRange(p,p)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||i)(ye(ge))};static \u0275cmp=S({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&(j(r,lt,4),j(r,pt,4),j(r,dt,4),j(r,ue,4)),n&2){let o;M(o=F())&&(t.clearIconTemplate=o.first),M(o=F())&&(t.incrementButtonIconTemplate=o.first),M(o=F())&&(t.decrementButtonIconTemplate=o.first),M(o=F())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&te(mt,5),n&2){let r;M(r=F())&&(t.input=r.first)}},hostVars:2,hostBindings:function(n,t){n&2&&g(t.cn(t.cx("root"),t.styleClass))},inputs:{showButtons:[2,"showButtons","showButtons",y],format:[2,"format","format",y],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",Q],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",y],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",y],allowEmpty:[2,"allowEmpty","allowEmpty",y],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",y],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>Q(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>Q(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",y],autofocus:[2,"autofocus","autofocus",y]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[ne([Kt,Ge,{provide:je,useExisting:i},{provide:le,useExisting:i}]),ee([R]),v],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pt","pAutoFocus","fluid"],[4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button","tabindex","-1",3,"pBind","class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],[3,"pBind"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","pBind"],[3,"pBind","ngClass",4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","angle-up",3,"pBind",4,"ngIf"],["data-p-icon","angle-up",3,"pBind"],["data-p-icon","angle-down",3,"pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"]],template:function(n,t){if(n&1){let r=O();B(0,"input",1,0),N("input",function(a){return d(r),m(t.onUserInput(a))})("keydown",function(a){return d(r),m(t.onInputKeyDown(a))})("keypress",function(a){return d(r),m(t.onInputKeyPress(a))})("paste",function(a){return d(r),m(t.onPaste(a))})("click",function(){return d(r),m(t.onInputClick())})("focus",function(a){return d(r),m(t.onInputFocus(a))})("blur",function(a){return d(r),m(t.onInputBlur(a))}),V(),f(2,gt,3,2,"ng-container",2)(3,Dt,7,17,"span",3)(4,Rt,3,7,"button",4)(5,Ot,3,7,"button",4)}n&2&&(g(t.cn(t.cx("pcInputText"),t.inputStyleClass)),s("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pt",t.ptm("pcInputText"))("pAutoFocus",t.autofocus)("fluid",t.hasFluid),L("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0),h(2),s("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),h(),s("ngIf",t.showButtons&&t.buttonLayout==="stacked"),h(),s("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),h(),s("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[se,re,oe,ae,we,De,Ee,Ne,$e,Ue,K,pe,R],encapsulation:2,changeDetection:0})}return i})(),Yn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Y({type:i});static \u0275inj=Z({imports:[Ke,K,K]})}return i})();export{Ae as a,_n as b,Le as c,Ke as d,Yn as e};
