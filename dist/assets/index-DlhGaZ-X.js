(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ax(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wm={exports:{}},Vl={},jm={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),ox=Symbol.for("react.portal"),lx=Symbol.for("react.fragment"),cx=Symbol.for("react.strict_mode"),ux=Symbol.for("react.profiler"),dx=Symbol.for("react.provider"),fx=Symbol.for("react.context"),hx=Symbol.for("react.forward_ref"),px=Symbol.for("react.suspense"),mx=Symbol.for("react.memo"),gx=Symbol.for("react.lazy"),Dh=Symbol.iterator;function vx(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var Xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Ym={};function Us(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||Xm}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $m(){}$m.prototype=Us.prototype;function uf(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||Xm}var df=uf.prototype=new $m;df.constructor=uf;qm(df,Us.prototype);df.isPureReactComponent=!0;var Ih=Array.isArray,Km=Object.prototype.hasOwnProperty,ff={current:null},Zm={key:!0,ref:!0,__self:!0,__source:!0};function Jm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Km.call(e,i)&&!Zm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:ff.current}}function xx(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function _x(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_x(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case ox:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+gc(a,0):i,Ih(r)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),Go(r,e,n,"",function(c){return c})):r!=null&&(hf(r)&&(r=xx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Uh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ih(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+gc(s,o);a+=Go(s,e,n,l,r)}else if(l=vx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+gc(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function to(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Wo={transition:null},Sx={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:ff};function Qm(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Us;We.Fragment=lx;We.Profiler=ux;We.PureComponent=uf;We.StrictMode=cx;We.Suspense=px;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;We.act=Qm;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=qm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ff.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Km.call(e,l)&&!Zm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:fx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dx,_context:t},t.Consumer=t};We.createElement=Jm;We.createFactory=function(t){var e=Jm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:hx,render:t}};We.isValidElement=hf;We.lazy=function(t){return{$$typeof:gx,_payload:{_status:-1,_result:t},_init:yx}};We.memo=function(t,e){return{$$typeof:mx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};We.unstable_act=Qm;We.useCallback=function(t,e){return sn.current.useCallback(t,e)};We.useContext=function(t){return sn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};We.useEffect=function(t,e){return sn.current.useEffect(t,e)};We.useId=function(){return sn.current.useId()};We.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return sn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};We.useRef=function(t){return sn.current.useRef(t)};We.useState=function(t){return sn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return sn.current.useTransition()};We.version="18.3.1";jm.exports=We;var Ye=jm.exports;const eg=ax(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=Ye,Ex=Symbol.for("react.element"),wx=Symbol.for("react.fragment"),bx=Object.prototype.hasOwnProperty,Tx=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ax={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)bx.call(e,i)&&!Ax.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ex,type:t,key:s,ref:a,props:r,_owner:Tx.current}}Vl.Fragment=wx;Vl.jsx=tg;Vl.jsxs=tg;Wm.exports=Vl;var u=Wm.exports,Tu={},ng={exports:{}},wn={},ig={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,k){var j=B.length;B.push(k);e:for(;0<j;){var J=j-1>>>1,me=B[J];if(0<r(me,k))B[J]=k,B[j]=me,j=J;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var k=B[0],j=B.pop();if(j!==k){B[0]=j;e:for(var J=0,me=B.length,we=me>>>1;J<we;){var qe=2*(J+1)-1,Be=B[qe],ke=qe+1,Y=B[ke];if(0>r(Be,j))ke<me&&0>r(Y,Be)?(B[J]=Y,B[ke]=j,J=ke):(B[J]=Be,B[qe]=j,J=qe);else if(ke<me&&0>r(Y,j))B[J]=Y,B[ke]=j,J=ke;else break e}}return k}function r(B,k){var j=B.sortIndex-k.sortIndex;return j!==0?j:B.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,f=3,m=!1,v=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(B){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=B)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(B){if(E=!1,M(B),!v)if(n(l)!==null)v=!0,Q(T);else{var k=n(c);k!==null&&$(S,k.startTime-B)}}function T(B,k){v=!1,E&&(E=!1,d(y),y=-1),m=!0;var j=f;try{for(M(k),p=n(l);p!==null&&(!(p.expirationTime>k)||B&&!F());){var J=p.callback;if(typeof J=="function"){p.callback=null,f=p.priorityLevel;var me=J(p.expirationTime<=k);k=t.unstable_now(),typeof me=="function"?p.callback=me:p===n(l)&&i(l),M(k)}else i(l);p=n(l)}if(p!==null)var we=!0;else{var qe=n(c);qe!==null&&$(S,qe.startTime-k),we=!1}return we}finally{p=null,f=j,m=!1}}var b=!1,R=null,y=-1,A=5,N=-1;function F(){return!(t.unstable_now()-N<A)}function V(){if(R!==null){var B=t.unstable_now();N=B;var k=!0;try{k=R(!0,B)}finally{k?X():(b=!1,R=null)}}else b=!1}var X;if(typeof x=="function")X=function(){x(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,G=I.port2;I.port1.onmessage=V,X=function(){G.postMessage(null)}}else X=function(){g(V,0)};function Q(B){R=B,b||(b=!0,X())}function $(B,k){y=g(function(){B(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Q(T))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var j=f;f=k;try{return B()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,k){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=f;f=B;try{return k()}finally{f=j}},t.unstable_scheduleCallback=function(B,k,j){var J=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?J+j:J):j=J,B){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=j+me,B={id:h++,callback:k,priorityLevel:B,startTime:j,expirationTime:me,sortIndex:-1},j>J?(B.sortIndex=j,e(c,B),n(l)===null&&B===n(c)&&(E?(d(y),y=-1):E=!0,$(S,j-J))):(B.sortIndex=me,e(l,B),v||m||(v=!0,Q(T))),B},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(B){var k=f;return function(){var j=f;f=k;try{return B.apply(this,arguments)}finally{f=j}}}})(rg);ig.exports=rg;var Cx=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx=Ye,Mn=Cx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sg=new Set,ya={};function Ur(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(ya[t]=e,t=0;t<e.length;t++)sg.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=Object.prototype.hasOwnProperty,Nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},Oh={};function Px(t){return Au.call(Oh,t)?!0:Au.call(Fh,t)?!1:Nx.test(t)?Oh[t]=!0:(Fh[t]=!0,!1)}function Lx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dx(t,e,n,i){if(e===null||typeof e>"u"||Lx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var pf=/[\-:]([a-z])/g;function mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pf,mf);Vt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pf,mf);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pf,mf);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function gf(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dx(e,n,r,i)&&(n=null),i||r===null?Px(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=Rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),ag=Symbol.for("react.provider"),og=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Nu=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),kh=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,vc;function na(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var xc=!1;function _c(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function Ix(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case Cu:return"Profiler";case vf:return"StrictMode";case Ru:return"Suspense";case Nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case og:return(t.displayName||"Context")+".Consumer";case ag:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _f:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function Ux(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fx(t){var e=cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=Fx(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lu(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dg(t,e){e=e.checked,e!=null&&gf(t,"checked",e,!1)}function Du(t,e){dg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ia(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function fg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,pg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ox=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){Ox.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kx=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(t,e){if(e){if(kx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,vs=null,xs=null;function Gh(t){if(t=ja(t)){if(typeof zu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=ql(e),zu(t.stateNode,t.type,e))}}function vg(t){vs?xs?xs.push(t):xs=[t]:vs=t}function xg(){if(vs){var t=vs,e=xs;if(xs=vs=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function _g(t,e){return t(e)}function yg(){}var yc=!1;function Sg(t,e,n){if(yc)return t(e,n);yc=!0;try{return _g(t,e,n)}finally{yc=!1,(vs!==null||xs!==null)&&(yg(),xg())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Hu=!1;if(Ri)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Hu=!1}function Bx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ua=!1,ll=null,cl=!1,Vu=null,zx={onError:function(t){ua=!0,ll=t}};function Hx(t,e,n,i,r,s,a,o,l){ua=!1,ll=null,Bx.apply(zx,arguments)}function Vx(t,e,n,i,r,s,a,o,l){if(Hx.apply(this,arguments),ua){if(ua){var c=ll;ua=!1,ll=null}else throw Error(re(198));cl||(cl=!0,Vu=c)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Fr(t)!==t)throw Error(re(188))}function Gx(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wh(r),t;if(s===i)return Wh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Eg(t){return t=Gx(t),t!==null?wg(t):null}function wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wg(t);if(e!==null)return e;t=t.sibling}return null}var bg=Mn.unstable_scheduleCallback,jh=Mn.unstable_cancelCallback,Wx=Mn.unstable_shouldYield,jx=Mn.unstable_requestPaint,bt=Mn.unstable_now,Xx=Mn.unstable_getCurrentPriorityLevel,Sf=Mn.unstable_ImmediatePriority,Tg=Mn.unstable_UserBlockingPriority,ul=Mn.unstable_NormalPriority,qx=Mn.unstable_LowPriority,Ag=Mn.unstable_IdlePriority,Gl=null,oi=null;function Yx(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Zx,$x=Math.log,Kx=Math.LN2;function Zx(t){return t>>>=0,t===0?32:31-($x(t)/Kx|0)|0}var so=64,ao=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Jx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-qn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Jx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function e_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,Ef,Pg,Lg,Dg,Wu=!1,oo=[],Ji=null,Qi=null,er=null,Ea=new Map,wa=new Map,qi=[],t_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&Ef(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function n_(t,e,n,i,r){switch(e){case"focusin":return Ji=Vs(Ji,t,e,n,i,r),!0;case"dragenter":return Qi=Vs(Qi,t,e,n,i,r),!0;case"mouseover":return er=Vs(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Vs(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,Vs(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ig(t){var e=yr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=Mg(n),e!==null){t.blockedOn=e,Dg(t.priority,function(){Pg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bu=i,n.target.dispatchEvent(i),Bu=null}else return e=ja(n),e!==null&&Ef(e),t.blockedOn=n,!1;e.shift()}return!0}function qh(t,e,n){jo(t)&&n.delete(e)}function i_(){Wu=!1,Ji!==null&&jo(Ji)&&(Ji=null),Qi!==null&&jo(Qi)&&(Qi=null),er!==null&&jo(er)&&(er=null),Ea.forEach(qh),wa.forEach(qh)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,i_)))}function ba(t){function e(r){return Gs(r,t)}if(0<oo.length){Gs(oo[0],t);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Gs(Ji,t),Qi!==null&&Gs(Qi,t),er!==null&&Gs(er,t),Ea.forEach(e),wa.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)Ig(n),n.blockedOn===null&&qi.shift()}var _s=Ii.ReactCurrentBatchConfig,fl=!0;function r_(t,e,n,i){var r=rt,s=_s.transition;_s.transition=null;try{rt=1,wf(t,e,n,i)}finally{rt=r,_s.transition=s}}function s_(t,e,n,i){var r=rt,s=_s.transition;_s.transition=null;try{rt=4,wf(t,e,n,i)}finally{rt=r,_s.transition=s}}function wf(t,e,n,i){if(fl){var r=ju(t,e,n,i);if(r===null)Pc(t,e,i,hl,n),Xh(t,i);else if(n_(r,t,e,n,i))i.stopPropagation();else if(Xh(t,i),e&4&&-1<t_.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&Ng(s),s=ju(t,e,n,i),s===null&&Pc(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pc(t,e,i,null,n)}}var hl=null;function ju(t,e,n,i){if(hl=null,t=yf(i),t=yr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function Ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xx()){case Sf:return 1;case Tg:return 4;case ul:case qx:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var Ki=null,bf=null,Xo=null;function Fg(){if(Xo)return Xo;var t,e=bf,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Xo=r.slice(t,1<i?1-i:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Yh(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Yh,this.isPropagationStopped=Yh,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=bn(Fs),Wa=St({},Fs,{view:0,detail:0}),a_=bn(Wa),Mc,Ec,Ws,Wl=St({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Mc=t.screenX-Ws.screenX,Ec=t.screenY-Ws.screenY):Ec=Mc=0,Ws=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),$h=bn(Wl),o_=St({},Wl,{dataTransfer:0}),l_=bn(o_),c_=St({},Wa,{relatedTarget:0}),wc=bn(c_),u_=St({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),d_=bn(u_),f_=St({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h_=bn(f_),p_=St({},Fs,{data:0}),Kh=bn(p_),m_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v_[t])?!!e[t]:!1}function Af(){return x_}var __=St({},Wa,{key:function(t){if(t.key){var e=m_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y_=bn(__),S_=St({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=bn(S_),M_=St({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),E_=bn(M_),w_=St({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),b_=bn(w_),T_=St({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A_=bn(T_),C_=[9,13,27,32],Cf=Ri&&"CompositionEvent"in window,da=null;Ri&&"documentMode"in document&&(da=document.documentMode);var R_=Ri&&"TextEvent"in window&&!da,Og=Ri&&(!Cf||da&&8<da&&11>=da),Jh=" ",Qh=!1;function kg(t,e){switch(t){case"keyup":return C_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function N_(t,e){switch(t){case"compositionend":return Bg(e);case"keypress":return e.which!==32?null:(Qh=!0,Jh);case"textInput":return t=e.data,t===Jh&&Qh?null:t;default:return null}}function P_(t,e){if(is)return t==="compositionend"||!Cf&&kg(t,e)?(t=Fg(),Xo=bf=Ki=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Og&&e.locale!=="ko"?null:e.data;default:return null}}var L_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!L_[t.type]:e==="textarea"}function zg(t,e,n,i){vg(i),e=pl(e,"onChange"),0<e.length&&(n=new Tf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,Ta=null;function D_(t){Zg(t,0)}function jl(t){var e=as(t);if(ug(e))return t}function I_(t,e){if(t==="change")return e}var Hg=!1;if(Ri){var bc;if(Ri){var Tc="oninput"in document;if(!Tc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Tc=typeof tp.oninput=="function"}bc=Tc}else bc=!1;Hg=bc&&(!document.documentMode||9<document.documentMode)}function np(){fa&&(fa.detachEvent("onpropertychange",Vg),Ta=fa=null)}function Vg(t){if(t.propertyName==="value"&&jl(Ta)){var e=[];zg(e,Ta,t,yf(t)),Sg(D_,e)}}function U_(t,e,n){t==="focusin"?(np(),fa=e,Ta=n,fa.attachEvent("onpropertychange",Vg)):t==="focusout"&&np()}function F_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Ta)}function O_(t,e){if(t==="click")return jl(e)}function k_(t,e){if(t==="input"||t==="change")return jl(e)}function B_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:B_;function Aa(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Au.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function Gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wg(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z_(t){var e=Wg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gg(n.ownerDocument.documentElement,n)){if(i!==null&&Rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var a=rp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var H_=Ri&&"documentMode"in document&&11>=document.documentMode,rs=null,Xu=null,ha=null,qu=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||rs==null||rs!==ol(i)||(i=rs,"selectionStart"in i&&Rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Aa(ha,i)||(ha=i,i=pl(Xu,"onSelect"),0<i.length&&(e=new Tf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Ac={},jg={};Ri&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Xl(t){if(Ac[t])return Ac[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return Ac[t]=e[n];return t}var Xg=Xl("animationend"),qg=Xl("animationiteration"),Yg=Xl("animationstart"),$g=Xl("transitionend"),Kg=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){Kg.set(t,e),Ur(e,[t])}for(var Cc=0;Cc<ap.length;Cc++){var Rc=ap[Cc],V_=Rc.toLowerCase(),G_=Rc[0].toUpperCase()+Rc.slice(1);cr(V_,"on"+G_)}cr(Xg,"onAnimationEnd");cr(qg,"onAnimationIteration");cr(Yg,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr($g,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function op(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Vx(i,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;op(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;op(r,o,c),s=l}}}if(cl)throw t=Vu,cl=!1,Vu=null,t}function ht(t,e){var n=e[Ju];n===void 0&&(n=e[Ju]=new Set);var i=t+"__bubble";n.has(i)||(Jg(e,t,2,!1),n.add(i))}function Nc(t,e,n){var i=0;e&&(i|=4),Jg(n,t,i,e)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[uo]){t[uo]=!0,sg.forEach(function(n){n!=="selectionchange"&&(W_.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uo]||(e[uo]=!0,Nc("selectionchange",!1,e))}}function Jg(t,e,n,i){switch(Ug(e)){case 1:var r=r_;break;case 4:r=s_;break;default:r=wf}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=yr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Sg(function(){var c=s,h=yf(n),p=[];e:{var f=Kg.get(t);if(f!==void 0){var m=Tf,v=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":m=y_;break;case"focusin":v="focus",m=wc;break;case"focusout":v="blur",m=wc;break;case"beforeblur":case"afterblur":m=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=l_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=E_;break;case Xg:case qg:case Yg:m=d_;break;case $g:m=b_;break;case"scroll":m=a_;break;case"wheel":m=A_;break;case"copy":case"cut":case"paste":m=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Zh}var E=(e&4)!==0,g=!E&&t==="scroll",d=E?f!==null?f+"Capture":null:f;E=[];for(var x=c,M;x!==null;){M=x;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,d!==null&&(S=Ma(x,d),S!=null&&E.push(Ra(x,S,M)))),g)break;x=x.return}0<E.length&&(f=new m(f,v,null,n,h),p.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Bu&&(v=n.relatedTarget||n.fromElement)&&(yr(v)||v[Ni]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?yr(v):null,v!==null&&(g=Fr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(E=$h,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=Zh,S="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?f:as(m),M=v==null?f:as(v),f=new E(S,x+"leave",m,n,h),f.target=g,f.relatedTarget=M,S=null,yr(h)===c&&(E=new E(d,x+"enter",v,n,h),E.target=M,E.relatedTarget=g,S=E),g=S,m&&v)t:{for(E=m,d=v,x=0,M=E;M;M=zr(M))x++;for(M=0,S=d;S;S=zr(S))M++;for(;0<x-M;)E=zr(E),x--;for(;0<M-x;)d=zr(d),M--;for(;x--;){if(E===d||d!==null&&E===d.alternate)break t;E=zr(E),d=zr(d)}E=null}else E=null;m!==null&&lp(p,f,m,E,!1),v!==null&&g!==null&&lp(p,g,v,E,!0)}}e:{if(f=c?as(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=I_;else if(ep(f))if(Hg)T=k_;else{T=F_;var b=U_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=O_);if(T&&(T=T(t,c))){zg(p,T,n,h);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Iu(f,"number",f.value)}switch(b=c?as(c):window,t){case"focusin":(ep(b)||b.contentEditable==="true")&&(rs=b,Xu=c,ha=null);break;case"focusout":ha=Xu=rs=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,sp(p,n,h);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":sp(p,n,h)}var R;if(Cf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else is?kg(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Og&&n.locale!=="ko"&&(is||y!=="onCompositionStart"?y==="onCompositionEnd"&&is&&(R=Fg()):(Ki=h,bf="value"in Ki?Ki.value:Ki.textContent,is=!0)),b=pl(c,y),0<b.length&&(y=new Kh(y,t,null,n,h),p.push({event:y,listeners:b}),R?y.data=R:(R=Bg(n),R!==null&&(y.data=R)))),(R=R_?N_(t,n):P_(t,n))&&(c=pl(c,"onBeforeInput"),0<c.length&&(h=new Kh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=R))}Zg(p,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Ma(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ma(n,s),l!=null&&a.unshift(Ra(n,l,o))):r||(l=Ma(n,s),l!=null&&a.push(Ra(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var j_=/\r\n?/g,X_=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(j_,`
`).replace(X_,"")}function fo(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(re(425))}function ml(){}var Yu=null,$u=null;function Ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,Y_=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(t){return up.resolve(null).then(t).catch($_)}:Zu;function $_(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),ri="__reactFiber$"+Os,Na="__reactProps$"+Os,Ni="__reactContainer$"+Os,Ju="__reactEvents$"+Os,K_="__reactListeners$"+Os,Z_="__reactHandles$"+Os;function yr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[ri])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[ri]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function ql(t){return t[Na]||null}var Qu=[],os=-1;function ur(t){return{current:t}}function pt(t){0>os||(t.current=Qu[os],Qu[os]=null,os--)}function dt(t,e){os++,Qu[os]=t.current,t.current=e}var or={},Zt=ur(or),dn=ur(!1),Ar=or;function As(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function gl(){pt(dn),pt(Zt)}function fp(t,e,n){if(Zt.current!==or)throw Error(re(168));dt(Zt,e),dt(dn,n)}function Qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Ux(t)||"Unknown",r));return St({},n,i)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Ar=Zt.current,dt(Zt,t),dt(dn,dn.current),!0}function hp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Qg(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,pt(dn),pt(Zt),dt(Zt,t)):pt(dn),dt(dn,n)}var _i=null,Yl=!1,Dc=!1;function e0(t){_i===null?_i=[t]:_i.push(t)}function J_(t){Yl=!0,e0(t)}function dr(){if(!Dc&&_i!==null){Dc=!0;var t=0,e=rt;try{var n=_i;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,Yl=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),bg(Sf,dr),r}finally{rt=e,Dc=!1}}return null}var ls=[],cs=0,xl=null,_l=0,Rn=[],Nn=0,Cr=null,Mi=1,Ei="";function xr(t,e){ls[cs++]=_l,ls[cs++]=xl,xl=t,_l=e}function t0(t,e,n){Rn[Nn++]=Mi,Rn[Nn++]=Ei,Rn[Nn++]=Cr,Cr=t;var i=Mi;t=Ei;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-qn(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function Nf(t){t.return!==null&&(xr(t,1),t0(t,1,0))}function Pf(t){for(;t===xl;)xl=ls[--cs],ls[cs]=null,_l=ls[--cs],ls[cs]=null;for(;t===Cr;)Cr=Rn[--Nn],Rn[Nn]=null,Ei=Rn[--Nn],Rn[Nn]=null,Mi=Rn[--Nn],Rn[Nn]=null}var Sn=null,yn=null,gt=!1,Wn=null;function n0(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(gt){var e=yn;if(e){var n=e;if(!pp(t,e)){if(ed(t))throw Error(re(418));e=tr(n.nextSibling);var i=Sn;e&&pp(t,e)?n0(i,n):(t.flags=t.flags&-4097|2,gt=!1,Sn=t)}}else{if(ed(t))throw Error(re(418));t.flags=t.flags&-4097|2,gt=!1,Sn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function ho(t){if(t!==Sn)return!1;if(!gt)return mp(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ku(t.type,t.memoizedProps)),e&&(e=yn)){if(ed(t))throw i0(),Error(re(418));for(;e;)n0(t,e),e=tr(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?tr(t.stateNode.nextSibling):null;return!0}function i0(){for(var t=yn;t;)t=tr(t.nextSibling)}function Cs(){yn=Sn=null,gt=!1}function Lf(t){Wn===null?Wn=[t]:Wn.push(t)}var Q_=Ii.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function r0(t){function e(d,x){if(t){var M=d.deletions;M===null?(d.deletions=[x],d.flags|=16):M.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=sr(d,x),d.index=0,d.sibling=null,d}function s(d,x,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<x?(d.flags|=2,x):M):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,M,S){return x===null||x.tag!==6?(x=zc(M,d.mode,S),x.return=d,x):(x=r(x,M),x.return=d,x)}function l(d,x,M,S){var T=M.type;return T===ns?h(d,x,M.props.children,S,M.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ji&&gp(T)===x.type)?(S=r(x,M.props),S.ref=js(d,x,M),S.return=d,S):(S=el(M.type,M.key,M.props,null,d.mode,S),S.ref=js(d,x,M),S.return=d,S)}function c(d,x,M,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Hc(M,d.mode,S),x.return=d,x):(x=r(x,M.children||[]),x.return=d,x)}function h(d,x,M,S,T){return x===null||x.tag!==7?(x=Tr(M,d.mode,S,T),x.return=d,x):(x=r(x,M),x.return=d,x)}function p(d,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zc(""+x,d.mode,M),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return M=el(x.type,x.key,x.props,null,d.mode,M),M.ref=js(d,null,x),M.return=d,M;case ts:return x=Hc(x,d.mode,M),x.return=d,x;case ji:var S=x._init;return p(d,S(x._payload),M)}if(ia(x)||zs(x))return x=Tr(x,d.mode,M,null),x.return=d,x;po(d,x)}return null}function f(d,x,M,S){var T=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return T!==null?null:o(d,x,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case no:return M.key===T?l(d,x,M,S):null;case ts:return M.key===T?c(d,x,M,S):null;case ji:return T=M._init,f(d,x,T(M._payload),S)}if(ia(M)||zs(M))return T!==null?null:h(d,x,M,S,null);po(d,M)}return null}function m(d,x,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(M)||null,o(x,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case no:return d=d.get(S.key===null?M:S.key)||null,l(x,d,S,T);case ts:return d=d.get(S.key===null?M:S.key)||null,c(x,d,S,T);case ji:var b=S._init;return m(d,x,M,b(S._payload),T)}if(ia(S)||zs(S))return d=d.get(M)||null,h(x,d,S,T,null);po(x,S)}return null}function v(d,x,M,S){for(var T=null,b=null,R=x,y=x=0,A=null;R!==null&&y<M.length;y++){R.index>y?(A=R,R=null):A=R.sibling;var N=f(d,R,M[y],S);if(N===null){R===null&&(R=A);break}t&&R&&N.alternate===null&&e(d,R),x=s(N,x,y),b===null?T=N:b.sibling=N,b=N,R=A}if(y===M.length)return n(d,R),gt&&xr(d,y),T;if(R===null){for(;y<M.length;y++)R=p(d,M[y],S),R!==null&&(x=s(R,x,y),b===null?T=R:b.sibling=R,b=R);return gt&&xr(d,y),T}for(R=i(d,R);y<M.length;y++)A=m(R,d,y,M[y],S),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?y:A.key),x=s(A,x,y),b===null?T=A:b.sibling=A,b=A);return t&&R.forEach(function(F){return e(d,F)}),gt&&xr(d,y),T}function E(d,x,M,S){var T=zs(M);if(typeof T!="function")throw Error(re(150));if(M=T.call(M),M==null)throw Error(re(151));for(var b=T=null,R=x,y=x=0,A=null,N=M.next();R!==null&&!N.done;y++,N=M.next()){R.index>y?(A=R,R=null):A=R.sibling;var F=f(d,R,N.value,S);if(F===null){R===null&&(R=A);break}t&&R&&F.alternate===null&&e(d,R),x=s(F,x,y),b===null?T=F:b.sibling=F,b=F,R=A}if(N.done)return n(d,R),gt&&xr(d,y),T;if(R===null){for(;!N.done;y++,N=M.next())N=p(d,N.value,S),N!==null&&(x=s(N,x,y),b===null?T=N:b.sibling=N,b=N);return gt&&xr(d,y),T}for(R=i(d,R);!N.done;y++,N=M.next())N=m(R,d,y,N.value,S),N!==null&&(t&&N.alternate!==null&&R.delete(N.key===null?y:N.key),x=s(N,x,y),b===null?T=N:b.sibling=N,b=N);return t&&R.forEach(function(V){return e(d,V)}),gt&&xr(d,y),T}function g(d,x,M,S){if(typeof M=="object"&&M!==null&&M.type===ns&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case no:e:{for(var T=M.key,b=x;b!==null;){if(b.key===T){if(T=M.type,T===ns){if(b.tag===7){n(d,b.sibling),x=r(b,M.props.children),x.return=d,d=x;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ji&&gp(T)===b.type){n(d,b.sibling),x=r(b,M.props),x.ref=js(d,b,M),x.return=d,d=x;break e}n(d,b);break}else e(d,b);b=b.sibling}M.type===ns?(x=Tr(M.props.children,d.mode,S,M.key),x.return=d,d=x):(S=el(M.type,M.key,M.props,null,d.mode,S),S.ref=js(d,x,M),S.return=d,d=S)}return a(d);case ts:e:{for(b=M.key;x!==null;){if(x.key===b)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){n(d,x.sibling),x=r(x,M.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Hc(M,d.mode,S),x.return=d,d=x}return a(d);case ji:return b=M._init,g(d,x,b(M._payload),S)}if(ia(M))return v(d,x,M,S);if(zs(M))return E(d,x,M,S);po(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,M),x.return=d,d=x):(n(d,x),x=zc(M,d.mode,S),x.return=d,d=x),a(d)):n(d,x)}return g}var Rs=r0(!0),s0=r0(!1),yl=ur(null),Sl=null,us=null,Df=null;function If(){Df=us=Sl=null}function Uf(t){var e=yl.current;pt(yl),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Sl=t,Df=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Df!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(Sl===null)throw Error(re(308));us=t,Sl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var Sr=null;function Ff(t){Sr===null?Sr=[t]:Sr.push(t)}function a0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function Of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Yo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mf(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,E=o;switch(f=e,m=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){p=v.call(m,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,f=typeof v=="function"?v.call(m,p,f):v,f==null)break e;p=St({},p,f);break e;case 2:Xi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=p}}function xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Xa={},li=ur(Xa),Pa=ur(Xa),La=ur(Xa);function Mr(t){if(t===Xa)throw Error(re(174));return t}function kf(t,e){switch(dt(La,e),dt(Pa,t),dt(li,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}pt(li),dt(li,e)}function Ns(){pt(li),pt(Pa),pt(La)}function l0(t){Mr(La.current);var e=Mr(li.current),n=Fu(e,t.type);e!==n&&(dt(Pa,t),dt(li,n))}function Bf(t){Pa.current===t&&(pt(li),pt(Pa))}var xt=ur(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function zf(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var $o=Ii.ReactCurrentDispatcher,Uc=Ii.ReactCurrentBatchConfig,Rr=0,_t=null,Pt=null,Ot=null,wl=!1,pa=!1,Da=0,ey=0;function jt(){throw Error(re(321))}function Hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Vf(t,e,n,i,r,s){if(Rr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$o.current=t===null||t.memoizedState===null?ry:sy,t=n(i,r),pa){s=0;do{if(pa=!1,Da=0,25<=s)throw Error(re(301));s+=1,Ot=Pt=null,e.updateQueue=null,$o.current=ay,t=n(i,r)}while(pa)}if($o.current=bl,e=Pt!==null&&Pt.next!==null,Rr=0,Ot=Pt=_t=null,wl=!1,e)throw Error(re(300));return t}function Gf(){var t=Da!==0;return Da=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?_t.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Fn(){if(Pt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ot===null?_t.memoizedState:Ot.next;if(e!==null)Ot=e,Pt=t;else{if(t===null)throw Error(re(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ot===null?_t.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Ia(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Rr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,_t.lanes|=h,Nr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Nr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function c0(){}function u0(t,e){var n=_t,i=Fn(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Wf(h0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Ua(9,f0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(re(349));Rr&30||d0(n,e,r)}return r}function d0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f0(t,e,n,i){e.value=n,e.getSnapshot=i,p0(e)&&m0(t)}function h0(t,e,n){return n(function(){p0(e)&&m0(t)})}function p0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function m0(t){var e=Pi(t,1);e!==null&&Yn(e,t,1,-1)}function _p(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=iy.bind(null,_t,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function g0(){return Fn().memoizedState}function Ko(t,e,n,i){var r=ni();_t.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var a=Pt.memoizedState;if(s=a.destroy,i!==null&&Hf(i,a.deps)){r.memoizedState=Ua(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function yp(t,e){return Ko(8390656,8,t,e)}function Wf(t,e){return $l(2048,8,t,e)}function v0(t,e){return $l(4,2,t,e)}function x0(t,e){return $l(4,4,t,e)}function _0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y0(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,_0.bind(null,e,t),n)}function jf(){}function S0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function M0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function E0(t,e,n){return Rr&21?(Kn(n,e)||(n=Cg(),_t.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function ty(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Uc.transition;Uc.transition={};try{t(!1),e()}finally{rt=n,Uc.transition=i}}function w0(){return Fn().memoizedState}function ny(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))T0(e,n);else if(n=a0(t,e,n,i),n!==null){var r=tn();Yn(n,t,i,r),A0(n,e,i)}}function iy(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))T0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=a0(t,e,r,i),n!==null&&(r=tn(),Yn(n,t,i,r),A0(n,e,i))}}function b0(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function T0(t,e){pa=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mf(t,n)}}var bl={readContext:Un,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},ry={readContext:Un,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,_0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ny.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:_p,useDebugValue:jf,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=_p(!1),e=t[0];return t=ty.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=ni();if(gt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),kt===null)throw Error(re(349));Rr&30||d0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yp(h0.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,f0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=kt.identifierPrefix;if(gt){var n=Ei,i=Mi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ey++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sy={readContext:Un,useCallback:S0,useContext:Un,useEffect:Wf,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:M0,useReducer:Fc,useRef:g0,useState:function(){return Fc(Ia)},useDebugValue:jf,useDeferredValue:function(t){var e=Fn();return E0(e,Pt.memoizedState,t)},useTransition:function(){var t=Fc(Ia)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:u0,useId:w0,unstable_isNewReconciler:!1},ay={readContext:Un,useCallback:S0,useContext:Un,useEffect:Wf,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:M0,useReducer:Oc,useRef:g0,useState:function(){return Oc(Ia)},useDebugValue:jf,useDeferredValue:function(t){var e=Fn();return Pt===null?e.memoizedState=t:E0(e,Pt.memoizedState,t)},useTransition:function(){var t=Oc(Ia)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:u0,useId:w0,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function id(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=rr(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Yn(e,t,r,i),Yo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=rr(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Yn(e,t,r,i),Yo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=rr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Yn(e,t,i,n),Yo(e,t,i))}};function Sp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function C0(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?Ar:Zt.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Of(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?Ar:Zt.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(id(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=Ix(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oy=typeof WeakMap=="function"?WeakMap:Map;function R0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Al||(Al=!0,md=i),sd(t,e)},n}function N0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sd(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new oy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Sy.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var ly=Ii.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?s0(e,null,n,i):Rs(e,t.child,n,i)}function Tp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=Vf(t,e,n,i,s,r),n=Gf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(gt&&n&&Nf(e),e.flags|=1,en(t,e,i,r),e.child)}function Ap(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,P0(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(a,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function P0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Li(t,e,r)}return ad(t,e,n,i,r)}function L0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(fs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(fs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(fs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(fs,_n),_n|=i;return en(t,e,r,n),e.child}function D0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ad(t,e,n,i,r){var s=fn(n)?Ar:Zt.current;return s=As(e,s),ys(e,r),n=Vf(t,e,n,i,s,r),i=Gf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(gt&&i&&Nf(e),e.flags|=1,en(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(fn(n)){var s=!0;vl(e)}else s=!1;if(ys(e,r),e.stateNode===null)Zo(t,e),C0(e,n,i),rd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=fn(n)?Ar:Zt.current,c=As(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Mp(e,a,i,c),Xi=!1;var f=e.memoizedState;a.state=f,Ml(e,i,a,r),l=e.memoizedState,o!==i||f!==l||dn.current||Xi?(typeof h=="function"&&(id(e,n,h,i),l=e.memoizedState),(o=Xi||Sp(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,o0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Vn(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(n)?Ar:Zt.current,l=As(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Mp(e,a,i,l),Xi=!1,f=e.memoizedState,a.state=f,Ml(e,i,a,r);var v=e.memoizedState;o!==p||f!==v||dn.current||Xi?(typeof m=="function"&&(id(e,n,m,i),v=e.memoizedState),(c=Xi||Sp(e,n,c,i,f,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return od(t,e,n,i,s,r)}function od(t,e,n,i,r,s){D0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&hp(e,n,!1),Li(t,e,s);i=e.stateNode,ly.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&hp(e,n,!0),e.child}function I0(t){var e=t.stateNode;e.pendingContext?fp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fp(t,e.context,!1),kf(t,e.containerInfo)}function Rp(t,e,n,i,r){return Cs(),Lf(r),e.flags|=256,en(t,e,n,i),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function U0(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(xt,r&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cd(n),e.memoizedState=ld,t):Xf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return cy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=sr(o,s):(s=Tr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?cd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ld,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xf(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,i){return i!==null&&Lf(i),Rs(e,t.child,null,n),t=Xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=kc(Error(re(422))),mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=cd(a),e.memoizedState=ld,s);if(!(e.mode&1))return mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=kc(s,i,void 0),mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Yn(i,t,r,-1))}return Jf(),i=kc(Error(re(421))),mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=My.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=tr(r.nextSibling),Sn=e,gt=!0,Wn=null,t!==null&&(Rn[Nn++]=Mi,Rn[Nn++]=Ei,Rn[Nn++]=Cr,Mi=t.id,Ei=t.overflow,Cr=e),e=Xf(e,i.children),e.flags|=4096,e)}function Np(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nd(t.return,e,n)}function Bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function F0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,n,e);else if(t.tag===19)Np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uy(t,e,n){switch(e.tag){case 3:I0(e),Cs();break;case 5:l0(e);break;case 1:fn(e.type)&&vl(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?U0(t,e,n):(dt(xt,xt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);dt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return F0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,L0(t,e,n)}return Li(t,e,n)}var O0,ud,k0,B0;O0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ud=function(){};k0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(li.current);var s=null;switch(n){case"input":r=Lu(t,r),i=Lu(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Uu(t,r),i=Uu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}Ou(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};B0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xs(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function dy(t,e,n){var i=e.pendingProps;switch(Pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return fn(e.type)&&gl(),Xt(e),null;case 3:return i=e.stateNode,Ns(),pt(dn),pt(Zt),zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(xd(Wn),Wn=null))),ud(t,e),Xt(e),null;case 5:Bf(e);var r=Mr(La.current);if(n=e.type,t!==null&&e.stateNode!=null)k0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Xt(e),null}if(t=Mr(li.current),ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)ht(sa[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Bh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Hh(i,s),ht("invalid",i)}Ou(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",""+o]):ya.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":io(i),zh(i,s,!0);break;case"textarea":io(i),Vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Na]=i,O0(t,e,!1,!1),e.stateNode=t;e:{switch(a=ku(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)ht(sa[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Bh(t,i),r=Lu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Hh(t,i),r=Uu(t,i),ht("invalid",t);break;default:r=i}Ou(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?gg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&gf(t,s,l,a))}switch(n){case"input":io(t),zh(t,i,!1);break;case"textarea":io(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)B0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Mr(La.current),Mr(li.current),ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Xt(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&yn!==null&&e.mode&1&&!(e.flags&128))i0(),Cs(),e.flags|=98560,s=!1;else if(s=ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ri]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Wn!==null&&(xd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Lt===0&&(Lt=3):Jf())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Ns(),ud(t,e),t===null&&Ca(e.stateNode.containerInfo),Xt(e),null;case 10:return Uf(e.type._context),Xt(e),null;case 17:return fn(e.type)&&gl(),Xt(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Xs(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,Xs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Ls&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return Xt(e),null}else 2*bt()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=xt.current,dt(xt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Zf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function fy(t,e){switch(Pf(e),e.tag){case 1:return fn(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),pt(dn),pt(Zt),zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return Ns(),null;case 10:return Uf(e.type._context),null;case 22:case 23:return Zf(),null;case 24:return null;default:return null}}var go=!1,$t=!1,hy=typeof WeakSet=="function"?WeakSet:Set,ye=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function dd(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Pp=!1;function py(t,e){if(Yu=fl,t=Wg(),Rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},fl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,g=v.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:Vn(e.type,E),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return v=Pp,Pp=!1,v}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&dd(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z0(t){var e=t.alternate;e!==null&&(t.alternate=null,z0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Na],delete e[Ju],delete e[K_],delete e[Z_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H0(t){return t.tag===5||t.tag===3||t.tag===4}function Lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var Bt=null,Gn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)V0(t,e,n),n=n.sibling}function V0(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:$t||ds(n,e);case 6:var i=Bt,r=Gn;Bt=null,Bi(t,e,n),Bt=i,Gn=r,Bt!==null&&(Gn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Gn?(t=Bt,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),ba(t)):Lc(Bt,n.stateNode));break;case 4:i=Bt,r=Gn,Bt=n.stateNode.containerInfo,Gn=!0,Bi(t,e,n),Bt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&dd(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!$t&&(ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Bi(t,e,n),$t=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hy),e.forEach(function(i){var r=Ey.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,Gn=!1;break e;case 3:Bt=o.stateNode.containerInfo,Gn=!0;break e;case 4:Bt=o.stateNode.containerInfo,Gn=!0;break e}o=o.return}if(Bt===null)throw Error(re(160));V0(s,a,r),Bt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G0(e,t),e=e.sibling}function G0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Qn(t),i&4){try{ma(3,t,t.return),Zl(3,t)}catch(E){Mt(t,t.return,E)}try{ma(5,t,t.return)}catch(E){Mt(t,t.return,E)}}break;case 1:kn(e,t),Qn(t),i&512&&n!==null&&ds(n,n.return);break;case 5:if(kn(e,t),Qn(t),i&512&&n!==null&&ds(n,n.return),t.flags&32){var r=t.stateNode;try{Sa(r,"")}catch(E){Mt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&dg(r,s),ku(o,a);var c=ku(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?gg(r,p):h==="dangerouslySetInnerHTML"?pg(r,p):h==="children"?Sa(r,p):gf(r,h,p,c)}switch(o){case"input":Du(r,s);break;case"textarea":fg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(E){Mt(t,t.return,E)}}break;case 6:if(kn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Mt(t,t.return,E)}}break;case 3:if(kn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(E){Mt(t,t.return,E)}break;case 4:kn(e,t),Qn(t);break;case 13:kn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($f=bt())),i&4&&Dp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||h,kn(e,t),$t=c):kn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ye=t,h=t.child;h!==null;){for(p=ye=h;ye!==null;){switch(f=ye,m=f.child,f.tag){case 0:case 11:case 14:case 15:ma(4,f,f.return);break;case 1:ds(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){Mt(i,n,E)}}break;case 5:ds(f,f.return);break;case 22:if(f.memoizedState!==null){Up(p);continue}}m!==null?(m.return=f,ye=m):Up(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=mg("display",a))}catch(E){Mt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){Mt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:kn(e,t),Qn(t),i&4&&Dp(t);break;case 21:break;default:kn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H0(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Sa(r,""),i.flags&=-33);var s=Lp(t);pd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Lp(t);hd(t,o,a);break;default:throw Error(re(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function my(t,e,n){ye=t,W0(t)}function W0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||$t;o=go;var c=$t;if(go=a,($t=l)&&!c)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?Fp(r):l!==null?(l.return=a,ye=l):Fp(r);for(;s!==null;)ye=s,W0(s),s=s.sibling;ye=r,go=o,$t=c}Ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Ip(t)}}function Ip(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ba(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}$t||e.flags&512&&fd(e)}catch(f){Mt(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Up(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Fp(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{fd(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{fd(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var gy=Math.ceil,Tl=Ii.ReactCurrentDispatcher,qf=Ii.ReactCurrentOwner,In=Ii.ReactCurrentBatchConfig,Je=0,kt=null,Rt=null,Ht=0,_n=0,fs=ur(0),Lt=0,Fa=null,Nr=0,Jl=0,Yf=0,ga=null,cn=null,$f=0,Ls=1/0,xi=null,Al=!1,md=null,ir=null,vo=!1,Zi=null,Cl=0,va=0,gd=null,Jo=-1,Qo=0;function tn(){return Je&6?bt():Jo!==-1?Jo:Jo=bt()}function rr(t){return t.mode&1?Je&2&&Ht!==0?Ht&-Ht:Q_.transition!==null?(Qo===0&&(Qo=Cg()),Qo):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Ug(t.type)),t):1}function Yn(t,e,n,i){if(50<va)throw va=0,gd=null,Error(re(185));Ga(t,n,i),(!(Je&2)||t!==kt)&&(t===kt&&(!(Je&2)&&(Jl|=n),Lt===4&&Yi(t,Ht)),hn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Ls=bt()+500,Yl&&dr()))}function hn(t,e){var n=t.callbackNode;Qx(t,e);var i=dl(t,t===kt?Ht:0);if(i===0)n!==null&&jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jh(n),e===1)t.tag===0?J_(Op.bind(null,t)):e0(Op.bind(null,t)),Y_(function(){!(Je&6)&&dr()}),n=null;else{switch(Rg(i)){case 1:n=Sf;break;case 4:n=Tg;break;case 16:n=ul;break;case 536870912:n=Ag;break;default:n=ul}n=J0(n,j0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j0(t,e){if(Jo=-1,Qo=0,Je&6)throw Error(re(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=dl(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Rl(t,i);else{e=i;var r=Je;Je|=2;var s=q0();(kt!==t||Ht!==e)&&(xi=null,Ls=bt()+500,br(t,e));do try{_y();break}catch(o){X0(t,o)}while(!0);If(),Tl.current=s,Je=r,Rt!==null?e=0:(kt=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(r=Gu(t),r!==0&&(i=r,e=vd(t,r))),e===1)throw n=Fa,br(t,0),Yi(t,i),hn(t,bt()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!vy(r)&&(e=Rl(t,i),e===2&&(s=Gu(t),s!==0&&(i=s,e=vd(t,s))),e===1))throw n=Fa,br(t,0),Yi(t,i),hn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:_r(t,cn,xi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=$f+500-bt(),10<e)){if(dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zu(_r.bind(null,t,cn,xi),e);break}_r(t,cn,xi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*gy(i/1960))-i,10<i){t.timeoutHandle=Zu(_r.bind(null,t,cn,xi),i);break}_r(t,cn,xi);break;case 5:_r(t,cn,xi);break;default:throw Error(re(329))}}}return hn(t,bt()),t.callbackNode===n?j0.bind(null,t):null}function vd(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=cn,cn=n,e!==null&&xd(e)),t}function xd(t){cn===null?cn=t:cn.push.apply(cn,t)}function vy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~Yf,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Op(t){if(Je&6)throw Error(re(327));Ss();var e=dl(t,0);if(!(e&1))return hn(t,bt()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var i=Gu(t);i!==0&&(e=i,n=vd(t,i))}if(n===1)throw n=Fa,br(t,0),Yi(t,e),hn(t,bt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,cn,xi),hn(t,bt()),null}function Kf(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Ls=bt()+500,Yl&&dr())}}function Pr(t){Zi!==null&&Zi.tag===0&&!(Je&6)&&Ss();var e=Je;Je|=1;var n=In.transition,i=rt;try{if(In.transition=null,rt=1,t)return t()}finally{rt=i,In.transition=n,Je=e,!(Je&6)&&dr()}}function Zf(){_n=fs.current,pt(fs)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q_(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:Ns(),pt(dn),pt(Zt),zf();break;case 5:Bf(i);break;case 4:Ns();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:Uf(i.type._context);break;case 22:case 23:Zf()}n=n.return}if(kt=t,Rt=t=sr(t.current,null),Ht=_n=e,Lt=0,Fa=null,Yf=Jl=Nr=0,cn=ga=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Sr=null}return t}function X0(t,e){do{var n=Rt;try{if(If(),$o.current=bl,wl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(Rr=0,Ot=Pt=_t=null,pa=!1,Da=0,qf.current=null,n===null||n.return===null){Lt=1,Fa=e,Rt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=wp(a);if(m!==null){m.flags&=-257,bp(m,a,o,s,e),m.mode&1&&Ep(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){Ep(s,c,e),Jf();break e}l=Error(re(426))}}else if(gt&&o.mode&1){var g=wp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),bp(g,a,o,s,e),Lf(Ps(l,o));break e}}s=l=Ps(l,o),Lt!==4&&(Lt=2),ga===null?ga=[s]:ga.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=R0(s,l,e);vp(s,d);break e;case 1:o=l;var x=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ir===null||!ir.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=N0(s,o,e);vp(s,S);break e}}s=s.return}while(s!==null)}$0(n)}catch(T){e=T,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function q0(){var t=Tl.current;return Tl.current=bl,t===null?bl:t}function Jf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),kt===null||!(Nr&268435455)&&!(Jl&268435455)||Yi(kt,Ht)}function Rl(t,e){var n=Je;Je|=2;var i=q0();(kt!==t||Ht!==e)&&(xi=null,br(t,e));do try{xy();break}catch(r){X0(t,r)}while(!0);if(If(),Je=n,Tl.current=i,Rt!==null)throw Error(re(261));return kt=null,Ht=0,Lt}function xy(){for(;Rt!==null;)Y0(Rt)}function _y(){for(;Rt!==null&&!Wx();)Y0(Rt)}function Y0(t){var e=Z0(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?$0(t):Rt=e,qf.current=null}function $0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fy(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=dy(n,e,_n),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function _r(t,e,n){var i=rt,r=In.transition;try{In.transition=null,rt=1,yy(t,e,n,i)}finally{In.transition=r,rt=i}return null}function yy(t,e,n,i){do Ss();while(Zi!==null);if(Je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e_(t,s),t===kt&&(Rt=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,J0(ul,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var a=rt;rt=1;var o=Je;Je|=4,qf.current=null,py(t,n),G0(n,t),z_($u),fl=!!Yu,$u=Yu=null,t.current=n,my(n),jx(),Je=o,rt=a,In.transition=s}else t.current=n;if(vo&&(vo=!1,Zi=t,Cl=r),s=t.pendingLanes,s===0&&(ir=null),Yx(n.stateNode),hn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Al)throw Al=!1,t=md,md=null,t;return Cl&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===gd?va++:(va=0,gd=t):va=0,dr(),null}function Ss(){if(Zi!==null){var t=Rg(Cl),e=In.transition,n=rt;try{if(In.transition=null,rt=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Cl=0,Je&6)throw Error(re(331));var r=Je;for(Je|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ye=c;ye!==null;){var h=ye;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var p=h.child;if(p!==null)p.return=h,ye=p;else for(;ye!==null;){h=ye;var f=h.sibling,m=h.return;if(z0(h),h===c){ye=null;break}if(f!==null){f.return=m,ye=f;break}ye=m}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var x=t.current;for(ye=x;ye!==null;){a=ye;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,ye=M;else e:for(a=x;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Zl(9,o)}}catch(T){Mt(o,o.return,T)}if(o===a){ye=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ye=S;break e}ye=o.return}}if(Je=r,dr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Gl,t)}catch{}i=!0}return i}finally{rt=n,In.transition=e}}return!1}function kp(t,e,n){e=Ps(n,e),e=R0(t,e,1),t=nr(t,e,1),e=tn(),t!==null&&(Ga(t,1,e),hn(t,e))}function Mt(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Ps(n,t),t=N0(e,t,1),e=nr(e,t,1),t=tn(),e!==null&&(Ga(e,1,t),hn(e,t));break}}e=e.return}}function Sy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>bt()-$f?br(t,0):Yf|=n),hn(t,e)}function K0(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=tn();t=Pi(t,e),t!==null&&(Ga(t,e,n),hn(t,n))}function My(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K0(t,n)}function Ey(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),K0(t,n)}var Z0;Z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,uy(t,e,n);un=!!(t.flags&131072)}else un=!1,gt&&e.flags&1048576&&t0(e,_l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zo(t,e),t=e.pendingProps;var r=As(e,Zt.current);ys(e,n),r=Vf(null,e,i,t,r,n);var s=Gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Of(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,rd(e,i,t,n),e=od(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Nf(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=by(i),t=Vn(i,t),r){case 0:e=ad(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=Tp(null,e,i,t,n);break e;case 14:e=Ap(null,e,i,Vn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),ad(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Cp(t,e,i,r,n);case 3:e:{if(I0(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,o0(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(re(423)),e),e=Rp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(re(424)),e),e=Rp(t,e,i,n,r);break e}else for(yn=tr(e.stateNode.containerInfo.firstChild),Sn=e,gt=!0,Wn=null,n=s0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Li(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return l0(e),t===null&&td(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ku(i,r)?a=null:s!==null&&Ku(i,s)&&(e.flags|=32),D0(t,e),en(t,e,a,n),e.child;case 6:return t===null&&td(e),null;case 13:return U0(t,e,n);case 4:return kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Tp(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(yl,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!dn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),nd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=Un(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Ap(t,e,i,r,n);case 15:return P0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Zo(t,e),e.tag=1,fn(i)?(t=!0,vl(e)):t=!1,ys(e,n),C0(e,i,r),rd(e,i,r,n),od(null,e,i,!0,t,n);case 19:return F0(t,e,n);case 22:return L0(t,e,n)}throw Error(re(156,e.tag))};function J0(t,e){return bg(t,e)}function wy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new wy(t,e,n,i)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function by(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===_f)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Qf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ns:return Tr(n.children,r,s,e);case vf:a=8,r|=8;break;case Cu:return t=Dn(12,n,e,r|2),t.elementType=Cu,t.lanes=s,t;case Ru:return t=Dn(13,n,e,r),t.elementType=Ru,t.lanes=s,t;case Nu:return t=Dn(19,n,e,r),t.elementType=Nu,t.lanes=s,t;case lg:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ag:a=10;break e;case og:a=9;break e;case xf:a=11;break e;case _f:a=14;break e;case ji:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Dn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=lg,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ty(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function eh(t,e,n,i,r,s,a,o,l){return t=new Ty(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(s),t}function Ay(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Q0(t){if(!t)return or;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(fn(n))return Qg(t,n,e)}return e}function ev(t,e,n,i,r,s,a,o,l){return t=eh(n,i,!0,t,r,s,a,o,l),t.context=Q0(null),n=t.current,i=tn(),r=rr(n),s=bi(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,Ga(t,r,i),hn(t,i),t}function ec(t,e,n,i){var r=e.current,s=tn(),a=rr(r);return n=Q0(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,a),t!==null&&(Yn(t,r,a,s),Yo(t,r,a)),a}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function th(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function Cy(){return null}var tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function nh(t){this._internalRoot=t}tc.prototype.render=nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));ec(t,e,null,null)};tc.prototype.unmount=nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){ec(null,t,null,null)}),e[Ni]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&Ig(t)}};function ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Ry(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nl(a);s.call(c)}}var a=ev(e,i,t,0,null,!1,!1,"",zp);return t._reactRootContainer=a,t[Ni]=a.current,Ca(t.nodeType===8?t.parentNode:t),Pr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Nl(l);o.call(c)}}var l=eh(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=l,t[Ni]=l.current,Ca(t.nodeType===8?t.parentNode:t),Pr(function(){ec(e,l,n,i)}),l}function ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Nl(a);o.call(l)}}ec(e,a,t,r)}else a=Ry(n,e,t,r,i);return Nl(a)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(Mf(e,n|1),hn(e,bt()),!(Je&6)&&(Ls=bt()+500,dr()))}break;case 13:Pr(function(){var i=Pi(t,1);if(i!==null){var r=tn();Yn(i,t,1,r)}}),th(t,1)}};Ef=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=tn();Yn(e,t,134217728,n)}th(t,134217728)}};Pg=function(t){if(t.tag===13){var e=rr(t),n=Pi(t,e);if(n!==null){var i=tn();Yn(n,t,e,i)}th(t,e)}};Lg=function(){return rt};Dg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};zu=function(t,e,n){switch(e){case"input":if(Du(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(re(90));ug(i),Du(i,r)}}}break;case"textarea":fg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};_g=Kf;yg=Pr;var Ny={usingClientEntryPoint:!1,Events:[ja,as,ql,vg,xg,Kf]},qs={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Py={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Eg(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Gl=xo.inject(Py),oi=xo}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ih(e))throw Error(re(200));return Ay(t,e,null,n)};wn.createRoot=function(t,e){if(!ih(t))throw Error(re(299));var n=!1,i="",r=tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=eh(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,Ca(t.nodeType===8?t.parentNode:t),new nh(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Eg(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Pr(t)};wn.hydrate=function(t,e,n){if(!nc(e))throw Error(re(200));return ic(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!ih(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ev(e,null,t,1,n??null,r,!1,s,a),t[Ni]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tc(e)};wn.render=function(t,e,n){if(!nc(e))throw Error(re(200));return ic(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!nc(t))throw Error(re(40));return t._reactRootContainer?(Pr(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};wn.unstable_batchedUpdates=Kf;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return ic(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(t){console.error(t)}}nv(),ng.exports=wn;var Ly=ng.exports,Hp=Ly;Tu.createRoot=Hp.createRoot,Tu.hydrateRoot=Hp.hydrateRoot;function Dy(t=".reveal, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale",e=null){Ye.useEffect(()=>{let n;const i=()=>{document.querySelectorAll(`${t}.visible`).forEach(a=>{a.classList.remove("visible")});const s={threshold:.1,rootMargin:"0px 0px -30px 0px"};n=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),n.unobserve(o.target))})},s),document.querySelectorAll(t).forEach(a=>n.observe(a))},r=requestAnimationFrame(()=>{const s=setTimeout(i,60);return()=>clearTimeout(s)});return()=>{cancelAnimationFrame(r),n&&n.disconnect()}},[e])}/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=Ye.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Ye.createElement("svg",{ref:l,...Uy,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:iv("lucide",r),...o},[...a.map(([c,h])=>Ye.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(t,e)=>{const n=Ye.forwardRef(({className:i,...r},s)=>Ye.createElement(Fy,{ref:s,iconNode:e,className:iv(`lucide-${Iy(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=ot("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=ot("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ot("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=ot("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ot("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=ot("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=ot("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=ot("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=ot("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=ot("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=ot("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ot("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ot("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ot("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ot("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=ot("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ot("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=ot("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ot("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=ot("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=ot("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=ot("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ot("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=ot("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ot("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=ot("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),_d=""+new URL("orcodix-logo-C_qpu1SH.svg",import.meta.url).href;function Zy({currentPage:t,onNavigate:e,onPricingClick:n,onBookingClick:i}){const[r,s]=Ye.useState(!1),[a,o]=Ye.useState(!1);Ye.useEffect(()=>{const h=()=>o(window.scrollY>20);return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]),Ye.useEffect(()=>(document.body.style.overflow=r?"hidden":"",()=>{document.body.style.overflow=""}),[r]);const l=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"services",label:"Services"},{id:"portfolio",label:"Portfolio"},{id:"contact",label:"Contact"}],c=h=>{s(!1),e&&e(h)};return u.jsxs(u.Fragment,{children:[u.jsx("nav",{className:`nb-root${a?" nb-scrolled":""}`,role:"banner",children:u.jsxs("div",{className:"nb-inner",children:[u.jsx("a",{href:"#home",className:"nb-logo",onClick:h=>{h.preventDefault(),c("home")},"aria-label":"orcodix home",children:u.jsx("img",{src:_d,alt:"","aria-hidden":"true",className:"nb-logo-img"})}),u.jsx("div",{className:"nb-pill-nav",role:"navigation","aria-label":"Primary",children:l.map(h=>u.jsx("button",{className:`nb-link${t===h.id?" nb-link-active":""}`,onClick:()=>c(h.id),children:h.label},h.id))}),u.jsxs("div",{className:"nb-actions",children:[u.jsxs("span",{className:"nb-status",children:[u.jsx("span",{className:"nb-status-dot"}),"Accepting clients"]}),u.jsxs("button",{className:"nb-cta",onClick:i,children:[u.jsx(Oa,{size:14,strokeWidth:2.5}),"Book a Call"]}),u.jsxs("button",{className:`nb-burger${r?" nb-burger-open":""}`,onClick:()=>s(h=>!h),"aria-label":"Toggle menu","aria-expanded":r,children:[u.jsx("span",{className:"nb-bar"}),u.jsx("span",{className:"nb-bar"}),u.jsx("span",{className:"nb-bar"})]})]})]})}),u.jsx("div",{className:`nb-overlay${r?" nb-overlay-open":""}`,onClick:()=>s(!1),"aria-hidden":"true"}),u.jsxs("aside",{className:`nb-drawer${r?" nb-drawer-open":""}`,"aria-label":"Mobile navigation",children:[u.jsxs("div",{className:"nb-drawer-head",children:[u.jsxs("span",{className:"nb-logo",children:[u.jsx("img",{src:_d,alt:"","aria-hidden":"true",className:"nb-logo-img"}),u.jsxs("span",{className:"nb-logo-text",children:["orcodix",u.jsx("sup",{children:"®"})]})]}),u.jsx("button",{className:"nb-close",onClick:()=>s(!1),"aria-label":"Close menu",children:u.jsx(lc,{size:20,strokeWidth:2})})]}),u.jsx("nav",{className:"nb-drawer-nav",role:"navigation","aria-label":"Mobile",children:l.map((h,p)=>u.jsxs("button",{className:`nb-drawer-link${t===h.id?" nb-drawer-link-active":""}`,onClick:()=>c(h.id),style:{animationDelay:`${p*55}ms`},children:[u.jsx("span",{children:h.label}),u.jsx(rc,{size:18,strokeWidth:2,className:"nb-drawer-arrow"})]},h.id))}),u.jsxs("div",{className:"nb-drawer-foot",children:[u.jsx("p",{className:"nb-drawer-foot-text",children:"Ready to move fast on your next project?"}),u.jsxs("button",{className:"nb-cta nb-cta-full",onClick:()=>{s(!1),i&&i()},children:[u.jsx(Oa,{size:15,strokeWidth:2.5}),"Book Intro Call"]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="186",Jy=0,Vp=1,Qy=2,tl=1,eS=2,aa=3,lr=0,pn=1,Si=2,Ti=0,Es=1,Ll=2,Gp=3,Wp=4,tS=5,es=100,nS=101,iS=102,rS=103,sS=104,aS=200,oS=201,lS=202,cS=203,ov=204,lv=205,uS=206,dS=207,fS=208,hS=209,pS=210,mS=211,gS=212,vS=213,xS=214,yd=0,Sd=1,Md=2,ka=3,Ed=4,wd=5,bd=6,Td=7,cv=0,_S=1,yS=2,ci=0,uv=1,dv=2,fv=3,hv=4,pv=5,mv=6,gv=7,vv=300,Lr=301,Ds=302,Vc=303,Gc=304,cc=306,Ad=1e3,wi=1001,Cd=1002,zt=1003,SS=1004,_o=1005,Kt=1006,Wc=1007,Er=1008,Ln=1009,xv=1010,_v=1011,Ba=1012,ah=1013,ui=1014,si=1015,di=1016,oh=1017,lh=1018,za=1020,yv=35902,Sv=35899,Mv=1021,Ev=1022,Xn=1023,Di=1026,wr=1027,wv=1028,ch=1029,Dr=1030,uh=1031,dh=1033,nl=33776,il=33777,rl=33778,sl=33779,Rd=35840,Nd=35841,Pd=35842,Ld=35843,Dd=36196,Id=37492,Ud=37496,Fd=37488,Od=37489,Dl=37490,kd=37491,Bd=37808,zd=37809,Hd=37810,Vd=37811,Gd=37812,Wd=37813,jd=37814,Xd=37815,qd=37816,Yd=37817,$d=37818,Kd=37819,Zd=37820,Jd=37821,Qd=36492,ef=36494,tf=36495,nf=36283,rf=36284,Il=36285,sf=36286,MS=3200,jp=0,ES=1,$i="",Cn="srgb",Ul="srgb-linear",Fl="linear",it="srgb",jc=7680,wS=519,bS=512,TS=513,AS=514,fh=515,CS=516,RS=517,hh=518,NS=519,PS=35044,Xp="300 es",ai=2e3,Ol=2001;function LS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DS(){const t=kl("canvas");return t.style.display="block",t}const qp={};function Yp(...t){const e="THREE."+t.shift();console.log(e,...t)}function bv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=bv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=bv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ws(...t){const e=t.join(" ");e in qp||(qp[e]=!0,Le(...t))}function IS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const US={[yd]:Sd,[Md]:bd,[Ed]:Td,[ka]:wd,[Sd]:yd,[bd]:Md,[Td]:Ed,[wd]:ka};class Or{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,af=180/Math.PI;function Ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Ge(t,e,n){return Math.max(e,Math.min(n,t))}function FS(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function Ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xh=class xh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;let Ne=xh;class ks{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],E=s[a+3];if(p!==E||l!==f||c!==m||h!==v){let g=l*f+c*m+h*v+p*E;g<0&&(f=-f,m=-m,v=-v,E=-E,g=-g);let d=1-o;if(g<.9995){const x=Math.acos(g),M=Math.sin(x);d=Math.sin(d*x)/M,o=Math.sin(o*x)/M,l=l*d+f*o,c=c*d+m*o,h=h*d+v*o,p=p*d+E*o}else{l=l*d+f*o,c=c*d+m*o,h=h*d+v*o,p=p*d+E*o;const x=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=x,c*=x,h*=x,p*=x}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*p+l*m-c*f,e[n+1]=l*v+h*f+c*p-o*m,e[n+2]=c*v+h*m+o*f-l*p,e[n+3]=h*v-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"YXZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"ZXY":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"ZYX":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"YZX":this._x=f*h*p+c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p-f*m*v;break;case"XZY":this._x=f*h*p-c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p+f*m*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _h=class _h{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_h.prototype.isVector3=!0;let U=_h;const Yc=new U,$p=new ks,yh=class yh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],v=i[8],E=r[0],g=r[3],d=r[6],x=r[1],M=r[4],S=r[7],T=r[2],b=r[5],R=r[8];return s[0]=a*E+o*x+l*T,s[3]=a*g+o*M+l*b,s[6]=a*d+o*S+l*R,s[1]=c*E+h*x+p*T,s[4]=c*g+h*M+p*b,s[7]=c*d+h*S+p*R,s[2]=f*E+m*x+v*T,s[5]=f*g+m*M+v*b,s[8]=f*d+m*S+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,m=c*s-a*l,v=n*p+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=f*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,n)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,n){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yh.prototype.isMatrix3=!0;let Ie=yh;const $c=new Ie,Kp=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zp=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const t={enabled:!0,workingColorSpace:Ul,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?Fl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ul]:{primaries:e,whitePoint:i,transfer:Fl,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const Xe=OS();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class kS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=kl("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BS=0;class ph{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kc(r[a].image)):s.push(Kc(r[a]))}else s=Kc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let zS=0;const Zc=new U;class nn extends Or{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=wi,r=wi,s=Kt,a=Er,o=Xn,l=Ln,c=nn.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Ya(),this.name="",this.source=new ph(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=vv;nn.DEFAULT_ANISOTROPY=1;const Sh=class Sh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],v=l[9],E=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(m+1)/2,T=(d+1)/2,b=(h+f)/4,R=(p+E)/4,y=(v+g)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=b/i,s=R/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=y/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(p-E)*(p-E)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(p-E)/x,this.z=(f-h)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this.w=Ge(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this.w=Ge(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sh.prototype.isVector4=!0;let Et=Sh;class HS extends Or{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ph(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends HS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tv extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VS extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Hl=class Hl{constructor(e,n,i,r,s,a,o,l,c,h,p,f,m,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,f,m,v,E,g)}set(e,n,i,r,s,a,o,l,c,h,p,f,m,v,E,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=v,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,v=o*h,E=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+v*c,n[5]=f-E*c,n[9]=-o*l,n[2]=E-f*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,v=c*h,E=c*p;n[0]=f+E*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=E+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,v=c*h,E=c*p;n[0]=f-E*o,n[4]=-a*p,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=E-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,v=o*h,E=o*p;n[0]=l*h,n[4]=v*c-m,n[8]=f*c+E,n[1]=l*p,n[5]=E*c+f,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,E=o*c;n[0]=l*h,n[4]=E-f*p,n[8]=v*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*p+v,n[10]=f-E*p}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,E=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+E,n[5]=a*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=o*h,n[10]=E*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GS,e,WS)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),zi.crossVectors(i,vn),zi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),zi.crossVectors(i,vn)),zi.normalize(),yo.crossVectors(vn,zi),r[0]=zi.x,r[4]=yo.x,r[8]=vn.x,r[1]=zi.y,r[5]=yo.y,r[9]=vn.y,r[2]=zi.z,r[6]=yo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],v=i[2],E=i[6],g=i[10],d=i[14],x=i[3],M=i[7],S=i[11],T=i[15],b=r[0],R=r[4],y=r[8],A=r[12],N=r[1],F=r[5],V=r[9],X=r[13],I=r[2],G=r[6],Q=r[10],$=r[14],B=r[3],k=r[7],j=r[11],J=r[15];return s[0]=a*b+o*N+l*I+c*B,s[4]=a*R+o*F+l*G+c*k,s[8]=a*y+o*V+l*Q+c*j,s[12]=a*A+o*X+l*$+c*J,s[1]=h*b+p*N+f*I+m*B,s[5]=h*R+p*F+f*G+m*k,s[9]=h*y+p*V+f*Q+m*j,s[13]=h*A+p*X+f*$+m*J,s[2]=v*b+E*N+g*I+d*B,s[6]=v*R+E*F+g*G+d*k,s[10]=v*y+E*V+g*Q+d*j,s[14]=v*A+E*X+g*$+d*J,s[3]=x*b+M*N+S*I+T*B,s[7]=x*R+M*F+S*G+T*k,s[11]=x*y+M*V+S*Q+T*j,s[15]=x*A+M*X+S*$+T*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],v=e[3],E=e[7],g=e[11],d=e[15],x=l*m-c*f,M=o*m-c*p,S=o*f-l*p,T=a*m-c*h,b=a*f-l*h,R=a*p-o*h;return n*(E*x-g*M+d*S)-i*(v*x-g*T+d*b)+r*(v*M-E*T+d*R)-s*(v*S-E*b+g*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],v=e[12],E=e[13],g=e[14],d=e[15],x=n*o-i*a,M=n*l-r*a,S=n*c-s*a,T=i*l-r*o,b=i*c-s*o,R=r*c-s*l,y=h*E-p*v,A=h*g-f*v,N=h*d-m*v,F=p*g-f*E,V=p*d-m*E,X=f*d-m*g,I=x*X-M*V+S*F+T*N-b*A+R*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(o*X-l*V+c*F)*G,e[1]=(r*V-i*X-s*F)*G,e[2]=(E*R-g*b+d*T)*G,e[3]=(f*b-p*R-m*T)*G,e[4]=(l*N-a*X-c*A)*G,e[5]=(n*X-r*N+s*A)*G,e[6]=(g*S-v*R-d*M)*G,e[7]=(h*R-f*S+m*M)*G,e[8]=(a*V-o*N+c*y)*G,e[9]=(i*N-n*V-s*y)*G,e[10]=(v*b-E*S+d*x)*G,e[11]=(p*S-h*b-m*x)*G,e[12]=(o*A-a*F-l*y)*G,e[13]=(n*F-i*A+r*y)*G,e[14]=(E*M-v*T-g*x)*G,e[15]=(h*T-p*M+f*x)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,f=s*c,m=s*h,v=s*p,E=a*h,g=a*p,d=o*p,x=l*c,M=l*h,S=l*p,T=i.x,b=i.y,R=i.z;return r[0]=(1-(E+d))*T,r[1]=(m+S)*T,r[2]=(v-M)*T,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(f+d))*b,r[6]=(g+x)*b,r[7]=0,r[8]=(v+M)*R,r[9]=(g-x)*R,r[10]=(1-(f+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Bn.copy(this);const c=1/a,h=1/o,p=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=p,Bn.elements[9]*=p,Bn.elements[10]*=p,n.setFromRotationMatrix(Bn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ai,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===ai)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Ol)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ai,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===ai)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===Ol)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Hl.prototype.isMatrix4=!0;let yt=Hl;const Vr=new U,Bn=new yt,GS=new U(0,0,0),WS=new U(1,1,1),zi=new U,yo=new U,vn=new U,Jp=new yt,Qp=new ks;class Ir{constructor(e=0,n=0,i=0,r=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jS=0;const em=new U,Gr=new ks,hi=new yt,So=new U,$s=new U,XS=new U,qS=new ks,tm=new U(1,0,0),nm=new U(0,1,0),im=new U(0,0,1),rm={type:"added"},YS={type:"removed"},Wr={type:"childadded",child:null},Jc={type:"childremoved",child:null};class mn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new U,n=new Ir,i=new ks,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ie}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt($s,So,this.up):hi.lookAt(So,$s,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(hi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YS),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,XS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,qS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}mn.DEFAULT_UP=new U(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hs extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $S={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),d=this._getHandJoint(c,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($S)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=FS(e,1),n=Ge(n,0,1),i=Ge(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=eu(a,s,e+1/3),this.g=eu(a,s,e),this.b=eu(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=Av[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Xe.workingToColorSpace(Yt.copy(this),e),Math.round(Ge(Yt.r*255,0,255))*65536+Math.round(Ge(Yt.g*255,0,255))*256+Math.round(Ge(Yt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Cn){Xe.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Mo);const i=qc(Hi.h,Mo.h,n),r=qc(Hi.s,Mo.s,n),s=qc(Hi.l,Mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new $e;$e.NAMES=Av;class KS extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zn=new U,pi=new U,tu=new U,mi=new U,jr=new U,Xr=new U,sm=new U,nu=new U,iu=new U,ru=new U,su=new Et,au=new Et,ou=new Et;class jn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),pi.subVectors(i,n),tu.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(pi),l=zn.dot(tu),c=pi.dot(pi),h=pi.dot(tu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return su.setScalar(0),au.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(e,n),au.fromBufferAttribute(e,i),ou.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(su,s.x),a.addScaledVector(au,s.y),a.addScaledVector(ou,s.z),a}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),pi.subVectors(e,n),zn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Xr.subVectors(s,i),nu.subVectors(e,i);const l=jr.dot(nu),c=Xr.dot(nu);if(l<=0&&c<=0)return n.copy(i);iu.subVectors(e,r);const h=jr.dot(iu),p=Xr.dot(iu);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(jr,a);ru.subVectors(e,s);const m=jr.dot(ru),v=Xr.dot(ru);if(v>=0&&m<=v)return n.copy(s);const E=m*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Xr,o);const g=h*v-m*p;if(g<=0&&p-h>=0&&m-v>=0)return sm.subVectors(s,r),o=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(sm,o);const d=1/(g+E+f);return a=E*d,o=f*d,n.copy(i).addScaledVector(jr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $a{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),wo.subVectors(this.max,Ks),qr.subVectors(e.a,Ks),Yr.subVectors(e.b,Ks),$r.subVectors(e.c,Ks),Vi.subVectors(Yr,qr),Gi.subVectors($r,Yr),hr.subVectors(qr,$r);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-hr.z,hr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,hr.z,0,-hr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-hr.y,hr.x,0];return!lu(n,qr,Yr,$r,wo)||(n=[1,0,0,0,1,0,0,0,1],!lu(n,qr,Yr,$r,wo))?!1:(bo.crossVectors(Vi,Gi),n=[bo.x,bo.y,bo.z],lu(n,qr,Yr,$r,wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new U,new U,new U,new U,new U,new U,new U,new U],Hn=new U,Eo=new $a,qr=new U,Yr=new U,$r=new U,Vi=new U,Gi=new U,hr=new U,Ks=new U,wo=new U,bo=new U,pr=new U;function lu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){pr.fromArray(t,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),h=i.dot(pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ct=new U,To=new Ne;let ZS=0;class Ci extends Or{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=PS,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)To.fromBufferAttribute(this,n),To.applyMatrix3(e),this.setXY(n,To.x,To.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Cv extends Ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Rv extends Ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class rn extends Ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}const JS=new $a,Zs=new U,cu=new U;class uc{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(cu)),this.expandByPoint(Zs.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let QS=0;const An=new yt,uu=new mn,Kr=new U,xn=new $a,Js=new $a,Ft=new U;class En extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LS(e)?Rv:Cv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(xn.min,Js.min),xn.expandByPoint(Ft),Ft.addVectors(xn.max,Js.max),xn.expandByPoint(Ft)):(xn.expandByPoint(Js.min),xn.expandByPoint(Js.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Kr.fromBufferAttribute(e,c),Ft.add(Kr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new U,l[y]=new U;const c=new U,h=new U,p=new U,f=new Ne,m=new Ne,v=new Ne,E=new U,g=new U;function d(y,A,N){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,N),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,N),h.sub(c),p.sub(c),m.sub(f),v.sub(f);const F=1/(m.x*v.y-v.x*m.y);isFinite(F)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(F),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(F),o[y].add(E),o[A].add(E),o[N].add(E),l[y].add(g),l[A].add(g),l[N].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,A=x.length;y<A;++y){const N=x[y],F=N.start,V=N.count;for(let X=F,I=F+V;X<I;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new U,S=new U,T=new U,b=new U;function R(y){T.fromBufferAttribute(r,y),b.copy(T);const A=o[y];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(b,A);const F=S.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,F)}for(let y=0,A=x.length;y<A;++y){const N=x[y],F=N.start,V=N.count;for(let X=F,I=F+V;X<I;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),E=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*h;for(let d=0;d<h;d++)f[v++]=c[m++]}return new Ci(f,h,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const du=new U,eM=new U,tM=new Ie;class yi{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=du.subVectors(i,n).cross(eM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(du),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tM.getNormalMatrix(e),r=this.coplanarPoint(du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let nM=0;class Ka extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=Es,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ov,this.blendDst=lv,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jc,this.stencilZFail=jc,this.stencilZPass=jc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new U,fu=new U,Ao=new U,Co=new U;class gh{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fu.copy(e).add(n).multiplyScalar(.5),Ao.copy(n).sub(e).normalize(),Co.copy(this.origin).sub(fu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ao),o=Co.dot(this.direction),l=-Co.dot(Ao),c=Co.lengthSq(),h=Math.abs(1-a*a);let p,f,m,v;if(h>0)if(p=a*l-o,f=a*o-l,v=s*h,p>=0)if(f>=-v)if(f<=v){const E=1/h;p*=E,f*=E,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(fu).addScaledVector(Ao,f),m}intersectSphere(e,n){if(e.radius<0)return null;vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,v=n.x-a.x,E=n.y-a.y,g=n.z-a.z,d=i.x-a.x,x=i.y-a.y,M=i.z-a.z,S=Math.abs(l),T=Math.abs(c),b=Math.abs(h);let R,y,A,N,F,V,X,I,G,Q,$,B;if(S>=T&&S>=b?(A=l,V=p,G=v,B=d,l>=0?(R=c,y=h,N=f,F=m,X=E,I=g,Q=x,$=M):(R=h,y=c,N=m,F=f,X=g,I=E,Q=M,$=x)):T>=b?(A=c,V=f,G=E,B=x,c>=0?(R=h,y=l,N=m,F=p,X=g,I=v,Q=M,$=d):(R=l,y=h,N=p,F=m,X=v,I=g,Q=d,$=M)):(A=h,V=m,G=g,B=M,h>=0?(R=l,y=c,N=p,F=f,X=v,I=E,Q=d,$=x):(R=c,y=l,N=f,F=p,X=E,I=v,Q=x,$=d)),A===0)return null;const k=R/A,j=y/A,J=1/A,me=N-k*V,we=F-j*V,qe=X-k*G,Be=I-j*G,ke=Q-k*B,Y=$-j*B,ne=ke*Be-Y*qe,Se=me*Y-we*ke,De=qe*we-Be*me;if(r){if(ne<0||Se<0||De<0)return null}else if((ne<0||Se<0||De<0)&&(ne>0||Se>0||De>0))return null;const xe=ne+Se+De;if(xe===0)return null;const ze=J*(ne*V+Se*G+De*B);return(xe>0?ze<0:ze>0)?null:this.at(ze/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nv extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const am=new yt,mr=new gh,Ro=new uc,om=new U,No=new U,Po=new U,Lo=new U,hu=new U,Do=new U,lm=new U,Io=new U;class fi extends mn{constructor(e=new En,n=new Nv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Do.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(hu.fromBufferAttribute(p,e),a?Do.addScaledVector(hu,h):Do.addScaledVector(hu.sub(n),h))}n.add(Do)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Ro.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ro,om)===null||mr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(am.copy(s).invert(),mr.copy(e.ray).applyMatrix4(am),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,T=M;S<T;S+=3){const b=o.getX(S),R=o.getX(S+1),y=o.getX(S+2);r=Uo(this,d,e,i,c,h,p,b,R,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let g=v,d=E;g<d;g+=3){const x=o.getX(g),M=o.getX(g+1),S=o.getX(g+2);r=Uo(this,a,e,i,c,h,p,x,M,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),M=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,T=M;S<T;S+=3){const b=S,R=S+1,y=S+2;r=Uo(this,d,e,i,c,h,p,b,R,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let g=v,d=E;g<d;g+=3){const x=g,M=g+1,S=g+2;r=Uo(this,a,e,i,c,h,p,x,M,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function iM(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;Io.copy(o),Io.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Io);return c<n.near||c>n.far?null:{distance:c,point:Io.clone(),object:t}}function Uo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,No),t.getVertexPosition(l,Po),t.getVertexPosition(c,Lo);const h=iM(t,e,n,i,No,Po,Lo,lm);if(h){const p=new U;jn.getBarycoord(lm,No,Po,Lo,p),r&&(h.uv=jn.getInterpolatedAttribute(r,o,l,c,p,new Ne)),s&&(h.uv1=jn.getInterpolatedAttribute(s,o,l,c,p,new Ne)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,l,c,p,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};jn.getNormal(No,Po,Lo,f.normal),h.face=f,h.barycoord=p}return h}class rM extends nn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=zt,h=zt,p,f){super(null,a,o,l,c,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gr=new uc,sM=new Ne(.5,.5),Fo=new U;class Pv{constructor(e=new yi,n=new yi,i=new yi,r=new yi,s=new yi,a=new yi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],f=s[6],m=s[7],v=s[8],E=s[9],g=s[10],d=s[11],x=s[12],M=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-a,m-h,d-v,T-x).normalize(),r[1].setComponents(c+a,m+h,d+v,T+x).normalize(),r[2].setComponents(c+o,m+p,d+E,T+M).normalize(),r[3].setComponents(c-o,m-p,d-E,T-M).normalize(),i)r[4].setComponents(l,f,g,S).normalize(),r[5].setComponents(c-l,m-f,d-g,T-S).normalize();else if(r[4].setComponents(c-l,m-f,d-g,T-S).normalize(),n===ai)r[5].setComponents(c+l,m+f,d+g,T+S).normalize();else if(n===Ol)r[5].setComponents(l,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const n=sM.distanceTo(e.center);return gr.radius=.7071067811865476+n,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class aM extends Ka{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bl=new U,zl=new U,cm=new yt,Qs=new gh,Oo=new uc,pu=new U,um=new U;class Lv extends mn{constructor(e=new En,n=new aM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Bl.fromBufferAttribute(n,r-1),zl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Bl.distanceTo(zl);e.setAttribute("lineDistance",new rn(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;cm.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(cm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let E=m,g=v-1;E<g;E+=c){const d=h.getX(E),x=h.getX(E+1),M=ko(this,e,Qs,l,d,x,E);M&&n.push(M)}if(this.isLineLoop){const E=h.getX(v-1),g=h.getX(m),d=ko(this,e,Qs,l,E,g,v-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let E=m,g=v-1;E<g;E+=c){const d=ko(this,e,Qs,l,E,E+1,E);d&&n.push(d)}if(this.isLineLoop){const E=ko(this,e,Qs,l,v-1,m,v-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ko(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Bl.fromBufferAttribute(o,r),zl.fromBufferAttribute(o,s),n.distanceSqToSegment(Bl,zl,pu,um)>i)return;pu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(pu);if(!(c<e.near||c>e.far))return{distance:c,point:um.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class oM extends Lv{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Dv extends nn{constructor(e=[],n=Lr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ha extends nn{constructor(e,n,i=ui,r,s,a,o=zt,l=zt,c,h=Di,p=1){if(h!==Di&&h!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ph(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class lM extends Ha{constructor(e,n=ui,i=Lr,r,s,a=zt,o=zt,l,c=Di){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Iv extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends En{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(p,2));function v(E,g,d,x,M,S,T,b,R,y,A){const N=S/R,F=T/y,V=S/2,X=T/2,I=b/2,G=R+1,Q=y+1;let $=0,B=0;const k=new U;for(let j=0;j<Q;j++){const J=j*F-X;for(let me=0;me<G;me++){const we=me*N-V;k[E]=we*x,k[g]=J*M,k[d]=I,c.push(k.x,k.y,k.z),k[E]=0,k[g]=0,k[d]=b>0?1:-1,h.push(k.x,k.y,k.z),p.push(me/R),p.push(1-j/y),$+=1}}for(let j=0;j<y;j++)for(let J=0;J<R;J++){const me=f+J+G*j,we=f+J+G*(j+1),qe=f+(J+1)+G*(j+1),Be=f+(J+1)+G*j;l.push(me,we,Be),l.push(we,qe,Be),B+=6}o.addGroup(m,B,A),m+=B,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,m=(a-h)/f;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new Ne:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new U,r=[],s=[],a=[],o=new U,l=new yt;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Ge(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Ge(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Uv extends Ui{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new Ne){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*p+this.aX,c=f*p+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cM extends Uv{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vh(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,p){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;f*=h,m*=h,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const dm=new U,fm=new U,mu=new vh,gu=new vh,vu=new vh;class oa extends Ui{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(fm.subVectors(r[0],r[1]).add(r[0]),c=fm);const p=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(dm.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=dm),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(p),m),E=Math.pow(p.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(h),m);E<1e-4&&(E=1),v<1e-4&&(v=E),g<1e-4&&(g=E),mu.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,v,E,g),gu.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,v,E,g),vu.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,v,E,g)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),gu.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),vu.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return i.set(mu.calc(l),gu.calc(l),vu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hm(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function uM(t,e){const n=1-t;return n*n*e}function dM(t,e){return 2*(1-t)*t*e}function fM(t,e){return t*t*e}function xa(t,e,n,i){return uM(t,e)+dM(t,n)+fM(t,i)}function hM(t,e){const n=1-t;return n*n*n*e}function pM(t,e){const n=1-t;return 3*n*n*t*e}function mM(t,e){return 3*(1-t)*t*t*e}function gM(t,e){return t*t*t*e}function _a(t,e,n,i,r){return hM(t,e)+pM(t,n)+mM(t,i)+gM(t,r)}class vM extends Ui{constructor(e=new Ne,n=new Ne,i=new Ne,r=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ne){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(_a(e,r.x,s.x,a.x,o.x),_a(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xM extends Ui{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(_a(e,r.x,s.x,a.x,o.x),_a(e,r.y,s.y,a.y,o.y),_a(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _M extends Ui{constructor(e=new Ne,n=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ne){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ne){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yM extends Ui{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SM extends Ui{constructor(e=new Ne,n=new Ne,i=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ne){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(xa(e,r.x,s.x,a.x),xa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fv extends Ui{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(xa(e,r.x,s.x,a.x),xa(e,r.y,s.y,a.y),xa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MM extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ne){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(hm(o,l.x,c.x,h.x,p.x),hm(o,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ne().fromArray(r))}return this}}var EM=Object.freeze({__proto__:null,ArcCurve:cM,CatmullRomCurve3:oa,CubicBezierCurve:vM,CubicBezierCurve3:xM,EllipseCurve:Uv,LineCurve:_M,LineCurve3:yM,QuadraticBezierCurve:SM,QuadraticBezierCurve3:Fv,SplineCurve:MM});class dc extends En{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=n/l,m=[],v=[],E=[],g=[];for(let d=0;d<h;d++){const x=d*f-a;for(let M=0;M<c;M++){const S=M*p-s;v.push(S,-x,0),E.push(0,0,1),g.push(M/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const M=x+c*d,S=x+c*(d+1),T=x+1+c*(d+1),b=x+1+c*d;m.push(M,S,b),m.push(S,T,b)}this.setIndex(m),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(E,3)),this.setAttribute("uv",new rn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ps extends En{constructor(e=new Fv(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,l=new U,c=new Ne;let h=new U;const p=[],f=[],m=[],v=[];E(),this.setIndex(v),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(f,3)),this.setAttribute("uv",new rn(m,2));function E(){for(let M=0;M<n;M++)g(M);g(s===!1?n:0),x(),d()}function g(M){h=e.getPointAt(M/n,h);const S=a.normals[M],T=a.binormals[M];for(let b=0;b<=r;b++){const R=b/r*Math.PI*2,y=Math.sin(R),A=-Math.cos(R);l.x=A*S.x+y*T.x,l.y=A*S.y+y*T.y,l.z=A*S.z+y*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let M=1;M<=n;M++)for(let S=1;S<=r;S++){const T=(r+1)*(M-1)+(S-1),b=(r+1)*M+(S-1),R=(r+1)*M+S,y=(r+1)*(M-1)+S;v.push(T,b,y),v.push(b,R,y)}}function x(){for(let M=0;M<=n;M++)for(let S=0;S<=r;S++)c.x=M/n,c.y=S/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ps(new EM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(pm(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(pm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Is(t[n]);for(const r in i)e[r]=i[r]}return e}function pm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function wM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ov(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const bM={clone:Is,merge:Qt};var TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new U().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class CM extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class RM extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NM extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bo=new U,zo=new ks,ei=new U;class kv extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,zo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Bo,zo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new U,mm=new Ne,gm=new Ne;class Pn extends kv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=af*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return af*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,mm,gm),n.subVectors(gm,mm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Bv extends kv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zr=-90,Jr=1;class PM extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Zr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Zr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new Pn(Zr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new Pn(Zr,Jr,e,n);o.layers=this.layers,this.add(o);const l=new Pn(Zr,Jr,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Zr,Jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class LM extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vm=new yt;class DM{constructor(e,n,i=0,r=1/0){this.ray=new gh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new mh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ze("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return vm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vm),this}intersectObject(e,n=!0,i=[]){return of(e,this,i,n),i.sort(xm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)of(e[r],this,i,n);return i.sort(xm),i}}function xm(t,e){return t.distance-e.distance}function of(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)of(s[a],e,n,!0)}}class IM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Mh=class Mh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Mh.prototype.isMatrix2=!0;let _m=Mh;function ym(t,e,n,i){const r=UM(i);switch(n){case Mv:return t*e;case wv:return t*e/r.components*r.byteLength;case ch:return t*e/r.components*r.byteLength;case Dr:return t*e*2/r.components*r.byteLength;case uh:return t*e*2/r.components*r.byteLength;case Ev:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case dh:return t*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Ld:return Math.max(t,16)*Math.max(e,8)/4;case Rd:case Pd:return Math.max(t,8)*Math.max(e,8)/2;case Dd:case Id:case Fd:case Od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ud:case Dl:case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qd:case ef:case tf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Il:case sf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UM(t){switch(t){case Ln:case xv:return{byteLength:1,components:1};case Ba:case _v:case di:return{byteLength:2,components:1};case oh:case lh:return{byteLength:2,components:4};case ui:case ah:case si:return{byteLength:4,components:1};case yv:case Sv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zv(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function FM(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],E=p[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,p[f]=E)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const E=p[m];t.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,b1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,R1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ME=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:OM,alphahash_pars_fragment:kM,alphamap_fragment:BM,alphamap_pars_fragment:zM,alphatest_fragment:HM,alphatest_pars_fragment:VM,aomap_fragment:GM,aomap_pars_fragment:WM,batching_pars_vertex:jM,batching_vertex:XM,begin_vertex:qM,beginnormal_vertex:YM,bsdfs:$M,iridescence_fragment:KM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:JM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:a1,cube_uv_reflection_fragment:o1,defaultnormal_vertex:l1,displacementmap_pars_vertex:c1,displacementmap_vertex:u1,emissivemap_fragment:d1,emissivemap_pars_fragment:f1,colorspace_fragment:h1,colorspace_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:v1,envmap_pars_vertex:x1,envmap_physical_pars_fragment:R1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:S1,fog_fragment:M1,fog_pars_fragment:E1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:b1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:A1,lights_pars_begin:C1,lights_toon_fragment:N1,lights_toon_pars_fragment:P1,lights_phong_fragment:L1,lights_phong_pars_fragment:D1,lights_physical_fragment:I1,lights_physical_pars_fragment:U1,lights_fragment_begin:F1,lights_fragment_maps:O1,lights_fragment_end:k1,lightprobes_pars_fragment:B1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:V1,logdepthbuf_vertex:G1,map_fragment:W1,map_pars_fragment:j1,map_particle_fragment:X1,map_particle_pars_fragment:q1,metalnessmap_fragment:Y1,metalnessmap_pars_fragment:$1,morphinstance_vertex:K1,morphcolor_vertex:Z1,morphnormal_vertex:J1,morphtarget_pars_vertex:Q1,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:dE,packing:fE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:yE,shadowmap_vertex:SE,shadowmask_pars_fragment:ME,skinbase_vertex:EE,skinning_pars_vertex:wE,skinning_vertex:bE,skinnormal_vertex:TE,specularmap_fragment:AE,specularmap_pars_fragment:CE,tonemapping_fragment:RE,tonemapping_pars_fragment:NE,transmission_fragment:PE,transmission_pars_fragment:LE,uv_pars_fragment:DE,uv_pars_vertex:IE,uv_vertex:UE,worldpos_vertex:FE,background_vert:OE,background_frag:kE,backgroundCube_vert:BE,backgroundCube_frag:zE,cube_vert:HE,cube_frag:VE,depth_vert:GE,depth_frag:WE,distance_vert:jE,distance_frag:XE,equirect_vert:qE,equirect_frag:YE,linedashed_vert:$E,linedashed_frag:KE,meshbasic_vert:ZE,meshbasic_frag:JE,meshlambert_vert:QE,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:aw,meshphysical_vert:ow,meshphysical_frag:lw,meshtoon_vert:cw,meshtoon_frag:uw,points_vert:dw,points_frag:fw,shadow_vert:hw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},fe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ii={basic:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Qt([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Qt([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Qt([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Qt([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Qt([fe.lights,fe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ii.physical={uniforms:Qt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ho={r:0,b:0,g:0},vw=new yt,Hv=new Ie;Hv.set(-1,0,0,0,1,0,0,0,1);function xw(t,e,n,i,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,h=null,p=0,f=null;function m(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=e.get(M,S)}return M}function v(x){let M=!1;const S=m(x);S===null?g(a,o):S&&S.isColor&&(g(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(x,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===cc)?(c===void 0&&(c=new fi(new Za(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Is(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vw.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hv),c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==it,(h!==S||p!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new fi(new dc(2,2),new gn({name:"BackgroundMaterial",uniforms:Is(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){x.getRGB(Ho,Ov(t)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,M,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:v,addToRenderList:E,dispose:d}}function _w(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(F,V,X,I,G){let Q=!1;const $=p(F,I,X,V);s!==$&&(s=$,c(s.object)),Q=m(F,I,X,G),Q&&v(F,I,X,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(F,V,X,I),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(F){return t.bindVertexArray(F)}function h(F){return t.deleteVertexArray(F)}function p(F,V,X,I){const G=I.wireframe===!0;let Q=i[V.id];Q===void 0&&(Q={},i[V.id]=Q);const $=F.isInstancedMesh===!0?F.id:0;let B=Q[$];B===void 0&&(B={},Q[$]=B);let k=B[X.id];k===void 0&&(k={},B[X.id]=k);let j=k[G];return j===void 0&&(j=f(l()),k[G]=j),j}function f(F){const V=[],X=[],I=[];for(let G=0;G<n;G++)V[G]=0,X[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:I,object:F,attributes:{},index:null}}function m(F,V,X,I){const G=s.attributes,Q=V.attributes;let $=0;const B=X.getAttributes();for(const k in B)if(B[k].location>=0){const J=G[k];let me=Q[k];if(me===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),J===void 0||J.attribute!==me||me&&J.data!==me.data)return!0;$++}return s.attributesNum!==$||s.index!==I}function v(F,V,X,I){const G={},Q=V.attributes;let $=0;const B=X.getAttributes();for(const k in B)if(B[k].location>=0){let J=Q[k];J===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(J=F.instanceColor));const me={};me.attribute=J,J&&J.data&&(me.data=J.data),G[k]=me,$++}s.attributes=G,s.attributesNum=$,s.index=I}function E(){const F=s.newAttributes;for(let V=0,X=F.length;V<X;V++)F[V]=0}function g(F){d(F,0)}function d(F,V){const X=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;X[F]=1,I[F]===0&&(t.enableVertexAttribArray(F),I[F]=1),G[F]!==V&&(t.vertexAttribDivisor(F,V),G[F]=V)}function x(){const F=s.newAttributes,V=s.enabledAttributes;for(let X=0,I=V.length;X<I;X++)V[X]!==F[X]&&(t.disableVertexAttribArray(X),V[X]=0)}function M(F,V,X,I,G,Q,$){$===!0?t.vertexAttribIPointer(F,V,X,G,Q):t.vertexAttribPointer(F,V,X,I,G,Q)}function S(F,V,X,I){E();const G=I.attributes,Q=X.getAttributes(),$=V.defaultAttributeValues;for(const B in Q){const k=Q[B];if(k.location>=0){let j=G[B];if(j===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const J=j.normalized,me=j.itemSize,we=e.get(j);if(we===void 0)continue;const qe=we.buffer,Be=we.type,ke=we.bytesPerElement,Y=Be===t.INT||Be===t.UNSIGNED_INT||j.gpuType===ah;if(j.isInterleavedBufferAttribute){const ne=j.data,Se=ne.stride,De=j.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<k.locationSize;xe++)d(k.location+xe,ne.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<k.locationSize;xe++)g(k.location+xe);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let xe=0;xe<k.locationSize;xe++)M(k.location+xe,me/k.locationSize,Be,J,Se*ke,(De+me/k.locationSize*xe)*ke,Y)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)d(k.location+ne,j.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<k.locationSize;ne++)g(k.location+ne);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let ne=0;ne<k.locationSize;ne++)M(k.location+ne,me/k.locationSize,Be,J,me*ke,me/k.locationSize*ne*ke,Y)}}else if($!==void 0){const J=$[B];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(k.location,J);break;case 3:t.vertexAttrib3fv(k.location,J);break;case 4:t.vertexAttrib4fv(k.location,J);break;default:t.vertexAttrib1fv(k.location,J)}}}}x()}function T(){A();for(const F in i){const V=i[F];for(const X in V){const I=V[X];for(const G in I){const Q=I[G];for(const $ in Q)h(Q[$].object),delete Q[$];delete I[G]}}delete i[F]}}function b(F){if(i[F.id]===void 0)return;const V=i[F.id];for(const X in V){const I=V[X];for(const G in I){const Q=I[G];for(const $ in Q)h(Q[$].object),delete Q[$];delete I[G]}}delete i[F.id]}function R(F){for(const V in i){const X=i[V];for(const I in X){const G=X[I];if(G[F.id]===void 0)continue;const Q=G[F.id];for(const $ in Q)h(Q[$].object),delete Q[$];delete G[F.id]}}}function y(F){for(const V in i){const X=i[V],I=F.isInstancedMesh===!0?F.id:0,G=X[I];if(G!==void 0){for(const Q in G){const $=G[Q];for(const B in $)h($[B].object),delete $[B];delete G[Q]}delete X[I],Object.keys(X).length===0&&delete i[V]}}}function A(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:x}}function yw(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Sw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Xn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ln&&R!==si&&!y&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:b}}function Mw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new yi,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{const x=s?0:i,M=x*4;let S=d.clippingState||null;l.value=S,S=h(v,f,M,m);for(let T=0;T!==M;++T)S[T]=n[T];d.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,v){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const d=m+E*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,S=m;M!==E;++M,S+=4)a.copy(p[M]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const ms=4,Ew=6,ww=20,bw=256,ea=new Bv,Sm=new $e;let xu=null,_u=0,yu=0,Su=!1;const Tw=new U,vr=new U;class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Tw}=s;xu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,_u,yu),this._renderer.xr.enabled=Su,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Lr||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:di,format:Xn,colorSpace:Ul,depthBuffer:!1},r=Em(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Aw(s)),this._blurMaterial=Rw(s,e,n),this._ggxMaterial=Cw(s,e,n)}return r}_compileMaterial(e){const n=new fi(new En,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(Sm),p.toneMapping=ci,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new Za,new Nv({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let d=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(Sm),d=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;Qr(r,S*T,M>2?T:0,T,T),p.setRenderTarget(r),d&&p.render(E,l),p.render(e,l)}p.toneMapping=m,p.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Lr||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),f=c*1.25,m=p*f,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-ms?i-v+ms:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,Qr(s,g,d,3*E,2*E),r.setRenderTarget(s),r.render(o,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Qr(e,g,d,3*E,2*E),r.setRenderTarget(e),r.render(o,ea)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-ms?r-this._lodMax+ms:0),f=4*(this._cubeSize-h);Qr(n,p,f,3*h,2*h),a.setRenderTarget(n),a.render(l,ea)}}function Aw(t){const e=[],n=[];let i=t;const r=t-ms+1+Ew;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,f=6,m=3,v=new Float32Array(m*f*p),E=new Float32Array(m*f*p);for(let d=0;d<p;d++){const x=d%3*2/3-1,M=d>2?0:-1,S=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];v.set(S,m*f*d);for(let T=0;T<f;T++){const b=h[T*2]*2-1,R=h[T*2+1]*2-1;d===0?vr.set(1,R,b):d===1?vr.set(-b,1,-R):d===2?vr.set(-b,R,1):d===3?vr.set(-1,R,-b):d===4?vr.set(-b,-1,R):vr.set(b,R,-1),vr.toArray(E,(d*f+T)*m)}}const g=new En;g.setAttribute("position",new Ci(v,m)),g.setAttribute("outputDirection",new Ci(E,m)),n.push(new fi(g,null)),i>ms&&i--}return{lodMeshes:n,sizeLods:e}}function Em(t,e,n){const i=new $n(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Cw(t,e,n){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Rw(t,e,n){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:ww,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function wm(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bm(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Vv extends $n{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new fi(r,s),o=n.minFilter;return n.minFilter===Er&&(n.minFilter=Kt),new PM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Nw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Vc||m===Gc)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const E=new Vv(v.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,v=m===Vc||m===Gc,E=m===Lr||m===Ds;if(v||E){let g=n.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Mm(t)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return v&&x&&x.height>0||E&&x&&l(x)?(i===null&&(i=new Mm(t)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,m){return m===Vc?f.mapping=Lr:m===Gc&&(f.mapping=Ds),f}function l(f){let m=0;const v=6;for(let E=0;E<v;E++)f[E]!==void 0&&m++;return m===v}function c(f){const m=f.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Pw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ws("WebGLRenderer: "+i+" extension not supported."),r}}}function Lw(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function c(p){const f=[],m=p.index,v=p.attributes.position;let E=0;if(v===void 0)return;if(m!==null){const x=m.array;E=m.version;for(let M=0,S=x.length;M<S;M+=3){const T=x[M+0],b=x[M+1],R=x[M+2];f.push(T,b,b,R,R,T)}}else{const x=v.array;E=v.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const T=M+0,b=M+1,R=M+2;f.push(T,b,b,R,R,T)}}const g=new(v.count>=65535?Rv:Cv)(f,1);g.version=E;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Dw(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function c(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let E=0;for(let g=0;g<m;g++)E+=f[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Iw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Uw(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),E===!0&&(M=3);let S=o.attributes.position.count*M,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*T*4*p),R=new Tv(b,S,T,p);R.type=si,R.needsUpdate=!0;const y=M*4;for(let N=0;N<p;N++){const F=g[N],V=d[N],X=x[N],I=S*T*4*N;for(let G=0;G<F.count;G++){const Q=G*y;m===!0&&(r.fromBufferAttribute(F,G),b[I+Q+0]=r.x,b[I+Q+1]=r.y,b[I+Q+2]=r.z,b[I+Q+3]=0),v===!0&&(r.fromBufferAttribute(V,G),b[I+Q+4]=r.x,b[I+Q+5]=r.y,b[I+Q+6]=r.z,b[I+Q+7]=0),E===!0&&(r.fromBufferAttribute(X,G),b[I+Q+8]=r.x,b[I+Q+9]=r.y,b[I+Q+10]=r.z,b[I+Q+11]=X.itemSize===4?r.w:1)}}f={count:p,texture:R,size:new Ne(S,T)},i.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let E=0;E<c.length;E++)m+=c[E];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Fw(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,p=c.geometry,f=e.get(c,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const Ow={[uv]:"LINEAR_TONE_MAPPING",[dv]:"REINHARD_TONE_MAPPING",[fv]:"CINEON_TONE_MAPPING",[hv]:"ACES_FILMIC_TONE_MAPPING",[mv]:"AGX_TONE_MAPPING",[gv]:"NEUTRAL_TONE_MAPPING",[pv]:"CUSTOM_TONE_MAPPING"};function kw(t,e,n,i,r,s){const a=new $n(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new En;c.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new rn([0,2,0,0,2,0],2));const h=new CM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new fi(c,h),f=new Bv(-1,1,1,-1,0,1);let m=null,v=null,E=!1,g,d=null,x=[],M=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),l!==null&&l.setSize(S,T);for(let b=0;b<x.length;b++){const R=x[b];R.setSize&&R.setSize(S,T)}},this.setEffects=function(S){x=S,M=x.length>0&&x[0].isRenderPass===!0;const T=a.width,b=a.height;x.length>0&&o===null&&(o=new $n(T,b,{type:di,depthBuffer:!1,stencilBuffer:!1}),l=new $n(T,b,{type:di,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){const y=x[R];y.setSize&&y.setSize(T,b)}},this.begin=function(S,T){if(E||S.toneMapping===ci&&x.length===0)return!1;if(d=T,T!==null){const b=T.width,R=T.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return M===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=ci,!0},this.hasRenderPass=function(){return M},this.end=function(S,T){S.toneMapping=g,E=!0;let b=a,R=o;for(let y=0;y<x.length;y++){const A=x[y];A.enabled!==!1&&(A.render(S,R,b,T),A.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(m!==S.outputColorSpace||v!==S.toneMapping){m=S.outputColorSpace,v=S.toneMapping,h.defines={},Xe.getTransfer(m)===it&&(h.defines.SRGB_TRANSFER="");const y=Ow[v];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(d),S.render(p,f),d=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Gv=new nn,lf=new Ha(1,1),Wv=new Tv,jv=new VS,Xv=new Dv,Tm=[],Am=[],Cm=new Float32Array(16),Rm=new Float32Array(9),Nm=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tm[r];if(s===void 0&&(s=new Float32Array(r),Tm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Bw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function Gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Nm.set(i),t.uniformMatrix2fv(this.addr,!1,Nm),It(n,i)}}function Ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Rm.set(i),t.uniformMatrix3fv(this.addr,!1,Rm),It(n,i)}}function jw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Cm.set(i),t.uniformMatrix4fv(this.addr,!1,Cm),It(n,i)}}function Xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function Kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(lf.compareFunction=n.isReversedDepthBuffer()?hh:fh,s=lf):s=Gv,n.setTexture2D(e||s,r)}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||jv,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xv,r)}function ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wv,r)}function rb(t){switch(t){case 5126:return Bw;case 35664:return zw;case 35665:return Hw;case 35666:return Vw;case 35674:return Gw;case 35675:return Ww;case 35676:return jw;case 5124:case 35670:return Xw;case 35667:case 35671:return qw;case 35668:case 35672:return Yw;case 35669:case 35673:return $w;case 5125:return Kw;case 36294:return Zw;case 36295:return Jw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function sb(t,e){t.uniform1fv(this.addr,e)}function ab(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function ob(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function lb(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function cb(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ub(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function db(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fb(t,e){t.uniform1iv(this.addr,e)}function hb(t,e){t.uniform2iv(this.addr,e)}function pb(t,e){t.uniform3iv(this.addr,e)}function mb(t,e){t.uniform4iv(this.addr,e)}function gb(t,e){t.uniform1uiv(this.addr,e)}function vb(t,e){t.uniform2uiv(this.addr,e)}function xb(t,e){t.uniform3uiv(this.addr,e)}function _b(t,e){t.uniform4uiv(this.addr,e)}function yb(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=lf:a=Gv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Sb(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||jv,s[a])}function Mb(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Xv,s[a])}function Eb(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Wv,s[a])}function wb(t){switch(t){case 5126:return sb;case 35664:return ab;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return vb;case 36295:return xb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}class bb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rb(n.type)}}class Tb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wb(n.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function Pm(t,e){t.seq.push(e),t.map[e.id]=e}function Cb(t,e,n){const i=t.name,r=i.length;for(Mu.lastIndex=0;;){const s=Mu.exec(i),a=Mu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pm(n,c===void 0?new bb(o,t,e):new Tb(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Ab(o),Pm(n,p)),n=p}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Cb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Rb=37297;let Nb=0;function Pb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Dm=new Ie;function Lb(t){Xe._getMatrix(Dm,Xe.workingColorSpace,t);const e=`mat3( ${Dm.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Fl:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Pb(t.getShaderSource(e),o)}else return s}function Db(t,e){const n=Lb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Ib={[uv]:"Linear",[dv]:"Reinhard",[fv]:"Cineon",[hv]:"ACESFilmic",[mv]:"AgX",[gv]:"Neutral",[pv]:"Custom"};function Ub(t,e){const n=Ib[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vo=new U;function Fb(){Xe.getLuminanceCoefficients(Vo);const t=Vo.x.toFixed(4),e=Vo.y.toFixed(4),n=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function kb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function la(t){return t!==""}function Um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(t){return t.replace(zb,Vb)}const Hb=new Map;function Vb(t,e){let n=Oe[e];if(n===void 0){const i=Hb.get(e);if(i!==void 0)n=Oe[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cf(n)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(t){return t.replace(Gb,Wb)}function Wb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function km(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jb={[tl]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function Xb(t){return jb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qb={[Lr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function Yb(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":qb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const $b={[Ds]:"ENVMAP_MODE_REFRACTION"};function Kb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":$b[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zb={[cv]:"ENVMAP_BLENDING_MULTIPLY",[_S]:"ENVMAP_BLENDING_MIX",[yS]:"ENVMAP_BLENDING_ADD"};function Jb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Zb[t.combine]||"ENVMAP_BLENDING_NONE"}function Qb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Xb(n),c=Yb(n),h=Kb(n),p=Jb(n),f=Qb(n),m=Ob(n),v=kb(s),E=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(la).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(la).join(`
`),d.length>0&&(d+=`
`)):(g=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),d=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?Oe.tonemapping_pars_fragment:"",n.toneMapping!==ci?Ub("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Db("linearToOutputTexel",n.outputColorSpace),Fb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=cf(a),a=Um(a,n),a=Fm(a,n),o=cf(o),o=Um(o,n),o=Fm(o,n),a=Om(a),o=Om(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+g+a,S=x+d+o,T=Lm(r,r.VERTEX_SHADER,M),b=Lm(r,r.FRAGMENT_SHADER,S);r.attachShader(E,T),r.attachShader(E,b),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(F){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(E)||"",X=r.getShaderInfoLog(T)||"",I=r.getShaderInfoLog(b)||"",G=V.trim(),Q=X.trim(),$=I.trim();let B=!0,k=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,b);else{const j=Im(r,T,"vertex"),J=Im(r,b,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+G+`
`+j+`
`+J)}else G!==""?Le("WebGLProgram: Program Info Log:",G):(Q===""||$==="")&&(k=!1);k&&(F.diagnostics={runnable:B,programLog:G,vertexShader:{log:Q,prefix:g},fragmentShader:{log:$,prefix:d}})}r.deleteShader(T),r.deleteShader(b),y=new al(r,E),A=Bb(r,E)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(E,Rb)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=b,this}let tT=0;class nT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iT(e),n.set(e,i)),i}}class iT{constructor(e){this.id=tT++,this.code=e,this.usedTimes=0}}function rT(t){return t===Dr||t===Dl||t===Il}function sT(t,e,n,i,r,s){const a=new mh,o=new nT,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function E(y,A,N,F,V,X){const I=F.fog,G=V.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||Q,$),k=B&&B.mapping===cc?B.image.height:null,j=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=J!==void 0?J.length:0;let we=0;G.morphAttributes.position!==void 0&&(we=1),G.morphAttributes.normal!==void 0&&(we=2),G.morphAttributes.color!==void 0&&(we=3);let qe,Be,ke,Y;if(j){const ct=ii[j];qe=ct.vertexShader,Be=ct.fragmentShader}else{qe=y.vertexShader,Be=y.fragmentShader;const ct=o.getVertexShaderStage(y),et=o.getFragmentShaderStage(y);o.update(y,ct,et),ke=ct.id,Y=et.id}const ne=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,xe=V.isBatchedMesh===!0,ze=!!y.map,Nt=!!y.matcap,He=!!B,Qe=!!y.aoMap,lt=!!y.lightMap,je=!!y.bumpMap&&y.wireframe===!1,mt=!!y.normalMap,Ut=!!y.displacementMap,on=!!y.emissiveMap,vt=!!y.metalnessMap,Tt=!!y.roughnessMap,D=y.anisotropy>0,Gt=y.clearcoat>0,nt=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,O=y.sheen>0,W=y.transmission>0,K=D&&!!y.anisotropyMap,se=Gt&&!!y.clearcoatMap,ae=Gt&&!!y.clearcoatNormalMap,Z=Gt&&!!y.clearcoatRoughnessMap,te=_&&!!y.iridescenceMap,oe=_&&!!y.iridescenceThicknessMap,Ae=O&&!!y.sheenColorMap,de=O&&!!y.sheenRoughnessMap,le=!!y.specularMap,Ce=!!y.specularColorMap,Pe=!!y.specularIntensityMap,Ue=W&&!!y.transmissionMap,L=W&&!!y.thicknessMap,ce=!!y.gradientMap,ee=!!y.alphaMap,ue=y.alphaTest>0,ge=!!y.alphaHash,ie=!!y.extensions;let Re=ci;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=t.toneMapping);const be={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:Be,defines:y.defines,customVertexShaderID:ke,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:xe,batchingColor:xe&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:Nt,envMap:He,envMapMode:He&&B.mapping,envMapCubeUVHeight:k,aoMap:Qe,lightMap:lt,bumpMap:je,normalMap:mt,displacementMap:Ut,emissiveMap:on,normalMapObjectSpace:mt&&y.normalMapType===ES,normalMapTangentSpace:mt&&y.normalMapType===jp,packedNormalMap:mt&&y.normalMapType===jp&&rT(y.normalMap.format),metalnessMap:vt,roughnessMap:Tt,anisotropy:D,anisotropyMap:K,clearcoat:Gt,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:Z,dispersion:nt,retroreflection:C,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:O,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:le,specularColorMap:Ce,specularIntensityMap:Pe,transmission:W,transmissionMap:Ue,thicknessMap:L,gradientMap:ce,opaque:y.transparent===!1&&y.blending===Es&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:ge,combine:y.combine,mapUv:ze&&v(y.map.channel),aoMapUv:Qe&&v(y.aoMap.channel),lightMapUv:lt&&v(y.lightMap.channel),bumpMapUv:je&&v(y.bumpMap.channel),normalMapUv:mt&&v(y.normalMap.channel),displacementMapUv:Ut&&v(y.displacementMap.channel),emissiveMapUv:on&&v(y.emissiveMap.channel),metalnessMapUv:vt&&v(y.metalnessMap.channel),roughnessMapUv:Tt&&v(y.roughnessMap.channel),anisotropyMapUv:K&&v(y.anisotropyMap.channel),clearcoatMapUv:se&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(y.sheenRoughnessMap.channel),specularMapUv:le&&v(y.specularMap.channel),specularColorMapUv:Ce&&v(y.specularColorMap.channel),specularIntensityMapUv:Pe&&v(y.specularIntensityMap.channel),transmissionMapUv:Ue&&v(y.transmissionMap.channel),thicknessMapUv:L&&v(y.thicknessMap.channel),alphaMapUv:ee&&v(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(mt||D),vertexNormals:!!G.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(ze||ee),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||G.attributes.normal===void 0&&mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Se,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:we,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Re,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:on&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Si,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(d(A,y),x(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function d(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){const A=m[y.type];let N;if(A){const F=ii[A];N=bM.clone(F.uniforms)}else N=y.uniforms;return N}function S(y,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new eT(t,A,y,r),c.push(N),h.set(A,N)),N}function T(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function aT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function oT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,v,E,g,d){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:g,group:d},t[e]=x):(x.id=f.id,x.object=f,x.geometry=m,x.material=v,x.materialVariant=a(f),x.groupOrder=E,x.renderOrder=f.renderOrder,x.z=g,x.group=d),e++,x}function l(f,m,v,E,g,d,x){x.reversedDepth===!0&&(g=-g);const M=o(f,m,v,E,g,d);v.transmission>0?i.push(M):v.transparent===!0?r.push(M):n.push(M)}function c(f,m,v,E,g,d){const x=o(f,m,v,E,g,d);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function h(f,m){n.length>1&&n.sort(f||oT),i.length>1&&i.sort(m||Bm),r.length>1&&r.sort(m||Bm)}function p(){for(let f=e,m=t.length;f<m;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function lT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new zm,t.set(i,[a])):r>=s.length?(a=new zm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function cT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new U,color:new $e};break;case"SpotLight":n={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function uT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dT=0;function fT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hT(t){const e=new cT,n=uT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new yt,a=new yt;function o(c){let h=0,p=0,f=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,v=0,E=0,g=0,d=0,x=0,M=0,S=0,T=0,b=0,R=0,y=0,A=0,N=0;c.sort(fT);for(let V=0,X=c.length;V<X;V++){const I=c[V],G=I.color,Q=I.intensity,$=I.distance;let B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Dr?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*Q,p+=G.g*Q,f+=G.b*Q;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],Q);N++}else if(I.isSunLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,J=n.get(I);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[v]=J,i.sunShadowMap[v]=B;const me=j.getViewportCount();for(let we=0;we<me;we++)i.sunShadowMatrix[E+we]=j.getMatrix(we),i.sunShadowCascade[E+we]=j._cascadeData[we];E+=me,v++}i.sun[m]=k,m++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,J=n.get(I);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=I.shadow.matrix,T++}i.directional[g]=k,g++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(G).multiplyScalar(Q),k.distance=$,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[x]=k;const j=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[x]=j.matrix,I.castShadow){const J=n.get(I);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=B,R++}x++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(G).multiplyScalar(Q),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=k,M++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const j=I.shadow,J=n.get(I);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,i.pointShadow[d]=J,i.pointShadowMap[d]=B,i.pointShadowMatrix[d]=I.shadow.matrix,b++}i.point[d]=k,d++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(Q),k.groundColor.copy(I.groundColor).multiplyScalar(Q),i.hemi[S]=k,S++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const F=i.hash;(F.sunLength!==m||F.directionalLength!==g||F.pointLength!==d||F.spotLength!==x||F.rectAreaLength!==M||F.hemiLength!==S||F.numSunShadows!==v||F.numDirectionalShadows!==T||F.numPointShadows!==b||F.numSpotShadows!==R||F.numSpotMaps!==y||F.numLightProbes!==N)&&(i.sun.length=m,i.directional.length=g,i.spot.length=x,i.rectArea.length=M,i.point.length=d,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,F.sunLength=m,F.directionalLength=g,F.pointLength=d,F.spotLength=x,F.rectAreaLength=M,F.hemiLength=S,F.numSunShadows=v,F.numDirectionalShadows=T,F.numPointShadows=b,F.numSpotShadows=R,F.numSpotMaps=y,F.numLightProbes=N,i.version=dT++)}function l(c,h){let p=0,f=0,m=0,v=0,E=0,g=0;const d=h.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){const S=c[x];if(S.isSunLight){const T=i.sun[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),p++}else if(S.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(S.isSpotLight){const T=i.spot[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),v++}else if(S.isRectAreaLight){const T=i.rectArea[E];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),E++}else if(S.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function Hm(t){const e=new hT(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function pT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hm(t),e.set(r,[o])):s>=a.length?(o=new Hm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const mT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vT=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],xT=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Vm=new yt,ta=new U,Eu=new U;function _T(t,e,n){let i=new Pv;const r=new Ne,s=new Ne,a=new Et,o=new RM,l=new NM,c={},h=n.maxTextureSize,p={[lr]:pn,[pn]:lr,[Si]:Si},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:mT,fragmentShader:gT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new En;v.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new fi(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let d=this.type;this.render=function(b,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===eS&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tl);const A=t.getRenderTarget(),N=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ti),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=d!==this.type;X&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=b.length;I<G;I++){const Q=b[I],$=Q.shadow;if($===void 0){Le("WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const B=$.getFrameExtents();r.multiply(B),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/B.x),r.x=s.x*B.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/B.y),r.y=s.y*B.y,$.mapSize.y=s.y));const k=t.state.buffers.depth.getReversed();if($.camera._reversedDepth=k,$.map===null||X===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===aa){if(Q.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new $n(r.x,r.y,{format:Dr,type:di,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),$.map.texture.name=Q.name+".shadowMap",$.map.depthTexture=new Ha(r.x,r.y,si),$.map.depthTexture.name=Q.name+".shadowMapDepth",$.map.depthTexture.format=Di,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=zt,$.map.depthTexture.magFilter=zt}else Q.isPointLight?($.map=new Vv(r.x),$.map.depthTexture=new lM(r.x,ui)):($.map=new $n(r.x,r.y),$.map.depthTexture=new Ha(r.x,r.y,ui)),$.map.depthTexture.name=Q.name+".shadowMap",$.map.depthTexture.format=Di,this.type===tl?($.map.depthTexture.compareFunction=k?hh:fh,$.map.depthTexture.minFilter=Kt,$.map.depthTexture.magFilter=Kt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=zt,$.map.depthTexture.magFilter=zt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const j=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Q.isPointLight!==!0&&$.updateMatrices(Q,y);for(let J=0;J<j;J++){const me=$.getCamera(J);if(Q.isPointLight){const we=$.camera,qe=$.matrix,Be=Q.distance||we.far;Be!==we.far&&(we.far=Be,we.updateProjectionMatrix()),ta.setFromMatrixPosition(Q.matrixWorld),we.position.copy(ta),Eu.copy(we.position),Eu.add(vT[J]),we.up.copy(xT[J]),we.lookAt(Eu),we.updateMatrixWorld(),qe.makeTranslation(-ta.x,-ta.y,-ta.z),Vm.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Vm,we.coordinateSystem,we.reversedDepth)}if($.map.isWebGLCubeRenderTarget)t.setRenderTarget($.map,J),t.clear();else{J===0&&(t.setRenderTarget($.map),t.clear());const we=$.getViewport(J);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),V.viewport(a)}i=$.getFrustum(J),S(R,y,me,Q,this.type)}$.isPointLightShadow!==!0&&this.type===aa&&x($,y),$.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(A,N,F)};function x(b,R){const y=e.update(E);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new $n(r.x,r.y,{format:Dr,type:di}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(R,null,y,f,E,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(R,null,y,m,E,null)}function M(b,R,y,A){let N=null;const F=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)N=F;else if(N=y.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=N.uuid,X=R.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let G=I[X];G===void 0&&(G=N.clone(),I[X]=G,R.addEventListener("dispose",T)),N=G}if(N.visible=R.visible,N.wireframe=R.wireframe,A===aa?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:p[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const V=t.properties.get(N);V.light=y}return N}function S(b,R,y,A,N){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===aa)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const X=e.update(b),I=b.material;if(Array.isArray(I)){const G=X.groups;for(let Q=0,$=G.length;Q<$;Q++){const B=G[Q],k=I[B.materialIndex];if(k&&k.visible){const j=M(b,k,A,N);b.onBeforeShadow(t,b,R,y,X,j,B),t.renderBufferDirect(y,null,X,j,b,B),b.onAfterShadow(t,b,R,y,X,j,B)}}}else if(I.visible){const G=M(b,I,A,N);b.onBeforeShadow(t,b,R,y,X,G,null),t.renderBufferDirect(y,null,X,G,b,null),b.onAfterShadow(t,b,R,y,X,G,null)}}const V=b.children;for(let X=0,I=V.length;X<I;X++)S(V[X],R,y,A,N)}function T(b){b.target.removeEventListener("dispose",T);for(const y in c){const A=c[y],N=b.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function yT(t,e){function n(){let L=!1;const ce=new Et;let ee=null;const ue=new Et(0,0,0,0);return{setMask:function(ge){ee!==ge&&!L&&(t.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){L=ge},setClear:function(ge,ie,Re,be,ct){ct===!0&&(ge*=be,ie*=be,Re*=be),ce.set(ge,ie,Re,be),ue.equals(ce)===!1&&(t.clearColor(ge,ie,Re,be),ue.copy(ce))},reset:function(){L=!1,ee=null,ue.set(-1,0,0,0)}}}function i(){let L=!1,ce=!1,ee=null,ue=null,ge=null;return{setReversed:function(ie){if(ce!==ie){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const be=ge;ge=null,this.setClear(be)}},getReversed:function(){return ce},setTest:function(ie){ie?ne(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!L&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(ce&&(ie=US[ie]),ue!==ie){switch(ie){case yd:t.depthFunc(t.NEVER);break;case Sd:t.depthFunc(t.ALWAYS);break;case Md:t.depthFunc(t.LESS);break;case ka:t.depthFunc(t.LEQUAL);break;case Ed:t.depthFunc(t.EQUAL);break;case wd:t.depthFunc(t.GEQUAL);break;case bd:t.depthFunc(t.GREATER);break;case Td:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=ie}},setLocked:function(ie){L=ie},setClear:function(ie){ge!==ie&&(ge=ie,ce&&(ie=1-ie),t.clearDepth(ie))},reset:function(){L=!1,ee=null,ue=null,ge=null,ce=!1}}}function r(){let L=!1,ce=null,ee=null,ue=null,ge=null,ie=null,Re=null,be=null,ct=null;return{setTest:function(et){L||(et?ne(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!L&&(t.stencilMask(et),ce=et)},setFunc:function(et,On,Zn){(ee!==et||ue!==On||ge!==Zn)&&(t.stencilFunc(et,On,Zn),ee=et,ue=On,ge=Zn)},setOp:function(et,On,Zn){(ie!==et||Re!==On||be!==Zn)&&(t.stencilOp(et,On,Zn),ie=et,Re=On,be=Zn)},setLocked:function(et){L=et},setClear:function(et){ct!==et&&(t.clearStencil(et),ct=et)},reset:function(){L=!1,ce=null,ee=null,ue=null,ge=null,ie=null,Re=null,be=null,ct=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},f={},m=new WeakMap,v=[],E=null,g=!1,d=null,x=null,M=null,S=null,T=null,b=null,R=null,y=new $e(0,0,0),A=0,N=!1,F=null,V=null,X=null,I=null,G=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),$=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),$=B>=2);let j=null,J={};const me=t.getParameter(t.SCISSOR_BOX),we=t.getParameter(t.VIEWPORT),qe=new Et().fromArray(me),Be=new Et().fromArray(we);function ke(L,ce,ee,ue){const ge=new Uint8Array(4),ie=t.createTexture();t.bindTexture(L,ie),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<ee;Re++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ce+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ie}const Y={};Y[t.TEXTURE_2D]=ke(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),a.setFunc(ka),je(!1),mt(Vp),ne(t.CULL_FACE),Qe(Ti);function ne(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Se(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function De(L,ce){return f[L]!==ce?(t.bindFramebuffer(L,ce),f[L]=ce,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ce),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function xe(L,ce){let ee=v,ue=!1;if(L){ee=m.get(ce),ee===void 0&&(ee=[],m.set(ce,ee));const ge=L.textures;if(ee.length!==ge.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Re=ge.length;ie<Re;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=ge.length,ue=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ue=!0);ue&&t.drawBuffers(ee)}function ze(L){return E!==L?(t.useProgram(L),E=L,!0):!1}const Nt={[es]:t.FUNC_ADD,[nS]:t.FUNC_SUBTRACT,[iS]:t.FUNC_REVERSE_SUBTRACT};Nt[rS]=t.MIN,Nt[sS]=t.MAX;const He={[aS]:t.ZERO,[oS]:t.ONE,[lS]:t.SRC_COLOR,[ov]:t.SRC_ALPHA,[pS]:t.SRC_ALPHA_SATURATE,[fS]:t.DST_COLOR,[uS]:t.DST_ALPHA,[cS]:t.ONE_MINUS_SRC_COLOR,[lv]:t.ONE_MINUS_SRC_ALPHA,[hS]:t.ONE_MINUS_DST_COLOR,[dS]:t.ONE_MINUS_DST_ALPHA,[mS]:t.CONSTANT_COLOR,[gS]:t.ONE_MINUS_CONSTANT_COLOR,[vS]:t.CONSTANT_ALPHA,[xS]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,ce,ee,ue,ge,ie,Re,be,ct,et){if(L===Ti){g===!0&&(Se(t.BLEND),g=!1);return}if(g===!1&&(ne(t.BLEND),g=!0),L!==tS){if(L!==d||et!==N){if((x!==es||T!==es)&&(t.blendEquation(t.FUNC_ADD),x=es,T=es),et)switch(L){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ll:t.blendFunc(t.ONE,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",L);break}else switch(L){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ll:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Gp:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wp:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",L);break}M=null,S=null,b=null,R=null,y.set(0,0,0),A=0,d=L,N=et}return}ge=ge||ce,ie=ie||ee,Re=Re||ue,(ce!==x||ge!==T)&&(t.blendEquationSeparate(Nt[ce],Nt[ge]),x=ce,T=ge),(ee!==M||ue!==S||ie!==b||Re!==R)&&(t.blendFuncSeparate(He[ee],He[ue],He[ie],He[Re]),M=ee,S=ue,b=ie,R=Re),(be.equals(y)===!1||ct!==A)&&(t.blendColor(be.r,be.g,be.b,ct),y.copy(be),A=ct),d=L,N=!1}function lt(L,ce){L.side===Si?Se(t.CULL_FACE):ne(t.CULL_FACE);let ee=L.side===pn;ce&&(ee=!ee),je(ee),L.blending===Es&&L.transparent===!1?Qe(Ti):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),on(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){F!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),F=L)}function mt(L){L!==Jy?(ne(t.CULL_FACE),L!==V&&(L===Vp?t.cullFace(t.BACK):L===Qy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),V=L}function Ut(L){L!==X&&($&&t.lineWidth(L),X=L)}function on(L,ce,ee){L?(ne(t.POLYGON_OFFSET_FILL),(I!==ce||G!==ee)&&(I=ce,G=ee,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,ee))):Se(t.POLYGON_OFFSET_FILL)}function vt(L){L?ne(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function Tt(L){L===void 0&&(L=t.TEXTURE0+Q-1),j!==L&&(t.activeTexture(L),j=L)}function D(L,ce,ee){ee===void 0&&(j===null?ee=t.TEXTURE0+Q-1:ee=j);let ue=J[ee];ue===void 0&&(ue={type:void 0,texture:void 0},J[ee]=ue),(ue.type!==L||ue.texture!==ce)&&(j!==ee&&(t.activeTexture(ee),j=ee),t.bindTexture(L,ce||Y[L]),ue.type=L,ue.texture=ce)}function Gt(){const L=J[j];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function _(){try{t.texSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function O(){try{t.texSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function se(){try{t.texStorage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function ae(){try{t.texStorage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Z(){try{t.texImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function te(){try{t.texImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function oe(L){return p[L]!==void 0?p[L]:t.getParameter(L)}function Ae(L,ce){p[L]!==ce&&(t.pixelStorei(L,ce),p[L]=ce)}function de(L){qe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),qe.copy(L))}function le(L){Be.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Be.copy(L))}function Ce(L,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let ue=ee.get(L);ue===void 0&&(ue=t.getUniformBlockIndex(ce,L.name),ee.set(L,ue))}function Pe(L,ce){const ue=c.get(ce).get(L);l.get(ce)!==ue&&(t.uniformBlockBinding(ce,ue,L.__bindingPointIndex),l.set(ce,ue))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,J={},f={},m=new WeakMap,v=[],E=null,g=!1,d=null,x=null,M=null,S=null,T=null,b=null,R=null,y=new $e(0,0,0),A=0,N=!1,F=null,V=null,X=null,I=null,G=null,qe.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Se,bindFramebuffer:De,drawBuffers:xe,useProgram:ze,setBlending:Qe,setMaterial:lt,setFlipSided:je,setCullFace:mt,setLineWidth:Ut,setPolygonOffset:on,setScissorTest:vt,activeTexture:Tt,bindTexture:D,unbindTexture:Gt,compressedTexImage2D:nt,compressedTexImage3D:C,texImage2D:Z,texImage3D:te,pixelStorei:Ae,getParameter:oe,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:ae,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:de,viewport:le,reset:Ue}}function ST(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,_){return v?new OffscreenCanvas(C,_):kl("canvas")}function g(C,_,O){let W=1;const K=nt(C);if((K.width>O||K.height>O)&&(W=O/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(W*K.width),ae=Math.floor(W*K.height);f===void 0&&(f=E(se,ae));const Z=_?E(se,ae):f;return Z.width=se,Z.height=ae,Z.getContext("2d").drawImage(C,0,0,se,ae),Le("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+ae+")."),Z}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function d(C){return C.generateMipmaps}function x(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,_,O,W,K,se=!1){if(C!==null){if(t[C]!==void 0)return t[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===t.RED&&(O===t.FLOAT&&(Z=t.R32F),O===t.HALF_FLOAT&&(Z=t.R16F),O===t.UNSIGNED_BYTE&&(Z=t.R8),O===t.UNSIGNED_SHORT&&ae&&(Z=ae.R16_EXT),O===t.SHORT&&ae&&(Z=ae.R16_SNORM_EXT)),_===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.R8UI),O===t.UNSIGNED_SHORT&&(Z=t.R16UI),O===t.UNSIGNED_INT&&(Z=t.R32UI),O===t.BYTE&&(Z=t.R8I),O===t.SHORT&&(Z=t.R16I),O===t.INT&&(Z=t.R32I)),_===t.RG&&(O===t.FLOAT&&(Z=t.RG32F),O===t.HALF_FLOAT&&(Z=t.RG16F),O===t.UNSIGNED_BYTE&&(Z=t.RG8),O===t.UNSIGNED_SHORT&&ae&&(Z=ae.RG16_EXT),O===t.SHORT&&ae&&(Z=ae.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RG8UI),O===t.UNSIGNED_SHORT&&(Z=t.RG16UI),O===t.UNSIGNED_INT&&(Z=t.RG32UI),O===t.BYTE&&(Z=t.RG8I),O===t.SHORT&&(Z=t.RG16I),O===t.INT&&(Z=t.RG32I)),_===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),O===t.UNSIGNED_INT&&(Z=t.RGB32UI),O===t.BYTE&&(Z=t.RGB8I),O===t.SHORT&&(Z=t.RGB16I),O===t.INT&&(Z=t.RGB32I)),_===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),O===t.UNSIGNED_INT&&(Z=t.RGBA32UI),O===t.BYTE&&(Z=t.RGBA8I),O===t.SHORT&&(Z=t.RGBA16I),O===t.INT&&(Z=t.RGBA32I)),_===t.RGB&&(O===t.UNSIGNED_SHORT&&ae&&(Z=ae.RGB16_EXT),O===t.SHORT&&ae&&(Z=ae.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),_===t.RGBA){const te=se?Fl:Xe.getTransfer(K);O===t.FLOAT&&(Z=t.RGBA32F),O===t.HALF_FLOAT&&(Z=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Z=te===it?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ae&&(Z=ae.RGBA16_EXT),O===t.SHORT&&ae&&(Z=ae.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(C,_){let O;return C?_===null||_===ui||_===za?O=t.DEPTH24_STENCIL8:_===si?O=t.DEPTH32F_STENCIL8:_===Ba&&(O=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===za?O=t.DEPTH_COMPONENT24:_===si?O=t.DEPTH_COMPONENT32F:_===Ba&&(O=t.DEPTH_COMPONENT16),O}function b(C,_){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){const _=C.target;_.removeEventListener("dispose",R),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(C){const _=C.target;_.removeEventListener("dispose",y),F(_)}function A(C){const _=i.get(C);if(_.__webglInit===void 0)return;const O=C.source,W=m.get(O);if(W){const K=W[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&N(C),Object.keys(W).length===0&&m.delete(O)}i.remove(C)}function N(C){const _=i.get(C);t.deleteTexture(_.__webglTexture);const O=C.source,W=m.get(O);delete W[_.__cacheKey],a.memory.textures--}function F(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let K=0;K<_.__webglFramebuffer[W].length;K++)t.deleteFramebuffer(_.__webglFramebuffer[W][K]);else t.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)t.deleteFramebuffer(_.__webglFramebuffer[W]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=C.textures;for(let W=0,K=O.length;W<K;W++){const se=i.get(O[W]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(O[W])}i.remove(C)}let V=0;function X(){V=0}function I(){return V}function G(C){V=C}function Q(){const C=V;return C>=r.maxTextures&&Le("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),V+=1,C}function $(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function B(C,_){const O=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const W=C.image;if(W===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+_)}function k(C,_){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Se(O,C,_);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+_)}function j(C,_){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Se(O,C,_);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+_)}function J(C,_){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){De(O,C,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+_)}const me={[Ad]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Cd]:t.MIRRORED_REPEAT},we={[zt]:t.NEAREST,[SS]:t.NEAREST_MIPMAP_NEAREST,[_o]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[Wc]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},qe={[bS]:t.NEVER,[NS]:t.ALWAYS,[TS]:t.LESS,[fh]:t.LEQUAL,[AS]:t.EQUAL,[hh]:t.GEQUAL,[CS]:t.GREATER,[RS]:t.NOTEQUAL};function Be(C,_){if(_.type===si&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===Wc||_.magFilter===_o||_.magFilter===Er||_.minFilter===Kt||_.minFilter===Wc||_.minFilter===_o||_.minFilter===Er)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,me[_.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,me[_.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,me[_.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,we[_.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,qe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==_o&&_.minFilter!==Er||_.type===si&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ke(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));const W=_.source;let K=m.get(W);K===void 0&&(K={},m.set(W,K));const se=$(_);if(se!==C.__cacheKey){K[se]===void 0&&(K[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[se].usedTimes++;const ae=K[C.__cacheKey];ae!==void 0&&(K[C.__cacheKey].usedTimes--,ae.usedTimes===0&&N(_)),C.__cacheKey=se,C.__webglTexture=K[se].texture}return O}function Y(C,_,O){return Math.floor(Math.floor(C/O)/_)}function ne(C,_,O,W){const se=C.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,O,W,_.data);else{se.sort((Ae,de)=>Ae.start-de.start);let ae=0;for(let Ae=1;Ae<se.length;Ae++){const de=se[ae],le=se[Ae],Ce=de.start+de.count,Pe=Y(le.start,_.width,4),Ue=Y(de.start,_.width,4);le.start<=Ce+1&&Pe===Ue&&Y(le.start+le.count-1,_.width,4)===Pe?de.count=Math.max(de.count,le.start+le.count-de.start):(++ae,se[ae]=le)}se.length=ae+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),oe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,de=se.length;Ae<de;Ae++){const le=se[Ae],Ce=Math.floor(le.start/4),Pe=Math.ceil(le.count/4),Ue=Ce%_.width,L=Math.floor(Ce/_.width),ce=Pe,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Ue,L,ce,ee,O,W,_.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,oe)}}function Se(C,_,O){let W=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=t.TEXTURE_3D);const K=ke(C,_),se=_.source;n.bindTexture(W,C.__webglTexture,t.TEXTURE0+O);const ae=i.get(se);if(se.version!==ae.__version||K===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ee=Xe.getPrimaries(Xe.workingColorSpace),ue=_.colorSpace===$i?null:Xe.getPrimaries(_.colorSpace),ge=_.colorSpace===$i||ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=g(_.image,!1,r.maxTextureSize);te=Gt(_,te);const oe=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type);let de=S(_.internalFormat,oe,Ae,_.normalized,_.colorSpace,_.isVideoTexture);Be(W,_);let le;const Ce=_.mipmaps,Pe=_.isVideoTexture!==!0,Ue=ae.__version===void 0||K===!0,L=se.dataReady,ce=b(_,te);if(_.isDepthTexture)de=T(_.format===wr,_.type),Ue&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,de,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,de,te.width,te.height,0,oe,Ae,null));else if(_.isDataTexture)if(Ce.length>0){Pe&&Ue&&n.texStorage2D(t.TEXTURE_2D,ce,de,Ce[0].width,Ce[0].height);for(let ee=0,ue=Ce.length;ee<ue;ee++)le=Ce[ee],Pe?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Ae,le.data):n.texImage2D(t.TEXTURE_2D,ee,de,le.width,le.height,0,oe,Ae,le.data);_.generateMipmaps=!1}else Pe?(Ue&&n.texStorage2D(t.TEXTURE_2D,ce,de,te.width,te.height),L&&ne(_,te,oe,Ae)):n.texImage2D(t.TEXTURE_2D,0,de,te.width,te.height,0,oe,Ae,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,de,Ce[0].width,Ce[0].height,te.depth);for(let ee=0,ue=Ce.length;ee<ue;ee++)if(le=Ce[ee],_.format!==Xn)if(oe!==null)if(Pe){if(L)if(_.layerUpdates.size>0){const ge=ym(le.width,le.height,_.format,_.type);for(const ie of _.layerUpdates){const Re=le.data.subarray(ie*ge/le.data.BYTES_PER_ELEMENT,(ie+1)*ge/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,le.width,le.height,1,oe,Re)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,de,le.width,le.height,te.depth,0,le.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,Ae,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,de,le.width,le.height,te.depth,0,oe,Ae,le.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Pe&&Ue&&n.texStorage2D(t.TEXTURE_2D,ce,de,Ce[0].width,Ce[0].height);for(let ee=0,ue=Ce.length;ee<ue;ee++)le=Ce[ee],_.format!==Xn?oe!==null?Pe?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,le.width,le.height,oe,le.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,de,le.width,le.height,0,le.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Ae,le.data):n.texImage2D(t.TEXTURE_2D,ee,de,le.width,le.height,0,oe,Ae,le.data)}else if(_.isDataArrayTexture)if(Pe){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,de,te.width,te.height,te.depth),L)if(_.layerUpdates.size>0){const ee=ym(te.width,te.height,_.format,_.type);for(const ue of _.layerUpdates){const ge=te.data.subarray(ue*ee/te.data.BYTES_PER_ELEMENT,(ue+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,oe,Ae,ge)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Ae,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,oe,Ae,te.data);else if(_.isData3DTexture)Pe?(Ue&&n.texStorage3D(t.TEXTURE_3D,ce,de,te.width,te.height,te.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Ae,te.data)):n.texImage3D(t.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,oe,Ae,te.data);else if(_.isFramebufferTexture){if(Ue)if(Pe)n.texStorage2D(t.TEXTURE_2D,ce,de,te.width,te.height);else{let ee=te.width,ue=te.height;for(let ge=0;ge<ce;ge++)n.texImage2D(t.TEXTURE_2D,ge,de,ee,ue,0,oe,Ae,null),ee>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),p.add(_),ee.onpaint=ue=>{const ge=ue.changedElements;for(const ie of p)ge.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const ge=t.RGBA,ie=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,ie,Re,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&Ue){const ee=nt(Ce[0]);n.texStorage2D(t.TEXTURE_2D,ce,de,ee.width,ee.height)}for(let ee=0,ue=Ce.length;ee<ue;ee++)le=Ce[ee],Pe?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,oe,Ae,le):n.texImage2D(t.TEXTURE_2D,ee,de,oe,Ae,le);_.generateMipmaps=!1}else if(Pe){if(Ue){const ee=nt(te);n.texStorage2D(t.TEXTURE_2D,ce,de,ee.width,ee.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,Ae,te)}else n.texImage2D(t.TEXTURE_2D,0,de,oe,Ae,te);d(_)&&x(W),ae.__version=se.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function De(C,_,O){if(_.image.length!==6)return;const W=ke(C,_),K=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const se=i.get(K);if(K.version!==se.__version||W===!0){n.activeTexture(t.TEXTURE0+O);const ae=Xe.getPrimaries(Xe.workingColorSpace),Z=_.colorSpace===$i?null:Xe.getPrimaries(_.colorSpace),te=_.colorSpace===$i||ae===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ae=_.image[0]&&_.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!oe&&!Ae?de[ie]=g(_.image[ie],!0,r.maxCubemapSize):de[ie]=Ae?_.image[ie].image:_.image[ie],de[ie]=Gt(_,de[ie]);const le=de[0],Ce=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type),Ue=S(_.internalFormat,Ce,Pe,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ce=se.__version===void 0||W===!0,ee=K.dataReady;let ue=b(_,le);Be(t.TEXTURE_CUBE_MAP,_);let ge;if(oe){L&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ue,le.width,le.height);for(let ie=0;ie<6;ie++){ge=de[ie].mipmaps;for(let Re=0;Re<ge.length;Re++){const be=ge[Re];_.format!==Xn?Ce!==null?L?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,be.width,be.height,Ce,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Ue,be.width,be.height,0,be.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,be.width,be.height,Ce,Pe,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Ue,be.width,be.height,0,Ce,Pe,be.data)}}}else{if(ge=_.mipmaps,L&&ce){ge.length>0&&ue++;const ie=nt(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ae){L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,Ce,Pe,de[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,de[ie].width,de[ie].height,0,Ce,Pe,de[ie].data);for(let Re=0;Re<ge.length;Re++){const ct=ge[Re].image[ie].image;L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,ct.width,ct.height,Ce,Pe,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Ue,ct.width,ct.height,0,Ce,Pe,ct.data)}}else{L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce,Pe,de[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,Ce,Pe,de[ie]);for(let Re=0;Re<ge.length;Re++){const be=ge[Re];L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ce,Pe,be.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Ue,Ce,Pe,be.image[ie])}}}d(_)&&x(t.TEXTURE_CUBE_MAP),se.__version=K.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function xe(C,_,O,W,K,se){const ae=s.convert(O.format,O.colorSpace),Z=s.convert(O.type),te=S(O.internalFormat,ae,Z,O.normalized,O.colorSpace),oe=i.get(_),Ae=i.get(O);if(Ae.__renderTarget=_,!oe.__hasExternalTextures){const de=Math.max(1,_.width>>se),le=Math.max(1,_.height>>se);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,se,te,de,le,_.depth,0,ae,Z,null):n.texImage2D(K,se,te,de,le,0,ae,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,K,Ae.__webglTexture,0,vt(_)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,K,Ae.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(C,_,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),_.depthBuffer){const W=_.depthTexture,K=W&&W.isDepthTexture?W.type:null,se=T(_.stencilBuffer,K),ae=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Tt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(_),se,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(_),se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,C)}else{const W=_.textures;for(let K=0;K<W.length;K++){const se=W[K],ae=s.convert(se.format,se.colorSpace),Z=s.convert(se.type),te=S(se.internalFormat,ae,Z,se.normalized,se.colorSpace);Tt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(_),te,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Nt(C,_,O){const W=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Be(t.TEXTURE_CUBE_MAP,_.depthTexture);const oe=s.convert(_.depthTexture.format),Ae=s.convert(_.depthTexture.type);let de;_.depthTexture.format===Di?de=t.DEPTH_COMPONENT24:_.depthTexture.format===wr&&(de=t.DEPTH24_STENCIL8);for(let le=0;le<6;le++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,de,_.width,_.height,0,oe,Ae,null)}}else B(_.depthTexture,0);const se=K.__webglTexture,ae=vt(_),Z=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,te=_.depthTexture.format===wr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Di)Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,se,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,se,0);else if(_.depthTexture.format===wr)Tt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,Z,se,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,te,Z,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(C){const _=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=W}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)Nt(_.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Nt(_.__webglFramebuffer[0],C,0):Nt(_.__webglFramebuffer,C,0)}else if(O){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=t.createRenderbuffer(),ze(_.__webglDepthbuffer[W],C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,se)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ze(_.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(C,_,O){const W=i.get(C);_!==void 0&&xe(W.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&He(C)}function lt(C){const _=C.texture,O=i.get(C),W=i.get(_);C.addEventListener("dispose",y);const K=C.textures,se=C.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=_.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let te=0;te<_.mipmaps.length;te++)O.__webglFramebuffer[Z][te]=t.createFramebuffer()}else O.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)O.__webglFramebuffer[Z]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ae)for(let Z=0,te=K.length;Z<te;Z++){const oe=i.get(K[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Tt(C)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const te=K[Z];O.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const oe=s.convert(te.format,te.colorSpace),Ae=s.convert(te.type),de=S(te.internalFormat,oe,Ae,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),le=vt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,le,de,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Be(t.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)xe(O.__webglFramebuffer[Z][te],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else xe(O.__webglFramebuffer[Z],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(_)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let Z=0,te=K.length;Z<te;Z++){const oe=K[Z],Ae=i.get(oe);let de=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Ae.__webglTexture),Be(de,oe),xe(O.__webglFramebuffer,C,oe,t.COLOR_ATTACHMENT0+Z,de,0),d(oe)&&x(de)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,W.__webglTexture),Be(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)xe(O.__webglFramebuffer[te],C,_,t.COLOR_ATTACHMENT0,Z,te);else xe(O.__webglFramebuffer,C,_,t.COLOR_ATTACHMENT0,Z,0);d(_)&&x(Z),n.unbindTexture()}C.depthBuffer&&He(C)}function je(C){const _=C.textures;for(let O=0,W=_.length;O<W;O++){const K=_[O];if(d(K)){const se=M(C),ae=i.get(K).__webglTexture;n.bindTexture(se,ae),x(se),n.unbindTexture()}}}const mt=[],Ut=[];function on(C){if(C.samples>0){if(Tt(C)===!1){const _=C.textures,O=C.width,W=C.height;let K=t.COLOR_BUFFER_BIT;const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(C),Z=_.length>1;if(Z)for(let oe=0;oe<_.length;oe++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ae=i.get(_[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,O,W,0,0,O,W,K,t.NEAREST),l===!0&&(mt.length=0,Ut.length=0,mt.push(t.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(mt.push(se),Ut.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let oe=0;oe<_.length;oe++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ae=i.get(_[oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const _=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function vt(C){return Math.min(r.maxSamples,C.samples)}function Tt(C){const _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(C){const _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Gt(C,_){const O=C.colorSpace,W=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ul&&O!==$i&&(Xe.getTransfer(O)===it?(W!==Xn||K!==Ln)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",O)),_}function nt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=X,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=Qe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function MT(t,e){function n(i,r=$i){let s;const a=Xe.getTransfer(r);if(i===Ln)return t.UNSIGNED_BYTE;if(i===oh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Sv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===xv)return t.BYTE;if(i===_v)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===ah)return t.INT;if(i===ui)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===di)return t.HALF_FLOAT;if(i===Mv)return t.ALPHA;if(i===Ev)return t.RGB;if(i===Xn)return t.RGBA;if(i===Di)return t.DEPTH_COMPONENT;if(i===wr)return t.DEPTH_STENCIL;if(i===wv)return t.RED;if(i===ch)return t.RED_INTEGER;if(i===Dr)return t.RG;if(i===uh)return t.RG_INTEGER;if(i===dh)return t.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rd||i===Nd||i===Pd||i===Ld)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dd||i===Id||i===Ud||i===Fd||i===Od||i===Dl||i===kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dd||i===Id)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ud)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fd)return s.COMPRESSED_R11_EAC;if(i===Od)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dl)return s.COMPRESSED_RG11_EAC;if(i===kd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bd||i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===qd||i===Yd||i===$d||i===Kd||i===Zd||i===Jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$d)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qd||i===ef||i===tf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qd)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nf||i===rf||i===Il||i===sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ET=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Iv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gn({vertexShader:ET,fragmentShader:wT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new dc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TT extends Or{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,v=null;const E=typeof XRWebGLBinding<"u",g=new bT,d={},x=n.getContextAttributes();let M=null,S=null;const T=[],b=[],R=new Ne;let y=null,A=null;const N=new Pn;N.viewport=new Et;const F=new Pn;F.viewport=new Et;const V=[N,F],X=new LM;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=T[Y];return ne===void 0&&(ne=new Qc,T[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=T[Y];return ne===void 0&&(ne=new Qc,T[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=T[Y];return ne===void 0&&(ne=new Qc,T[Y]=ne),ne.getHandSpace()};function Q(Y){const ne=b.indexOf(Y.inputSource);if(ne===-1)return;const Se=T[ne];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,c||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",B);for(let Y=0;Y<T.length;Y++){const ne=b[Y];ne!==null&&(b[Y]=null,T[Y].disconnect(ne))}I=null,G=null,g.reset();for(const Y in d)delete d[Y];if(e.setRenderTarget(M),m=null,f=null,p=null,r=null,S=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),A!==null){const Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",$),r.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,De=null,xe=null;x.depth&&(xe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=x.stencil?wr:Di,De=x.stencil?za:ui);const ze={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $n(f.textureWidth,f.textureHeight,{format:Xn,type:Ln,depthTexture:new Ha(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new $n(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(Y){for(let ne=0;ne<Y.removed.length;ne++){const Se=Y.removed[ne],De=b.indexOf(Se);De>=0&&(b[De]=null,T[De].disconnect(Se))}for(let ne=0;ne<Y.added.length;ne++){const Se=Y.added[ne];let De=b.indexOf(Se);if(De===-1){for(let ze=0;ze<T.length;ze++)if(ze>=b.length){b.push(Se),De=ze;break}else if(b[ze]===null){b[ze]=Se,De=ze;break}if(De===-1)break}const xe=T[De];xe&&xe.connect(Se)}}const k=new U,j=new U;function J(Y,ne,Se){k.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const De=k.distanceTo(j),xe=ne.projectionMatrix.elements,ze=Se.projectionMatrix.elements,Nt=xe[14]/(xe[10]-1),He=xe[14]/(xe[10]+1),Qe=(xe[9]+1)/xe[5],lt=(xe[9]-1)/xe[5],je=(xe[8]-1)/xe[0],mt=(ze[8]+1)/ze[0],Ut=Nt*je,on=Nt*mt,vt=De/(-je+mt),Tt=vt*-je;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Tt),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xe[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const D=Nt+vt,Gt=He+vt,nt=Ut-Tt,C=on+(De-Tt),_=Qe*He/Gt*D,O=lt*He/Gt*D;Y.projectionMatrix.makePerspective(nt,C,_,O,D,Gt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function me(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,Se=Y.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),X.near=F.near=N.near=ne,X.far=F.far=N.far=Se,(I!==X.near||G!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,G=X.far),X.layers.mask=Y.layers.mask|6,N.layers.mask=X.layers.mask&-5,F.layers.mask=X.layers.mask&-3;const De=Y.parent,xe=X.cameras;me(X,De);for(let ze=0;ze<xe.length;ze++)me(xe[ze],De);xe.length===2?J(X,N,F):X.projectionMatrix.copy(N.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),we(Y,X,De)};function we(Y,ne,Se){Se===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=af*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(Y){return d[Y]};let qe=null;function Be(Y,ne){if(h=ne.getViewerPose(c||a),v=ne,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let De=!1;Se.length!==X.cameras.length&&(X.cameras.length=0,De=!0);for(let He=0;He<Se.length;He++){const Qe=Se[He];let lt=null;if(m!==null)lt=m.getViewport(Qe);else{const mt=p.getViewSubImage(f,Qe);lt=mt.viewport,He===0&&(e.setRenderTargetTextures(S,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(S))}let je=V[He];je===void 0&&(je=new Pn,je.layers.enable(He),je.viewport=new Et,V[He]=je),je.matrix.fromArray(Qe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Qe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(lt.x,lt.y,lt.width,lt.height),He===0&&(X.matrix.copy(je.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),De===!0&&X.cameras.push(je)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const He=p.getDepthInformation(Se[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(xe&&xe.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let He=0;He<Se.length;He++){const Qe=Se[He].camera;if(Qe){let lt=d[Qe];lt||(lt=new Iv,d[Qe]=lt);const je=p.getCameraImage(Qe);lt.sourceTexture=je}}}}for(let Se=0;Se<T.length;Se++){const De=b[Se],xe=T[Se];De!==null&&xe!==void 0&&xe.update(De,ne,c||a)}qe&&qe(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const ke=new zv;ke.setAnimationLoop(Be),this.setAnimationLoop=function(Y){qe=Y},this.dispose=function(){}}}const AT=new yt,qv=new Ie;qv.set(-1,0,0,0,1,0,0,0,1);function CT(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Ov(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,M,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),E(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===pn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===pn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),M=x.envMap,S=x.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(AT.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qv),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=M*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const b=T.program;i.uniformBlockBinding(S,b)}function c(S,T){let b=r[S.id];b===void 0&&(g(S),b=h(S),r[S.id]=b,S.addEventListener("dispose",x));const R=T.program;i.updateUBOMapping(S,R);const y=e.render.frame;s[S.id]!==y&&(f(S),s[S.id]=y)}function h(S){const T=p();S.__bindingPointIndex=T;const b=t.createBuffer(),R=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,R,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=r[S.id],b=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let y=0,A=b.length;y<A;y++){const N=b[y];if(Array.isArray(N))for(let F=0,V=N.length;F<V;F++)m(N[F],y,F,R);else m(N,y,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,T,b,R){if(E(S,T,b,R)===!0){const y=S.__offset,A=S.value;if(Array.isArray(A)){let N=0;for(let F=0;F<A.length;F++){const V=A[F],X=d(V);v(V,S.__data,N),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function v(S,T,b){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,b)}function E(S,T,b,R){const y=S.value,A=T+"_"+b;if(R[A]===void 0)return typeof y=="number"||typeof y=="boolean"?R[A]=y:ArrayBuffer.isView(y)?R[A]=y.slice():R[A]=y.clone(),!0;{const N=R[A];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return R[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function g(S){const T=S.uniforms;let b=0;const R=16;for(let A=0,N=T.length;A<N;A++){const F=Array.isArray(T[A])?T[A]:[T[A]];for(let V=0,X=F.length;V<X;V++){const I=F[V],G=Array.isArray(I.value)?I.value:[I.value];for(let Q=0,$=G.length;Q<$;Q++){const B=G[Q],k=d(B),j=b%R,J=j%k.boundary,me=j+J;b+=J,me!==0&&R-me<k.storage&&(b+=R-me),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=k.storage}}}const y=b%R;return y>0&&(b+=R-y),S.__size=b,S.__cache={},this}function d(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),T}function x(S){const T=S.target;T.removeEventListener("dispose",x);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const NT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function PT(){return ti===null&&(ti=new rM(NT,16,16,Dr,di),ti.name="DFG_LUT",ti.minFilter=Kt,ti.magFilter=Kt,ti.wrapS=wi,ti.wrapT=wi,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class LT{constructor(e={}){const{canvas:n=DS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Ln}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=m,g=new Set([dh,uh,ch]),d=new Set([Ln,ui,Ba,za,oh,lh]),x=new Uint32Array(4),M=new Int32Array(4),S=new U;let T=null,b=null;const R=[],y=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,V=null,X=null,I=null,G=null;this._outputColorSpace=Cn;let Q=0,$=0,B=null,k=-1,j=null;const J=new Et,me=new Et;let we=null;const qe=new $e(0);let Be=0,ke=n.width,Y=n.height,ne=1,Se=null,De=null;const xe=new Et(0,0,ke,Y),ze=new Et(0,0,ke,Y);let Nt=!1;const He=new Pv;let Qe=!1,lt=!1;const je=new yt,mt=new U,Ut=new Et,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Tt(){return B===null?ne:1}let D=i;function Gt(w,P){return n.getContext(w,P)}let nt,C,_,O,W,K,se,ae,Z,te,oe,Ae,de,le,Ce,Pe,Ue,L,ce,ee,ue,ge,ie;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sh}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",et,!1),n.addEventListener("webglcontextcreationerror",On,!1),D===null){const P="webgl2";if(D=Gt(P,w),D===null)throw Gt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(w){throw n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",On,!1),Ze("WebGLRenderer: "+w.message),w}function Re(){nt=new Pw(D),nt.init(),ue=new MT(D,nt),C=new Sw(D,nt,e,ue),_=new yT(D,nt),C.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),X=D.createFramebuffer(),I=D.createFramebuffer(),G=D.createFramebuffer(),O=new Iw(D),W=new aT,K=new ST(D,nt,_,W,C,ue,O),se=new Nw(N),ae=new FM(D),ge=new _w(D,ae),Z=new Lw(D,ae,O,ge),te=new Fw(D,Z,ae,ge,O),L=new Uw(D,C,K),Ce=new Mw(W),oe=new sT(N,se,nt,C,ge,Ce),Ae=new CT(N,W),de=new lT,le=new pT(nt),Ue=new xw(N,se,_,te,v,l),Pe=new _T(N,te,C),ie=new RT(D,O,C,_),ce=new yw(D,nt,O),ee=new Dw(D,nt,O),O.programs=oe.programs,N.capabilities=C,N.extensions=nt,N.properties=W,N.renderLists=de,N.shadowMap=Pe,N.state=_,N.info=O}E!==Ln&&(A=new kw(E,n.width,n.height,o,r,s));const be=new TT(N,D);this.xr=be,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(ke,Y,!1))},this.getSize=function(w){return w.set(ke,Y)},this.setSize=function(w,P,q=!0){if(be.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=w,Y=P,n.width=Math.floor(w*ne),n.height=Math.floor(P*ne),q===!0&&(n.style.width=w+"px",n.style.height=P+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,w,P)},this.getDrawingBufferSize=function(w){return w.set(ke*ne,Y*ne).floor()},this.setDrawingBufferSize=function(w,P,q){ke=w,Y=P,ne=q,n.width=Math.floor(w*q),n.height=Math.floor(P*q),this.setViewport(0,0,w,P)},this.setEffects=function(w){if(E===Ln){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let P=0;P<w.length;P++)if(w[P].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(xe)},this.setViewport=function(w,P,q,z){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,P,q,z),_.viewport(J.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(ze)},this.setScissor=function(w,P,q,z){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,P,q,z),_.scissor(me.copy(ze).multiplyScalar(ne).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(w){_.setScissorTest(Nt=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){De=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(w=!0,P=!0,q=!0){let z=0;if(w){let H=!1;if(B!==null){const pe=B.texture.format;H=g.has(pe)}if(H){const pe=B.texture.type,_e=d.has(pe),he=Ue.getClearColor(),Me=Ue.getClearAlpha(),Te=he.r,Fe=he.g,Ve=he.b;_e?(x[0]=Te,x[1]=Fe,x[2]=Ve,x[3]=Me,D.clearBufferuiv(D.COLOR,0,x)):(M[0]=Te,M[1]=Fe,M[2]=Ve,M[3]=Me,D.clearBufferiv(D.COLOR,0,M))}else z|=D.COLOR_BUFFER_BIT}P&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),V=w},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",On,!1),Ue.dispose(),de.dispose(),le.dispose(),W.dispose(),se.dispose(),te.dispose(),ge.dispose(),ie.dispose(),oe.dispose(),be.dispose(),be.removeEventListener("sessionstart",wh),be.removeEventListener("sessionend",bh),fr.stop()};function ct(w){w.preventDefault(),Yp("WebGLRenderer: Context Lost."),F=!0}function et(){Yp("WebGLRenderer: Context Restored."),F=!1;const w=O.autoReset,P=Pe.enabled,q=Pe.autoUpdate,z=Pe.needsUpdate,H=Pe.type;Re(),O.autoReset=w,Pe.enabled=P,Pe.autoUpdate=q,Pe.needsUpdate=z,Pe.type=H}function On(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zn(w){const P=w.target;P.removeEventListener("dispose",Zn),Qv(P)}function Qv(w){ex(w),W.remove(w)}function ex(w){const P=W.get(w).programs;P!==void 0&&(P.forEach(function(q){oe.releaseProgram(q)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,P,q,z,H,pe){P===null&&(P=on);const _e=H.isMesh&&H.matrixWorld.determinantAffine()<0,he=ix(w,P,q,z,H);_.setMaterial(z,_e);let Me=q.index,Te=1;if(z.wireframe===!0){if(Me=Z.getWireframeAttribute(q),Me===void 0)return;Te=2}const Fe=q.drawRange,Ve=q.attributes.position;let Ee=Fe.start*Te,tt=(Fe.start+Fe.count)*Te;pe!==null&&(Ee=Math.max(Ee,pe.start*Te),tt=Math.min(tt,(pe.start+pe.count)*Te)),Me!==null?(Ee=Math.max(Ee,0),tt=Math.min(tt,Me.count)):Ve!=null&&(Ee=Math.max(Ee,0),tt=Math.min(tt,Ve.count));const At=tt-Ee;if(At<0||At===1/0)return;ge.setup(H,z,he,q,Me);let ft,at=ce;if(Me!==null&&(ft=ae.get(Me),at=ee,at.setIndex(ft)),H.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Tt()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(H.isLine){let Wt=z.linewidth;Wt===void 0&&(Wt=1),_.setLineWidth(Wt*Tt()),H.isLineSegments?at.setMode(D.LINES):H.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else H.isPoints?at.setMode(D.POINTS):H.isSprite&&at.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Wt=H._multiDrawStarts,ve=H._multiDrawCounts,Jt=H._multiDrawCount,Ke=Me?ae.get(Me).bytesPerElement:1,Tn=W.get(z).currentProgram.getUniforms();for(let Jn=0;Jn<Jt;Jn++)Tn.setValue(D,"_gl_DrawID",Jn),at.render(Wt[Jn]/Ke,ve[Jn])}else if(H.isInstancedMesh)at.renderInstances(Ee,At,H.count);else if(q.isInstancedBufferGeometry){const Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,Wt);at.renderInstances(Ee,At,ve)}else at.render(Ee,At)};function Eh(w,P,q,z){V!==null&&w.isNodeMaterial&&V.setObject(z,w),Qe===!0&&Ce.setState(w,q,!1),w.transparent===!0&&w.side===Si&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,eo(w,P,z),w.side=lr,w.needsUpdate=!0,eo(w,P,z),w.side=Si):eo(w,P,z)}this.compile=function(w,P,q=null){q===null&&(q=w),V!==null&&V.renderStart(w,P,q),b=le.get(q),b.init(P),y.push(b),q.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),w!==q&&w.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights(),V!==null&&V.updateLights(b.state.lightsArray),lt=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,lt),Qe===!0&&Ce.setGlobalState(this.clippingPlanes,P),V!==null&&Pe.render(b.state.shadowsArray,q,P);const z=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pe=H.material;if(pe)if(Array.isArray(pe))for(let _e=0;_e<pe.length;_e++){const he=pe[_e];Eh(he,q,P,H),z.add(he)}else Eh(pe,q,P,H),z.add(pe)}),b=y.pop(),V!==null&&V.renderEnd(),z},this.compileAsync=function(w,P,q=null){const z=this.compile(w,P,q);return new Promise(H=>{function pe(){if(z.forEach(function(_e){const Me=W.get(_e).currentProgram;(Me===void 0||Me.isReady())&&z.delete(_e)}),z.size===0){H(w);return}setTimeout(pe,10)}nt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let pc=null;function tx(w){pc&&pc(w)}function wh(){fr.stop()}function bh(){fr.start()}const fr=new zv;fr.setAnimationLoop(tx),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(w){pc=w,be.setAnimationLoop(w),w===null?fr.stop():fr.start()},be.addEventListener("sessionstart",wh),be.addEventListener("sessionend",bh),this.render=function(w,P){if(P!==void 0&&P.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;V!==null&&V.renderStart(w,P);const q=be.enabled===!0&&be.isPresenting===!0,z=A!==null&&(B===null||q)&&A.begin(N,B);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(P),P=be.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,P,B),b=le.get(w,y.length),b.init(P),b.state.textureUnits=K.getTextureUnits(),y.push(b),je.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),He.setFromProjectionMatrix(je,ai,P.reversedDepth),lt=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,lt),T=de.get(w,R.length),T.init(),R.push(T),be.enabled===!0&&be.isPresenting===!0){const _e=N.xr.getDepthSensingMesh();_e!==null&&mc(_e,P,-1/0,N.sortObjects)}mc(w,P,0,N.sortObjects),T.finish(),V!==null&&V.updateLights(b.state.lightsArray),N.sortObjects===!0&&T.sort(Se,De),vt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,vt&&Ue.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ce.beginShadows();const H=b.state.shadowsArray;if(Pe.render(H,w,P),Qe===!0&&Ce.endShadows(),(z&&A.hasRenderPass())===!1){const _e=T.opaque,he=T.transmissive;if(b.setupLights(),P.isArrayCamera){const Me=P.cameras;if(he.length>0)for(let Te=0,Fe=Me.length;Te<Fe;Te++){const Ve=Me[Te];Ah(_e,he,w,Ve)}vt&&Ue.render(w);for(let Te=0,Fe=Me.length;Te<Fe;Te++){const Ve=Me[Te];Th(T,w,Ve,Ve.viewport)}}else he.length>0&&Ah(_e,he,w,P),vt&&Ue.render(w),Th(T,w,P)}B!==null&&$===0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),z&&A.end(N),w.isScene===!0&&w.onAfterRender(N,w,P),ge.resetDefaultState(),k=-1,j=null,y.pop(),y.length>0?(b=y[y.length-1],K.setTextureUnits(b.state.textureUnits),Qe===!0&&Ce.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,V!==null&&V.renderEnd()};function mc(w,P,q,z){if(w.visible===!1)return;if(w.layers.test(P.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(P);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(He)){z&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(je);const _e=te.update(w),he=w.material;he.visible&&T.push(w,_e,he,q,Ut.z,null,P)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(He))){const _e=te.update(w),he=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ut.copy(_e.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(je)),Array.isArray(he)){const Me=_e.groups;for(let Te=0,Fe=Me.length;Te<Fe;Te++){const Ve=Me[Te],Ee=he[Ve.materialIndex];Ee&&Ee.visible&&T.push(w,_e,Ee,q,Ut.z,Ve,P)}}else he.visible&&T.push(w,_e,he,q,Ut.z,null,P)}}const pe=w.children;for(let _e=0,he=pe.length;_e<he;_e++)mc(pe[_e],P,q,z)}function Th(w,P,q,z){const{opaque:H,transmissive:pe,transparent:_e}=w;b.setupLightsView(q),Qe===!0&&Ce.setGlobalState(N.clippingPlanes,q),z&&_.viewport(J.copy(z)),H.length>0&&Qa(H,P,q),pe.length>0&&Qa(pe,P,q),_e.length>0&&Qa(_e,P,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ah(w,P,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const Ee=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new $n(1,1,{generateMipmaps:!0,type:Ee?di:Ln,minFilter:Er,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const pe=b.state.transmissionRenderTarget[z.id],_e=z.viewport||J;pe.setSize(_e.z*N.transmissionResolutionScale,_e.w*N.transmissionResolutionScale);const he=N.getRenderTarget(),Me=N.getActiveCubeFace(),Te=N.getActiveMipmapLevel();N.setRenderTarget(pe),N.getClearColor(qe),Be=N.getClearAlpha(),Be<1&&N.setClearColor(16777215,.5),N.clear(),vt&&Ue.render(q);const Fe=N.toneMapping;N.toneMapping=ci;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Qe===!0&&Ce.setGlobalState(N.clippingPlanes,z),Qa(w,q,z),K.updateMultisampleRenderTarget(pe),K.updateRenderTargetMipmap(pe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let tt=0,At=P.length;tt<At;tt++){const ft=P[tt],{object:at,geometry:Wt,material:ve,group:Jt}=ft;if(ve.side===Si&&at.layers.test(z.layers)){const Ke=ve.side;ve.side=pn,ve.needsUpdate=!0,Ch(at,q,z,Wt,ve,Jt),ve.side=Ke,ve.needsUpdate=!0,Ee=!0}}Ee===!0&&(K.updateMultisampleRenderTarget(pe),K.updateRenderTargetMipmap(pe))}N.setRenderTarget(he,Me,Te),N.setClearColor(qe,Be),Ve!==void 0&&(z.viewport=Ve),N.toneMapping=Fe}function Qa(w,P,q){const z=P.isScene===!0?P.overrideMaterial:null;for(let H=0,pe=w.length;H<pe;H++){const _e=w[H],{object:he,geometry:Me,group:Te}=_e;let Fe=_e.material;Fe.allowOverride===!0&&z!==null&&(Fe=z),he.layers.test(q.layers)&&Ch(he,P,q,Me,Fe,Te)}}function Ch(w,P,q,z,H,pe){V!==null&&H.isNodeMaterial&&V.setObject(w,H),w.onBeforeRender(N,P,q,z,H,pe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(N,P,q,z,w,pe),H.transparent===!0&&H.side===Si&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,N.renderBufferDirect(q,P,z,H,w,pe),H.side=lr,H.needsUpdate=!0,N.renderBufferDirect(q,P,z,H,w,pe),H.side=Si):N.renderBufferDirect(q,P,z,H,w,pe),w.onAfterRender(N,P,q,z,H,pe)}function eo(w,P,q){P.isScene!==!0&&(P=on);const z=W.get(w),H=b.state.lights,pe=b.state.shadowsArray,_e=H.state.version,he=oe.getParameters(w,H.state,pe,P,q,b.state.lightProbeGridArray),Me=oe.getProgramCacheKey(he);let Te=z.programs;z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;const Fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;z.envMap=se.get(w.envMap||z.environment,Fe),z.envMapRotation=z.environment!==null&&w.envMap===null?P.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",Zn),Te=new Map,z.programs=Te);let Ve=Te.get(Me);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===_e)return Nh(w,he),Ve}else he.uniforms=oe.getUniforms(w),V!==null&&w.isNodeMaterial&&V.build(w,q,he),w.onBeforeCompile(he,N),Ve=oe.acquireProgram(he,Me),Te.set(Me,Ve),z.uniforms=he.uniforms;const Ee=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=Ce.uniform),Nh(w,he),z.needsLights=sx(w),z.lightsStateVersion=_e,z.needsLights&&(Ee.ambientLightColor.value=H.state.ambient,Ee.lightProbe.value=H.state.probe,Ee.sunLights.value=H.state.sun,Ee.sunLightShadows.value=H.state.sunShadow,Ee.directionalLights.value=H.state.directional,Ee.directionalLightShadows.value=H.state.directionalShadow,Ee.spotLights.value=H.state.spot,Ee.spotLightShadows.value=H.state.spotShadow,Ee.rectAreaLights.value=H.state.rectArea,Ee.ltc_1.value=H.state.rectAreaLTC1,Ee.ltc_2.value=H.state.rectAreaLTC2,Ee.pointLights.value=H.state.point,Ee.pointLightShadows.value=H.state.pointShadow,Ee.hemisphereLights.value=H.state.hemi,Ee.sunShadowMatrix.value=H.state.sunShadowMatrix,Ee.sunShadowCascade.value=H.state.sunShadowCascade,Ee.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ee.spotLightMatrix.value=H.state.spotLightMatrix,Ee.spotLightMap.value=H.state.spotLightMap,Ee.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function Rh(w){if(w.uniformsList===null){const P=w.currentProgram.getUniforms();w.uniformsList=al.seqWithValue(P.seq,w.uniforms)}return w.uniformsList}function Nh(w,P){const q=W.get(w);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function nx(w,P){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(P.matrixWorld);for(let q=0,z=w.length;q<z;q++){const H=w[q];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function ix(w,P,q,z,H){P.isScene!==!0&&(P=on),K.resetTextureUnits();const pe=P.fog,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,he=B===null?N.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xe.workingColorSpace,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=se.get(z.envMap||_e,Me),Fe=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!q.morphAttributes.position,tt=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let ft=ci;z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ft=N.toneMapping);const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=at!==void 0?at.length:0,ve=W.get(z),Jt=b.state.lights;if(Qe===!0&&(lt===!0||w!==j)){const ut=w===j&&z.id===k;Ce.setState(z,w,ut)}let Ke=!1;z.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Jt.state.version||ve.outputColorSpace!==he||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==Te||z.fog===!0&&ve.fog!==pe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ce.numPlanes||ve.numIntersection!==Ce.numIntersection)||ve.vertexAlphas!==Fe||ve.vertexTangents!==Ve||ve.morphTargets!==Ee||ve.morphNormals!==tt||ve.morphColors!==At||ve.toneMapping!==ft||ve.morphTargetsCount!==Wt||!!ve.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,ve.__version=z.version);let Tn=ve.currentProgram;Ke===!0&&(Tn=eo(z,P,H),V&&z.isNodeMaterial&&V.onUpdateProgram(z,Tn,ve));let Jn=!1,Fi=!1,kr=!1;const st=Tn.getUniforms(),wt=ve.uniforms;if(_.useProgram(Tn.program)&&(Jn=!0,Fi=!0,kr=!0),z.id!==k&&(k=z.id,Fi=!0),ve.needsLights){const ut=nx(b.state.lightProbeGridArray,H);ve.lightProbeGrid!==ut&&(ve.lightProbeGrid=ut,Fi=!0)}if(Jn||j!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),st.setValue(D,"projectionMatrix",w.projectionMatrix),st.setValue(D,"viewMatrix",w.matrixWorldInverse);const ki=st.map.cameraPosition;ki!==void 0&&ki.setValue(D,mt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&st.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,Fi=!0,kr=!0)}if(ve.needsLights&&(Jt.state.sunShadowMap.length>0&&st.setValue(D,"sunShadowMap",Jt.state.sunShadowMap,K),Jt.state.directionalShadowMap.length>0&&st.setValue(D,"directionalShadowMap",Jt.state.directionalShadowMap,K),Jt.state.spotShadowMap.length>0&&st.setValue(D,"spotShadowMap",Jt.state.spotShadowMap,K),Jt.state.pointShadowMap.length>0&&st.setValue(D,"pointShadowMap",Jt.state.pointShadowMap,K)),H.isSkinnedMesh){st.setOptional(D,H,"bindMatrix"),st.setOptional(D,H,"bindMatrixInverse");const ut=H.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),st.setValue(D,"boneTexture",ut.boneTexture,K))}H.isBatchedMesh&&(st.setOptional(D,H,"batchingTexture"),st.setValue(D,"batchingTexture",H._matricesTexture,K),st.setOptional(D,H,"batchingIdTexture"),st.setValue(D,"batchingIdTexture",H._indirectTexture,K),st.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&st.setValue(D,"batchingColorTexture",H._colorsTexture,K));const Oi=q.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&L.update(H,q,Tn),(Fi||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,st.setValue(D,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(wt.envMapIntensity.value=P.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=PT()),Fi){if(st.setValue(D,"toneMappingExposure",N.toneMappingExposure),ve.needsLights&&rx(wt,kr),pe&&z.fog===!0&&Ae.refreshFogUniforms(wt,pe),Ae.refreshMaterialUniforms(wt,z,ne,Y,b.state.transmissionRenderTarget[w.id]),ve.needsLights&&ve.lightProbeGrid){const ut=ve.lightProbeGrid;wt.probesSH.value=ut.texture,wt.probesMin.value.copy(ut.boundingBox.min),wt.probesMax.value.copy(ut.boundingBox.max),wt.probesResolution.value.copy(ut.resolution)}al.upload(D,Rh(ve),wt,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(al.upload(D,Rh(ve),wt,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(D,"center",H.center),st.setValue(D,"modelViewMatrix",H.modelViewMatrix),st.setValue(D,"normalMatrix",H.normalMatrix),st.setValue(D,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const ut=z.uniformsGroups;for(let ki=0,Br=ut.length;ki<Br;ki++){const Lh=ut[ki];ie.update(Lh,Tn),ie.bind(Lh,Tn)}}return Tn}function rx(w,P){w.ambientLightColor.needsUpdate=P,w.lightProbe.needsUpdate=P,w.sunLights.needsUpdate=P,w.sunLightShadows.needsUpdate=P,w.directionalLights.needsUpdate=P,w.directionalLightShadows.needsUpdate=P,w.pointLights.needsUpdate=P,w.pointLightShadows.needsUpdate=P,w.spotLights.needsUpdate=P,w.spotLightShadows.needsUpdate=P,w.rectAreaLights.needsUpdate=P,w.hemisphereLights.needsUpdate=P}function sx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,P,q){const z=W.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=P,W.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,P){const q=W.get(w);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(w,P=0,q=0){B=w,Q=P,$=q;let z=null,H=!1,pe=!1;if(w){const he=W.get(w);if(he.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),J.copy(w.viewport),me.copy(w.scissor),we=w.scissorTest,_.viewport(J),_.scissor(me),_.setScissorTest(we),k=-1;return}else if(he.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(he.__hasExternalTextures)K.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Fe=w.depthTexture;if(he.__boundDepthTexture!==Fe){if(Fe!==null&&W.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const Me=w.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Te=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Te[P])?z=Te[P][q]:z=Te[P],H=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?z=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[q]:z=Te,J.copy(w.viewport),me.copy(w.scissor),we=w.scissorTest}else J.copy(xe).multiplyScalar(ne).floor(),me.copy(ze).multiplyScalar(ne).floor(),we=Nt;if(q!==0&&(z=X),_.bindFramebuffer(D.FRAMEBUFFER,z)&&_.drawBuffers(w,z),_.viewport(J),_.scissor(me),_.setScissorTest(we),H){const he=W.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,q)}else if(pe){const he=P;for(let Me=0;Me<w.textures.length;Me++){const Te=W.get(w.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Te.__webglTexture,q,he)}}else if(w!==null&&q!==0){const he=W.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,q)}k=-1};function Ph(w){const P=W.get(w);return(P.__readFormat!==w.format||P.__readType!==w.type)&&(P.__readFormat=w.format,P.__readType=w.type,P.__formatReadable=C.textureFormatReadable(w.format),P.__typeReadable=C.textureTypeReadable(w.type)),P}this.readRenderTargetPixels=function(w,P,q,z,H,pe,_e,he=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){_.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Te=w.textures[he],Fe=Te.format,Ve=Te.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);const Ee=Ph(Te);if(Ee.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=w.width-z&&q>=0&&q<=w.height-H&&D.readPixels(P,q,z,H,ue.convert(Fe),ue.convert(Ve),pe)}finally{const Te=B!==null?W.get(B).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,P,q,z,H,pe,_e,he=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me)if(P>=0&&P<=w.width-z&&q>=0&&q<=w.height-H){_.bindFramebuffer(D.FRAMEBUFFER,Me);const Te=w.textures[he],Fe=Te.format,Ve=Te.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);const Ee=Ph(Te);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(P,q,z,H,ue.convert(Fe),ue.convert(Ve),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const At=B!==null?W.get(B).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,At);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await IS(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(tt),D.deleteSync(ft),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,P=null,q=0){const z=Math.pow(2,-q),H=Math.floor(w.image.width*z),pe=Math.floor(w.image.height*z),_e=P!==null?P.x:0,he=P!==null?P.y:0;K.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,_e,he,H,pe),_.unbindTexture()},this.copyTextureToTexture=function(w,P,q=null,z=null,H=0,pe=0){let _e,he,Me,Te,Fe,Ve,Ee,tt,At;const ft=w.isCompressedTexture?w.mipmaps[pe]:w.image;if(q!==null)_e=q.max.x-q.min.x,he=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Fe=q.min.y,Ve=q.isBox3?q.min.z:0;else{const wt=Math.pow(2,-H);_e=Math.floor(ft.width*wt),he=Math.floor(ft.height*wt),w.isDataArrayTexture?Me=ft.depth:w.isData3DTexture?Me=Math.floor(ft.depth*wt):Me=1,Te=0,Fe=0,Ve=0}z!==null?(Ee=z.x,tt=z.y,At=z.z):(Ee=0,tt=0,At=0);const at=ue.convert(P.format),Wt=ue.convert(P.type);let ve;P.isData3DTexture?(K.setTexture3D(P,0),ve=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(K.setTexture2DArray(P,0),ve=D.TEXTURE_2D_ARRAY):(K.setTexture2D(P,0),ve=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const Jt=_.getParameter(D.UNPACK_ROW_LENGTH),Ke=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Tn=_.getParameter(D.UNPACK_SKIP_PIXELS),Jn=_.getParameter(D.UNPACK_SKIP_ROWS),Fi=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),_.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);const kr=w.isDataArrayTexture||w.isData3DTexture,st=P.isDataArrayTexture||P.isData3DTexture;if(w.isDepthTexture){const wt=W.get(w),Oi=W.get(P),ut=W.get(wt.__renderTarget),ki=W.get(Oi.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,ut.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Br=0;Br<Me;Br++)kr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(w).__webglTexture,H,Ve+Br),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(P).__webglTexture,pe,At+Br)),D.blitFramebuffer(Te,Fe,_e,he,Ee,tt,_e,he,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||W.has(w)){const wt=W.get(w),Oi=W.get(P);_.bindFramebuffer(D.READ_FRAMEBUFFER,I),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let ut=0;ut<Me;ut++)kr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,H,Ve+ut):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,H),st?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oi.__webglTexture,pe,At+ut):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Oi.__webglTexture,pe),H!==0?D.blitFramebuffer(Te,Fe,_e,he,Ee,tt,_e,he,D.COLOR_BUFFER_BIT,D.NEAREST):st?D.copyTexSubImage3D(ve,pe,Ee,tt,At+ut,Te,Fe,_e,he):D.copyTexSubImage2D(ve,pe,Ee,tt,Te,Fe,_e,he);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else st?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(ve,pe,Ee,tt,At,_e,he,Me,at,Wt,ft.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(ve,pe,Ee,tt,At,_e,he,Me,at,ft.data):D.texSubImage3D(ve,pe,Ee,tt,At,_e,he,Me,at,Wt,ft):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,Ee,tt,_e,he,at,Wt,ft.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,Ee,tt,ft.width,ft.height,at,ft.data):D.texSubImage2D(D.TEXTURE_2D,pe,Ee,tt,_e,he,at,Wt,ft);_.pixelStorei(D.UNPACK_ROW_LENGTH,Jt),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Tn),_.pixelStorei(D.UNPACK_SKIP_ROWS,Jn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Fi),pe===0&&P.generateMipmaps&&D.generateMipmap(ve),_.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){Q=0,$=0,B=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}const Yv=`
// Multi-octave 3D simplex-like noise helper
vec3 hash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float snoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
                     dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
                 mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
                     dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
                     dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
                 mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
                     dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}

// Localized mouse deformation function (Refined, Subtle Wave)
vec3 deformPosition(vec3 pos, vec2 uMouse, float uInteractionStrength, float uMouseVel, float uTime) {
  vec2 uv = pos.xy;
  float distToMouse = length(uv - uMouse);

  // Tighter interaction radius (~0.65 units)
  float interactionRadius = 0.65;

  // Soft smoothstep falloff: 1 at center, 0 at edge
  float mouseMask = 1.0 - smoothstep(interactionRadius * 0.2, interactionRadius, distToMouse);
  mouseMask = mouseMask * uInteractionStrength;

  // Subtle wave ripple
  float wave = sin(distToMouse * 12.0 - uTime * 3.5) * exp(-distToMouse * 3.0);

  // Small velocity boost multiplier
  float velBoost = 1.0 + uMouseVel * 1.5;

  // Direction away from mouse in XY plane
  vec2 dir = distToMouse > 0.001 ? (uv - uMouse) / distToMouse : vec2(0.0, 1.0);

  // Controlled, subtle displacement (max ~0.08 units push)
  vec3 push = vec3(dir * wave * 0.08 * mouseMask * velBoost, wave * 0.06 * mouseMask * velBoost);

  return pos + push;
}
`,DT=`
${Yv}

uniform vec2  uMouse;
uniform float uInteractionStrength;
uniform float uMouseVel;
uniform float uTime;

varying vec3  vWorldPos;
varying vec3  vNormal;
varying float vDeform;

void main() {
  vec3 deformed = deformPosition(position, uMouse, uInteractionStrength, uMouseVel, uTime);

  // Transform normal cleanly to view space for specular & rim lighting
  vNormal   = normalize(normalMatrix * normal);
  vWorldPos = deformed;
  vDeform   = length(deformed - position);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
}
`,IT=`
precision highp float;

uniform vec2  uMouse;
uniform float uInteractionStrength;
uniform float uTime;

varying vec3  vWorldPos;
varying vec3  vNormal;
varying float vDeform;

const vec3 ORANGE    = vec3(0.996, 0.412, 0.012); // #FE6903
const vec3 DARK_BASE = vec3(0.05, 0.05, 0.06);   // #0D0D0D dark graphite
const vec3 RIM_COL   = vec3(1.0, 0.48, 0.02);

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vec3(0.0, 0.0, 1.0)); // View direction

  // Studio lighting setup
  // Key Light (Orange rim light from top right)
  vec3 L1 = normalize(vec3(1.4, 1.6, 1.2));
  float diff1 = max(dot(N, L1), 0.0);

  // Fill Light (Dark cool fill)
  vec3 L2 = normalize(vec3(-1.2, -0.6, 0.6));
  float diff2 = max(dot(N, L2), 0.0) * 0.1;

  // Specular Highlight
  vec3 R1 = reflect(-L1, N);
  float spec1 = pow(max(dot(R1, V), 0.0), 28.0);

  // Edge Rim Lighting
  float rim = 1.0 - abs(dot(N, V));
  rim = pow(rim, 1.8);

  // Base dark charcoal color
  vec3 color = DARK_BASE;
  color += DARK_BASE * diff2;
  color += ORANGE * diff1 * 0.22;  // Soft orange light side
  color += ORANGE * spec1 * 0.55;  // Orange specular highlight
  color += RIM_COL * rim * 0.70;   // Orange rim light on edges

  // Tighter, subtle Mouse Proximity Glow
  vec2 uv = vWorldPos.xy;
  float dMouse = length(uv - uMouse);
  float glowMask = (1.0 - smoothstep(0.0, 0.75, dMouse)) * uInteractionStrength;
  color += ORANGE * glowMask * 0.22;

  // Local deformation glow boost
  color += ORANGE * vDeform * 0.65;

  gl_FragColor = vec4(color, 0.95);
}
`;function UT(t=!1){const e=t?90:160,n=t?20:32,i=[],r=120;for(let g=0;g<=r;g++){const d=g/r,x=(d-.5)*4.6,M=d*Math.PI*2.8,S=(Math.sin(d*Math.PI)*.72+.28)*.85,T=Math.cos(M)*S+Math.sin(d*Math.PI*2)*.18,b=Math.sin(M)*S*.95;i.push(new U(T,x,b))}const s=new oa(i),a=new ps(s,e,.33,n,!1),o=[];for(let g=0;g<=r;g++){const d=g/r,x=(d-.5)*4.9,M=-d*Math.PI*3.2+1.2,S=(Math.sin(d*Math.PI)*.82+.32)*1.02,T=Math.cos(M)*S*1.1+.12,b=Math.sin(M)*S*.88;o.push(new U(T,x,b))}const l=new oa(o),c=new ps(l,Math.floor(e*.85),.21,n,!1),h=[];for(let g=0;g<=r;g++){const d=g/r,x=(d-.5)*4,M=d*Math.PI*3.6-.9,S=(Math.sin(d*Math.PI)*.65+.22)*.78,T=Math.sin(M)*S-.15,b=Math.cos(M)*S*1.15;h.push(new U(T,x,b))}const p=new oa(h),f=new ps(p,Math.floor(e*.75),.15,Math.floor(n*.8),!1),m=[];for(let g=0;g<=r;g++){const d=g/r,x=(d-.5)*4.4,M=-d*Math.PI*2.4+2.4,S=(Math.sin(d*Math.PI)*.75+.25)*.92,T=Math.cos(M)*S*.85,b=Math.sin(M)*S*1.05+.18;m.push(new U(T,x,b))}const v=new oa(m),E=new ps(v,Math.floor(e*.75),.12,Math.floor(n*.75),!1);return[{geometry:a,scale:1},{geometry:c,scale:1},{geometry:f,scale:1},{geometry:E,scale:1}]}const wu=`
${Yv}

uniform vec2  uMouse;
uniform float uInteractionStrength;
uniform float uMouseVel;
uniform float uTime;

varying float vDeform;
varying float vMouseDist;

void main() {
  vec3 deformed = deformPosition(position, uMouse, uInteractionStrength, uMouseVel, uTime);

  vMouseDist = length(deformed.xy - uMouse);
  vDeform    = length(deformed - position);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
}
`,bu=`
precision highp float;

uniform float uLineOpacity;
uniform float uInteractionStrength;
uniform vec3  uLineColor;

varying float vDeform;
varying float vMouseDist;

void main() {
  float alpha = uLineOpacity;

  // Localized mouse proximity brightness boost
  float mouseBoost = (1.0 - smoothstep(0.0, 1.5, vMouseDist)) * uInteractionStrength * 0.60;

  // Local deformation boost
  float deformBoost = vDeform * 1.5;

  float finalAlpha = clamp(alpha + mouseBoost + deformBoost, 0.0, 1.0);
  vec3 finalColor = uLineColor + vec3(mouseBoost * 0.8, mouseBoost * 0.3, 0.0);

  gl_FragColor = vec4(finalColor, finalAlpha);
}
`;function FT(t,e=24,n=8){const i=t.attributes.position,r=i.count,s=t.parameters.radialSegments,a=s+1,o=Math.floor(r/a),l=[],c=[],h=Math.max(1,Math.floor(o/e));for(let f=0;f<o;f+=h){const m=[];for(let v=0;v<a;v++){const E=f*a+v;E<r&&m.push(i.getX(E),i.getY(E),i.getZ(E))}if(m.length>=6){const v=new En;v.setAttribute("position",new rn(m,3)),l.push(v)}}const p=Math.max(1,Math.floor(s/n));for(let f=0;f<s;f+=p){const m=[];for(let v=0;v<o;v++){const E=v*a+f;E<r&&m.push(i.getX(E),i.getY(E),i.getZ(E))}if(m.length>=6){const v=new En;v.setAttribute("position",new rn(m,3)),c.push(v)}}return{ringGeos:l,ribGeos:c}}const Gm=new $e(16673027);function OT(t,e,n=!1){const i=new hs;return t.forEach(({geometry:r},s)=>{const a=n?s===0?18:12:s===0?32:20,o=n?s===0?6:4:s===0?10:6,{ringGeos:l,ribGeos:c}=FT(r,a,o),h=new gn({vertexShader:wu,fragmentShader:bu,uniforms:{...e,uLineOpacity:{value:.22},uLineColor:{value:new $e(Gm).multiplyScalar(.7)}},transparent:!0,depthTest:!0,depthWrite:!1,blending:Es}),p=new gn({vertexShader:wu,fragmentShader:bu,uniforms:{...e,uLineOpacity:{value:.55},uLineColor:{value:Gm}},transparent:!0,depthTest:!0,depthWrite:!1,blending:Ll}),f=new gn({vertexShader:wu,fragmentShader:bu,uniforms:{...e,uLineOpacity:{value:.85},uLineColor:{value:new $e(16746530)}},transparent:!0,depthTest:!0,depthWrite:!1,blending:Ll});l.forEach((m,v)=>{let E=h;v%3===0&&(E=p),v%7===0&&(E=f);const g=new oM(m,E);g.scale.setScalar(1.003),i.add(g)}),c.forEach((m,v)=>{const E=v%2===0?p:h,g=new Lv(m,E);g.scale.setScalar(1.003),i.add(g)})}),i}function kT(){const t=Ye.useRef(null);return Ye.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=e.clientWidth<768,r=new LT({antialias:!0,alpha:!0,powerPreference:"high-performance"}),s=Math.min(window.devicePixelRatio,2);r.setPixelRatio(s),r.setClearColor(0,0),r.setSize(e.clientWidth,e.clientHeight),e.appendChild(r.domElement);const a=new KS,o=new Pn(40,e.clientWidth/e.clientHeight,.1,100);o.position.set(.6,.1,5.4),o.lookAt(.3,0,0);const l={ndc:new Ne(-9999,-9999),rawObject:new Ne(-9999,-9999),smoothObj:new Ne(-9999,-9999),prevObj:new Ne(-9999,-9999),velocity:0,strength:0,targetStrength:0},c={uMouse:{value:new Ne(0,0)},uInteractionStrength:{value:0},uMouseVel:{value:0},uTime:{value:0}},h=UT(i),p=new hs,f=[];h.forEach(({geometry:A})=>{const N=new gn({vertexShader:DT,fragmentShader:IT,uniforms:{...c},transparent:!0,side:lr,depthTest:!0,depthWrite:!0}),F=new fi(A,N);f.push(F),p.add(F)});const m=OT(h,c,i);p.add(m),i?(p.position.set(.2,0,0),p.scale.set(.6,.6,.6)):(p.position.set(.5,0,0),p.scale.set(.8,.8,.8)),a.add(p);const v=new DM,E=new yi(new U(0,0,1),0),g=new U,d=new U,x=A=>{if(n)return;const N=e.getBoundingClientRect();l.ndc.x=(A.clientX-N.left)/N.width*2-1,l.ndc.y=-((A.clientY-N.top)/N.height)*2+1,v.setFromCamera(l.ndc,o),v.ray.intersectPlane(E,g)&&(d.copy(g),p.worldToLocal(d),l.rawObject.set(d.x,d.y))},M=()=>{l.targetStrength=0};window.addEventListener("mousemove",x),window.addEventListener("mouseleave",M);const S=()=>{const A=e.clientWidth,N=e.clientHeight;o.aspect=A/N,o.updateProjectionMatrix(),r.setSize(A,N),A<768?(p.position.set(.2,0,0),p.scale.set(.6,.6,.6)):(p.position.set(.5,0,0),p.scale.set(.8,.8,.8))},T=new ResizeObserver(S);T.observe(e);let b;const R=new IM,y=()=>{b=requestAnimationFrame(y);const A=R.getDelta(),N=R.getElapsedTime(),F=Math.min(1,A*10);l.smoothObj.lerp(l.rawObject,F);const V=l.smoothObj.distanceTo(l.prevObj),X=Math.min(V*16,1);if(l.velocity+=(X-l.velocity)*Math.min(1,A*8),l.prevObj.copy(l.smoothObj),!n&&l.ndc.x>-2)if(v.setFromCamera(l.ndc,o),v.intersectObjects(f).length>0)l.targetStrength=1;else{const G=l.smoothObj.length();G<2.4?l.targetStrength=Math.max(0,1-(G-1)/1.4):l.targetStrength=0}if(l.strength+=(l.targetStrength-l.strength)*Math.min(1,A*6),c.uMouse.value.copy(l.smoothObj),c.uInteractionStrength.value=l.strength,c.uMouseVel.value=l.velocity,c.uTime.value=N,!n){const I=.6+l.ndc.x*.06,G=.1+l.ndc.y*.04;o.position.x+=(I-o.position.x)*.04,o.position.y+=(G-o.position.y)*.04,o.lookAt(.3,0,0)}r.render(a,o)};return y(),()=>{cancelAnimationFrame(b),T.disconnect(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseleave",M),h.forEach(({geometry:A})=>A.dispose()),f.forEach(A=>A.material.dispose()),m.children.forEach(A=>{A.geometry&&A.geometry.dispose(),A.material&&A.material.dispose()}),r.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),u.jsx("div",{ref:t,className:"hero3d-container","aria-hidden":"true"})}const Ja=""+new URL("avatar-CfORJopd.jpg",import.meta.url).href;function BT({onBookCallClick:t,onNavigate:e}){const n=["Branding","Social Graphics","UX Design","Pitch Decks","Web Development","Mobile Apps","E-Commerce"],i=[...n,...n],r=()=>{const s=document.getElementById("pricing")||document.getElementById("work");s?s.scrollIntoView({behavior:"smooth"}):e&&e("portfolio")};return u.jsxs("section",{className:"hero-section position-relative overflow-hidden",children:[u.jsx(kT,{}),u.jsx("div",{className:"container px-3 px-md-5 position-relative",style:{zIndex:3,pointerEvents:"none"},children:u.jsx("div",{className:"row align-items-center min-vh-hero",children:u.jsxs("div",{className:"col-12 col-lg-7 content-col hero-animate py-5",style:{pointerEvents:"auto"},children:[u.jsx("div",{className:"hero-marquee-container mb-4 pb-1",children:u.jsx("div",{className:"hero-marquee-track",children:i.map((s,a)=>u.jsx("span",{className:"badge bg-white text-dark rounded-pill px-3.5 py-2 fw-semibold border shadow-sm",style:{fontSize:"0.82rem",letterSpacing:"-0.01em",color:"#1A1A1A",whiteSpace:"nowrap"},children:s},`${s}-${a}`))})}),u.jsxs("h1",{className:"hero-headline mb-4",style:{fontSize:"clamp(2.8rem, 5.2vw, 4.4rem)",fontWeight:800,lineHeight:1.05,letterSpacing:"-0.03em",color:"#0D0D0D"},children:["World-class ",u.jsx("br",{}),"design ",u.jsxs("span",{className:"brand-serif italic text-primary",style:{fontFamily:"Georgia, serif",fontStyle:"italic",fontWeight:400},children:["orcodix",u.jsx("sup",{children:"®"})]})," ",u.jsx("br",{}),"you need it."]}),u.jsx("p",{className:"brand-subtitle mb-4 pb-2 text-secondary",style:{maxWidth:"480px",fontSize:"1.1rem",lineHeight:1.5,color:"#555555"},children:"A monthly design subscription for startups, creators, and teams who need work done without the wait."}),u.jsxs("div",{className:"hero-cta-group d-flex flex-wrap align-items-center gap-3 hero-animate-delay",children:[u.jsx("button",{className:"btn btn-dark-hero rounded-pill px-4 py-3.5 fw-bold shadow-md d-inline-flex align-items-center gap-2",onClick:r,style:{fontSize:"0.95rem"},children:u.jsx("span",{children:"See Pricing"})}),u.jsxs("button",{className:"btn bg-white rounded-pill px-3.5 py-2 border shadow-sm d-inline-flex align-items-center gap-3 text-start hover-lift",onClick:t,style:{transition:"transform 0.2s ease, box-shadow 0.2s ease",background:"#FFFFFF"},children:[u.jsx("img",{src:Ja,alt:"Founder",className:"rounded-circle object-fit-cover",style:{width:"44px",height:"44px",border:"2px solid #F0F0F0"}}),u.jsxs("div",{className:"d-flex flex-column leading-tight",children:[u.jsx("span",{className:"fw-bold text-dark small",style:{fontSize:"0.88rem",color:"#0D0D0D"},children:"Book a 15-min intro call"}),u.jsxs("span",{className:"small d-inline-flex align-items-center gap-1.5 mt-0.5",style:{fontSize:"0.76rem",color:"#666666"},children:[u.jsx("span",{className:"live-status-dot",style:{width:"7px",height:"7px",background:"#10B981",boxShadow:"0 0 0 2px rgba(16, 185, 129, 0.2)"}}),u.jsx("span",{children:"Available now"})]})]})]})]})]})})})]})}function zT({onNavigate:t,onBookCallClick:e}){const n=[{number:"150+",label:"Products Delivered"},{number:"48h",label:"Average Turnaround"},{number:"99.4%",label:"Client Satisfaction"},{number:"$0",label:"Overhead & Hidden Fees"}];return u.jsx("section",{id:"about",className:"py-5 border-0",children:u.jsxs("div",{className:"container px-3 px-md-5 py-4",children:[u.jsxs("div",{className:"row align-items-center g-5 mb-5",children:[u.jsxs("div",{className:"col-12 col-lg-7 reveal reveal-left",children:[u.jsxs("div",{className:"badge bg-white text-dark border rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2 shadow-sm",children:[u.jsx(qa,{size:14,className:"text-primary"}),u.jsx("span",{children:"About orcodix®"})]}),u.jsxs("h2",{className:"display-4 fw-extrabold text-dark tracking-tight mb-4",children:["Architects of Next-Gen ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif italic",children:"Digital Products & Apps."})]}),u.jsx("p",{className:"brand-subtitle fs-6 mb-4",style:{maxWidth:"580px",lineHeight:"1.65"},children:"We replaced slow, traditional agencies and unreliable freelancers with a high-velocity, flat-rate monthly design and development subscription. Get world-class websites, mobile apps, and UI/UX design executed without the wait."}),u.jsxs("div",{className:"d-flex flex-wrap gap-3 align-items-center",children:[u.jsxs("button",{className:"btn-dark-pill px-4 py-3 d-flex align-items-center gap-2",onClick:e,children:[u.jsx("span",{children:"Book Intro Call"}),u.jsx(Ms,{size:16})]}),u.jsx("button",{className:"btn btn-outline-dark rounded-pill px-4 py-3 fw-semibold",onClick:()=>t&&t("about"),children:"Learn More About Us"})]})]}),u.jsx("div",{className:"col-12 col-lg-5 reveal reveal-right",children:u.jsxs("div",{className:"p-4 rounded-4 bg-light border shadow-sm",children:[u.jsxs("div",{className:"d-flex align-items-center gap-3 mb-4",children:[u.jsx("img",{src:Ja,alt:"Orcodix Senior Lead",className:"rounded-circle border border-2 border-white shadow-sm",style:{width:"56px",height:"56px",objectFit:"cover"}}),u.jsxs("div",{children:[u.jsx("h3",{className:"fw-extrabold fs-5 mb-0 text-dark",children:"Senior Engineering Team"}),u.jsx("p",{className:"text-muted small fw-medium mb-0",children:"Dedicated senior designers & full-stack devs"})]})]}),u.jsxs("div",{className:"d-flex flex-column gap-3",children:[u.jsxs("div",{className:"p-3 bg-white rounded-3 border d-flex align-items-center gap-3",children:[u.jsx("div",{className:"bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0",style:{width:"38px",height:"38px",minWidth:"38px",minHeight:"38px"},children:u.jsx(Oa,{size:18})}),u.jsxs("div",{children:[u.jsx("h4",{className:"fw-bold fs-6 mb-0 text-dark",children:"High-Velocity Sprints"}),u.jsx("p",{className:"text-muted small mb-0",children:"48-hour average delivery per request"})]})]}),u.jsxs("div",{className:"p-3 bg-white rounded-3 border d-flex align-items-center gap-3",children:[u.jsx("div",{className:"bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0",style:{width:"38px",height:"38px",minWidth:"38px",minHeight:"38px"},children:u.jsx(oc,{size:18})}),u.jsxs("div",{children:[u.jsx("h4",{className:"fw-bold fs-6 mb-0 text-dark",children:"Flat Monthly Rate"}),u.jsx("p",{className:"text-muted small mb-0",children:"No hourly billing or unexpected scope fees"})]})]})]})]})})]}),u.jsx("div",{className:"row g-4 pt-4 border-top",children:n.map((i,r)=>u.jsx("div",{className:`col-6 col-md-3 reveal delay-${r+1}`,children:u.jsxs("div",{className:"p-3 text-center text-md-start",children:[u.jsx("div",{className:"display-5 fw-extrabold text-dark tracking-tight mb-1",style:{letterSpacing:"-0.04em"},children:i.number}),u.jsx("div",{className:"text-muted small fw-bold text-uppercase",style:{letterSpacing:"0.06em"},children:i.label})]})},r))})]})})}function HT({onBookCallClick:t}){const[e,n]=Ye.useState(null),i=[{id:"website-development",icon:Pl,title:"Website Development",badge:"Web & SaaS",shortDesc:"High-performance Next.js & React web applications optimized for speed, conversion, and global scaling.",fullDesc:"Full-stack web development engineered for high speed, flawless SEO, and maximum conversion rates. We build custom web applications, high-converting landing pages, and seamless headless CMS integrations.",quickTags:["Next.js","React","Webflow"],deliverables:["Next.js & React Web Applications","High-Converting Marketing Sites","Headless CMS & API Integration","Core Web Vitals & Speed Optimization","Responsive & Mobile-First Layouts"],tags:["React","Next.js","Vite","TypeScript","Webflow","Tailwind CSS"],timeline:"2-4 Days Average Delivery"},{id:"ecommerce-solutions",icon:sv,title:"E-Commerce Solutions",badge:"Digital Commerce",shortDesc:"Custom online storefronts & checkout flows built to boost sales conversion and luxury brand prestige.",fullDesc:"End-to-end custom digital commerce solutions tailored for high sales volume, frictionless checkout, and luxury brand shopping experiences across all devices.",quickTags:["Shopify","Stripe","WooCommerce"],deliverables:["Custom Shopify & Headless Stores","Stripe & Global Payment Gateways","WooCommerce Custom Themes","High-Converting Product Detail Pages","Cart & Checkout Flow Optimization"],tags:["Shopify","Liquid","WooCommerce","Stripe","Next Commerce","GraphQL"],timeline:"3-5 Days Average Delivery"},{id:"mobile-app-development",icon:av,title:"Mobile App Development",badge:"iOS & Android",shortDesc:"Native & cross-platform mobile apps with fluid gesture navigation, offline sync, and app store deployment.",fullDesc:"Intuitive, high-speed mobile applications with fluid gesture navigation, offline synchronization, push notifications, and native iOS & Android performance.",quickTags:["React Native","iOS","Android"],deliverables:["Cross-Platform React Native & Flutter Apps","Native iOS (Swift) & Android (Kotlin) Features","Seamless Backend REST & GraphQL APIs","Push Notifications & Offline Sync","App Store & Google Play Publishing"],tags:["React Native","Flutter","Swift","Kotlin","Firebase","REST API"],timeline:"4-6 Days Average Delivery"},{id:"ui-ux-design",icon:rv,title:"UI/UX Design",badge:"Design & Systems",shortDesc:"User-centered visual interfaces, interactive Figma prototypes, and production-ready design systems.",fullDesc:"Data-backed visual interfaces, interactive prototypes, and scalable multi-brand design systems that elevate product usability and delight users.",quickTags:["Figma","UI Kits","Prototypes"],deliverables:["User Research & Wireframing Flows","Interactive Figma Prototypes","Scalable Multi-Brand Design Systems","Micro-Interactions & UX Animation","Usability Audits & Conversion CRO"],tags:["Figma","Design Systems","Framer","Prototyping","UI Kits","User Research"],timeline:"48 Hours Average Delivery"}];return u.jsxs("section",{id:"services",className:"py-5 border-0",children:[u.jsxs("div",{className:"container px-3 px-md-5",children:[u.jsxs("div",{className:"d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3 reveal",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"badge bg-white text-dark border rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2 shadow-sm",children:[u.jsx(Pl,{size:14,className:"text-primary"}),u.jsx("span",{children:"Services & Capabilities"})]}),u.jsxs("h2",{className:"display-5 fw-extrabold text-dark tracking-tight mb-0",children:["Four Core Capabilities. ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif italic",children:"Engineered for Scale."})]})]}),u.jsx("p",{className:"brand-subtitle mb-0",children:"Click any service card to view complete technical scope, turnarounds, and included deliverables."})]}),u.jsx("div",{className:"row g-4",children:i.map((r,s)=>{const a=r.icon;return u.jsx("div",{className:`col-12 col-md-6 d-flex reveal delay-${s+1}`,children:u.jsxs("div",{className:"sc2-card",onClick:()=>n(r),children:[u.jsxs("div",{className:"sc2-top",children:[u.jsxs("span",{className:"sc2-num",children:["0",s+1]}),u.jsx("span",{className:"sc2-badge",children:r.badge})]}),u.jsxs("div",{className:"sc2-head",children:[u.jsx("div",{className:"sc2-icon",children:u.jsx(a,{size:22,strokeWidth:2})}),u.jsx("h3",{className:"sc2-title",children:r.title})]}),u.jsx("p",{className:"sc2-desc",children:r.shortDesc}),u.jsx("ul",{className:"sc2-list",children:r.deliverables.slice(0,3).map((o,l)=>u.jsxs("li",{className:"sc2-list-item",children:[u.jsx("span",{className:"sc2-dot"}),o]},l))}),u.jsxs("div",{className:"sc2-foot",children:[u.jsx("div",{className:"sc2-tags",children:r.quickTags.map((o,l)=>u.jsx("span",{className:"sc2-tag",children:o},l))}),u.jsxs("button",{className:"sc2-btn",onClick:o=>{o.stopPropagation(),n(r)},children:["View Scope",u.jsx(Ms,{size:13,strokeWidth:2.5})]})]}),u.jsx("div",{className:"sc2-accent"})]})},r.id)})}),u.jsxs("div",{className:"bg-white rounded-4 p-4 p-md-5 mt-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 border shadow-sm position-relative overflow-hidden",style:{borderRadius:"24px"},children:[u.jsxs("div",{className:"d-flex align-items-center gap-4 z-1",children:[u.jsx("div",{className:"bg-light text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 border",style:{width:"56px",height:"56px",minWidth:"56px",minHeight:"56px"},children:u.jsx(qa,{size:24,className:"text-dark"})}),u.jsxs("div",{children:[u.jsx("h4",{className:"fs-4 fw-extrabold text-dark mb-1",children:"Need a custom feature scope?"}),u.jsx("p",{className:"text-muted fw-medium fs-6 mb-0",style:{maxWidth:"540px",lineHeight:"1.5"},children:"Switch between Website, E-Commerce, Mobile Apps, and UI/UX design anytime under one flat monthly subscription."})]})]}),u.jsxs("button",{className:"btn-dark-pill px-4 py-3 flex-shrink-0 d-flex align-items-center gap-2 z-1",onClick:t,style:{fontSize:"0.9rem"},children:[u.jsx("span",{children:"Book Scope Call"}),u.jsx(Ms,{size:16})]})]})]}),e&&u.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3",style:{backgroundColor:"rgba(15, 15, 16, 0.65)",backdropFilter:"blur(16px)",zIndex:3500},onClick:()=>n(null),children:u.jsxs("div",{className:"bg-white rounded-4 shadow-lg overflow-hidden w-100 position-relative animate-up",style:{maxWidth:"640px",maxHeight:"90vh",display:"flex",flexDirection:"column"},onClick:r=>r.stopPropagation(),children:[u.jsxs("div",{className:"p-4 bg-dark text-white d-flex align-items-center justify-content-between",children:[u.jsxs("div",{className:"d-flex align-items-center gap-3",children:[u.jsx("div",{className:"bg-white text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0",style:{width:"46px",height:"46px",minWidth:"46px",minHeight:"46px"},children:eg.createElement(e.icon,{size:22})}),u.jsxs("div",{children:[u.jsx("span",{className:"badge bg-white text-dark px-2.5 py-1 rounded-pill small fw-bold mb-1 d-inline-block",children:e.badge}),u.jsx("h3",{className:"fw-extrabold fs-4 mb-0 text-white",children:e.title})]})]}),u.jsx("button",{className:"btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center flex-shrink-0",onClick:()=>n(null),style:{width:"38px",height:"38px",minWidth:"38px",minHeight:"38px"},children:u.jsx(lc,{size:18})})]}),u.jsxs("div",{className:"p-4 p-md-5 overflow-y-auto flex-grow-1",children:[u.jsxs("div",{className:"mb-4",children:[u.jsx("h4",{className:"small fw-bold text-uppercase text-muted tracking-wider mb-2",children:"Service Overview"}),u.jsx("p",{className:"text-dark fw-medium fs-6",style:{lineHeight:"1.6"},children:e.fullDesc})]}),u.jsxs("div",{className:"bg-light rounded-3 p-3 mb-4 d-flex align-items-center gap-3 border",children:[u.jsx(ac,{size:20,className:"text-dark flex-shrink-0"}),u.jsxs("div",{children:[u.jsx("span",{className:"small fw-bold text-dark d-block",children:"Turnaround Time"}),u.jsx("span",{className:"small text-muted",children:e.timeline})]})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("h4",{className:"small fw-bold text-uppercase text-muted tracking-wider mb-3",children:"Included Scope & Deliverables"}),u.jsx("ul",{className:"list-unstyled d-flex flex-column gap-2.5 mb-0",children:e.deliverables.map((r,s)=>u.jsxs("li",{className:"d-flex align-items-start gap-2.5 fw-semibold text-dark p-2.5 rounded-3 bg-light border-start border-3 border-dark",children:[u.jsx(sc,{size:18,className:"text-success mt-0.5 flex-shrink-0"}),u.jsx("span",{children:r})]},s))})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("h4",{className:"small fw-bold text-uppercase text-muted tracking-wider mb-2",children:"Technologies & Stack"}),u.jsx("div",{className:"d-flex flex-wrap gap-2",children:e.tags.map((r,s)=>u.jsx("span",{className:"badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold",children:r},s))})]})]}),u.jsxs("div",{className:"p-4 bg-light border-top d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3",children:[u.jsxs("div",{className:"d-flex align-items-center gap-2 text-muted small fw-medium",children:[u.jsx(qy,{size:16}),u.jsx("span",{children:"Included in All Subscription Plans"})]}),u.jsxs("button",{className:"btn-dark-pill px-4 py-3 w-100 w-sm-auto d-flex align-items-center justify-content-center gap-2",onClick:()=>{n(null),t&&t()},children:[u.jsxs("span",{children:["Request ",e.title]}),u.jsx(Ms,{size:16})]})]})]})})]})}const $v=""+new URL("work-analytics-PT7QYmnG.jpg",import.meta.url).href,Kv=""+new URL("work-ecommerce-CAEvhYbp.jpg",import.meta.url).href,Zv=""+new URL("work-mobile-CuvFQLDm.jpg",import.meta.url).href,Jv=""+new URL("work-uxdesign-DYTOr9DQ.jpg",import.meta.url).href;function VT({activeCategory:t,onBookCallClick:e}){const i=[{id:1,title:"Atlas Analytics Platform",category:"Website Development",tag:"Website Development",image:$v,desc:"High-performance Next.js SaaS platform, custom component library, and performant web architecture."},{id:2,title:"Aurélia Paris Storefront",category:"E-Commerce Solutions",tag:"E-Commerce Solutions",image:Kv,desc:"Bespoke luxury Shopify storefront, customized checkout flow, and global multi-currency payment integration."},{id:3,title:"Verve Mobile iOS Ecosystem",category:"Mobile App Development",tag:"Mobile App Development",image:Zv,desc:"Cross-platform React Native iOS & Android application with offline synchronization and push notifications."},{id:4,title:"Aura Design System & Prototyping",category:"UI/UX Design",tag:"UI/UX Design",image:Jv,desc:"End-to-end user experience design, interactive Figma prototypes, wireframing, and micro-interactions."}];return u.jsx("section",{id:"work",className:"work-section",children:u.jsxs("div",{className:"container px-3 px-md-5",children:[u.jsxs("div",{className:"d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3 reveal",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"badge bg-white text-dark border rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2 shadow-sm",children:[u.jsx(qa,{size:14,className:"text-primary"}),u.jsx("span",{children:"Selected Works"})]}),u.jsxs("h2",{className:"display-5 fw-extrabold text-dark tracking-tight mb-0",children:["Crafted with precision for ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif italic",children:t||"World-Class Brands"})]})]}),u.jsx("p",{className:"brand-subtitle mb-0",children:"We replace slow agencies and flaky freelancers with a high-speed, flat-rate monthly design subscription."})]}),u.jsx("div",{className:"row g-4",children:i.map((r,s)=>u.jsx("div",{className:`col-12 col-md-6 d-flex reveal delay-${s+1}`,children:u.jsxs("div",{className:"portfolio-card h-100 p-3.5 p-md-4 d-flex flex-column justify-content-between",children:[u.jsxs("div",{className:"portfolio-card-img-wrapper mb-3.5",children:[u.jsx("img",{src:r.image,alt:r.title,className:"portfolio-card-img"}),u.jsx("span",{className:"position-absolute top-0 start-0 m-3 badge bg-white text-dark rounded-pill shadow-sm px-3 py-2 fw-bold border border-light",children:r.tag})]}),u.jsxs("div",{className:"pt-2 px-1",children:[u.jsxs("div",{className:"d-flex align-items-start justify-content-between gap-3 mb-2",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-uppercase fw-bold text-muted",style:{fontSize:"0.7rem",letterSpacing:"0.08em"},children:r.category}),u.jsx("h3",{className:"fs-4 fw-extrabold text-dark mb-0 mt-1",children:r.title})]}),u.jsx("div",{className:"portfolio-action-btn",children:u.jsx(rc,{size:20})})]}),u.jsx("p",{className:"text-muted fw-medium fs-6 mb-0",style:{lineHeight:"1.55"},children:r.desc})]})]})},r.id))}),u.jsxs("div",{className:"row g-4 mt-5 pt-4",children:[u.jsx("div",{className:"col-12 col-md-4",children:u.jsxs("div",{className:"work-feature-box h-100 d-flex align-items-start gap-3",children:[u.jsx("div",{className:"bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm",style:{width:"52px",height:"52px",minWidth:"52px",minHeight:"52px"},children:u.jsx(ac,{size:22})}),u.jsxs("div",{children:[u.jsx("h4",{className:"fw-extrabold fs-5 text-dark mb-1",children:"48-Hour Delivery"}),u.jsx("p",{className:"text-muted small fw-medium mb-0",children:"Get your design requests completed one by one in 2 business days on average."})]})]})}),u.jsx("div",{className:"col-12 col-md-4",children:u.jsxs("div",{className:"work-feature-box h-100 d-flex align-items-start gap-3",children:[u.jsx("div",{className:"bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm",style:{width:"52px",height:"52px",minWidth:"52px",minHeight:"52px"},children:u.jsx(Oa,{size:22})}),u.jsxs("div",{children:[u.jsx("h4",{className:"fw-extrabold fs-5 text-dark mb-1",children:"Unlimited Queue"}),u.jsx("p",{className:"text-muted small fw-medium mb-0",children:"Add as many design requests to your queue as you want. We work through them sequentially."})]})]})}),u.jsx("div",{className:"col-12 col-md-4",children:u.jsxs("div",{className:"work-feature-box h-100 d-flex align-items-start gap-3",children:[u.jsx("div",{className:"bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm",style:{width:"52px",height:"52px",minWidth:"52px",minHeight:"52px"},children:u.jsx(oc,{size:22})}),u.jsxs("div",{children:[u.jsx("h4",{className:"fw-extrabold fs-5 text-dark mb-1",children:"Pause or Cancel"}),u.jsx("p",{className:"text-muted small fw-medium mb-0",children:"Pause your subscription anytime and save your remaining subscription days for later."})]})]})})]})]})})}const GT=""+new URL("card-arch-CDz-6KEn.jpg",import.meta.url).href,WT=""+new URL("card-august-CuPjXt2H.jpg",import.meta.url).href;function jT(){const[t,e]=Ye.useState(!1),n=["Decks","Branding","Social Graphics","UX Design","Pitch Decks"],i=["Landing Pages","Illustrations","Style Guides","Ad Creatives"],r=["Icon Design","Motion Design","Design Systems"];return u.jsx("section",{className:"py-5 border-0",children:u.jsxs("div",{className:"container px-3 px-md-5",children:[u.jsxs("div",{className:"text-center max-w-xl mx-auto mb-5 reveal",children:[u.jsx("span",{className:"badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold mb-3",children:"How It Works"}),u.jsxs("h2",{className:"display-5 fw-extrabold text-dark tracking-tight",children:["Design on demand, ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif",children:"simplified."})]})]}),u.jsxs("div",{className:"row g-4 justify-content-center",children:[u.jsx("div",{className:"col-12 col-md-6 col-lg-5 reveal reveal-left",children:u.jsxs("div",{className:"process-card h-100 p-4 bg-white border rounded-4 shadow-sm position-relative overflow-hidden",children:[u.jsxs("div",{className:"process-visual position-relative overflow-hidden rounded-4 mb-4 d-flex align-items-center justify-content-center",style:{height:"270px",backgroundColor:"#F6F6F5"},children:[u.jsxs("div",{className:"position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-2 overflow-hidden",style:{opacity:.85,transform:"scale(0.95)"},children:[u.jsx("div",{className:"marquee-row",children:u.jsx("div",{className:"marquee-track-rtl",children:[...n,...n,...n].map((s,a)=>u.jsx("span",{className:"badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-semibold border fs-6",children:s},a))})}),u.jsx("div",{className:"marquee-row",children:u.jsx("div",{className:"marquee-track-ltr",children:[...i,...i,...i].map((s,a)=>u.jsx("span",{className:"badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-semibold border fs-6",children:s},a))})}),u.jsx("div",{className:"marquee-row",children:u.jsx("div",{className:"marquee-track-rtl-alt",children:[...r,...r,...r].map((s,a)=>u.jsx("span",{className:"badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-semibold border fs-6",children:s},a))})})]}),u.jsx("div",{className:"request-w-badge z-2 position-relative d-flex align-items-center justify-content-center shadow-lg",children:u.jsx("span",{className:"brand-serif text-white italic",style:{lineHeight:1,fontSize:"1.05rem",letterSpacing:"-0.02em"},children:"orcodix"})})]}),u.jsxs("div",{className:"px-2 pb-2",children:[u.jsx("h3",{className:"fs-3 fw-extrabold text-dark mb-2",children:"Request"}),u.jsx("p",{className:"text-muted fw-medium fs-6 mb-0",style:{lineHeight:"1.5"},children:"Submit any design task you need. Landing pages, product visuals, brand assets, and more."})]})]})}),u.jsx("div",{className:"col-12 col-md-6 col-lg-5 reveal reveal-right delay-2",children:u.jsxs("div",{className:"process-card h-100 p-4 bg-white border rounded-4 shadow-sm position-relative overflow-hidden cursor-pointer",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),style:{cursor:"pointer"},children:[u.jsx("div",{className:"process-visual position-relative overflow-hidden rounded-4 mb-4 d-flex align-items-end justify-content-center pb-3",style:{height:"270px",backgroundColor:"#F6F6F5"},children:u.jsxs("div",{className:"folder-wrapper position-relative d-flex justify-content-center align-items-end",style:{width:"220px",height:"180px"},children:[u.jsx("div",{className:"folder-card position-absolute shadow-lg overflow-hidden border border-white",style:{width:"130px",height:"95px",borderRadius:"10px",backgroundColor:"#2563EB",top:"25px",left:"10px",zIndex:1,transform:t?"translateY(-48px) rotate(-16deg) scale(1.05)":"translateY(10px) rotate(-4deg) scale(0.95)",transition:"all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"},children:u.jsx("img",{src:GT,alt:"Architecture Design",className:"w-100 h-100 object-fit-cover"})}),u.jsx("div",{className:"folder-card position-absolute shadow-lg overflow-hidden border border-white",style:{width:"135px",height:"100px",borderRadius:"10px",backgroundColor:"#0EA5E9",top:"20px",left:"42px",zIndex:2,transform:t?"translateY(-60px) rotate(-2deg) scale(1.08)":"translateY(5px) rotate(0deg) scale(0.97)",transition:"all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"},children:u.jsx("img",{src:WT,alt:"August Design",className:"w-100 h-100 object-fit-cover"})}),u.jsxs("div",{className:"folder-card position-absolute shadow-lg overflow-hidden border border-white p-2 d-flex flex-column justify-content-between",style:{width:"140px",height:"100px",borderRadius:"10px",background:"linear-gradient(135deg, #0F0F10, #1E1E24)",top:"22px",right:"5px",zIndex:3,color:"#FFFFFF",transform:t?"translateY(-52px) rotate(14deg) scale(1.06)":"translateY(8px) rotate(3deg) scale(0.96)",transition:"all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[u.jsxs("div",{className:"d-flex align-items-center gap-1",children:[u.jsx("div",{className:"rounded-circle bg-warning",style:{width:"8px",height:"8px"}}),u.jsx("span",{className:"small fw-bold tracking-tight text-white-50",style:{fontSize:"0.65rem"},children:"monochrome"})]}),u.jsx("div",{className:"text-end",children:u.jsx("span",{className:"brand-serif italic fs-5",children:"w"})})]}),u.jsx("div",{className:"folder-front position-relative z-4 shadow-sm d-flex align-items-center justify-content-center",style:{width:"210px",height:"105px",backgroundColor:"#EAEAEA",borderRadius:"16px",border:"1px solid rgba(0,0,0,0.06)",transform:t?"translateY(4px)":"translateY(0)",transition:"transform 0.4s ease"},children:u.jsx("span",{className:"brand-serif italic display-4 text-secondary opacity-25",children:"w"})})]})}),u.jsxs("div",{className:"px-2 pb-2",children:[u.jsx("h3",{className:"fs-3 fw-extrabold text-dark mb-2",children:"Receive"}),u.jsx("p",{className:"text-muted fw-medium fs-6 mb-0",style:{lineHeight:"1.5"},children:"Your design is delivered in a few business days. Simple, fast, and ready to use."})]})]})})]})]})})}function XT(){const[t,e]=Ye.useState(0),[n,i]=Ye.useState(!1),[r,s]=Ye.useState([]),a=Ye.useRef(null),o=Ye.useRef([]),l=[{question:"Why wouldn't I just hire a full-time senior designer?",answer:"The annual cost of a full-time senior designer exceeds $140,000 plus benefits, health insurance, and equity. You might not always have enough work to keep them busy 100% of the time. With orcodix®, you pay a fixed monthly fee and can pause or resume your subscription whenever you need design output."},{question:"How fast will I receive my design requests?",answer:"On average, most design and web development requests are completed in just 48 hours (2 business days) or less. More complex requests like full SaaS web applications or multi-page mobile app ecosystems may be split into 48-hour sub-deliverables."},{question:"Who are the designers working on my account?",answer:"Orcodix® is run by senior product designers and full-stack engineers with years of high-volume agency and YC startup experience. No junior freelancers or offshore sub-contractors."},{question:"How does the subscription pause feature work?",answer:"We understand you might not have 30 days worth of design work at all times. Billing cycles are based on a 31-day period. If you use our services for 10 days and then pause, your subscription is frozen and you retain 21 unused days to use anytime in the future."},{question:"What if I only have a single design request?",answer:"You can subscribe for a single month, submit your request, receive the completed deliverables, and pause your subscription before the cycle renews. Save the remaining days for whenever you need work again."}];return Ye.useEffect(()=>{const c={threshold:.12,rootMargin:"0px 0px -20px 0px"};if(a.current){const p=new IntersectionObserver(([f])=>{f.isIntersecting&&(i(!0),p.disconnect())},c);p.observe(a.current)}const h=o.current.map((p,f)=>{if(!p)return null;const m=new IntersectionObserver(([v])=>{v.isIntersecting&&(s(E=>E.includes(f)?E:[...E,f]),m.disconnect())},{...c,rootMargin:`0px 0px ${-20-f*10}px 0px`});return m.observe(p),m});return()=>h.forEach(p=>p&&p.disconnect())},[]),u.jsx("section",{className:"py-5 border-0",children:u.jsxs("div",{className:"container px-3 px-md-5",children:[u.jsxs("div",{ref:a,className:"text-center mx-auto mb-5",style:{maxWidth:"560px",opacity:n?1:0,transform:n?"translateY(0)":"translateY(28px)",transition:"opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)"},children:[u.jsx("span",{className:"badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold mb-3",children:"FAQ"}),u.jsxs("h2",{className:"display-5 fw-extrabold text-dark tracking-tight",children:["Frequently Asked ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif italic",children:"Questions."})]}),u.jsx("p",{className:"text-muted fw-medium mt-2",children:"Everything you need to know about how orcodix® subscription works."})]}),u.jsx("div",{className:"row justify-content-center",children:u.jsx("div",{className:"col-12 col-lg-8",children:u.jsx("div",{className:"d-flex flex-column gap-3",children:l.map((c,h)=>{const p=r.includes(h),f=h*.08;return u.jsxs("div",{ref:m=>o.current[h]=m,className:`border rounded-4 p-4 ${t===h?"bg-light border-dark":"bg-white"}`,style:{opacity:p?1:0,transform:p?"translateY(0)":"translateY(24px)",transition:`opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${f}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${f}s, background-color 0.2s ease, border-color 0.2s ease`},children:[u.jsxs("div",{className:"d-flex align-items-center justify-content-between",onClick:()=>e(t===h?-1:h),style:{cursor:"pointer"},children:[u.jsx("h3",{className:"fs-5 fw-bold text-dark mb-0",children:c.question}),u.jsx("div",{className:"bg-white border rounded-circle p-1 ms-3 flex-shrink-0",children:t===h?u.jsx(Vy,{size:18}):u.jsx(jy,{size:18})})]}),t===h&&u.jsx("p",{className:"text-muted fw-medium mt-3 mb-0 pt-2 border-top",children:c.answer})]},h)})})})})]})})}function qT({onNavigate:t,onBookCallClick:e}){const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsx("footer",{className:"footer-root",children:u.jsxs("div",{className:"container px-3 px-md-5",children:[u.jsxs("div",{className:"footer-cta-card",children:[u.jsx("div",{className:"footer-cta-bg-glow"}),u.jsxs("div",{className:"row align-items-center justify-content-between g-4 position-relative",style:{zIndex:2},children:[u.jsxs("div",{className:"col-12 col-lg-7",children:[u.jsxs("div",{className:"badge bg-white text-dark rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2 shadow-sm",children:[u.jsx("span",{className:"footer-status-dot"}),u.jsx("span",{className:"small",children:"2 Spots Available for Next Month"})]}),u.jsxs("h2",{className:"display-5 fw-extrabold text-white tracking-tight mb-2",children:["Ready to elevate your ",u.jsx("br",{className:"d-none d-md-block"}),u.jsx("span",{className:"brand-serif italic text-primary",children:"digital product?"})]}),u.jsx("p",{className:"text-white-50 fs-6 fw-medium mb-0",style:{maxWidth:"520px"},children:"Replace slow agencies and unreliable freelancers. Get world-class design & engineering on demand."})]}),u.jsx("div",{className:"col-12 col-lg-5 text-lg-end",children:u.jsxs("div",{className:"d-flex flex-wrap gap-3 justify-content-lg-end align-items-center",children:[u.jsxs("button",{className:"btn btn-brand-primary rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-lg",onClick:e,children:[u.jsx("span",{children:"Book Intro Call"}),u.jsx(rc,{size:18,strokeWidth:2.5})]}),u.jsx("button",{className:"btn btn-outline-light-custom rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2",onClick:()=>t&&t("services"),children:u.jsx("span",{children:"Explore Scope"})})]})})]})]}),u.jsxs("div",{className:"row g-4 g-lg-5 pb-5 mb-4 border-bottom border-dark-subtle",children:[u.jsxs("div",{className:"col-12 col-lg-4",children:[u.jsx("div",{className:"d-flex align-items-center gap-2 mb-3",children:u.jsx("img",{src:_d,alt:"orcodix®",className:"footer-logo-img"})}),u.jsx("p",{className:"footer-desc mb-4",children:"orcodix® is an elite design & development studio delivering high-converting web platforms, custom applications, and visual brand identities on demand."}),u.jsxs("a",{href:"mailto:hello@orcodix.com",className:"footer-email-link",children:[u.jsx(rh,{size:16,className:"text-primary"}),u.jsx("span",{children:"hello@orcodix.com"})]})]}),u.jsxs("div",{className:"col-6 col-md-3 col-lg-2",children:[u.jsx("h4",{className:"footer-heading",children:"Navigation"}),u.jsxs("ul",{className:"footer-links-list",children:[u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("home"),children:"Home"})}),u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("about"),children:"About Us"})}),u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("services"),children:"Services & Scope"})}),u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("portfolio"),children:"Selected Works"})}),u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("contact"),children:"Contact Us"})})]})]}),u.jsxs("div",{className:"col-6 col-md-3 col-lg-3",children:[u.jsx("h4",{className:"footer-heading",children:"Services"}),u.jsxs("ul",{className:"footer-links-list",children:[u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("services"),children:"Website Development"})}),u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("services"),children:"E-Commerce Solutions"})}),u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("services"),children:"Mobile App Development"})}),u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("services"),children:"UI/UX & Design Systems"})}),u.jsx("li",{children:u.jsx("button",{className:"footer-link-btn",onClick:()=>t&&t("services"),children:"Performance Optimization"})})]})]}),u.jsxs("div",{className:"col-12 col-md-6 col-lg-3",children:[u.jsx("h4",{className:"footer-heading",children:"Connect"}),u.jsx("p",{className:"footer-desc small mb-3",children:"Follow our latest product launches, design tokens, and insights."}),u.jsxs("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[u.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"footer-social-pill",children:"Twitter / X"}),u.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",className:"footer-social-pill",children:"Dribbble"}),u.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"footer-social-pill",children:"LinkedIn"}),u.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"footer-social-pill",children:"GitHub"})]})]})]}),u.jsxs("div",{className:"d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 pt-2 pb-4 text-white-50 small",children:[u.jsxs("div",{className:"d-flex align-items-center gap-3",children:[u.jsxs("span",{children:["© ",new Date().getFullYear()," orcodix® Inc. All rights reserved."]}),u.jsx("span",{className:"d-none d-sm-inline opacity-25",children:"•"}),u.jsxs("span",{className:"d-none d-sm-inline-flex align-items-center gap-1.5 text-white-50",children:[u.jsx(oc,{size:14,className:"text-primary"}),u.jsx("span",{children:"100% Satisfaction Guarantee"})]})]}),u.jsxs("div",{className:"d-flex align-items-center gap-4",children:[u.jsx("a",{href:"#privacy",className:"footer-sub-link",children:"Privacy Policy"}),u.jsx("a",{href:"#terms",className:"footer-sub-link",children:"Terms of Service"}),u.jsxs("button",{className:"footer-top-btn",onClick:n,"aria-label":"Scroll to top",children:[u.jsx("span",{children:"Top"}),u.jsx(Oy,{size:14,strokeWidth:2.5})]})]})]})]})})}function YT({isOpen:t,onClose:e}){const[n,i]=Ye.useState(!1),[r,s]=Ye.useState({name:"",email:"",phone:"",company:"",date:"2026-09-22",time:"10:00 AM"});if(!t)return null;const a=o=>{o.preventDefault(),i(!0)};return u.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3",style:{backgroundColor:"rgba(15, 15, 16, 0.65)",backdropFilter:"blur(16px)",zIndex:2e3},onClick:e,children:u.jsxs("div",{className:"bg-white rounded-4 shadow-lg overflow-hidden w-100 position-relative animate-up",style:{maxWidth:"540px"},onClick:o=>o.stopPropagation(),children:[u.jsxs("div",{className:"p-4 bg-light border-bottom d-flex align-items-center justify-content-between",children:[u.jsxs("div",{className:"d-flex align-items-center gap-3",children:[u.jsx("img",{src:Ja,alt:"Lead Designer",className:"rounded-circle",style:{width:"48px",height:"48px",objectFit:"cover"}}),u.jsxs("div",{children:[u.jsx("h4",{className:"fw-bold fs-5 mb-0 text-dark",children:"Book 15-min Intro Call"}),u.jsxs("div",{className:"d-flex align-items-center gap-2 small text-muted",children:[u.jsx("span",{className:"live-dot"}),u.jsx("span",{children:"Directly with Lead Creative Director"})]})]})]}),u.jsx("button",{className:"btn btn-sm btn-outline-secondary rounded-circle p-2",onClick:e,children:u.jsx(lc,{size:20})})]}),u.jsx("div",{className:"p-4 p-md-5",children:n?u.jsxs("div",{className:"text-center py-4",children:[u.jsx("div",{className:"bg-success text-white rounded-circle p-3 d-inline-flex mb-3",children:u.jsx(sc,{size:42})}),u.jsx("h3",{className:"fw-extrabold fs-3 text-dark mb-2",children:"Intro Call Scheduled!"}),u.jsxs("p",{className:"text-muted fw-medium mb-4",children:["We've sent a Google Meet invite & calendar confirmation to ",u.jsx("strong",{children:r.email}),"."]}),u.jsxs("div",{className:"bg-light p-3 rounded-3 mb-4 text-start",children:[u.jsx("div",{className:"small text-muted fw-bold text-uppercase mb-1",children:"Appointment Details:"}),u.jsxs("div",{className:"fw-bold text-dark d-flex align-items-center gap-2 mb-1",children:[u.jsx(By,{size:16})," ",r.date," at ",r.time]}),u.jsxs("div",{className:"fw-semibold text-secondary d-flex align-items-center gap-2",children:[u.jsx(Ky,{size:16})," 15 min Google Meet Video Call"]})]}),u.jsx("button",{className:"btn-dark-pill w-100 py-3",onClick:e,children:"Done & Close"})]}):u.jsxs("form",{onSubmit:a,children:[u.jsxs("p",{className:"text-muted small fw-semibold mb-4",children:["Find out how ",u.jsxs("span",{className:"brand-serif italic fs-5",children:["orcodix",u.jsx("sup",{children:"®"})]})," can accelerate your design workflow. Pick a convenient time:"]}),u.jsxs("div",{className:"mb-3",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Your Full Name"}),u.jsxs("div",{className:"input-group",children:[u.jsx("span",{className:"input-group-text bg-light border-end-0",children:u.jsx($y,{size:18,className:"text-muted"})}),u.jsx("input",{type:"text",className:"form-control bg-light border-start-0 py-2 fw-medium",placeholder:"Sarah Jenkins",required:!0,value:r.name,onChange:o=>s({...r,name:o.target.value})})]})]}),u.jsxs("div",{className:"mb-3",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Work Email"}),u.jsxs("div",{className:"input-group",children:[u.jsx("span",{className:"input-group-text bg-light border-end-0",children:u.jsx(rh,{size:18,className:"text-muted"})}),u.jsx("input",{type:"email",className:"form-control bg-light border-start-0 py-2 fw-medium",placeholder:"sarah@yourcompany.com",required:!0,value:r.email,onChange:o=>s({...r,email:o.target.value})})]})]}),u.jsxs("div",{className:"mb-3",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Contact Number"}),u.jsxs("div",{className:"input-group",children:[u.jsx("span",{className:"input-group-text bg-light border-end-0",children:u.jsx(Wy,{size:18,className:"text-muted"})}),u.jsx("input",{type:"tel",className:"form-control bg-light border-start-0 py-2 fw-medium",placeholder:"+91 98765 43210",value:r.phone,onChange:o=>s({...r,phone:o.target.value})})]})]}),u.jsxs("div",{className:"row g-3 mb-4",children:[u.jsxs("div",{className:"col-6",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Preferred Date"}),u.jsx("input",{type:"date",className:"form-control bg-light py-2 fw-medium",value:r.date,onChange:o=>s({...r,date:o.target.value})})]}),u.jsxs("div",{className:"col-6",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Preferred Time"}),u.jsxs("select",{className:"form-select bg-light py-2 fw-medium",value:r.time,onChange:o=>s({...r,time:o.target.value}),children:[u.jsx("option",{children:"09:00 AM"}),u.jsx("option",{children:"10:00 AM"}),u.jsx("option",{children:"02:00 PM"}),u.jsx("option",{children:"04:30 PM"})]})]})]}),u.jsx("button",{type:"submit",className:"btn-dark-pill w-100 py-3",children:"Confirm 15-min Booking"})]})})]})})}const $T=""+new URL("fluid-mesh-BR4z5ivC.png",import.meta.url).href;function KT({onNavigate:t,onBookCallClick:e}){const n=[{number:"150+",label:"Products Delivered"},{number:"48h",label:"Average Turnaround"},{number:"99.4%",label:"Client Satisfaction"},{number:"$0",label:"Overhead & Hidden Fees"}],i=[{icon:Oa,title:"High Velocity Execution",desc:"We operate like an elite in-house engineering team. No endless status meetings, no bureaucracy—just fast, high-quality deliverables."},{icon:oc,title:"Transparent Flat Subscriptions",desc:"No unpredictable hourly billing or scope creep. One flat monthly price with unlimited revisions and the ability to pause anytime."},{icon:ky,title:"World-Class Quality Standard",desc:"Every pixel, component, and line of code is engineered to perfection using modern stacks like Next.js, React, Figma, and Shopify."},{icon:Yy,title:"Conversion-Focused Strategy",desc:"We don’t just build pretty designs—we engineer high-converting digital products designed to accelerate user acquisition and revenue growth."}];return u.jsxs("div",{className:"about-page animate-up",children:[u.jsx("section",{className:"py-5 bg-white border-bottom",children:u.jsx("div",{className:"container px-3 px-md-5 py-4",children:u.jsxs("div",{className:"row align-items-center g-5",children:[u.jsxs("div",{className:"col-12 col-lg-7",children:[u.jsxs("span",{className:"badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2",children:[u.jsx(qa,{size:14}),u.jsx("span",{children:"About orcodix®"})]}),u.jsxs("h1",{className:"display-3 fw-extrabold text-dark tracking-tight mb-4",children:["Architects of Next-Gen ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif italic",children:"Digital Products & Apps."})]}),u.jsx("p",{className:"text-muted fs-5 fw-medium mb-4",style:{lineHeight:"1.65",maxWidth:"560px"},children:"We replaced slow, traditional agencies and unreliable freelancers with a high-velocity design and development subscription."}),u.jsxs("div",{className:"d-flex flex-wrap gap-3",children:[u.jsxs("button",{className:"btn-dark-pill px-4 py-3 d-flex align-items-center gap-2",onClick:e,children:[u.jsx("span",{children:"Book Intro Call"}),u.jsx(Ms,{size:16})]}),u.jsx("button",{className:"btn btn-outline-dark rounded-pill px-4 py-3 fw-semibold",onClick:()=>t("services"),children:"Explore Services"})]})]}),u.jsx("div",{className:"col-12 col-lg-5",children:u.jsx("div",{className:"position-relative",children:u.jsxs("div",{className:"rounded-4 overflow-hidden border shadow-lg bg-light p-3",children:[u.jsx("img",{src:$T,alt:"mdk tech team design",className:"w-100 rounded-3 object-fit-cover",style:{height:"360px"}}),u.jsxs("div",{className:"p-3 bg-white rounded-3 shadow-sm mt-3 d-flex align-items-center gap-3",children:[u.jsx("img",{src:Ja,alt:"Senior Lead",className:"rounded-circle",style:{width:"48px",height:"48px",objectFit:"cover"}}),u.jsxs("div",{children:[u.jsx("h4",{className:"fw-bold fs-6 mb-0 text-dark",children:"Senior Product Team"}),u.jsx("p",{className:"text-muted small mb-0",children:"Dedicated senior designers & full-stack engineers"})]})]})]})})})]})})}),u.jsx("section",{className:"py-5",style:{backgroundColor:"#F8F8F7"},children:u.jsx("div",{className:"container px-3 px-md-5",children:u.jsx("div",{className:"row g-4",children:n.map((r,s)=>u.jsx("div",{className:"col-6 col-md-3",children:u.jsxs("div",{className:"bg-white rounded-4 p-4 text-center border shadow-sm h-100",children:[u.jsx("div",{className:"display-5 fw-extrabold text-dark mb-1",children:r.number}),u.jsx("div",{className:"text-muted small fw-semibold text-uppercase",children:r.label})]})},s))})})}),u.jsx("section",{className:"py-5 bg-white",children:u.jsxs("div",{className:"container px-3 px-md-5 py-4",children:[u.jsxs("div",{className:"text-center max-w-xl mx-auto mb-5",children:[u.jsx("span",{className:"badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold mb-3",children:"Why Choose Us"}),u.jsxs("h2",{className:"display-5 fw-extrabold text-dark tracking-tight mb-3",children:["Built for speed, ",u.jsx("span",{className:"brand-serif italic",children:"engineered for quality."})]}),u.jsx("p",{className:"text-muted fw-medium fs-6",children:"We empower startups and growth teams to execute fast without compromising on craftsmanship."})]}),u.jsx("div",{className:"row g-4",children:i.map((r,s)=>{const a=r.icon;return u.jsx("div",{className:"col-12 col-md-6",children:u.jsxs("div",{className:"p-4 p-md-5 bg-light rounded-4 border h-100 d-flex align-items-start gap-4",children:[u.jsx("div",{className:"bg-dark text-white rounded-circle p-3 d-flex align-items-center justify-content-center flex-shrink-0",style:{width:"54px",height:"54px"},children:u.jsx(a,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:"fs-4 fw-bold text-dark mb-2",children:r.title}),u.jsx("p",{className:"text-muted fw-medium mb-0",style:{lineHeight:"1.6"},children:r.desc})]})]})},s)})})]})}),u.jsx("section",{className:"py-5 bg-dark text-white",children:u.jsxs("div",{className:"container px-3 px-md-5 py-4 text-center",children:[u.jsx("h2",{className:"display-4 fw-extrabold text-white mb-3",children:"Ready to scale your product output?"}),u.jsx("p",{className:"text-white-50 fs-5 mb-4 mx-auto",style:{maxWidth:"540px"},children:"Get senior design and web development capabilities for one flat monthly price. Pause or cancel anytime."}),u.jsxs("div",{className:"d-flex justify-content-center gap-3",children:[u.jsx("button",{className:"btn btn-light rounded-pill px-4 py-3 fw-bold text-dark",onClick:e,children:"Book Intro Call"}),u.jsx("button",{className:"btn btn-outline-light rounded-pill px-4 py-3 fw-bold",onClick:()=>t("portfolio"),children:"View Portfolio"})]})]})})]})}function ZT({onBookCallClick:t,onNavigate:e}){const[n,i]=Ye.useState("all"),r=[{id:"website-development",icon:Pl,title:"Website Development",badge:"Web & SaaS",shortDesc:"High-performance Next.js & React web applications optimized for speed, SEO, and maximum conversion rates.",deliverables:["Next.js & React Single/Multi-Page Web Applications","High-Converting SaaS & Product Marketing Sites","Headless CMS Integrations (Sanity, Strapi, Contentful)","Core Web Vitals 90+ Performance & Speed Optimization","Responsive & Mobile-First Component Architectures","SEO Metadata, Schema & Analytics Integration"],tags:["React","Next.js","Vite","TypeScript","Webflow","Tailwind CSS","Node.js","Sanity"],timeline:"2-4 Days Average Delivery"},{id:"ecommerce-solutions",icon:sv,title:"E-Commerce Solutions",badge:"Digital Commerce",shortDesc:"End-to-end custom online storefronts built to boost sales, optimize checkout conversion, and deliver luxury brand shopping experiences.",deliverables:["Custom Shopify & Shopify Plus Theme Development","Headless E-Commerce Frontends with Next.js Commerce","Stripe, PayPal & Global Payment Gateway Setup","High-Converting Product Detail & Cart Drawer Optimization","WooCommerce Custom Themes & Plugin Integrations","Multi-Currency & International Shipping Configs"],tags:["Shopify","Liquid","WooCommerce","Stripe","Next Commerce","GraphQL","Tailwind"],timeline:"3-5 Days Average Delivery"},{id:"mobile-app-development",icon:av,title:"Mobile App Development",badge:"iOS & Android",shortDesc:"Intuitive, high-speed mobile applications with fluid gesture navigation, offline capabilities, and native iOS & Android performance.",deliverables:["Cross-Platform React Native & Flutter App Architecture","Native iOS (Swift) & Android (Kotlin) Module Integration","Backend RESTful & GraphQL API Connection","Push Notifications, Analytics & Deep Linking Setup","Offline Data Sync & Secure Authentication","App Store & Google Play Publishing Support"],tags:["React Native","Flutter","Swift","Kotlin","Firebase","REST API","GraphQL"],timeline:"4-6 Days Average Delivery"},{id:"ui-ux-design",icon:rv,title:"UI/UX Design",badge:"Design & Systems",shortDesc:"User-centered visual interfaces, interactive prototypes, and production-ready design systems that elevate product usability.",deliverables:["User Journey Mapping & Low/High-Fidelity Wireframes","Interactive Figma Prototypes & Micro-Interactions","Scalable Multi-Brand Design Systems & Component Libraries","SaaS Dashboard & Mobile App Visual UI Kits","Usability Audits & Conversion Rate Optimization (CRO)","Design-to-Code Developer Handoff Tokens"],tags:["Figma","Design Systems","Framer","Prototyping","UI Kits","User Research","Auto-Layout"],timeline:"48 Hours Average Delivery"}],s=n==="all"?r:r.filter(a=>a.id===n);return u.jsxs("div",{className:"services-page animate-up",children:[u.jsx("section",{className:"py-5 bg-white border-bottom",children:u.jsx("div",{className:"container px-3 px-md-5 py-4",children:u.jsxs("div",{className:"max-w-2xl",children:[u.jsxs("span",{className:"badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2",children:[u.jsx(Pl,{size:14}),u.jsx("span",{children:"Services & Capabilities"})]}),u.jsxs("h1",{className:"display-3 fw-extrabold text-dark tracking-tight mb-3",children:["Technical Scope & ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif italic",children:"Core Services."})]}),u.jsx("p",{className:"text-muted fs-5 fw-medium",style:{lineHeight:"1.65",maxWidth:"600px"},children:"We cover all four pillars of digital execution under one flexible monthly subscription with zero lock-in contracts."}),u.jsxs("div",{className:"d-flex flex-wrap gap-2 mt-4 pt-2",children:[u.jsx("button",{className:`btn rounded-pill px-3 py-2 fw-semibold small ${n==="all"?"btn-dark":"btn-outline-secondary"}`,onClick:()=>i("all"),children:"All Services"}),r.map(a=>u.jsx("button",{className:`btn rounded-pill px-3 py-2 fw-semibold small ${n===a.id?"btn-dark":"btn-outline-secondary"}`,onClick:()=>i(a.id),children:a.title},a.id))]})]})})}),u.jsx("section",{className:"py-5",style:{backgroundColor:"#F8F8F7"},children:u.jsx("div",{className:"container px-3 px-md-5",children:u.jsx("div",{className:"d-flex flex-column gap-5",children:s.map((a,o)=>{const l=a.icon;return u.jsxs("div",{className:"sp2-card",id:a.id,children:[u.jsxs("div",{className:"sp2-card-header",children:[u.jsxs("div",{className:"sp2-header-left",children:[u.jsxs("span",{className:"sp2-num",children:["0",o+1]}),u.jsx("div",{className:"sp2-icon",children:u.jsx(l,{size:24,strokeWidth:2})}),u.jsxs("div",{children:[u.jsx("span",{className:"sp2-badge",children:a.badge}),u.jsx("h2",{className:"sp2-title",children:a.title})]})]}),u.jsxs("div",{className:"sp2-timeline",children:[u.jsx(ac,{size:15,strokeWidth:2}),a.timeline]})]}),u.jsxs("div",{className:"sp2-card-body",children:[u.jsxs("div",{className:"sp2-col-main",children:[u.jsx("p",{className:"sp2-desc",children:a.shortDesc}),u.jsx("h4",{className:"sp2-label",children:"Scope & Deliverables"}),u.jsx("ul",{className:"sp2-list",children:a.deliverables.map((c,h)=>u.jsxs("li",{className:"sp2-list-item",children:[u.jsx(sc,{size:15,strokeWidth:2.5,className:"sp2-check"}),c]},h))})]}),u.jsxs("div",{className:"sp2-col-side",children:[u.jsx("h4",{className:"sp2-label",children:"Technologies & Stack"}),u.jsx("div",{className:"sp2-tags",children:a.tags.map((c,h)=>u.jsx("span",{className:"sp2-tag",children:c},h))}),u.jsxs("button",{className:"sp2-cta",onClick:t,children:[u.jsxs("span",{children:["Request ",a.title]}),u.jsx(Ms,{size:16,strokeWidth:2.5})]})]})]})]},a.id)})})})})]})}const JT=""+new URL("work-enterprise-Dxvck0KR.jpg",import.meta.url).href,QT=""+new URL("work-fitness-BVTOONVy.jpg",import.meta.url).href;function eA({onBookCallClick:t}){const[e,n]=Ye.useState("All"),[i,r]=Ye.useState(null),s=[{id:1,title:"Atlas Analytics Platform",category:"Website Development",tag:"Website Development",image:$v,metric:"+180% Conversion Rate",client:"Atlas Data Corp",desc:"Complete Next.js platform overhaul, custom React component library, and high-converting marketing website for a series-B SaaS platform.",fullDetails:"We rebuilt the entire Atlas Analytics website from scratch using Next.js 14, Tailwind CSS, and Framer Motion. Page speed scores improved from 42 to 98 on Core Web Vitals, resulting in a 180% increase in free trial signups.",tech:["Next.js","React","TypeScript","Tailwind","Framer Motion"]},{id:2,title:"Aurélia Luxury Storefront",category:"E-Commerce Solutions",tag:"E-Commerce Solutions",image:Kv,metric:"$2.4M ARR Generated",client:"Aurélia Haute Couture",desc:"Bespoke luxury Shopify storefront, customized checkout flow, and global multi-currency payment integration for Paris fashion house.",fullDetails:"Engineered a bespoke Shopify Liquid theme with custom 3D model viewers, quick add-to-cart drawer, and multi-currency Stripe payment gateway integration.",tech:["Shopify","Liquid","Stripe","GraphQL","JavaScript"]},{id:3,title:"Verve Mobile iOS Ecosystem",category:"Mobile App Development",tag:"Mobile App Development",image:Zv,metric:"4.9 App Store Rating",client:"Verve Health Inc.",desc:"Cross-platform React Native iOS & Android application with offline synchronization, biometric security, and push notifications.",fullDetails:"Built a cross-platform mobile experience serving over 250,000 active monthly users. Features include offline sync, HealthKit integration, biometric unlock, and real-time push alerts.",tech:["React Native","Swift","Kotlin","Firebase","REST API"]},{id:4,title:"Aura Design System & Prototyping",category:"UI/UX Design",tag:"UI/UX Design",image:Jv,metric:"3x Faster Feature Launch",client:"Aura Spatial Labs",desc:"End-to-end user experience design, interactive Figma prototypes, multi-brand design system, and micro-interactions.",fullDetails:"Crafted a comprehensive Figma design system containing over 450+ auto-layout components, light/dark mode tokens, and interactive high-fidelity user flows.",tech:["Figma","Design Systems","Prototyping","Framer","UI Kit"]},{id:5,title:"Monolith Enterprise Portal",category:"Website Development",tag:"Website Development",image:JT,metric:"99.9% Uptime Architecture",client:"Monolith Global",desc:"Enterprise web portal with headless CMS integration, multi-language localization, and role-based access control.",fullDetails:"Designed and built a multi-region corporate web portal powered by Next.js and Sanity CMS with automated deployment workflows.",tech:["Next.js","Sanity CMS","Tailwind","TypeScript"]},{id:6,title:"Kinetix Fitness Mobile App",category:"Mobile App Development",tag:"Mobile App Development",image:QT,metric:"120k Active Downloads",client:"Kinetix Labs",desc:"Workout tracking mobile application with animated exercise guides, social leaderboards, and subscription billing.",fullDetails:"Developed a high-performance React Native mobile app with custom canvas animations and Stripe in-app subscriptions.",tech:["React Native","Redux","Stripe","Node.js"]}],a=["All","Website Development","E-Commerce Solutions","Mobile App Development","UI/UX Design"],o=e==="All"?s:s.filter(l=>l.category===e);return u.jsxs("div",{className:"portfolio-page animate-up",children:[u.jsx("section",{className:"py-5 bg-white border-bottom",children:u.jsx("div",{className:"container px-3 px-md-5 py-4",children:u.jsxs("div",{className:"max-w-2xl",children:[u.jsxs("span",{className:"badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2",children:[u.jsx(qa,{size:14}),u.jsx("span",{children:"Case Studies & Work"})]}),u.jsxs("h1",{className:"display-3 fw-extrabold text-dark tracking-tight mb-3",children:["Selected Deliverables & ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif italic",children:"Client Success Stories."})]}),u.jsx("p",{className:"text-muted fs-5 fw-medium",style:{lineHeight:"1.65",maxWidth:"600px"},children:"Explore how we help ambitious startups and global teams ship world-class digital products in days, not months."}),u.jsx("div",{className:"d-flex flex-wrap gap-2 mt-4 pt-2",children:a.map(l=>u.jsx("button",{className:`btn rounded-pill px-3 py-2 fw-semibold small ${e===l?"btn-dark":"btn-outline-secondary"}`,onClick:()=>n(l),children:l},l))})]})})}),u.jsx("section",{className:"py-5",style:{backgroundColor:"#F8F8F7"},children:u.jsx("div",{className:"container px-3 px-md-5",children:u.jsx("div",{className:"row g-4",children:o.map(l=>u.jsx("div",{className:"col-12 col-md-6",children:u.jsxs("div",{className:"portfolio-card h-100 p-3 bg-white rounded-4 border shadow-sm transition-all",style:{cursor:"pointer"},onClick:()=>r(l),children:[u.jsxs("div",{className:"position-relative overflow-hidden rounded-4 mb-3",children:[u.jsx("img",{src:l.image,alt:l.title,className:"portfolio-card-img",style:{height:"280px",objectFit:"cover",width:"100%"}}),u.jsx("span",{className:"position-absolute top-0 start-0 m-3 badge bg-white text-dark rounded-pill shadow-sm px-3 py-2 fw-bold",children:l.tag}),u.jsx("span",{className:"position-absolute bottom-0 end-0 m-3 badge bg-dark text-white rounded-pill shadow px-3 py-2 fw-semibold",children:l.metric})]}),u.jsxs("div",{className:"px-2 pb-2",children:[u.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[u.jsx("h3",{className:"fs-4 fw-bold text-dark mb-0",children:l.title}),u.jsx("div",{className:"bg-light rounded-circle p-2",children:u.jsx(rc,{size:18,className:"text-dark"})})]}),u.jsx("p",{className:"text-muted small fw-medium mb-3",children:l.desc}),u.jsx("div",{className:"d-flex flex-wrap gap-1.5 pt-2 border-top",children:l.tech.map((c,h)=>u.jsx("span",{className:"badge bg-light text-secondary rounded-pill px-2.5 py-1 fs-7 border",children:c},h))})]})]})},l.id))})})}),i&&u.jsx("div",{className:"position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3",style:{backgroundColor:"rgba(15, 15, 16, 0.65)",backdropFilter:"blur(16px)",zIndex:3500},onClick:()=>r(null),children:u.jsxs("div",{className:"bg-white rounded-4 shadow-lg overflow-hidden w-100 position-relative animate-up",style:{maxWidth:"640px",maxHeight:"90vh",display:"flex",flexDirection:"column"},onClick:l=>l.stopPropagation(),children:[u.jsxs("div",{className:"p-4 bg-dark text-white d-flex align-items-center justify-content-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"badge bg-white text-dark px-2.5 py-1 rounded-pill small fw-bold mb-1 d-inline-block",children:i.tag}),u.jsx("h3",{className:"fw-bold fs-4 mb-0 text-white",children:i.title})]}),u.jsx("button",{className:"btn btn-sm btn-outline-light rounded-circle p-2",onClick:()=>r(null),children:u.jsx(lc,{size:18})})]}),u.jsxs("div",{className:"p-4 p-md-5 overflow-y-auto flex-grow-1",children:[u.jsx("img",{src:i.image,alt:i.title,className:"w-100 rounded-3 mb-4 object-fit-cover",style:{height:"240px"}}),u.jsxs("div",{className:"bg-light p-3 rounded-3 border mb-4 d-flex align-items-center justify-content-between",children:[u.jsxs("div",{children:[u.jsx("span",{className:"small text-muted d-block fw-semibold",children:"Client"}),u.jsx("span",{className:"fw-bold text-dark",children:i.client})]}),u.jsxs("div",{className:"text-end",children:[u.jsx("span",{className:"small text-muted d-block fw-semibold",children:"Key Result"}),u.jsx("span",{className:"badge bg-success text-white fw-bold px-3 py-1.5 fs-6",children:i.metric})]})]}),u.jsx("h4",{className:"small fw-bold text-uppercase text-muted tracking-wider mb-2",children:"Project Overview"}),u.jsx("p",{className:"text-dark fw-medium fs-6 mb-4",style:{lineHeight:"1.6"},children:i.fullDetails}),u.jsx("h4",{className:"small fw-bold text-uppercase text-muted tracking-wider mb-2",children:"Technologies Used"}),u.jsx("div",{className:"d-flex flex-wrap gap-2",children:i.tech.map((l,c)=>u.jsx("span",{className:"badge bg-light text-dark border rounded-pill px-3 py-1.5 fw-semibold",children:l},c))})]}),u.jsxs("div",{className:"p-4 bg-light border-top d-flex align-items-center justify-content-between",children:[u.jsx("span",{className:"small text-muted fw-medium",children:"Want similar results?"}),u.jsx("button",{className:"btn-dark-pill px-4 py-2.5",onClick:()=>{r(null),t&&t()},children:"Book Scope Call"})]})]})})]})}function tA({onBookCallClick:t}){const[e,n]=Ye.useState(!1),[i,r]=Ye.useState({name:"",email:"",service:"Website Development",budget:"$3k - $5k",message:""}),[s,a]=Ye.useState(0),o=[{q:"How fast can we kick off a new design or dev project?",a:"Once you subscribe or confirm your scope call, we onboard your team within 24 hours. You can submit your first request immediately in Trello or Slack."},{q:"Can I pause or cancel my monthly subscription anytime?",a:"Yes! If you only need work for 10 days, pause your subscription and remaining days are saved in your balance for future requests."},{q:"Who handles my design and development requests?",a:"All projects are built natively by senior designers and full-stack engineers with 8+ years of industry experience. No junior level outsourcing."},{q:"What format do I receive source files in?",a:"You receive 100% full commercial ownership of all Figma source files, Next.js/React GitHub repositories, Webflow transfers, or Shopify theme code."}],l=c=>{c.preventDefault(),n(!0)};return u.jsxs("div",{className:"contact-page animate-up",children:[u.jsx("section",{className:"py-5 bg-white border-bottom",children:u.jsx("div",{className:"container px-3 px-md-5 py-4",children:u.jsxs("div",{className:"max-w-2xl",children:[u.jsxs("span",{className:"badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2",children:[u.jsx(Hy,{size:14}),u.jsx("span",{children:"Contact Us"})]}),u.jsxs("h1",{className:"display-3 fw-extrabold text-dark tracking-tight mb-3",children:["Let's Build Something ",u.jsx("br",{}),u.jsx("span",{className:"brand-serif italic",children:"Exceptional Together."})]}),u.jsx("p",{className:"text-muted fs-5 fw-medium",style:{lineHeight:"1.65",maxWidth:"580px"},children:"Have questions or want to discuss a custom feature scope? Send us a message or schedule a 15-minute intro call."})]})})}),u.jsx("section",{className:"py-5",style:{backgroundColor:"#F8F8F7"},children:u.jsx("div",{className:"container px-3 px-md-5",children:u.jsxs("div",{className:"row g-4",children:[u.jsx("div",{className:"col-12 col-lg-5",children:u.jsxs("div",{className:"bg-white rounded-4 p-4 p-md-5 border shadow-sm h-100 d-flex flex-column justify-content-between",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"fs-3 fw-bold text-dark mb-4",children:"Direct Contact"}),u.jsxs("div",{className:"d-flex flex-column gap-4 mb-5",children:[u.jsxs("div",{className:"d-flex align-items-center gap-3",children:[u.jsx("div",{className:"bg-light text-dark rounded-circle p-3 border",children:u.jsx(rh,{size:22})}),u.jsxs("div",{children:[u.jsx("span",{className:"small text-muted fw-bold text-uppercase d-block",children:"Email Us"}),u.jsx("a",{href:"mailto:hello@orcodix.com",className:"fw-bold text-dark text-decoration-none fs-5",children:"hello@orcodix.com"})]})]}),u.jsxs("div",{className:"d-flex align-items-center gap-3",children:[u.jsx("div",{className:"bg-light text-dark rounded-circle p-3 border",children:u.jsx(ac,{size:22})}),u.jsxs("div",{children:[u.jsx("span",{className:"small text-muted fw-bold text-uppercase d-block",children:"Average Response Time"}),u.jsx("span",{className:"fw-bold text-dark fs-6",children:"Under 2 Hours"})]})]}),u.jsxs("div",{className:"d-flex align-items-center gap-3",children:[u.jsx("div",{className:"bg-light text-dark rounded-circle p-3 border",children:u.jsx(zy,{size:22})}),u.jsxs("div",{children:[u.jsx("span",{className:"small text-muted fw-bold text-uppercase d-block",children:"Operating Hours"}),u.jsx("span",{className:"fw-bold text-dark fs-6",children:"Global (EST / GMT / IST)"})]})]})]})]}),u.jsxs("div",{className:"bg-dark text-white rounded-4 p-4 mt-4",children:[u.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[u.jsx("img",{src:Ja,alt:"Lead Designer",className:"rounded-circle border border-2 border-white",style:{width:"48px",height:"48px",objectFit:"cover"}}),u.jsxs("div",{children:[u.jsx("h4",{className:"fw-bold fs-6 mb-0 text-white",children:"Prefer to talk live?"}),u.jsx("span",{className:"small text-white-50",children:"15-minute 1-on-1 intro call"})]})]}),u.jsxs("button",{className:"btn btn-light rounded-pill w-100 py-2.5 fw-bold text-dark d-flex align-items-center justify-content-center gap-2 small",onClick:t,children:[u.jsx(Gy,{size:16}),u.jsx("span",{children:"Book Intro Call"})]})]})]})}),u.jsx("div",{className:"col-12 col-lg-7",children:u.jsx("div",{className:"bg-white rounded-4 p-4 p-md-5 border shadow-sm",children:e?u.jsxs("div",{className:"text-center py-5",children:[u.jsx(sc,{size:64,className:"text-success mb-3"}),u.jsx("h3",{className:"display-6 fw-extrabold text-dark mb-2",children:"Message Received!"}),u.jsxs("p",{className:"text-muted fs-5 fw-medium mb-4 mx-auto",style:{maxWidth:"440px"},children:["Thank you for reaching out, ",u.jsx("strong",{children:i.name}),". Our senior team will review your project details and get back to you at ",u.jsx("strong",{children:i.email})," within 2 hours."]}),u.jsx("button",{className:"btn-dark-pill px-5 py-3",onClick:()=>n(!1),children:"Send Another Message"})]}):u.jsxs("form",{onSubmit:l,children:[u.jsx("h3",{className:"fs-3 fw-bold text-dark mb-2",children:"Project Inquiry Form"}),u.jsx("p",{className:"text-muted small fw-medium mb-4",children:"Fill in your details below and we will get back to you with a scope breakdown."}),u.jsxs("div",{className:"row g-3 mb-3",children:[u.jsxs("div",{className:"col-12 col-md-6",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Full Name"}),u.jsx("input",{type:"text",className:"form-control bg-light py-2.5 fw-medium",placeholder:"Sarah Jenkins",required:!0,value:i.name,onChange:c=>r({...i,name:c.target.value})})]}),u.jsxs("div",{className:"col-12 col-md-6",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Work Email"}),u.jsx("input",{type:"email",className:"form-control bg-light py-2.5 fw-medium",placeholder:"sarah@company.com",required:!0,value:i.email,onChange:c=>r({...i,email:c.target.value})})]})]}),u.jsxs("div",{className:"row g-3 mb-3",children:[u.jsxs("div",{className:"col-12 col-md-6",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Primary Service"}),u.jsxs("select",{className:"form-select bg-light py-2.5 fw-medium",value:i.service,onChange:c=>r({...i,service:c.target.value}),children:[u.jsx("option",{children:"Website Development"}),u.jsx("option",{children:"E-Commerce Solutions"}),u.jsx("option",{children:"Mobile App Development"}),u.jsx("option",{children:"UI/UX Design"})]})]}),u.jsxs("div",{className:"col-12 col-md-6",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Estimated Budget"}),u.jsxs("select",{className:"form-select bg-light py-2.5 fw-medium",value:i.budget,onChange:c=>r({...i,budget:c.target.value}),children:[u.jsx("option",{children:"$3k - $5k / mo (Standard Pro)"}),u.jsx("option",{children:"$6k - $9k / mo (Double Speed)"}),u.jsx("option",{children:"Custom One-Off Project"})]})]})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"form-label small fw-bold text-muted text-uppercase",children:"Project Scope & Details"}),u.jsx("textarea",{className:"form-control bg-light py-2.5 fw-medium",rows:"4",placeholder:"Tell us about your project goals, timelines, or specific feature requirements...",required:!0,value:i.message,onChange:c=>r({...i,message:c.target.value})})]}),u.jsxs("button",{type:"submit",className:"btn-dark-pill w-100 py-3 d-flex align-items-center justify-content-center gap-2",children:[u.jsx("span",{children:"Send Project Inquiry"}),u.jsx(Xy,{size:16})]})]})})})]})})}),u.jsx("section",{className:"py-5 bg-white border-top",children:u.jsxs("div",{className:"container px-3 px-md-5 py-4",children:[u.jsxs("div",{className:"text-center max-w-xl mx-auto mb-5",children:[u.jsx("span",{className:"badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold mb-3",children:"Got Questions?"}),u.jsxs("h2",{className:"display-5 fw-extrabold text-dark tracking-tight mb-2",children:["Frequently Asked ",u.jsx("span",{className:"brand-serif italic",children:"Questions"})]})]}),u.jsx("div",{className:"row justify-content-center",children:u.jsx("div",{className:"col-12 col-lg-8",children:u.jsx("div",{className:"d-flex flex-column gap-3",children:o.map((c,h)=>u.jsxs("div",{className:`border rounded-4 p-4 transition-all ${s===h?"bg-light border-dark":"bg-white"}`,children:[u.jsxs("div",{className:"d-flex align-items-center justify-content-between",onClick:()=>a(s===h?-1:h),style:{cursor:"pointer"},children:[u.jsx("h3",{className:"fs-5 fw-bold text-dark mb-0",children:c.q}),u.jsx("div",{className:"bg-white border rounded-circle p-1 ms-3 fw-bold",children:s===h?"−":"+"})]}),s===h&&u.jsx("p",{className:"text-muted fw-medium mt-3 mb-0 pt-2 border-top",children:c.a})]},h))})})})]})})]})}function nA(){const[t,e]=Ye.useState("home"),[n,i]=Ye.useState("Website Development"),[r,s]=Ye.useState(!1);Dy(void 0,t);const a=o=>{e(o),window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs("div",{className:"min-vh-100 d-flex flex-column",children:[u.jsx(Zy,{currentPage:t,onNavigate:a,onBookingClick:()=>s(!0)}),u.jsxs("main",{className:"flex-grow-1",children:[t==="home"&&u.jsxs(u.Fragment,{children:[u.jsx(BT,{activeCategory:n,setActiveCategory:i,onBookCallClick:()=>s(!0)}),u.jsx(zT,{onNavigate:a,onBookCallClick:()=>s(!0)}),u.jsx(HT,{onBookCallClick:()=>s(!0)}),u.jsx(VT,{activeCategory:n,onBookCallClick:()=>s(!0)}),u.jsx(jT,{onBookCallClick:()=>s(!0)}),u.jsx(XT,{})]}),t==="about"&&u.jsx(KT,{onNavigate:a,onBookCallClick:()=>s(!0)}),t==="services"&&u.jsx(ZT,{onNavigate:a,onBookCallClick:()=>s(!0)}),t==="portfolio"&&u.jsx(eA,{onBookCallClick:()=>s(!0)}),t==="contact"&&u.jsx(tA,{onBookCallClick:()=>s(!0)})]}),u.jsx(qT,{onNavigate:a,onBookCallClick:()=>s(!0)}),u.jsx(YT,{isOpen:r,onClose:()=>s(!1)})]})}Tu.createRoot(document.getElementById("root")).render(u.jsx(eg.StrictMode,{children:u.jsx(nA,{})}));
