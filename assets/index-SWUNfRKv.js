import{j as e,B as n}from"./mui-CyG7s_nf.js";import{r as s}from"./reactVendor-BAhb8EbJ.js";import{u as y}from"./lang-DxTEvHWx.js";import{u as p,ap as j,_ as k,a5 as c}from"./react-setup-BQykMGtr.js";import"../index.BdPALFw3.js";import{f as v,g as I}from"./payment-kgzs_RX2.js";import{c as L,u as C}from"./router-BbCjXwHs.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";import"./b3checkout-IS93U1Vt.js";function J(){const l=p(({global:r})=>r.storeInfo.platform),f=p(({company:r})=>r.tokens.B2BToken),[u,a]=s.useState(!1),[d,g]=s.useState(!1),t=L(),x=C(),i=y();s.useEffect(()=>{(async()=>{if(a(!0),!f){g(!0),a(!1);return}if(t!=null&&t.id||c.error(i("payment.errorInvoiceCantBeBlank")),t!=null&&t.id)try{const{invoice:{openBalance:{code:o="",value:m=""}}}=await v(+t.id);(!o||!m)&&c.error(i("payment.errorOpenBalanceIsIncorrect"));const B={lineItems:[{invoiceId:+t.id,amount:m}],currency:o};await I(B,l,!0)}catch(o){c.error((o==null?void 0:o.message)||i("payment.invoiceDoesntExist"))}finally{a(!1)}})()},[l,t.id]);const h=()=>{x("/login")};return e.jsxs(n,{children:[u&&e.jsx(j,{backColor:"#FFFFFF"}),e.jsx(k,{isOpen:d,fullWidth:!0,title:"",rightSizeBtn:"ok",showLeftBtn:!1,handRightClick:h,children:e.jsx(n,{sx:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:e.jsxs(n,{children:[e.jsx(n,{sx:{mb:"10px"},children:i("payment.firstLoginToPay")}),e.jsx(n,{children:i("payment.clickToLandingPage")})]})})})]})}export{J as default};
