import{o as L,j as e,r as h,e as Q,B as s}from"./mui-CyG7s_nf.js";import{r as J}from"./reactVendor-BAhb8EbJ.js";import{u as X}from"./lang-DxTEvHWx.js";import{r as F,i as Y,u as i,C as Z,b as ee,j as se,a as te,e as oe,s as re,c as ne,k as _,g as ae,d as E,f as q,l as R,E as ie,m as pe,n as ce,o as le}from"./react-setup-BQykMGtr.js";import"../index.BdPALFw3.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";var b={},xe=L;Object.defineProperty(b,"__esModule",{value:!0});var p=b.default=void 0,de=xe(F()),ue=e;p=b.default=(0,de.default)((0,ue.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"Group");var C={},me=L;Object.defineProperty(C,"__esModule",{value:!0});var j=C.default=void 0,he=me(F()),fe=e;j=C.default=(0,he.default)((0,fe.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");const ge=["shoppingList/","purchased-products"];function Oe(k){const{isOpen:r,setOpenPage:y}=k,z=Y(),O=i(({company:t})=>t.customer.id),S=i(({company:t})=>t.customer.b2bId),B=i(({b2bFeatures:t})=>t.masqueradeCompany.id),c=i(({b2bFeatures:t})=>t.masqueradeCompany.companyName),w=i(({b2bFeatures:t})=>t.masqueradeCompany.isAgenting),{hash:U,href:D}=window.location,A=X(),{state:{masqueradeButton:T}}=J.useContext(Z),{text:P="",color:l="",customCss:W="",location:x="bottomLeft",horizontalPadding:v="",verticalPadding:I=""}=T,f=ee(pe,P,ie),$=ge.some(t=>U.includes(t)),[n,d]=se("sf-isMasqueradeTipExpansion",!0,sessionStorage),[o]=te(),u=async()=>{r?y({isOpen:!0,openUrl:"/dashboard?closeMasqurade=1"}):(typeof S=="number"&&await ce(+B,S),z(le()),y({isOpen:!0,openUrl:"/dashboard"}))};if(D.includes(oe)||!O||!w)return null;const m={vertical:"bottom",horizontal:"left"};let a={};o&&r?a={width:"100%",bottom:0,left:0,borderRadius:"0px"}:!o&&$&&(a={bottom:"90px !important"});const N=re(W),{cssValue:V,mediaBlocks:G}=N,M=ne(G),g={backgroundColor:"".concat(l||"#ED6C02"),color:_(l||"#FFFFFF"),padding:"0",...ae(V)},K={backgroundColor:"".concat(l||"#ED6C02"),color:_(l||"#FFFFFF")},H={bottom:"24px",left:"24px",right:"auto",top:"unset"};return e.jsxs(e.Fragment,{children:[!r&&o&&e.jsx(h,{sx:{zIndex:"99999999993",...E(v,I,x)},anchorOrigin:q(x)||m,open:!0,children:e.jsx(Q,{sx:{height:"42px",marginTop:"10px",...g,...M},onClick:()=>u(),variant:"contained",startIcon:e.jsx(p,{}),children:c})}),!r&&!o&&e.jsx(h,{sx:{zIndex:"9999999999",borderRadius:"4px",height:"52px",fontSize:"16px",...E(v,I,x),...a,...g,...M},anchorOrigin:q(x)||m,open:!0,children:e.jsx(s,{sx:{padding:"5px 15px",width:"100%"},children:!o&&e.jsxs(s,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(p,{sx:{mr:"12px"}}),n&&e.jsx(s,{sx:{fontWeight:400},children:A("global.masquerade.youAreMasqueradeAs")}),e.jsx(s,{sx:{fontWeight:"600",m:"0 15px 0 10px"},children:c}),n&&e.jsx(s,{sx:{fontWeight:400,fontSize:"13px",cursor:"pointer"},onClick:()=>u(),children:f}),n?e.jsx(j,{onClick:()=>d(!1),sx:{ml:"10px",cursor:"pointer"}}):e.jsx(R,{onClick:()=>d(!0),sx:{ml:"10px",cursor:"pointer"}})]})})}),r&&!o&&e.jsx(h,{sx:{zIndex:"9999999999",borderRadius:"4px",height:"52px",...g,...H,...a},anchorOrigin:m,open:!0,children:e.jsx(s,{sx:{padding:"5px 15px",width:"100%"},children:e.jsxs(s,{sx:{display:"flex",alignItems:"center",fontSize:"16px"},children:[e.jsx(p,{sx:{mr:"12px"}}),n&&e.jsx(s,{sx:{fontWeight:400},children:A("global.masquerade.youAreMasqueradeAs")}),e.jsx(s,{sx:{fontWeight:"600",m:"0 15px 0 10px"},children:c}),n&&e.jsx(s,{sx:{fontWeight:400,fontSize:"13px",cursor:"pointer"},onClick:()=>u(),children:f}),n?e.jsx(j,{onClick:()=>d(!1),sx:{ml:"10px",cursor:"pointer"}}):e.jsx(R,{onClick:()=>d(!0),sx:{ml:"10px",cursor:"pointer"}})]})})}),r&&o&&e.jsx(h,{sx:{zIndex:"9999999999",borderRadius:"4px",height:"52px",...a,...K},anchorOrigin:m,open:!0,children:e.jsx(s,{sx:{padding:"5px 15px",width:"100%"},children:e.jsxs(s,{sx:{display:"flex",alignItems:"center",fontSize:"16px",width:"100%",justifyContent:"space-between"},children:[e.jsxs(s,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(p,{sx:{mr:"12px"}}),e.jsx(s,{sx:{fontWeight:"600",m:"0 15px 0 10px"},children:c})]}),e.jsx(s,{sx:{fontWeight:400,fontSize:"13px",cursor:"pointer"},onClick:()=>u(),children:f})]})})})]})}export{Oe as default};