import{u as f,b as j,j as s,p as N,a as g,r as t,H as b}from"./app-051f1273.js";import{u as y,I as w,P as I}from"./useInfiniteFetch-ffec1a76.js";import{f as P,v as _,a as C}from"./utils-8b9f25e8.js";import"./index-c5c1a911.js";const E=({ticket:e})=>{var o,d,r,i,n;const a=f(),c=h=>{h.stopPropagation(),a(N(e))},{addItem:l,removeItem:x,inCart:p}=j(),m=p(e==null?void 0:e.id);return s.jsx("div",{className:`ticket-item-container col-lg-2 col-md-3 col-sm-3 col-6 my-hover-effect g-3 ${m?"active":""}`,onClick:()=>l({...e,isTicket:!0}),children:s.jsxs("div",{className:"ticket-item-card",children:[m?s.jsx("button",{className:"delete-btn",onClick:()=>{x(e.id)},children:s.jsx("i",{className:"fa fa-times"})}):"",s.jsxs("div",{className:"custom-card",children:[s.jsx("span",{className:"ticket-item-badge",children:P(e!=null&&e.sale_price?e==null?void 0:e.sale_price:e==null?void 0:e.price)}),s.jsxs("div",{className:"card-header position-relative",children:[s.jsx("img",{className:"ticket-item-img",src:_(e==null?void 0:e.event_thumbnail)}),((o=e==null?void 0:e.event)==null?void 0:o.name)&&s.jsx("span",{className:"ticket-item-unit",children:((d=e==null?void 0:e.event)==null?void 0:d.name.length)>15?`${e.event.name.substring(0,15)}...`:(r=e==null?void 0:e.event)==null?void 0:r.name})]}),s.jsxs("div",{className:"card-body ticket-item-body",children:[s.jsx("p",{title:e.name,className:"ticket-item-name",children:(e==null?void 0:e.name.length)>15?`${e.name.substring(0,15)}...`:e.name}),s.jsx("small",{className:"ticket-item-generic",children:((n=(i=e==null?void 0:e.event)==null?void 0:i.organizer)==null?void 0:n.length)>25?`${e.event.organizer.substring(0,25)}...`:e==null?void 0:e.event.organizer}),(e==null?void 0:e.start_date)&&(e==null?void 0:e.end_date)&&s.jsxs("small",{children:["(",C(e.start_date,e.end_date),")"]}),s.jsx("button",{onClick:c,className:"btn btn-primary btn-sm position-absolute rounded-circle ticket-item-info-btn",children:s.jsx("i",{className:"fa fa-info"})})]})]})]})})};function L(){var i;const e=g(n=>n.searchQuery.query),a=g(n=>n.filter.event),c=g(n=>n.filter.date),{data:l,isError:x,isLoading:p,isFetching:m,hasNextPage:o,fetchNextPage:d}=y(["tickets",e,a,c],"https://events.essenciacompany.com/api/tickets",{query:e,event_id:a==null?void 0:a.id,eventDate:c}),r=t.useCallback(()=>{const n=document.documentElement.scrollTop;n<500&&n===0&&o&&!m&&d()},[d,o,m]);return t.useEffect(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[r]),s.jsx("div",{className:"overflow-y-scroll overflow-x-none pt-3",children:a?p?s.jsx("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(b,{color:"#36d7b7"})}):s.jsx(w,{loadMore:d,hasMore:o,loader:s.jsx("div",{style:{textAlign:"center",paddingTop:"25px"},children:s.jsx(I,{color:"#36d7b7"})}),useWindow:!1,style:{overflowY:"scroll",overflowX:"hidden",maxHeight:"90vh",padding:"20px 10px"},onScroll:r,children:s.jsx("div",{className:"row g-3",children:x?s.jsx("div",{style:{textAlign:"center",color:"red"},children:"Something went wrong"}):(i=l==null?void 0:l.pages)!=null&&i.length?l.pages.map((n,h)=>s.jsx(t.Fragment,{children:n.data.map((v,u)=>s.jsx(E,{ticket:v},u))},h)):s.jsx("div",{style:{textAlign:"center"},children:"No matching products found."})})}):s.jsx("h4",{className:"text-info text-center",children:"Please Select An Event"})})}export{L as default};
