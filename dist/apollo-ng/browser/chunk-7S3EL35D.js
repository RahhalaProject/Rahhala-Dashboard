import{a as Z,b as ee}from"./chunk-VJNCUL3J.js";import{c as X,d as Y}from"./chunk-QETBR2DP.js";import"./chunk-XNY62A5J.js";import"./chunk-RT24IGRX.js";import"./chunk-QLBZEAZJ.js";import{Ba as J,Ea as K,Fa as W,Ga as E,ta as G,ua as D}from"./chunk-I3WKUYHL.js";import{j as V,k as S,o as U,t as I}from"./chunk-B6OEZQF5.js";import{Cb as q,Db as Q,Eb as C,Ja as R,Kb as f,Ma as r,Nb as h,Pb as T,Qb as y,R as z,S as F,Tb as j,U as O,W as k,Wb as P,Xb as v,Yb as m,Zb as L,_b as g,ab as b,bb as A,eb as N,ec as H,fb as $,gb as s,gc as x,na as M,uc as d,vb as i,wb as l,xb as o,yb as _}from"./chunk-TAXPTBQK.js";import"./chunk-GAL4ENT6.js";var te=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var me=["content"],pe=["opposite"],ce=["marker"],w=e=>({$implicit:e});function se(e,n){e&1&&C(0)}function de(e,n){e&1&&C(0)}function ve(e,n){if(e&1&&(q(0),s(1,de,1,0,"ng-container",3),Q()),e&2){let t=f().$implicit,a=f();r(),i("ngTemplateOutlet",a.markerTemplate||a._markerTemplate)("ngTemplateOutletContext",x(2,w,t))}}function ue(e,n){if(e&1&&_(0,"div",2),e&2){let t=f(2);v(t.cx("eventMarker")),i("pBind",t.ptm("eventMarker"))}}function fe(e,n){if(e&1&&_(0,"div",2),e&2){let t=f(2);v(t.cx("eventConnector")),i("pBind",t.ptm("eventConnector"))}}function ge(e,n){e&1&&C(0)}function _e(e,n){if(e&1&&(l(0,"div",2)(1,"div",2),s(2,se,1,0,"ng-container",3),o(),l(3,"div",2),s(4,ve,2,4,"ng-container",4)(5,ue,1,3,"ng-template",null,0,d)(7,fe,1,3,"div",5),o(),l(8,"div",2),s(9,ge,1,0,"ng-container",3),o()()),e&2){let t=n.$implicit,a=n.last,c=j(6),p=f();v(p.cx("event")),i("pBind",p.ptm("event")),r(),v(p.cx("eventOpposite")),i("pBind",p.ptm("eventOpposite")),r(),i("ngTemplateOutlet",p.oppositeTemplate||p._oppositeTemplate)("ngTemplateOutletContext",x(19,w,t)),r(),v(p.cx("eventSeparator")),i("pBind",p.ptm("eventSeparator")),r(),i("ngIf",p.markerTemplate||p._markerTemplate)("ngIfElse",c),r(3),i("ngIf",!a),r(),v(p.cx("eventContent")),i("pBind",p.ptm("eventContent")),r(),i("ngTemplateOutlet",p.contentTemplate||p._contentTemplate)("ngTemplateOutletContext",x(21,w,t))}}var xe={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},ne=(()=>{class e extends J{name="timeline";style=te;classes=xe;static \u0275fac=(()=>{let t;return function(c){return(t||(t=M(e)))(c||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var ie=new O("TIMELINE_INSTANCE"),B=(()=>{class e extends W{bindDirectiveInstance=k(E,{self:!0});$pcTimeline=k(ie,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=k(ne);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(c){return(t||(t=M(e)))(c||e)}})();static \u0275cmp=b({type:e,selectors:[["p-timeline"]],contentQueries:function(a,c,p){if(a&1&&(h(p,me,4),h(p,pe,4),h(p,ce,4),h(p,G,4)),a&2){let u;T(u=y())&&(c.contentTemplate=u.first),T(u=y())&&(c.oppositeTemplate=u.first),T(u=y())&&(c.markerTemplate=u.first),T(u=y())&&(c.templates=u)}},hostVars:2,hostBindings:function(a,c){a&2&&v(c.cn(c.cx("root"),c.styleClass))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[H([ne,{provide:ie,useExisting:e},{provide:K,useExisting:e}]),$([E]),N],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(a,c){a&1&&s(0,_e,10,23,"div",1),a&2&&i("ngForOf",c.value)},dependencies:[I,V,S,U,D,E],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=A({type:e});static \u0275inj=F({imports:[B,D,D]})}return e})();var Te=e=>({"background-color":e});function ye(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t.status," ")}}function Ee(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t.status," ")}}function ke(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t.status," ")}}function be(e,n){if(e&1&&(l(0,"small",17),m(1),o()),e&2){let t=n.$implicit;r(),L(t.date)}}function Ce(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t.status," ")}}function Se(e,n){if(e&1&&(l(0,"span",18),_(1,"i"),o()),e&2){let t=n.$implicit;P(x(4,Te,t.color)),r(),v(t.icon)}}function Ie(e,n){if(e&1&&_(0,"img",22),e&2){let t=f().$implicit;i("src","/images/product/"+t.image,R)("alt",t.name)}}function De(e,n){if(e&1&&(l(0,"p-card",19),s(1,Ie,1,2,"img",20),l(2,"p"),m(3," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),o(),_(4,"p-button",21),o()),e&2){let t=n.$implicit;i("header",t.status)("subheader",t.date),r(),i("ngIf",t.image),r(3),i("text",!0)}}function Me(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t," ")}}function we(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t," ")}}function Be(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t," ")}}function ze(e,n){e&1&&m(0," \xA0")}var oe=class e{events1=[];events2=[];ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=b({type:e,selectors:[["app-timeline-demo"]],decls:61,vars:8,consts:[["content",""],["opposite",""],["marker",""],[1,"grid","grid-cols-12","gap-8"],[1,"col-span-12","sm:col-span-6"],[1,"card"],[1,"font-semibold","text-xl","mb-4"],[3,"value"],["align","right",3,"value"],["align","alternate",3,"value"],[1,"col-span-full"],["align","alternate","styleClass","customized-timeline",3,"value"],[1,"font-semibold","mb-2"],["layout","horizontal","align","top",3,"value"],[1,"font-semibold","mt-4","mb-2"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"p-text-secondary"],[1,"flex","w-8","h-8","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[3,"header","subheader"],["width","200","class","shadow",3,"src","alt",4,"ngIf"],["label","Read more",3,"text"],["width","200",1,"shadow",3,"src","alt"]],template:function(t,a){t&1&&(l(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),m(4,"Left Align"),o(),l(5,"p-timeline",7),s(6,ye,1,1,"ng-template",null,0,d),o()()(),l(8,"div",4)(9,"div",5)(10,"div",6),m(11,"Right Align"),o(),l(12,"p-timeline",8),s(13,Ee,1,1,"ng-template",null,0,d),o()()(),l(15,"div",4)(16,"div",5)(17,"div",6),m(18,"Alternate Align"),o(),l(19,"p-timeline",9),s(20,ke,1,1,"ng-template",null,0,d),o()()(),l(22,"div",4)(23,"div",5)(24,"div",6),m(25,"Opposite Content"),o(),l(26,"p-timeline",7),s(27,be,2,1,"ng-template",null,0,d)(29,Ce,1,1,"ng-template",null,1,d),o()()(),l(31,"div",10)(32,"div",5)(33,"div",6),m(34,"Templating"),o(),l(35,"p-timeline",11),s(36,Se,2,6,"ng-template",null,2,d)(38,De,5,4,"ng-template",null,0,d),o()()(),l(40,"div",10)(41,"div",5)(42,"div",6),m(43,"Horizontal"),o(),l(44,"div",12),m(45,"Top Align"),o(),l(46,"p-timeline",13),s(47,Me,1,1,"ng-template",null,0,d),o(),l(49,"div",14),m(50,"Bottom Align"),o(),l(51,"p-timeline",15),s(52,we,1,1,"ng-template",null,0,d),o(),l(54,"div",14),m(55,"Alternate Align"),o(),l(56,"p-timeline",16),s(57,Be,1,1,"ng-template",null,0,d)(59,ze,1,0,"ng-template",null,1,d),o()()()()),t&2&&(r(5),i("value",a.events1),r(7),i("value",a.events1),r(7),i("value",a.events1),r(7),i("value",a.events1),r(9),i("value",a.events1),r(11),i("value",a.events2),r(5),i("value",a.events2),r(5),i("value",a.events2))},dependencies:[I,S,le,B,Y,X,ee,Z],encapsulation:2})};export{oe as TimelineDemo};
