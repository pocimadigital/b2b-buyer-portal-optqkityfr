System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-DOXMQWD2.js","../index-legacy.nkcMM0YS.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,l){"use strict";var n,a,t,s,i,o,r,c,d,u,g,h,j,x,y,p,f,m,v,S,b;return{setters:[e=>{n=e.o,a=e.j,t=e.y,s=e.B,i=e.ag,o=e.X,r=e.a5},e=>{c=e.r},e=>{d=e.u},e=>{u=e.r,g=e.u,h=e.p,j=e.R,x=e.a,y=e._,p=e.a2,f=e.W,m=e.a3,v=e.a$,S=e.b0,b=e.a6},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(e){const l=d(),{isOpen:n,dialogTitle:u=l("global.orderShoppingList.confirm"),confirmText:C=l("global.orderShoppingList.ok"),onClose:L=z,onConfirm:w=z,onCreate:B=z,isLoading:H=!1,setLoading:O=z}=e,P=g(h),R=g((({company:e})=>e.customer.role)),T=g(j),_=t(),[E]=x(),F=_.palette.primary.main,[I,M]=c.useState([]),[N,V]=c.useState("");c.useEffect((()=>{n&&(async()=>{O(!0),M([]);try{const{edges:e=[]}=P?await v():await S({channelId:b});if(P){const{submitShoppingListPermission:l}=T,n=e.filter((e=>e.node.status===+(l?30:0)));M(n)}else M(e)}finally{O(!1)}})()}),[P,n,R]);const W=e=>()=>{V(e.node.id)};return a.jsx(y,{fullWidth:!0,isOpen:n,title:u,disabledSaveBtn:!N,handleLeftClick:()=>{L()},handRightClick:()=>{w(N)},rightSizeBtn:C,children:a.jsxs(p,{isSpinning:H,isFlex:!1,children:[a.jsx(s,{sx:E?{height:"430px"}:{padding:H?"4rem 0":"unset",maxHeight:"430PX"},children:a.jsx(i,{sx:{maxHeight:"400px",width:"100%",overflowY:"auto"},children:I.map((e=>a.jsx(o,{className:N===e.node.id?"active":"",onClick:W(e),sx:{"&:hover":{backgroundColor:f(F,.12)},"&.active":{backgroundColor:f(F,.12)}},children:a.jsx(r,{children:e.node.name})},e.node.id)))})}),a.jsxs(m,{variant:"text",onClick:()=>{B()},sx:{textTransform:"none"},children:[a.jsx(k,{sx:{fontSize:"17px"}}),` ${l("global.orderShoppingList.createNew")}`]})]})})}));var l={},C=n;Object.defineProperty(l,"__esModule",{value:!0});var k=l.default=void 0,L=C(u()),w=a;k=l.default=(0,L.default)((0,w.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const z=()=>{}}}}));
