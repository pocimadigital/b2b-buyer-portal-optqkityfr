System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./B3Filter-legacy-BpuQV03z.js","./react-setup-legacy-BdSQchRk.js","../index-legacy.DD0lB9PR.js","./QuoteStatus-legacy-BReLw15G.js","./useSort-legacy-CfCrn6Eb.js","./eStyled-legacy-C5ZTaXoz.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./B3FilterMore-legacy-ChNyHhFv.js","./form-legacy-CAo5v63e.js","./B3CustomForm-legacy-Cmz7jtp4.js","./lodashEs-legacy-Da1qF4L1.js","./dateFns-legacy-DDX5L0UR.js","./B3FilterSearch-legacy-C7hmCugz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./muiIcon-legacy-CrtdWcGA.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,t){"use strict";var a,s,l,r,o,d,n,u,i,c,p,y,m,g,q,x,b,f,C,A,j,h,B,k,R,P,S,I,$;return{setters:[e=>{a=e.y,s=e.j,l=e.K,r=e.ab,o=e.B,d=e.T},e=>{n=e.r},e=>{u=e.u},e=>{i=e.B},e=>{c=e.aC,p=e.ag,y=e.b5,m=e.ak,g=e.am,q=e.a,x=e.u,b=e.G,f=e.p,C=e.a6,A=e.b4,j=e.a2,h=e.ab,B=e.bp},null,e=>{k=e.Q,R=e.n,P=e.o},e=>{S=e.u},e=>{I=e.n},e=>{$=e.u},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const e={q:"",orderBy:`-${V[F]}`,createdBy:"",salesRep:"",status:"",dateCreatedBeginAt:"",dateCreatedEndAt:""},[t,a]=n.useState(e),[l,r]=n.useState(!1),[d,c]=n.useState([]),[p,y,g]=S(V,F,t,a),I=$(),T=u(),[L]=q(),v=x((({company:e})=>e.companyInfo.id)),N=x((({company:e})=>e.customer)),{state:{openAPPParams:z},dispatch:K}=n.useContext(b),O=x(f),Q=x((({quoteInfo:e})=>e.draftQuoteList.length)),U=x((({b2bFeatures:e})=>e.masqueradeCompany.id));n.useEffect((()=>{(async()=>{const e=v||U;let t={};O&&(t=await B(+e,2));const a=D(O,t,T);c(a)})(),z.quoteBtn&&K({type:"common",payload:{openAPPParams:{quoteBtn:"",shoppingListBtn:""}}})}),[]);const W=(e,t)=>{I(0==+t?"/quoteDraft":`/quoteDetail/${e.id}?date=${e.createdAt}`)},M=n.useCallback((async e=>{const{edges:a=[],totalCount:s}=O?await R({...e,channelId:C}):await P({...e,channelId:C});if(0===e.offset&&Q){const e=w(),s={node:{quoteNumber:"—",quoteTitle:"—",createdAt:"—",salesRepEmail:"—",createdBy:`${N.firstName} ${N.lastName}`,updatedAt:"—",expiredAt:"—",totalAmount:e?.grandTotal,status:0,taxTotal:e?.tax}},{status:l,createdBy:r,salesRep:o,dateCreatedBeginAt:d,dateCreatedEndAt:n}=t,u=!(l||o||d||n);if(r&&u){const e=/^[^(]+/.exec(r);(e?.length?e[0].trim():"")===s.node.createdBy&&a.unshift(s)}else u&&a.unshift(s)}return{edges:a,totalCount:s}}),[Q,N.firstName,N.lastName,t,O]),_=[{key:"quoteNumber",title:T("quotes.quoteNumber"),isSortable:!0},{key:"quoteTitle",title:T("quotes.title"),isSortable:!0},{key:"salesRep",title:T("quotes.salesRep"),render:e=>`${e.salesRep||e.salesRepEmail}`,isSortable:!0},{key:"createdBy",title:T("quotes.createdBy"),isSortable:!0},{key:"createdAt",title:T("quotes.dateCreated"),render:e=>`${0!=+e.status?m(+e.createdAt):e.createdAt}`,isSortable:!0},{key:"updatedAt",title:T("quotes.lastUpdate"),render:e=>`${0!=+e.status?m(+e.updatedAt):e.updatedAt}`,isSortable:!0},{key:"expiredAt",title:T("quotes.expirationDate"),render:e=>`${0!=+e.status?m(+e.expiredAt):e.expiredAt}`,isSortable:!0},{key:"totalAmount",title:T("quotes.subtotal"),render:e=>{const{totalAmount:t,currency:a}=e;return`${A(+t,{currency:a,isConversionRate:!1,useCurrentCurrency:!!a})}`},style:{textAlign:"right"}},{key:"status",title:T("quotes.status"),render:e=>s.jsx(k,{code:e.status}),isSortable:!0}];return s.jsx(j,{isSpinning:l,children:s.jsxs(o,{sx:{display:"flex",flexDirection:"column",flex:1},children:[s.jsx(i,{fiterMoreInfo:d,startPicker:{isEnabled:!0,label:T("quotes.from"),defaultValue:t?.dateCreatedBeginAt||"",pickerKey:"start"},endPicker:{isEnabled:!0,label:T("quotes.to"),defaultValue:t?.dateCreatedEndAt||"",pickerKey:"end"},handleChange:(e,s)=>{"search"===e&&a({...t,q:s})},handleFilterChange:e=>{const s={createdBy:e?.createdBy||"",status:e?.status||"",salesRep:e?.salesRep||"",dateCreatedBeginAt:e?.startValue||"",dateCreatedEndAt:e?.endValue||""};a({...t,...s})}}),s.jsx(h,{columnItems:_,rowsPerPageOptions:[10,20,30],getRequestList:M,searchParams:t,isCustomRender:!1,requestLoading:r,tableKey:"quoteNumber",sortDirection:y,orderBy:g,sortByFn:p,labelRowsPerPage:`${T(L?"quotes.cardsPerPage":"quotes.quotesPerPage")}`,renderItem:e=>s.jsx(E,{item:e,goToDetail:W}),onClickRow:e=>{W(e,+e.status)},hover:!0})]})})}));const t={subtotal:0,shipping:0,tax:0,grandTotal:0},{decimal_places:T=2}=c(),L=e=>parseFloat(e.toFixed(T)),w=()=>{const{draftQuoteList:e}=p.getState().quoteInfo,{showInclusiveTaxPrice:a}=p.getState().global;return e.reduce(((e,t)=>{const{basePrice:s,taxPrice:l=0,quantity:r,additionalCalculatedPrices:o=[]}=t.node;let{subtotal:d,grandTotal:n,tax:u}=e;const{shipping:i}=e;let c=0,p=0;return o.forEach((e=>{c+=e.additionalCalculatedPriceTax,p+=e.additionalCalculatedPrice})),d+=L(y(+s+p,+l)*r),u+=L((+l+c)*r),n=a?d+i:d+i+u,{grandTotal:n,shipping:i,tax:u,subtotal:d}}),{...t})},v=I("div")({display:"flex",flexDirection:"column",alignItems:"start",marginBottom:"1rem"});function E(e){const{item:t,goToDetail:n}=e,i=a(),c=u(),p=i.palette.primary.main,y=[{key:"quoteTitle",title:c("quotes.quoteItemCard.title")},{key:"salesRepEmail",title:c("quotes.quoteItemCard.salesRep")},{key:"createdBy",title:c("quotes.quoteItemCard.createdBy")},{key:"createdAt",title:c("quotes.quoteItemCard.dateCreated"),render:()=>`${0!=+t.status?m(+t.createdAt):t.createdAt}`},{key:"updatedAt",title:c("quotes.quoteItemCard.lastUpdate"),render:()=>`${0!=+t.status?m(+t.updatedAt):t.updatedAt}`},{key:"expiredAt",title:c("quotes.quoteItemCard.expirationDate"),render:()=>`${0!=+t.status?m(+t.expiredAt):t.expiredAt}`},{key:"totalAmount",title:c("quotes.quoteItemCard.subtotal"),render:()=>{const{totalAmount:e}=t;return`${g(+e)}`}}];return s.jsx(l,{children:s.jsxs(r,{sx:{color:"rgba(0, 0, 0, 0.6)"},children:[s.jsxs(v,{children:[s.jsx(o,{sx:{display:"flex",alignItems:"center",mb:"1rem"},children:s.jsx(d,{variant:"h6",sx:{color:"rgba(0, 0, 0, 0.87)"},children:t.quoteNumber})}),s.jsx(o,{children:s.jsx(k,{code:t.status})})]}),y.map((e=>s.jsxs(o,{sx:{display:"flex"},children:[s.jsx(d,{sx:{fontWeight:"bold",color:"rgba(0, 0, 0, 0.87)",mr:"5px",whiteSpace:"nowrap"},children:`${e.title}:`}),s.jsx(d,{sx:{color:"black",wordBreak:"break-all"},children:e?.render?e.render():t[e.key]})]},e.key))),s.jsx(o,{onClick:()=>n(t,+t.status),sx:{mt:"1rem",pl:0,color:p||"#1976D2",cursor:"pointer",fontWeight:"bold",display:"inline-block"},children:c("quotes.quoteItemCard.view")})]})})}const N=[{idLangCustomLabel:"quotes.open",statusCode:1},{idLangCustomLabel:"quotes.ordered",statusCode:4},{idLangCustomLabel:"quotes.expired",statusCode:5}],D=(e,t,a)=>{const s=t?.createdByUser?.results?.createdBy.map((e=>({createdBy:e.email?`${e.name} (${e.email})`:`${e.name}`})))||[],l=t?.createdByUser?.results?.salesRep.map((e=>({salesRep:`${e.salesRep||e.salesRepEmail}`})))||[];return[{name:"status",label:a("quotes.quoteStatus"),required:!1,default:"",fieldType:"dropdown",options:N.map((({idLangCustomLabel:e,...t})=>({customLabel:a(e),...t}))),replaceOptions:{label:"customLabel",value:"statusCode"},xs:12,variant:"outlined",size:"small"},{name:"createdBy",label:a("quotes.createdBy"),required:!1,default:"",fieldType:"dropdown",options:s,replaceOptions:{label:"createdBy",value:"createdBy"},xs:12,variant:"outlined",size:"small"},{name:"salesRep",label:a("quotes.salesRep"),required:!1,default:"",fieldType:"dropdown",options:l,replaceOptions:{label:"salesRep",value:"salesRep"},xs:12,variant:"outlined",size:"small"}].filter((t=>!!(e||"createdBy"!==t.name&&"salesRep"!==t.name)))},F="quoteNumber",V={quoteNumber:"quoteNumber",quoteTitle:"quoteTitle",salesRep:"salesRep",createdBy:"createdBy",createdAt:"createdAt",updatedAt:"updatedAt",expiredAt:"expiredAt",status:"status"}}}}));
