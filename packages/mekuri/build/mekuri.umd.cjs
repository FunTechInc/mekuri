(function(P,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],u):(P=typeof globalThis<"u"?globalThis:P||self,u(P.mekuri={},P.React))})(this,function(P,u){"use strict";var J={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Ae(){if(re)return I;re=1;var n=u,a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,v=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function m(R,l,T){var g,y={},w=null,W=null;T!==void 0&&(w=""+T),l.key!==void 0&&(w=""+l.key),l.ref!==void 0&&(W=l.ref);for(g in l)s.call(l,g)&&!p.hasOwnProperty(g)&&(y[g]=l[g]);if(R&&R.defaultProps)for(g in l=R.defaultProps,l)y[g]===void 0&&(y[g]=l[g]);return{$$typeof:a,type:R,key:w,ref:W,props:y,_owner:v.current}}return I.Fragment=i,I.jsx=m,I.jsxs=m,I}var M={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function De(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var n=u,a=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),R=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),se=Symbol.iterator,Qe="@@iterator";function qe(e){if(e===null||typeof e!="object")return null;var r=se&&e[se]||e[Qe];return typeof r=="function"?r:null}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];$e("error",e,t)}}function $e(e,r,t){{var o=A.ReactDebugCurrentFrame,d=o.getStackAddendum();d!==""&&(r+="%s",t=t.concat([d]));var h=t.map(function(f){return String(f)});h.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,h)}}var er=!1,rr=!1,tr=!1,nr=!1,ar=!1,ue;ue=Symbol.for("react.module.reference");function or(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===p||ar||e===v||e===T||e===g||nr||e===W||er||rr||tr||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===y||e.$$typeof===m||e.$$typeof===R||e.$$typeof===l||e.$$typeof===ue||e.getModuleId!==void 0))}function ir(e,r,t){var o=e.displayName;if(o)return o;var d=r.displayName||r.name||"";return d!==""?t+"("+d+")":t}function ce(e){return e.displayName||"Context"}function S(e){if(e==null)return null;if(typeof e.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case i:return"Portal";case p:return"Profiler";case v:return"StrictMode";case T:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return ce(r)+".Consumer";case m:var t=e;return ce(t._context)+".Provider";case l:return ir(e,e.render,"ForwardRef");case y:var o=e.displayName||null;return o!==null?o:S(e.type)||"Memo";case w:{var d=e,h=d._payload,f=d._init;try{return S(f(h))}catch{return null}}}return null}var O=Object.assign,Y=0,le,fe,de,ve,pe,he,ge;function ye(){}ye.__reactDisabledLog=!0;function sr(){{if(Y===0){le=console.log,fe=console.info,de=console.warn,ve=console.error,pe=console.group,he=console.groupCollapsed,ge=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ye,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function ur(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:le}),info:O({},e,{value:fe}),warn:O({},e,{value:de}),error:O({},e,{value:ve}),group:O({},e,{value:pe}),groupCollapsed:O({},e,{value:he}),groupEnd:O({},e,{value:ge})})}Y<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var H=A.ReactCurrentDispatcher,K;function B(e,r,t){{if(K===void 0)try{throw Error()}catch(d){var o=d.stack.trim().match(/\n( *(at )?)/);K=o&&o[1]||""}return`
`+K+e}}var X=!1,U;{var cr=typeof WeakMap=="function"?WeakMap:Map;U=new cr}function me(e,r){if(!e||X)return"";{var t=U.get(e);if(t!==void 0)return t}var o;X=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var h;h=H.current,H.current=null,sr();try{if(r){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(k){o=k}Reflect.construct(e,[],f)}else{try{f.call()}catch(k){o=k}e.call(f.prototype)}}else{try{throw Error()}catch(k){o=k}e()}}catch(k){if(k&&o&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),C=o.stack.split(`
`),b=c.length-1,E=C.length-1;b>=1&&E>=0&&c[b]!==C[E];)E--;for(;b>=1&&E>=0;b--,E--)if(c[b]!==C[E]){if(b!==1||E!==1)do if(b--,E--,E<0||c[b]!==C[E]){var x=`
`+c[b].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),typeof e=="function"&&U.set(e,x),x}while(b>=1&&E>=0);break}}}finally{X=!1,H.current=h,ur(),Error.prepareStackTrace=d}var F=e?e.displayName||e.name:"",je=F?B(F):"";return typeof e=="function"&&U.set(e,je),je}function lr(e,r,t){return me(e,!1)}function fr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return me(e,fr(e));if(typeof e=="string")return B(e);switch(e){case T:return B("Suspense");case g:return B("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return lr(e.render);case y:return N(e.type,r,t);case w:{var o=e,d=o._payload,h=o._init;try{return N(h(d),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,be={},Ee=A.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}function dr(e,r,t,o,d){{var h=Function.call.bind(V);for(var f in e)if(h(e,f)){var c=void 0;try{if(typeof e[f]!="function"){var C=Error((o||"React class")+": "+t+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw C.name="Invariant Violation",C}c=e[f](r,f,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(b){c=b}c&&!(c instanceof Error)&&(z(d),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,f,typeof c),z(null)),c instanceof Error&&!(c.message in be)&&(be[c.message]=!0,z(d),_("Failed %s type: %s",t,c.message),z(null))}}}var vr=Array.isArray;function Z(e){return vr(e)}function pr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function hr(e){try{return Te(e),!1}catch{return!0}}function Te(e){return""+e}function Re(e){if(hr(e))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",pr(e)),Te(e)}var L=A.ReactCurrentOwner,gr={key:!0,ref:!0,__self:!0,__source:!0},_e,Ce,Q;Q={};function yr(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function mr(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function br(e,r){if(typeof e.ref=="string"&&L.current&&r&&L.current.stateNode!==r){var t=S(L.current.type);Q[t]||(_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',S(L.current.type),e.ref),Q[t]=!0)}}function Er(e,r){{var t=function(){_e||(_e=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Tr(e,r){{var t=function(){Ce||(Ce=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Rr=function(e,r,t,o,d,h,f){var c={$$typeof:a,type:e,key:r,ref:t,props:f,_owner:h};return c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function _r(e,r,t,o,d){{var h,f={},c=null,C=null;t!==void 0&&(Re(t),c=""+t),mr(r)&&(Re(r.key),c=""+r.key),yr(r)&&(C=r.ref,br(r,d));for(h in r)V.call(r,h)&&!gr.hasOwnProperty(h)&&(f[h]=r[h]);if(e&&e.defaultProps){var b=e.defaultProps;for(h in b)f[h]===void 0&&(f[h]=b[h])}if(c||C){var E=typeof e=="function"?e.displayName||e.name||"Unknown":e;c&&Er(f,E),C&&Tr(f,E)}return Rr(e,c,C,d,o,L.current,f)}}var q=A.ReactCurrentOwner,Pe=A.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(t)}else Pe.setExtraStackFrame(null)}var $;$=!1;function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function we(){{if(q.current){var e=S(q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Cr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var xe={};function Pr(e){{var r=we();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Pr(r);if(xe[t])return;xe[t]=!0;var o="";e&&e._owner&&e._owner!==q.current&&(o=" It was passed a child from "+S(e._owner.type)+"."),D(e),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),D(null)}}function ke(e,r){{if(typeof e!="object")return;if(Z(e))for(var t=0;t<e.length;t++){var o=e[t];ee(o)&&Se(o,r)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var d=qe(e);if(typeof d=="function"&&d!==e.entries)for(var h=d.call(e),f;!(f=h.next()).done;)ee(f.value)&&Se(f.value,r)}}}function wr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===y))t=r.propTypes;else return;if(t){var o=S(r);dr(t,e.props,"prop",o,e)}else if(r.PropTypes!==void 0&&!$){$=!0;var d=S(r);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",d||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function xr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var o=r[t];if(o!=="children"&&o!=="key"){D(e),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),D(null);break}}e.ref!==null&&(D(e),_("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function Oe(e,r,t,o,d,h){{var f=or(e);if(!f){var c="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var C=Cr(d);C?c+=C:c+=we();var b;e===null?b="null":Z(e)?b="array":e!==void 0&&e.$$typeof===a?(b="<"+(S(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):b=typeof e,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",b,c)}var E=_r(e,r,t,d,h);if(E==null)return E;if(f){var x=r.children;if(x!==void 0)if(o)if(Z(x)){for(var F=0;F<x.length;F++)ke(x[F],e);Object.freeze&&Object.freeze(x)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(x,e)}return e===s?xr(E):wr(E),E}}function Sr(e,r,t){return Oe(e,r,t,!0)}function kr(e,r,t){return Oe(e,r,t,!1)}var Or=kr,jr=Sr;M.Fragment=s,M.jsx=Or,M.jsxs=jr}()),M}process.env.NODE_ENV==="production"?J.exports=Ae():J.exports=De();var j=J.exports;const Fe=({trigger:n,setMekuriState:a,millisecond:i})=>{const s=u.useRef(n),v=u.useRef(0);u.useEffect(()=>(s.current!==n&&(s.current=n,a(p=>({...p,nextTrigger:n,phase:"leave",yPosBeforeLeave:window.scrollY||document.documentElement.scrollTop})),v.current=setTimeout(()=>{a(p=>({...p,prevTrigger:p.currentTrigger,currentTrigger:n,nextTrigger:n,phase:"enter"}))},i)),()=>{clearTimeout(v.current)}),[n,i,a])},Ie={millisecond:0,second:0},Me={prevTrigger:null,currentTrigger:null,nextTrigger:null,phase:null,yPosBeforeLeave:0},Ye={scrollRestoration:"top",mode:"wait"},ne=u.createContext(Ie),ae=u.createContext(Me),oe=u.createContext(Ye),Le=({trigger:n,children:a,millisecond:i=1e3,scrollRestoration:s="restore",mode:v="wait"})=>{const[p]=u.useState({scrollRestoration:s,mode:v}),[m]=u.useState({millisecond:i,second:i/1e3}),[R,l]=u.useState({prevTrigger:null,currentTrigger:n,nextTrigger:null,phase:null,yPosBeforeLeave:0});return Fe({trigger:n,setMekuriState:l,millisecond:i}),j.jsx(ne.Provider,{value:m,children:j.jsx(oe.Provider,{value:p,children:j.jsx(ae.Provider,{value:R,children:a})})})},We=()=>u.useContext(ne),ie=()=>u.useContext(oe),G=()=>u.useContext(ae),Be=()=>{const n=window.location.hash.substring(1);if(!n)return!1;const a=document.getElementById(n);if(!a)return!1;const i=window.scrollY||document.documentElement.scrollTop;return a.getBoundingClientRect().top+i},Ue=(n,a)=>{const i=n==null?void 0:n.current;if(!i)return;new IntersectionObserver((v,p)=>{v.forEach(m=>{a(m.isIntersecting),p.unobserve(m.target)})},{rootMargin:"0px",threshold:0}).observe(i)},Ne=n=>Array.from(document.styleSheets).some(a=>a.href?a.href.split("?")[0]===n.split("?")[0]:!1),Ve=n=>{const a=location.pathname,i=document.head.querySelectorAll('link[rel="stylesheet"]');let s=i.length;if(s===0){n();return}const v=()=>{if(s--,s===0){if(a!==location.pathname)return;n()}};i.forEach(p=>{Ne(p.href)?v():p.addEventListener("load",v,{once:!0})})},ze=({onOnce:n,onLeave:a,onEnter:i,onAfterSyncEnter:s,onEveryLeave:v,onEveryEnter:p})=>{const m=u.useRef(!1),R=u.useRef(),l=G(),{mode:T}=ie();u.useEffect(()=>{R.current=location.pathname},[]),u.useEffect(()=>{const g=R.current===location.pathname,y={prevTrigger:l.prevTrigger,currentTrigger:l.currentTrigger,nextTrigger:l.nextTrigger,yPosBeforeLeave:l.yPosBeforeLeave,getHashPos:Be,intersectionObserver:Ue,onStylesheetLoad:Ve};if(!m.current&&l.phase===null){n&&n(y),m.current=!0;return}l.phase==="leave"&&(v&&v(y),T==="wait"&&a&&a(y),T==="sync"&&(g?i&&i({...y,prevTrigger:l.currentTrigger,currentTrigger:l.nextTrigger}):a&&a(y))),l.phase==="enter"&&(p&&p(y),T==="wait"&&g&&i&&i(y),T==="sync"&&s&&s(y))},[l])},Je=n=>{const{phase:a,nextTrigger:i,currentTrigger:s}=G(),v=u.useRef(s);return(n==="enter"&&a==="enter"||n==="leave"&&a==="leave")&&(v.current=i),v.current},Ge=({children:n,routerContext:a})=>{const i=u.useContext(a),s=u.useRef(i).current;return j.jsx(a.Provider,{value:s,children:n})},He=({isCacheUpdate:n,offsetIndex:a,cache:i,key:s,isPopstate:v,pos:p})=>{if(v===!1)return n&&(i.backPosY=p,i.keysArr.push(s)),0;const m=s===i.keysArr[i.keysArr.length-a]&&i.backPosY||0;return n&&(i.keysArr=[s]),m},Ke=({mekuriState:n,scrollRestoration:a})=>{const i=u.useRef(!0),s=u.useRef(!1),v=typeof a=="object"&&"scrollRestoration"in a,p=u.useRef({backPosY:0,keysArr:[]}),m=v&&!a.onEnter&&a.onLeave,R=u.useRef(m?"leave":"enter"),l=u.useCallback(g=>{const y=R.current===g,w=He({isCacheUpdate:y,offsetIndex:g==="enter"?2:1,cache:p.current,key:n.currentTrigger||"",pos:n.yPosBeforeLeave,isPopstate:s.current});return y&&(s.current=!1),w},[n.currentTrigger,n.yPosBeforeLeave,R]),T=u.useCallback((g,y,w)=>{g==="top"?w(0):g==="restore"&&w(l(y))},[l]);u.useEffect(()=>{if(a!=="none"){if(i.current){window.history.scrollRestoration==="auto"&&(window.history.scrollRestoration="manual"),window.addEventListener("popstate",()=>{s.current=!0}),p.current.keysArr.push(n.currentTrigger||""),i.current=!1;return}if(n.phase==="leave"&&v&&(a!=null&&a.onLeave)&&T(a.scrollRestoration,n.phase,a.onLeave),n.phase==="enter")switch(a){case"top":window.scrollTo({top:0});break;case"restore":window.scrollTo({top:l(n.phase)});break;default:v&&(a!=null&&a.onEnter)&&T(a.scrollRestoration,n.phase,a.onEnter);break}}},[n.phase])},Xe=n=>u.Children.toArray(n).filter(u.isValidElement),Ze=({children:n})=>{const{scrollRestoration:a,mode:i}=ie(),s=G(),v=Xe(n),[p,m]=u.useReducer((T,g)=>{switch(g.type){case"leave-sync":return{...T,nextChildren:g.nextChildren||null};case"enter-wait":return{...T,currentChildren:g.nextChildren||null};case"enter-sync":return{...T,currentChildren:T.nextChildren||null,nextChildren:null};default:throw new Error}},{currentChildren:v,nextChildren:null}),[R,l]=u.useState(s.phase);return R!==s.phase&&(l(s.phase),s.phase==="leave"&&i==="sync"&&m({type:"leave-sync",nextChildren:v}),s.phase==="enter"&&(i==="wait"&&m({type:"enter-wait",nextChildren:v}),i==="sync"&&m({type:"enter-sync"}))),Ke({mekuriState:s,scrollRestoration:a}),j.jsxs(j.Fragment,{children:[p.currentChildren,p.nextChildren]})};P.Mekuri=Ze,P.MekuriContext=Le,P.MekuriFreezer=Ge,P.useMekuriAnimation=ze,P.useMekuriDuration=We,P.useMekuriTrigger=Je,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=mekuri.umd.cjs.map
