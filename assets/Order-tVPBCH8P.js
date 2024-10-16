import{y as v,j as n,K as ee,ab as te,B,T as S}from"./mui-CyG7s_nf.js";import{r as g}from"./reactVendor-BAhb8EbJ.js";import{u as re}from"./lang-DxTEvHWx.js";import{B as se}from"./B3Filter-kbuSUpPx.js";import{aa as ae,u as y,p as F,am as k,ak as D,aJ as ne,a2 as oe,ab as le}from"./react-setup-BQykMGtr.js";import"../index.BdPALFw3.js";import{O as P,f as de,d as ce,e as ie,o as ue,g as me,a as ye}from"./OrderStatus-D4uyFmqB.js";import{u as pe}from"./useSort-Cu2YrCwH.js";import{n as fe}from"./eStyled-B3rIBjaz.js";import{u as q}from"./router-BbCjXwHs.js";const w="orderId",A={orderId:"bcOrderId",poNumber:"poNumber",totalIncTax:"totalIncTax",status:"status",placedby:"placedBy",createdAt:"createdAt"},O={q:"",companyId:"",beginDateAt:null,endDateAt:null,companyName:"",orderBy:"-".concat(A[w]),createdBy:"",orderNumber:"",poNumber:"",isShowMy:0},be={beginDateAt:null,endDateAt:null,orderBy:"-".concat(A[w]),createdBy:"",q:""},ge=(r,s,l,i,d,m=[])=>{var t;const u=m.filter(o=>o.statusCode!=="0"&&o.statusCode!=="1"),p=((t=d==null?void 0:d.createdByUser)==null?void 0:t.results.map(o=>({createdBy:"".concat(o.firstName," ").concat(o.lastName," (").concat(o.email,")")})))||[],x=[{name:"company",label:"Company",required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small",idLang:"orders.company"},{name:"orderStatus",label:"Order status",required:!1,default:"",fieldType:"dropdown",options:u,replaceOptions:{label:"customLabel",value:"customLabel"},xs:12,variant:"outlined",size:"small",idLang:"orders.orderStatus"},{name:"PlacedBy",label:"Placed by",required:!1,default:"",fieldType:"dropdown",options:p,replaceOptions:{label:"createdBy",value:"createdBy"},xs:12,variant:"outlined",size:"small",idLang:"orders.placedBy"}],f=r&&!(+s==3&&!i);return x.filter(o=>!((!r||f)&&!l&&(o.name==="company"||o.name==="PlacedBy")||+s==3&&!i&&o.name==="PlacedBy"||(r||+s===ae.SUPER_ADMIN&&i)&&l&&o.name==="company"))},xe=(r,s)=>(s&&(O.isShowMy=r?0:1),s?O:be),he=(r,s)=>{var l;return((l=s.find(i=>i.systemLabel===r))==null?void 0:l.customLabel)||""},Ie=fe("div")(()=>({display:"flex",alignItems:"center","&.between-flex":{justifyContent:"space-between"}}));function Se({item:r,allTotal:s,filterData:l,index:i=0,isCompanyOrder:d}){const m=v(),u=y(F),p=y(({company:t})=>t.customer),x=q(),f=t=>{x("/orderDetail/".concat(t.orderId),{state:{currentIndex:i||0,searchParams:l,totalCount:s,isCompanyOrder:d}})},N=t=>u?"by ".concat(t.firstName," ").concat(t.lastName):"by ".concat(p.firstName," ").concat(p.lastName);return n.jsx(ee,{children:n.jsxs(te,{sx:{color:"rgba(0, 0, 0, 0.6)"},onClick:()=>f(r),children:[n.jsxs(Ie,{className:"between-flex",children:[n.jsxs(B,{sx:{display:"flex",alignItems:"center"},children:[n.jsx(S,{variant:"h5",sx:{color:"rgba(0, 0, 0, 0.87)"},children:"# ".concat(r.orderId)}),n.jsx(S,{sx:{ml:1},variant:"body2",children:r.poNumber?r.poNumber:"–"})]}),n.jsx(B,{children:n.jsx(P,{code:r.status})})]}),n.jsx(S,{variant:"h6",sx:{marginBottom:m.spacing(2.5),mt:m.spacing(1.5),minHeight:"1.43em"},children:k(r.totalIncTax)}),n.jsxs(B,{sx:{display:"flex",justifyContent:"space-between"},children:[n.jsx(S,{variant:"body2",sx:{fontWeight:"normal",marginRight:m.spacing(2)},children:N(r)}),n.jsx(S,{children:"".concat(D(r.createdAt))})]})]})},r.orderId)}function Fe({isCompanyOrder:r=!1}){const s=re(),l=y(F),i=y(({company:e})=>e.companyInfo.id),d=y(({company:e})=>e.customer.role),m=y(({b2bFeatures:e})=>e.masqueradeCompany.id),u=y(({b2bFeatures:e})=>e.masqueradeCompany.isAgenting),[p,x]=g.useState(!1),[f,N]=g.useState(0),[t,o]=g.useState(null),[R,M]=g.useState([]),[j,E]=g.useState([]),[K,V,z]=pe(A,w,t,o);g.useEffect(()=>{const e=xe(r,l);if(o(e),d===100)return;(async()=>{const c=i||m;let b={};l&&r&&(b=await de(+c,0));const h=l?await ce():await ie(),Y=ge(l,d,r,u,b,h);E(h);const Z=Y.map(I=>{const T=I;return T.label=s(I.idLang),I.name==="orderStatus"&&(T.options=I.options.map(C=>{const $=ue[C.systemLabel],L=C;return L.customLabel=s($)===L.systemLabel?L.customLabel:s($),C})),I});M(Z)})()},[]);const J=async e=>{const{edges:a=[],totalCount:c}=l?await me(e):await ye(e);return N(c),{edges:a,totalCount:c}},W=q(),H=(e,a)=>{W("/orderDetail/".concat(e.orderId),{state:{currentIndex:a,searchParams:t,totalCount:f,isCompanyOrder:r,beginDateAt:t==null?void 0:t.beginDateAt,endDateAt:t==null?void 0:t.endDateAt}})},U=[{key:"orderId",title:s("orders.order"),width:"10%",isSortable:!0},{key:"poNumber",title:s("orders.poReference"),render:e=>n.jsx(B,{children:e.poNumber?e.poNumber:"–"}),width:"10%",isSortable:!0},{key:"totalIncTax",title:s("orders.grandTotal"),render:e=>e!=null&&e.money?"".concat(ne(JSON.parse(JSON.parse(e.money)),e.totalIncTax)):"".concat(k(e.totalIncTax)),width:"8%",style:{textAlign:"right"},isSortable:!0},{key:"status",title:s("orders.orderStatus"),render:e=>n.jsx(P,{text:he(e.status,j),code:e.status}),width:"10%",isSortable:!0},{key:"placedby",title:s("orders.placedBy"),render:e=>"".concat(e.firstName," ").concat(e.lastName),width:"10%",isSortable:!0},{key:"createdAt",title:s("orders.createdOn"),render:e=>"".concat(D(+e.createdAt)),width:"10%",isSortable:!0},{key:"companyId",title:s("orders.company"),render:e=>"".concat((e==null?void 0:e.companyName)||""),width:"10%"}],_=()=>U.filter(a=>{const{key:c}=a;return!((!l||+d==3&&!u)&&c==="placedby"||c==="companyId"&&l&&(+d!=3||u)||(c==="companyId"||c==="placedby")&&!(+d==3&&!u)&&!r)}),G=(e,a)=>{e==="search"&&o({...t,q:a})},Q=e=>{let a=(e==null?void 0:e.orderStatus)||"";if(a){const b=j.find(h=>h.customLabel===a||h.systemLabel===a);a=(b==null?void 0:b.systemLabel)||a}const c={beginDateAt:(e==null?void 0:e.startValue)||null,endDateAt:(e==null?void 0:e.endValue)||null,createdBy:(e==null?void 0:e.PlacedBy)||"",statusCode:a,companyName:(e==null?void 0:e.company)||""};o({...t,...c})},X=_();return n.jsx(oe,{isSpinning:p,children:n.jsxs(B,{sx:{display:"flex",flexDirection:"column",flex:1},children:[n.jsx(se,{startPicker:{isEnabled:!0,label:s("orders.from"),defaultValue:(t==null?void 0:t.beginDateAt)||null,pickerKey:"start"},endPicker:{isEnabled:!0,label:s("orders.to"),defaultValue:(t==null?void 0:t.endDateAt)||null,pickerKey:"end"},fiterMoreInfo:R,handleChange:G,handleFilterChange:Q}),n.jsx(le,{columnItems:X,rowsPerPageOptions:[10,20,30],getRequestList:J,searchParams:t||{},isCustomRender:!1,requestLoading:x,tableKey:"orderId",sortDirection:V,orderBy:z,sortByFn:K,renderItem:(e,a)=>n.jsx(Se,{item:e,index:a,allTotal:f,filterData:t,isCompanyOrder:r},e.orderId),onClickRow:(e,a)=>{a!==void 0&&H(e,a)},hover:!0})]})})}export{Fe as O};
