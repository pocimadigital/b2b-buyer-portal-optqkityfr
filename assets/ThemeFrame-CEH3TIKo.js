import{j as u,a3 as L}from"./mui-CyG7s_nf.js";import{r as i,d as S}from"./reactVendor-BAhb8EbJ.js";import{c as j}from"./eCache-BQInSoPa.js";import{i as T,D as k,I as F}from"./react-setup-CGfEmvbO.js";import{C as b}from"./eReact-DeS39u1B.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"../index.BYdqPMNb.js";import"./lang-DxTEvHWx.js";import"./intl-CIPMD0ue.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";function I(t,n,c=!1){if(t){const o=t;if("srcdoc"in HTMLIFrameElement.prototype&&!c)o.srcdoc=n;else{const e=o.contentDocument;e==null||e.open("text/html","replace"),e==null||e.write(n),e==null||e.close()}}}const p=t=>{var n,c;(c=(n=t.current)==null?void 0:n.contentDocument)!=null&&c.addEventListener&&(t.current.contentDocument.addEventListener("keydown",()=>{document.dispatchEvent(new Event("keydown"))}),t.current.contentDocument.addEventListener("mousedown",()=>{document.dispatchEvent(new Event("mousedown"))}),t.current.contentDocument.addEventListener("touchstart",()=>{document.dispatchEvent(new Event("touchstart"))}),t.current.contentDocument.addEventListener("touchmove",()=>{document.dispatchEvent(new Event("touchmove"))}),t.current.contentDocument.addEventListener("click",()=>{document.dispatchEvent(new Event("click"))}))},P="<!DOCTYPE html><html><head></head><body></body></html>";function N(t){const n=T(),{isSetupComplete:c,emotionCache:o,iframeDocument:e,bodyRef:a,children:d}=t;return i.useEffect(()=>(e&&n(k(e)),()=>{e&&n(F())}),[e]),!c||!o||!e?null:((a==null?void 0:a.current)!==void 0&&(a.current=e.body),S.createPortal(u.jsxs(b,{value:o,children:[u.jsx(L,{}),d]}),e.body))}function Z(t){var f;const{title:n,className:c,fontUrl:o,customStyles:e,children:a,bodyRef:d}=t,r=i.useRef(null),[h,E]=i.useState(!1),[w,x]=i.useState(void 0);return i.useEffect(()=>{var C,y;const v=r.current;if(!v)return;I(v,P,!0);const s=(C=r.current)==null?void 0:C.contentDocument;if(!s)return;if(o){const m=s.createElement("link");m.rel="stylesheet",m.href=o,s.head.appendChild(m)}if(e){const m=s.createElement("style");m.appendChild(document.createTextNode(e)),s.head.appendChild(m)}const D=j({key:"css",container:s.head,prepend:!0});x(D),s.readyState==="complete"?p(r):(y=r.current)==null||y.addEventListener("load",()=>p(r)),E(!0);const l=r.current;return()=>{E(!1),l==null||l.removeEventListener("load",()=>{p(r)})}},[e,o]),u.jsx("iframe",{allowFullScreen:!0,className:h?c:void 0,title:n,ref:r,children:u.jsx(N,{isSetupComplete:h,emotionCache:w,iframeDocument:(f=r.current)==null?void 0:f.contentDocument,bodyRef:d,children:a})})}export{I as IFrameSetContent,Z as default};
