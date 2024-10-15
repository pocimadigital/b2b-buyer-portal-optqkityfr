import{j as e,B as s,a0 as W,I as te,o as _,a4 as D,a5 as L,W as oe,X as ne,e as M,T as se,y as ie,a6 as ae,a7 as E,a8 as I,a9 as re}from"./mui-CyG7s_nf.js";import{r as m}from"./reactVendor-BAhb8EbJ.js";import{u as k}from"./lang-DxTEvHWx.js";import{j as le,u as x,J as ce,a as S,G as R,K as pe,L as de,M as ue,S as xe,r as z,i as me,N as T,O as B,P as ge,Q as he,p as H,C as q,R as U,k as P,U as $,V as G,W as fe,X as be,Y as Ce,Z as ye,_ as je}from"./react-setup-9NPp_6Sq.js";import"../index.CMPJ-jXT.js";import{u as F,a as V}from"./router-BbCjXwHs.js";import{u as we,C as ve}from"./useCustomCallbacks-D2SU_LXI.js";import{b as Se}from"./b3TriggerCartNumber-BcxQkaQ6.js";import{n as Be}from"./eStyled-B3rIBjaz.js";import{u as ke}from"./useBlockPendingAccountViewPrice-BOl9-MQO.js";import{a as Fe,S as Me,C as De}from"./muiIcon-BfPleEzf.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";const Le=[0,1,2];function K(){const i=k(),[a,r]=m.useState(!1),[t,l]=le("sf-isCloseCompanyCredit",!1,sessionStorage),c=x(({company:d})=>d.customer.role),n=x(({b2bFeatures:d})=>d.masqueradeCompany.isAgenting);m.useEffect(()=>{(async()=>{if(!t&&(Le.includes(+c)||+c==3&&n)){const{companyCreditConfig:{creditHold:u,creditEnabled:h}}=await ce();r(u&&h)}})()},[c,n,t]);const o=()=>{l(!0),r(!1)};return a?e.jsx(s,{sx:{margin:"1rem 0"},children:e.jsx(W,{variant:"outlined",onClose:()=>o(),severity:"warning",children:i("global.companyCredit.alert")})}):null}function Q(){const[i]=S(),a=x(({global:n})=>n.setOpenPageFn),{state:{isCloseGotoBCHome:r}}=m.useContext(R),t=F(),l=()=>{r?window.location.href="/":(t("/"),a==null||a({isOpen:!1,openUrl:""})),window.history.replaceState(null,"",window.location.pathname||"/")},c=i?de:ue;return e.jsx(c,{children:e.jsx(pe,{sx:{color:"#757371"},onClick:l})})}function X(){const{state:{logo:i}}=m.useContext(R),[a]=S();return e.jsx(s,{sx:a?{height:"40px",width:"140px","& li":{height:"40px",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"1rem"},"& img":{maxHeight:"40px"}}:{width:"200px",height:"65px",display:"flex",alignItems:"center","& img":{maxHeight:"65px"}},children:e.jsx(te,{sx:{maxWidth:"200px",cursor:"pointer","& .MuiImageListItem-img":{objectFit:"contain",width:"auto"}},onClick:()=>{window.location.href="/"},children:e.jsx("img",{src:i||xe,alt:"logo"})})})}var A={},Ie=_;Object.defineProperty(A,"__esModule",{value:!0});var J=A.default=void 0,Te=Ie(z()),Re=e;J=A.default=(0,Te.default)((0,Re.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");var N={},Pe=_;Object.defineProperty(N,"__esModule",{value:!0});var Y=N.default=void 0,Ae=Pe(z()),Ne=e;Y=N.default=(0,Ae.default)((0,Ne.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");function Oe({width:i,list:a,config:r,title:t,value:l,handleItemClick:c}){const[n]=S(),[o,d]=m.useState(!1),u=m.useRef(null),h=k(),b=()=>{d(!1)},C=(r==null?void 0:r.name)||"name";return e.jsxs(s,{sx:{width:i||"auto"},children:[e.jsxs(D,{ref:u,onClick:()=>d(!0),sx:{pr:0},children:[e.jsx(L,{primary:t,sx:{"& span":{fontWeight:n?400:700,color:"#333333"}}}),o?e.jsx(Y,{}):e.jsx(J,{})]}),e.jsx(oe,{anchorEl:u.current,open:o,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:"customized-menu",keepMounted:!0,onClose:b,sx:{"& .MuiList-root.MuiList-padding.MuiMenu-list":{pt:n?0:"8px",pb:n?0:"8px"}},children:a.length&&a.map(f=>{const g=f[C],y=l===f.key?"#3385d6":"black";return e.jsx(ne,{sx:{color:y,width:n?"auto":i||"155px"},onClick:()=>{b(),c(f)},children:h("global.button.logout")},g)})})]})}const Ee=[{name:"Log out",key:"logout",type:"button",idLang:"global.button.logout"}];function Z({closeSidebar:i}){const[a]=S(),r=x(({company:o})=>o.customer.firstName),t=x(({company:o})=>o.customer.lastName),l=F(),c=async o=>{o.key==="logout"?l("/login?loginFlag=3"):o.type==="path"&&o.key&&l(o.key),i&&i(!1)},n="".concat(r,"  ").concat(t);return e.jsx(s,{sx:{minWidth:"150px",display:"flex",justifyContent:a?"start":"end",mr:"10px",alignItems:"center",textTransform:"capitalize",color:"#000",textAlign:"right",fontFamily:"Montserrat",fontSize:"1rem",fontStyle:"normal",fontWeight:"600",lineHeight:"normal"},children:e.jsx(Oe,{title:n,handleItemClick:c,list:Ee})})}const We=Be(s)(()=>({"& svg":{color:"#FFFFFF"}}));function _e(i){const{title:a}=i,r=me(),t=k(),l=x(({company:v})=>v.customer.loginType),c=x(({company:v})=>v.customer.role),n=x(({company:v})=>v.companyInfo.status),o=T.get("blockPendingAccountOrderCreation"),[d]=ke(),[u,h]=m.useState(""),[b,C]=m.useState(!1),[f,g]=m.useState("success"),[y,w]=m.useState("#2E7D32"),p=()=>{r(ge(he.WAITING_LOGIN)),C(!1)},j={};return+n!=0&&(j.onClose=p),m.useEffect(()=>{const v=+n==0?!0:l===1,O=c===100?!1:v;C(O),O&&(+n==0&&(o&&d&&h(t(B.pendingOrderingAndViewPriceBlocked)),o&&!d&&h(t(B.pendingOrderingBlocked)),!o&&d&&h(t(B.pendingViewPriceBlocked)),!o&&!d&&h(t(B.pendingOrderingNotBlocked)),g("info"),w("#0288D1")),+n==1&&(h(B.approvedTip),g("success"),w("#2E7D32")),+n==2&&(h(B.rejectedTip),g("warning"),w("#ED6C02")))},[o,d,n,l,c,t]),b?e.jsx(We,{sx:{mb:a?"20px":"0"},children:e.jsx(W,{...j,severity:f||"success",sx:{color:"#FFFFFF",backgroundColor:y},children:u})}):null}function ze({title:i}){const a=x(H),r=x(({company:g})=>g.customer.role),t=x(({company:g})=>g.companyInfo),l=x(({b2bFeatures:g})=>g.masqueradeCompany.companyName),c=x(({global:g})=>g.cartNumber),n=F(),o=k(),[d]=S(),{state:{portalStyle:{backgroundColor:u="#FEF9F5"}}}=m.useContext(q),{purchasabilityPermission:h}=x(U),b=a?h:!0,C=P(u),f=we(ve.OnClickCartButton,(g,y)=>{y()&&(window.location.href=$)});return m.useEffect(()=>{Se()},[]),e.jsxs(s,{children:[e.jsxs(s,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",height:"70px",alignItems:"center"},children:[e.jsx(s,{component:"h4",sx:{fontSize:"20px",fontWeight:"500",color:C||"#333333"},children:+r==3&&((t==null?void 0:t.companyName)||l||o("global.B3MainHeader.superAdmin"))}),e.jsxs(s,{sx:{display:"flex",alignItems:"center"},children:[r!==100&&e.jsx(Z,{}),e.jsxs(s,{sx:{marginLeft:"8px"},children:[r===100&&e.jsx(M,{sx:{color:"#333333",fontWeight:400,fontSize:"16px"},onClick:()=>{n("/login")},children:o("global.B3MainHeader.signIn")}),e.jsx(M,{sx:{color:"#000000 !important",fontWeight:"600 !important",fontSize:"1rem !important",textTransform:"uppercase !important",background:"none !important",border:"none !important",padding:"5px !important",":hover":{background:"none !important",border:"none !important"}},onClick:()=>{window.location.href="/"},children:o("global.B3MainHeader.home")}),b&&e.jsxs(M,{sx:{color:"#000000 !important",fontWeight:"600 !important",fontSize:"1rem !important",textTransform:"uppercase !important",background:"none !important",border:"none !important",padding:"5px !important",":hover":{background:"none !important",border:"none !important"}},onClick:f,children:[o("global.B3MainHeader.cart"),c>0?e.jsx(se,{id:"cart-number-icon",sx:{backgroundColor:"#1976D2",minWidth:"21px",height:"20px",color:"#FFFFFF",borderRadius:"64px",fontSize:"12px",fontWeight:"500",lineHeight:"20px",marginLeft:"3px",padding:"0px 6.5px"},children:c}):null]})]})]})]}),i&&e.jsx(s,{component:"h3",sx:{height:"40px",m:"0",fontSize:"34px",fontWeight:400,lineHeight:"42px",display:"flex",alignItems:"end",mb:"24px",mt:d?0:"24px",color:C},children:i}),e.jsx(_e,{title:i})]})}function ee({closeSidebar:i}){const[a]=S(),r=F(),t=V(),l=k(),{dispatch:c}=m.useContext(G),n=x(({company:p})=>p.customer.role),{state:o}=m.useContext(R),{quoteDetailHasNewMessages:d,registerEnabled:u}=o,b=ie().palette.primary.main,C=()=>{r("/register"),c({type:"common",payload:{globalMessageDialog:{open:!1,title:"",message:"",cancelText:"Cancel"}}})},f=p=>{if(n===100){c({type:"common",payload:{globalMessageDialog:{open:!0,title:"Registration",message:p.configKey==="shoppingLists"?"Please create an account, or login to create a shopping list.":"To receive full access to buyer portal, please register. It will take 2 minutes.",cancelText:"Cancel",saveText:u?"Register":"",saveFn:C}}});return}r(p.path),a&&i&&i(!1)},y=be(o).filter(j=>j.isMenuItem),w=p=>{if(t.pathname===p)return T.set("prevPath",p),!0;if(t.pathname.includes("orderDetail")){const j=T.get("prevPath")==="/company-orders"?"/company-orders":"/orders";if(p===j)return!0}return!!(t.pathname.includes("shoppingList")&&p==="/shoppingLists"||(t.pathname.includes("/quoteDetail")||t.pathname.includes("/quoteDraft"))&&p==="/quotes")};return e.jsx(ae,{sx:{width:"100%",maxWidth:360,color:b||"info.main","& .MuiListItem-root":{"& .MuiButtonBase-root.Mui-selected":{color:P(b)||"#fff",bgcolor:"primary.main",borderRadius:"4px"},"& .MuiButtonBase-root:hover:not(.Mui-selected)":{bgcolor:fe(b,.12),borderRadius:"4px"}}},component:"nav","aria-labelledby":"nested-list-subheader",children:y.map(p=>{if(p.name==="Quotes"){const{pathname:j}=t;return e.jsx(E,{disablePadding:!0,children:e.jsx(I,{badgeContent:d&&j.includes("quoteDetail")?"":0,variant:"dot",sx:{width:"100%","& .MuiBadge-badge.MuiBadge-dot":{width:8,height:8,bgcolor:"#FFFFFF",right:14,top:22}},children:e.jsx(D,{onClick:()=>f(p),selected:w(p.path),children:e.jsx(L,{primary:l(p.idLang)})})})},p.path)}return e.jsx(E,{disablePadding:!0,children:e.jsx(D,{onClick:()=>f(p),selected:w(p.path),children:e.jsx(L,{primary:l(p.idLang)})})},p.path)})})}function He({children:i,title:a}){const r=x(H),[t,l]=m.useState(!1),c=x(({global:C})=>C.cartNumber),n=x(({b2bFeatures:C})=>C.masqueradeCompany.isAgenting),{purchasabilityPermission:o}=x(U),d=r?o:!0,{state:{portalStyle:{backgroundColor:u="#FEF9F5"}}}=m.useContext(q),h=()=>{l(!0)},b=P(u);return e.jsxs(s,{sx:{height:"70vh",p:"4vw",display:"flex",flexDirection:"column"},children:[e.jsxs(s,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",mb:"4.5vw"},children:[e.jsx(I,{badgeContent:0,color:"secondary",children:e.jsx(Fe,{onClick:h,sx:{color:b}})}),e.jsx(X,{}),e.jsxs(s,{sx:{display:"flex",justifyContent:"space-between","& span":{marginRight:"1.5rem"}},children:[d&&e.jsx(I,{badgeContent:c,max:1e3,sx:{"& .MuiBadge-badge":{color:"#FFFFFF",backgroundColor:"#1976D2",fontWeight:400,fontSize:"12px",minWidth:"18px",height:"18px",top:"8px",right:"3px",marginRight:"-0.5rem"}},children:e.jsx(Me,{sx:{color:"rgba(0, 0, 0, 0.54)",marginRight:"-0.5rem"},onClick:()=>{window.location.href=$}})}),e.jsx(s,{sx:{marginLeft:"2px",height:"24px"},children:e.jsx(Q,{})})]})]}),e.jsx(s,{component:"h1",sx:{p:0,m:0,mb:"6vw",fontSize:"34px",fontWeight:"400",color:b||"#263238"},children:a}),e.jsx(K,{}),e.jsx(s,{sx:{flex:1,display:"flex",paddingBottom:n?"52px":"0"},children:i}),t&&e.jsxs(s,{sx:{height:"100vh",position:"fixed",width:"92vw",zIndex:1e3,left:0,top:0,p:"4vw",backgroundColor:"white",boxShadow:"0px 7px 8px -4px #00000033, 0px 12px 17px 2px #00000024, 0px 5px 22px 4px #0000001f"},children:[e.jsxs(s,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",pb:"4vw"},children:[e.jsx(Z,{closeSidebar:l}),e.jsx(De,{onClick:()=>l(!1)})]}),e.jsx(ee,{closeSidebar:l})]})]})}const qe={"/purchased-products":"global.purchasedProducts.title","/orders":"global.orders.title","/company-orders":"global.companyOrders.title"};function pt({children:i}){const[a]=S(),r=re("(min-width:1775px)"),t=V(),[l,c]=m.useState(""),n=k(),o=x(({company:f})=>f.customer.emailAddress),d=x(({company:f})=>f.customer.id),{state:{globalMessageDialog:u},dispatch:h}=m.useContext(G),b=F();m.useEffect(()=>{(!o||!d)&&!Ce(t.pathname)&&b("/login")},[o,d,t]),m.useEffect(()=>{const f=ye.find(g=>g.path===t.pathname);if(f&&t.pathname!=="/quoteDraft"){const g=Object.entries(qe).find(([y])=>y===t.pathname);c(n(g?g[1]:f.idLang))}else c("");h({type:"common",payload:{tipMessage:{msgs:[]}}})},[t]);const C=()=>{h({type:"common",payload:{globalMessageDialog:{open:!1,title:"",message:"",cancelText:"Cancel"}}})};return e.jsxs(s,{children:[a?e.jsx(He,{title:l,children:i}):e.jsxs(s,{id:"app-mainPage-layout",sx:{display:"flex",minHeight:"100vh",margin:"auto",width:r?1775:"100%",minWidth:r?1775:"100%",maxWidth:r?1775:"100%",flexDirection:"row",p:"32px 63px 70px 63px",background:"#FFFFFF"},children:[e.jsx(Q,{}),e.jsxs(s,{sx:{display:"flex",flexDirection:"column",width:"200px",displayPrint:"none"},children:[e.jsx(X,{}),e.jsx(s,{sx:{pt:"24px"},children:e.jsx(ee,{})})]}),e.jsxs(s,{sx:{flex:1,display:"flex",flexDirection:"column",maxWidth:"1450px",width:"100%",p:"0 0px 0px 50px"},children:[e.jsx(ze,{title:l}),e.jsx(K,{}),e.jsx(s,{component:"main",sx:{mt:!a&&!l?"24px":"0"},children:i})]})]}),e.jsx(je,{isOpen:u.open,title:u.title,leftSizeBtn:u.cancelText,rightSizeBtn:u.saveText,handleLeftClick:u.cancelFn||C,handRightClick:u.saveFn,showRightBtn:!!u.saveText,children:e.jsx(s,{sx:{display:"flex",justifyContent:"".concat(a?"center":"start"),width:"".concat(a?"100%":"450px"),height:"100%"},children:u.message})})]})}export{pt as default};
