System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./eCache-legacy-BoIqTPuc.js","./react-setup-legacy-DZzlZWvn.js","./eReact-legacy-BRtOBtIF.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","../index-legacy.Oph0CwYp.js","./lang-legacy-CyIWukAl.js","./intl-legacy-DG3cM9-L.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,t){"use strict";var n,c,o,l,r,s,u,a,d;return{setters:[e=>{n=e.j,c=e.a3},e=>{o=e.r,l=e.d},e=>{r=e.c},e=>{s=e.i,u=e.D,a=e.I},e=>{d=e.C},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){function t(e,t,n=!1){if(e){const c=e;if("srcdoc"in HTMLIFrameElement.prototype&&!n)c.srcdoc=t;else{const e=c.contentDocument;e?.open("text/html","replace"),e?.write(t),e?.close()}}}e({IFrameSetContent:t,default:function(e){const{title:c,className:l,fontUrl:s,customStyles:u,children:a,bodyRef:d}=e,h=o.useRef(null),[f,v]=o.useState(!1),[E,p]=o.useState(void 0);return o.useEffect((()=>{const e=h.current;if(!e)return;t(e,m,!0);const n=h.current?.contentDocument;if(!n)return;if(s){const e=n.createElement("link");e.rel="stylesheet",e.href=s,n.head.appendChild(e)}if(u){const e=n.createElement("style");e.appendChild(document.createTextNode(u)),n.head.appendChild(e)}const c=r({key:"css",container:n.head,prepend:!0});p(c),"complete"===n.readyState?i(h):h.current?.addEventListener("load",(()=>i(h))),v(!0);const o=h.current;return()=>{v(!1),o?.removeEventListener("load",(()=>{i(h)}))}}),[u,s]),n.jsx("iframe",{allowFullScreen:!0,className:f?l:void 0,title:c,ref:h,children:n.jsx(y,{isSetupComplete:f,emotionCache:E,iframeDocument:h.current?.contentDocument,bodyRef:d,children:a})})}});const i=e=>{e.current?.contentDocument?.addEventListener&&(e.current.contentDocument.addEventListener("keydown",(()=>{document.dispatchEvent(new Event("keydown"))})),e.current.contentDocument.addEventListener("mousedown",(()=>{document.dispatchEvent(new Event("mousedown"))})),e.current.contentDocument.addEventListener("touchstart",(()=>{document.dispatchEvent(new Event("touchstart"))})),e.current.contentDocument.addEventListener("touchmove",(()=>{document.dispatchEvent(new Event("touchmove"))})),e.current.contentDocument.addEventListener("click",(()=>{document.dispatchEvent(new Event("click"))})))},m="<!DOCTYPE html><html><head></head><body></body></html>";function y(e){const t=s(),{isSetupComplete:r,emotionCache:i,iframeDocument:m,bodyRef:y,children:h}=e;return o.useEffect((()=>(m&&t(u(m)),()=>{m&&t(a())})),[m]),r&&i&&m?(void 0!==y?.current&&(y.current=m.body),l.createPortal(n.jsxs(d,{value:i,children:[n.jsx(c,{}),h]}),m.body)):null}}}}));
