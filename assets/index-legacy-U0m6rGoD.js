System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-BjZvYiUe.js","./B3Filter-legacy-CKrruyC8.js","../index-legacy.BO9OzWqx.js","./EditOutlined-legacy-KHG0uUHj.js","./form-legacy-CAo5v63e.js","./B3CustomForm-legacy-CPPlGO79.js","./ShoppingStatus-legacy-CTi8zeor.js","./eStyled-legacy-C5ZTaXoz.js","./DeleteOutlined-legacy-BevBU1D3.js","./lodashEs-legacy-Da1qF4L1.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js","./B3FilterMore-legacy-BD2fwYYC.js","./B3FilterSearch-legacy-CGgobOdN.js"],(function(e,s){"use strict";var t,i,n,a,o,l,r,c,p,d,u,h,g,m,f,x,y,j,L,b,S,C,B,w,k,v,P,O,E,A,F,I,z,R,D,N,V,W,H,_,M,q,T,U,$,J,K;return{setters:[e=>{t=e.j,i=e.o,n=e.T,a=e.B,o=e.K,l=e.ab,r=e.q},e=>{c=e.r},e=>{p=e.u},e=>{d=e.u,u=e.R,h=e._,g=e.aZ,m=e.a_,f=e.bK,x=e.bL,y=e.a6,j=e.bM,L=e.bN,b=e.a5,S=e.r,C=e.aA,B=e.ak,w=e.a3,k=e.a,v=e.G,P=e.p,O=e.a2,E=e.ab,A=e.bp,F=e.a$,I=e.b0,z=e.bO,R=e.bP},e=>{D=e.B},null,e=>{N=e.d,V=e.a,W=e.u},e=>{H=e.u},e=>{_=e.B},e=>{M=e.g,q=e.S,T=e.a},e=>{U=e.n},e=>{$=e.d},e=>{J=e.i},e=>{K=e.u},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const[e,i]=c.useState(!1),[n,o]=c.useState(!1),[l,r]=c.useState(null),[g,m]=c.useState([]),[f]=k(),[x]=V(),j=p(),L=d((({b2bFeatures:e})=>e.masqueradeCompany.id)),{state:{openAPPParams:S},dispatch:C}=c.useContext(v),B=d(P),w=d((({company:e})=>e.companyInfo.id)),{shoppingListActionsPermission:N,submitShoppingListPermission:H}=d(u);c.useEffect((()=>{(async()=>{const e=w||L;let s={};B&&(s=await A(+e,1));const t=T(s,H),i=JSON.parse(JSON.stringify(t));i.forEach((e=>(e.label=j(e.idLang),"status"===e.name&&e.options?.map((e=>(e.label=j(e.idLang),e))),e))),m(i)})(),S.shoppingListBtn&&C({type:"common",payload:{openAPPParams:{quoteBtn:"",shoppingListBtn:""}}})}),[]);const _=W(),M={isEnabled:!B||N,customLabel:j("shoppingLists.createNew"),customButtomStyle:{fontSize:"15px",fontWeight:"500",width:"140px",padding:"0"}},q=H?"":[0,40],U={search:"",createdBy:"",status:q,isDefault:!0},[$,J]=c.useState(U),K=c.useRef(null),G=()=>{x.current?.refresh()},X=e=>{K.current?.handleOpenAddEditShoppingListsClick("edit",e)},Z=e=>{K.current?.handleOpenAddEditShoppingListsClick("dup",e)},Q=e=>{r(e),o(!0)},Y=()=>{o(!1)};return t.jsx(O,{isSpinning:e,children:t.jsxs(a,{sx:{display:"flex",flexDirection:"column",flex:1},children:[t.jsx(D,{showB3FilterMoreIcon:B,fiterMoreInfo:g,handleChange:(e,s)=>{if("search"===e){const e={...U,search:s};J(e)}},handleFilterChange:e=>{const{status:s}=e,t=""===s||99===s?q:s,i={...U,createdBy:e.createdBy,status:t,isDefault:""===s};J(i)},customButtomConfig:M,handleFilterCustomButtomClick:()=>{K.current?.handleOpenAddEditShoppingListsClick("add")}}),t.jsx(E,{columnItems:[],ref:x,rowsPerPageOptions:[12,24,36],getRequestList:async e=>{const{edges:s,totalCount:t}=B?await F(e):await I({offset:e.offset,first:e.first,search:e.search,channelId:y});return{edges:s,totalCount:t}},searchParams:$,isCustomRender:!0,itemXs:_?3:4,requestLoading:i,renderItem:e=>t.jsx(ie,{item:e,isPermissions:!B||N,onEdit:X,onDelete:Q,onCopy:Z,isB2BUser:B},e.id||"")}),t.jsx(s,{renderList:G,ref:K,isB2BUser:B}),t.jsx(h,{isOpen:n,title:j("shoppingLists.deleteShoppingList"),leftSizeBtn:j("shoppingLists.cancel"),rightSizeBtn:j("shoppingLists.delete"),handleLeftClick:Y,handRightClick:async()=>{if(l)try{i(!0),Y();const e=l?.id||0;B?await z(e):await R(e),b.success(j("shoppingLists.deleteSuccess"))}finally{i(!1),G()}},row:l,rightStyleBtn:{color:"#D32F2F"},isShowBordered:!1,children:t.jsx(a,{sx:{display:"flex",justifyContent:f?"center%":"start",width:f?"100%":"450px",height:"100%"},children:j("shoppingLists.confirmDelete")})})]})})}));const s=c.forwardRef((function({renderList:e,isB2BUser:s},i){const n=d(u),[a,o]=c.useState(!1),[l,r]=c.useState(""),[S,C]=c.useState(null),[B,w]=c.useState(!1),[k,v]=c.useState([]),P=p(),{control:O,handleSubmit:E,getValues:A,formState:{errors:F},clearErrors:I,setValue:z}=H({mode:"onSubmit"});c.useEffect((()=>{a&&"add"!==l&&S&&k.forEach((e=>{z(e.name,S[e.name])}))}),[S,a,z,l,k]);const R=()=>{k.forEach((e=>{z(e.name,"")})),I(),o(!1)},D=(e,s)=>{const t=M(P);v(t),s&&C(s),r(e),o(!0)};return c.useImperativeHandle(i,(()=>({handleOpenAddEditShoppingListsClick:D}))),t.jsx(h,{isOpen:a,title:P("edit"===l?"shoppingLists.edit":"add"===l?"shoppingLists.createNewShoppingList":"shoppingLists.duplicateShoppingList"),leftSizeBtn:P("shoppingLists.cancel"),rightSizeBtn:P("shoppingLists.save"),handleLeftClick:R,handRightClick:()=>{E((async t=>{w(!0);try{const i={...t};let a=s?g:m,o=P("shoppingLists.addSuccess");if("edit"===l)s?(a=f,i.status=S?.status):(a=x,i.channelId=y),i.id=S?.id||0,o=P("shoppingLists.updateSuccess");else if("dup"===l)a=s?j:L,i.sampleShoppingListId=S?.id||0,o=P("shoppingLists.duplicateSuccess");else if("add"===l)if(s){const{submitShoppingListPermission:e}=n;i.status=e?30:0}else i.channelId=y;await a(i),R(),b.success(o),e()}finally{w(!1)}}))()},loading:B,children:t.jsx(_,{formFields:k,errors:F,control:O,getValues:A,setValue:z})})}));var G={},X=i;Object.defineProperty(G,"__esModule",{value:!0});var Z=G.default=void 0,Q=X(S()),Y=t;Z=G.default=(0,Q.default)((0,Y.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy");const ee=U("div")((()=>({display:"flex",alignItems:"center",justifyContent:"space-between"}))),se=U(n)((()=>({fontWeight:"500",paddingRight:"5px",color:"#000000"}))),te=U(a)((()=>({display:"flex",alignItems:"center",justifyContent:"start"})));function ie(e){const{item:s,onEdit:i,onDelete:h,onCopy:g,isPermissions:m,isB2BUser:f}=e,x=p(),[y,j]=c.useState(!0),L=d((({company:e})=>e.permissions)),{submitShoppingListPermission:b,approveShoppingListPermission:S}=d(u),k=K();return c.useEffect((()=>{if(f){const e=L.find((e=>"deplicate_shopping_list"===e.code)),t=[];if(e&&!J(e)){const i=e.permissionLevel,n=s?.isOwner||!1;t.push({permissionType:"shoppingListActionsPermission",permissionLevel:1===i&&n?i:2})}const{shoppingListActionsPermission:i}=C(t);j(i)}}),[s,f]),t.jsx(o,{sx:{"& .b2b-card-content":{paddingBottom:"16px",minHeight:"300px",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"#FAFAFA",position:"relative",paddingTop:"45px"}},children:t.jsxs(l,{className:"b2b-card-content",sx:{color:"#313440"},children:[t.jsx(n,{variant:"h5",sx:{color:"rgba(0, 0, 0)",wordBreak:"break-all",position:"absolute",top:"10px",lineHeight:"26px",width:"88%",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"},children:s.name}),t.jsxs(a,{sx:{pt:"20px",pb:"20px"},children:[f&&(b||S&&s.approvedFlag)&&t.jsx(a,{sx:{pb:"25px"},children:t.jsx(q,{status:s.status})}),t.jsx(a,{sx:{width:"100%",lineHeight:"22px",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",marginTop:"5px"},children:s.description}),f&&t.jsxs(te,{children:[t.jsx(se,{children:x("shoppingLists.card.createdBy")}),s.customerInfo.firstName," ",s.customerInfo.lastName]}),t.jsxs(te,{children:[t.jsx(se,{children:x("shoppingLists.card.products")}),s.products.totalCount]}),t.jsxs(te,{children:[t.jsx(se,{children:x("shoppingLists.card.lastActivity")}),`${B(s.updatedAt)}`]})]}),t.jsxs(ee,{children:[t.jsx(w,{sx:{m:"0 0 0 -8px",minWidth:0,padding:"10px !important",justifyContent:"start",backgroundColor:"transparent !important",color:"#EA617C !important",textTransform:"uppercase !important",border:"none !important"},variant:"text",onClick:()=>k(`/shoppingList/${s.id}`,{state:{from:"shoppingList"}}),children:x("shoppingLists.card.view")}),t.jsxs(a,{sx:{display:m?"block":"none"},children:[(v=s.status,!(b?30!==v&&0!==v:40===v)&&y&&t.jsx(r,{"aria-label":"edit",size:"medium",sx:{marginRight:"8px"},onClick:()=>{i(s)},children:t.jsx(N,{fontSize:"inherit"})})),t.jsx(r,{"aria-label":"duplicate",size:"medium",sx:{marginRight:"8px"},onClick:()=>{g(s)},children:t.jsx(Z,{fontSize:"inherit"})}),!(e=>!!b&&20!==e&&30!==e)(s.status)&&y&&t.jsx(r,{"aria-label":"delete",size:"medium",onClick:()=>{h(s)},children:t.jsx($,{fontSize:"inherit"})})]})]})]})},s.id);var v}}}}));
