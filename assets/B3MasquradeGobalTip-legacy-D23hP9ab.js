System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-CRkLvYhl.js","../index-legacy.D9Kxw0x2.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,s){"use strict";var n,t,r,o,l,i,a,c,x,d,p,u,h,g,j,m,f,y,b,C,F,v,z,k,I,S;return{setters:[e=>{n=e.o,t=e.j,r=e.r,o=e.e,l=e.B},e=>{i=e.r},e=>{a=e.u},e=>{c=e.r,x=e.i,d=e.u,p=e.C,u=e.b,h=e.j,g=e.a,j=e.e,m=e.s,f=e.c,y=e.k,b=e.g,C=e.d,F=e.f,v=e.l,z=e.E,k=e.m,I=e.n,S=e.o},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(e){const{isOpen:s,setOpenPage:n}=e,c=x(),q=d((({company:e})=>e.customer.id)),O=d((({company:e})=>e.customer.b2bId)),M=d((({b2bFeatures:e})=>e.masqueradeCompany.id)),W=d((({b2bFeatures:e})=>e.masqueradeCompany.companyName)),A=d((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),{hash:L,href:P}=window.location,V=a(),{state:{masqueradeButton:_}}=i.useContext(p),{text:B="",color:D="",customCss:T="",location:U="bottomLeft",horizontalPadding:$="",verticalPadding:G=""}=_,K=u(k,B,z),N=R.some((e=>L.includes(e))),[H,J]=h("sf-isMasqueradeTipExpansion",!0,sessionStorage),[Q]=g(),X=async()=>{s?n({isOpen:!0,openUrl:"/dashboard?closeMasqurade=1"}):("number"==typeof O&&await I(+M,O),c(S()),n({isOpen:!0,openUrl:"/dashboard"}))};if(P.includes(j)||!q)return null;if(!A)return null;const Y={vertical:"bottom",horizontal:"left"};let Z={};Q&&s?Z={width:"100%",bottom:0,left:0,borderRadius:"0px"}:!Q&&N&&(Z={bottom:"90px !important"});const ee=m(T),{cssValue:se,mediaBlocks:ne}=ee,te=f(ne),re={backgroundColor:`${D||"#ED6C02"}`,color:y(D||"#FFFFFF"),padding:"0",...b(se)},oe={backgroundColor:`${D||"#ED6C02"}`,color:y(D||"#FFFFFF")};return t.jsxs(t.Fragment,{children:[!s&&Q&&t.jsx(r,{sx:{zIndex:"99999999993",...C($,G,U)},anchorOrigin:F(U)||Y,open:!0,children:t.jsx(o,{sx:{height:"42px",marginTop:"10px",...re,...te},onClick:()=>X(),variant:"contained",startIcon:t.jsx(w,{}),children:W})}),!s&&!Q&&t.jsx(r,{sx:{zIndex:"9999999999",borderRadius:"4px",height:"52px",fontSize:"16px",...C($,G,U),...Z,...re,...te},anchorOrigin:F(U)||Y,open:!0,children:t.jsx(l,{sx:{padding:"5px 15px",width:"100%"},children:!Q&&t.jsxs(l,{sx:{display:"flex",alignItems:"center"},children:[t.jsx(w,{sx:{mr:"12px"}}),H&&t.jsx(l,{sx:{fontWeight:400},children:V("global.masquerade.youAreMasqueradeAs")}),t.jsx(l,{sx:{fontWeight:"600",m:"0 15px 0 10px"},children:W}),H&&t.jsx(l,{sx:{fontWeight:400,fontSize:"13px",cursor:"pointer"},onClick:()=>X(),children:K}),H?t.jsx(E,{onClick:()=>J(!1),sx:{ml:"10px",cursor:"pointer"}}):t.jsx(v,{onClick:()=>J(!0),sx:{ml:"10px",cursor:"pointer"}})]})})}),s&&!Q&&t.jsx(r,{sx:{zIndex:"9999999999",borderRadius:"4px",height:"52px",...re,bottom:"24px",left:"24px",right:"auto",top:"unset",...Z},anchorOrigin:Y,open:!0,children:t.jsx(l,{sx:{padding:"5px 15px",width:"100%"},children:t.jsxs(l,{sx:{display:"flex",alignItems:"center",fontSize:"16px"},children:[t.jsx(w,{sx:{mr:"12px"}}),H&&t.jsx(l,{sx:{fontWeight:400},children:V("global.masquerade.youAreMasqueradeAs")}),t.jsx(l,{sx:{fontWeight:"600",m:"0 15px 0 10px"},children:W}),H&&t.jsx(l,{sx:{fontWeight:400,fontSize:"13px",cursor:"pointer"},onClick:()=>X(),children:K}),H?t.jsx(E,{onClick:()=>J(!1),sx:{ml:"10px",cursor:"pointer"}}):t.jsx(v,{onClick:()=>J(!0),sx:{ml:"10px",cursor:"pointer"}})]})})}),s&&Q&&t.jsx(r,{sx:{zIndex:"9999999999",borderRadius:"4px",height:"52px",...Z,...oe},anchorOrigin:Y,open:!0,children:t.jsx(l,{sx:{padding:"5px 15px",width:"100%"},children:t.jsxs(l,{sx:{display:"flex",alignItems:"center",fontSize:"16px",width:"100%",justifyContent:"space-between"},children:[t.jsxs(l,{sx:{display:"flex",alignItems:"center"},children:[t.jsx(w,{sx:{mr:"12px"}}),t.jsx(l,{sx:{fontWeight:"600",m:"0 15px 0 10px"},children:W})]}),t.jsx(l,{sx:{fontWeight:400,fontSize:"13px",cursor:"pointer"},onClick:()=>X(),children:K})]})})})]})}));var s={},q=n;Object.defineProperty(s,"__esModule",{value:!0});var w=s.default=void 0,O=q(c()),M=t;w=s.default=(0,O.default)((0,M.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"Group");var W={},A=n;Object.defineProperty(W,"__esModule",{value:!0});var E=W.default=void 0,L=A(c()),P=t;E=W.default=(0,L.default)((0,P.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft");const R=["shoppingList/","purchased-products"]}}}));
