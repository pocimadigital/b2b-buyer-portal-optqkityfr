import{j as e,K as N,ab as O,T as g,B as i,e as I,s as P,W as v,q as z,X as W}from"./mui-CyG7s_nf.js";import{r as c}from"./reactVendor-BAhb8EbJ.js";import{u as A}from"./lang-DxTEvHWx.js";import{d as K}from"./MoreHoriz-CjtK0h01.js";import{ad as T,u as S,a2 as U,ab as Q,v as w}from"./react-setup-BZAh8p9K.js";import"../index.B1nqUXe0.js";import{u as X}from"./useSort-Cu2YrCwH.js";import{s as _,e as G}from"./masquerade-sNXptbDe.js";import{B as H}from"./B3FilterSearch-CO7sZeGw.js";import{a as J}from"./router-BbCjXwHs.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";function V({row:s,startActing:o,endActing:p,salesRepCompanyId:t=0}){return e.jsxs(N,{children:[e.jsxs(O,{sx:{color:"#313440"},children:[e.jsx(g,{sx:{fontWeight:400,fontSize:"24px",color:"rgba(0, 0, 0, 0.87)"},children:s.companyName}),s.companyId===+t&&e.jsx(i,{sx:{fontWeight:400,fontSize:"13px",background:"#ED6C02",display:"inline-block",p:"2px 7px",color:"#FFFFFF",borderRadius:"10px"},children:"Selected"}),e.jsxs(i,{sx:{display:"flex",fontSize:"16px",mt:"15px"},children:[e.jsx(g,{sx:{fontWeight:400},children:"Email:"}),e.jsx(g,{variant:"body1",children:s.companyEmail})]})]}),s.companyId===+t?e.jsx(I,{sx:{ml:"10px",mb:"10px"},variant:"text",onClick:()=>p(),children:"End MASQUERADE"}):e.jsx(I,{sx:{ml:"10px",mb:"10px"},variant:"text",onClick:()=>o(s.companyId),children:"MASQUERADE"})]})}const E="companyName",F={companyName:"companyName",companyAdminName:"companyAdminName",companyEmail:"companyEmail"},Y=P(v)(()=>({"& .MuiPaper-elevation":{boxShadow:"0px 1px 0px -1px rgba(0, 0, 0, 0.1), 0px 1px 6px rgba(0, 0, 0, 0.07), 0px 1px 4px rgba(0, 0, 0, 0.06)",borderRadius:"4px"}}));function Z({isMasquerade:s,handleSelect:o,startActing:p,endActing:t}){const l=c.useRef(null),[r,n]=c.useState(!1),x=A(),y=()=>{o(),n(!0)},f=x(s?"dashboard.endMasqueradeAction":"dashboard.masqueradeAction");return e.jsxs(e.Fragment,{children:[e.jsx(z,{onClick:y,ref:l,children:e.jsx(K,{})}),e.jsx(Y,{id:"basic-menu",anchorEl:l.current,open:r,onClose:()=>n(!1),MenuListProps:{"aria-labelledby":"basic-button"},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(W,{sx:{color:"primary.main"},onClick:()=>{s?t():p(),n(!1)},children:f})})]})}function Se(s){const o=T(),p=S(({company:a})=>a.customer.id),t=S(({company:a})=>a.customer.b2bId),{setOpenPage:l}=s,r=A(),n=S(({b2bFeatures:a})=>a.masqueradeCompany.id),[x,y]=c.useState(+n),[f,h]=c.useState(!1),[m,u]=c.useState({q:"",orderBy:F[E]}),[B,R,M]=X(F,E,m,u,"asc"),j=J(),k=async a=>{let d={edges:[],totalCount:0};return typeof t=="number"&&(d=(await w(t,a)).superAdminCompanies),d},C=async a=>{try{h(!0),typeof t=="number"&&await _({customerId:p,companyId:a||x,b2bId:t}),l({isOpen:!0,openUrl:"/dashboard"}),u({...m})}finally{h(!1)}},b=async()=>{try{o(!0),typeof t=="number"&&await G({b2bId:t}),u({...m})}finally{o(!1)}};c.useEffect(()=>{const a={...j};a!=null&&a.state&&b()},[j]);const q=async a=>{u({...m,q:a})},D=[{key:"companyName",title:r("dashboard.company"),render:a=>e.jsxs(i,{sx:{display:"flex",alignItems:"center"},children:[a.companyName,a.companyId===+n&&e.jsx(i,{sx:{fontWeight:400,fontSize:"13px",background:"#ED6C02",ml:"16px",p:"2px 7px",color:"#FFFFFF",borderRadius:"10px"},children:r("dashboard.selected")})]}),isSortable:!0},{key:"companyEmail",title:r("dashboard.email"),isSortable:!0},{key:"companyName",title:r("dashboard.action"),render:a=>{const{companyId:d}=a,L=+d==+n;return e.jsx(Z,{isMasquerade:L,handleSelect:()=>{y(d)},startActing:C,endActing:b})}}];return e.jsx(U,{isSpinning:f,children:e.jsxs(i,{sx:{display:"flex",flexDirection:"column",flex:1},children:[e.jsx(i,{sx:{mb:"24px"},children:e.jsx(H,{handleChange:q})}),e.jsx(Q,{columnItems:D,rowsPerPageOptions:[10,20,30],getRequestList:k,searchParams:m||{},isCustomRender:!1,requestLoading:h,tableKey:"id",sortDirection:R,orderBy:M,sortByFn:B,renderItem:a=>e.jsx(V,{row:a,startActing:C,endActing:b,salesRepCompanyId:+n})})]})})}export{Se as default,E as defaultSortKey,F as sortKeys};
