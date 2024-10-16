System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./B3Filter-legacy-0NKUA9Dj.js","./react-setup-legacy-B96NOjlG.js","../index-legacy.CnI8nIW6.js","./OrderStatus-legacy-BNbLeoes.js","./useSort-legacy-CfCrn6Eb.js","./eStyled-legacy-C5ZTaXoz.js","./router-legacy-CCJEjNy7.js"],(function(e,t){"use strict";var a,r,s,n,l,o,d,i,c,u,m,y,p,b,x,g,f,h,j,I,S,N,w,B,C,A,D;return{setters:[e=>{a=e.y,r=e.j,s=e.K,n=e.ab,l=e.B,o=e.T},e=>{d=e.r},e=>{i=e.u},e=>{c=e.B},e=>{u=e.aa,m=e.u,y=e.p,p=e.am,b=e.ak,x=e.aJ,g=e.a2,f=e.ab},null,e=>{h=e.O,j=e.f,I=e.d,S=e.e,N=e.o,w=e.g,B=e.a},e=>{C=e.u},e=>{A=e.n},e=>{D=e.u}],execute:function(){e("O",(function({isCompanyOrder:e=!1}){const a=i(),s=m(y),n=m((({company:e})=>e.companyInfo.id)),o=m((({company:e})=>e.customer.role)),u=m((({b2bFeatures:e})=>e.masqueradeCompany.id)),A=m((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),[L,O]=d.useState(!1),[T,R]=d.useState(0),[F,V]=d.useState(null),[E,K]=d.useState([]),[M,z]=d.useState([]),[J,U,_]=C($,t,F,V);d.useEffect((()=>{const t=v(e,s);V(t),100!==o&&(async()=>{const t=n||u;let r={};s&&e&&(r=await j(+t,0));const l=s?await I():await S(),d=k(s,o,e,A,r,l);z(l);const i=d.map((e=>{const t=e;return t.label=a(e.idLang),"orderStatus"===e.name&&(t.options=e.options.map((e=>{const t=N[e.systemLabel],r=e;return r.customLabel=a(t)===r.systemLabel?r.customLabel:a(t),e}))),e}));K(i)})()}),[]);const H=D(),W=[{key:"orderId",title:a("orders.order"),width:"10%",isSortable:!0},{key:"poNumber",title:a("orders.poReference"),render:e=>r.jsx(l,{children:e.poNumber?e.poNumber:"–"}),width:"10%",isSortable:!0},{key:"totalIncTax",title:a("orders.grandTotal"),render:e=>e?.money?`${x(JSON.parse(JSON.parse(e.money)),e.totalIncTax)}`:`${p(e.totalIncTax)}`,width:"8%",style:{textAlign:"right"},isSortable:!0},{key:"status",title:a("orders.orderStatus"),render:e=>r.jsx(h,{text:P(e.status,M),code:e.status}),width:"10%",isSortable:!0},{key:"placedby",title:a("orders.placedBy"),render:e=>`${e.firstName} ${e.lastName}`,width:"10%",isSortable:!0},{key:"createdAt",title:a("orders.createdOn"),render:e=>`${b(+e.createdAt)}`,width:"10%",isSortable:!0},{key:"companyId",title:a("orders.company"),render:e=>`${e?.companyName||""}`,width:"10%"}],G=W.filter((t=>{const{key:a}=t;return!((!s||3==+o&&!A)&&"placedby"===a||"companyId"===a&&s&&(3!=+o||A)||!("companyId"!==a&&"placedby"!==a||3==+o&&!A||e))}));return r.jsx(g,{isSpinning:L,children:r.jsxs(l,{sx:{display:"flex",flexDirection:"column",flex:1},children:[r.jsx(c,{startPicker:{isEnabled:!0,label:a("orders.from"),defaultValue:F?.beginDateAt||null,pickerKey:"start"},endPicker:{isEnabled:!0,label:a("orders.to"),defaultValue:F?.endDateAt||null,pickerKey:"end"},fiterMoreInfo:E,handleChange:(e,t)=>{"search"===e&&V({...F,q:t})},handleFilterChange:e=>{let t=e?.orderStatus||"";if(t){const e=M.find((e=>e.customLabel===t||e.systemLabel===t));t=e?.systemLabel||t}const a={beginDateAt:e?.startValue||null,endDateAt:e?.endValue||null,createdBy:e?.PlacedBy||"",statusCode:t,companyName:e?.company||""};V({...F,...a})}}),r.jsx(f,{columnItems:G,rowsPerPageOptions:[10,20,30],getRequestList:async e=>{const{edges:t=[],totalCount:a}=s?await w(e):await B(e);return R(a),{edges:t,totalCount:a}},searchParams:F||{},isCustomRender:!1,requestLoading:O,tableKey:"orderId",sortDirection:U,orderBy:_,sortByFn:J,renderItem:(t,a)=>r.jsx(q,{item:t,index:a,allTotal:T,filterData:F,isCompanyOrder:e},t.orderId),onClickRow:(t,a)=>{void 0!==a&&((t,a)=>{H(`/orderDetail/${t.orderId}`,{state:{currentIndex:a,searchParams:F,totalCount:T,isCompanyOrder:e,beginDateAt:F?.beginDateAt,endDateAt:F?.endDateAt}})})(t,a)},hover:!0})]})})}));const t="orderId",$={orderId:"bcOrderId",poNumber:"poNumber",totalIncTax:"totalIncTax",status:"status",placedby:"placedBy",createdAt:"createdAt"},L={q:"",companyId:"",beginDateAt:null,endDateAt:null,companyName:"",orderBy:`-${$[t]}`,createdBy:"",orderNumber:"",poNumber:"",isShowMy:0},O={beginDateAt:null,endDateAt:null,orderBy:`-${$[t]}`,createdBy:"",q:""},k=(e,t,a,r,s,n=[])=>{const l=n.filter((e=>"0"!==e.statusCode&&"1"!==e.statusCode)),o=s?.createdByUser?.results.map((e=>({createdBy:`${e.firstName} ${e.lastName} (${e.email})`})))||[],d=e&&!(3==+t&&!r);return[{name:"company",label:"Company",required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small",idLang:"orders.company"},{name:"orderStatus",label:"Order status",required:!1,default:"",fieldType:"dropdown",options:l,replaceOptions:{label:"customLabel",value:"customLabel"},xs:12,variant:"outlined",size:"small",idLang:"orders.orderStatus"},{name:"PlacedBy",label:"Placed by",required:!1,default:"",fieldType:"dropdown",options:o,replaceOptions:{label:"createdBy",value:"createdBy"},xs:12,variant:"outlined",size:"small",idLang:"orders.placedBy"}].filter((s=>!(!(e&&!d||a||"company"!==s.name&&"PlacedBy"!==s.name)||3==+t&&!r&&"PlacedBy"===s.name||(e||+t===u.SUPER_ADMIN&&r)&&a&&"company"===s.name)))},v=(e,t)=>(t&&(L.isShowMy=e?0:1),t?L:O),P=(e,t)=>t.find((t=>t.systemLabel===e))?.customLabel||"",T=A("div")((()=>({display:"flex",alignItems:"center","&.between-flex":{justifyContent:"space-between"}})));function q({item:e,allTotal:t,filterData:d,index:i=0,isCompanyOrder:c}){const u=a(),x=m(y),g=m((({company:e})=>e.customer)),f=D();return r.jsx(s,{children:r.jsxs(n,{sx:{color:"rgba(0, 0, 0, 0.6)"},onClick:()=>{f(`/orderDetail/${e.orderId}`,{state:{currentIndex:i||0,searchParams:d,totalCount:t,isCompanyOrder:c}})},children:[r.jsxs(T,{className:"between-flex",children:[r.jsxs(l,{sx:{display:"flex",alignItems:"center"},children:[r.jsx(o,{variant:"h5",sx:{color:"rgba(0, 0, 0, 0.87)"},children:`# ${e.orderId}`}),r.jsx(o,{sx:{ml:1},variant:"body2",children:e.poNumber?e.poNumber:"–"})]}),r.jsx(l,{children:r.jsx(h,{code:e.status})})]}),r.jsx(o,{variant:"h6",sx:{marginBottom:u.spacing(2.5),mt:u.spacing(1.5),minHeight:"1.43em"},children:p(e.totalIncTax)}),r.jsxs(l,{sx:{display:"flex",justifyContent:"space-between"},children:[r.jsx(o,{variant:"body2",sx:{fontWeight:"normal",marginRight:u.spacing(2)},children:(j=e,x?`by ${j.firstName} ${j.lastName}`:`by ${g.firstName} ${g.lastName}`)}),r.jsx(o,{children:`${b(e.createdAt)}`})]})]})},e.orderId);var j}}}}));