import{j as t,r as O,B as Q,e as _}from"./mui-CyG7s_nf.js";import{r as o}from"./reactVendor-BAhb8EbJ.js";import{u as v,C as w,a as y,b as F,s as M,c as j,g as k,d as H,e as R,f as N,h as P,F as V,T as z}from"./react-setup-DX77csrR.js";import"../index.u4_pmrsf.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./lang-DxTEvHWx.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";function rt(c){const{isOpen:e,setOpenPage:l,productQuoteEnabled:u}=c,[p,s]=o.useState(!1),i=v(({quoteInfo:A})=>A.draftQuoteList.length);o.useEffect(()=>{s(!!i)},[e,i]);const{href:n}=window.location,{state:{floatingAction:d}}=o.useContext(w),[m]=y(),{text:f="",color:a="#3385d6",customCss:x="",location:r="bottomRight",horizontalPadding:h="",verticalPadding:g="",enabled:C=!1}=d,S=F(z,f,V),b={vertical:"bottom",horizontal:"right"},E=M(x),{cssValue:I,mediaBlocks:L}=E,B=j(L),T={backgroundColor:a,padding:"6px 16px",...k(I)},U=m?{}:H(h,g,r);return n.includes(R)?null:t.jsx(O,{sx:{zIndex:"99999999993",width:"auto",...U},anchorOrigin:N(r)||b,open:!0,children:t.jsx(Q,{sx:{display:"flex",flexDirection:"column",width:"auto"},children:C&&p&&!e&&u&&!n.includes("/cart")&&t.jsx(_,{sx:{height:"42px",":hover":{backgroundColor:P(a,.2)},...T,...B},onClick:()=>{l({isOpen:!0,openUrl:"/quoteDraft",params:{quoteBtn:"open"}})},variant:"contained",children:S})})})}export{rt as default};
