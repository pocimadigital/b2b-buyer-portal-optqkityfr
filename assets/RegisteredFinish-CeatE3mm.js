import{B as d,a7 as p,a8 as v,a3 as x,bq as S,C as R,a as k,k as w,N as T}from"./react-setup-DQCmcDDd.js";import"../index.s9J4ziE2.js";import{j as e,B as l,a0 as I}from"./mui-CyG7s_nf.js";import{r as F}from"./reactVendor-BAhb8EbJ.js";import{u as B}from"./lang-DxTEvHWx.js";import{s as C}from"./config-D7c-0dGC.js";import{n as o}from"./eStyled-B3rIBjaz.js";const H=t=>d.post("/api/v2/bc/customers",p.B2BRest,t),O=t=>d.post("/api/v2/bc/customers/subscribers",p.B2BRest,t),U=t=>d.post("/api/v2/extra-fields/company/validate",p.B2BRest,{...t,storeHash:v}),N=t=>d.post("/api/v2/extra-fields/user/validate",p.B2BRest,{...t,storeHash:v});function L(t){const{activeStep:r,handleBack:c,handleNext:m}=t,n=B();return e.jsx(l,{children:r===C.length?e.jsx(l,{sx:{display:"flex",flexDirection:"row-reverse",pt:2,justifyContent:"center",marginBottom:"3rem"},children:e.jsx(x,{variant:"contained",onClick:()=>window.location.href="/",children:n("global.button.finish")})}):e.jsxs(l,{sx:{display:"flex",flexDirection:"row-reverse",pt:2,justifyContent:"center",marginBottom:"3rem"},children:[e.jsx(x,{variant:"contained",onClick:m,sx:{backgroundColor:"#232A59",borderRadius:"3.125rem",border:"1px solid #232A59",textTransform:"capitalize",color:"#FFF",textAlign:"center",fontFamily:"Montserrat",fontSize:"1rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal",letterSpacing:"0.02rem",width:"10.3125rem",height:"2.75rem","&:hover":{backgroundColor:"#FFFFFF",color:"#232A59",border:"1px solid #232A59"}},children:r===C.length-1?n("global.button.submit"):n("global.button.next")}),r!==0&&e.jsx(x,{variant:"contained",onClick:c,sx:{backgroundColor:"#FFFFFF",border:"1px solid #232A59",borderRadius:"3.125rem",textTransform:"capitalize",color:"#232A59",textAlign:"center",fontFamily:"Montserrat",fontSize:"1rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal",letterSpacing:"0.02rem",width:"10.3125rem",height:"2.75rem",mr:1,"&:hover":{backgroundColor:"#232A59",color:"#FFFFFF",borderColor:"#232A59"}},children:n("global.button.back")})]})})}const g=o("p")(()=>({margin:"2rem auto"})),G=o("h3")(()=>({margin:"1rem 0",display:"flex",justifyContent:"center",fontSize:"34px",fontWeight:"400"})),J=o("h4")(()=>({marginBottom:"20px"})),K=o("div")({display:"flex",flexDirection:"row",alignItems:"center"});o("div")(()=>({cursor:"pointer",color:"#1976d2",borderBottom:"1px solid #1976d2"}));const Q=o("div")(t=>{const{isMobile:r=!1}=t;return r?{}:{padding:"20px 40px"}}),V=o("div")({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"});function X(t){const{activeStep:r,handleFinish:c,isBCToB2B:m=!1}=t,{state:n}=F.useContext(S),s=B(),{state:{portalStyle:{backgroundColor:y="#FEF9F5"}}}=F.useContext(R),[a]=k(),u=w(y),{accountType:b,submitSuccess:j,isAutoApproval:h,storeName:i}=n,f=T.get("blockPendingAccountOrderCreation")&&!h,A=()=>{if(b==="1")return h?e.jsx(g,{children:s("global.registerFinish.autoApproved.tip",{storeName:i!=null?i:""})}):e.jsxs(e.Fragment,{children:[f&&e.jsx(I,{severity:"warning",variant:"outlined",sx:{marginLeft:a?"0.5rem":"2rem",marginRight:a?"0.5rem":"2rem",borderRadius:"4px",padding:"6px 16px",maxWidth:"820px","& .MuiAlert-icon":{color:"#000000",display:"flex",alignItems:"center",justifyContent:"center"}},children:s("global.registerFinish.blockPendingAccountOrderCreation.tip")}),e.jsx(l,{sx:{marginLeft:a?"1rem":"4rem",marginRight:a?"1rem":"4rem"},children:e.jsx(g,{children:s(f?"global.registerFinish.notAutoApproved.warningTip":"global.registerFinish.notAutoApproved.tip")})})]});if(b==="2")return e.jsx(g,{children:s("global.registerFinish.bcSuccess.tip",{storeName:i!=null?i:""})})};return e.jsx(l,{sx:m?{pl:2,pr:2,mt:2,"& p":{color:u},width:a?"100%":"42rem",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px",background:"#FFFFFF",padding:"0"}:{mt:2,"& p":{color:u}},children:j&&e.jsxs(e.Fragment,{children:[A(),e.jsx(L,{activeStep:r,handleFinish:c})]})})}export{J as I,L as R,K as T,U as a,X as b,H as c,Q as d,V as e,G as f,O as s,N as v};
