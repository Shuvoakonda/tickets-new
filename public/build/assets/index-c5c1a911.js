import{d as $,_ as U,A as K,B as x,C as _,D as V,E as q,F as w,G as k,I as z,J as G,K as g,S as H,R as b,y as J,z as Y}from"./app-051f1273.js";var ce=function(n){$(u,n);function u(i,t){var e;return e=n.call(this)||this,e.client=i,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var s=u.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),A(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return Q(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return Q(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(t,e){var a=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var c=this.hasListeners();c&&L(this.currentQuery,r,this.options,a)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==r||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var o=this.computeRefetchInterval();c&&(this.currentQuery!==r||this.options.enabled!==a.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)},s.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),a=this.client.getQueryCache().build(this.client,e);return this.createResult(a,e)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(t,e){var a=this,r={},c=function(h){a.trackedProps.includes(h)||a.trackedProps.push(h)};return Object.keys(t).forEach(function(o){Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:function(){return c(o),t[o]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),r},s.getNextResult=function(t){var e=this;return new Promise(function(a,r){var c=e.subscribe(function(o){o.isFetching||(c(),o.isError&&(t!=null&&t.throwOnError)?r(o.error):a(o))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(t){return this.fetch(U({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},s.fetchOptimistic=function(t){var e=this,a=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,a);return r.fetch().then(function(){return e.createResult(r,a)})},s.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},s.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(K)),e},s.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(x||this.currentResult.isStale||!_(this.options.staleTime))){var e=V(this.currentResult.dataUpdatedAt,this.options.staleTime),a=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},a)}},s.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},s.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(x||this.options.enabled===!1||!_(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||q.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},s.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},s.createResult=function(t,e){var a=this.currentQuery,r=this.options,c=this.currentResult,o=this.currentResultState,h=this.currentResultOptions,d=t!==a,v=d?t.state:this.currentQueryInitialState,R=d?this.currentResult:this.previousQueryResult,l=t.state,m=l.dataUpdatedAt,E=l.error,I=l.errorUpdatedAt,O=l.isFetching,f=l.status,C=!1,P=!1,p;if(e.optimisticResults){var F=this.hasListeners(),B=!F&&A(t,e),W=F&&L(t,a,e,r);(B||W)&&(O=!0,m||(f="loading"))}if(e.keepPreviousData&&!l.dataUpdateCount&&(R!=null&&R.isSuccess)&&f!=="error")p=R.data,m=R.dataUpdatedAt,f=R.status,C=!0;else if(e.select&&typeof l.data<"u")if(c&&l.data===(o==null?void 0:o.data)&&e.select===this.selectFn)p=this.selectResult;else try{this.selectFn=e.select,p=e.select(l.data),e.structuralSharing!==!1&&(p=w(c==null?void 0:c.data,p)),this.selectResult=p,this.selectError=null}catch(S){k().error(S),this.selectError=S}else p=l.data;if(typeof e.placeholderData<"u"&&typeof p>"u"&&(f==="loading"||f==="idle")){var y;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(h==null?void 0:h.placeholderData))y=c.data;else if(y=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof y<"u")try{y=e.select(y),e.structuralSharing!==!1&&(y=w(c==null?void 0:c.data,y)),this.selectError=null}catch(S){k().error(S),this.selectError=S}typeof y<"u"&&(f="success",p=y,P=!0)}this.selectError&&(E=this.selectError,p=this.selectResult,I=Date.now(),f="error");var j={status:f,isLoading:f==="loading",isSuccess:f==="success",isError:f==="error",isIdle:f==="idle",data:p,dataUpdatedAt:m,error:E,errorUpdatedAt:I,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>v.dataUpdateCount||l.errorUpdateCount>v.errorUpdateCount,isFetching:O,isRefetching:O&&f!=="loading",isLoadingError:f==="error"&&l.dataUpdatedAt===0,isPlaceholderData:P,isPreviousData:C,isRefetchError:f==="error"&&l.dataUpdatedAt!==0,isStale:T(t,e),refetch:this.refetch,remove:this.remove};return j},s.shouldNotifyListeners=function(t,e){if(!e)return!0;var a=this.options,r=a.notifyOnChangeProps,c=a.notifyOnChangePropsExclusions;if(!r&&!c||r==="tracked"&&!this.trackedProps.length)return!0;var o=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(h){var d=h,v=t[d]!==e[d],R=o==null?void 0:o.some(function(m){return m===h}),l=c==null?void 0:c.some(function(m){return m===h});return v&&!l&&(!o||R)})},s.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!z(this.currentResult,e)){var a={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(a.listeners=!0),this.notify(U({},a,t))}},s.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},s.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!G(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},s.notify=function(t){var e=this;g.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(a){a(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},u}(H);function X(n,u){return u.enabled!==!1&&!n.state.dataUpdatedAt&&!(n.state.status==="error"&&u.retryOnMount===!1)}function A(n,u){return X(n,u)||n.state.dataUpdatedAt>0&&Q(n,u,u.refetchOnMount)}function Q(n,u,s){if(u.enabled!==!1){var i=typeof s=="function"?s(n):s;return i==="always"||i!==!1&&T(n,u)}return!1}function L(n,u,s,i){return s.enabled!==!1&&(n!==u||i.enabled===!1)&&(!s.suspense||n.state.status!=="error")&&T(n,s)}function T(n,u){return n.isStaleByTime(u.staleTime)}function Z(){var n=!1;return{clearReset:function(){n=!1},reset:function(){n=!0},isReset:function(){return n}}}var ee=b.createContext(Z()),te=function(){return b.useContext(ee)};function re(n,u,s){return typeof u=="function"?u.apply(void 0,s):typeof u=="boolean"?u:!!n}function le(n,u){var s=b.useRef(!1),i=b.useState(0),t=i[1],e=J(),a=te(),r=e.defaultQueryObserverOptions(n);r.optimisticResults=!0,r.onError&&(r.onError=g.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=g.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=g.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(a.isReset()||(r.retryOnMount=!1));var c=b.useState(function(){return new u(e,r)}),o=c[0],h=o.getOptimisticResult(r);if(b.useEffect(function(){s.current=!0,a.clearReset();var d=o.subscribe(g.batchCalls(function(){s.current&&t(function(v){return v+1})}));return o.updateResult(),function(){s.current=!1,d()}},[a,o]),b.useEffect(function(){o.setOptions(r,{listeners:!1})},[r,o]),r.suspense&&h.isLoading)throw o.fetchOptimistic(r).then(function(d){var v=d.data;r.onSuccess==null||r.onSuccess(v),r.onSettled==null||r.onSettled(v,null)}).catch(function(d){a.clearReset(),r.onError==null||r.onError(d),r.onSettled==null||r.onSettled(void 0,d)});if(h.isError&&!a.isReset()&&!h.isFetching&&re(r.suspense,r.useErrorBoundary,[h.error,o.getCurrentQuery()]))throw h.error;return r.notifyOnChangeProps==="tracked"&&(h=o.trackResult(h,r)),h}var M={exports:{}},se="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ne=se,ie=ne;function D(){}function N(){}N.resetWarningCache=D;var ue=function(){function n(i,t,e,a,r,c){if(c!==ie){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}n.isRequired=n;function u(){return n}var s={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:u,element:n,elementType:n,instanceOf:u,node:n,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:N,resetWarningCache:D};return s.PropTypes=s,s};M.exports=ue();var ae=M.exports;const he=Y(ae);export{he as P,ce as Q,le as u};
