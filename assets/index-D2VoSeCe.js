import{j as s,B as m,I as K,T as g}from"./mui-CyG7s_nf.js";import{r as e}from"./reactVendor-BAhb8EbJ.js";import{u as T}from"./form-Bvi8lP6x.js";import{u as z}from"./lang-DxTEvHWx.js";import{B as E}from"./B3Card-B6Mzsyja.js";import{B as R}from"./B3CustomForm-OSVXs3i_.js";import{G as k,C as M,a as W,a2 as A,a3 as D}from"./react-setup-BXoEAsM4.js";import"../index.CIyF7Vyw.js";import{b as f}from"./b3Logger-CMQiGC3f.js";import{C as G,g as q,r as V}from"./recaptcha-Dqc3-rEr.js";import{g as N,s as H}from"./config-DwKgqsRk.js";import{L as J,B as Q}from"./styled-HeAq0rir.js";import{u as U}from"./router-BbCjXwHs.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./lodashEs-Ck10JMnh.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./validatorRules-BChXfGJH.js";function X({setOpenPage:p,isEnabledOnStorefront:t,storefrontSiteKey:c,logo:n}){const[l]=W(),[x,r]=e.useState(!1),o=z(),a=N(o),[j,u]=e.useState(!1),[i,C]=e.useState(""),{control:S,handleSubmit:w,getValues:F,formState:{errors:b},setValue:B,watch:L}=T({mode:"onSubmit"}),h=U(),y=L("emailAddress");e.useEffect(()=>{(i||!t)&&u(!1)},[i,t]);const I=async P=>{const{emailAddress:v}=P;if(t&&!i){u(!0);return}try{if(r(!0),t&&i)try{await V(i,y),h("/login?loginFlag=2"),r(!1)}catch(d){f.error(d)}t||(await H(v),r(!1),h("/login?loginFlag=2"))}catch(d){f.error(d)}};return s.jsx(E,{setOpenPage:p,children:s.jsxs(m,{sx:{bgcolor:"#FFFFFF",borderRadius:"4px",display:"flex",flexDirection:"column",mr:"auto",ml:"auto",maxWidth:"42rem"},children:[s.jsx(m,{sx:{mt:"20px"},children:n&&s.jsx(J,{children:s.jsx(K,{sx:{maxWidth:l?"175px":"250px"},onClick:()=>{window.location.href="/"},children:s.jsx("img",{src:n,alt:o("global.tips.registerLogo"),loading:"lazy"})})})}),s.jsxs(m,{sx:{margin:"20px 0 0 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[s.jsx(g,{variant:"h5",sx:{margin:"16px 0"},children:o("forgotpassword.resetPassword")}),s.jsx(g,{variant:"body1",sx:{margin:"0 16px 16px 16px"},children:o("forgotpassword.requestEmail")}),s.jsx(R,{formFields:a,errors:b,control:S,getValues:F,setValue:B,sx:{margin:"0 16px",maxWidth:l?"311px":"505px"}}),t&&j?s.jsx(g,{variant:"body1",sx:{display:"flex",alignSelf:"flex-start",marginLeft:"18px",marginTop:"2px",fontSize:"13px"},children:o("login.loginText.missingCaptcha")}):"",t?s.jsx(m,{sx:{marginTop:"20px"},children:s.jsx(G,{siteKey:c,size:"normal",email:y,handleGetKey:C})}):"",s.jsx(A,{isSpinning:x,size:20,isFlex:!1,children:s.jsx(Q,{children:s.jsx(D,{type:"submit",size:"medium",onClick:w(I),variant:"contained",sx:{width:"auto"},children:o("forgotpassword.resetPasswordBtn")})})})]})]})})}function js({setOpenPage:p}){const{logo:t}=e.useContext(k).state,{loginPageDisplay:c}=e.useContext(M).state,[n,l]=e.useState(!1),[x,r]=e.useState("");return e.useEffect(()=>{(async()=>{try{const a=await q();a&&(l(a.isEnabledOnStorefront),r(a.siteKey))}catch(a){f.error(a)}})()},[]),s.jsx(X,{setOpenPage:p,logo:c.displayStoreLogo?t:void 0,isEnabledOnStorefront:n,storefrontSiteKey:x})}export{X as ForgotPassword,js as default};
