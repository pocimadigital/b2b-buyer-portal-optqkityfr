System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./MoreHoriz-legacy-DRZpb-e0.js","./react-setup-legacy-BdSQchRk.js","../index-legacy.DD0lB9PR.js","./useSort-legacy-CfCrn6Eb.js","./masquerade-legacy-BewxVVEO.js","./B3FilterSearch-legacy-C7hmCugz.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,a){"use strict";var n,s,t,r,l,o,c,i,d,p,m,y,x,u,g,b,j,h,f,S,A,F,I;return{setters:[e=>{n=e.j,s=e.K,t=e.ab,r=e.T,l=e.B,o=e.e,c=e.s,i=e.W,d=e.q,p=e.X},e=>{m=e.r},e=>{y=e.u},e=>{x=e.d},e=>{u=e.ad,g=e.u,b=e.a2,j=e.ab,h=e.v},null,e=>{f=e.u},e=>{S=e.s,A=e.e},e=>{F=e.B},e=>{I=e.a},null,null,null,null,null,null,null,null,null,null,null],execute:function(){function a({row:e,startActing:a,endActing:c,salesRepCompanyId:i=0}){return n.jsxs(s,{children:[n.jsxs(t,{sx:{color:"#313440"},children:[n.jsx(r,{sx:{fontWeight:400,fontSize:"24px",color:"rgba(0, 0, 0, 0.87)"},children:e.companyName}),e.companyId===+i&&n.jsx(l,{sx:{fontWeight:400,fontSize:"13px",background:"#ED6C02",display:"inline-block",p:"2px 7px",color:"#FFFFFF",borderRadius:"10px"},children:"Selected"}),n.jsxs(l,{sx:{display:"flex",fontSize:"16px",mt:"15px"},children:[n.jsx(r,{sx:{fontWeight:400},children:"Email:"}),n.jsx(r,{variant:"body1",children:e.companyEmail})]})]}),e.companyId===+i?n.jsx(o,{sx:{ml:"10px",mb:"10px"},variant:"text",onClick:()=>c(),children:"End MASQUERADE"}):n.jsx(o,{sx:{ml:"10px",mb:"10px"},variant:"text",onClick:()=>a(e.companyId),children:"MASQUERADE"})]})}e("default",(function(e){const s=u(),t=g((({company:e})=>e.customer.id)),r=g((({company:e})=>e.customer.b2bId)),{setOpenPage:o}=e,c=y(),i=g((({b2bFeatures:e})=>e.masqueradeCompany.id)),[d,p]=m.useState(+i),[x,k]=m.useState(!1),[R,N]=m.useState({q:"",orderBy:E[C]}),[v,z,M]=f(E,C,R,N,"asc"),w=I(),B=async e=>{try{k(!0),"number"==typeof r&&await S({customerId:t,companyId:e||d,b2bId:r}),o({isOpen:!0,openUrl:"/dashboard"}),N({...R})}finally{k(!1)}},D=async()=>{try{s(!0),"number"==typeof r&&await A({b2bId:r}),N({...R})}finally{s(!1)}};m.useEffect((()=>{const e={...w};e?.state&&D()}),[w]);const P=[{key:"companyName",title:c("dashboard.company"),render:e=>n.jsxs(l,{sx:{display:"flex",alignItems:"center"},children:[e.companyName,e.companyId===+i&&n.jsx(l,{sx:{fontWeight:400,fontSize:"13px",background:"#ED6C02",ml:"16px",p:"2px 7px",color:"#FFFFFF",borderRadius:"10px"},children:c("dashboard.selected")})]}),isSortable:!0},{key:"companyEmail",title:c("dashboard.email"),isSortable:!0},{key:"companyName",title:c("dashboard.action"),render:e=>{const{companyId:a}=e,s=+a==+i;return n.jsx(q,{isMasquerade:s,handleSelect:()=>{p(a)},startActing:B,endActing:D})}}];return n.jsx(b,{isSpinning:x,children:n.jsxs(l,{sx:{display:"flex",flexDirection:"column",flex:1},children:[n.jsx(l,{sx:{mb:"24px"},children:n.jsx(F,{handleChange:async e=>{N({...R,q:e})}})}),n.jsx(j,{columnItems:P,rowsPerPageOptions:[10,20,30],getRequestList:async e=>{let a={edges:[],totalCount:0};return"number"==typeof r&&(a=(await h(r,e)).superAdminCompanies),a},searchParams:R||{},isCustomRender:!1,requestLoading:k,tableKey:"id",sortDirection:z,orderBy:M,sortByFn:v,renderItem:e=>n.jsx(a,{row:e,startActing:B,endActing:D,salesRepCompanyId:+i})})]})})}));const C=e("defaultSortKey","companyName"),E=e("sortKeys",{companyName:"companyName",companyAdminName:"companyAdminName",companyEmail:"companyEmail"}),k=c(i)((()=>({"& .MuiPaper-elevation":{boxShadow:"0px 1px 0px -1px rgba(0, 0, 0, 0.1), 0px 1px 6px rgba(0, 0, 0, 0.07), 0px 1px 4px rgba(0, 0, 0, 0.06)",borderRadius:"4px"}})));function q({isMasquerade:e,handleSelect:a,startActing:s,endActing:t}){const r=m.useRef(null),[l,o]=m.useState(!1),c=y(),i=c(e?"dashboard.endMasqueradeAction":"dashboard.masqueradeAction");return n.jsxs(n.Fragment,{children:[n.jsx(d,{onClick:()=>{a(),o(!0)},ref:r,children:n.jsx(x,{})}),n.jsx(k,{id:"basic-menu",anchorEl:r.current,open:l,onClose:()=>o(!1),MenuListProps:{"aria-labelledby":"basic-button"},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:n.jsx(p,{sx:{color:"primary.main"},onClick:()=>{e?t():s(),o(!1)},children:i})})]})}}}}));
