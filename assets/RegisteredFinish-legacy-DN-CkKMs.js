System.register(["./react-setup-legacy-CVgV69kS.js","../index-legacy.DMqXW-Ne.js","./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./config-legacy-C-ao88RG.js","./eStyled-legacy-C5ZTaXoz.js"],(function(e,t){"use strict";var r,i,n,o,a,s,l,c,d,p,g,x,m,u,h,F;return{setters:[e=>{r=e.B,i=e.a7,n=e.a8,o=e.a3,a=e.bq,s=e.C,l=e.a,c=e.k,d=e.N},null,e=>{p=e.j,g=e.B,x=e.a0},e=>{m=e.r},e=>{u=e.u},e=>{h=e.s},e=>{F=e.n}],execute:function(){function t(e){const{activeStep:t,handleBack:r,handleNext:i}=e,n=u();return p.jsx(g,{children:t===h.length?p.jsx(g,{sx:{display:"flex",flexDirection:"row-reverse",pt:2,justifyContent:"center",marginBottom:"3rem"},children:p.jsx(o,{variant:"contained",onClick:()=>window.location.href="/",children:n("global.button.finish")})}):p.jsxs(g,{sx:{display:"flex",flexDirection:"row-reverse",pt:2,justifyContent:"center",marginBottom:"3rem"},children:[p.jsx(o,{variant:"contained",onClick:i,sx:{backgroundColor:"#1B5F90",borderRadius:"3.125rem",border:"1px solid #1B5F90",textTransform:"capitalize",color:"#FFF",textAlign:"center",fontFamily:"Montserrat",fontSize:"1rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal",letterSpacing:"0.02rem",width:"10.3125rem",height:"2.75rem","&:hover":{backgroundColor:"#FFFFFF",color:"#1B5F90",border:"1px solid #1B5F90"}},children:t===h.length-1?n("global.button.submit"):n("global.button.next")}),0!==t&&p.jsx(o,{variant:"contained",onClick:r,sx:{backgroundColor:"#FFFFFF",border:"1px solid #1B5F90",borderRadius:"3.125rem",textTransform:"capitalize",color:"#1B5F90",textAlign:"center",fontFamily:"Montserrat",fontSize:"1rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal",letterSpacing:"0.02rem",width:"10.3125rem",height:"2.75rem",mr:1,"&:hover":{backgroundColor:"#1B5F90",color:"#FFFFFF",borderColor:"#1B5F90"}},children:n("global.button.back")})]})})}e({R:t,b:function(e){const{activeStep:r,handleFinish:i,isBCToB2B:n=!1}=e,{state:o}=m.useContext(a),h=u(),{state:{portalStyle:{backgroundColor:F="#FEF9F5"}}}=m.useContext(s),[f]=l(),v=c(F),{accountType:j,submitSuccess:y,isAutoApproval:B,storeName:C}=o,S=d.get("blockPendingAccountOrderCreation")&&!B;return p.jsx(g,{sx:n?{pl:2,pr:2,mt:2,"& p":{color:v},width:f?"100%":"42rem",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px",background:"#FFFFFF",padding:"0"}:{mt:2,"& p":{color:v}},children:y&&p.jsxs(p.Fragment,{children:["1"===j?B?p.jsx(b,{children:h("global.registerFinish.autoApproved.tip",{storeName:C??""})}):p.jsxs(p.Fragment,{children:[S&&p.jsx(x,{severity:"warning",variant:"outlined",sx:{marginLeft:f?"0.5rem":"2rem",marginRight:f?"0.5rem":"2rem",borderRadius:"4px",padding:"6px 16px",maxWidth:"820px","& .MuiAlert-icon":{color:"#000000",display:"flex",alignItems:"center",justifyContent:"center"}},children:h("global.registerFinish.blockPendingAccountOrderCreation.tip")}),p.jsx(g,{sx:{marginLeft:f?"1rem":"4rem",marginRight:f?"1rem":"4rem"},children:p.jsx(b,{children:h(S?"global.registerFinish.notAutoApproved.warningTip":"global.registerFinish.notAutoApproved.tip")})})]}):"2"===j?p.jsx(b,{children:h("global.registerFinish.bcSuccess.tip",{storeName:C??""})}):void 0,p.jsx(t,{activeStep:r,handleFinish:i})]})})}}),e("c",(e=>r.post("/api/v2/bc/customers",i.B2BRest,e))),e("s",(e=>r.post("/api/v2/bc/customers/subscribers",i.B2BRest,e))),e("a",(e=>r.post("/api/v2/extra-fields/company/validate",i.B2BRest,{...e,storeHash:n}))),e("v",(e=>r.post("/api/v2/extra-fields/user/validate",i.B2BRest,{...e,storeHash:n})));const b=F("p")((()=>({margin:"2rem auto"})));e("f",F("h3")((()=>({margin:"1rem 0",display:"flex",justifyContent:"center",fontSize:"34px",fontWeight:"400"})))),e("I",F("h4")((()=>({marginBottom:"20px"})))),e("T",F("div")({display:"flex",flexDirection:"row",alignItems:"center"})),F("div")((()=>({cursor:"pointer",color:"#1976d2",borderBottom:"1px solid #1976d2"}))),e("d",F("div")((e=>{const{isMobile:t=!1}=e;return t?{}:{padding:"20px 40px"}}))),e("e",F("div")({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}))}}}));
