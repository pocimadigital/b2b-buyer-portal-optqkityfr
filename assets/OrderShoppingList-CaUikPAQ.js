import{o as H,j as t,y as q,B as z,ag as D,X as O,a5 as N}from"./mui-CyG7s_nf.js";import{r as l}from"./reactVendor-BAhb8EbJ.js";import{u as U}from"./lang-DxTEvHWx.js";import{r as W,u as c,p as X,R as $,a as F,_ as V,a2 as Y,W as g,a3 as G,a$ as J,b0 as K,a6 as Q}from"./react-setup-BZAh8p9K.js";import"../index.B1nqUXe0.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";var d={},Z=H;Object.defineProperty(d,"__esModule",{value:!0});var x=d.default=void 0,ee=Z(W()),te=t;x=d.default=(0,ee.default)((0,te.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const s=()=>{};function Le(f){const o=U(),{isOpen:i,dialogTitle:v=o("global.orderShoppingList.confirm"),confirmText:L=o("global.orderShoppingList.ok"),onClose:S=s,onConfirm:b=s,onCreate:C=s,isLoading:p=!1,setLoading:m=s}=f,r=c(X),B=c(({company:e})=>e.customer.role),j=c($),k=q(),[I]=F(),u=k.palette.primary.main,[y,a]=l.useState([]),[n,R]=l.useState("");l.useEffect(()=>{if(!i)return;(async()=>{m(!0),a([]);try{const{edges:h=[]}=r?await J():await K({channelId:Q});if(!r)a(h);else{const{submitShoppingListPermission:P}=j,A=h.filter(E=>E.node.status===+(P?30:0));a(A)}}finally{m(!1)}})()},[r,i,B]);const _=()=>{S()},w=()=>{b(n)},M=()=>{C()},T=e=>()=>{R(e.node.id)};return t.jsx(V,{fullWidth:!0,isOpen:i,title:v,disabledSaveBtn:!n,handleLeftClick:_,handRightClick:w,rightSizeBtn:L,children:t.jsxs(Y,{isSpinning:p,isFlex:!1,children:[t.jsx(z,{sx:I?{height:"430px"}:{padding:p?"4rem 0":"unset",maxHeight:"430PX"},children:t.jsx(D,{sx:{maxHeight:"400px",width:"100%",overflowY:"auto"},children:y.map(e=>t.jsx(O,{className:n===e.node.id?"active":"",onClick:T(e),sx:{"&:hover":{backgroundColor:g(u,.12)},"&.active":{backgroundColor:g(u,.12)}},children:t.jsx(N,{children:e.node.name})},e.node.id))})}),t.jsxs(G,{variant:"text",onClick:M,sx:{textTransform:"none"},children:[t.jsx(x,{sx:{fontSize:"17px"}})," ".concat(o("global.orderShoppingList.createNew"))]})]})})}export{Le as default};
