import{a as K,b as Q}from"./chunk-5EJEQUUR.js";import{b,c as W,d as X,f as Y,g as Z}from"./chunk-DY6GCLXR.js";import{b as J}from"./chunk-EUJBFWHZ.js";import{e as z,f as A,h as G}from"./chunk-YPIQTWXA.js";import{f as q,g as O}from"./chunk-BL4CN2DB.js";import{n as j,t as H}from"./chunk-YJOZJPN7.js";import{$ as k,Ab as h,Ba as p,Bb as S,Ea as d,Ib as L,Ja as _,Lb as f,Nd as U,Oa as l,Pa as n,Qa as g,S as m,T as E,Ua as D,V as R,Va as w,Wa as c,_ as M,_c as N,da as F,eb as v,fb as x,ia as C,lc as $,pb as I,qa as o,qb as B,tc as V,zb as u}from"./chunk-TKDRZ55X.js";var ee=(()=>{class e{constructor(){this.ref=m(L),this.destroyRef=m(F),this.translateSvc=m(N),this.pTable=m(b,{self:!0})}ngOnInit(){this.pTable.styleClass="p-datatable-sm",this.pTable.rows=10,this.pTable.rowsPerPageOptions=[10,25,50,100,250],this.pTable.showCurrentPageReport=!0,this.translateSvc.get("data.currentPageReportTemplate").pipe(V(this.destroyRef)).subscribe(t=>{this.pTable.currentPageReportTemplate=t,this.ref.markForCheck()})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=R({type:e,selectors:[["","labPagedTable",""]],standalone:!0})}}return e})();var ie=()=>["category.id"];function ne(e,r){e&1&&(l(0,"th",5)(1,"span"),v(2),u(3,"translate"),n(),g(4,"p-sortIcon",6),n()),e&2&&(o(2),x(h(3,1,"data.category")))}function ae(e,r){if(e&1){let t=D();l(0,"p-multiSelect",10),u(1,"translate"),u(2,"translate"),w("onChange",function(a){let s=M(t).filterCallback;return k(s(a.value))}),n()}if(e&2){let t=r.$implicit,i=c(4);d("ngModel",t)("options",i.options().categories)("maxSelectedLabels",1)("selectedItemsLabel",h(1,5,"data.selectedLabel"))("placeholder",h(2,7,"data.any"))}}function oe(e,r){e&1&&(l(0,"th")(1,"p-columnFilter",8),p(2,ae,3,9,"ng-template",9),n()())}function le(e,r){if(e&1&&(l(0,"tr")(1,"th"),g(2,"p-columnFilter",7),n(),p(3,oe,3,0,"th"),n()),e&2){let t=c(2);o(3),_(t.hasCategory()?3:-1)}}function re(e,r){if(e&1&&(l(0,"tr")(1,"th",3)(2,"span"),v(3),u(4,"translate"),n(),g(5,"p-sortIcon",4),n(),p(6,ne,5,3,"th",5),n(),p(7,le,4,1,"tr")),e&2){let t=c();o(3),x(h(4,3,"data.name")),o(3),_(t.hasCategory()?6:-1),o(),_(t.value().length>10?7:-1)}}function se(e,r){if(e&1&&(l(0,"a",11),g(1,"button",12),u(2,"iconSmClass"),n()),e&2){let t=c(2).$implicit,i=c();d("routerLink",i.dataRoute()+"categories/"+t.category.id),o(),d("label",t.category.name)("icon",S(2,3,t.category.id,"category"))}}function pe(e,r){if(e&1&&(l(0,"td"),p(1,se,3,6,"a",11),n()),e&2){let t=c().$implicit;o(),_(t.category?1:-1)}}function ce(e,r){if(e&1&&(l(0,"tr")(1,"td")(2,"a",11),g(3,"button",12),u(4,"iconSmClass"),n()(),p(5,pe,2,1,"td"),n()),e&2){let t=r.$implicit,i=c();o(2),d("routerLink",i.route()+t.id),o(),d("label",t.name)("icon",S(4,4,t.id,i.type())),o(2),_(i.hasCategory()?5:-1)}}var Be=(()=>{class e{constructor(){this.settingsSvc=m(U),this.ids=C.required(),this.type=C.required(),this.useRelativePath=C(!1),this.options=this.settingsSvc.options,this.data=this.settingsSvc.dataset,this.dataRoute=f(()=>`/${this.data().modId}/data/`),this.route=f(()=>{if(this.useRelativePath())return"";let i=this.type(),a=this.dataRoute();switch(i){case"category":return`${a}categories/`;default:return`${a}${i}s/`}}),this.hasCategory=f(()=>{let t=this.type();return t!=="category"&&t!=="location"}),this.value=f(()=>{let t=this.ids(),i=this.type(),a=this.data(),s;switch(i){case"category":s=a.categoryEntities;break;case"item":s=a.itemEntities;break;case"recipe":s=a.recipeEntities;break;case"location":s=a.locationEntities;break}return t.filter(y=>s[y]).map(y=>{let T=s[y],P={id:T.id,name:T.name};return this.hasCategory()&&(P.category=a.categoryEntities[T.category]),P})})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=E({type:e,selectors:[["lab-collection-table"]],inputs:{ids:[1,"ids"],type:[1,"type"],useRelativePath:[1,"useRelativePath"]},standalone:!0,features:[I],decls:3,vars:4,consts:[["labPagedTable","",3,"value","paginator","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","name"],["field","name"],["pSortableColumn","category.name"],["field","category.name"],["type","text","field","name","matchMode","contains"],["field","category.id","matchMode","in"],["pTemplate","filter"],["appendTo","body",3,"onChange","ngModel","options","maxSelectedLabels","selectedItemsLabel","placeholder"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-link",3,"label","icon"]],template:function(i,a){i&1&&(l(0,"p-table",0),p(1,re,8,5,"ng-template",1)(2,ce,6,7,"ng-template",2),n()),i&2&&d("value",a.value())("paginator",a.value().length>10)("globalFilterFields",B(3,ie))},dependencies:[G,z,A,$,O,q,j,Q,K,Z,b,W,X,Y,J,ee,H],styles:["th[_ngcontent-%COMP%]{width:50%}"],changeDetection:0})}}return e})();export{Be as a};