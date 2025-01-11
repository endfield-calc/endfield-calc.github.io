import{a as se,d as ue}from"./chunk-35FYM72W.js";import{a as ce,b as le,i as D}from"./chunk-52GEESEG.js";import{a as A,k as oe,n as ae,o as re}from"./chunk-GO2TXOKC.js";import{$ as m,$a as F,$b as ne,Aa as $,Ba as p,Da as s,Ea as a,Ia as w,Ib as J,Ic as N,Jb as b,Jc as u,Kb as Y,N as O,O as P,Oa as C,P as q,Pa as _,Qa as V,Ra as T,S as g,Sa as S,Sb as Z,T as Q,U as R,Ua as M,Ub as ee,Va as I,W as y,Wa as h,Xb as te,Yb as ie,Za as W,_ as f,_a as z,ab as E,ca as U,db as j,ea as k,eb as G,gb as H,ob as K,qa as c,ra as x,tb as B,ub as X}from"./chunk-YEVUXTHV.js";var pe=["input"],he=(t,r,e,n)=>({"p-checkbox p-component":!0,"p-checkbox-checked":t,"p-checkbox-disabled":r,"p-checkbox-focused":e,"p-variant-filled":n}),fe=(t,r,e)=>({"p-highlight":t,"p-disabled":r,"p-focus":e}),me=(t,r,e)=>({"p-checkbox-label":!0,"p-checkbox-label-active":t,"p-disabled":r,"p-checkbox-label-focus":e});function be(t,r){if(t&1&&V(0,"span",10),t&2){let e=h(3);a("ngClass",e.checkboxIcon),s("data-pc-section","icon")}}function Ce(t,r){t&1&&V(0,"CheckIcon",11),t&2&&(a("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function _e(t,r){if(t&1&&(T(0),p(1,be,1,2,"span",8)(2,Ce,1,2,"CheckIcon",9),S()),t&2){let e=h(2);c(),a("ngIf",e.checkboxIcon),c(),a("ngIf",!e.checkboxIcon)}}function ge(t,r){}function ye(t,r){t&1&&p(0,ge,0,0,"ng-template")}function ke(t,r){if(t&1&&(C(0,"span",12),p(1,ye,1,0,null,13),_()),t&2){let e=h(2);s("data-pc-section","icon"),c(),a("ngTemplateOutlet",e.checkboxIconTemplate)}}function xe(t,r){if(t&1&&(T(0),p(1,_e,3,2,"ng-container",5)(2,ke,2,2,"span",7),S()),t&2){let e=h();c(),a("ngIf",!e.checkboxIconTemplate),c(),a("ngIf",e.checkboxIconTemplate)}}function Ie(t,r){if(t&1){let e=M();C(0,"label",14),I("click",function(i){f(e);let o=h(),l=j(3);return m(o.onClick(i,l,!0))}),G(1),_()}if(t&2){let e=h();w(e.labelStyleClass),a("ngClass",B(6,me,e.checked(),e.disabled,e.focused)),s("for",e.inputId)("data-pc-section","label"),c(),H(" ",e.label,"")}}var ve={provide:se,useExisting:O(()=>we),multi:!0},we=(()=>{class t{cd;injector;config;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new k;onFocus=new k;onBlur=new k;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(e,n,i){this.cd=e,this.injector=n,this.config=i}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this.checkboxIconTemplate=e.template;break}})}onClick(e,n,i){e.preventDefault(),!(this.disabled||this.readonly)&&(this.updateModel(e),i&&n.focus())}updateModel(e){let n,i=this.injector.get(ue,null,{optional:!0,self:!0}),o=i&&!this.formControl?i.value:this.model;this.binary?(n=this.checked()?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked()?n=o.filter(l=>!A.equals(l,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}checked(){return this.binary?this.model===this.trueValue:A.contains(this.value,this.model)}static \u0275fac=function(n){return new(n||t)(x(J),x(U),x(oe))};static \u0275cmp=Q({type:t,selectors:[["p-checkbox"]],contentQueries:function(n,i,o){if(n&1&&W(o,ae,4),n&2){let l;F(l=E())&&(i.templates=l)}},viewQuery:function(n,i){if(n&1&&z(pe,5),n&2){let o;F(o=E())&&(i.inputViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",b],binary:[2,"binary","binary",b],label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Y],inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",b],required:[2,"required","required",b],autofocus:[2,"autofocus","autofocus",b],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[K([ve]),$],decls:7,vars:37,consts:[["input",""],[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox","pAutoFocus","",3,"change","focus","blur","value","checked","disabled","readonly","autofocus"],[1,"p-checkbox-box",3,"click","ngClass"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"click","ngClass"]],template:function(n,i){if(n&1){let o=M();C(0,"div",1)(1,"div",2)(2,"input",3,0),I("change",function(d){return f(o),m(i.handleChange(d))})("focus",function(d){return f(o),m(i.onInputFocus(d))})("blur",function(d){return f(o),m(i.onInputBlur(d))}),_()(),C(4,"div",4),I("click",function(d){f(o);let de=j(3);return m(i.onClick(d,de,!0))}),p(5,xe,3,2,"ng-container",5),_()(),p(6,Ie,2,10,"label",6)}n&2&&(w(i.styleClass),a("ngStyle",i.style)("ngClass",X(28,he,i.checked(),i.disabled,i.focused,i.variant==="filled"||i.config.inputStyle()==="filled")),s("data-pc-name","checkbox")("data-pc-section","root"),c(),s("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),c(),a("value",i.value)("checked",i.checked())("disabled",i.disabled)("readonly",i.readonly)("autofocus",i.autofocus),s("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-checked",i.checked())("data-pc-section","hiddenInput"),c(2),a("ngClass",B(33,fe,i.checked(),i.disabled,i.focused)),s("data-p-highlight",i.checked())("data-p-disabled",i.disabled)("data-p-focused",i.focused)("data-pc-section","input"),c(),a("ngIf",i.checked()),c(),a("ngIf",i.label))},dependencies:()=>[Z,ee,ie,te,ce,D],styles:[`@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}
`],encapsulation:2,changeDetection:0})}return t})(),$e=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=R({type:t});static \u0275inj=q({imports:[ne,le,D,re]})}return t})();var v=(()=>{class t{round(e){return typeof e=="string"&&(e=u(e)),e instanceof N&&(e=e.toNumber()),Number(e.toFixed(2)).toString()}usage(e){return e instanceof N||(e=u(e)),e.abs().lt(u(1000n))?`${this.round(e)} kW`:`${this.round(e.div(u(1000n)))} MW`}toBonusPercent(e){let n=this.round(e.mul(u(100n)));return e.gt(u.zero)?`+${n}%`:e.lt(u.zero)?`${n}%`:""}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Je=(()=>{class t{constructor(){this.displaySvc=g(v)}transform(e){return this.displaySvc.round(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275pipe=y({name:"round",type:t,pure:!0,standalone:!0})}}return t})();var it=(()=>{class t{constructor(){this.displaySvc=g(v)}transform(e){return this.displaySvc.usage(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275pipe=y({name:"usage",type:t,pure:!0,standalone:!0})}}return t})();export{we as a,$e as b,v as c,Je as d,it as e};
