import{j as e,B as i,y as we,a0 as W,I as Fe,T as Te}from"./mui-CyG7s_nf.js";import{r as m}from"./reactVendor-BAhb8EbJ.js";import{u as Ce,d as Ie}from"./router-BbCjXwHs.js";import{u as _}from"./lang-DxTEvHWx.js";import{B as Le}from"./B3Card-DAkEI46z.js";import{a as H,a3 as G,i as V,u as L,ar as je,G as Be,C as Se,as as Ae,a2 as Pe,n as Re,o as ke,a5 as O,at as ve,au as He,av as De,aw as Me,a8 as Ee,a6 as qe,w as Ue,ag as We,ax as Oe,ay as ze,x as Je,az as z,aa as J,aA as Ne,aB as _e}from"./react-setup-BnN2zy6E.js";import{b as Ge}from"./b3Logger-CMQiGC3f.js";import"../index.CmwWzQnO.js";import{l as Ve}from"./b3Login-Ku3WS1Nz.js";import{b as N,a as $e}from"./login-VR4AWJpj.js";import{a as Qe,l as Ye}from"./config-7FRHSgsF.js";import{u as Ke}from"./form-Bvi8lP6x.js";import{B as Xe}from"./B3CustomForm-DFA72aXO.js";import{a as Ze,L as et}from"./styled-HeAq0rir.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./validatorRules-CLjc-WFZ.js";function v(l){const{html:c,sx:g}=l;return e.jsx(i,{sx:{...g},dangerouslySetInnerHTML:{__html:c}})}function tt(l){const{loginBtn:c,handleLoginSubmit:g,gotoForgotPassword:f}=l,[x]=H(),a=_(),{control:d,handleSubmit:j,getValues:h,formState:{errors:t},setValue:P}=Ke({mode:"onSubmit"}),B=T=>{g(T)},F=Qe(a,j(B));return e.jsx(i,{sx:{display:"flex",flexDirection:"column"},children:e.jsx(i,{sx:{width:"100%","& input":{bgcolor:"#F5F5F5",borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}},children:e.jsxs("form",{onSubmit:j(B),children:[e.jsx(Xe,{formFields:F,errors:t,control:d,getValues:h,setValue:P,customClass:"loginForm"}),e.jsxs(i,{sx:{display:"flex",justifyContent:"flex-start ",alignItems:"center",marginTop:"1.5rem",marginBottom:"1.5rem",flexDirection:x?"column":"row",gap:"1rem"},children:[e.jsx(G,{type:"submit",variant:"contained",sx:{borderRadius:"3.125rem",background:"transparent !important",border:"1px solid #FFF !important",color:"#FFFFFF",textAlign:"center",fontFamily:"Montserrat",fontSize:"1rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal",textTransform:"capitalize",letterSpacing:"0.02rem",padding:"0.7rem 1.75rem",boxShadow:"unset",":hover":{background:"#FFF !important",color:"#1B5F90",boxShadow:"unset"}},children:c}),e.jsx(i,{sx:{cursor:"pointer",textUnderlineOffset:"4px",color:"#FFF",textAlign:"center",fontFamily:"Montserrat",fontSize:"0.9375rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal"},onClick:()=>f(),children:a("login.loginText.forgotPasswordText")})]})]})})})}function ot(l){const{handleSubmit:c,widgetBodyText:g,createAccountButtonText:f}=l,x=we(),[a]=H();return e.jsxs(i,{sx:{padding:a?"16px":"20px",borderRadius:"4px",mt:a?"0":"0px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx(i,{component:"img",src:"https://cdn11.bigcommerce.com/s-optqkityfr/images/stencil/original/image-manager/logo-dermalink-sitio-2.png?t=1729085670",alt:"Dermalink Logo",sx:{width:"3.6rem",marginBottom:"1rem"}}),e.jsx(v,{sx:{minHeight:"250px","& .panel":{".panel-title":{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",fontWeight:400,fontSize:a?"1.375rem":"1.5rem",marginTop:"0px",color:"#EA617C"}},"& .panel-body":{".new-customer-fact-list":{lineHeight:"1.8rem"}}},html:g}),e.jsx(i,{sx:{marginTop:"5px"},children:e.jsx(G,{type:"submit",onClick:c,variant:"contained",sx:{ml:a?0:1,backgroundColor:x.palette.primary.main},children:f})})]})}const nt=()=>{const l=L(({b2bFeatures:d})=>d.masqueradeCompany.isAgenting),c=L(({company:d})=>d.customer.b2bId),g=L(({b2bFeatures:d})=>d.masqueradeCompany.id),f=V(),x=l&&typeof c=="number";return{endMasquerade:m.useCallback(async()=>{x&&(await Re(+g,c),f(ke()))},[c,x,g,f]),isMasquerade:x}},rt=l=>{if(l)switch(l){case"1":return"error";case"4":return"error";case"5":return"warning";default:return"success"}};function Pt(l){const{isMasquerade:c,endMasquerade:g}=nt(),{setOpenPage:f}=l,x=V(),a=L(je),d=L(({quoteInfo:n})=>n.quoteDetailToCheckoutUrl),[j,h]=m.useState(!0),[t]=H(),[P,B]=m.useState(!0),[F,T]=m.useState(""),[C,$]=m.useState({emailAddress:"",password:""}),y=Ce(),r=_(),[R,Q]=Ie(),{state:{isCheckout:Y,logo:K,registerEnabled:I}}=m.useContext(Be),{state:{loginPageButton:X,loginPageDisplay:Z,loginPageHtml:ee,portalStyle:{backgroundColor:te="FEF9F5"}}}=m.useContext(Se),{createAccountButtonText:oe,primaryButtonColor:ne,signInButtonText:re}=X,{displayStoreLogo:ie,pageTitle:se}=Z,{bottomHtmlRegionEnabled:ae,bottomHtmlRegionHtml:le,createAccountPanelHtml:ce,topHtmlRegionEnabled:ge,topHtmlRegionHtml:de}=ee,u={loginTitle:se||r("login.button.signIn"),loginBtn:re||r("login.button.signInUppercase"),createAccountButtonText:oe||r("login.button.createAccount"),btnColor:ne||"",widgetHeadText:ge?de:void 0,widgetBodyText:ce||Ae,widgetFooterText:ae?le:void 0,logo:ie?K:void 0};m.useEffect(()=>{(async()=>{var s;try{const b=R.get("loginFlag"),k=R.get("showTip")!=="false";if(B(k),b&&T(b),b==="7"&&O.error(r("login.loginText.invoiceErrorTip")),b==="3"&&a){const A=await ve();if((s=A.data.site.cart)!=null&&s.entityId){const E=He(A.data.site.cart.entityId);await De(E)}const p=await N();p.errors&&console.log("LOGOUT INVALIDO: ".concat(p.errors[0].message));const{result:o}=(await N()).data.logout;if(o!=="success")return;c&&await g(),window.sessionStorage.clear(),Me(),h(!1),window.location.reload();return}h(!1)}finally{h(!1)}})()},[r,g,a,c,R]);const D=(n,s="")=>{if(!n)return"";switch(n){case"1":return r("login.loginTipInfo.resetPassword",{email:s});case"2":return r("login.loginTipInfo.receivePassword");case"3":return r("login.loginTipInfo.loggedOutLogin");case"4":return r("login.loginTipInfo.accountincorrect");case"5":return r("login.loginTipInfo.accountPrelaunch");case"6":return r("login.loginText.deviceCrowdingLogIn");default:return""}},M=async n=>{const s=await _e(n);T(s?"1":"4")},me=async n=>{if(h(!0),$(n),Q(s=>(s.delete("loginFlag"),s)),Y)try{await Ye(n),window.location.reload()}catch(s){Ge.error(s),M(n.emailAddress)}else try{const s={email:n.emailAddress,password:n.password,storeHash:Ee,channelId:qe},{login:{result:{token:b,storefrontLoginToken:k,permissions:A},errors:p}}=await $e({loginData:s});if(x(Ue(b)),We.dispatch(Oe(A)),ze(k),p!=null&&p[0]||!b){if(p!=null&&p[0]){const{message:o}=p[0];if(o==="Operation cannot be performed as the storefront channel is not live"){T("5"),h(!1);return}}M(n.emailAddress)}else{const o=await Je(b);if(d){y(d);return}if((o==null?void 0:o.userType)===z.MULTIPLE_B2C&&(o==null?void 0:o.role)===J.SUPER_ADMIN){y("/dashboard");return}if(!Ve(y))return;const{getShoppingListPermission:q,getOrderPermission:U}=Ne();if((o==null?void 0:o.role)===J.JUNIOR_BUYER&&(o==null?void 0:o.companyRoleName)==="Junior Buyer")y(q?"/shoppingLists":"/accountSettings");else{let w=U?"/orders":"/shoppingLists";if(w=q||U?w:"/accountSettings",w=(o==null?void 0:o.userType)===z.B2C?"/orders":w,w==="/orders"){const be=window.location.origin,ye="".concat(be,"/todos");window.location.href=ye}else y(w)}}}catch(s){O.error(r("login.loginTipInfo.accountincorrect"))}finally{h(!1)}},ue=()=>{y("/register")},pe=()=>{y("/forgotpassword")},xe=I?"100%":"50%",fe=I?"calc(50% - 1.75rem)":"auto",he=m.useRef(null),S=m.useRef(null);return m.useEffect(()=>(S.current=setInterval(()=>{const n=document.getElementById("loginBox");n&&(n.click(),clearInterval(S.current))},500),()=>{S.current&&clearInterval(S.current)}),[]),e.jsx(Le,{setOpenPage:f,children:e.jsx(Ze,{paddings:t?"0":"20px 20px",children:e.jsx(Pe,{isSpinning:j,tip:r("global.tips.loading"),background:"transparent",children:e.jsx(i,{sx:{display:"flex",flexDirection:"column",width:"100%",minHeight:"400px",minWidth:"343px"},children:u&&e.jsxs(e.Fragment,{children:[d&&e.jsx(W,{severity:"error",variant:"outlined",children:r("login.loginText.quoteDetailToCheckoutUrl")}),u.logo&&e.jsx(i,{sx:{margin:"20px 0",minHeight:"150px"},children:e.jsx(et,{children:e.jsx(Fe,{sx:{maxWidth:t?"70%":"250px"},onClick:()=>{window.location.href="/"},children:e.jsx("img",{src:u.logo,alt:r("login.registerLogo"),loading:"lazy"})})})}),F&&P&&e.jsx(i,{sx:{padding:t?0:"0 5%",margin:"10px 0 0 0"},children:D(F,C==null?void 0:C.emailAddress)&&e.jsx(W,{severity:rt(F),variant:"outlined",children:D(F,(C==null?void 0:C.emailAddress)||"")})}),u.widgetHeadText&&e.jsx(v,{sx:{minHeight:"48px",width:I||t?"100%":"50%"},html:u.widgetHeadText}),e.jsx(i,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:e.jsx(i,{sx:{bgcolor:"#FFFFFF",borderRadius:"4px",margin:"20px 0",display:"flex",flexDirection:"column",justifyContent:"center",width:t?"100%":xe},children:e.jsxs(i,{sx:{mb:"20px",display:"flex",flexDirection:t?"column":"row",justifyContent:"center",alignItems:"center",padding:"0 15px",width:t?"auto":"100%",gap:t?"1.25rem":"1.75rem"},children:[e.jsxs(i,{id:"loginBox",ref:he,tabIndex:-1,sx:{width:t?"100%":fe,maxWidth:t?"unset":"35rem",pb:I?"":"36px",background:"linear-gradient(92deg, #1B5F90 16.56%, #0976C4 77.16%)",borderRadius:"0.625rem",display:"flex",justifyContent:"center",alignItems:"center",minHeight:t?"16rem":"100%",flexDirection:"column",padding:t?"1.25rem":"2.5rem"},children:[e.jsx(Te,{variant:"h2",sx:{width:"100%",margin:"2rem 0",display:"flex",justifyContent:"left",alignItems:"center",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:400,lineHeight:"normal",fontSize:t?"1.625rem":"2.5rem",textAlign:t?"center":"initial",mt:t?"1rem":"0",color:"#FFF"},children:r("login.loginText.signInHeader")}),e.jsx(tt,{loginBtn:u.loginBtn,gotoForgotPassword:pe,handleLoginSubmit:me,backgroundColor:te})]}),I&&e.jsx(i,{sx:{flex:"1",background:"#FFF",boxShadow:"2px 2px 10px 0px rgba(0, 0, 0, 0.25)",borderRadius:"0.625rem",display:"flex",justifyContent:"center",alignItems:"center",minHeight:t?"16rem":"28rem",padding:t?"1.25rem":"2.5rem",maxWidth:t?"unset":"35rem"},children:e.jsx(ot,{createAccountButtonText:u.createAccountButtonText,widgetBodyText:u.widgetBodyText,handleSubmit:ue})})]})})}),u.widgetFooterText&&e.jsx(v,{sx:{minHeight:"48px",width:I||t?"100%":"50%"},html:u.widgetFooterText})]})})})})})}export{Pt as default};
