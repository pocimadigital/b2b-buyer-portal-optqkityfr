System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-Cfb8SlNa.js","../index-legacy.CVtY65ui.js","./payment-legacy-Bl1lt6En.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js","./b3checkout-legacy-CCaJGzFd.js"],(function(e,l){"use strict";var n,t,a,c,s,i,r,o,u,y,g,j;return{setters:[e=>{n=e.j,t=e.B},e=>{a=e.r},e=>{c=e.u},e=>{s=e.u,i=e.ap,r=e._,o=e.a5},null,e=>{u=e.f,y=e.g},e=>{g=e.c,j=e.u},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const e=s((({global:e})=>e.storeInfo.platform)),l=s((({company:e})=>e.tokens.B2BToken)),[d,f]=a.useState(!1),[h,m]=a.useState(!1),p=g(),x=j(),k=c();return a.useEffect((()=>{(async()=>{if(f(!0),!l)return m(!0),void f(!1);if(p?.id||o.error(k("payment.errorInvoiceCantBeBlank")),p?.id)try{const{invoice:{openBalance:{code:l="",value:n=""}}}=await u(+p.id);l&&n||o.error(k("payment.errorOpenBalanceIsIncorrect"));const t={lineItems:[{invoiceId:+p.id,amount:n}],currency:l};await y(t,e,!0)}catch(n){o.error(n?.message||k("payment.invoiceDoesntExist"))}finally{f(!1)}})()}),[e,p.id]),n.jsxs(t,{children:[d&&n.jsx(i,{backColor:"#FFFFFF"}),n.jsx(r,{isOpen:h,fullWidth:!0,title:"",rightSizeBtn:"ok",showLeftBtn:!1,handRightClick:()=>{x("/login")},children:n.jsx(t,{sx:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:n.jsxs(t,{children:[n.jsx(t,{sx:{mb:"10px"},children:k("payment.firstLoginToPay")}),n.jsx(t,{children:k("payment.clickToLandingPage")})]})})})]})}))}}}));
