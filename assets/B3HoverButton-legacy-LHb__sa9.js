System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./react-setup-legacy-BoEYl_s9.js","../index-legacy.DWg148U-.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./lang-legacy-CyIWukAl.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,l){"use strict";var n,t,a,o,c,s,u,i,r,d,g,j,y,h,x,f,p,m;return{setters:[e=>{n=e.j,t=e.r,a=e.B,o=e.e},e=>{c=e.r},e=>{s=e.u,u=e.C,i=e.a,r=e.b,d=e.s,g=e.c,j=e.g,y=e.d,h=e.e,x=e.f,f=e.h,p=e.F,m=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(e){const{isOpen:l,setOpenPage:b,productQuoteEnabled:C}=e,[k,v]=c.useState(!1),w=s((({quoteInfo:e})=>e.draftQuoteList.length));c.useEffect((()=>{v(!!w)}),[l,w]);const{href:z}=window.location,{state:{floatingAction:O}}=c.useContext(u),[q]=i(),{text:B="",color:E="#3385d6",customCss:I="",location:P="bottomRight",horizontalPadding:S="",verticalPadding:D="",enabled:F=!1}=O,L=r(m,B,p),Q=d(I),{cssValue:R,mediaBlocks:V}=Q,A=g(V),T={backgroundColor:E,padding:"6px 16px",...j(R)},U=q?{}:y(S,D,P);return z.includes(h)?null:n.jsx(t,{sx:{zIndex:"99999999993",width:"auto",...U},anchorOrigin:x(P)||{vertical:"bottom",horizontal:"right"},open:!0,children:n.jsx(a,{sx:{display:"flex",flexDirection:"column",width:"auto"},children:F&&k&&!l&&C&&!z.includes("/cart")&&n.jsx(o,{sx:{height:"42px",":hover":{backgroundColor:f(E,.2)},...T,...A},onClick:()=>{b({isOpen:!0,openUrl:"/quoteDraft",params:{quoteBtn:"open"}})},variant:"contained",children:L})})})}))}}}));
