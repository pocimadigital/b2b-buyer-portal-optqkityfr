import"./intl-CIPMD0ue.js";import{r as u,R as v}from"./reactVendor-BAhb8EbJ.js";import{m as E,c as R}from"./eCache-BQInSoPa.js";var A=!0;function D(r,e,t){var n="";return t.split(" ").forEach(function(o){r[o]!==void 0?e.push(r[o]+";"):n+=o+" "}),n}var O=function(e,t,n){var o=e.key+"-"+t.name;(n===!1||A===!1)&&e.registered[o]===void 0&&(e.registered[o]=t.styles)},I=function(e,t,n){O(e,t,n);var o=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var a=t;do e.insert(t===a?"."+o:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function M(r){for(var e=0,t,n=0,o=r.length;o>=4;++n,o-=4)t=r.charCodeAt(n)&255|(r.charCodeAt(++n)&255)<<8|(r.charCodeAt(++n)&255)<<16|(r.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(r.charCodeAt(n+2)&255)<<16;case 2:e^=(r.charCodeAt(n+1)&255)<<8;case 1:e^=r.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var k={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},G=/[A-Z]|^ms/g,F=/_EMO_([^_]+?)_([^]*?)_EMO_/g,b=function(e){return e.charCodeAt(1)===45},h=function(e){return e!=null&&typeof e!="boolean"},m=E(function(r){return b(r)?r:r.replace(G,"-$&").toLowerCase()}),y=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(F,function(n,o,a){return l={name:o,styles:a,next:l},o})}return k[e]!==1&&!b(e)&&typeof t=="number"&&t!==0?t+"px":t};function c(r,e,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return l={name:t.name,styles:t.styles,next:l},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)l={name:n.name,styles:n.styles,next:l},n=n.next;var o=t.styles+";";return o}return N(r,e,t)}case"function":{if(r!==void 0){var a=l,s=t(r);return l=a,c(r,e,s)}break}}if(e==null)return t;var f=e[t];return f!==void 0?f:t}function N(r,e,t){var n="";if(Array.isArray(t))for(var o=0;o<t.length;o++)n+=c(r,e,t[o])+";";else for(var a in t){var s=t[a];if(typeof s!="object")e!=null&&e[s]!==void 0?n+=a+"{"+e[s]+"}":h(s)&&(n+=m(a)+":"+y(a,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var f=0;f<s.length;f++)h(s[f])&&(n+=m(a)+":"+y(a,s[f])+";");else{var i=c(r,e,s);switch(a){case"animation":case"animationName":{n+=m(a)+":"+i+";";break}default:n+=a+"{"+i+"}"}}}return n}var x=/label:\s*([^\s;\n{]+)\s*(;|$)/g,l,g=function(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var o=!0,a="";l=void 0;var s=e[0];s==null||s.raw===void 0?(o=!1,a+=c(n,t,s)):a+=s[0];for(var f=1;f<e.length;f++)a+=c(n,t,e[f]),o&&(a+=s[f]);x.lastIndex=0;for(var i="",d;(d=x.exec(a))!==null;)i+="-"+d[1];var p=M(a)+i;return{name:p,styles:a,next:l}},L=function(e){return e()},w=v.useInsertionEffect?v.useInsertionEffect:!1,H=w||L,C=w||u.useLayoutEffect,S=u.createContext(typeof HTMLElement<"u"?R({key:"css"}):null),$=S.Provider,W=function(e){return u.forwardRef(function(t,n){var o=u.useContext(S);return e(t,o,n)})},T=u.createContext({}),q=W(function(r,e){var t=r.styles,n=g([t],void 0,u.useContext(T)),o=u.useRef();return C(function(){var a=e.key+"-global",s=new e.sheet.constructor({key:a,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),f=!1,i=document.querySelector('style[data-emotion="'+a+" "+n.name+'"]');return e.sheet.tags.length&&(s.before=e.sheet.tags[0]),i!==null&&(f=!0,i.setAttribute("data-emotion",a),s.hydrate([i])),o.current=[s,f],function(){s.flush()}},[e]),C(function(){var a=o.current,s=a[0],f=a[1];if(f){a[1]=!1;return}if(n.next!==void 0&&I(e,n.next,!0),s.tags.length){var i=s.tags[s.tags.length-1].nextElementSibling;s.before=i,s.flush()}e.insert("",n,s,!1)},[e,n.name]),null});function P(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return g(e)}var B=function(){var e=P.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};export{$ as C,q as G,T,P as c,D as g,I as i,B as k,O as r,g as s,H as u,W as w};