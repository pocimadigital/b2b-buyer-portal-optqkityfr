System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./react-setup-legacy-CiLdZFVf.js","./B3Tip-legacy-BapF1oKo.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","../index-legacy.D-U_SIL6.js","./lang-legacy-DRIvecGC.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,l){"use strict";var s,t,a,n,c;return{setters:[e=>{s=e.j},e=>{t=e.r,a=e.d},e=>{n=e.V},e=>{c=e.default},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{state:{tipMessage:e},dispatch:l}=t.useContext(n);t.useEffect((()=>{window.tipDispatch=l}),[]);const{msgs:u=[],autoHideDuration:i=5e3,vertical:o="top",horizontal:g="right"}=e;return s.jsx(c,{msgs:u,handleAllClose:(s,t)=>{"clickaway"!==t&&a.flushSync((()=>{if(u.length){const t=u.filter((e=>e.id!==s));l({type:"common",payload:{tipMessage:{...e,msgs:t}}})}}))},autoHideDuration:i,handleItemClose:s=>{((s=[])=>{l({type:"common",payload:{tipMessage:{...e,msgs:s}}})})(u.filter((e=>e.id!==s)))},vertical:o,horizontal:g})}))}}}));
