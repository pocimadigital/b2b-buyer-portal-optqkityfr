System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./router-legacy-CCJEjNy7.js","./lang-legacy-CyIWukAl.js","./B3Card-legacy-CyGoVHnR.js","./react-setup-legacy-BoEYl_s9.js","./b3Logger-legacy-C5y5ZQF8.js","../index-legacy.DWg148U-.js","./b3Login-legacy-BqThtJNy.js","./login-legacy-DlDf0aZJ.js","./config-legacy-DdqUMtDL.js","./form-legacy-CAo5v63e.js","./B3CustomForm-legacy-D3ercyEo.js","./styled-legacy-B0Nq4zJy.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./validatorRules-legacy-CseDu-Lw.js"],(function(e,t){"use strict";var n,o,i,r,a,l,s,c,g,d,u,m,x,p,f,h,y,j,b,w,F,T,I,C,S,B,v,H,A,k,R,L,D,P,E,q,M,O,U,W,z,V,_,N,G,J,$,Y;return{setters:[e=>{n=e.j,o=e.B,i=e.y,r=e.a0,a=e.I,l=e.T},e=>{s=e.r},e=>{c=e.u,g=e.d},e=>{d=e.u},e=>{u=e.B},e=>{m=e.a,x=e.a3,p=e.i,f=e.u,h=e.ar,y=e.G,j=e.C,b=e.as,w=e.a2,F=e.n,T=e.o,I=e.a5,C=e.at,S=e.au,B=e.av,v=e.aw,H=e.a8,A=e.a6,k=e.w,R=e.ag,L=e.ax,D=e.ay,P=e.x,E=e.az,q=e.aa,M=e.aA,O=e.aB},e=>{U=e.b},null,e=>{W=e.l},e=>{z=e.b,V=e.a},e=>{_=e.a,N=e.l},e=>{G=e.u},e=>{J=e.B},e=>{$=e.a,Y=e.L},null,null,null,null,null,null,null,null,null,null,null],execute:function(){function t(e){const{html:t,sx:i}=e;return n.jsx(o,{sx:{...i},dangerouslySetInnerHTML:{__html:t}})}function Z(e){const{loginBtn:t,handleLoginSubmit:i,gotoForgotPassword:r}=e,[a]=m(),l=d(),{control:s,handleSubmit:c,getValues:g,formState:{errors:u},setValue:p}=G({mode:"onSubmit"}),f=e=>{i(e)},h=_(l,c(f));return n.jsx(o,{sx:{display:"flex",flexDirection:"column"},children:n.jsx(o,{sx:{width:"100%","& input":{bgcolor:"#F5F5F5",borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}},children:n.jsxs("form",{onSubmit:c(f),children:[n.jsx(J,{formFields:h,errors:u,control:s,getValues:g,setValue:p,customClass:"loginForm"}),n.jsxs(o,{sx:{display:"flex",justifyContent:"flex-start ",alignItems:"center",marginTop:"1.5rem",marginBottom:"1.5rem",flexDirection:a?"column":"row",gap:"1rem"},children:[n.jsx(x,{type:"submit",variant:"contained",sx:{borderRadius:"3.125rem",background:"transparent !important",border:"1px solid #FFF !important",color:"#FFFFFF",textAlign:"center",fontFamily:"Montserrat",fontSize:"1rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal",textTransform:"capitalize",letterSpacing:"0.02rem",padding:"0.7rem 1.75rem",boxShadow:"unset",":hover":{background:"#FFF !important",color:"#232A59",boxShadow:"unset"}},children:t}),n.jsx(o,{sx:{cursor:"pointer",textUnderlineOffset:"4px",color:"#FFF",textAlign:"center",fontFamily:"Montserrat",fontSize:"0.9375rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal"},onClick:()=>r(),children:l("login.loginText.forgotPasswordText")})]})]})})})}function K(e){const{handleSubmit:r,widgetBodyText:a,createAccountButtonText:l}=e,s=i(),[c]=m();return n.jsxs(o,{sx:{padding:c?"16px":"20px",borderRadius:"4px",mt:c?"0":"0px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsx(o,{component:"img",src:"https://cdn11.bigcommerce.com/s-optqkityfr/images/stencil/original/image-manager/faviicon64.png?t=1739883777",alt:"Dermalink Logo",sx:{width:"3.6rem",marginBottom:"1rem"}}),n.jsx(t,{sx:{minHeight:"250px","& .panel":{".panel-title":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",fontWeight:400,fontSize:c?"1.375rem":"1.5rem",marginTop:"0px",color:"#4E3F92"}},"& .panel-body":{".new-customer-fact-list":{lineHeight:"1.8rem"}}},html:a}),n.jsx(o,{sx:{marginTop:"5px"},children:n.jsx(x,{type:"submit",onClick:r,variant:"contained",sx:{ml:c?0:1,backgroundColor:s.palette.primary.main},children:l})})]})}e("default",(function(e){const{isMasquerade:i,endMasquerade:x}=Q(),{setOpenPage:F}=e,T=p(),_=f(h),G=f((({quoteInfo:e})=>e.quoteDetailToCheckoutUrl)),[J,ee]=s.useState(!0),[te]=m(),[ne,oe]=s.useState(!0),[ie,re]=s.useState(""),[ae,le]=s.useState({emailAddress:"",password:""}),se=c(),ce=d(),[ge,de]=g(),{state:{isCheckout:ue,logo:me,registerEnabled:xe}}=s.useContext(y),{state:{loginPageButton:pe,loginPageDisplay:fe,loginPageHtml:he,portalStyle:{backgroundColor:ye="FEF9F5"}}}=s.useContext(j),{createAccountButtonText:je,primaryButtonColor:be,signInButtonText:we}=pe,{displayStoreLogo:Fe,pageTitle:Te}=fe,{bottomHtmlRegionEnabled:Ie,bottomHtmlRegionHtml:Ce,createAccountPanelHtml:Se,topHtmlRegionEnabled:Be,topHtmlRegionHtml:ve}=he,He={loginTitle:Te||ce("login.button.signIn"),loginBtn:we||ce("login.button.signInUppercase"),createAccountButtonText:je||ce("login.button.createAccount"),btnColor:be||"",widgetHeadText:Be?ve:void 0,widgetBodyText:Se||b,widgetFooterText:Ie?Ce:void 0,logo:Fe?me:void 0};s.useEffect((()=>{(async()=>{try{const e=ge.get("loginFlag"),t="false"!==ge.get("showTip");if(oe(t),e&&re(e),"7"===e&&I.error(ce("login.loginText.invoiceErrorTip")),"3"===e&&_){const e=await C();if(e.data.site.cart?.entityId){const t=S(e.data.site.cart.entityId);await B(t)}const t=await z();t.errors&&console.log(`LOGOUT INVALIDO: ${t.errors[0].message}`);const{result:n}=(await z()).data.logout;if("success"!==n)return;return i&&await x(),window.sessionStorage.clear(),v(),ee(!1),void window.location.reload()}ee(!1)}finally{ee(!1)}})()}),[ce,x,_,i,ge]);const Ae=(e,t="")=>{if(!e)return"";switch(e){case"1":return ce("login.loginTipInfo.resetPassword",{email:t});case"2":return ce("login.loginTipInfo.receivePassword");case"3":return ce("login.loginTipInfo.loggedOutLogin");case"4":return ce("login.loginTipInfo.accountincorrect");case"5":return ce("login.loginTipInfo.accountPrelaunch");case"6":return ce("login.loginText.deviceCrowdingLogIn");default:return""}},ke=async e=>{const t=await O(e);re(t?"1":"4")},Re=xe?"100%":"50%",Le=xe?"calc(50% - 1.75rem)":"auto",De=s.useRef(null),Pe=s.useRef(null);return s.useEffect((()=>(Pe.current=setInterval((()=>{const e=document.getElementById("loginBox");e&&(e.click(),clearInterval(Pe.current))}),500),()=>{Pe.current&&clearInterval(Pe.current)})),[]),n.jsx(u,{setOpenPage:F,children:n.jsx($,{paddings:te?"0":"20px 20px",children:n.jsx(w,{isSpinning:J,tip:ce("global.tips.loading"),background:"transparent",children:n.jsx(o,{sx:{display:"flex",flexDirection:"column",width:"100%",minHeight:"400px",minWidth:"343px"},children:He&&n.jsxs(n.Fragment,{children:[G&&n.jsx(r,{severity:"error",variant:"outlined",children:ce("login.loginText.quoteDetailToCheckoutUrl")}),He.logo&&n.jsx(o,{sx:{margin:"20px 0",minHeight:"150px"},children:n.jsx(Y,{children:n.jsx(a,{sx:{maxWidth:te?"70%":"250px"},onClick:()=>{window.location.href="/"},children:n.jsx("img",{src:He.logo,alt:ce("login.registerLogo"),loading:"lazy"})})})}),ie&&ne&&n.jsx(o,{sx:{padding:te?0:"0 5%",margin:"10px 0 0 0"},children:Ae(ie,ae?.emailAddress)&&n.jsx(r,{severity:X(ie),variant:"outlined",children:Ae(ie,ae?.emailAddress||"")})}),He.widgetHeadText&&n.jsx(t,{sx:{minHeight:"48px",width:xe||te?"100%":"50%"},html:He.widgetHeadText}),n.jsx(o,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:n.jsx(o,{sx:{bgcolor:"#FFFFFF",borderRadius:"4px",margin:"20px 0",display:"flex",flexDirection:"column",justifyContent:"center",width:te?"100%":Re},children:n.jsxs(o,{sx:{mb:"20px",display:"flex",flexDirection:te?"column":"row",justifyContent:"center",alignItems:"center",padding:"0 15px",width:te?"auto":"100%",gap:te?"1.25rem":"1.75rem"},children:[n.jsxs(o,{id:"loginBox",ref:De,tabIndex:-1,sx:{width:te?"100%":Le,maxWidth:te?"unset":"35rem",pb:xe?"":"36px",background:"linear-gradient(92deg, #232A59 16.56%, #3F4CA9 77.16%)",borderRadius:"0.625rem",display:"flex",justifyContent:"center",alignItems:"center",minHeight:te?"16rem":"100%",flexDirection:"column",padding:te?"1.25rem":"2.5rem"},children:[n.jsx(l,{variant:"h2",sx:{width:"100%",margin:"2rem 0",display:"flex",justifyContent:"left",alignItems:"center",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:400,lineHeight:"normal",fontSize:te?"1.625rem":"2.5rem",textAlign:te?"center":"initial",mt:te?"1rem":"0",color:"#FFF"},children:ce("login.loginText.signInHeader")}),n.jsx(Z,{loginBtn:He.loginBtn,gotoForgotPassword:()=>{se("/forgotpassword")},handleLoginSubmit:async e=>{if(ee(!0),le(e),de((e=>(e.delete("loginFlag"),e))),ue)try{await N(e),window.location.reload()}catch(t){U.error(t),ke(e.emailAddress)}else try{const t={email:e.emailAddress,password:e.password,storeHash:H,channelId:A},{login:{result:{token:n,storefrontLoginToken:o,permissions:i},errors:r}}=await V({loginData:t});if(T(k(n)),R.dispatch(L(i)),D(o),r?.[0]||!n){if(r?.[0]){const{message:e}=r[0];if("Operation cannot be performed as the storefront channel is not live"===e)return re("5"),void ee(!1)}ke(e.emailAddress)}else{const e=await P(n);if(G)return void se(G);if(e?.userType===E.MULTIPLE_B2C&&e?.role===q.SUPER_ADMIN)return void se("/dashboard");if(!W(se))return;const{getShoppingListPermission:t,getOrderPermission:o}=M();if(e?.role===q.JUNIOR_BUYER&&"Junior Buyer"===e?.companyRoleName)se(t?"/shoppingLists":"/accountSettings");else{let n=o?"/orders":"/shoppingLists";if(n=t||o?n:"/accountSettings",n=e?.userType===E.B2C?"/orders":n,"/orders"===n){const e=`${window.location.origin}/todos`;window.location.href=e}else se(n)}}}catch(t){I.error(ce("login.loginTipInfo.accountincorrect"))}finally{ee(!1)}},backgroundColor:ye})]}),xe&&n.jsx(o,{sx:{flex:"1",background:"#FFF",boxShadow:"2px 2px 10px 0px rgba(0, 0, 0, 0.25)",borderRadius:"0.625rem",display:"flex",justifyContent:"center",alignItems:"center",minHeight:te?"16rem":"28rem",padding:te?"1.25rem":"2.5rem",maxWidth:te?"unset":"35rem"},children:n.jsx(K,{createAccountButtonText:He.createAccountButtonText,widgetBodyText:He.widgetBodyText,handleSubmit:()=>{se("/register")}})})]})})}),He.widgetFooterText&&n.jsx(t,{sx:{minHeight:"48px",width:xe||te?"100%":"50%"},html:He.widgetFooterText})]})})})})})}));const Q=()=>{const e=f((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),t=f((({company:e})=>e.customer.b2bId)),n=f((({b2bFeatures:e})=>e.masqueradeCompany.id)),o=p(),i=e&&"number"==typeof t;return{endMasquerade:s.useCallback((async()=>{i&&(await F(+n,t),o(T()))}),[t,i,n,o]),isMasquerade:i}},X=e=>{if(e)switch(e){case"1":case"4":return"error";case"5":return"warning";default:return"success"}}}}}));
