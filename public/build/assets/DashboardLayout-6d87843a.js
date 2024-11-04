import{u as A,a as L,r as u,j as e,c as _e,b as O,_ as Re,R as S,d as Ae,e as q,o as Fe,f as Pe,g as Oe,h as te,i as ae,k as $e,l as Be,m as qe,n as Qe,s as le}from"./app-29921b67.js";import{L as Ue,N as ze}from"./Essência-logo-88dd4c3c.js";import{v as ue,f as He,a as Ge,c as he,b as fe,d as Xe}from"./utils-8b9f25e8.js";import{c as F,u as $,a as me,I as Ve,B as oe,F as Ke,P as We}from"./PhoneNumberInput-dfe0191e.js";import"./index-e388ca10.js";function Ye(){var t,o,c,r;const n=A(),s=L(d=>d.itemInfoModal.item),a=L(d=>d.itemInfoModal.open),l=()=>{n(_e())};return u.useEffect(()=>{const d=document.getElementById("productDetails");a?(d.classList.add("show","fade-in"),d.style.display="block"):(d.classList.remove("fade-in"),d.classList.add("fade-out"),setTimeout(()=>{d.style.display="none",d.classList.remove("show","fade-out")},300))},[a]),e.jsxs(e.Fragment,{children:[s&&a&&e.jsx("div",{className:"modal-backdrop fade-in"}),e.jsx("div",{className:`modal ${a?"fade-in":"fade-out"}`,id:"productDetails",tabIndex:"-1","aria-labelledby":"productDetailsLabel","aria-hidden":!a,onClick:l,children:e.jsx("div",{className:"modal-dialog modal-center modal-lg",onClick:d=>d.stopPropagation(),children:e.jsxs("div",{className:"modal-content event-details",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title text-center",id:"productDetailsLabel",children:s==null?void 0:s.name}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:l})]}),e.jsxs("div",{className:"modal-body row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("div",{className:"event_img text-center mb-3",children:e.jsx("img",{src:ue(s==null?void 0:s.event_thumbnail),alt:s==null?void 0:s.name,className:"img-fluid"})}),e.jsxs("h4",{className:"events-title text-secondary text-left mb-2",children:[He(s!=null&&s.sale_price?s==null?void 0:s.sale_price:s==null?void 0:s.price),"€"]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"events-title text-left mb-4",children:(t=s==null?void 0:s.event)==null?void 0:t.name}),e.jsxs("div",{className:"accordins",children:[e.jsxs("div",{className:"accordin-item d-flex align-items-start mb-3",children:[e.jsx("div",{className:"me-3",children:e.jsx("i",{className:"fa fa-calendar fa-2x"})}),e.jsxs("div",{children:[e.jsx("h5",{children:"Event time"}),e.jsx("h6",{children:Ge(s==null?void 0:s.start_date,s.end_date)})]})]}),e.jsxs("div",{className:"accordin-item d-flex align-items-start mb-3",children:[e.jsx("div",{className:"me-3",children:e.jsx("i",{class:"fas fa-map-marker-alt fa-2x"})}),e.jsxs("div",{children:[e.jsx("h5",{children:"Event at"}),e.jsx("h6",{children:(o=s==null?void 0:s.event)==null?void 0:o.location})]})]}),e.jsxs("div",{className:"accordin-item d-flex align-items-start mb-3",children:[e.jsx("div",{className:"me-3",children:e.jsx("i",{className:"fa fa-info-circle fa-2x"})}),e.jsxs("div",{children:[e.jsx("h5",{children:"Description"}),e.jsx("h6",{dangerouslySetInnerHTML:{__html:(s==null?void 0:s.description)||""}})]})]}),e.jsxs("div",{className:"accordin-item d-flex align-items-start mb-3",children:[e.jsx("div",{className:"me-3",children:e.jsx("i",{class:"fas fa-cocktail fa-2x"})}),e.jsxs("div",{className:"w-100",children:[e.jsx("h5",{children:(c=s==null?void 0:s.extras)!=null&&c.length?"Extras":"No extras"}),(r=s==null?void 0:s.extras)!=null&&r.length?e.jsx("ul",{className:"list-group",children:s.extras.map((d,m)=>e.jsxs("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[d.display_name,e.jsx("span",{className:"badge badge-primary bg-primary badge-pill",children:d.quantity})]},m))}):""]})]})]})]})]})]})})})]})}function Ze({onClick:n}){const{totalUniqueItems:s}=O();return e.jsx("div",{onClick:n,children:e.jsxs("button",{type:"button",className:"btn btn-dark btn-lg position-fixed",style:{bottom:"20px",right:"20px",zIndex:100},"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample",children:[e.jsx("i",{className:"fa fa-shopping-bag"}),e.jsxs("sup",{children:[" ",s||0]})]})})}function pe(n,s){if(n==null)return{};var a={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(s.includes(l))continue;a[l]=n[l]}return a}function ce(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function Je(n){var s=en(n,"string");return typeof s=="symbol"?s:String(s)}function en(n,s){if(typeof n!="object"||n===null)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var l=a.call(n,s||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}function nn(n,s,a){var l=u.useRef(n!==void 0),t=u.useState(s),o=t[0],c=t[1],r=n!==void 0,d=l.current;return l.current=r,!r&&d&&o!==s&&c(s),[r?n:o,u.useCallback(function(m){for(var f=arguments.length,i=new Array(f>1?f-1:0),h=1;h<f;h++)i[h-1]=arguments[h];a&&a.apply(void 0,[m].concat(i)),c(m)},[a])]}function sn(n,s){return Object.keys(s).reduce(function(a,l){var t,o=a,c=o[ce(l)],r=o[l],d=pe(o,[ce(l),l].map(Je)),m=s[l],f=nn(r,c,n[m]),i=f[0],h=f[1];return Re({},d,(t={},t[l]=i,t[m]=h,t))},n)}function tn(n){return n&&n.ownerDocument||document}function an(n){var s=tn(n);return s&&s.defaultView||window}function ln(n,s){return an(n).getComputedStyle(n,s)}var on=/([A-Z])/g;function cn(n){return n.replace(on,"-$1").toLowerCase()}var rn=/^ms-/;function H(n){return cn(n).replace(rn,"-ms-")}var dn=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function un(n){return!!(n&&dn.test(n))}function X(n,s){var a="",l="";if(typeof s=="string")return n.style.getPropertyValue(H(s))||ln(n).getPropertyValue(H(s));Object.keys(s).forEach(function(t){var o=s[t];!o&&o!==0?n.style.removeProperty(H(t)):un(t)?l+=t+"("+o+") ":a+=H(t)+": "+o+";"}),l&&(a+="transform: "+l+";"),n.style.cssText+=";"+a}const ie={disabled:!1},xe=S.createContext(null);var hn=function(s){return s.scrollTop},Q="unmounted",I="exited",M="entering",R="entered",V="exiting",T=function(n){Ae(s,n);function s(l,t){var o;o=n.call(this,l,t)||this;var c=t,r=c&&!c.isMounting?l.enter:l.appear,d;return o.appearStatus=null,l.in?r?(d=I,o.appearStatus=M):d=R:l.unmountOnExit||l.mountOnEnter?d=Q:d=I,o.state={status:d},o.nextCallback=null,o}s.getDerivedStateFromProps=function(t,o){var c=t.in;return c&&o.status===Q?{status:I}:null};var a=s.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(t){var o=null;if(t!==this.props){var c=this.state.status;this.props.in?c!==M&&c!==R&&(o=M):(c===M||c===R)&&(o=V)}this.updateStatus(!1,o)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var t=this.props.timeout,o,c,r;return o=c=r=t,t!=null&&typeof t!="number"&&(o=t.exit,c=t.enter,r=t.appear!==void 0?t.appear:c),{exit:o,enter:c,appear:r}},a.updateStatus=function(t,o){if(t===void 0&&(t=!1),o!==null)if(this.cancelNextCallback(),o===M){if(this.props.unmountOnExit||this.props.mountOnEnter){var c=this.props.nodeRef?this.props.nodeRef.current:q.findDOMNode(this);c&&hn(c)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===I&&this.setState({status:Q})},a.performEnter=function(t){var o=this,c=this.props.enter,r=this.context?this.context.isMounting:t,d=this.props.nodeRef?[r]:[q.findDOMNode(this),r],m=d[0],f=d[1],i=this.getTimeouts(),h=r?i.appear:i.enter;if(!t&&!c||ie.disabled){this.safeSetState({status:R},function(){o.props.onEntered(m)});return}this.props.onEnter(m,f),this.safeSetState({status:M},function(){o.props.onEntering(m,f),o.onTransitionEnd(h,function(){o.safeSetState({status:R},function(){o.props.onEntered(m,f)})})})},a.performExit=function(){var t=this,o=this.props.exit,c=this.getTimeouts(),r=this.props.nodeRef?void 0:q.findDOMNode(this);if(!o||ie.disabled){this.safeSetState({status:I},function(){t.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:V},function(){t.props.onExiting(r),t.onTransitionEnd(c.exit,function(){t.safeSetState({status:I},function(){t.props.onExited(r)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(t,o){o=this.setNextCallback(o),this.setState(t,o)},a.setNextCallback=function(t){var o=this,c=!0;return this.nextCallback=function(r){c&&(c=!1,o.nextCallback=null,t(r))},this.nextCallback.cancel=function(){c=!1},this.nextCallback},a.onTransitionEnd=function(t,o){this.setNextCallback(o);var c=this.props.nodeRef?this.props.nodeRef.current:q.findDOMNode(this),r=t==null&&!this.props.addEndListener;if(!c||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[c,this.nextCallback],m=d[0],f=d[1];this.props.addEndListener(m,f)}t!=null&&setTimeout(this.nextCallback,t)},a.render=function(){var t=this.state.status;if(t===Q)return null;var o=this.props,c=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var r=pe(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return S.createElement(xe.Provider,{value:null},typeof c=="function"?c(t,r):S.cloneElement(S.Children.only(c),r))},s}(S.Component);T.contextType=xe;T.propTypes={};function P(){}T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:P,onEntering:P,onEntered:P,onExit:P,onExiting:P,onExited:P};T.UNMOUNTED=Q;T.EXITED=I;T.ENTERING=M;T.ENTERED=R;T.EXITING=V;const fn=T,mn=!!(typeof window<"u"&&window.document&&window.document.createElement);var Y=!1,Z=!1;try{var W={get passive(){return Y=!0},get once(){return Z=Y=!0}};mn&&(window.addEventListener("test",W,W),window.removeEventListener("test",W,!0))}catch{}function pn(n,s,a,l){if(l&&typeof l!="boolean"&&!Z){var t=l.once,o=l.capture,c=a;!Z&&t&&(c=a.__once||function r(d){this.removeEventListener(s,r,o),a.call(this,d)},a.__once=c),n.addEventListener(s,c,Y?l:o)}n.addEventListener(s,a,l)}function xn(n,s,a,l){var t=l&&typeof l!="boolean"?l.capture:l;n.removeEventListener(s,a,t),a.__once&&n.removeEventListener(s,a.__once,t)}function ve(n,s,a,l){return pn(n,s,a,l),function(){xn(n,s,a,l)}}function vn(n,s,a,l){if(a===void 0&&(a=!1),l===void 0&&(l=!0),n){var t=document.createEvent("HTMLEvents");t.initEvent(s,a,l),n.dispatchEvent(t)}}function jn(n){var s=X(n,"transitionDuration")||"",a=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*a}function bn(n,s,a){a===void 0&&(a=5);var l=!1,t=setTimeout(function(){l||vn(n,"transitionend",!0)},s+a),o=ve(n,"transitionend",function(){l=!0},{once:!0});return function(){clearTimeout(t),o()}}function yn(n,s,a,l){a==null&&(a=jn(n)||0);var t=bn(n,a,l),o=ve(n,"transitionend",s);return function(){t(),o()}}function re(n,s){const a=X(n,s)||"",l=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*l}function Nn(n,s){const a=re(n,"transitionDuration"),l=re(n,"transitionDelay"),t=yn(n,o=>{o.target===n&&(t(),s(o))},a+l)}function B(...n){return n.filter(s=>s!=null).reduce((s,a)=>{if(typeof a!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return s===null?a:function(...t){s.apply(this,t),a.apply(this,t)}},null)}function gn(n){n.offsetHeight}const de=n=>!n||typeof n=="function"?n:s=>{n.current=s};function Cn(n,s){const a=de(n),l=de(s);return t=>{a&&a(t),l&&l(t)}}function En(n,s){return u.useMemo(()=>Cn(n,s),[n,s])}function kn(n){return n&&"setState"in n?q.findDOMNode(n):n??null}const wn=S.forwardRef(({onEnter:n,onEntering:s,onEntered:a,onExit:l,onExiting:t,onExited:o,addEndListener:c,children:r,childRef:d,...m},f)=>{const i=u.useRef(null),h=En(i,d),x=b=>{h(kn(b))},v=b=>w=>{b&&i.current&&b(i.current,w)},k=u.useCallback(v(n),[n]),y=u.useCallback(v(s),[s]),E=u.useCallback(v(a),[a]),p=u.useCallback(v(l),[l]),g=u.useCallback(v(t),[t]),C=u.useCallback(v(o),[o]),D=u.useCallback(v(c),[c]);return e.jsx(fn,{ref:f,...m,onEnter:k,onEntered:E,onEntering:y,onExit:p,onExited:C,onExiting:g,addEndListener:D,nodeRef:i,children:typeof r=="function"?(b,w)=>r(b,{...w,ref:x}):S.cloneElement(r,{ref:x})})}),Sn=wn,Tn={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function In(n,s){const a=`offset${n[0].toUpperCase()}${n.slice(1)}`,l=s[a],t=Tn[n];return l+parseInt(X(s,t[0]),10)+parseInt(X(s,t[1]),10)}const Mn={[I]:"collapse",[V]:"collapsing",[M]:"collapsing",[R]:"collapse show"},Ln=S.forwardRef(({onEnter:n,onEntering:s,onEntered:a,onExit:l,onExiting:t,className:o,children:c,dimension:r="height",in:d=!1,timeout:m=300,mountOnEnter:f=!1,unmountOnExit:i=!1,appear:h=!1,getDimensionValue:x=In,...v},k)=>{const y=typeof r=="function"?r():r,E=u.useMemo(()=>B(b=>{b.style[y]="0"},n),[y,n]),p=u.useMemo(()=>B(b=>{const w=`scroll${y[0].toUpperCase()}${y.slice(1)}`;b.style[y]=`${b[w]}px`},s),[y,s]),g=u.useMemo(()=>B(b=>{b.style[y]=null},a),[y,a]),C=u.useMemo(()=>B(b=>{b.style[y]=`${x(y,b)}px`,gn(b)},l),[l,x,y]),D=u.useMemo(()=>B(b=>{b.style[y]=null},t),[y,t]);return e.jsx(Sn,{ref:k,addEndListener:Nn,...v,"aria-expanded":v.role?d:null,onEnter:E,onEntering:p,onEntered:g,onExit:C,onExiting:D,childRef:c.ref,in:d,timeout:m,mountOnEnter:f,unmountOnExit:i,appear:h,children:(b,w)=>S.cloneElement(c,{...w,className:F(o,c.props.className,Mn[b],y==="width"&&"collapse-horizontal")})})}),Dn=Ln;function je(n,s){return Array.isArray(n)?n.includes(s):n===s}const be=u.createContext({});be.displayName="AccordionContext";const K=be,ye=u.forwardRef(({as:n="div",bsPrefix:s,className:a,children:l,eventKey:t,...o},c)=>{const{activeEventKey:r}=u.useContext(K);return s=$(s,"accordion-collapse"),e.jsx(Dn,{ref:c,in:je(r,t),...o,className:F(a,s),children:e.jsx(n,{children:u.Children.only(l)})})});ye.displayName="AccordionCollapse";const Ne=ye,ge=u.createContext({eventKey:""});ge.displayName="AccordionItemContext";const J=ge,Ce=u.forwardRef(({as:n="div",bsPrefix:s,className:a,onEnter:l,onEntering:t,onEntered:o,onExit:c,onExiting:r,onExited:d,...m},f)=>{s=$(s,"accordion-body");const{eventKey:i}=u.useContext(J);return e.jsx(Ne,{eventKey:i,onEnter:l,onEntering:t,onEntered:o,onExit:c,onExiting:r,onExited:d,children:e.jsx(n,{ref:f,...m,className:F(a,s)})})});Ce.displayName="AccordionBody";const _n=Ce;function Rn(n,s){const{activeEventKey:a,onSelect:l,alwaysOpen:t}=u.useContext(K);return o=>{let c=n===a?null:n;t&&(Array.isArray(a)?a.includes(n)?c=a.filter(r=>r!==n):c=[...a,n]:c=[n]),l==null||l(c,o),s==null||s(o)}}const Ee=u.forwardRef(({as:n="button",bsPrefix:s,className:a,onClick:l,...t},o)=>{s=$(s,"accordion-button");const{eventKey:c}=u.useContext(J),r=Rn(c,l),{activeEventKey:d}=u.useContext(K);return n==="button"&&(t.type="button"),e.jsx(n,{ref:o,onClick:r,...t,"aria-expanded":Array.isArray(d)?d.includes(c):c===d,className:F(a,s,!je(d,c)&&"collapsed")})});Ee.displayName="AccordionButton";const ke=Ee,we=u.forwardRef(({as:n="h2",bsPrefix:s,className:a,children:l,onClick:t,...o},c)=>(s=$(s,"accordion-header"),e.jsx(n,{ref:c,...o,className:F(a,s),children:e.jsx(ke,{onClick:t,children:l})})));we.displayName="AccordionHeader";const An=we,Se=u.forwardRef(({as:n="div",bsPrefix:s,className:a,eventKey:l,...t},o)=>{s=$(s,"accordion-item");const c=u.useMemo(()=>({eventKey:l}),[l]);return e.jsx(J.Provider,{value:c,children:e.jsx(n,{ref:o,...t,className:F(a,s)})})});Se.displayName="AccordionItem";const Fn=Se,Te=u.forwardRef((n,s)=>{const{as:a="div",activeKey:l,bsPrefix:t,className:o,onSelect:c,flush:r,alwaysOpen:d,...m}=sn(n,{activeKey:"onSelect"}),f=$(t,"accordion"),i=u.useMemo(()=>({activeEventKey:l,onSelect:c,alwaysOpen:d}),[l,c,d]);return e.jsx(K.Provider,{value:i,children:e.jsx(a,{ref:s,...m,className:F(o,f,r&&`${f}-flush`)})})});Te.displayName="Accordion";const G=Object.assign(Te,{Button:ke,Collapse:Ne,Item:Fn,Header:An,Body:_n});function Pn({item:n}){var f;const s=A(),{updateItem:a,updateItemQuantity:l,removeItem:t}=O(),o=i=>l(n==null?void 0:n.id,(n==null?void 0:n.quantity)+i),c=()=>t(n==null?void 0:n.id),r=(i,h)=>{if(!(!i||h<(i==null?void 0:i.quantity))){var x=n;h>0?x.extras=x==null?void 0:x.extras.map(v=>(v==null?void 0:v.id)===(i==null?void 0:i.id)?{...v,newQuantity:h}:v):x.extras=x==null?void 0:x.extras.filter(v=>(v==null?void 0:v.id)!==(i==null?void 0:i.id)),a(n==null?void 0:n.id,x)}},d=()=>{s(Fe(n))},m=u.useMemo(()=>n!=null&&n.isTicket?he(n==null?void 0:n.extras)??0:0,[n]);return e.jsxs("div",{className:"cart-item row w-100",children:[e.jsx("div",{className:"col-md-2 col-3",children:e.jsx("img",{src:ue(n==null?void 0:n.event_thumbnail),className:"cart-item-image"})}),e.jsxs("div",{className:"col-md-10 col-9",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsxs("h6",{className:"cart-item-name m-0",children:[e.jsx("small",{children:(n==null?void 0:n.name)||"Product Name"}),e.jsx("br",{})]}),e.jsx("button",{onClick:c,className:"btn btn-danger btn-sm",children:e.jsx("i",{className:"fa fa-trash"})})]}),e.jsxs("p",{className:"cart-item-info",children:[e.jsx("span",{children:(n==null?void 0:n.price)||0})," X ",e.jsx("span",{children:(n==null?void 0:n.quantity)||1})," = ",e.jsx("span",{children:((n==null?void 0:n.quantity)||1)*((n==null?void 0:n.price)||0)})," €"]}),(n==null?void 0:n.isTicket)&&e.jsxs("p",{className:"cart-item-info",children:[e.jsx("span",{children:"Extras"})," = ",e.jsx("span",{children:m})," €"]}),e.jsxs("div",{className:"cart-item-controls mt-2 d-flex justify-content-between",children:[e.jsxs("div",{className:"control-buttons-group",children:[e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>o(-10),children:"-10"}),e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>o(-5),children:"-5"}),e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>o(-1),children:"-"})]}),e.jsx("p",{className:"item-quantity h6 d-flex justify-content-center align-items-center",children:(n==null?void 0:n.quantity)||1}),e.jsxs("div",{className:"control-buttons-group",children:[e.jsx("button",{className:"btn btn-outline-dark btn-sm",onClick:()=>o(1),children:"+"}),e.jsx("button",{className:"btn btn-outline-dark btn-sm",onClick:()=>o(5),children:"+5"}),e.jsx("button",{className:"btn btn-outline-dark btn-sm",onClick:()=>o(10),children:"+10"})]})]}),n!=null&&n.isTicket&&((f=n==null?void 0:n.extras)!=null&&f.length)?e.jsx(G,{className:"py-1 mt-2",children:e.jsxs(G.Item,{eventKey:"0",children:[e.jsx(G.Header,{children:"Extras"}),e.jsxs(G.Body,{children:[n.extras.map((i,h)=>e.jsxs("span",{className:"d-flex justify-content-between align-items-center",children:[i.display_name,e.jsxs("div",{className:"update-quantity d-flex align-items-center justify-content-center",children:[e.jsx("button",{className:"btn btn-outline-danger btn-sm",onClick:()=>r(i,((i==null?void 0:i.newQuantity)??(i==null?void 0:i.quantity))-1),children:"-"}),e.jsx("input",{type:"number",value:(i==null?void 0:i.newQuantity)??(i==null?void 0:i.quantity)??0,onChange:x=>r(i,x.target.value),className:"form-control text-center mx-2 border-0",style:{width:"40px"}}),e.jsx("button",{className:"btn btn-outline-dark btn-sm",onClick:()=>r(i,((i==null?void 0:i.newQuantity)??(i==null?void 0:i.quantity))+1),children:"+"})]})]},h)),e.jsx("span",{className:"d-flex justify-content-center align-items-center mt-2",children:e.jsx("button",{type:"button",class:"btn btn-info text-light w-100 py-1",onClick:d,children:"Add extra"})})]})]})}):""]})]})}function On({open:n,onClose:s}){const{items:a,cartTotal:l,emptyCart:t}=O(),o=()=>{t(),s()},c=A(),r=()=>c(Pe()),d=u.useMemo(()=>fe(a),[a]),m=u.useMemo(()=>l+d,[l,d]);return n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cart-modal-backdrop cart-fade-in",onClick:s}),e.jsxs("div",{className:`cart-modal ${n?"cart-fade-in":"cart-fade-out"}`,tabIndex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel","aria-hidden":!n,onClick:f=>f.stopPropagation(),children:[e.jsxs("div",{className:"offcanvas-header",children:[e.jsx("h5",{className:"offcanvas-title",id:"offcanvasExampleLabel",children:"Cart"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close",onClick:s})]}),e.jsxs("div",{className:"offcanvas-body",children:[e.jsx("div",{className:"cart-items",children:a==null?void 0:a.map((f,i)=>e.jsx(Pn,{item:f},i))}),e.jsxs("div",{className:"footer_body_modal card bg-light",children:[e.jsx("table",{className:"table table-hover table-bordered",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Sub Total:"}),e.jsxs("td",{children:[l," €"]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Extras:"}),e.jsxs("td",{children:[d," €"]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Total:"}),e.jsxs("td",{children:[m," €"]})]})]})}),e.jsxs("div",{className:"d-flex gap-1 justify-content-end",children:[e.jsxs("button",{className:"btn btn-danger",onClick:o,children:[e.jsx("i",{class:"fas fa-redo me-2"}),"Reset"]}),e.jsxs("button",{className:"btn btn-success",onClick:r,children:[e.jsx("i",{class:"fas fa-money-bill-wave me-2"}),"Pay Now"]})]})]})]})]})]}):""}function $n(){var f,i;const n=A(),{data:s}=me(["filter-events"],"/api/events"),a=L(h=>h.filter.event),l=L(h=>h.filter.date),[t,o]=u.useState(a),[c,r]=u.useState(l),d=h=>{var v;const x=(v=s==null?void 0:s.data)==null?void 0:v.find(k=>k.id===parseInt(h.target.value,10));n(Oe(x)),n(te("")),o(x),r("")},m=h=>{const x=h.target.value;n(te(x)),r(x)};return e.jsxs("div",{className:"form-control fixed row my-2 gx-2 shadow-sm left-0 right-0 padding-0 d-flex flex-row align-items-center",tabIndex:"-1",id:"offcanvasBottom","aria-labelledby":"offcanvasBottomLabel",onClick:h=>h.stopPropagation(),children:[e.jsxs("div",{className:"d-flex flex-row align-items-center col-md-6",children:[e.jsx("label",{htmlFor:"eventsSelect",children:"Events"}),e.jsx("div",{className:"filter-select-group w-100",children:e.jsx("div",{className:"form-floating row row-cols-1 row-cols-md-1",children:e.jsxs("select",{className:"form-select p-2",style:{fontSize:"0.8rem",height:"fit-content"},id:"eventsSelect","aria-label":"Events",value:(t==null?void 0:t.id)||"",onChange:d,children:[e.jsx("option",{value:"",children:"None"}),(f=s==null?void 0:s.data)==null?void 0:f.map(h=>e.jsx("option",{value:h.id,children:(h==null?void 0:h.name)??"N/A"},h.id))]})})})]}),t&&e.jsxs("div",{className:"d-flex flex-row align-items-center col-md-6",children:[e.jsx("label",{htmlFor:"datesSelect",children:"Dates"}),e.jsx("div",{className:"filter-select-group w-100 filter-fade-in",children:e.jsx("div",{className:"form-floating row row-cols-1 row-cols-md-1",children:e.jsxs("select",{className:"form-select p-2",style:{fontSize:"0.8rem",height:"fit-content"},id:"datesSelect","aria-label":"Dates",value:c||"",onChange:m,children:[e.jsx("option",{value:"",children:"All"}),(i=t==null?void 0:t.dates)==null?void 0:i.map((h,x)=>e.jsx("option",{value:h,children:Xe(h)??"N/A"},x))]})})})]})]})}function Bn(){var E;const n=A(),s=L(p=>p.addExtraModal.item),a=L(p=>p.addExtraModal.open),{updateItem:l}=O(),[t,o]=u.useState(null),[c,r]=u.useState(1),d=p=>{r(g=>p>0?p:g)},m=()=>{n(ae())},f=()=>{if(!(!s||!t)){var p=[...s.extras],g=!0;p=p.map(C=>C.id===t.id?(g=!1,{...C,newQuantity:C.quantity+c}):C),g&&(p=[...p,{...t,newQuantity:c}]),l(s==null?void 0:s.id,{...s,extras:[...p]}),o(null),r(1),n(ae())}},{data:i,isError:h,isLoading:x,isSuccess:v,refetch:k}=me(["extras"],"https://events.essenciacompany.com/api/extras");u.useEffect(()=>{const p=document.getElementById("addExtraModal");a?(p.classList.add("show","fade-in"),p.style.display="block"):(p.classList.remove("fade-in"),p.classList.add("fade-out"),setTimeout(()=>{p.style.display="none",p.classList.remove("show","fade-out")},300))},[a]);const y=p=>{var C;const g=(C=i==null?void 0:i.data)==null?void 0:C.find(D=>D.id===parseInt(p.target.value,10));o(g)};return e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{className:"add-extra-modal-backdrop fade-in"}),e.jsx("div",{className:`modal ${a?"fade-in":"fade-out"}`,id:"addExtraModal",tabIndex:"-1","aria-labelledby":"addExtraModalLabel","aria-hidden":!a,onClick:m,children:e.jsx("div",{className:"modal-dialog modal-center modal-lg",onClick:p=>p.stopPropagation(),children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title text-center",id:"addExtraModalLabel",children:["Add Extra to ",(s==null?void 0:s.name)??"Ticket"," ",t&&c>0&&`with an additional ${parseFloat((t==null?void 0:t.price)*c).toFixed(2)}`]}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:m})]}),e.jsx("div",{className:"modal-body row",children:e.jsxs("div",{className:"col-md-12",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"extraSelect",children:"Select Extra"}),e.jsxs("select",{id:"extraSelect",className:"form-control mt-2",value:(t==null?void 0:t.display_name)??"Select an extra",onChange:y,children:[e.jsx("option",{value:null,children:"None"}),(E=i==null?void 0:i.data)==null?void 0:E.map((p,g)=>e.jsx("option",{value:p==null?void 0:p.id,children:p==null?void 0:p.display_name},g))]})]}),t?e.jsxs("div",{className:"form-group mt-3 d-flex flex-column justify-content-center align-items-center",children:[e.jsx("label",{htmlFor:"quantity",children:"Quantity"}),e.jsxs(Ve,{className:"mt-3 w-25",children:[e.jsx(oe,{variant:"outline-secondary",onClick:()=>d(c-1),children:"-"}),e.jsx(Ke.Control,{"aria-label":"Example text with two button addons",className:"text-center",value:c,onChange:p=>d(p.target.value)}),e.jsx(oe,{variant:"outline-danger",onClick:()=>d(c+1),children:"+"})]})]}):""]})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"Close"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:f,disabled:!t||c<1,children:"Add Extra"})]})]})})})]})}function qn({item:n}){var l;const s=u.useMemo(()=>he(n==null?void 0:n.extras)??0,n),a=u.useCallback(t=>t!=null&&t.newQuantity&&(t!=null&&t.quantity)?((t==null?void 0:t.newQuantity)-(t==null?void 0:t.quantity))*(t==null?void 0:t.price):t!=null&&t.newQuantity?(t==null?void 0:t.newQuantity)*(t==null?void 0:t.price):0,[n]);return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"table-info",children:[e.jsx("td",{children:n==null?void 0:n.name}),e.jsxs("td",{children:[n==null?void 0:n.price," €"]}),e.jsx("td",{children:n==null?void 0:n.quantity}),(n==null?void 0:n.isTicket)&&e.jsxs(e.Fragment,{children:[e.jsxs("td",{children:[n==null?void 0:n.itemTotal," €"]}),e.jsxs("td",{children:[s," €"]})]}),e.jsxs("td",{className:"text-end",colSpan:n!=null&&n.isTicket?1:3,children:[n==null?void 0:n.itemTotal," €"]})]}),(n==null?void 0:n.isTicket)&&((l=n==null?void 0:n.extras)==null?void 0:l.map((t,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:t==null?void 0:t.display_name}),e.jsxs("td",{children:[t==null?void 0:t.price," €"]}),e.jsxs("td",{children:[(t==null?void 0:t.quantity)??0," ",((t==null?void 0:t.newQuantity)??0)-((t==null?void 0:t.quantity)??0)>0?`+ ${(t==null?void 0:t.newQuantity)-((t==null?void 0:t.quantity)??0)}`:""]}),e.jsxs("td",{colSpan:3,className:"text-end",children:[a(t)," €"]})]},o)))]})}function Qn({discount:n=0}){const{items:s,cartTotal:a}=O(),l=u.useMemo(()=>fe(s),[s]),t=u.useMemo(()=>a+l-n,[a,l,n]);return e.jsxs("div",{className:"h-100 d-flex flex-column justify-content-start",children:[e.jsx("h5",{className:"modal-title text-start mb-2",id:"paymentModalLabel",children:"Cart Information"}),e.jsx("div",{className:"cart-info-items-container",children:e.jsx("div",{className:"card",children:e.jsxs("table",{className:"table mb-0 rounded",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Quantity"}),e.jsx("th",{children:"Subtotal"}),e.jsx("th",{children:"Extras"}),e.jsx("th",{children:"Total"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map((o,c)=>e.jsx(qn,{item:o},c))})]})})}),e.jsx("div",{className:"card mt-auto",children:e.jsx("table",{className:"table mb-0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Subtotal"}),e.jsxs("td",{children:[a," €"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extras"}),e.jsxs("td",{children:[l," €"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Discount"}),e.jsxs("td",{children:[n," €"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Total"}),e.jsxs("td",{children:[t," €"]})]})]})})})]})}const Un=({open:n})=>{const[s,a]=u.useState({name:"",email:"",vatNumber:"",discount:0,paymentMethod:"Cash"}),l=j=>{const{name:N,value:U}=j.target;a(z=>({...z,[N]:U}))},[t,o]=u.useState(!0),[c,r]=u.useState(!1),[d,m]=u.useState(!1),[f,i]=u.useState(!1),[h,x]=u.useState(!1),[v,k]=u.useState(!1);u.useEffect(()=>{const j=document.getElementById("paymentModal");n?(j.classList.add("show","fade-in"),j.style.display="block"):(j.classList.remove("fade-in"),j.classList.add("fade-out"),setTimeout(()=>{j.style.display="none",j.classList.remove("show","fade-out")},300))},[n]);const y=A(),E=()=>y(Be()),{items:p,cartTotal:g,emptyCart:C}=O(),D=$e(),b=async()=>{var U,z,ee,ne,se;k(!0);const j={biling:s,tickets:p.filter(_=>_.isTicket),extras:p.filter(_=>!_.isTicket),discount:s.discount,paymentMethod:s.paymentMethod,subTotal:g,total:g,sendToMail:c,sendToPhone:t,physicalQr:d,printInvoice:h,sendInvoiceToMail:f},N=await qe.post("https://events.essenciacompany.com/api/create-order",j,{headers:{"Content-Type":"application/json","X-Secret-Key":"pos_password"}});N.status==200&&(a({name:"",email:"",phone:"",vatNumber:"",discount:0,paymentMethod:"Cash"}),h&&((U=N==null?void 0:N.data)!=null&&U.invoice_url)&&(window.open((z=N==null?void 0:N.data)==null?void 0:z.invoice_url,"_blank"),x(!1)),d&&(D(`/pos/physical-qr?tickets=${(se=(ne=(ee=N==null?void 0:N.data)==null?void 0:ee.tickets)==null?void 0:ne.map(_=>_==null?void 0:_.id))==null?void 0:se.join(",")}`),m(!1)),r(!0),o(!1),i(!1),C(""),E()),k(!1)},w=()=>{r(j=>j?!1:(m(!1),!0))},Ie=()=>{o(j=>j?!1:(m(!1),!0))},Me=()=>{m(j=>j?!1:(r(!1),!0))},Le=()=>{i(j=>j?!1:(x(!1),!0))},De=()=>{x(j=>j?!1:(i(!1),!0))};return e.jsxs(e.Fragment,{children:[n&&e.jsx("div",{className:"payment-modal-backdrop payment-modal-fade-in"}),e.jsx("div",{className:`modal payment-modal ${n?"payment-modal-fade-in":"payment-modal-fade-out"}`,id:"paymentModal",tabIndex:"-1","aria-labelledby":"paymentModalLabel","aria-hidden":!n,onClick:E,children:e.jsx("div",{className:"modal-dialog modal-center modal-lg",onClick:j=>j.stopPropagation(),children:e.jsxs("div",{className:"modal-content p-0",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title text-center",id:"paymentModalLabel",children:"Place Order"}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:E})]}),e.jsxs("div",{className:"modal-body row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"modal-title text-start mb-2",id:"paymentModalLabel",children:"Payment Information"}),e.jsxs("div",{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"nameInput",children:"Name"}),e.jsx("input",{id:"nameInput",name:"name",className:"form-control",value:s.name,onChange:l,placeholder:"Enter name"})]}),e.jsxs("div",{className:"form-group mb-2",children:[e.jsxs("label",{htmlFor:"emailInput",children:["Email"," ",s.vatNumber||c||f?"":"(optional)"]}),e.jsx("input",{id:"emailInput",className:"form-control",name:"email",value:s.email,onChange:l,placeholder:"Enter email"})]}),t?e.jsx(We,{value:s.phone,onChange:j=>a(N=>({...N,phone:"+"+j}))}):"",e.jsxs("div",{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"vatInput",children:"VAT Number (optional)"}),e.jsx("input",{id:"vatInput",className:"form-control",name:"vatNumber",value:s.vatNumber,onChange:l,placeholder:"Enter VAT number"})]}),e.jsxs("div",{className:"form-group row mb-4",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{htmlFor:"discountInput",children:"Payment Method"}),e.jsxs("select",{class:"form-select","aria-label":"Default select example",onChange:j=>a(N=>({...N,paymentMethod:j.target.value})),children:[e.jsx("option",{value:"Cash",selected:!0,children:"Cash"}),e.jsx("option",{value:"Card",children:"Card"})]})]}),e.jsxs("div",{className:"col-md-8",children:[e.jsx("label",{htmlFor:"discountInput",children:"Discount"}),e.jsx("input",{id:"discountInput",type:"number",className:"form-control",name:"discount",value:s.discount>0?s.discount:"",onChange:l,placeholder:"Enter discount"})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{class:"form-check-label",htmlFor:"ticket-check",children:"Ticket"}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:t,checked:t,onChange:Ie,id:"sendToPhoneCheck"}),e.jsx("label",{class:"form-check-label",htmlFor:"sendToPhoneCheck",children:"Send to phone"})]}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:c,checked:c,onChange:w,id:"sendToMailCheck"}),e.jsx("label",{class:"form-check-label",htmlFor:"sendToMailCheck",children:"Send to mail"})]}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:d,checked:d,onChange:Me,id:"printTicketCheck"}),e.jsx("label",{class:"form-check-label",htmlFor:"printTicketCheck",children:"Physical QR Code"})]})]}),d&&e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{class:"form-check-label",htmlFor:"invoice-check",children:"Invoice"}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:f,checked:f,onChange:Le,id:"sendInvoiceToMailCheck"}),e.jsx("label",{class:"form-check-label",htmlFor:"sendInvoiceToMailCheck",children:"Send to mail"})]}),e.jsxs("div",{class:"form-check",children:[e.jsx("input",{class:"form-check-input",type:"checkbox",value:h,checked:h,onChange:De,id:"printInvoiceCheck"}),e.jsx("label",{class:"form-check-label",htmlFor:"printInvoiceCheck",children:"Print Invoice"})]})]})]})]}),e.jsx("div",{className:"col-md-6",children:e.jsx(Qn,{discount:s.discount})})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:E,children:"Close"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:b,disabled:!s.name||(s.vatNumber||c||t||f?!(s.email||s.phone):!1)||v,children:v?"Processing...":"Proceed"})]})]})})})]})};function Kn({children:n}){const[s,a]=u.useState(!1),l=()=>{a(!s)},t=x=>{x.preventDefault(),console.log("Logout clicked")},o=A(),c=L(x=>x.paymentModal.cartOpen),r=()=>{o(le(!0))},d=()=>o(le(!1)),m=L(x=>x.paymentModal.open),{pathname:f}=Qe(),i=u.useMemo(()=>["tickets","extras"].includes(f.split("/")[2]),[f]),h=u.useMemo(()=>["tickets","extras"].includes(f.split("/")[2]),[f]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dashboard_header",children:e.jsx("div",{className:"fluid_container",children:e.jsxs("div",{className:"header_row",children:[e.jsx("div",{className:"hamburger_menu",id:"hamburger_menu",onClick:l,children:s?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 329.26933 329",width:"512",height:"512",children:e.jsx("g",{children:e.jsx("path",{d:"m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0",fill:"#000000"})})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"512",height:"512",children:e.jsx("g",{children:e.jsx("path",{clipRule:"evenodd",d:"m3 5c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289h12c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711s-.1054.51957-.2929.70711c-.1875.18753-.4419.29289-.7071.29289h-12c-.26522 0-.51957-.10536-.70711-.29289-.18753-.18754-.29289-.44189-.29289-.70711zm0 5c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289h6c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711 0 .2652-.1054.5196-.2929.7071s-.4419.2929-.7071.2929h-6c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071zm0 5c0-.2652.10536-.5196.29289-.7071.18754-.1875.44189-.2929.70711-.2929h12c.2652 0 .5196.1054.7071.2929s.2929.4419.2929.7071-.1054.5196-.2929.7071-.4419.2929-.7071.2929h-12c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071z",fill:"#000000",fillRule:"evenodd"})})})}),e.jsx("a",{href:"#",className:"logo",children:e.jsx("img",{style:{height:"70px",width:"100px",borderRadius:"10px"},src:Ue,alt:"Logo"})})]})})}),e.jsx("div",{className:"dashboard_body",children:e.jsx("div",{className:"fluid_container",children:e.jsxs("div",{className:"dashboard_body_inner",children:[e.jsx("div",{className:`navigation ${s?"open":""}`,id:"navigation",children:e.jsx(ze,{})}),e.jsx("div",{className:"dashboard_content",children:e.jsxs("div",{className:"dashboard_content_inner",style:{marginBottom:"50px"},children:[i&&e.jsx($n,{}),n,h&&e.jsx(Ze,{onClick:r})]})})]})})}),e.jsx("form",{action:"/logout",method:"post",id:"logout-form",onSubmit:t,children:e.jsx("button",{type:"submit",children:"Logout"})}),e.jsx("div",{className:"menu_overlay",id:"menu_overlay"}),e.jsx(Ye,{}),e.jsx(Bn,{}),e.jsx(On,{open:c,onClose:d}),e.jsx(Un,{open:m})]})}export{Kn as default};