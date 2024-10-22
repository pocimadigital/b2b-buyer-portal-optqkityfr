import{j as t,K as Ut,ab as Et,ae as Jt,B as N,y as ue,T as w,G as xt,s as Ft,g as ee,w as de,x as pe,af as fe}from"./mui-CyG7s_nf.js";import{r as l}from"./reactVendor-BAhb8EbJ.js";import{u as me,C as xe}from"./useCustomCallbacks-D2SU_LXI.js";import{u as ct}from"./lang-DxTEvHWx.js";import{t as he,c as It,d as ge}from"./lodashEs-Ck10JMnh.js";import{G as Gt,ac as ye,u as M,a3 as qt,aX as be,a5 as st,aO as Mt,aT as Rt,aP as Ce,aQ as Se,aR as Kt,aD as Ht,aS as je,aU as ne,b7 as Ie,a as At,a9 as Xt,p as oe,_ as qe,ag as Te,b8 as ve,b5 as _t,am as Tt,aM as Pe,b9 as Wt,aY as Ot,i as ae,ba as Ne,bb as ke,bc as we,bd as Le,aN as Be,R as De,C as Qe,a2 as _e,k as Oe,be as zt,bf as Ee,a8 as Fe,a6 as Ae,bg as Yt,au as ze,av as Ve,bh as $e,bi as Re}from"./react-setup-BUFX2CI_.js";import"../index.BGyvYgby.js";import{a as Ue,u as se}from"./form-Bvi8lP6x.js";import{Q as Ge,i as He,j as We,k as Je,l as Me}from"./QuoteStatus-BfLnJ1DD.js";import{c as Ke}from"./config-BL938AdE.js";import{S as Xe,d as Ye,C as Ze}from"./SearchProduct-DVpgePBM.js";import{B as tn,Q as en,C as Vt,a as nn,b as on}from"./QuoteNote-QpQYv8Pe.js";import{b as an}from"./b3Logger-CMQiGC3f.js";import{u as sn}from"./useBlockPendingAccountViewPrice-D3yX4day.js";import{Q as rn}from"./QuickAdd-BFlOuHK1.js";import{B as ie}from"./B3CustomForm-CX4LMs7J.js";import{v as cn}from"./validatorRules-RtdiEs6H.js";import{B as ln}from"./B3FilterSearch-CxOVw9_M.js";import{n as re}from"./eStyled-B3rIBjaz.js";import{E as ce,c as le,A as un}from"./muiIcon-BfPleEzf.js";import{u as dn}from"./router-BbCjXwHs.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./DeleteOutlined-Ca1bfL8T.js";const pn=()=>{const{state:{countriesList:i},dispatch:n}=l.useContext(Gt);l.useEffect(()=>{(async()=>{if(i&&!i.length){const{countries:m}=await ye();n({type:"common",payload:{countriesList:m}})}})()},[i])},fn=({setAddress:i,setValue:n,getValues:d,control:m,addresses:I})=>{const{state:{countriesList:C}}=l.useContext(Gt),g=Ue({control:m,name:"country"});l.useEffect(()=>{const y=I.findIndex(S=>S.name==="country");C!=null&&C.length&&y!==-1&&i(I.map((S,L)=>y===L?{...S,options:C}:S))},[C]),l.useEffect(()=>{var D;if(!g||!(C!=null&&C.length))return;const y=((D=C.find(j=>j.countryCode===g))==null?void 0:D.states)||[],S=I.findIndex(j=>j.name==="state");S!==-1&&i(I.map((j,x)=>S===x?y.length>0?{...j,fieldType:"dropdown",options:y}:{...j,fieldType:"text",options:[]}:j));const L=d("state");n("state",L&&g&&(y.find(j=>j.stateName===L)||y.length===0)?L:"")},[g,C])},Qt=(i,n)=>Object.values(i==null?void 0:i[n]).every(d=>d===""||d===0);function mn(i){const{updateList:n,addToQuote:d,isB2BUser:m}=i,I=M(({company:c})=>c.companyInfo.id),C=M(({company:c})=>c.customer.customerGroupId),g=M(({company:c})=>c.companyInfo.status),[y,S]=l.useState(!1),[L,D]=l.useState(!1),[j]=sn(),x=ct(),o=c=>c.map(b=>{const{variantId:_,newSelectOptionList:Q,id:F,name:a,quantity:r,variants:e=[],basePrice:v,taxPrice:k,calculatedValue:q}=b,W=e.length===1?e[0]:e.find(tt=>tt.variant_id===_),{image_url:z="",sku:J}=W;let O;try{O=JSON.stringify(Q)}catch(tt){O="[]"}const U=W.bc_calculated_price.tax_exclusive,$=W.bc_calculated_price.tax_inclusive,X=v||U,nt=k||+$-+U;return{node:{basePrice:X,taxPrice:nt,optionList:O,id:Kt(),primaryImage:z,productId:F,productName:a,calculatedValue:q,productsSearch:{...b,selectOptions:O},quantity:r,variantSku:J}}}),h=async c=>{const b=o(c),_=c.filter(({sku:Q,variantId:F,variants:a})=>{const e=a.find(v=>v.variant_id===F||v.variantId===F).sku;return!(Q||e)});return _.length>0&&st.error(x("quoteDraft.notification.cantAddProductsNoSku"),{isClose:!0}),_.length===c.length?[]:(d(b),st.success(x("quoteDraft.notification.productSingular"),{isClose:!0}),c)},T=async c=>{const b=c.map(a=>a.productId),{productsSearch:_}=await Mt({productIds:b,companyId:I,customerGroupId:C}),Q=_.map(a=>{const r=c.find(q=>q.productId===a.id)||{},{variantId:e,newSelectOptionList:v,quantity:k}=r;return{...a,variantId:e,newSelectOptionList:v,quantity:k}});await Rt(Q);const F=o(Q);return d(F),st.success(x("quoteDraft.notification.productPlural"),{isClose:!0}),c},V=c=>(c==null?void 0:c.length)===0?[]:c.map(({option_id:_,id:Q})=>({optionId:"attribute[".concat(_,"]"),optionValue:Q})),Y=async c=>{D(!0);try{const{validProduct:b}=c,_=[];b.forEach(v=>{const{products:k}=v;_.includes(+k.productId)||_.push(+k.productId)});const Q=m?Mt:Ce,{productsSearch:F}=await Q({productIds:_,companyId:I,customerGroupId:C}),a=Se(F);let r=!1;const e=[];b.forEach(v=>{const{products:{option:k,variantSku:q,productId:W,productName:z,variantId:J},qty:O}=v,U=V(k),$=a.find(tt=>+tt.id==+W),X=$.variants.find(tt=>{var it;return((it=tt==null?void 0:tt.sku)==null?void 0:it.toUpperCase())===(q==null?void 0:q.toUpperCase())}),nt={node:{id:Kt(),variantSku:X==null?void 0:X.sku,variantId:J,productsSearch:$,primaryImage:X.image_url||Ht,productName:z,quantity:+O||1,optionList:JSON.stringify(U),productId:W,basePrice:X.bc_calculated_price.as_entered,taxPrice:X.bc_calculated_price.tax_inclusive-X.bc_calculated_price.tax_exclusive}};e.push(nt),r=!0}),r=je(e),r?(await Rt(e,"2"),ne(e),st.success(x("quoteDraft.notification.productPlural"),{isClose:!0}),n(),S(!1)):st.error(x("quoteDraft.notification.errorRangeProducts"))}catch(b){an.error(b)}finally{D(!1)}},K=()=>{j&&g===0?st.info(x("quoteDraft.notification.businessAccountPendingActivation")):S(!0)};return t.jsx(Ut,{children:t.jsx(Et,{sx:{p:"16px !important"},children:t.jsxs(tn,{title:x("quoteDraft.collapseTitle.addToQuote"),children:[t.jsx(Xe,{updateList:n,addToList:h,type:"quote",searchDialogTitle:x("quoteDraft.modalTitle.addToQuote"),addButtonText:x("quoteDraft.searchProduct.addToQuoteButton"),isB2BUser:m}),t.jsx(Jt,{}),t.jsx(rn,{updateList:n,quickAddToList:T,level:1,buttonText:x("quoteDraft.button.addProductsToAddToQuote")}),t.jsx(Jt,{}),t.jsx(N,{sx:{margin:"20px 0 0"},children:t.jsxs(qt,{variant:"text",onClick:()=>K(),children:[t.jsx(Ye,{sx:{marginRight:"8px"}}),x("quoteDraft.button.bulkUploadCSV")]})}),t.jsx(be,{isOpen:y,setIsOpen:S,handleAddToList:Y,isLoading:L,withModifiers:!0})]})})})}const xn=cn(["email"]),hn=(i,n)=>[{name:"name",label:n("quoteDraft.contactInfo.contactPerson"),required:!0,default:"",fieldType:"text",xs:i?12:6,variant:"outlined",size:"small"},{name:"email",label:n("quoteDraft.contactInfo.email"),required:!0,default:"",fieldType:"text",xs:i?12:6,variant:"outlined",size:"small",validate:xn},{name:"companyName",label:n("quoteDraft.contactInfo.companyName"),required:!1,default:"",fieldType:"text",xs:i?12:6,variant:"outlined",size:"small"},{name:"phoneNumber",label:n("quoteDraft.contactInfo.phone"),required:!1,default:"",fieldType:"text",xs:i?12:6,variant:"outlined",size:"small"},{name:"quoteTitle",label:n("quoteDraft.contactInfo.quoteTitle"),required:!1,default:"",fieldType:"text",xs:i?12:6,variant:"outlined",size:"small"}];function gn({info:i,emailAddress:n},d){const{control:m,getValues:I,setError:C,formState:{errors:g},setValue:y,handleSubmit:S}=se({mode:"onSubmit"}),L=M(Ie),[D]=At(),j=ct();l.useEffect(()=>{i&&JSON.stringify(i)!=="{}"&&Object.keys(i).forEach(T=>{y(T,i&&i[T])})},[i]);const x=async T=>n===he(T)?!0:(L||C("email",{type:"custom",message:j("quoteDraft.contactInfo.emailExists")}),L),o=async()=>{let T=!0;return await S(async V=>{T=await x(V.email)},()=>{T=!1})(),T&&I()};l.useImperativeHandle(d,()=>({getContactInfoValue:o}));const h=hn(D,j);return t.jsxs(N,{width:"100%",children:[t.jsx(N,{sx:{fontWeight:400,fontSize:"24px",height:"32px",mb:"20px"},children:j("quoteDraft.contactInfo.contact")}),t.jsx(ie,{formFields:h,errors:g,control:m,getValues:I,setValue:y})]})}const yn=l.forwardRef(gn),bn=re("div")(({marginBottom:i})=>({marginBottom:i,"& > span:not(:last-child)":{marginRight:"4px"}})),Cn=re("div")(({theme:i})=>({display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:i.spacing(3)}));function Sn(i){const{item:n,onSetAddress:d}=i,m=ue(),I=ct();return t.jsx(Ut,{children:t.jsxs(Et,{sx:{color:"#313440",wordBreak:"break-word",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[n.label&&t.jsx(w,{variant:"h5",sx:{marginBottom:n.isDefaultShipping===1||n.isDefaultBilling===1?m.spacing(1):m.spacing(3),color:"rgba(0, 0, 0, 0.87)"},children:n.label}),t.jsxs(bn,{marginBottom:n.isDefaultShipping===1||n.isDefaultBilling===1?m.spacing(3):0,children:[n.isDefaultShipping===1&&t.jsx(Xt,{color:"#EA617C",textColor:"#FFF",children:I("quoteDraft.addressItemCard.defaultShipping")}),n.isDefaultBilling===1&&t.jsx(Xt,{color:"#EA617C",textColor:"#FFF",children:I("quoteDraft.addressItemCard.defaultBilling")})]}),t.jsx(w,{variant:"body1",children:"".concat(n.firstName," ").concat(n.lastName)}),t.jsx(w,{variant:"body1",children:n.company||""}),t.jsx(w,{variant:"body1",children:n.addressLine1}),t.jsx(w,{variant:"body1",children:n.addressLine2}),t.jsx(w,{variant:"body1",children:"".concat(n.city,", ").concat(n.state," ").concat(n.zipCode,", ").concat(n.country)}),t.jsx(w,{variant:"body1",children:n.phoneNumber}),t.jsx(Cn,{children:t.jsx(qt,{variant:"text",onClick:()=>{d(n)},children:I("quoteDraft.addressItemCard.chooseAddress")})})]})},n.id)}function jn({isOpen:i,closeModal:n,handleChangeAddress:d,addressList:m=[],type:I}){const C=l.useRef({copyList:[]}),g=ct(),y=M(oe),[S,L]=l.useState([]);l.useEffect(()=>{if(m.length){const o=m.map(T=>T.node),h=o.filter(T=>T.isShipping===1&&I==="shipping"||T.isBilling===1&&I==="billing");C.current.copyList=y?h:o,L(h)}},[m,I,y]);const D=["address","firstName","lastName","phoneNumber","state","zipCode","country","label","address","addressLine1"],j=o=>{if(!o&&(C!=null&&C.current)){L(C.current.copyList);return}const h=[];D.forEach(T=>{let V=!0;S.forEach(Y=>{Y[T].includes(o)&&V&&(h.push(Y),V=!1)})}),L(h)},x=()=>{n()};return t.jsxs(qe,{fullWidth:!0,isOpen:i,handleLeftClick:x,title:g("quoteDraft.chooseAddress.chooseFromSaved"),showRightBtn:!1,maxWidth:"lg",children:[t.jsx(N,{children:t.jsx(ln,{searchBGColor:"rgba(0, 0, 0, 0.06)",placeholder:g("quoteDraft.chooseAddress.searchAddress"),handleChange:o=>{j(o)}})}),t.jsx(N,{sx:{mt:"20px"},children:t.jsx(xt,{container:!0,spacing:2,children:S.map(o=>t.jsx(xt,{item:!0,xs:4,children:t.jsx(Sn,{item:o,onSetAddress:d})},o.id))})})]})}function In({title:i,addressList:n=[],pr:d=0,pl:m=0,info:I,role:C,accountFormFields:g=[],shippingSameAsBilling:y=!1,type:S,setBillingChange:L},D){const{control:j,getValues:x,formState:{errors:o},setValue:h}=se({mode:"onSubmit"}),[T]=At(),V=ct(),[Y,K]=l.useState(!1),[c,b]=l.useState(It(g));fn({control:j,setValue:h,getValues:x,setAddress:b,addresses:c});const _=()=>x(),Q=e=>{Object.keys(e).forEach(k=>{k!=="company"&&h(k,e[k])})};l.useImperativeHandle(D,()=>({getContactInfoValue:_,setShippingInfoValue:Q}));const F=()=>{K(!0)},a=()=>{K(!1)},r=e=>{const v={label:(e==null?void 0:e.label)||"",firstName:(e==null?void 0:e.firstName)||"",lastName:(e==null?void 0:e.lastName)||"",company:(e==null?void 0:e.company)||"",country:(e==null?void 0:e.countryCode)||"",address:(e==null?void 0:e.addressLine1)||"",apartment:(e==null?void 0:e.addressLine2)||"",city:(e==null?void 0:e.city)||"",state:(e==null?void 0:e.state)||"",zipCode:(e==null?void 0:e.zipCode)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||""};Object.keys(v).forEach(k=>{k!=="company"&&h(k,v[k])}),S==="billing"&&y&&L(!0),a()};return l.useEffect(()=>{JSON.stringify(I)!=="{}"&&Object.keys(I).forEach(e=>{h(e,I[e])})},[I]),t.jsxs(N,{width:T?"100%":"50%",mt:T?"2rem":"0",pr:d,pl:m,children:[t.jsxs(N,{sx:{display:"flex",mb:"20px"},children:[t.jsx(w,{sx:{fontWeight:400,fontSize:"24px",height:"32px",mr:"16px"},children:i}),+C!=100&&t.jsx(w,{onClick:F,sx:{fontWeight:400,fontSize:"14px",color:"primary.main",display:"flex",alignItems:"flex-end",cursor:"pointer",textTransform:"capitalize"},children:V("quoteDraft.quoteAddress.chooseFromSaved")})]}),t.jsx(ie,{formFields:c,errors:o,control:j,getValues:x,setValue:h}),t.jsx(jn,{isOpen:Y,handleChangeAddress:r,closeModal:a,addressList:n,type:S})]})}const Zt=l.forwardRef(In),qn=i=>{const{global:{blockPendingQuoteNonPurchasableOOS:{isEnableProduct:n}}}=Te.getState();return n?i.some(m=>!ve(m.node.basePrice,m)):!1},te={subtotal:0,shipping:0,tax:0,grandTotal:0},Tn=l.forwardRef((i,n)=>{const d=ct(),[m,I]=l.useState({...te}),[C,g]=l.useState(!1),y=M(({global:o})=>o.showInclusiveTaxPrice),S=M(({quoteInfo:o})=>o.draftQuoteList),L=o=>parseFloat(String(o)),D=l.useCallback(()=>{const o=qn(S);g(o);const h=S.reduce((T,V)=>{const{basePrice:Y,taxPrice:K=0,quantity:c}=V.node;let{subtotal:b,grandTotal:_,tax:Q}=T;const{shipping:F}=T,a=_t(+Y,+K);return b+=L(a*c),Q+=L(+K*+c),_=(y?b:b+Q)+F,{grandTotal:_,shipping:F,tax:Q,subtotal:b}},{...te});I(h)},[y,S]);l.useEffect(()=>{D()},[D]),l.useImperativeHandle(n,()=>({refreshSummary:()=>D()}));const j=o=>"".concat(Tt(o)),x=o=>C?d("quoteDraft.quoteSummary.tbd"):o;return t.jsx(Ut,{children:t.jsx(Et,{children:t.jsxs(N,{children:[t.jsx(w,{variant:"h5",children:d("quoteDraft.quoteSummary.summary")}),t.jsxs(N,{sx:{marginTop:"20px",color:"#212121"},children:[t.jsxs(xt,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[t.jsx(w,{children:d("quoteDraft.quoteSummary.subTotal")}),t.jsx(w,{children:x(j(m.subtotal))})]}),t.jsxs(xt,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[t.jsx(w,{children:d("quoteDraft.quoteSummary.shipping")}),t.jsx(w,{children:d("quoteDraft.quoteSummary.tbd")})]}),t.jsxs(xt,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[t.jsx(w,{children:d("quoteDraft.quoteSummary.tax")}),t.jsx(w,{children:x(j(m.tax))})]}),t.jsxs(xt,{container:!0,justifyContent:"space-between",sx:{margin:"24px 0 0"},children:[t.jsx(w,{sx:{fontWeight:"bold"},children:d("quoteDraft.quoteSummary.grandTotal")}),t.jsx(w,{sx:{fontWeight:"bold"},children:x(j(m.grandTotal))})]})]})]})})})});function vn({columnItems:i,isCustomRender:n=!1,tableKey:d,renderItem:m,noDataText:I="",tableFixed:C=!1,tableHeaderHide:g=!1,rowsPerPageOptions:y=[10,20,30],itemSpacing:S=2,itemXs:L=4,showCheckbox:D=!1,showSelectAllCheckbox:j=!1,selectedSymbol:x="id",isSelectOtherPageCheckbox:o=!1,showBorder:h=!0,getSelectCheckbox:T,hover:V=!1,labelRowsPerPage:Y="",itemIsMobileSpacing:K=2,disableCheckbox:c=!1,onClickRow:b,showPagination:_=!0,showRowsPerPageOptions:Q=!0,CollapseComponent:F,applyAllDisableCheckbox:a=!0,sortDirection:r="asc",sortByFn:e=()=>{},orderBy:v="",pageType:k="",items:q}){const W={offset:0,first:y[0]},[z,J]=l.useState(W),[O,U]=l.useState(!1),[$,X]=l.useState([]),[nt]=At();l.useEffect(()=>{T&&T($)},[$,q]);const tt=async Z=>{J(Z)},it={...z,count:q.length},ot=l.useCallback(()=>$.length?q.every(Z=>{const s=(Z==null?void 0:Z.node)||Z;return $.includes(s[x])}):!1,[q,$,x]);l.useEffect(()=>{if(o){const Z=ot();U(Z)}},[$,z,o,ot]);const dt=()=>{o?(()=>{const E=ot(),B=[...$];E?q.forEach(P=>{const G=(P==null?void 0:P.node)||P,ft=B.findIndex(ht=>ht===G[x]);B.splice(ft,1)}):q.forEach(P=>{const G=(P==null?void 0:P.node)||P;$.includes(G[x])||B.push(G[x])}),X(B)})():(()=>{if($.length===q.length)X([]);else{const E=[];q.forEach(B=>{const P=(B==null?void 0:B.node)||B;P&&(k==="shoppingListDetailsTable"?E.push(P.quantity>0||!P.disableCurrentCheckbox?P[x]:""):E.push(P[x]))}),X(E)}})()},pt=Z=>{const s=[...$],E=s.indexOf(Z);E!==-1?s.splice(E,1):s.push(Z),X(s)};return t.jsx(Pe,{hover:V,columnItems:i||[],listItems:q.slice(z.offset,z.offset+z.first),pagination:it,rowsPerPageOptions:y,onPaginationChange:tt,isCustomRender:n,isInfiniteScroll:nt,renderItem:m,tableFixed:C,tableHeaderHide:g,itemSpacing:S,itemXs:L,noDataText:I,tableKey:d,itemIsMobileSpacing:K,showCheckbox:D,showSelectAllCheckbox:j,disableCheckbox:c,selectedSymbol:x,isSelectOtherPageCheckbox:o,isAllSelect:O,selectCheckbox:$,handleSelectAllItems:dt,handleSelectOneItem:pt,showBorder:h,labelRowsPerPage:Y,onClickRow:b,showPagination:_,showRowsPerPageOptions:Q,CollapseComponent:F,applyAllDisableCheckbox:a,sortDirection:r,sortByFn:e,orderBy:v})}const Pn=Ft("img")(()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"}));function Nn(i){const{item:n,onEdit:d,onDelete:m,handleUpdateProductQty:I,idEdit:C,len:g,itemIndex:y}=i,{basePrice:S,quantity:L,id:D,primaryImage:j,productName:x,variantSku:o,productsSearch:h,taxPrice:T=0}=n,V=ct(),Y=_t(+S,+T),K=Y*+L,c={...n.productsSearch,selectOptions:n.optionList},b=Wt(c,{}),_=JSON.parse(n.optionList),Q=b.filter(e=>e.valueText),{productUrl:F}=h,a=Ot({price:"".concat(Tt(Y)),productInfo:n,showText:V("quoteDraft.quoteSummary.tbd")}),r=Ot({price:"".concat(Tt(K)),productInfo:n,showText:V("quoteDraft.quoteSummary.tbd")});return t.jsx(N,{width:"100%",sx:{borderTop:"1px solid #D9DCE9",borderBottom:y===g-1?"1px solid #D9DCE9":""},children:t.jsxs(Et,{sx:{color:"#313440",display:"flex",pl:0},children:[t.jsx(N,{children:t.jsx(Pn,{src:j||Ht,alt:"Product-img",loading:"lazy"})}),t.jsxs(N,{sx:{flex:1},children:[t.jsx(w,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:e}}=window;F&&(window.location.href="".concat(e).concat(F))},sx:{cursor:"pointer"},children:x}),t.jsx(w,{variant:"body1",color:"#616161",children:o}),t.jsx(N,{sx:{margin:"1rem 0"},children:_.length>0&&Q.length>0&&t.jsx(N,{children:Q.map(e=>t.jsx(w,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:"".concat(e.valueLabel,": ").concat(e.valueText)},e.valueLabel))})}),t.jsx(w,{sx:{fontSize:"14px"},children:"Price: ".concat(a)}),t.jsx(ee,{size:"small",type:"number",variant:"outlined",label:"qty",disabled:!C,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:L,sx:{margin:"1rem 0",width:"60%",maxWidth:"100px","& label":{fontSize:"14px"},"& input":{fontSize:"14px"}},onChange:e=>{I(n,e.target.value)}}),t.jsx(w,{sx:{fontSize:"14px"},children:"Total: ".concat(r)}),t.jsxs(N,{sx:{marginTop:"1rem",textAlign:"end"},id:"shoppingList-actionList-mobile",children:[_.length>0&&C&&t.jsx(ce,{sx:{marginRight:"0.5rem",cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{d({...h,quantity:L,selectOptions:n.optionList},D)}}),C&&t.jsx(le,{sx:{cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{m(D)}})]})]})]})},n.id)}const kn=Ft("div")(()=>({backgroundColor:"#FFFFFF",padding:"0",width:"100%","& tbody":{"& tr":{"& td":{verticalAlign:"top"},"& td: first-of-type":{verticalAlign:"inherit"}},"& tr: hover":{"& #shoppingList-actionList":{opacity:1}}}})),wn=Ft("img")(()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"})),Ln=Ft(ee)(()=>({"& input":{paddingTop:"12px",paddingRight:"6px"}})),$t=1e6;function Bn(i){const{total:n,items:d,idEdit:m=!0,isB2BUser:I,updateSummary:C}=i,g=ct(),y=ae(),[S,L]=l.useState(!1),[D,j]=l.useState(!1),[x,o]=l.useState(null),[h,T]=l.useState(""),V=async(a,r)=>{const e=await Ne(a,+r);y(ke({id:e.id,quantity:e.quantity})),C()},Y=async(a,r)=>{let e=ge(+r);e===+r&&e>=1&&e<=$t||(+r<1&&(e=1),+r>$t&&(e=$t),V(a,e))},K=a=>{y(we(a)),C()},c=()=>{j(!1)},b=(a,r)=>{o(a),T(r),j(!0)},_=a=>a.map(r=>{var E,B,P;const{variantId:e,newSelectOptionList:v,id:k,productId:q,name:W,quantity:z,variants:J=[],basePrice:O,taxPrice:U=0,calculatedNoTaxPrice:$=0,calculatedTaxPrice:X=0}=r;let[nt]=J;J.length>1&&(nt=(E=J.find(G=>G.variant_id===e))!=null?E:nt);const{image_url:tt="",sku:it}=nt;let ot;try{ot=JSON.stringify(v)}catch(G){ot="[]"}const dt=((B=nt.bc_calculated_price)==null?void 0:B.tax_exclusive)||0,pt=((P=nt.bc_calculated_price)==null?void 0:P.tax_inclusive)||0,Z=O||dt,s=U||+pt-+dt;return{node:{basePrice:Z,taxPrice:s,optionList:ot,id:k.toString(),primaryImage:tt,productId:q,productName:W,productsSearch:{...r,selectOptions:ot},quantity:+z,variantSku:it,calculatedTaxPrice:X,calculatedNoTaxPrice:$,calculatedValue:{}}}}),Q=async a=>{await Rt(a);const r=_(a);r.forEach(e=>{const{variantSku:v,productsSearch:{variants:k},basePrice:q}=e.node,W=e,z=k==null?void 0:k.find(J=>J.sku===v);z&&(W.node.taxPrice=z.bc_calculated_price.tax_inclusive-z.bc_calculated_price.tax_exclusive),W.node.id=h,W.node.basePrice=q}),j(!1),y(Le({id:h,product:r[0]})),C(),st.success(g("quoteDraft.quoteTable.productUpdated"))},F=[{key:"Product",title:g("quoteDraft.quoteTable.product"),render:a=>{const r={...a.productsSearch,selectOptions:a.optionList},e=Wt(r,{}),v=JSON.parse(a.optionList),k=e.filter(q=>q.valueText);return t.jsxs(N,{sx:{display:"flex",alignItems:"flex-start"},children:[t.jsx(wn,{src:a.primaryImage||Ht,alt:"Product-img",loading:"lazy"}),t.jsxs(N,{children:[t.jsx(w,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:q}}=window;r!=null&&r.productUrl&&(window.location.href="".concat(q).concat(r==null?void 0:r.productUrl))},sx:{cursor:"pointer"},children:a.productName}),t.jsx(w,{variant:"body1",color:"#616161",children:a.variantSku}),v.length>0&&k.length>0&&t.jsx(N,{children:k.map(q=>t.jsx(w,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:"".concat(q.valueLabel,": ").concat(q.valueText)},q.valueLabel))})]})]})},width:"40%"},{key:"Price",title:g("quoteDraft.quoteTable.price"),render:a=>{const{basePrice:r,taxPrice:e}=a,v=_t(+r,+e);return t.jsx(w,{sx:{padding:"12px 0"},children:Ot({price:"".concat(Tt(v)),productInfo:a,showText:g("quoteDraft.quoteSummary.tbd")})})},width:"15%",style:{textAlign:"right"}},{key:"Qty",title:g("quoteDraft.quoteTable.qty"),render:a=>t.jsx(Ln,{size:"small",type:"number",variant:"outlined",disabled:!m,value:a.quantity,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},onChange:r=>{V(a,+r.target.value)},onBlur:r=>{Y(a,+r.target.value)},sx:{width:"75%"}}),width:"15%",style:{textAlign:"right"}},{key:"Total",title:g("quoteDraft.quoteTable.total"),render:a=>{const{basePrice:r,quantity:e,taxPrice:v}=a,q=_t(+r,+v)*+e,W=JSON.parse(a.optionList);return t.jsxs(N,{children:[t.jsx(w,{sx:{padding:"12px 0"},children:Ot({price:"".concat(Tt(q)),productInfo:a,showText:g("quoteDraft.quoteSummary.tbd")})}),t.jsxs(N,{sx:{marginTop:"1rem",opacity:0,textAlign:"end"},id:"shoppingList-actionList",children:[W.length>0&&m&&t.jsx(ce,{sx:{marginRight:"0.5rem",cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{const{productsSearch:z,id:J,optionList:O,quantity:U}=a;b({...z,quantity:U,selectOptions:O},J)}}),m&&t.jsx(le,{sx:{cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{const{id:z}=a;K(z)}})]})]})},width:"15%",style:{textAlign:"right"}}];return t.jsxs(kn,{children:[t.jsx(N,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0.5rem 0 1rem"},children:t.jsx(w,{sx:{fontSize:"24px"},children:g("quoteDraft.quoteTable.totalProducts",{total:n||0})})}),t.jsx(vn,{columnItems:F,rowsPerPageOptions:[12,24,36],items:d,isCustomRender:!1,hover:!0,labelRowsPerPage:g("quoteDraft.quoteTable.perPage"),showBorder:!1,itemIsMobileSpacing:0,noDataText:g("quoteDraft.quoteTable.noProducts"),renderItem:(a,r)=>t.jsx(Nn,{len:n||0,item:a,itemIndex:r,onEdit:b,onDelete:K,handleUpdateProductQty:V,idEdit:m})}),t.jsx(Ze,{isOpen:D,isLoading:S,setIsLoading:L,product:x,onCancel:c,onConfirm:Q,isEdit:!0,isB2BUser:I})]})}const Dn=(i,n)=>[{name:"label",label:n("quoteDraft.config.addressLabel"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"},{name:"firstName",label:n("quoteDraft.config.firstName"),required:!1,default:"",fieldType:"text",xs:i?12:6,variant:"outlined",size:"small"},{name:"lastName",label:n("quoteDraft.config.lastName"),required:!1,default:"",fieldType:"text",xs:i?12:6,variant:"outlined",size:"small"},{name:"companyName",label:n("quoteDraft.config.company"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"},{name:"country",label:n("quoteDraft.config.country"),required:!1,default:"",fieldType:"dropdown",options:[],xs:12,variant:"outlined",size:"small",replaceOptions:{label:"countryName",value:"countryCode"}},{name:"address",label:n("quoteDraft.config.addressLine1"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"},{name:"apartment",label:n("quoteDraft.config.addressLine2"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"},{name:"city",label:n("quoteDraft.config.city"),required:!1,default:"",fieldType:"text",options:[],xs:12,variant:"outlined",size:"small"},{name:"state",label:n("quoteDraft.config.state"),required:!1,default:"",fieldType:"text",options:[],xs:i?12:6,variant:"outlined",size:"small",replaceOptions:{label:"stateName",value:"stateName"}},{name:"zipCode",label:n("quoteDraft.config.zipCode"),required:!1,default:"",fieldType:"text",options:[],xs:i?12:6,variant:"outlined",size:"small"},{name:"phoneNumber",label:n("quoteDraft.config.phoneNumber"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"}],Qn={address:"",addressId:0,apartment:"",city:"",country:"",firstName:"",label:"",lastName:"",phoneNumber:"",state:"",zipCode:"",companyName:""},_n={address:"",addressId:0,apartment:"",city:"",country:"",firstName:"",label:"",lastName:"",phoneNumber:"",state:"",zipCode:"",companyName:""};function po({setOpenPage:i}){const{state:{countriesList:n,openAPPParams:d}}=l.useContext(Gt),m=M(oe),I=M(({company:s})=>s.companyInfo.id),C=M(({company:s})=>s.companyInfo.companyName),g=M(({company:s})=>s.customer),y=M(({company:s})=>s.customer.role),S=ae(),L=M(({storeConfigs:s})=>s.currencies.enteredInclusiveTax),D=M(({quoteInfo:s})=>s.draftQuoteList),j=M(({b2bFeatures:s})=>s.masqueradeCompany.id),x=M(({b2bFeatures:s})=>s.masqueradeCompany.companyName),o=M(({quoteInfo:s})=>s.draftQuoteInfo),h=M(Be),T=M(De),{state:{portalStyle:{backgroundColor:V="#FEF9F5"}}}=l.useContext(Qe),Y=m?T.quotesActionsPermission:!0,K=dn(),c=ct(),[b]=At(),[_,Q]=l.useState(!1),[F,a]=l.useState(!1),[r,e]=l.useState([]),[v,k]=l.useState(!1),[q,W]=l.useState(!1),z=l.useRef(null);pn();const J=l.useRef(null),O=l.useRef(null),U=l.useRef(null);l.useEffect(()=>{(async()=>{var B,P,G,ft,ht,vt,gt,yt,bt,Pt,Nt,lt,mt,kt,wt,Lt,Ct,Bt,St,Dt,A,u,ut,jt;Q(!0);const E=R=>{const rt={...R};rt.contactInfo={name:"".concat(g.firstName," ").concat(g.lastName),email:g.emailAddress,companyName:C||x||"",phoneNumber:g.phoneNumber},S(zt(rt))};try{const R=It(o);if(m){const rt=I||j,{addresses:{edges:at=[]}}=await He(+rt),p=at.find(et=>{var H;return((H=et==null?void 0:et.node)==null?void 0:H.isDefaultShipping)===1}),f=at.find(et=>{var H;return((H=et==null?void 0:et.node)==null?void 0:H.isDefaultBilling)===1});if(p&&Qt(R,"shippingAddress")){const et={label:((B=p==null?void 0:p.node)==null?void 0:B.label)||"",firstName:((P=p==null?void 0:p.node)==null?void 0:P.firstName)||"",lastName:((G=p==null?void 0:p.node)==null?void 0:G.lastName)||"",companyName:((ft=p==null?void 0:p.node)==null?void 0:ft.company)||"",country:((ht=p==null?void 0:p.node)==null?void 0:ht.countryCode)||"",address:((vt=p==null?void 0:p.node)==null?void 0:vt.addressLine1)||"",apartment:((gt=p==null?void 0:p.node)==null?void 0:gt.addressLine2)||"",city:((yt=p==null?void 0:p.node)==null?void 0:yt.city)||"",state:((bt=p==null?void 0:p.node)==null?void 0:bt.state)||"",zipCode:((Pt=p==null?void 0:p.node)==null?void 0:Pt.zipCode)||"",phoneNumber:((Nt=p==null?void 0:p.node)==null?void 0:Nt.phoneNumber)||"",addressId:(lt=p==null?void 0:p.node)!=null&&lt.id?+p.node.id:0};R.shippingAddress=et}if(f&&(!(R!=null&&R.billingAddress)||Qt(R,"billingAddress"))){const et={label:((mt=f==null?void 0:f.node)==null?void 0:mt.label)||"",firstName:((kt=f==null?void 0:f.node)==null?void 0:kt.firstName)||"",lastName:((wt=f==null?void 0:f.node)==null?void 0:wt.lastName)||"",companyName:((Lt=f==null?void 0:f.node)==null?void 0:Lt.company)||"",country:((Ct=f==null?void 0:f.node)==null?void 0:Ct.countryCode)||"",address:((Bt=f==null?void 0:f.node)==null?void 0:Bt.addressLine1)||"",apartment:((St=f==null?void 0:f.node)==null?void 0:St.addressLine2)||"",city:((Dt=f==null?void 0:f.node)==null?void 0:Dt.city)||"",state:((A=f==null?void 0:f.node)==null?void 0:A.state)||"",zipCode:((u=f==null?void 0:f.node)==null?void 0:u.zipCode)||"",phoneNumber:((ut=f==null?void 0:f.node)==null?void 0:ut.phoneNumber)||"",addressId:(jt=f==null?void 0:f.node)!=null&&jt.id?+f.node.id:0};R.billingAddress=et}e(at)}else if(y!==100){const{customerAddresses:{edges:rt=[]}}=await We(),at=rt.map(p=>({node:Ke(p.node)}));e(at)}R&&(!(R!=null&&R.contactInfo)||Qt(R,"contactInfo"))&&+y!=100?E(R):R&&S(zt(R))}finally{const R=g.b2bId||g.id||0;S(Ee(+R)),Q(!1)}})()},[]);const $=()=>{const s={shippingAddress:Qn,billingAddress:_n};return O!=null&&O.current&&(s.billingAddress=O.current.getContactInfoValue()),U!=null&&U.current&&(s.shippingAddress=U.current.getContactInfoValue()),s},X=async()=>{const s=It(o);if(J!=null&&J.current){const G=await J.current.getContactInfoValue();if(!G)return;s.contactInfo=G}const{shippingAddress:E,billingAddress:B}=$();s.shippingAddress=E,s.billingAddress=B,Object.keys(s.contactInfo).every(G=>G==="phoneNumber"||G==="companyName"||G==="quoteTitle"?!0:!!s.contactInfo[G])&&(S(zt(s)),a(!1))},nt=()=>{a(!0)},tt=Dn(b,c),it=()=>{var s;(s=z.current)==null||s.refreshSummary()},ot=s=>{ne(s)},dt=s=>y===100?[]:s.map(E=>({fileUrl:E.fileUrl,fileName:E.fileName,fileType:E.fileType,fileSize:E.fileSize})),pt=me(xe.OnQuoteCreate,async(s,E)=>{Q(!0);try{const B=It(o),P=(B==null?void 0:B.contactInfo)||{},G=(P==null?void 0:P.quoteTitle)||"";"quoteTitle"in P&&delete P.quoteTitle;const ft=Object.keys(P).every(A=>A==="phoneNumber"||A==="companyName"?!0:P&&!!P[A]);if(Qt(o,"contactInfo")||!ft){st.error(c("quoteDraft.addQuoteInfo"));return}if(!D||D.length===0){st.error(c("quoteDraft.submit"));return}const vt=((B==null?void 0:B.note)||"").trim().replace(/[\r\n]/g,"\\n"),gt=A=>{const u=It(A),ut=n==null?void 0:n.find(jt=>jt.countryCode===u.country);return ut&&(u.country=ut.countryName),u.address=(A==null?void 0:A.address)||"",u.apartment=(A==null?void 0:A.apartment)||"",u},{shippingAddress:yt,billingAddress:bt}=O!=null&&O.current?$():B,Pt=yt?gt(yt):{},Nt=bt?gt(bt):{};let lt=0,mt=0;const kt=A=>typeof A=="string"&&A.includes("-")?"".concat(new Date(A).getTime()/1e3):A,wt=D.map(A=>{var f,et;const{node:u}=A,ut={...u.productsSearch,selectOptions:(u==null?void 0:u.optionList)||""},R=Wt(ut,{}).map(H=>({optionId:H.optionId,optionValue:H.fieldType==="date"?kt(H.optionValue):H.optionValue,optionLabel:"".concat(H.valueText),optionName:H.valueLabel,type:(H==null?void 0:H.fieldOriginType)||H.fieldType})).filter(H=>!!H.optionName)||[],rt=(f=u==null?void 0:u.productsSearch)==null?void 0:f.variants;let at;return Array.isArray(rt)&&(at=rt.find(H=>H.sku===u.variantSku)),lt+=+((u==null?void 0:u.basePrice)||0)*+((u==null?void 0:u.quantity)||0),mt+=+((u==null?void 0:u.taxPrice)||0)*+((u==null?void 0:u.quantity)||0),{productId:(et=u==null?void 0:u.productsSearch)==null?void 0:et.id,sku:u.variantSku,basePrice:(+((u==null?void 0:u.basePrice)||0)).toFixed(h.decimal_places),discount:"0.00",offeredPrice:(+((u==null?void 0:u.basePrice)||0)).toFixed(h.decimal_places),quantity:u.quantity,variantId:at==null?void 0:at.variant_id,imageUrl:u.primaryImage,productName:u.productName,options:R}}),Lt=dt((o==null?void 0:o.fileInfo)||[]),Ct={message:vt,legalTerms:"",totalAmount:L?lt.toFixed(h.decimal_places):(lt+mt).toFixed(h.decimal_places),grandTotal:lt.toFixed(h.decimal_places),subtotal:lt.toFixed(h.decimal_places),companyId:m?I||j:"",storeHash:Fe,quoteTitle:G,discount:"0.00",channelId:Ae,userEmail:g.emailAddress,shippingAddress:Pt,billingAddress:Nt,contactInfo:P,productList:wt,fileList:Lt,taxTotal:mt.toFixed(h.decimal_places),currency:{currencyExchangeRate:h.currency_exchange_rate,token:h.token,location:h.token_location,decimalToken:h.decimal_token,decimalPlaces:h.decimal_places,thousandsToken:h.thousands_token,currencyCode:h.currency_code}},Bt=+y==99?Je:Me;if(!E(Ct))throw new Error;const{quoteCreate:{quote:{id:St,createdAt:Dt}}}=await Bt(Ct);if(St){const A=Yt.get("cartToQuoteId"),u=ze(A);await Ve(u)}K("/quoteDetail/".concat(St,"?date=").concat(Dt),{state:{to:"draft"}}),S($e()),S(Re()),Yt.delete("cartToQuoteId")}catch(B){B.message&&B.message.length>0&&st.error(B.message,{isClose:!0})}finally{Q(!1)}}),Z=()=>{let s=+y==100?c("quoteDraft.button.back"):c("quoteDraft.button.backToQuoteLists");return(d==null?void 0:d.quoteBtn)==="open"?s=c("quoteDraft.button.back"):(d==null?void 0:d.quoteBtn)==="add"&&(s=c("quoteDraft.button.backToProduct")),s};return l.useEffect(()=>{if(q&&v&&O.current){const s=O.current.getContactInfoValue();U.current&&U.current.setShippingInfoValue(s)}},[q,v]),t.jsx(_e,{isSpinning:_,children:t.jsxs(N,{sx:{mb:"60px",width:"100%"},children:[t.jsx(N,{sx:{marginBottom:"10px",width:"fit-content",displayPrint:"none"},children:t.jsxs(N,{sx:{color:"primary.main",cursor:"pointer",display:"flex",alignItems:"center"},onClick:()=>{d!=null&&d.quoteBtn||+y==100?(K("/"),i({isOpen:!1,openUrl:""})):K("/quotes")},children:[t.jsx(un,{fontSize:"small",sx:{fontSize:"12px",marginRight:"0.5rem"}}),t.jsx("p",{style:{margin:"0"},children:Z()})]})}),t.jsxs(N,{sx:{display:"flex",justifyContent:"space-between"},children:[t.jsxs(N,{sx:{display:"flex",mb:"24px",flexDirection:"".concat(b?"column":"row"),alignItems:"".concat(b?"flex-start":"center")},children:[t.jsx(w,{component:"h3",sx:{fontSize:"34px",mr:"1rem",mb:"".concat(b?"1rem":"0"),color:Oe(V)},children:c("quoteDraft.title.Quote")}),t.jsx(Ge,{code:"0"})]}),Y&&t.jsx(N,{children:b?t.jsx(N,{sx:{position:"fixed",left:0,bottom:0,background:"#FFF",width:"100%",display:"flex",p:"8px 0",zIndex:100,justifyContent:"center"},children:t.jsx(qt,{variant:"contained",size:"small",sx:{height:"38px",width:"90%"},onClick:pt,children:c("quoteDraft.button.submit")})}):t.jsx(qt,{variant:"contained",size:"small",sx:{padding:"8px 22px",alignSelf:"center",marginBottom:"24px"},onClick:pt,children:c("quoteDraft.button.submit")})})]}),t.jsxs(N,{children:[!F&&t.jsx(en,{status:"Draft",contactInfo:o==null?void 0:o.contactInfo,shippingAddress:o==null?void 0:o.shippingAddress,billingAddress:(o==null?void 0:o.billingAddress)||{},handleEditInfoClick:nt}),F&&t.jsxs(Vt,{flexDirection:"column",children:[t.jsx(yn,{emailAddress:g.emailAddress,info:o==null?void 0:o.contactInfo,ref:J}),t.jsxs(N,{sx:{display:"flex",mt:b?0:"3rem",flexDirection:b?"column":"row"},children:[t.jsx(Zt,{title:c("quoteDraft.section.billing"),info:o==null?void 0:o.billingAddress,addressList:r,pr:b?0:"8px",ref:O,role:y,accountFormFields:tt,shippingSameAsBilling:v,type:"billing",setBillingChange:W}),t.jsx(Zt,{title:c("quoteDraft.section.shipping"),info:o==null?void 0:o.shippingAddress,addressList:r,pl:b?0:"8px",ref:U,role:y,accountFormFields:tt,shippingSameAsBilling:v,type:"shipping",setBillingChange:W})]}),t.jsx(de,{label:c("quoteDraft.checkbox.sameAddressShippingAndBilling"),control:t.jsx(pe,{checked:v,onChange:s=>{if(k(s.target.checked),O.current){const E=O.current.getContactInfoValue();U.current&&s.target.checked&&U.current.setShippingInfoValue(E)}}}),sx:{mt:2}}),t.jsx(qt,{sx:{mt:"20px",mb:"15px"},onClick:X,variant:"outlined",children:c("quoteDraft.button.saveInfo")})]})]}),t.jsxs(N,{sx:{mt:"20px",display:"flex",flexDirection:b?"column":"row",alignItems:"flex-start"},children:[t.jsx(Vt,{flexDirection:"column",xs:{flexBasis:b?"100%":"680px",flexGrow:2,marginRight:"20px",marginBottom:"20px",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px"},children:t.jsx(Bn,{updateSummary:it,total:D.length,items:D,isB2BUser:m})}),t.jsx(Vt,{flexDirection:"column",xs:{flexBasis:b?"100%":"340px",marginBottom:"20px",backgroundColor:"transparent",padding:0,flexGrow:1},children:t.jsxs(fe,{spacing:2,sx:{width:"100%"},children:[t.jsx(Tn,{ref:z}),t.jsx(mn,{updateList:it,addToQuote:ot,isB2BUser:m}),t.jsx(nn,{quoteStatus:"Draft"}),y!==100&&t.jsx(on,{status:0})]})})]})]})})}export{po as default};
