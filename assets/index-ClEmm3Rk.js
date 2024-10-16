import{y as X,j as r,K as Y,ab as Z,B as h,T as L}from"./mui-CyG7s_nf.js";import{r as g}from"./reactVendor-BAhb8EbJ.js";import{u as D}from"./lang-DxTEvHWx.js";import{B as v}from"./B3Filter-kbuSUpPx.js";import{aC as ee,ag as j,b5 as te,ak as b,am as se,a as ae,u as B,G as re,p as oe,a6 as F,b4 as ne,a2 as ie,ab as le,bp as de}from"./react-setup-BQykMGtr.js";import"../index.BdPALFw3.js";import{Q as M,n as ue,o as ce}from"./QuoteStatus-D73NYDp2.js";import{u as pe}from"./useSort-Cu2YrCwH.js";import{n as me}from"./eStyled-B3rIBjaz.js";import{u as ye}from"./router-BbCjXwHs.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./B3FilterMore-CvmffK7_.js";import"./form-Bvi8lP6x.js";import"./B3CustomForm-mi5e_Pz-.js";import"./lodashEs-Ck10JMnh.js";import"./dateFns-BB2kaHor.js";import"./B3FilterSearch-B0mOkW3f.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./muiIcon-BfPleEzf.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";const fe={subtotal:0,shipping:0,tax:0,grandTotal:0},{decimal_places:qe=2}=ee(),E=d=>parseFloat(d.toFixed(qe)),xe=()=>{const{draftQuoteList:d}=j.getState().quoteInfo,{showInclusiveTaxPrice:t}=j.getState().global;return d.reduce((c,o)=>{const{basePrice:x,taxPrice:m=0,quantity:a,additionalCalculatedPrices:C=[]}=o.node;let{subtotal:u,grandTotal:p,tax:s}=c;const{shipping:y}=c;let A=0,f=0;return C.forEach(R=>{A+=R.additionalCalculatedPriceTax,f+=R.additionalCalculatedPrice}),u+=E(te(+x+f,+m)*a),s+=E((+m+A)*a),p=t?u+y:u+y+s,{grandTotal:p,shipping:y,tax:s,subtotal:u}},{...fe})},Ce=me("div")({display:"flex",flexDirection:"column",alignItems:"start",marginBottom:"1rem"});function ge(d){const{item:t,goToDetail:i}=d,c=X(),o=D(),x=c.palette.primary.main,m=[{key:"quoteTitle",title:o("quotes.quoteItemCard.title")},{key:"salesRepEmail",title:o("quotes.quoteItemCard.salesRep")},{key:"createdBy",title:o("quotes.quoteItemCard.createdBy")},{key:"createdAt",title:o("quotes.quoteItemCard.dateCreated"),render:()=>"".concat(+t.status!=0?b(+t.createdAt):t.createdAt)},{key:"updatedAt",title:o("quotes.quoteItemCard.lastUpdate"),render:()=>"".concat(+t.status!=0?b(+t.updatedAt):t.updatedAt)},{key:"expiredAt",title:o("quotes.quoteItemCard.expirationDate"),render:()=>"".concat(+t.status!=0?b(+t.expiredAt):t.expiredAt)},{key:"totalAmount",title:o("quotes.quoteItemCard.subtotal"),render:()=>{const{totalAmount:a}=t;return"".concat(se(+a))}}];return r.jsx(Y,{children:r.jsxs(Z,{sx:{color:"rgba(0, 0, 0, 0.6)"},children:[r.jsxs(Ce,{children:[r.jsx(h,{sx:{display:"flex",alignItems:"center",mb:"1rem"},children:r.jsx(L,{variant:"h6",sx:{color:"rgba(0, 0, 0, 0.87)"},children:t.quoteNumber})}),r.jsx(h,{children:r.jsx(M,{code:t.status})})]}),m.map(a=>r.jsxs(h,{sx:{display:"flex"},children:[r.jsx(L,{sx:{fontWeight:"bold",color:"rgba(0, 0, 0, 0.87)",mr:"5px",whiteSpace:"nowrap"},children:"".concat(a.title,":")}),r.jsx(L,{sx:{color:"black",wordBreak:"break-all"},children:a!=null&&a.render?a.render():t[a.key]})]},a.key)),r.jsx(h,{onClick:()=>i(t,+t.status),sx:{mt:"1rem",pl:0,color:x||"#1976D2",cursor:"pointer",fontWeight:"bold",display:"inline-block"},children:o("quotes.quoteItemCard.view")})]})})}const be=[{idLangCustomLabel:"quotes.open",statusCode:1},{idLangCustomLabel:"quotes.ordered",statusCode:4},{idLangCustomLabel:"quotes.expired",statusCode:5}],Be=(d,t,i)=>{var a,C,u,p;const c=((C=(a=t==null?void 0:t.createdByUser)==null?void 0:a.results)==null?void 0:C.createdBy.map(s=>({createdBy:s.email?"".concat(s.name," (").concat(s.email,")"):"".concat(s.name)})))||[],o=((p=(u=t==null?void 0:t.createdByUser)==null?void 0:u.results)==null?void 0:p.salesRep.map(s=>({salesRep:"".concat(s.salesRep||s.salesRepEmail)})))||[];return[{name:"status",label:i("quotes.quoteStatus"),required:!1,default:"",fieldType:"dropdown",options:be.map(({idLangCustomLabel:s,...y})=>({customLabel:i(s),...y})),replaceOptions:{label:"customLabel",value:"statusCode"},xs:12,variant:"outlined",size:"small"},{name:"createdBy",label:i("quotes.createdBy"),required:!1,default:"",fieldType:"dropdown",options:c,replaceOptions:{label:"createdBy",value:"createdBy"},xs:12,variant:"outlined",size:"small"},{name:"salesRep",label:i("quotes.salesRep"),required:!1,default:"",fieldType:"dropdown",options:o,replaceOptions:{label:"salesRep",value:"salesRep"},xs:12,variant:"outlined",size:"small"}].filter(s=>!(!d&&(s.name==="createdBy"||s.name==="salesRep")))},N="quoteNumber",Q={quoteNumber:"quoteNumber",quoteTitle:"quoteTitle",salesRep:"salesRep",createdBy:"createdBy",createdAt:"createdAt",updatedAt:"updatedAt",expiredAt:"expiredAt",status:"status"};function He(){const d={q:"",orderBy:"-".concat(Q[N]),createdBy:"",salesRep:"",status:"",dateCreatedBeginAt:"",dateCreatedEndAt:""},[t,i]=g.useState(d),[c,o]=g.useState(!1),[x,m]=g.useState([]),[a,C,u]=pe(Q,N,t,i),p=ye(),s=D(),[y]=ae(),A=B(({company:e})=>e.companyInfo.id),f=B(({company:e})=>e.customer),{state:{openAPPParams:R},dispatch:K}=g.useContext(re),S=B(oe),P=B(({quoteInfo:e})=>e.draftQuoteList.length),O=B(({b2bFeatures:e})=>e.masqueradeCompany.id);g.useEffect(()=>{(async()=>{const n=A||O;let q={};S&&(q=await de(+n,2));const l=Be(S,q,s);m(l)})(),R.quoteBtn&&K({type:"common",payload:{openAPPParams:{quoteBtn:"",shoppingListBtn:""}}})},[]);const T=(e,n)=>{+n==0?p("/quoteDraft"):p("/quoteDetail/".concat(e.id,"?date=").concat(e.createdAt))},V=g.useCallback(async e=>{const{edges:n=[],totalCount:q}=S?await ue({...e,channelId:F}):await ce({...e,channelId:F});if(e.offset===0&&P){const l=xe(),I={node:{quoteNumber:"—",quoteTitle:"—",createdAt:"—",salesRepEmail:"—",createdBy:"".concat(f.firstName," ").concat(f.lastName),updatedAt:"—",expiredAt:"—",totalAmount:l==null?void 0:l.grandTotal,status:0,taxTotal:l==null?void 0:l.tax}},{status:U,createdBy:w,salesRep:_,dateCreatedBeginAt:H,dateCreatedEndAt:J}=t,$=!U&&!_&&!H&&!J;if(w&&$){const k=/^[^(]+/.exec(w);(k!=null&&k.length?k[0].trim():"")===I.node.createdBy&&n.unshift(I)}else $&&n.unshift(I)}return{edges:n,totalCount:q}},[P,f.firstName,f.lastName,t,S]),z=[{key:"quoteNumber",title:s("quotes.quoteNumber"),isSortable:!0},{key:"quoteTitle",title:s("quotes.title"),isSortable:!0},{key:"salesRep",title:s("quotes.salesRep"),render:e=>"".concat(e.salesRep||e.salesRepEmail),isSortable:!0},{key:"createdBy",title:s("quotes.createdBy"),isSortable:!0},{key:"createdAt",title:s("quotes.dateCreated"),render:e=>"".concat(+e.status!=0?b(+e.createdAt):e.createdAt),isSortable:!0},{key:"updatedAt",title:s("quotes.lastUpdate"),render:e=>"".concat(+e.status!=0?b(+e.updatedAt):e.updatedAt),isSortable:!0},{key:"expiredAt",title:s("quotes.expirationDate"),render:e=>"".concat(+e.status!=0?b(+e.expiredAt):e.expiredAt),isSortable:!0},{key:"totalAmount",title:s("quotes.subtotal"),render:e=>{const{totalAmount:n,currency:q}=e,l=q;return"".concat(ne(+n,{currency:l,isConversionRate:!1,useCurrentCurrency:!!q}))},style:{textAlign:"right"}},{key:"status",title:s("quotes.status"),render:e=>r.jsx(M,{code:e.status}),isSortable:!0}],G=(e,n)=>{e==="search"&&i({...t,q:n})},W=e=>{const n={createdBy:(e==null?void 0:e.createdBy)||"",status:(e==null?void 0:e.status)||"",salesRep:(e==null?void 0:e.salesRep)||"",dateCreatedBeginAt:(e==null?void 0:e.startValue)||"",dateCreatedEndAt:(e==null?void 0:e.endValue)||""};i({...t,...n})};return r.jsx(ie,{isSpinning:c,children:r.jsxs(h,{sx:{display:"flex",flexDirection:"column",flex:1},children:[r.jsx(v,{fiterMoreInfo:x,startPicker:{isEnabled:!0,label:s("quotes.from"),defaultValue:(t==null?void 0:t.dateCreatedBeginAt)||"",pickerKey:"start"},endPicker:{isEnabled:!0,label:s("quotes.to"),defaultValue:(t==null?void 0:t.dateCreatedEndAt)||"",pickerKey:"end"},handleChange:G,handleFilterChange:W}),r.jsx(le,{columnItems:z,rowsPerPageOptions:[10,20,30],getRequestList:V,searchParams:t,isCustomRender:!1,requestLoading:o,tableKey:"quoteNumber",sortDirection:C,orderBy:u,sortByFn:a,labelRowsPerPage:"".concat(s(y?"quotes.cardsPerPage":"quotes.quotesPerPage")),renderItem:e=>r.jsx(ge,{item:e,goToDetail:T}),onClickRow:e=>{T(e,+e.status)},hover:!0})]})})}export{He as default};
