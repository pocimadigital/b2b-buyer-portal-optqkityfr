System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./lodashEs-legacy-Da1qF4L1.js","./react-setup-legacy-CoXV7Ff0.js","../index-legacy.4Oc0YHSS.js","./b3Logger-legacy-C5y5ZQF8.js","./payment-legacy-BMuNGg2i.js","./useSort-legacy-CfCrn6Eb.js","./B3Filter-legacy-BUnvGBql.js","./MoreHoriz-legacy--s1LD-yV.js","./router-legacy-CCJEjNy7.js","./resizable-legacy-C6O1_ngX.js","./pdfobject-legacy--Wju3gy4.js","./eStyled-legacy-C5ZTaXoz.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3checkout-legacy-0uOYthUf.js","./B3FilterMore-legacy-rakJrutO.js","./form-legacy-CAo5v63e.js","./B3CustomForm-legacy-B4W3KTQE.js","./B3FilterSearch-legacy-BgozuzF1.js"],(function(e,t){"use strict";var n,i,o,a,r,s,l,c,d,u,p,x,h,m,y,f,g,v,b,j,w,C,k,S,D,B,I,A,P,F,R,T,L,E,O,$,z,N,H,V,W,q,_,M,U,G,K,X;return{setters:[e=>{n=e.s,i=e.W,o=e.j,a=e.q,r=e.X,s=e.G,l=e.B,c=e.T,d=e.e,u=e.K,p=e.ab,x=e.g,h=e.ad},e=>{m=e.r},e=>{y=e.u},e=>{f=e.c},e=>{g=e.u,v=e.R,b=e.a5,j=e.a,w=e.ai,C=e.a9,k=e._,S=e.a2,D=e.aj,B=e.ak,I=e.al,A=e.am,P=e.an,F=e.G,R=e.ab,T=e.ao},null,e=>{L=e.b},e=>{E=e.i,O=e.g,$=e.a,z=e.b,N=e.e,H=e.c,V=e.d},e=>{W=e.u},e=>{q=e.B},e=>{_=e.d},e=>{M=e.u,U=e.a},e=>{G=e.R},e=>{K=e.P},e=>{X=e.n},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const e=(new Date).getTime(),t=y(),n=g((({company:e})=>e.customer.role)),i=g((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),{invoicePayPermission:a,purchasabilityPermission:r}=g(v),s=M(),[u]=j(),p=m.useRef(null),{decimal_places:C=2}=P(),[k,D]=m.useState(!1),[I,E]=m.useState(!1),[O,$]=m.useState(""),[z,_]=m.useState(""),[G,K]=m.useState(""),[X,Q]=m.useState(0),[te,ne]=m.useState(0),[de,ue]=m.useState([]),[pe,he]=m.useState([]),[ye,ve]=m.useState([]),[be,je]=m.useState(),[we,Ce]=m.useState(t("invoice.exportCsvText")),[ke,Se]=m.useState(!1),[De,Be]=m.useState([]),{state:{bcLanguage:Ie}}=m.useContext(F),[Ae,Pe,Fe]=W(le,se,be,je),Re=U(),Te=e=>Object.keys(e).some((t=>"first"!==t&&"offset"!==t&&"orderBy"!==t&&e[t])),Le=async(e,n)=>{try{D(!0);const i=r&&a&&2!==n,o=await J(e,i);if(!o)return void b.error(t("invoice.pdfUrlResolutionError"));const{href:s}=window.location;if(!s.includes("invoice"))return;window.open(o,"_blank","fullscreen=yes")}catch(i){L.error(i)}finally{D(!1)}};m.useEffect((()=>{if(Re?.search){const e=new URLSearchParams(Re.search),t=e.get("invoiceId")||"",n=e.get("receiptId")||"";t&&(je({...ge,q:t}),K(oe.DETAIL)),n&&(K(oe.CHECKOUT),je({...ge}),_(n))}else K(oe.NORMAL),je({...ge})}),[Re]),m.useEffect((()=>{const e=de.filter((e=>{const{node:{openBalance:t}}=e;return 0!=+t.value}))||[];if(e.length>0)if(0===pe.length)he(f(e));else{const t=e.map((e=>{const{node:{id:t,openBalance:n}}=e,i=pe.find((e=>{const{node:{id:n}}=e;return+t==+n}));if(i){const{node:{openBalance:e}}=i;n.value=e.value}return e}));he(f(t))}else he([])}),[de]);const Ee=(e,t)=>{let n=e;if(e.includes(".")){const t=e.split("."),i=t[1].length-+C;if(t[1]&&i>0){const e=t[0]+t[1];n=`${e.slice(0,-C)}.${e.slice(-C)}`}}else n=n.length>1?`${e.slice(0,1)}.${e.slice(-1)}`:`${e}`;((e,t)=>{const n=de.find((e=>{const{node:{id:n}}=e;return+n==+t}));if(pe.length>0){const i=pe.map((i=>{const{node:{id:o,openBalance:a}}=i,{node:{openBalance:r}}=n;return+o==+t&&(a.value=+r.value<+e?r.value:e),i}));he(i)}})(n,t)},Oe=[{key:"id",title:t("invoice.headers.invoice"),isSortable:!0,render:e=>o.jsx(l,{sx:{color:"#000000",cursor:"pointer",":hover":{textDecoration:"underline"}},onClick:()=>{Le(e.id,e.status)},children:e?.invoiceNumber?e?.invoiceNumber:e?.id}),width:"8%"},{key:"orderNumber",title:t("invoice.headers.order"),isSortable:!0,render:e=>o.jsx(l,{sx:{color:"#000000",cursor:"pointer",":hover":{textDecoration:"underline"}},onClick:()=>{s(`/orderDetail/${e.orderNumber}`)},children:e?.orderNumber||"-"}),width:"8%"},{key:"createdAt",title:t("invoice.headers.invoiceDate"),isSortable:!0,render:e=>`${e.createdAt?B(+e.createdAt):"–"}`,width:"10%"},{key:"updatedAt",title:t("invoice.headers.dueDate"),isSortable:!0,render:t=>{const{dueDate:n,status:i}=t,a=e>1e3*n&&2!==i;return o.jsx(c,{sx:{color:a?"#D32F2F":"rgba(0, 0, 0, 0.87)",fontSize:"14px"},children:`${t.dueDate?B(+t.dueDate):"–"}`})},width:"10%"},{key:"originalBalance",title:t("invoice.headers.invoiceTotal"),isSortable:!0,render:e=>{const{originalBalance:t}=e,n=(+t.value).toFixed(C);return`${w(t.code)}${n||0}`},width:"10%"},{key:"openBalance",title:t("invoice.headers.amountDue"),isSortable:!0,render:e=>{const{openBalance:t}=e,n=(+t.value).toFixed(C);return`${w(t.code)}${n||0}`},width:"10%"},{key:"openBalanceToPay",title:t("invoice.headers.amountToPay"),render:e=>{const{openBalance:t,id:n}=e,i=t.code||"USD";let a=t.value,r=!0;if(pe.length>0){const e=pe.find((e=>{const{node:{id:t}}=e;return+t==+n}));if(e){const{node:{openBalance:n}}=e;r=!1,a=n.value,0==+t.value&&(r=!0)}}return o.jsx(x,{disabled:r,variant:"outlined",value:a||"",InputProps:{startAdornment:o.jsx(h,{position:"start",sx:{padding:"8px 0",marginTop:"0 !important"},children:w(i)})},sx:{"& input":{paddingTop:"8px"},'& input[type="number"]::-webkit-inner-spin-button, & input[type="number"]::-webkit-outer-spin-button':{WebkitAppearance:"none",margin:0}},onChange:e=>{const t=e.target?.value;Ee(t,n)},type:"number"})},width:"15%"},{key:"status",title:t("invoice.headers.status"),isSortable:!0,render:t=>{const{status:n,dueDate:i}=t;let a=t.status;return 0===n&&e>1e3*i&&(a=3),o.jsx(ee,{code:a})}},{key:"companyName",title:t("invoice.headers.action"),render:e=>{const{id:t}=e;let n=e;if(pe.length>0){const e=pe.find((e=>{const{node:{id:n}}=e;return+n==+t}));e&&(n=e.node)}return o.jsx(Y,{row:n,setInvoiceId:$,handleOpenHistoryModal:E,setIsRequestLoading:D})},width:"10%"}];m.useEffect((()=>{let e=t("invoice.exportCsvText");const n=!!be&&Te(be),i=n?De.filter((e=>de.some((t=>e?.node?.id===t?.node?.id)))):de;e=n?i.length>0?t("invoice.exportSelectedAsCsv"):t("invoice.exportFilteredAsCsv"):i.length>0?t("invoice.exportSelectedAsCsv"):t("invoice.exportCsvText"),Ce(e)}),[de,be,De]);const $e=ae.map((e=>{const n=e;return"status"===e.name&&(n.label=t(re.status)),n.options=e.options.map((e=>(e.label=t(re[e.key]),e))),e}));return o.jsxs(S,{isSpinning:k,children:[o.jsxs(l,{sx:{display:"flex",flexDirection:"column",flex:1,position:"relative"},children:[o.jsxs(l,{sx:{display:"flex",justifyContent:"space-between",alignItems:u?"flex-start":"center",flexDirection:u?"column":"row"},children:[o.jsx(q,{fiterMoreInfo:$e,handleChange:(e,t)=>{"search"===e&&(je({...be,q:t}),Se(!0),K(oe.NORMAL))},handleFilterChange:t=>{const n=t?.startValue?T(new Date(t?.startValue).getTime()/1e3):"",i=t?.endValue?T(new Date(t?.endValue).getTime()/1e3,!0):"",o={status:`${3===t?.status?0:t?.status}`||"",beginDateAt:n,endDateAt:i,beginDueDateAt:0===t?.status?parseInt(""+e/1e3,10):"",endDueDateAt:3===t?.status?parseInt(""+e/1e3,10):""};je({...be,...o}),Se(!0),K(oe.NORMAL)},startPicker:{isEnabled:!0,label:t("invoice.filter.from"),defaultValue:"number"==typeof be?.beginDateAt?1e3*+be.beginDateAt:"",pickerKey:"start"},endPicker:{isEnabled:!0,label:t("invoice.filter.to"),defaultValue:"number"==typeof be?.endDateAt?1e3*+be.endDateAt:"",pickerKey:"end"},searchValue:be?.q||""}),o.jsxs(l,{sx:{display:"flex",marginBottom:"30px",flexDirection:document.body.clientWidth<=465?"column":"row"},children:[o.jsx(c,{sx:{fontSize:"24px",color:"#000000"},children:t("invoice.openUnpaid",{unpaid:A(X)})}),document.body.clientWidth>=465&&o.jsx(c,{sx:{fontSize:"24px",margin:"0 8px"},children:"|"}),o.jsx(c,{sx:{fontSize:"24px",color:"#D32F2F"},children:t("invoice.overdueAmount",{overdue:A(te)})})]})]}),o.jsx(R,{ref:p,columnItems:Oe,rowsPerPageOptions:[10,20,30],getRequestList:async e=>{const{invoices:{edges:t,totalCount:n}}=await H(e),i=t;return G===oe.DETAIL&&i.length&&i.forEach((e=>{e.node.isCollapse=!0})),i.forEach((e=>{const{node:{openBalance:t}}=e;e.node.disableCurrentCheckbox=!1,t.originValue=+t.value,t.value=(+t.value).toFixed(C)})),ve(i),(async()=>{try{D(!0);const{invoiceStats:e}=await V(be?.status?+be.status:0);if(e){const{overDueBalance:t,totalBalance:n}=e;Q(+n.toFixed(C)),ne(+t.toFixed(C))}}catch(e){L.error(e)}finally{D(!1)}})(),be&&Te(be)&&i.length?(e=>{if(ke)return Be(e),void Se(!1);De.length||Be(e);const t=[...De];e.forEach((e=>{const n=e?.node||e;De.some((e=>e.node.id===n.id))||t.push(e)})),Be(t)})(i):Be([]),{edges:i,totalCount:n}},searchParams:be,isCustomRender:!1,requestLoading:D,tableKey:"id",showCheckbox:a&&r,showSelectAllCheckbox:!u&&a&&r,disableCheckbox:!1,applyAllDisableCheckbox:!1,getSelectCheckbox:e=>{if(e.length>0){const t=p.current?.getCacheList()||[],n=e.map((e=>t.find((t=>{const{node:n}=t;return+n.id==+e}))));ue([...n])}else ue([])},CollapseComponent:me,sortDirection:Pe,orderBy:Fe,sortByFn:Ae,isSelectOtherPageCheckbox:!0,hover:!0,renderItem:(e,t,n)=>o.jsx(fe,{item:e,checkBox:n,handleSetSelectedInvoiceAccount:Ee,handleViewInvoice:Le,setIsRequestLoading:D,setInvoiceId:$,handleOpenHistoryModal:E,selectedPay:pe,handleGetCorrespondingCurrency:w,addBottom:ye.length-1===t})}),ye.length>0&&!u&&o.jsx(l,{sx:{position:"absolute",bottom:"8px",left:"20px"},children:o.jsx(d,{variant:"text",onClick:async()=>{try{D(!0);const e=(be&&Te(be)?De.filter((e=>de.some((t=>e?.node?.id===t?.node?.id)))):de).map((e=>e.node.id)),t=be?.status?[+be.status]:[];let n="-invoice_number";if(be?.orderBy){const e=String(be.orderBy);n=e.includes("-")?`-${ce[e.split("-")[1]]}`:ce[e]}const i={search:be?.q||"",idIn:`${e||""}`,orderNumber:"",beginDateAt:be?.beginDateAt||null,endDateAt:be?.endDateAt||null,status:t,orderBy:n},{invoicesExport:o}=await N({invoiceFilterData:i,lang:Ie||"en"});o?.url&&window.open(o?.url,"_blank")}catch(e){L.error(e)}finally{D(!1)}},children:we})})]}),pe.length>0&&(0===n||i)&&o.jsx(Z,{selectedPay:pe,decimalPlaces:C}),o.jsx(ie,{open:I,currentInvoiceId:O,setOpen:E}),o.jsx(xe,{receiptId:+z,type:G})]})}));const t=async(e,t=!1)=>{const{invoicePdf:{url:n}}=await E(+e,t);return n},J=async(e,n=!1)=>{let i="";try{i=await t(e,n);const o=await(e=>new Promise(((t,n)=>{fetch(e).then((e=>e.blob())).then((e=>{const n=new Blob([e],{type:"application/pdf"}),i=window.URL.createObjectURL(n);t(i)})).catch((e=>{n(e)}))})))(i);return o}catch(o){return i}},Q=n(i)((()=>({"& .MuiPaper-elevation":{boxShadow:"0px 1px 0px -1px rgba(0, 0, 0, 0.1), 0px 1px 6px rgba(0, 0, 0, 0.07), 0px 1px 4px rgba(0, 0, 0, 0.06)",borderRadius:"4px"}})));function Y({row:e,setIsRequestLoading:n,setInvoiceId:i,handleOpenHistoryModal:s}){const l=g((({global:e})=>e.storeInfo.platform)),c=m.useRef(null),[d,u]=m.useState(!1),[p,x]=m.useState(!0),h=M(),f=y(),{getOrderPermission:j,invoicePayPermission:w,purchasabilityPermission:C}=g(v),k=()=>{u(!1)},S=async t=>{const{id:i}=e;k(),n(!0);const o=await J(i,t);if(n(!1),!o)return void b.error("pdf url resolution error");const{href:a}=window.location;a.includes("invoice")&&window.open(o,"_blank","fullscreen=yes")};return m.useEffect((()=>{const{openBalance:t}=e,n=+t.value>0&&w&&C;x(n)}),[]),o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:()=>{const{id:t}=e;i(t),u(!0)},ref:c,children:o.jsx(_,{})}),o.jsxs(Q,{id:"basic-menu",anchorEl:c.current,open:d,onClose:k,MenuListProps:{"aria-labelledby":"basic-button"},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[o.jsx(r,{sx:{color:"primary.main"},onClick:()=>S(2!==e.status&&w&&C),children:f("invoice.actions.viewInvoice")},"View-invoice"),j&&o.jsx(r,{sx:{color:"primary.main"},onClick:()=>{const{orderNumber:t}=e;k(),h(`/orderDetail/${t}`)},children:f("invoice.actions.viewOrder")},"View-Order"),0!==e.status&&o.jsx(r,{sx:{color:"primary.main"},onClick:async()=>{k(),s(!0)},children:f("invoice.actions.viewPaymentHistory")},"View-payment-history"),p&&o.jsx(r,{sx:{color:"primary.main"},onClick:async()=>{k();const{openBalance:t,originalBalance:n,id:i}=e,o={lineItems:[{invoiceId:+i,amount:"."===t.value?"0":""+ +t.value}],currency:t?.code||n.code};"."!==t.value&&0!=+t.value?await O(o,l,!1):b.error("The payment amount entered has an invalid value.",{isClose:!0})},children:f("invoice.actions.pay")},"Pay"),o.jsx(r,{sx:{color:"primary.main"},onClick:()=>S(2!==e.status&&w&&C),children:f("invoice.actions.print")},"Print"),o.jsx(r,{sx:{color:"primary.main"},onClick:()=>(async()=>{const{id:i}=e;k(),n(!0);const o=await t(i);n(!1);const a=document.createElement("a");a.href=o,a.target="_blank",a.download="file.pdf",a.click()})(),children:f("invoice.actions.download")},"Download")]})]})}function Z(e){const t=g((({global:e})=>e.storeInfo.platform)),n=y(),[i]=j(),[a,r]=m.useState(0),[u,p]=m.useState("$"),x=g((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),h=i?{alignItems:"flex-start",flexDirection:"column"}:{alignItems:"center"},{selectedPay:f,decimalPlaces:v}=e;return m.useEffect((()=>{if(f.length>0){const e=e=>{let t=0;e.forEach((e=>{const{node:{openBalance:n}}=e;t+="."===n.originValue?0:+n.originValue})),r(t.toFixed(v))},{node:{openBalance:t}}=f[0],n=w(t.code);p(n),e(f)}}),[v,f]),o.jsxs(s,{sx:{position:"fixed",bottom:i&&x?"52px":0,left:0,backgroundColor:"#fff",width:"100%",padding:i?"0 0 1rem 0":"0 40px 1rem 40px",height:i?"8rem":"auto",marginLeft:0,display:"flex",flexWrap:"nowrap",zIndex:"999"},container:!0,spacing:2,children:[o.jsx(s,{item:!0,sx:{display:i?"none":"block",width:"290px",paddingLeft:"20px"}}),o.jsx(s,{item:!0,sx:i?{flexBasis:"100%"}:{flexBasis:"690px",flexGrow:1},children:o.jsxs(l,{sx:{width:"100%",pr:"20px",display:"flex",zIndex:"999",justifyContent:"space-between",...h},children:[o.jsx(c,{sx:{color:"#000000",fontSize:"16px",fontWeight:"400"},children:n("invoice.footer.invoiceSelected",{invoices:f.length})}),o.jsxs(l,{sx:{display:"flex",alignItems:"center",flexWrap:i?"wrap":"nowrap",width:i?"100%":"auto"},children:[o.jsx(c,{variant:"h6",sx:{fontSize:"16px",fontWeight:"700",color:"#000000"},children:n("invoice.footer.totalPayment",{total:`${u}${a}`})}),o.jsx(l,{sx:{display:"flex",alignItems:"center",marginTop:i?"0.5rem":0,width:i?"100%":"auto"},children:o.jsx(d,{variant:"contained",sx:{marginLeft:i?0:"1rem",width:i?"100%":"auto"},onClick:()=>{(async()=>{const e=[];let i="SGD";if(f.length>0){if(f.forEach((t=>{const{node:{id:n,openBalance:o,originalBalance:a}}=t;e.push({invoiceId:+n,amount:"."===o.originValue?"0":""+ +o.originValue}),i=o?.code||a.code})),e.find((e=>"."===e.amount||0==+e.amount)))return void b.error(n("invoice.footer.invalidNameError"),{isClose:!0});const o={lineItems:e,currency:i};await O(o,t,!1)}})()},children:n("invoice.footer.payInvoices")})})]})]})}),o.jsx(s,{item:!0,sx:i?{flexBasis:"100%",display:i?"none":"block"}:{flexBasis:"0",display:i?"none":"block"}})]})}function ee(e){const{code:t}=e,n={0:{textColor:"#000000",name:"Open",color:"#F1C224"},1:{textColor:"#FFFFFF",name:"Partially paid",color:"#516FAE"},2:{textColor:"#FFFFFF",name:"Paid",color:"#EA617C"},3:{textColor:"#FFFFFF",name:"Overdue",color:"#D32F2F"}}[t]||{};return n.name?o.jsx(C,{color:n.color,textColor:n.textColor,children:n.name}):null}function te({title:e}){return o.jsxs(c,{sx:{fontWeight:"bold",pr:"5px"},children:[e,":"]})}function ne({list:e}){return o.jsx(o.Fragment,{children:e.map((e=>{const{node:{createdAt:t,amount:n,paymentType:i,transactionType:a,referenceNumber:r,id:s}}=e;return o.jsx(u,{sx:{mb:"10px"},children:o.jsxs(p,{sx:{color:"#313440",wordBreak:"break-word",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[o.jsxs(l,{sx:{display:"flex"},children:[o.jsx(te,{title:"Date received"}),o.jsx(c,{variant:"body1",children:`${B(+t)}`})]}),o.jsxs(l,{sx:{display:"flex"},children:[o.jsx(te,{title:"Amount"}),o.jsx(c,{variant:"body1",children:`${I(n.code,+(n?.value||0))}`})]}),o.jsxs(l,{sx:{display:"flex"},children:[o.jsx(te,{title:"Transaction type"}),o.jsx(c,{variant:"body1",children:a})]}),o.jsxs(l,{sx:{display:"flex"},children:[o.jsx(te,{title:"Payment type"}),o.jsx(c,{variant:"body1",children:i})]}),o.jsxs(l,{sx:{display:"flex"},children:[o.jsx(te,{title:"Reference"}),o.jsx(c,{variant:"body1",children:r||"–"})]})]})},s)}))})}function ie({open:e,setOpen:t,currentInvoiceId:n}){const i=y(),[a]=j(),[r,s]=m.useState(!1),[c,d]=m.useState([]);return m.useEffect((()=>{e&&n&&(async()=>{s(!0);const{allReceiptLines:{edges:e=[]}}=await $(+n);d(e),s(!1)})()}),[e,n]),o.jsx(k,{isOpen:e,leftSizeBtn:"",rightSizeBtn:"ok",title:i("invoice.paymentHistory.title"),showLeftBtn:!1,handRightClick:()=>t(!1),children:o.jsx(l,{sx:{width:a?"100%":"384px",maxHeight:"600px"},children:o.jsx(S,{isSpinning:r,children:o.jsx(l,{sx:{display:"flex",flexDirection:"column",flex:1},children:c.length?o.jsx(ne,{list:c}):o.jsx(D,{})})})})})}const oe={NORMAL:"normal",DETAIL:"detail",CHECKOUT:"checkout"},ae=[{name:"status",label:"Status",required:!1,default:"",fieldType:"dropdown",xs:12,variant:"outlined",size:"small",options:[{key:"open",value:0,label:"Open"},{key:"partialPaid",value:1,label:"Partially paid"},{key:"paid",value:2,label:"Paid"},{key:"overdue",value:3,label:"Overdue"}]}],re={status:"invoice.filterStatus.title",open:"invoice.filterStatus.open",partialPaid:"invoice.filterStatus.partiallyPaid",paid:"invoice.filterStatus.paid",overdue:"invoice.filterStatus.overdue"},se="id",le={id:"invoiceNumber",orderNumber:"orderNumber",createdAt:"createdAt",updatedAt:"dueDate",originalBalance:"originalBalanceAmount",openBalance:"openBalanceAmount",status:"status"},ce={invoiceNumber:"invoice_number",orderNumber:"order_number",createdAt:"created_at",dueDate:"due_date",originalBalanceAmount:"original_balance_amount",openBalanceAmount:"open_balance_amount"};function de({title:e,withColon:t=!0}){return o.jsx(c,{sx:{fontWeight:"bold",pr:"5px"},children:t?`${e}:`:e})}function ue({isRow:e=!0,type:t="",value:n,label:i,code:a}){return o.jsxs(l,{sx:{display:"flex",flexDirection:e?"row":"column"},children:[o.jsx(de,{title:i}),o.jsx(c,{variant:"body1",children:`${(()=>{if("time"===t)return B(+n)||"";if("currency"===t)return I(a,+(n||0));if("paymentType"===t){let e=`${n}`.trim();return n&&(e=e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()),e}return n||"–"})()}`})]})}function pe({list:e}){const{receiptLineSet:{edges:t=[]},details:n}=e,i=n?.paymentDetails?.comment||"",a=y();return o.jsxs(l,{children:[[{key:"paymentId",label:"Payment#",type:"",isRow:!0,idLang:"payment.paymentNumber"},{key:"createdAt",label:"Payment received on",type:"time",isRow:!0,idLang:"payment.paymentReceivedOn"},{key:"transactionType",label:"Transaction type",type:"",isRow:!0,idLang:"payment.transactionType"},{key:"paymentType",label:"Payment type",type:"paymentType",isRow:!0,idLang:"payment.paymentType"},{key:"totalAmount",label:"Payment total",type:"currency",isRow:!0,idLang:"payment.paymentTotal"},{key:"referenceNumber",label:"Reference",type:"",isRow:!0,idLang:"payment.reference"}].map((t=>o.jsx(ue,{isRow:!!t.isRow,type:t.type,value:e[t.key],code:e?.totalCode||"SGD",label:a(t.idLang)}))),o.jsxs(l,{sx:{display:"flex",flexDirection:"column",mb:"30px"},children:[o.jsx(de,{title:a("payment.paymentComment")}),o.jsx(c,{sx:{maxHeight:"50px"},children:i})]}),o.jsxs(l,{sx:{display:"flex",flexDirection:"column"},children:[o.jsx(de,{title:a("payment.invoicesPaid"),withColon:!1}),o.jsxs(c,{variant:"body1",children:[a("payment.paymentTowardsInvoices")," "]})]}),o.jsxs(l,{children:[o.jsxs(l,{sx:{borderBottom:"1px solid #D9DCE9",padding:"20px 15px",display:"flex",justifyContent:"space-between",fontWeight:400},children:[o.jsx(c,{sx:{fontSize:"14px",fontWeight:"500",color:"#000000"},children:a("payment.invoiceNumber")}),o.jsx(c,{sx:{fontSize:"14px",fontWeight:"500",color:"#000000"},children:a("payment.amountPaid")})]}),t.map((e=>{const{invoiceNumber:t,amount:{value:n,code:i}}=e.node,a=I(i,+(n||0));return o.jsxs(l,{sx:{borderBottom:"1px solid #D9DCE9",padding:"20px 15px",display:"flex",justifyContent:"space-between"},children:[o.jsx(c,{children:t}),o.jsx(c,{children:a})]})}))]})]})}function xe({receiptId:e,type:t}){const[n]=j(),[i,a]=m.useState(!1),[r,s]=m.useState(!1),[c,u]=m.useState(null),p=M(),x=y();m.useEffect((()=>{t===oe.CHECKOUT&&e&&(async()=>{a(!0);const{receipt:t}=await z(+e);u(t),s(!0),a(!1)})()}),[e,t]);const h=()=>{s(!1),p("/invoice")};return o.jsx(k,{isOpen:r,leftSizeBtn:"",customActions:()=>o.jsx(d,{onClick:h,variant:"text",children:x("payment.okButton")}),title:x("payment.paymentSuccess"),showLeftBtn:!1,children:o.jsx(l,{sx:{width:n?"100%":"384px",maxHeight:"600px"},children:o.jsx(S,{isSpinning:i,children:o.jsx(l,{sx:{display:"flex",flexDirection:"column",flex:1},children:c?o.jsx(pe,{list:c}):o.jsx(D,{})})})})})}const he=300;function me({row:e}){const t=m.useRef(null),n=m.useRef(null),[i,a]=m.useState(!1),[r,s]=m.useState(he);return m.useEffect((()=>((async()=>{a(!0);const{id:n}=e,i=await J(n);i?t?.current&&(K.embed(i,t.current),a(!1)):b.error("pdf url resolution error")})(),()=>{t.current=null})),[e]),o.jsx(S,{isSpinning:i,children:o.jsx(l,{ref:n,sx:{display:"flex",flexWrap:"wrap",width:"100%","& .box":{display:"flex",flexDirection:"column",overflow:"hidden",position:"relative",width:"100%","& .react-resizable":{position:"relative"},"& .react-resizable-handle":{position:"absolute",width:"100%",height:"30px",backgroundRepeat:"no-repeat",backgroundOrigin:"content-box",boxSizing:"border-box"},"& .react-resizable-handle-s":{cursor:"ns-resize",bottom:0}}},children:o.jsx(G,{className:"box",height:r,minConstraints:[n?.current?.offsetWidth||0,0],width:n.current?.offsetWidth||0,onResize:(e,{size:t})=>{s(t.height)},resizeHandles:["s"],children:o.jsx("div",{style:{width:"100%",height:`${r}px`},children:o.jsx("div",{ref:t,style:{height:"100%",width:"100%"}})})})})})}const ye=X(l)((()=>({"& > span":{padding:"0 9px 0 0"}})));function fe(e){const t=(new Date).getTime(),{item:n,checkBox:i,handleSetSelectedInvoiceAccount:a,handleViewInvoice:r,setIsRequestLoading:s,setInvoiceId:d,handleOpenHistoryModal:m,selectedPay:f=[],handleGetCorrespondingCurrency:g,addBottom:v}=e,b=y(),j=M(),{id:w,status:C,dueDate:k,openBalance:S}=n,D=g(S.code||"USD");let I=n.status;0===C&&t>1e3*k&&(I=3);const P=[{key:"orderNumber",title:b("invoice.invoiceItemCardHeader.order"),render:()=>o.jsx(l,{sx:{color:"#000000",cursor:"pointer",textDecoration:"underline"},onClick:()=>{j(`/orderDetail/${n.orderNumber}`)},children:n?.orderNumber||"-"})},{key:"createdAt",title:b("invoice.invoiceItemCardHeader.invoiceDate"),render:()=>`${n.createdAt?B(+n.createdAt):"–"}`},{key:"updatedAt",title:b("invoice.invoiceItemCardHeader.dueDate"),render:()=>{const{dueDate:e,status:i}=n,a=t>1e3*e&&2!==i;return o.jsx(c,{sx:{color:a?"#D32F2F":"rgba(0, 0, 0, 0.87)",fontSize:"14px"},children:`${n.dueDate?B(+n.dueDate):"–"}`})}},{key:"originalBalance",title:b("invoice.invoiceItemCardHeader.invoiceTotal"),render:()=>{const{originalBalance:e}=n,t=+e.value;return A(t||0)}},{key:"openBalance",title:b("invoice.invoiceItemCardHeader.amountDue"),render:()=>{const{openBalance:e}=n,t=+e.value;return A(t||0)}},{key:"openBalanceToPay",title:b("invoice.invoiceItemCardHeader.amountToPay"),render:()=>{const{openBalance:e,id:t}=n;let i=e.value,r=!0;if(f.length>0){const n=f.find((e=>{const{node:{id:n}}=e;return+n==+t}));if(n){const{node:{openBalance:t}}=n;r=!1,i=t.value,0==+e.value&&(r=!0)}}return o.jsx(x,{disabled:r,variant:"outlined",value:i,InputProps:{startAdornment:o.jsx(h,{position:"start",sx:{padding:"8px 0",marginTop:"0 !important"},children:D||"$"})},sx:{"& input":{paddingTop:"8px"}},onChange:e=>{const n=e.target?.value;a(n,t)},type:"number"})}}];return o.jsx(u,{sx:{marginBottom:f.length>0&&v?"5rem":0},children:o.jsxs(p,{sx:{color:"rgba(0, 0, 0, 0.6)"},children:[o.jsxs(l,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o.jsxs(l,{sx:{display:"flex",alignItems:"center",mb:"0.5rem"},children:[o.jsx(ye,{children:i&&i(!!n?.disableCurrentCheckbox)}),o.jsx(c,{variant:"h6",sx:{color:"rgba(0, 0, 0, 0.87)"},children:o.jsx(l,{sx:{color:"#000000",cursor:"pointer",textDecoration:"underline"},onClick:()=>{r(w,C)},children:w||"-"})})]}),o.jsx(l,{sx:{mb:"0.5rem"},children:o.jsx(Y,{row:n,setInvoiceId:d,handleOpenHistoryModal:m,setIsRequestLoading:s})})]}),o.jsx(l,{sx:{mb:"1rem"},children:o.jsx(ee,{code:I})}),P.map((e=>o.jsxs(l,{sx:{display:"flex",alignItems:"center",mt:"4px"},children:[o.jsx(c,{sx:{fontWeight:"bold",color:"rgba(0, 0, 0, 0.87)",mr:"5px",whiteSpace:"nowrap"},children:`${e.title}:`}),o.jsx(l,{sx:{color:"black",wordBreak:"break-all"},children:e?.render?e.render():n[e.key]})]},e.key)))]})})}const ge={q:"",first:10,offset:0,orderBy:`-${le[se]}`}}}}));
