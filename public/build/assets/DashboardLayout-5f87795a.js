import{u as A,a as L,r as u,j as e,c as Ne,b as D,_ as ge,R as w,d as Ee,e as F,o as Ce,f as ke,g as we,h as W,i as Y,k as Se,l as Te,m as Ie}from"./app-6cc9246f.js";import{L as Me,N as Le}from"./Essência-logo-fe800ed1.js";import{v as te,f as _e,a as Re,c as ae,b as oe,d as Ae}from"./utils-8b9f25e8.js";import{c as _,u as $,a as le,I as De,B as Z,F as $e}from"./useFetch-54b8e691.js";import"./index-7ac75a63.js";function Oe(){var t,l,c,d;const n=A(),s=L(i=>i.itemInfoModal.item),a=L(i=>i.itemInfoModal.open),o=()=>{n(Ne())};return u.useEffect(()=>{const i=document.getElementById("productDetails");a?(i.classList.add("show","fade-in"),i.style.display="block"):(i.classList.remove("fade-in"),i.classList.add("fade-out"),setTimeout(()=>{i.style.display="none",i.classList.remove("show","fade-out")},300))},[a]),e.jsxs(e.Fragment,{children:[s&&a&&e.jsx("div",{className:"modal-backdrop fade-in"}),e.jsx("div",{className:`modal ${a?"fade-in":"fade-out"}`,id:"productDetails",tabIndex:"-1","aria-labelledby":"productDetailsLabel","aria-hidden":!a,onClick:o,children:e.jsx("div",{className:"modal-dialog modal-center modal-lg",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"modal-content event-details",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title text-center",id:"productDetailsLabel",children:s==null?void 0:s.name}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:o})]}),e.jsxs("div",{className:"modal-body row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("div",{className:"event_img text-center mb-3",children:e.jsx("img",{src:te(s==null?void 0:s.event_thumbnail),alt:s==null?void 0:s.name,className:"img-fluid"})}),e.jsxs("h4",{className:"events-title text-secondary text-left mb-2",children:[_e(s!=null&&s.sale_price?s==null?void 0:s.sale_price:s==null?void 0:s.price),"€"]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"events-title text-left mb-4",children:(t=s==null?void 0:s.event)==null?void 0:t.name}),e.jsxs("div",{className:"accordins",children:[e.jsxs("div",{className:"accordin-item d-flex align-items-start mb-3",children:[e.jsx("div",{className:"me-3",children:e.jsx("i",{className:"fa fa-calendar fa-2x"})}),e.jsxs("div",{children:[e.jsx("h5",{children:"Event time"}),e.jsx("h6",{children:Re(s==null?void 0:s.start_date,s.end_date)})]})]}),e.jsxs("div",{className:"accordin-item d-flex align-items-start mb-3",children:[e.jsx("div",{className:"me-3",children:e.jsx("i",{class:"fas fa-map-marker-alt fa-2x"})}),e.jsxs("div",{children:[e.jsx("h5",{children:"Event at"}),e.jsx("h6",{children:(l=s==null?void 0:s.event)==null?void 0:l.location})]})]}),e.jsxs("div",{className:"accordin-item d-flex align-items-start mb-3",children:[e.jsx("div",{className:"me-3",children:e.jsx("i",{className:"fa fa-info-circle fa-2x"})}),e.jsxs("div",{children:[e.jsx("h5",{children:"Description"}),e.jsx("h6",{dangerouslySetInnerHTML:{__html:(s==null?void 0:s.description)||""}})]})]}),e.jsxs("div",{className:"accordin-item d-flex align-items-start mb-3",children:[e.jsx("div",{className:"me-3",children:e.jsx("i",{class:"fas fa-cocktail fa-2x"})}),e.jsxs("div",{className:"w-100",children:[e.jsx("h5",{children:(c=s==null?void 0:s.extras)!=null&&c.length?"Extras":"No extras"}),(d=s==null?void 0:s.extras)!=null&&d.length?e.jsx("ul",{className:"list-group",children:s.extras.map((i,m)=>e.jsxs("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[i.display_name,e.jsx("span",{className:"badge badge-primary bg-primary badge-pill",children:i.quantity})]},m))}):""]})]})]})]})]})]})})})]})}function Fe({onClick:n}){const{totalUniqueItems:s}=D();return e.jsx("div",{onClick:n,children:e.jsxs("button",{type:"button",className:"btn btn-dark btn-lg position-fixed",style:{bottom:"20px",right:"20px",zIndex:100},"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample",children:[e.jsx("i",{className:"fa fa-shopping-bag"}),e.jsxs("sup",{children:[" ",s||0]})]})})}function ce(n,s){if(n==null)return{};var a={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(s.includes(o))continue;a[o]=n[o]}return a}function J(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function Pe(n){var s=Be(n,"string");return typeof s=="symbol"?s:String(s)}function Be(n,s){if(typeof n!="object"||n===null)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var o=a.call(n,s||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}function qe(n,s,a){var o=u.useRef(n!==void 0),t=u.useState(s),l=t[0],c=t[1],d=n!==void 0,i=o.current;return o.current=d,!d&&i&&l!==s&&c(s),[d?n:l,u.useCallback(function(m){for(var f=arguments.length,r=new Array(f>1?f-1:0),h=1;h<f;h++)r[h-1]=arguments[h];a&&a.apply(void 0,[m].concat(r)),c(m)},[a])]}function Qe(n,s){return Object.keys(s).reduce(function(a,o){var t,l=a,c=l[J(o)],d=l[o],i=ce(l,[J(o),o].map(Pe)),m=s[o],f=qe(d,c,n[m]),r=f[0],h=f[1];return ge({},i,(t={},t[o]=r,t[m]=h,t))},n)}function Ue(n){return n&&n.ownerDocument||document}function ze(n){var s=Ue(n);return s&&s.defaultView||window}function He(n,s){return ze(n).getComputedStyle(n,s)}var Ge=/([A-Z])/g;function Xe(n){return n.replace(Ge,"-$1").toLowerCase()}var Ke=/^ms-/;function B(n){return Xe(n).replace(Ke,"-ms-")}var Ve=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function We(n){return!!(n&&Ve.test(n))}function Q(n,s){var a="",o="";if(typeof s=="string")return n.style.getPropertyValue(B(s))||He(n).getPropertyValue(B(s));Object.keys(s).forEach(function(t){var l=s[t];!l&&l!==0?n.style.removeProperty(B(t)):We(t)?o+=t+"("+l+") ":a+=B(t)+": "+l+";"}),o&&(a+="transform: "+o+";"),n.style.cssText+=";"+a}const ee={disabled:!1},ie=w.createContext(null);var Ye=function(s){return s.scrollTop},P="unmounted",T="exited",I="entering",M="entered",U="exiting",S=function(n){Ee(s,n);function s(o,t){var l;l=n.call(this,o,t)||this;var c=t,d=c&&!c.isMounting?o.enter:o.appear,i;return l.appearStatus=null,o.in?d?(i=T,l.appearStatus=I):i=M:o.unmountOnExit||o.mountOnEnter?i=P:i=T,l.state={status:i},l.nextCallback=null,l}s.getDerivedStateFromProps=function(t,l){var c=t.in;return c&&l.status===P?{status:T}:null};var a=s.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(t){var l=null;if(t!==this.props){var c=this.state.status;this.props.in?c!==I&&c!==M&&(l=I):(c===I||c===M)&&(l=U)}this.updateStatus(!1,l)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var t=this.props.timeout,l,c,d;return l=c=d=t,t!=null&&typeof t!="number"&&(l=t.exit,c=t.enter,d=t.appear!==void 0?t.appear:c),{exit:l,enter:c,appear:d}},a.updateStatus=function(t,l){if(t===void 0&&(t=!1),l!==null)if(this.cancelNextCallback(),l===I){if(this.props.unmountOnExit||this.props.mountOnEnter){var c=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this);c&&Ye(c)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===T&&this.setState({status:P})},a.performEnter=function(t){var l=this,c=this.props.enter,d=this.context?this.context.isMounting:t,i=this.props.nodeRef?[d]:[F.findDOMNode(this),d],m=i[0],f=i[1],r=this.getTimeouts(),h=d?r.appear:r.enter;if(!t&&!c||ee.disabled){this.safeSetState({status:M},function(){l.props.onEntered(m)});return}this.props.onEnter(m,f),this.safeSetState({status:I},function(){l.props.onEntering(m,f),l.onTransitionEnd(h,function(){l.safeSetState({status:M},function(){l.props.onEntered(m,f)})})})},a.performExit=function(){var t=this,l=this.props.exit,c=this.getTimeouts(),d=this.props.nodeRef?void 0:F.findDOMNode(this);if(!l||ee.disabled){this.safeSetState({status:T},function(){t.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:U},function(){t.props.onExiting(d),t.onTransitionEnd(c.exit,function(){t.safeSetState({status:T},function(){t.props.onExited(d)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(t,l){l=this.setNextCallback(l),this.setState(t,l)},a.setNextCallback=function(t){var l=this,c=!0;return this.nextCallback=function(d){c&&(c=!1,l.nextCallback=null,t(d))},this.nextCallback.cancel=function(){c=!1},this.nextCallback},a.onTransitionEnd=function(t,l){this.setNextCallback(l);var c=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this),d=t==null&&!this.props.addEndListener;if(!c||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[c,this.nextCallback],m=i[0],f=i[1];this.props.addEndListener(m,f)}t!=null&&setTimeout(this.nextCallback,t)},a.render=function(){var t=this.state.status;if(t===P)return null;var l=this.props,c=l.children;l.in,l.mountOnEnter,l.unmountOnExit,l.appear,l.enter,l.exit,l.timeout,l.addEndListener,l.onEnter,l.onEntering,l.onEntered,l.onExit,l.onExiting,l.onExited,l.nodeRef;var d=ce(l,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return w.createElement(ie.Provider,{value:null},typeof c=="function"?c(t,d):w.cloneElement(w.Children.only(c),d))},s}(w.Component);S.contextType=ie;S.propTypes={};function R(){}S.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:R,onEntering:R,onEntered:R,onExit:R,onExiting:R,onExited:R};S.UNMOUNTED=P;S.EXITED=T;S.ENTERING=I;S.ENTERED=M;S.EXITING=U;const Ze=S,Je=!!(typeof window<"u"&&window.document&&window.document.createElement);var X=!1,K=!1;try{var G={get passive(){return X=!0},get once(){return K=X=!0}};Je&&(window.addEventListener("test",G,G),window.removeEventListener("test",G,!0))}catch{}function en(n,s,a,o){if(o&&typeof o!="boolean"&&!K){var t=o.once,l=o.capture,c=a;!K&&t&&(c=a.__once||function d(i){this.removeEventListener(s,d,l),a.call(this,i)},a.__once=c),n.addEventListener(s,c,X?o:l)}n.addEventListener(s,a,o)}function nn(n,s,a,o){var t=o&&typeof o!="boolean"?o.capture:o;n.removeEventListener(s,a,t),a.__once&&n.removeEventListener(s,a.__once,t)}function re(n,s,a,o){return en(n,s,a,o),function(){nn(n,s,a,o)}}function sn(n,s,a,o){if(a===void 0&&(a=!1),o===void 0&&(o=!0),n){var t=document.createEvent("HTMLEvents");t.initEvent(s,a,o),n.dispatchEvent(t)}}function tn(n){var s=Q(n,"transitionDuration")||"",a=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*a}function an(n,s,a){a===void 0&&(a=5);var o=!1,t=setTimeout(function(){o||sn(n,"transitionend",!0)},s+a),l=re(n,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(t),l()}}function on(n,s,a,o){a==null&&(a=tn(n)||0);var t=an(n,a,o),l=re(n,"transitionend",s);return function(){t(),l()}}function ne(n,s){const a=Q(n,s)||"",o=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*o}function ln(n,s){const a=ne(n,"transitionDuration"),o=ne(n,"transitionDelay"),t=on(n,l=>{l.target===n&&(t(),s(l))},a+o)}function O(...n){return n.filter(s=>s!=null).reduce((s,a)=>{if(typeof a!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return s===null?a:function(...t){s.apply(this,t),a.apply(this,t)}},null)}function cn(n){n.offsetHeight}const se=n=>!n||typeof n=="function"?n:s=>{n.current=s};function rn(n,s){const a=se(n),o=se(s);return t=>{a&&a(t),o&&o(t)}}function dn(n,s){return u.useMemo(()=>rn(n,s),[n,s])}function un(n){return n&&"setState"in n?F.findDOMNode(n):n??null}const hn=w.forwardRef(({onEnter:n,onEntering:s,onEntered:a,onExit:o,onExiting:t,onExited:l,addEndListener:c,children:d,childRef:i,...m},f)=>{const r=u.useRef(null),h=dn(r,i),v=x=>{h(un(x))},b=x=>E=>{x&&r.current&&x(r.current,E)},k=u.useCallback(b(n),[n]),y=u.useCallback(b(s),[s]),p=u.useCallback(b(a),[a]),g=u.useCallback(b(o),[o]),C=u.useCallback(b(t),[t]),j=u.useCallback(b(l),[l]),N=u.useCallback(b(c),[c]);return e.jsx(Ze,{ref:f,...m,onEnter:k,onEntered:p,onEntering:y,onExit:g,onExited:j,onExiting:C,addEndListener:N,nodeRef:r,children:typeof d=="function"?(x,E)=>d(x,{...E,ref:v}):w.cloneElement(d,{ref:v})})}),fn=hn,mn={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function pn(n,s){const a=`offset${n[0].toUpperCase()}${n.slice(1)}`,o=s[a],t=mn[n];return o+parseInt(Q(s,t[0]),10)+parseInt(Q(s,t[1]),10)}const xn={[T]:"collapse",[U]:"collapsing",[I]:"collapsing",[M]:"collapse show"},vn=w.forwardRef(({onEnter:n,onEntering:s,onEntered:a,onExit:o,onExiting:t,className:l,children:c,dimension:d="height",in:i=!1,timeout:m=300,mountOnEnter:f=!1,unmountOnExit:r=!1,appear:h=!1,getDimensionValue:v=pn,...b},k)=>{const y=typeof d=="function"?d():d,p=u.useMemo(()=>O(x=>{x.style[y]="0"},n),[y,n]),g=u.useMemo(()=>O(x=>{const E=`scroll${y[0].toUpperCase()}${y.slice(1)}`;x.style[y]=`${x[E]}px`},s),[y,s]),C=u.useMemo(()=>O(x=>{x.style[y]=null},a),[y,a]),j=u.useMemo(()=>O(x=>{x.style[y]=`${v(y,x)}px`,cn(x)},o),[o,v,y]),N=u.useMemo(()=>O(x=>{x.style[y]=null},t),[y,t]);return e.jsx(fn,{ref:k,addEndListener:ln,...b,"aria-expanded":b.role?i:null,onEnter:p,onEntering:g,onEntered:C,onExit:j,onExiting:N,childRef:c.ref,in:i,timeout:m,mountOnEnter:f,unmountOnExit:r,appear:h,children:(x,E)=>w.cloneElement(c,{...E,className:_(l,c.props.className,xn[x],y==="width"&&"collapse-horizontal")})})}),jn=vn;function de(n,s){return Array.isArray(n)?n.includes(s):n===s}const ue=u.createContext({});ue.displayName="AccordionContext";const z=ue,he=u.forwardRef(({as:n="div",bsPrefix:s,className:a,children:o,eventKey:t,...l},c)=>{const{activeEventKey:d}=u.useContext(z);return s=$(s,"accordion-collapse"),e.jsx(jn,{ref:c,in:de(d,t),...l,className:_(a,s),children:e.jsx(n,{children:u.Children.only(o)})})});he.displayName="AccordionCollapse";const fe=he,me=u.createContext({eventKey:""});me.displayName="AccordionItemContext";const V=me,pe=u.forwardRef(({as:n="div",bsPrefix:s,className:a,onEnter:o,onEntering:t,onEntered:l,onExit:c,onExiting:d,onExited:i,...m},f)=>{s=$(s,"accordion-body");const{eventKey:r}=u.useContext(V);return e.jsx(fe,{eventKey:r,onEnter:o,onEntering:t,onEntered:l,onExit:c,onExiting:d,onExited:i,children:e.jsx(n,{ref:f,...m,className:_(a,s)})})});pe.displayName="AccordionBody";const bn=pe;function yn(n,s){const{activeEventKey:a,onSelect:o,alwaysOpen:t}=u.useContext(z);return l=>{let c=n===a?null:n;t&&(Array.isArray(a)?a.includes(n)?c=a.filter(d=>d!==n):c=[...a,n]:c=[n]),o==null||o(c,l),s==null||s(l)}}const xe=u.forwardRef(({as:n="button",bsPrefix:s,className:a,onClick:o,...t},l)=>{s=$(s,"accordion-button");const{eventKey:c}=u.useContext(V),d=yn(c,o),{activeEventKey:i}=u.useContext(z);return n==="button"&&(t.type="button"),e.jsx(n,{ref:l,onClick:d,...t,"aria-expanded":Array.isArray(i)?i.includes(c):c===i,className:_(a,s,!de(i,c)&&"collapsed")})});xe.displayName="AccordionButton";const ve=xe,je=u.forwardRef(({as:n="h2",bsPrefix:s,className:a,children:o,onClick:t,...l},c)=>(s=$(s,"accordion-header"),e.jsx(n,{ref:c,...l,className:_(a,s),children:e.jsx(ve,{onClick:t,children:o})})));je.displayName="AccordionHeader";const Nn=je,be=u.forwardRef(({as:n="div",bsPrefix:s,className:a,eventKey:o,...t},l)=>{s=$(s,"accordion-item");const c=u.useMemo(()=>({eventKey:o}),[o]);return e.jsx(V.Provider,{value:c,children:e.jsx(n,{ref:l,...t,className:_(a,s)})})});be.displayName="AccordionItem";const gn=be,ye=u.forwardRef((n,s)=>{const{as:a="div",activeKey:o,bsPrefix:t,className:l,onSelect:c,flush:d,alwaysOpen:i,...m}=Qe(n,{activeKey:"onSelect"}),f=$(t,"accordion"),r=u.useMemo(()=>({activeEventKey:o,onSelect:c,alwaysOpen:i}),[o,c,i]);return e.jsx(z.Provider,{value:r,children:e.jsx(a,{ref:s,...m,className:_(l,f,d&&`${f}-flush`)})})});ye.displayName="Accordion";const q=Object.assign(ye,{Button:ve,Collapse:fe,Item:gn,Header:Nn,Body:bn});function En({item:n}){var f;const s=A(),{updateItem:a,updateItemQuantity:o,removeItem:t}=D(),l=r=>o(n==null?void 0:n.id,(n==null?void 0:n.quantity)+r),c=()=>t(n==null?void 0:n.id),d=(r,h)=>{if(!(!r||h<(r==null?void 0:r.quantity))){var v=n;h>0?v.extras=v==null?void 0:v.extras.map(b=>(b==null?void 0:b.id)===(r==null?void 0:r.id)?{...b,newQuantity:h}:b):v.extras=v==null?void 0:v.extras.filter(b=>(b==null?void 0:b.id)!==(r==null?void 0:r.id)),a(n==null?void 0:n.id,v)}},i=()=>{s(Ce(n))},m=u.useMemo(()=>n!=null&&n.isTicket?ae(n==null?void 0:n.extras)??0:0,[n]);return e.jsxs("div",{className:"cart-item row w-100",children:[e.jsx("div",{className:"col-md-2 col-3",children:e.jsx("img",{src:te(n==null?void 0:n.event_thumbnail),className:"cart-item-image"})}),e.jsxs("div",{className:"col-md-10 col-9",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsxs("h6",{className:"cart-item-name m-0",children:[e.jsx("small",{children:(n==null?void 0:n.name)||"Product Name"}),e.jsx("br",{})]}),e.jsx("button",{onClick:c,className:"btn btn-danger btn-sm",children:e.jsx("i",{className:"fa fa-trash"})})]}),e.jsxs("p",{className:"cart-item-info",children:[e.jsx("span",{children:(n==null?void 0:n.price)||0})," X ",e.jsx("span",{children:(n==null?void 0:n.quantity)||1})," = ",e.jsx("span",{children:((n==null?void 0:n.quantity)||1)*((n==null?void 0:n.price)||0)})," €"]}),(n==null?void 0:n.isTicket)&&e.jsxs("p",{className:"cart-item-info",children:[e.jsx("span",{children:"Extras"})," = ",e.jsx("span",{children:m})," €"]}),e.jsxs("div",{className:"cart-item-controls mt-2 d-flex justify-content-between",children:[e.jsxs("div",{className:"control-buttons-group",children:[e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>l(-10),children:"-10"}),e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>l(-5),children:"-5"}),e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>l(-1),children:"-"})]}),e.jsx("p",{className:"item-quantity h6 d-flex justify-content-center align-items-center",children:(n==null?void 0:n.quantity)||1}),e.jsxs("div",{className:"control-buttons-group",children:[e.jsx("button",{className:"btn btn-outline-dark btn-sm",onClick:()=>l(1),children:"+"}),e.jsx("button",{className:"btn btn-outline-dark btn-sm",onClick:()=>l(5),children:"+5"}),e.jsx("button",{className:"btn btn-outline-dark btn-sm",onClick:()=>l(10),children:"+10"})]})]}),n!=null&&n.isTicket&&((f=n==null?void 0:n.extras)!=null&&f.length)?e.jsx(q,{className:"py-1 mt-2",children:e.jsxs(q.Item,{eventKey:"0",children:[e.jsx(q.Header,{children:"Extras"}),e.jsxs(q.Body,{children:[n.extras.map((r,h)=>e.jsxs("span",{className:"d-flex justify-content-between align-items-center",children:[r.display_name,e.jsxs("div",{className:"update-quantity d-flex align-items-center justify-content-center",children:[e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>d(r,((r==null?void 0:r.newQuantity)??(r==null?void 0:r.quantity))-1),children:"-"}),e.jsx("input",{type:"number",value:(r==null?void 0:r.newQuantity)??(r==null?void 0:r.quantity)??0,onChange:v=>d(r,v.target.value),className:"form-control text-center mx-2 border-0",style:{width:"40px"}}),e.jsx("button",{className:"btn btn-outline-dark btn-sm",onClick:()=>d(r,((r==null?void 0:r.newQuantity)??(r==null?void 0:r.quantity))+1),children:"+"})]})]},h)),e.jsx("span",{className:"d-flex justify-content-center align-items-center mt-2",children:e.jsx("button",{type:"button",class:"btn btn-info text-light w-100 py-1",onClick:i,children:"Add extra"})})]})]})}):""]})]})}function Cn({open:n,onClose:s}){const{items:a,cartTotal:o,emptyCart:t}=D(),l=()=>{t(),s()},c=A(),d=()=>c(ke()),i=u.useMemo(()=>oe(a),[a]),m=u.useMemo(()=>o+i,[o,i]);return n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cart-modal-backdrop cart-fade-in",onClick:s}),e.jsxs("div",{className:`cart-modal ${n?"cart-fade-in":"cart-fade-out"}`,tabIndex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel","aria-hidden":!n,onClick:f=>f.stopPropagation(),children:[e.jsxs("div",{className:"offcanvas-header",children:[e.jsx("h5",{className:"offcanvas-title",id:"offcanvasExampleLabel",children:"Cart"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close",onClick:s})]}),e.jsxs("div",{className:"offcanvas-body",children:[e.jsx("div",{className:"cart-items",children:a==null?void 0:a.map((f,r)=>e.jsx(En,{item:f},r))}),e.jsxs("div",{className:"footer_body_modal card bg-light",children:[e.jsx("table",{className:"table table-hover table-bordered",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Sub Total:"}),e.jsxs("td",{children:[o," €"]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Extras:"}),e.jsxs("td",{children:[i," €"]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Total:"}),e.jsxs("td",{children:[m," €"]})]})]})}),e.jsxs("div",{className:"d-flex gap-1 justify-content-end",children:[e.jsxs("button",{className:"btn btn-danger",onClick:l,children:[e.jsx("i",{class:"fas fa-redo me-2"}),"Reset"]}),e.jsxs("button",{className:"btn btn-success",onClick:d,children:[e.jsx("i",{class:"fas fa-money-bill-wave me-2"}),"Pay Now"]})]})]})]})]})]}):""}function kn(){var f,r;const n=A(),{data:s}=le(["filter-events"],"/api/events"),a=L(h=>h.filter.event),o=L(h=>h.filter.date),[t,l]=u.useState(a),c=h=>{n(we(h)),n(W("")),l(h),i("")},[d,i]=u.useState(o),m=h=>{n(W(h)),i(h)};return e.jsxs("div",{className:"form-control fixed row my-2 gx-2 shadow-sm left-0 right-0 padding-0 d-flex flex-row align-items-center",tabIndex:"-1",id:"offcanvasBottom","aria-labelledby":"offcanvasBottomLabel",onClick:h=>h.stopPropagation(),children:[e.jsxs("div",{className:"d-flex flex-row align-items-center col-md-6",children:[e.jsx("label",{for:"eventsSelect",children:"Events"}),e.jsx("div",{className:"filter-select-group w-100",children:e.jsx("div",{className:"form-floating row row-cols-1 row-cols-md-1",children:e.jsxs("select",{className:"form-select p-2",style:{fontSize:"0.8rem",height:"fit-content"},id:"eventsSelect","aria-label":"Events",children:[e.jsx("option",{onClick:()=>c(null),children:"None"}),(f=s==null?void 0:s.data)==null?void 0:f.map((h,v)=>e.jsx("option",{onClick:()=>c(h),selected:a===h,children:(h==null?void 0:h.name)??"N/A"},v))]})})})]}),t!==null&&e.jsxs("div",{className:"d-flex flex-row align-items-center col-md-6",children:[e.jsx("label",{for:"eventsSelect",children:"Dates"}),e.jsx("div",{className:`filter-select-group w-100 ${t!==null?"filter-fade-in":"filter-fade-out"}`,children:e.jsx("div",{className:"form-floating row row-cols-1 row-cols-md-1",children:e.jsxs("select",{className:"form-select p-2",style:{fontSize:"0.8rem",height:"fit-content"},id:"eventsSelect","aria-label":"Events",children:[e.jsx("option",{onClick:()=>m(""),children:"All"}),(r=t==null?void 0:t.dates)==null?void 0:r.map((h,v)=>e.jsx("option",{onClick:()=>m(h),selected:o===h,children:Ae(h)??"N/A"},v))]})})})]})]})}function wn(){var y;const n=A(),s=L(p=>p.addExtraModal.item),a=L(p=>p.addExtraModal.open),{updateItem:o}=D(),[t,l]=u.useState(null),[c,d]=u.useState(1),i=p=>{d(g=>p>0?p:g)},m=()=>{n(Y())},f=()=>{if(!(!s||!t)){var p=[...s.extras],g=!0;p=p.map(C=>C.id===t.id?(g=!1,{...C,newQuantity:C.quantity+c}):C),g&&(p=[...p,{...t,newQuantity:c}]),o(s==null?void 0:s.id,{...s,extras:[...p]}),l(null),d(1),n(Y())}},{data:r,isError:h,isLoading:v,isSuccess:b,refetch:k}=le(["extras"],"https://events.essenciacompany.com/api/extras");return u.useEffect(()=>{const p=document.getElementById("addExtraModal");a?(p.classList.add("show","fade-in"),p.style.display="block"):(p.classList.remove("fade-in"),p.classList.add("fade-out"),setTimeout(()=>{p.style.display="none",p.classList.remove("show","fade-out")},300))},[a]),e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"add-extra-modal-backdrop fade-in"}),e.jsx("div",{className:`modal ${a?"fade-in":"fade-out"}`,id:"addExtraModal",tabIndex:"-1","aria-labelledby":"addExtraModalLabel","aria-hidden":!a,onClick:m,children:e.jsx("div",{className:"modal-dialog modal-center modal-lg",onClick:p=>p.stopPropagation(),children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title text-center",id:"addExtraModalLabel",children:["Add Extra to ",(s==null?void 0:s.name)??"Ticket"," ",t&&c>0&&`with an additional ${parseFloat((t==null?void 0:t.price)*c).toFixed(2)}`]}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:m})]}),e.jsx("div",{className:"modal-body row",children:e.jsxs("div",{className:"col-md-12",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"extraSelect",children:"Select Extra"}),e.jsxs("select",{id:"extraSelect",className:"form-control mt-2",value:(t==null?void 0:t.display_name)??"Select an extra",children:[e.jsx("option",{onClick:()=>l(null),children:"None"}),(y=r==null?void 0:r.data)==null?void 0:y.map((p,g)=>e.jsx("option",{onClick:()=>l(p),children:p==null?void 0:p.display_name},g))]})]}),t?e.jsxs("div",{className:"form-group mt-3 d-flex flex-column justify-content-center align-items-center",children:[e.jsx("label",{htmlFor:"quantity",children:"Quantity"}),e.jsxs(De,{className:"mt-3 w-25",children:[e.jsx(Z,{variant:"outline-secondary",onClick:()=>i(c-1),children:"-"}),e.jsx($e.Control,{"aria-label":"Example text with two button addons",className:"text-center",value:c,onChange:p=>i(p.target.value)}),e.jsx(Z,{variant:"outline-danger",onClick:()=>i(c+1),children:"+"})]})]}):""]})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"Close"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:f,disabled:!t||c<1,children:"Add Extra"})]})]})})})]})}function Sn({item:n}){var o;const s=u.useMemo(()=>ae(n==null?void 0:n.extras)??0,n),a=u.useCallback(t=>t!=null&&t.newQuantity&&(t!=null&&t.quantity)?((t==null?void 0:t.newQuantity)-(t==null?void 0:t.quantity))*(t==null?void 0:t.price):t!=null&&t.newQuantity?(t==null?void 0:t.newQuantity)*(t==null?void 0:t.price):0,[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"table-info",children:[e.jsx("td",{children:n==null?void 0:n.name}),e.jsxs("td",{children:[n==null?void 0:n.price," €"]}),e.jsx("td",{children:n==null?void 0:n.quantity}),(n==null?void 0:n.isTicket)&&e.jsxs(e.Fragment,{children:[e.jsxs("td",{children:[n==null?void 0:n.itemTotal," €"]}),e.jsxs("td",{children:[s," €"]})]}),e.jsxs("td",{className:"text-end",colSpan:n!=null&&n.isTicket?1:3,children:[n==null?void 0:n.itemTotal," €"]})]}),(n==null?void 0:n.isTicket)&&((o=n==null?void 0:n.extras)==null?void 0:o.map((t,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:t==null?void 0:t.name}),e.jsxs("td",{children:[t==null?void 0:t.price," €"]}),e.jsxs("td",{children:[(t==null?void 0:t.quantity)??0," ",((t==null?void 0:t.newQuantity)??0)-((t==null?void 0:t.quantity)??0)>0?`+ ${(t==null?void 0:t.newQuantity)-((t==null?void 0:t.quantity)??0)}`:""]}),e.jsxs("td",{colSpan:3,className:"text-end",children:[a(t)," €"]})]},l)))]})}function Tn({discount:n=0}){const{items:s,cartTotal:a}=D(),o=u.useMemo(()=>oe(s),[s]),t=u.useMemo(()=>a+o-n,[a,o,n]);return e.jsxs("div",{className:"h-100 d-flex flex-column justify-content-start",children:[e.jsx("h5",{className:"modal-title text-start mb-2",id:"paymentModalLabel",children:"Cart Information"}),e.jsx("div",{className:"cart-info-items-container",children:e.jsx("div",{className:"card",children:e.jsxs("table",{className:"table mb-0 rounded",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Quantity"}),e.jsx("th",{children:"Subtotal"}),e.jsx("th",{children:"Extras"}),e.jsx("th",{children:"Total"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map((l,c)=>e.jsx(Sn,{item:l},c))})]})})}),e.jsx("div",{className:"card mt-auto",children:e.jsx("table",{className:"table mb-0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Subtotal"}),e.jsxs("td",{children:[a," €"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extras"}),e.jsxs("td",{children:[o," €"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Discount"}),e.jsxs("td",{children:[n," €"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Total"}),e.jsxs("td",{children:[t," €"]})]})]})})})]})}const In=({open:n})=>{const[s,a]=u.useState({name:"",email:"",vatNumber:"",discount:0}),o=j=>{const{name:N,value:x}=j.target;a(E=>({...E,[N]:x}))},[t,l]=u.useState(!0),[c,d]=u.useState(!1),[i,m]=u.useState(!1),[f,r]=u.useState(!1),[h,v]=u.useState(!1);u.useEffect(()=>{const j=document.getElementById("paymentModal");n?(j.classList.add("show","fade-in"),j.style.display="block"):(j.classList.remove("fade-in"),j.classList.add("fade-out"),setTimeout(()=>{j.style.display="none",j.classList.remove("show","fade-out")},300))},[n]);const b=A(),k=()=>b(Se()),{items:y,cartTotal:p,emptyCart:g}=D(),C=async()=>{var x,E;v(!0);const j={biling:s,tickets:y.filter(H=>H.isTicket),extras:y.filter(H=>!H.isTicket),discount:s.discount,subTotal:p,total:p,sendToMail:t,printInvoice:f,sendInvoiceToMail:i},N=await Te.post("https://events.essenciacompany.com/api/create-order",j,{headers:{"Content-Type":"application/json","X-Secret-Key":"pos_password"}});N.status==200&&(a({name:"",email:"",vatNumber:"",discount:0}),f&&((x=N==null?void 0:N.data)!=null&&x.invoice_url)&&(window.open((E=N==null?void 0:N.data)==null?void 0:E.invoice_url,"_blank"),r(!1)),c&&d(!1),l(!0),m(!1),g(""),k()),v(!1)};return e.jsxs(e.Fragment,{children:[n&&e.jsx("div",{className:"payment-modal-backdrop payment-modal-fade-in"}),e.jsx("div",{className:`modal payment-modal ${n?"payment-modal-fade-in":"payment-modal-fade-out"}`,id:"paymentModal",tabIndex:"-1","aria-labelledby":"paymentModalLabel","aria-hidden":!n,onClick:k,children:e.jsx("div",{className:"modal-dialog modal-center modal-lg",onClick:j=>j.stopPropagation(),children:e.jsxs("div",{className:"modal-content p-0",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title text-center",id:"paymentModalLabel",children:"Place Order"}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:k})]}),e.jsxs("div",{className:"modal-body row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"modal-title text-start mb-2",id:"paymentModalLabel",children:"Payment Information"}),e.jsxs("div",{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"nameInput",children:"Name"}),e.jsx("input",{id:"nameInput",name:"name",className:"form-control",value:s.name,onChange:o,placeholder:"Enter name"})]}),e.jsxs("div",{className:"form-group mb-2",children:[e.jsxs("label",{htmlFor:"emailInput",children:["Email"," ",s.vatNumber||t||i?"":"(optional)"]}),e.jsx("input",{id:"emailInput",className:"form-control",name:"email",value:s.email,onChange:o,placeholder:"Enter email"})]}),e.jsxs("div",{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"vatInput",children:"VAT Number (optional)"}),e.jsx("input",{id:"vatInput",className:"form-control",name:"vatNumber",value:s.vatNumber,onChange:o,placeholder:"Enter VAT number"})]}),e.jsxs("div",{className:"form-group mb-4",children:[e.jsx("label",{htmlFor:"discountInput",children:"Discount"}),e.jsx("input",{id:"discountInput",type:"number",className:"form-control",name:"discount",value:s.discount>0?s.discount:"",onChange:o,placeholder:"Enter discount"})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{class:"form-check-label",for:"ticket-check",children:"Ticket"}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:t,checked:t,onChange:()=>l(j=>!j),id:"sendToMailCheck"}),e.jsx("label",{class:"form-check-label",for:"sendToMailCheck",children:"Send to mail"})]}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:c,checked:c,onChange:()=>d(j=>!j),id:"printTicketCheck"}),e.jsx("label",{class:"form-check-label",for:"printTicketCheck",children:"Physical QR Code"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{class:"form-check-label",for:"invoice-check",children:"Invoice"}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:i,checked:i,onChange:()=>m(j=>!j),id:"sendInvoiceToMailCheck"}),e.jsx("label",{class:"form-check-label",for:"sendInvoiceToMailCheck",children:"Send to mail"})]}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:f,checked:f,onChange:()=>r(j=>!j),id:"printInvoiceCheck"}),e.jsx("label",{class:"form-check-label",for:"printInvoiceCheck",children:"Print Invoice"})]})]})]})]}),e.jsx("div",{className:"col-md-6",children:e.jsx(Tn,{discount:s.discount})})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:k,children:"Close"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:C,disabled:!s.name||(s.vatNumber||t||i?!s.email:!1)||h,children:h?"Processing...":"Proceed"})]})]})})})]})};function Dn({children:n}){const[s,a]=u.useState(!1),o=()=>{a(!s)},t=h=>{h.preventDefault(),console.log("Logout clicked")},[l,c]=u.useState(!1),d=()=>{c(!0)},i=()=>c(!1),m=L(h=>h.paymentModal.open),{pathname:f}=Ie(),r=u.useMemo(()=>["tickets","extras"].includes(f.split("/")[2]),[f]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dashboard_header",children:e.jsx("div",{className:"fluid_container",children:e.jsxs("div",{className:"header_row",children:[e.jsx("div",{className:"hamburger_menu",id:"hamburger_menu",onClick:o,children:s?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 329.26933 329",width:"512",height:"512",children:e.jsx("g",{children:e.jsx("path",{d:"m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0",fill:"#000000"})})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"512",height:"512",children:e.jsx("g",{children:e.jsx("path",{clipRule:"evenodd",d:"m3 5c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289h12c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711s-.1054.51957-.2929.70711c-.1875.18753-.4419.29289-.7071.29289h-12c-.26522 0-.51957-.10536-.70711-.29289-.18753-.18754-.29289-.44189-.29289-.70711zm0 5c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289h6c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711 0 .2652-.1054.5196-.2929.7071s-.4419.2929-.7071.2929h-6c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071zm0 5c0-.2652.10536-.5196.29289-.7071.18754-.1875.44189-.2929.70711-.2929h12c.2652 0 .5196.1054.7071.2929s.2929.4419.2929.7071-.1054.5196-.2929.7071-.4419.2929-.7071.2929h-12c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071z",fill:"#000000",fillRule:"evenodd"})})})}),e.jsx("a",{href:"#",className:"logo",children:e.jsx("img",{style:{height:"70px",width:"100px",borderRadius:"10px"},src:Me,alt:"Logo"})})]})})}),e.jsx("div",{className:"dashboard_body",children:e.jsx("div",{className:"fluid_container",children:e.jsxs("div",{className:"dashboard_body_inner",children:[e.jsx("div",{className:`navigation ${s?"open":""}`,id:"navigation",children:e.jsx(Le,{})}),e.jsx("div",{className:"dashboard_content",children:e.jsxs("div",{className:"dashboard_content_inner",style:{marginBottom:"50px"},children:[r&&e.jsx(kn,{}),n,e.jsx(Fe,{onClick:d})]})})]})})}),e.jsx("form",{action:"/logout",method:"post",id:"logout-form",onSubmit:t,children:e.jsx("button",{type:"submit",children:"Logout"})}),e.jsx("div",{className:"menu_overlay",id:"menu_overlay"}),e.jsx(Oe,{}),e.jsx(wn,{}),e.jsx(Cn,{open:l,onClose:i}),e.jsx(In,{open:m})]})}export{Dn as default};
