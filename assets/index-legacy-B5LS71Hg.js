System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./form-legacy-CAo5v63e.js","./lang-legacy-DRIvecGC.js","./B3Card-legacy-BfBAJ0RA.js","./B3CustomForm-legacy-Bk1hH9jz.js","./react-setup-legacy-CiLdZFVf.js","../index-legacy.D-U_SIL6.js","./b3Logger-legacy-C5y5ZQF8.js","./recaptcha-legacy-YpxBOHa3.js","./config-legacy-BDA8lWKp.js","./styled-legacy-B0Nq4zJy.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./lodashEs-legacy-Da1qF4L1.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./validatorRules-legacy-BrvWH46A.js"],(function(e,s){"use strict";var t,a,l,n,r,o,i,c,g,x,d,u,y,j,m,p,f,h,S,b,w,F,C;return{setters:[e=>{t=e.j,a=e.B,l=e.I,n=e.T},e=>{r=e.r},e=>{o=e.u},e=>{i=e.u},e=>{c=e.B},e=>{g=e.B},e=>{x=e.G,d=e.C,u=e.a,y=e.a2,j=e.a3},null,e=>{m=e.b},e=>{p=e.C,f=e.g,h=e.r},e=>{S=e.g,b=e.s},e=>{w=e.L,F=e.B},e=>{C=e.u},null,null,null,null,null,null,null,null,null,null,null],execute:function(){function s({setOpenPage:e,isEnabledOnStorefront:s,storefrontSiteKey:x,logo:d}){const[f]=u(),[P,v]=r.useState(!1),B=i(),E=S(B),[O,z]=r.useState(!1),[K,L]=r.useState(""),{control:V,handleSubmit:T,getValues:W,formState:{errors:k},setValue:D,watch:I}=o({mode:"onSubmit"}),R=C(),A=I("emailAddress");return r.useEffect((()=>{!K&&s||z(!1)}),[K,s]),t.jsx(c,{setOpenPage:e,children:t.jsxs(a,{sx:{bgcolor:"#FFFFFF",borderRadius:"4px",display:"flex",flexDirection:"column",mr:"auto",ml:"auto",maxWidth:"42rem"},children:[t.jsx(a,{sx:{mt:"20px"},children:d&&t.jsx(w,{children:t.jsx(l,{sx:{maxWidth:f?"175px":"250px"},onClick:()=>{window.location.href="/"},children:t.jsx("img",{src:d,alt:B("global.tips.registerLogo"),loading:"lazy"})})})}),t.jsxs(a,{sx:{margin:"20px 0 0 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[t.jsx(n,{variant:"h5",sx:{margin:"16px 0"},children:B("forgotpassword.resetPassword")}),t.jsx(n,{variant:"body1",sx:{margin:"0 16px 16px 16px"},children:B("forgotpassword.requestEmail")}),t.jsx(g,{formFields:E,errors:k,control:V,getValues:W,setValue:D,sx:{margin:"0 16px",maxWidth:f?"311px":"505px"}}),s&&O?t.jsx(n,{variant:"body1",sx:{display:"flex",alignSelf:"flex-start",marginLeft:"18px",marginTop:"2px",fontSize:"13px"},children:B("login.loginText.missingCaptcha")}):"",s?t.jsx(a,{sx:{marginTop:"20px"},children:t.jsx(p,{siteKey:x,size:"normal",email:A,handleGetKey:L})}):"",t.jsx(y,{isSpinning:P,size:20,isFlex:!1,children:t.jsx(F,{children:t.jsx(j,{type:"submit",size:"medium",onClick:T((async e=>{const{emailAddress:t}=e;if(!s||K)try{if(v(!0),s&&K)try{await h(K,A),R("/login?loginFlag=2"),v(!1)}catch(a){m.error(a)}s||(await b(t),v(!1),R("/login?loginFlag=2"))}catch(a){m.error(a)}else z(!0)})),variant:"contained",sx:{width:"auto"},children:B("forgotpassword.resetPasswordBtn")})})})]})]})})}e({ForgotPassword:s,default:function({setOpenPage:e}){const{logo:a}=r.useContext(x).state,{loginPageDisplay:l}=r.useContext(d).state,[n,o]=r.useState(!1),[i,c]=r.useState("");return r.useEffect((()=>{(async()=>{try{const e=await f();e&&(o(e.isEnabledOnStorefront),c(e.siteKey))}catch(e){m.error(e)}})()}),[]),t.jsx(s,{setOpenPage:e,logo:l.displayStoreLogo?a:void 0,isEnabledOnStorefront:n,storefrontSiteKey:i})}})}}}));
