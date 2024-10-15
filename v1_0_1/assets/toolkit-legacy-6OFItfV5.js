System.register([],(function(e,t){"use strict";return{execute:function(){function t(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}e({d:c,e:s,f:function(e){const r=we(),{reducer:n,middleware:o,devTools:u=!0,preloadedState:f,enhancers:l}=e||{};let p,d;if("function"==typeof n)p=n;else{if(!i(n))throw new Error($e(1));p=s(n)}d="function"==typeof o?o(r):r();let y=a;u&&(y=pe({trace:!ve,..."object"==typeof u&&u}));const h=function(...e){return r=>(n,o)=>{const i=r(n,o);let c=()=>{throw new Error(t(15))};const s={getState:i.getState,dispatch:(e,...t)=>c(e,...t)},u=e.map((e=>e(s)));return c=a(...u)(i.dispatch),{...i,dispatch:c}}}(...d),_=ge(h);let w="function"==typeof l?l(_):_();const m=y(...w);return c(p,f,m)}});var r=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),n=()=>Math.random().toString(36).substring(7).split("").join("."),o={INIT:`@@redux/INIT${n()}`,REPLACE:`@@redux/REPLACE${n()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${n()}`};function i(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function c(e,n,s){if("function"!=typeof e)throw new Error(t(2));if("function"==typeof n&&"function"==typeof s||"function"==typeof s&&"function"==typeof arguments[3])throw new Error(t(0));if("function"==typeof n&&void 0===s&&(s=n,n=void 0),void 0!==s){if("function"!=typeof s)throw new Error(t(1));return s(c)(e,n)}let a=e,u=n,f=new Map,l=f,p=0,d=!1;function y(){l===f&&(l=new Map,f.forEach(((e,t)=>{l.set(t,e)})))}function h(){if(d)throw new Error(t(3));return u}function _(e){if("function"!=typeof e)throw new Error(t(4));if(d)throw new Error(t(5));let r=!0;y();const n=p++;return l.set(n,e),function(){if(r){if(d)throw new Error(t(6));r=!1,y(),l.delete(n),f=null}}}function w(e){if(!i(e))throw new Error(t(7));if(void 0===e.type)throw new Error(t(8));if("string"!=typeof e.type)throw new Error(t(17));if(d)throw new Error(t(9));try{d=!0,u=a(u,e)}finally{d=!1}return(f=l).forEach((e=>{e()})),e}return w({type:o.INIT}),{dispatch:w,subscribe:_,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error(t(10));a=e,w({type:o.REPLACE})},[r]:function(){const e=_;return{subscribe(r){if("object"!=typeof r||null===r)throw new Error(t(11));function n(){const e=r;e.next&&e.next(h())}return n(),{unsubscribe:e(n)}},[r](){return this}}}}}function s(e){const r=Object.keys(e),n={};for(let t=0;t<r.length;t++){const o=r[t];"function"==typeof e[o]&&(n[o]=e[o])}const i=Object.keys(n);let c;try{!function(e){Object.keys(e).forEach((r=>{const n=e[r];if(void 0===n(void 0,{type:o.INIT}))throw new Error(t(12));if(void 0===n(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error(t(13))}))}(n)}catch(s){c=s}return function(e={},r){if(c)throw c;let o=!1;const s={};for(let c=0;c<i.length;c++){const a=i[c],u=n[a],f=e[a],l=u(f,r);if(void 0===l)throw r&&r.type,new Error(t(14));s[a]=l,o=o||l!==f}return o=o||i.length!==Object.keys(e).length,o?s:e}}function a(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...r)=>e(t(...r))))}var u=Symbol.for("immer-nothing"),f=Symbol.for("immer-draftable"),l=Symbol.for("immer-state");function p(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var d=Object.getPrototypeOf;function y(e){return!!e&&!!e[l]}function h(e){return!!e&&(w(e)||Array.isArray(e)||!!e[f]||!!e.constructor?.[f]||E(e)||O(e))}var _=Object.prototype.constructor.toString();function w(e){if(!e||"object"!=typeof e)return!1;const t=d(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===_}function m(e,t){0===b(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function b(e){const t=e[l];return t?t.type_:Array.isArray(e)?1:E(e)?2:O(e)?3:0}function g(e,t){return 2===b(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function v(e,t,r){const n=b(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function E(e){return e instanceof Map}function O(e){return e instanceof Set}function j(e){return e.copy_||e.base_}function S(e,t){if(E(e))return new Map(e);if(O(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=w(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[l];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(d(e),t)}{const t=d(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function C(e,t=!1){return R(e)||y(e)||!h(e)||(b(e)>1&&(e.set=e.add=e.clear=e.delete=P),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>C(t,!0)))),e}function P(){p(2)}function R(e){return Object.isFrozen(e)}var A,T={};function z(e){const t=T[e];return t||p(0),t}function k(){return A}function x(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function M(e){N(e),e.drafts_.forEach(D),e.drafts_=null}function N(e){e===A&&(A=e.parent_)}function I(e){return A={drafts_:[],parent_:A,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function D(e){const t=e[l];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function F(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[l].modified_&&(M(t),p(4)),h(e)&&(e=W(t,e),t.parent_||q(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(r[l].base_,e,t.patches_,t.inversePatches_)):e=W(t,r,[]),M(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==u?e:void 0}function W(e,t,r){if(R(t))return t;const n=t[l];if(!n)return m(t,((o,i)=>$(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return q(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),m(o,((o,c)=>$(e,n,t,o,c,r,i))),q(e,t,!1),r&&e.patches_&&z("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function $(e,t,r,n,o,i,c){if(y(o)){const c=W(e,o,i&&t&&3!==t.type_&&!g(t.assigned_,n)?i.concat(n):void 0);if(v(r,n,c),!y(c))return;e.canAutoFreeze_=!1}else c&&r.add(o);if(h(o)&&!R(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;W(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||q(e,o)}}function q(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&C(t,r)}var B={get(e,t){if(t===l)return e;const r=j(e);if(!g(r,t))return function(e,t,r){const n=U(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!h(n)?n:n===L(e.base_,t)?(X(e),e.copy_[t]=G(n,e)):n},has:(e,t)=>t in j(e),ownKeys:e=>Reflect.ownKeys(j(e)),set(e,t,r){const n=U(j(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=L(j(e),t),c=n?.[l];if(c&&c.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((o=r)===(i=n)?0!==o||1/o==1/i:o!=o&&i!=i)&&(void 0!==r||g(e.base_,t)))return!0;X(e),V(e)}var o,i;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==L(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,X(e),V(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=j(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){p(11)},getPrototypeOf:e=>d(e.base_),setPrototypeOf(){p(12)}},K={};function L(e,t){const r=e[l];return(r?j(r):e)[t]}function U(e,t){if(!(t in e))return;let r=d(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=d(r)}}function V(e){e.modified_||(e.modified_=!0,e.parent_&&V(e.parent_))}function X(e){e.copy_||(e.copy_=S(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function G(e,t){const r=E(e)?z("MapSet").proxyMap_(e,t):O(e)?z("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:k(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=B;r&&(o=[n],i=K);const{revoke:c,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=c,s}(e,t);return(t?t.scope_:k()).drafts_.push(r),r}function H(e){return y(e)||p(10),J(e)}function J(e){if(!h(e)||R(e))return e;const t=e[l];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=S(e,t.scope_.immer_.useStrictShallowCopy_)}else r=S(e,!0);return m(r,((e,t)=>{v(r,e,J(t))})),t&&(t.finalized_=!1),r}m(B,((e,t)=>{K[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),K.deleteProperty=function(e,t){return K.set.call(this,e,t,void 0)},K.set=function(e,t,r){return B.set.call(this,e[0],t,r,e[0])};var Q=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&p(6),void 0!==r&&"function"!=typeof r&&p(7),h(e)){const o=I(this),i=G(e,void 0);let c=!0;try{n=t(i),c=!1}finally{c?M(o):N(o)}return x(o,r),F(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===u&&(n=void 0),this.autoFreeze_&&C(n,!0),r){const t=[],o=[];z("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}p(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){h(e)||p(8),y(e)&&(e=H(e));const t=I(this),r=G(e,void 0);return r[l].isManual_=!0,N(t),r}finishDraft(e,t){const r=e&&e[l];r&&r.isManual_||p(9);const{scope_:n}=r;return x(n,t),F(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=z("Patches").applyPatches_;return y(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},Y=Q.produce;Q.produceWithPatches.bind(Q),Q.setAutoFreeze.bind(Q),Q.setUseStrictShallowCopy.bind(Q),Q.applyPatches.bind(Q),Q.createDraft.bind(Q),Q.finishDraft.bind(Q);var Z=e=>Array.isArray(e)?e:[e];function ee(e){const t=Array.isArray(e[0])?e[0]:e;return function(e,t="expected all items to be functions, instead received the following types: "){if(!e.every((e=>"function"==typeof e))){const r=e.map((e=>"function"==typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${r}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}var te="undefined"!=typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},re=0,ne=1;function oe(){return{s:re,v:void 0,o:null,p:null}}function ie(e,t={}){let r=oe();const{resultEqualityCheck:n}=t;let o,i=0;function c(){let t=r;const{length:c}=arguments;for(let e=0,r=c;e<r;e++){const r=arguments[e];if("function"==typeof r||"object"==typeof r&&null!==r){let e=t.o;null===e&&(t.o=e=new WeakMap);const n=e.get(r);void 0===n?(t=oe(),e.set(r,t)):t=n}else{let e=t.p;null===e&&(t.p=e=new Map);const n=e.get(r);void 0===n?(t=oe(),e.set(r,t)):t=n}}const s=t;let a;if(t.s===ne?a=t.v:(a=e.apply(null,arguments),i++),s.s=ne,n){const e=o?.deref?.()??o;null!=e&&n(e,a)&&(a=e,0!==i&&i--),o="object"==typeof a&&null!==a||"function"==typeof a?new te(a):a}return s.v=a,a}return c.clearCache=()=>{r=oe(),c.resetResultsCount()},c.resultsCount=()=>i,c.resetResultsCount=()=>{i=0},c}function ce(e,...t){const r="function"==typeof e?{memoize:e,memoizeOptions:t}:e,n=(...e)=>{let t,n=0,o=0,i={},c=e.pop();"object"==typeof c&&(i=c,c=e.pop()),function(e,t="expected a function, instead received "+typeof e){if("function"!=typeof e)throw new TypeError(t)}(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const s={...r,...i},{memoize:a,memoizeOptions:u=[],argsMemoize:f=ie,argsMemoizeOptions:l=[],devModeChecks:p={}}=s,d=Z(u),y=Z(l),h=ee(e),_=a((function(){return n++,c.apply(null,arguments)}),...d),w=f((function(){o++;const e=function(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}(h,arguments);return t=_.apply(null,e),t}),...y);return Object.assign(w,{resultFunc:c,memoizedResultFunc:_,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>t,recomputations:()=>n,resetRecomputations:()=>{n=0},memoize:a,argsMemoize:f})};return Object.assign(n,{withTypes:()=>n}),n}var se=e("a",ce(ie)),ae=Object.assign(((e,t=se)=>{!function(e,t="expected an object, instead received "+typeof e){if("object"!=typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const r=Object.keys(e);return t(r.map((t=>e[t])),((...e)=>e.reduce(((e,t,n)=>(e[r[n]]=t,e)),{})))}),{withTypes:()=>ae});function ue(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var fe=ue(),le=ue;((...e)=>{const t=ce(...e),r=Object.assign(((...e)=>{const r=t(...e),n=(e,...t)=>r(y(e)?H(e):e,...t);return Object.assign(n,r),n}),{withTypes:()=>r})})(ie);var pe="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?a:a.apply(null,arguments)};function de(e,t){function r(...r){if(t){let n=t(...r);if(!n)throw new Error($e(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>function(e){return i(e)&&"type"in e&&"string"==typeof e.type}(t)&&t.type===e,r}var ye=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function he(e){return h(e)?Y(e,(()=>{})):e}function _e(e,t,r){if(e.has(t)){let n=e.get(t);return r.update&&(n=r.update(n,t,e),e.set(t,n)),n}if(!r.insert)throw new Error($e(10));const n=r.insert(t,e);return e.set(t,n),n}var we=()=>function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{};let i=new ye;return t&&("boolean"==typeof t?i.push(fe):i.push(le(t.extraArgument))),i},me=e=>t=>{setTimeout(t,e)},be="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:me(10),ge=e=>function(t){const{autoBatch:r=!0}=t??{};let n=new ye(e);return r&&n.push(((e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,i=!1,c=!1;const s=new Set,a="tick"===e.type?queueMicrotask:"raf"===e.type?be:"callback"===e.type?e.queueNotification:me(e.timeout),u=()=>{c=!1,i&&(i=!1,s.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>o&&e()));return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return o=!e?.meta?.RTK_autoBatch,i=!o,i&&(c||(c=!0,a(u))),n.dispatch(e)}finally{o=!0}}})})("object"==typeof r?r:void 0)),n},ve=!0;function Ee(e){const t={},r=[];let n;const o={addCase(e,r){const n="string"==typeof e?e:e.type;if(!n)throw new Error($e(28));if(n in t)throw new Error($e(29));return t[n]=r,o},addMatcher:(e,t)=>(r.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(n=e,o)};return e(o),[t,r,n]}var Oe=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t};function je(...e){return t=>e.some((e=>((e,t)=>{return(r=e)&&"function"==typeof r.match?e.match(t):e(t);var r})(e,t)))}var Se=["name","message","stack","code"],Ce=class{constructor(e,t){this.payload=e,this.meta=t}_type},Pe=class{constructor(e,t){this.payload=e,this.meta=t}_type},Re=e=>{if("object"==typeof e&&null!==e){const t={};for(const r of Se)"string"==typeof e[r]&&(t[r]=e[r]);return t}return{message:String(e)}};function Ae(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}e("b",(()=>{function e(e,t,r){const n=de(e+"/fulfilled",((e,t,r,n)=>({payload:e,meta:{...n||{},arg:r,requestId:t,requestStatus:"fulfilled"}}))),o=de(e+"/pending",((e,t,r)=>({payload:void 0,meta:{...r||{},arg:t,requestId:e,requestStatus:"pending"}}))),i=de(e+"/rejected",((e,t,n,o,i)=>({payload:o,error:(r&&r.serializeError||Re)(e||"Rejected"),meta:{...i||{},arg:n,requestId:t,rejectedWithValue:!!o,requestStatus:"rejected",aborted:"AbortError"===e?.name,condition:"ConditionError"===e?.name}})));return Object.assign((function(e){return(c,s,a)=>{const u=r?.idGenerator?r.idGenerator(e):Oe(),f=new AbortController;let l,p;function d(e){p=e,f.abort()}const y=async function(){let y;try{let i=r?.condition?.(e,{getState:s,extra:a});if(null!==(h=i)&&"object"==typeof h&&"function"==typeof h.then&&(i=await i),!1===i||f.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const _=new Promise(((e,t)=>{l=()=>{t({name:"AbortError",message:p||"Aborted"})},f.signal.addEventListener("abort",l)}));c(o(u,e,r?.getPendingMeta?.({requestId:u,arg:e},{getState:s,extra:a}))),y=await Promise.race([_,Promise.resolve(t(e,{dispatch:c,getState:s,extra:a,requestId:u,signal:f.signal,abort:d,rejectWithValue:(e,t)=>new Ce(e,t),fulfillWithValue:(e,t)=>new Pe(e,t)})).then((t=>{if(t instanceof Ce)throw t;return t instanceof Pe?n(t.payload,u,e,t.meta):n(t,u,e)}))])}catch(_){y=_ instanceof Ce?i(null,u,e,_.payload,_.meta):i(_,u,e)}finally{l&&f.signal.removeEventListener("abort",l)}var h;return r&&!r.dispatchConditionRejection&&i.match(y)&&y.meta.condition||c(y),y}();return Object.assign(y,{abort:d,requestId:u,arg:e,unwrap:()=>y.then(Ae)})}}),{pending:o,rejected:i,fulfilled:n,settled:je(i,n),typePrefix:e})}return e.withTypes=()=>e,e})());var Te=Symbol.for("rtk-slice-createasyncthunk");function ze(e,t){return`${e}/${t}`}function ke({creators:e}={}){const t=e?.asyncThunk?.[Te];return function(e){const{name:r,reducerPath:n=r}=e;if(!r)throw new Error($e(11));const o=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(o),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){const r="string"==typeof e?e:e.type;if(!r)throw new Error($e(12));if(r in c.sliceCaseReducersByType)throw new Error($e(13));return c.sliceCaseReducersByType[r]=t,s},addMatcher:(e,t)=>(c.sliceMatchers.push({matcher:e,reducer:t}),s),exposeAction:(e,t)=>(c.actionCreators[e]=t,s),exposeCaseReducer:(e,t)=>(c.sliceCaseReducersByName[e]=t,s)};function a(){const[t={},r=[],n]="function"==typeof e.extraReducers?Ee(e.extraReducers):[e.extraReducers],o={...t,...c.sliceCaseReducersByType};return function(e,t){let r,[n,o,i]=Ee(t);if("function"==typeof e)r=()=>he(e());else{const t=he(e);r=()=>t}function c(e=r(),t){let c=[n[t.type],...o.filter((({matcher:e})=>e(t))).map((({reducer:e})=>e))];return 0===c.filter((e=>!!e)).length&&(c=[i]),c.reduce(((e,r)=>{if(r){if(y(e)){const n=r(e,t);return void 0===n?e:n}if(h(e))return Y(e,(e=>r(e,t)));{const n=r(e,t);if(void 0===n){if(null===e)return e;throw new Error($e(9))}return n}}return e}),e)}return c.getInitialState=r,c}(e.initialState,(e=>{for(let t in o)e.addCase(t,o[t]);for(let t of c.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)}))}i.forEach((n=>{const i=o[n],c={reducerName:n,type:ze(r,n),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(i)?function({type:e,reducerName:t,createNotation:r},n,o){let i,c;if("reducer"in n){if(r&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(n))throw new Error($e(17));i=n.reducer,c=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,c?de(e,c):de(e))}(c,i,s):function({type:e,reducerName:t},r,n,o){if(!o)throw new Error($e(18));const{payloadCreator:i,fulfilled:c,pending:s,rejected:a,settled:u,options:f}=r,l=o(e,i,f);n.exposeAction(t,l),c&&n.addCase(l.fulfilled,c),s&&n.addCase(l.pending,s),a&&n.addCase(l.rejected,a),u&&n.addMatcher(l.settled,u),n.exposeCaseReducer(t,{fulfilled:c||Me,pending:s||Me,rejected:a||Me,settled:u||Me})}(c,i,s,t)}));const u=e=>e,f=new Map;let l;function p(e,t){return l||(l=a()),l(e,t)}function d(){return l||(l=a()),l.getInitialState()}function _(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=d()),n}function o(t=u){const n=_e(f,r,{insert:()=>new WeakMap});return _e(n,t,{insert:()=>{const n={};for(const[o,i]of Object.entries(e.selectors??{}))n[o]=xe(i,t,d,r);return n}})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}const w={name:r,reducer:p,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:d,..._(n),injectInto(e,{reducerPath:t,...r}={}){const o=t??n;return e.inject({reducerPath:o,reducer:p},r),{...w,..._(o,!0)}}};return w}}function xe(e,t,r,n){function o(o,...i){let c=t(o);return void 0===c&&n&&(c=r()),e(c,...i)}return o.unwrapped=e,o}function Me(){}e("c",ke());var Ne="listenerMiddleware",Ie=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=de(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error($e(21));return((e,t)=>{if("function"!=typeof e)throw new Error($e(32))})(i),{predicate:o,type:t,effect:i}},De=Object.assign((e=>{const{type:t,predicate:r,effect:n}=Ie(e);return{id:Oe(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error($e(22))}}}),{withTypes:()=>De}),Fe=Object.assign(de(`${Ne}/add`),{withTypes:()=>Fe});de(`${Ne}/removeAll`);var We=Object.assign(de(`${Ne}/remove`),{withTypes:()=>We});function $e(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}}}}));
