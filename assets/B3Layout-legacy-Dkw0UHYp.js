System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-CovzVCWc.js","../index-legacy.DX_rMQed.js","./router-legacy-CCJEjNy7.js","./useCustomCallbacks-legacy-BXYZnszm.js","./b3TriggerCartNumber-legacy-6v-xWdfc.js","./eStyled-legacy-C5ZTaXoz.js","./useBlockPendingAccountViewPrice-legacy-DpgwWKg3.js","./muiIcon-legacy-CrtdWcGA.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,t){"use strict";var n,o,i,a,s,r,l,c,d,p,x,g,u,m,h,f,y,j,b,C,w,F,k,v,S,M,D,B,I,W,L,z,P,T,O,E,H,R,N,A,q,V,_,G,U,K,Q,X,$,J,Y,Z,ee,te;return{setters:[e=>{n=e.j,o=e.B,i=e.a0,a=e.I,s=e.o,r=e.a4,l=e.a5,c=e.W,d=e.X,p=e.e,x=e.T,g=e.y,u=e.a6,m=e.a7,h=e.a8,f=e.a9},e=>{y=e.r},e=>{j=e.u},e=>{b=e.j,C=e.u,w=e.J,F=e.a,k=e.G,v=e.K,S=e.L,M=e.M,D=e.S,B=e.r,I=e.i,W=e.N,L=e.O,z=e.P,P=e.Q,T=e.p,O=e.C,E=e.R,H=e.k,R=e.U,N=e.V,A=e.W,q=e.X,V=e.Y,_=e.Z,G=e._},null,e=>{U=e.u,K=e.a},e=>{Q=e.u,X=e.C},e=>{$=e.b},e=>{J=e.n},e=>{Y=e.u},e=>{Z=e.a,ee=e.S,te=e.C},null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({children:e}){const[t]=F(),i=f("(min-width:1775px)"),a=K(),[s,r]=y.useState(""),l=j(),c=C((({company:e})=>e.customer.emailAddress)),d=C((({company:e})=>e.customer.id)),{state:{globalMessageDialog:p},dispatch:x}=y.useContext(N),g=U();return y.useEffect((()=>{c&&d||V(a.pathname)||g("/login")}),[c,d,a]),y.useEffect((()=>{const e=_.find((e=>e.path===a.pathname));if(e&&"/quoteDraft"!==a.pathname){const t=Object.entries(Fe).find((([e])=>e===a.pathname));r(l(t?t[1]:e.idLang))}else r("");x({type:"common",payload:{tipMessage:{msgs:[]}}})}),[a]),n.jsxs(o,{children:[t?n.jsx(we,{title:s,children:e}):n.jsxs(o,{id:"app-mainPage-layout",sx:{display:"flex",minHeight:"100vh",margin:"auto",width:i?1775:"100%",minWidth:i?1775:"100%",maxWidth:i?1775:"100%",flexDirection:"row",p:"32px 63px 70px 63px",background:"#FFFFFF"},children:[n.jsx(oe,{}),n.jsxs(o,{sx:{display:"flex",flexDirection:"column",width:"200px",displayPrint:"none"},children:[n.jsx(ie,{}),n.jsx(o,{sx:{pt:"24px"},children:n.jsx(Ce,{})})]}),n.jsxs(o,{sx:{flex:1,display:"flex",flexDirection:"column",maxWidth:"1450px",width:"100%",p:"0 0px 0px 50px"},children:[n.jsx(be,{title:s}),n.jsx(ne,{}),n.jsx(o,{component:"main",sx:{mt:t||s?"0":"24px"},children:e})]})]}),n.jsx(G,{isOpen:p.open,title:p.title,leftSizeBtn:p.cancelText,rightSizeBtn:p.saveText,handleLeftClick:p.cancelFn||(()=>{x({type:"common",payload:{globalMessageDialog:{open:!1,title:"",message:"",cancelText:"Cancel"}}})}),handRightClick:p.saveFn,showRightBtn:!!p.saveText,children:n.jsx(o,{sx:{display:"flex",justifyContent:t?"center":"start",width:t?"100%":"450px",height:"100%"},children:p.message})})]})}));const t=[0,1,2];function ne(){const e=j(),[a,s]=y.useState(!1),[r,l]=b("sf-isCloseCompanyCredit",!1,sessionStorage),c=C((({company:e})=>e.customer.role)),d=C((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting));return y.useEffect((()=>{(async()=>{if(!r&&(t.includes(+c)||3==+c&&d)){const{companyCreditConfig:{creditHold:e,creditEnabled:t}}=await w();s(e&&t)}})()}),[c,d,r]),a?n.jsx(o,{sx:{margin:"1rem 0"},children:n.jsx(i,{variant:"outlined",onClose:()=>(l(!0),void s(!1)),severity:"warning",children:e("global.companyCredit.alert")})}):null}function oe(){const[e]=F(),t=C((({global:e})=>e.setOpenPageFn)),{state:{isCloseGotoBCHome:o}}=y.useContext(k),i=U(),a=e?S:M;return n.jsx(a,{children:n.jsx(v,{sx:{color:"#757371"},onClick:()=>{o?window.location.href="/":(i("/"),t?.({isOpen:!1,openUrl:""})),window.history.replaceState(null,"",window.location.pathname||"/")}})})}function ie(){const{state:{logo:e}}=y.useContext(k),[t]=F();return n.jsx(o,{sx:t?{height:"40px",width:"140px","& li":{height:"40px",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"1rem"},"& img":{maxHeight:"40px"}}:{width:"200px",height:"65px",display:"flex",alignItems:"center","& img":{maxHeight:"65px"}},children:n.jsx(a,{sx:{maxWidth:"200px",cursor:"pointer","& .MuiImageListItem-img":{objectFit:"contain",width:"auto"}},onClick:()=>{window.location.href="/"},children:n.jsx("img",{src:e||D,alt:"logo"})})})}var ae={},se=s;Object.defineProperty(ae,"__esModule",{value:!0});var re=ae.default=void 0,le=se(B()),ce=n;re=ae.default=(0,le.default)((0,ce.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");var de={},pe=s;Object.defineProperty(de,"__esModule",{value:!0});var xe=de.default=void 0,ge=pe(B()),ue=n;function me({width:e,list:t,config:i,title:a,value:s,handleItemClick:p}){const[x]=F(),[g,u]=y.useState(!1),m=y.useRef(null),h=j(),f=()=>{u(!1)},b=i?.name||"name";return n.jsxs(o,{sx:{width:e||"auto"},children:[n.jsxs(r,{ref:m,onClick:()=>u(!0),sx:{pr:0},children:[n.jsx(l,{primary:a,sx:{"& span":{fontWeight:x?400:700,color:"#333333"}}}),g?n.jsx(xe,{}):n.jsx(re,{})]}),n.jsx(c,{anchorEl:m.current,open:g,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:"customized-menu",keepMounted:!0,onClose:f,sx:{"& .MuiList-root.MuiList-padding.MuiMenu-list":{pt:x?0:"8px",pb:x?0:"8px"}},children:t.length&&t.map((t=>{const o=t[b],i=s===t.key?"#3385d6":"black";return n.jsx(d,{sx:{color:i,width:x?"auto":e||"155px"},onClick:()=>{f(),p(t)},children:h("global.button.logout")},o)}))})]})}xe=de.default=(0,ge.default)((0,ue.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");const he=[{name:"Log out",key:"logout",type:"button",idLang:"global.button.logout"}];function fe({closeSidebar:e}){const[t]=F(),i=C((({company:e})=>e.customer.firstName)),a=C((({company:e})=>e.customer.lastName)),s=U(),r=`${i}  ${a}`;return n.jsx(o,{sx:{minWidth:"150px",display:"flex",justifyContent:t?"start":"end",mr:"10px",alignItems:"center",textTransform:"capitalize",color:"#000",textAlign:"right",fontFamily:"Montserrat",fontSize:"1rem",fontStyle:"normal",fontWeight:"600",lineHeight:"normal"},children:n.jsx(me,{title:r,handleItemClick:async t=>{"logout"===t.key?s("/login?loginFlag=3"):"path"===t.type&&t.key&&s(t.key),e&&e(!1)},list:he})})}const ye=J(o)((()=>({"& svg":{color:"#FFFFFF"}})));function je(e){const{title:t}=e,o=I(),a=j(),s=C((({company:e})=>e.customer.loginType)),r=C((({company:e})=>e.customer.role)),l=C((({company:e})=>e.companyInfo.status)),c=W.get("blockPendingAccountOrderCreation"),[d]=Y(),[p,x]=y.useState(""),[g,u]=y.useState(!1),[m,h]=y.useState("success"),[f,b]=y.useState("#2E7D32"),w=()=>{o(z(P.WAITING_LOGIN)),u(!1)},F={};return 0!=+l&&(F.onClose=w),y.useEffect((()=>{const e=100!==r&&(0==+l||1===s);u(e),e&&(0==+l&&(c&&d&&x(a(L.pendingOrderingAndViewPriceBlocked)),c&&!d&&x(a(L.pendingOrderingBlocked)),!c&&d&&x(a(L.pendingViewPriceBlocked)),c||d||x(a(L.pendingOrderingNotBlocked)),h("info"),b("#0288D1")),1==+l&&(x(L.approvedTip),h("success"),b("#2E7D32")),2==+l&&(x(L.rejectedTip),h("warning"),b("#ED6C02")))}),[c,d,l,s,r,a]),g?n.jsx(ye,{sx:{mb:t?"20px":"0"},children:n.jsx(i,{...F,severity:m||"success",sx:{color:"#FFFFFF",backgroundColor:f},children:p})}):null}function be({title:e}){const t=C(T),i=C((({company:e})=>e.customer.role)),a=C((({company:e})=>e.companyInfo)),s=C((({b2bFeatures:e})=>e.masqueradeCompany.companyName)),r=C((({global:e})=>e.cartNumber)),l=U(),c=j(),[d]=F(),{state:{portalStyle:{backgroundColor:g="#FEF9F5"}}}=y.useContext(O),{purchasabilityPermission:u}=C(E),m=!t||u,h=H(g),f=Q(X.OnClickCartButton,((e,t)=>{t()&&(window.location.href=R)}));return y.useEffect((()=>{$()}),[]),n.jsxs(o,{children:[n.jsxs(o,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",height:"70px",alignItems:"center"},children:[n.jsx(o,{component:"h4",sx:{fontSize:"20px",fontWeight:"500",color:h||"#333333"},children:3==+i&&(a?.companyName||s||c("global.B3MainHeader.superAdmin"))}),n.jsxs(o,{sx:{display:"flex",alignItems:"center"},children:[100!==i&&n.jsx(fe,{}),n.jsxs(o,{sx:{marginLeft:"8px"},children:[100===i&&n.jsx(p,{sx:{color:"#333333",fontWeight:400,fontSize:"16px"},onClick:()=>{l("/login")},children:c("global.B3MainHeader.signIn")}),n.jsx(p,{sx:{color:"#000000 !important",fontWeight:"600 !important",fontSize:"1rem !important",textTransform:"uppercase !important",background:"none !important",border:"none !important",padding:"5px !important",":hover":{background:"none !important",border:"none !important"}},onClick:()=>{window.location.href="/"},children:c("global.B3MainHeader.home")}),m&&n.jsxs(p,{sx:{color:"#000000 !important",fontWeight:"600 !important",fontSize:"1rem !important",textTransform:"uppercase !important",background:"none !important",border:"none !important",padding:"5px !important",":hover":{background:"none !important",border:"none !important"}},onClick:f,children:[c("global.B3MainHeader.cart"),r>0?n.jsx(x,{id:"cart-number-icon",sx:{backgroundColor:"#1976D2",minWidth:"21px",height:"20px",color:"#FFFFFF",borderRadius:"64px",fontSize:"12px",fontWeight:"500",lineHeight:"20px",marginLeft:"3px",padding:"0px 6.5px"},children:r}):null]})]})]})]}),e&&n.jsx(o,{component:"h3",sx:{height:"40px",m:"0",fontSize:"34px",fontWeight:400,lineHeight:"42px",display:"flex",alignItems:"end",mb:"24px",mt:d?0:"24px",color:h},children:e}),n.jsx(je,{title:e})]})}function Ce({closeSidebar:e}){const[t]=F(),o=U(),i=K(),a=j(),{dispatch:s}=y.useContext(N),c=C((({company:e})=>e.customer.role)),{state:d}=y.useContext(k),{quoteDetailHasNewMessages:p,registerEnabled:x}=d,f=g().palette.primary.main,b=()=>{o("/register"),s({type:"common",payload:{globalMessageDialog:{open:!1,title:"",message:"",cancelText:"Cancel"}}})},w=n=>{100!==c?(o(n.path),t&&e&&e(!1)):s({type:"common",payload:{globalMessageDialog:{open:!0,title:"Registration",message:"shoppingLists"===n.configKey?"Please create an account, or login to create a shopping list.":"To receive full access to buyer portal, please register. It will take 2 minutes.",cancelText:"Cancel",saveText:x?"Register":"",saveFn:b}}})},v=q(d).filter((e=>e.isMenuItem)),S=e=>i.pathname===e?(W.set("prevPath",e),!0):!(!i.pathname.includes("orderDetail")||e!==("/company-orders"===W.get("prevPath")?"/company-orders":"/orders"))||(!(!i.pathname.includes("shoppingList")||"/shoppingLists"!==e)||!(!i.pathname.includes("/quoteDetail")&&!i.pathname.includes("/quoteDraft")||"/quotes"!==e));return n.jsx(u,{sx:{width:"100%",maxWidth:360,color:f||"info.main","& .MuiListItem-root":{"& .MuiButtonBase-root.Mui-selected":{color:H(f)||"#fff",bgcolor:"primary.main",borderRadius:"4px"},"& .MuiButtonBase-root:hover:not(.Mui-selected)":{bgcolor:A(f,.12),borderRadius:"4px"}}},component:"nav","aria-labelledby":"nested-list-subheader",children:v.map((e=>{if("Quotes"===e.name){const{pathname:t}=i;return n.jsx(m,{disablePadding:!0,children:n.jsx(h,{badgeContent:p&&t.includes("quoteDetail")?"":0,variant:"dot",sx:{width:"100%","& .MuiBadge-badge.MuiBadge-dot":{width:8,height:8,bgcolor:"#FFFFFF",right:14,top:22}},children:n.jsx(r,{onClick:()=>w(e),selected:S(e.path),children:n.jsx(l,{primary:a(e.idLang)})})})},e.path)}return n.jsx(m,{disablePadding:!0,children:n.jsx(r,{onClick:()=>w(e),selected:S(e.path),children:n.jsx(l,{primary:a(e.idLang)})})},e.path)}))})}function we({children:e,title:t}){const i=C(T),[a,s]=y.useState(!1),r=C((({global:e})=>e.cartNumber)),l=C((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),{purchasabilityPermission:c}=C(E),d=!i||c,{state:{portalStyle:{backgroundColor:p="#FEF9F5"}}}=y.useContext(O),x=H(p);return n.jsxs(o,{sx:{height:"70vh",p:"4vw",display:"flex",flexDirection:"column"},children:[n.jsxs(o,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",mb:"4.5vw"},children:[n.jsx(h,{badgeContent:0,color:"secondary",children:n.jsx(Z,{onClick:()=>{s(!0)},sx:{color:x}})}),n.jsx(ie,{}),n.jsxs(o,{sx:{display:"flex",justifyContent:"space-between","& span":{marginRight:"1.5rem"}},children:[d&&n.jsx(h,{badgeContent:r,max:1e3,sx:{"& .MuiBadge-badge":{color:"#FFFFFF",backgroundColor:"#1976D2",fontWeight:400,fontSize:"12px",minWidth:"18px",height:"18px",top:"8px",right:"3px",marginRight:"-0.5rem"}},children:n.jsx(ee,{sx:{color:"rgba(0, 0, 0, 0.54)",marginRight:"-0.5rem"},onClick:()=>{window.location.href=R}})}),n.jsx(o,{sx:{marginLeft:"2px",height:"24px"},children:n.jsx(oe,{})})]})]}),n.jsx(o,{component:"h1",sx:{p:0,m:0,mb:"6vw",fontSize:"34px",fontWeight:"400",color:x||"#263238"},children:t}),n.jsx(ne,{}),n.jsx(o,{sx:{flex:1,display:"flex",paddingBottom:l?"52px":"0"},children:e}),a&&n.jsxs(o,{sx:{height:"100vh",position:"fixed",width:"92vw",zIndex:1e3,left:0,top:0,p:"4vw",backgroundColor:"white",boxShadow:"0px 7px 8px -4px #00000033, 0px 12px 17px 2px #00000024, 0px 5px 22px 4px #0000001f"},children:[n.jsxs(o,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",pb:"4vw"},children:[n.jsx(fe,{closeSidebar:s}),n.jsx(te,{onClick:()=>s(!1)})]}),n.jsx(Ce,{closeSidebar:s})]})]})}const Fe={"/purchased-products":"global.purchasedProducts.title","/orders":"global.orders.title","/company-orders":"global.companyOrders.title"}}}}));
