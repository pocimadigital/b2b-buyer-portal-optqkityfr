System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./useCustomCallbacks-legacy-BXYZnszm.js","./lang-legacy-CyIWukAl.js","./lodashEs-legacy-Da1qF4L1.js","./react-setup-legacy-CjrUzkdu.js","../index-legacy.nzAN2voK.js","./form-legacy-CAo5v63e.js","./QuoteStatus-legacy-BSsd78pg.js","./config-legacy-CquFG6f7.js","./SearchProduct-legacy-DE2XDynI.js","./QuoteNote-legacy-Nj3Thb4f.js","./b3Logger-legacy-C5y5ZQF8.js","./useBlockPendingAccountViewPrice-legacy-BvTzDd5T.js","./QuickAdd-legacy-D4zVd6q4.js","./B3CustomForm-legacy-DB2jwHR3.js","./validatorRules-legacy-Cn1K7oN3.js","./B3FilterSearch-legacy-DBKnn26v.js","./eStyled-legacy-C5ZTaXoz.js","./muiIcon-legacy-CrtdWcGA.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./DeleteOutlined-legacy-W6tX_yjW.js"],(function(e,t){"use strict";var a,n,i,s,o,r,l,c,d,u,p,m,x,f,h,g,y,b,j,q,S,I,C,v,D,T,w,k,P,N,A,L,B,z,O,_,F,E,R,V,$,Q,U,W,H,M,G,J,K,X,Y,Z,ee,te,ae,ne,ie,se,oe,re,le,ce,de,ue,pe,me,xe,fe,he,ge,ye,be,je,qe,Se,Ie,Ce,ve,De,Te,we,ke,Pe,Ne,Ae,Le,Be,ze,Oe,_e,Fe,Ee;return{setters:[e=>{a=e.j,n=e.K,i=e.ab,s=e.ae,o=e.B,r=e.y,l=e.T,c=e.G,d=e.s,u=e.g,p=e.w,m=e.x,x=e.af},e=>{f=e.r},e=>{h=e.u,g=e.C},e=>{y=e.u},e=>{b=e.t,j=e.c,q=e.d},e=>{S=e.G,I=e.ac,C=e.u,v=e.a3,D=e.aX,T=e.a5,w=e.aO,k=e.aT,P=e.aP,N=e.aQ,A=e.aR,L=e.aD,B=e.aS,z=e.aU,O=e.b7,_=e.a,F=e.a9,E=e.p,R=e._,V=e.ag,$=e.b8,Q=e.b5,U=e.am,W=e.aM,H=e.b9,M=e.aY,G=e.i,J=e.ba,K=e.bb,X=e.bc,Y=e.bd,Z=e.aN,ee=e.R,te=e.C,ae=e.a2,ne=e.k,ie=e.be,se=e.bf,oe=e.a8,re=e.a6,le=e.bg,ce=e.au,de=e.av,ue=e.bh,pe=e.bi},null,e=>{me=e.a,xe=e.u},e=>{fe=e.Q,he=e.i,ge=e.j,ye=e.k,be=e.l},e=>{je=e.c},e=>{qe=e.S,Se=e.d,Ie=e.C},e=>{Ce=e.B,ve=e.Q,De=e.C,Te=e.a,we=e.b},e=>{ke=e.b},e=>{Pe=e.u},e=>{Ne=e.Q},e=>{Ae=e.B},e=>{Le=e.v},e=>{Be=e.B},e=>{ze=e.n},e=>{Oe=e.E,_e=e.c,Fe=e.A},e=>{Ee=e.u},null,null,null,null,null,null,null,null],execute:function(){e("default",(function({setOpenPage:e}){const{state:{countriesList:n,openAPPParams:i}}=f.useContext(S),s=C(E),r=C((({company:e})=>e.companyInfo.id)),c=C((({company:e})=>e.companyInfo.companyName)),d=C((({company:e})=>e.customer)),u=C((({company:e})=>e.customer.role)),b=G(),q=C((({storeConfigs:e})=>e.currencies.enteredInclusiveTax)),I=C((({quoteInfo:e})=>e.draftQuoteList)),D=C((({b2bFeatures:e})=>e.masqueradeCompany.id)),w=C((({b2bFeatures:e})=>e.masqueradeCompany.companyName)),k=C((({quoteInfo:e})=>e.draftQuoteInfo)),P=C(Z),N=C(ee),{state:{portalStyle:{backgroundColor:A="#FEF9F5"}}}=f.useContext(te),L=!s||N.quotesActionsPermission,B=Ee(),O=y(),[F]=_(),[R,V]=f.useState(!1),[$,Q]=f.useState(!1),[U,W]=f.useState([]),[M,J]=f.useState(!1),[K,X]=f.useState(!1),Y=f.useRef(null);t();const me=f.useRef(null),xe=f.useRef(null),qe=f.useRef(null);f.useEffect((()=>{(async()=>{V(!0);try{const e=j(k);if(s){const t=r||D,{addresses:{edges:a=[]}}=await he(+t),n=a.find((e=>1===e?.node?.isDefaultShipping)),i=a.find((e=>1===e?.node?.isDefaultBilling));if(n&&Re(e,"shippingAddress")){const t={label:n?.node?.label||"",firstName:n?.node?.firstName||"",lastName:n?.node?.lastName||"",companyName:n?.node?.company||"",country:n?.node?.countryCode||"",address:n?.node?.addressLine1||"",apartment:n?.node?.addressLine2||"",city:n?.node?.city||"",state:n?.node?.state||"",zipCode:n?.node?.zipCode||"",phoneNumber:n?.node?.phoneNumber||"",addressId:n?.node?.id?+n.node.id:0};e.shippingAddress=t}if(i&&(!e?.billingAddress||Re(e,"billingAddress"))){const t={label:i?.node?.label||"",firstName:i?.node?.firstName||"",lastName:i?.node?.lastName||"",companyName:i?.node?.company||"",country:i?.node?.countryCode||"",address:i?.node?.addressLine1||"",apartment:i?.node?.addressLine2||"",city:i?.node?.city||"",state:i?.node?.state||"",zipCode:i?.node?.zipCode||"",phoneNumber:i?.node?.phoneNumber||"",addressId:i?.node?.id?+i.node.id:0};e.billingAddress=t}W(a)}else if(100!==u){const{customerAddresses:{edges:e=[]}}=await ge(),t=e.map((e=>({node:je(e.node)})));W(t)}!e||e?.contactInfo&&!Re(e,"contactInfo")||100==+u?e&&b(ie(e)):(e=>{const t={...e};t.contactInfo={name:`${d.firstName} ${d.lastName}`,email:d.emailAddress,companyName:c||w||"",phoneNumber:d.phoneNumber},b(ie(t))})(e)}finally{const e=d.b2bId||d.id||0;b(se(+e)),V(!1)}})()}),[]);const Se=()=>{const e={shippingAddress:ot,billingAddress:rt};return xe?.current&&(e.billingAddress=xe.current.getContactInfoValue()),qe?.current&&(e.shippingAddress=qe.current.getContactInfoValue()),e},Ie=st(F,O),Ce=()=>{Y.current?.refreshSummary()},ke=h(g.OnQuoteCreate,(async(e,t)=>{V(!0);try{const e=j(k),i=e?.contactInfo||{},o=i?.quoteTitle||"";"quoteTitle"in i&&delete i.quoteTitle;const l=Object.keys(i).every((e=>"phoneNumber"===e||"companyName"===e||i&&!!i[e]));if(Re(k,"contactInfo")||!l)return void T.error(O("quoteDraft.addQuoteInfo"));if(!I||0===I.length)return void T.error(O("quoteDraft.submit"));const c=(e?.note||"").trim().replace(/[\r\n]/g,"\\n"),p=e=>{const t=j(e),a=n?.find((e=>e.countryCode===t.country));return a&&(t.country=a.countryName),t.address=e?.address||"",t.apartment=e?.apartment||"",t},{shippingAddress:m,billingAddress:x}=xe?.current?Se():e,f=m?p(m):{},h=x?p(x):{};let g=0,y=0;const S=e=>"string"==typeof e&&e.includes("-")?""+new Date(e).getTime()/1e3:e,C=I.map((e=>{const{node:t}=e,a={...t.productsSearch,selectOptions:t?.optionList||""},n=H(a,{}).map((e=>({optionId:e.optionId,optionValue:"date"===e.fieldType?S(e.optionValue):e.optionValue,optionLabel:`${e.valueText}`,optionName:e.valueLabel,type:e?.fieldOriginType||e.fieldType}))).filter((e=>!!e.optionName))||[],i=t?.productsSearch?.variants;let s;return Array.isArray(i)&&(s=i.find((e=>e.sku===t.variantSku))),g+=+(t?.basePrice||0)*+(t?.quantity||0),y+=+(t?.taxPrice||0)*+(t?.quantity||0),{productId:t?.productsSearch?.id,sku:t.variantSku,basePrice:(+(t?.basePrice||0)).toFixed(P.decimal_places),discount:"0.00",offeredPrice:(+(t?.basePrice||0)).toFixed(P.decimal_places),quantity:t.quantity,variantId:s?.variant_id,imageUrl:t.primaryImage,productName:t.productName,options:n}})),v=(a=k?.fileInfo||[],100===u?[]:a.map((e=>({fileUrl:e.fileUrl,fileName:e.fileName,fileType:e.fileType,fileSize:e.fileSize})))),w={message:c,legalTerms:"",totalAmount:q?g.toFixed(P.decimal_places):(g+y).toFixed(P.decimal_places),grandTotal:g.toFixed(P.decimal_places),subtotal:g.toFixed(P.decimal_places),companyId:s?r||D:"",storeHash:oe,quoteTitle:o,discount:"0.00",channelId:re,userEmail:d.emailAddress,shippingAddress:f,billingAddress:h,contactInfo:i,productList:C,fileList:v,taxTotal:y.toFixed(P.decimal_places),currency:{currencyExchangeRate:P.currency_exchange_rate,token:P.token,location:P.token_location,decimalToken:P.decimal_token,decimalPlaces:P.decimal_places,thousandsToken:P.thousands_token,currencyCode:P.currency_code}},N=99==+u?ye:be;if(!t(w))throw new Error;const{quoteCreate:{quote:{id:A,createdAt:L}}}=await N(w);if(A){const e=le.get("cartToQuoteId"),t=ce(e);await de(t)}B(`/quoteDetail/${A}?date=${L}`,{state:{to:"draft"}}),b(ue()),b(pe()),le.delete("cartToQuoteId")}catch(i){i.message&&i.message.length>0&&T.error(i.message,{isClose:!0})}finally{V(!1)}var a}));return f.useEffect((()=>{if(K&&M&&xe.current){const e=xe.current.getContactInfoValue();qe.current&&qe.current.setShippingInfoValue(e)}}),[K,M]),a.jsx(ae,{isSpinning:R,children:a.jsxs(o,{sx:{mb:"60px",width:"100%"},children:[a.jsx(o,{sx:{marginBottom:"10px",width:"fit-content",displayPrint:"none"},children:a.jsxs(o,{sx:{color:"primary.main",cursor:"pointer",display:"flex",alignItems:"center"},onClick:()=>{i?.quoteBtn||100==+u?(B("/"),e({isOpen:!1,openUrl:""})):B("/quotes")},children:[a.jsx(Fe,{fontSize:"small",sx:{fontSize:"12px",marginRight:"0.5rem"}}),a.jsx("p",{style:{margin:"0"},children:(()=>{let e=O(100==+u?"quoteDraft.button.back":"quoteDraft.button.backToQuoteLists");return"open"===i?.quoteBtn?e=O("quoteDraft.button.back"):"add"===i?.quoteBtn&&(e=O("quoteDraft.button.backToProduct")),e})()})]})}),a.jsxs(o,{sx:{display:"flex",justifyContent:"space-between"},children:[a.jsxs(o,{sx:{display:"flex",mb:"24px",flexDirection:F?"column":"row",alignItems:F?"flex-start":"center"},children:[a.jsx(l,{component:"h3",sx:{fontSize:"34px",mr:"1rem",mb:F?"1rem":"0",color:ne(A)},children:O("quoteDraft.title.Quote")}),a.jsx(fe,{code:"0"})]}),L&&a.jsx(o,{children:F?a.jsx(o,{sx:{position:"fixed",left:0,bottom:0,background:"#FFF",width:"100%",display:"flex",p:"8px 0",zIndex:100,justifyContent:"center"},children:a.jsx(v,{variant:"contained",size:"small",sx:{height:"38px",width:"90%"},onClick:ke,children:O("quoteDraft.button.submit")})}):a.jsx(v,{variant:"contained",size:"small",sx:{padding:"8px 22px",alignSelf:"center",marginBottom:"24px"},onClick:ke,children:O("quoteDraft.button.submit")})})]}),a.jsxs(o,{children:[!$&&a.jsx(ve,{status:"Draft",contactInfo:k?.contactInfo,shippingAddress:k?.shippingAddress,billingAddress:k?.billingAddress||{},handleEditInfoClick:()=>{Q(!0)}}),$&&a.jsxs(De,{flexDirection:"column",children:[a.jsx(Qe,{emailAddress:d.emailAddress,info:k?.contactInfo,ref:me}),a.jsxs(o,{sx:{display:"flex",mt:F?0:"3rem",flexDirection:F?"column":"row"},children:[a.jsx(Ge,{title:O("quoteDraft.section.billing"),info:k?.billingAddress,addressList:U,pr:F?0:"8px",ref:xe,role:u,accountFormFields:Ie,shippingSameAsBilling:M,type:"billing",setBillingChange:X}),a.jsx(Ge,{title:O("quoteDraft.section.shipping"),info:k?.shippingAddress,addressList:U,pl:F?0:"8px",ref:qe,role:u,accountFormFields:Ie,shippingSameAsBilling:M,type:"shipping",setBillingChange:X})]}),a.jsx(p,{label:O("quoteDraft.checkbox.sameAddressShippingAndBilling"),control:a.jsx(m,{checked:M,onChange:e=>{if(J(e.target.checked),xe.current){const t=xe.current.getContactInfoValue();qe.current&&e.target.checked&&qe.current.setShippingInfoValue(t)}}}),sx:{mt:2}}),a.jsx(v,{sx:{mt:"20px",mb:"15px"},onClick:async()=>{const e=j(k);if(me?.current){const t=await me.current.getContactInfoValue();if(!t)return;e.contactInfo=t}const{shippingAddress:t,billingAddress:a}=Se();e.shippingAddress=t,e.billingAddress=a,Object.keys(e.contactInfo).every((t=>"phoneNumber"===t||"companyName"===t||"quoteTitle"===t||!!e.contactInfo[t]))&&(b(ie(e)),Q(!1))},variant:"outlined",children:O("quoteDraft.button.saveInfo")})]})]}),a.jsxs(o,{sx:{mt:"20px",display:"flex",flexDirection:F?"column":"row",alignItems:"flex-start"},children:[a.jsx(De,{flexDirection:"column",xs:{flexBasis:F?"100%":"680px",flexGrow:2,marginRight:"20px",marginBottom:"20px",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px"},children:a.jsx(it,{updateSummary:Ce,total:I.length,items:I,isB2BUser:s})}),a.jsx(De,{flexDirection:"column",xs:{flexBasis:F?"100%":"340px",marginBottom:"20px",backgroundColor:"transparent",padding:0,flexGrow:1},children:a.jsxs(x,{spacing:2,sx:{width:"100%"},children:[a.jsx(Ke,{ref:Y}),a.jsx(Ve,{updateList:Ce,addToQuote:e=>{z(e)},isB2BUser:s}),a.jsx(Te,{quoteStatus:"Draft"}),100!==u&&a.jsx(we,{status:0})]})})]})]})})}));const t=()=>{const{state:{countriesList:e},dispatch:t}=f.useContext(S);f.useEffect((()=>{(async()=>{if(e&&!e.length){const{countries:e}=await I();t({type:"common",payload:{countriesList:e}})}})()}),[e])},Re=(e,t)=>Object.values(e?.[t]).every((e=>""===e||0===e));function Ve(e){const{updateList:t,addToQuote:r,isB2BUser:l}=e,c=C((({company:e})=>e.companyInfo.id)),d=C((({company:e})=>e.customer.customerGroupId)),u=C((({company:e})=>e.companyInfo.status)),[p,m]=f.useState(!1),[x,h]=f.useState(!1),[g]=Pe(),b=y(),j=e=>e.map((e=>{const{variantId:t,newSelectOptionList:a,id:n,name:i,quantity:s,variants:o=[],basePrice:r,taxPrice:l,calculatedValue:c}=e,d=1===o.length?o[0]:o.find((e=>e.variant_id===t)),{image_url:u="",sku:p}=d;let m;try{m=JSON.stringify(a)}catch(h){m="[]"}const x=d.bc_calculated_price.tax_exclusive,f=d.bc_calculated_price.tax_inclusive;return{node:{basePrice:r||x,taxPrice:l||+f-+x,optionList:m,id:A(),primaryImage:u,productId:n,productName:i,calculatedValue:c,productsSearch:{...e,selectOptions:m},quantity:s,variantSku:p}}}));return a.jsx(n,{children:a.jsx(i,{sx:{p:"16px !important"},children:a.jsxs(Ce,{title:b("quoteDraft.collapseTitle.addToQuote"),children:[a.jsx(qe,{updateList:t,addToList:async e=>{const t=j(e),a=e.filter((({sku:e,variantId:t,variants:a})=>{const n=a.find((e=>e.variant_id===t||e.variantId===t)).sku;return!(e||n)}));return a.length>0&&T.error(b("quoteDraft.notification.cantAddProductsNoSku"),{isClose:!0}),a.length===e.length?[]:(r(t),T.success(b("quoteDraft.notification.productSingular"),{isClose:!0}),e)},type:"quote",searchDialogTitle:b("quoteDraft.modalTitle.addToQuote"),addButtonText:b("quoteDraft.searchProduct.addToQuoteButton"),isB2BUser:l}),a.jsx(s,{}),a.jsx(Ne,{updateList:t,quickAddToList:async e=>{const t=e.map((e=>e.productId)),{productsSearch:a}=await w({productIds:t,companyId:c,customerGroupId:d}),n=a.map((t=>{const a=e.find((e=>e.productId===t.id))||{},{variantId:n,newSelectOptionList:i,quantity:s}=a;return{...t,variantId:n,newSelectOptionList:i,quantity:s}}));await k(n);const i=j(n);return r(i),T.success(b("quoteDraft.notification.productPlural"),{isClose:!0}),e},level:1,buttonText:b("quoteDraft.button.addProductsToAddToQuote")}),a.jsx(s,{}),a.jsx(o,{sx:{margin:"20px 0 0"},children:a.jsxs(v,{variant:"text",onClick:()=>{g&&0===u?T.info(b("quoteDraft.notification.businessAccountPendingActivation")):m(!0)},children:[a.jsx(Se,{sx:{marginRight:"8px"}}),b("quoteDraft.button.bulkUploadCSV")]})}),a.jsx(D,{isOpen:p,setIsOpen:m,handleAddToList:async e=>{h(!0);try{const{validProduct:a}=e,n=[];a.forEach((e=>{const{products:t}=e;n.includes(+t.productId)||n.push(+t.productId)}));const i=l?w:P,{productsSearch:s}=await i({productIds:n,companyId:c,customerGroupId:d}),o=N(s);let r=!1;const u=[];a.forEach((e=>{const{products:{option:t,variantSku:a,productId:n,productName:i,variantId:s},qty:l}=e,c=(d=t,0===d?.length?[]:d.map((({option_id:e,id:t})=>({optionId:`attribute[${e}]`,optionValue:t}))));var d;const p=o.find((e=>+e.id==+n)),m=p.variants.find((e=>e?.sku?.toUpperCase()===a?.toUpperCase())),x={node:{id:A(),variantSku:m?.sku,variantId:s,productsSearch:p,primaryImage:m.image_url||L,productName:i,quantity:+l||1,optionList:JSON.stringify(c),productId:n,basePrice:m.bc_calculated_price.as_entered,taxPrice:m.bc_calculated_price.tax_inclusive-m.bc_calculated_price.tax_exclusive}};u.push(x),r=!0})),r=B(u),r?(await k(u,"2"),z(u),T.success(b("quoteDraft.notification.productPlural"),{isClose:!0}),t(),m(!1)):T.error(b("quoteDraft.notification.errorRangeProducts"))}catch(a){ke.error(a)}finally{h(!1)}},isLoading:x,withModifiers:!0})]})})})}const $e=Le(["email"]),Qe=f.forwardRef((function({info:e,emailAddress:t},n){const{control:i,getValues:s,setError:r,formState:{errors:l},setValue:c,handleSubmit:d}=xe({mode:"onSubmit"}),u=C(O),[p]=_(),m=y();f.useEffect((()=>{e&&"{}"!==JSON.stringify(e)&&Object.keys(e).forEach((t=>{c(t,e&&e[t])}))}),[e]);const x=async()=>{let e=!0;return await d((async a=>{e=await(async e=>t===b(e)||(u||r("email",{type:"custom",message:m("quoteDraft.contactInfo.emailExists")}),u))(a.email)}),(()=>{e=!1}))(),e?s():e};f.useImperativeHandle(n,(()=>({getContactInfoValue:x})));const h=((e,t)=>[{name:"name",label:t("quoteDraft.contactInfo.contactPerson"),required:!0,default:"",fieldType:"text",xs:e?12:6,variant:"outlined",size:"small"},{name:"email",label:t("quoteDraft.contactInfo.email"),required:!0,default:"",fieldType:"text",xs:e?12:6,variant:"outlined",size:"small",validate:$e},{name:"companyName",label:t("quoteDraft.contactInfo.companyName"),required:!1,default:"",fieldType:"text",xs:e?12:6,variant:"outlined",size:"small"},{name:"phoneNumber",label:t("quoteDraft.contactInfo.phone"),required:!1,default:"",fieldType:"text",xs:e?12:6,variant:"outlined",size:"small"},{name:"quoteTitle",label:t("quoteDraft.contactInfo.quoteTitle"),required:!1,default:"",fieldType:"text",xs:e?12:6,variant:"outlined",size:"small"}])(p,m);return a.jsxs(o,{width:"100%",children:[a.jsx(o,{sx:{fontWeight:400,fontSize:"24px",height:"32px",mb:"20px"},children:m("quoteDraft.contactInfo.contact")}),a.jsx(Ae,{formFields:h,errors:l,control:i,getValues:s,setValue:c})]})})),Ue=ze("div")((({marginBottom:e})=>({marginBottom:e,"& > span:not(:last-child)":{marginRight:"4px"}}))),We=ze("div")((({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:e.spacing(3)})));function He(e){const{item:t,onSetAddress:s}=e,o=r(),c=y();return a.jsx(n,{children:a.jsxs(i,{sx:{color:"#313440",wordBreak:"break-word",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[t.label&&a.jsx(l,{variant:"h5",sx:{marginBottom:1===t.isDefaultShipping||1===t.isDefaultBilling?o.spacing(1):o.spacing(3),color:"rgba(0, 0, 0, 0.87)"},children:t.label}),a.jsxs(Ue,{marginBottom:1===t.isDefaultShipping||1===t.isDefaultBilling?o.spacing(3):0,children:[1===t.isDefaultShipping&&a.jsx(F,{color:"#EA617C",textColor:"#FFF",children:c("quoteDraft.addressItemCard.defaultShipping")}),1===t.isDefaultBilling&&a.jsx(F,{color:"#EA617C",textColor:"#FFF",children:c("quoteDraft.addressItemCard.defaultBilling")})]}),a.jsx(l,{variant:"body1",children:`${t.firstName} ${t.lastName}`}),a.jsx(l,{variant:"body1",children:t.company||""}),a.jsx(l,{variant:"body1",children:t.addressLine1}),a.jsx(l,{variant:"body1",children:t.addressLine2}),a.jsx(l,{variant:"body1",children:`${t.city}, ${t.state} ${t.zipCode}, ${t.country}`}),a.jsx(l,{variant:"body1",children:t.phoneNumber}),a.jsx(We,{children:a.jsx(v,{variant:"text",onClick:()=>{s(t)},children:c("quoteDraft.addressItemCard.chooseAddress")})})]})},t.id)}function Me({isOpen:e,closeModal:t,handleChangeAddress:n,addressList:i=[],type:s}){const r=f.useRef({copyList:[]}),l=y(),d=C(E),[u,p]=f.useState([]);f.useEffect((()=>{if(i.length){const e=i.map((e=>e.node)),t=e.filter((e=>1===e.isShipping&&"shipping"===s||1===e.isBilling&&"billing"===s));r.current.copyList=d?t:e,p(t)}}),[i,s,d]);const m=["address","firstName","lastName","phoneNumber","state","zipCode","country","label","address","addressLine1"];return a.jsxs(R,{fullWidth:!0,isOpen:e,handleLeftClick:()=>{t()},title:l("quoteDraft.chooseAddress.chooseFromSaved"),showRightBtn:!1,maxWidth:"lg",children:[a.jsx(o,{children:a.jsx(Be,{searchBGColor:"rgba(0, 0, 0, 0.06)",placeholder:l("quoteDraft.chooseAddress.searchAddress"),handleChange:e=>{(e=>{if(!e&&r?.current)return void p(r.current.copyList);const t=[];m.forEach((a=>{let n=!0;u.forEach((i=>{i[a].includes(e)&&n&&(t.push(i),n=!1)}))})),p(t)})(e)}})}),a.jsx(o,{sx:{mt:"20px"},children:a.jsx(c,{container:!0,spacing:2,children:u.map((e=>a.jsx(c,{item:!0,xs:4,children:a.jsx(He,{item:e,onSetAddress:n})},e.id)))})})]})}const Ge=f.forwardRef((function({title:e,addressList:t=[],pr:n=0,pl:i=0,info:s,role:r,accountFormFields:c=[],shippingSameAsBilling:d=!1,type:u,setBillingChange:p},m){const{control:x,getValues:h,formState:{errors:g},setValue:b}=xe({mode:"onSubmit"}),[q]=_(),I=y(),[C,v]=f.useState(!1),[D,T]=f.useState(j(c));(({setAddress:e,setValue:t,getValues:a,control:n,addresses:i})=>{const{state:{countriesList:s}}=f.useContext(S),o=me({control:n,name:"country"});f.useEffect((()=>{const t=i.findIndex((e=>"country"===e.name));s?.length&&-1!==t&&e(i.map(((e,a)=>t===a?{...e,options:s}:e)))}),[s]),f.useEffect((()=>{if(!o||!s?.length)return;const n=s.find((e=>e.countryCode===o))?.states||[],r=i.findIndex((e=>"state"===e.name));-1!==r&&e(i.map(((e,t)=>r===t?n.length>0?{...e,fieldType:"dropdown",options:n}:{...e,fieldType:"text",options:[]}:e)));const l=a("state");t("state",l&&o&&(n.find((e=>e.stateName===l))||0===n.length)?l:"")}),[o,s])})({control:x,setValue:b,getValues:h,setAddress:T,addresses:D});const w=()=>h(),k=e=>{Object.keys(e).forEach((t=>{"company"!==t&&b(t,e[t])}))};f.useImperativeHandle(m,(()=>({getContactInfoValue:w,setShippingInfoValue:k})));const P=()=>{v(!1)};return f.useEffect((()=>{"{}"!==JSON.stringify(s)&&Object.keys(s).forEach((e=>{b(e,s[e])}))}),[s]),a.jsxs(o,{width:q?"100%":"50%",mt:q?"2rem":"0",pr:n,pl:i,children:[a.jsxs(o,{sx:{display:"flex",mb:"20px"},children:[a.jsx(l,{sx:{fontWeight:400,fontSize:"24px",height:"32px",mr:"16px"},children:e}),100!=+r&&a.jsx(l,{onClick:()=>{v(!0)},sx:{fontWeight:400,fontSize:"14px",color:"primary.main",display:"flex",alignItems:"flex-end",cursor:"pointer",textTransform:"capitalize"},children:I("quoteDraft.quoteAddress.chooseFromSaved")})]}),a.jsx(Ae,{formFields:D,errors:g,control:x,getValues:h,setValue:b}),a.jsx(Me,{isOpen:C,handleChangeAddress:e=>{const t={label:e?.label||"",firstName:e?.firstName||"",lastName:e?.lastName||"",company:e?.company||"",country:e?.countryCode||"",address:e?.addressLine1||"",apartment:e?.addressLine2||"",city:e?.city||"",state:e?.state||"",zipCode:e?.zipCode||"",phoneNumber:e?.phoneNumber||""};Object.keys(t).forEach((e=>{"company"!==e&&b(e,t[e])})),"billing"===u&&d&&p(!0),P()},closeModal:P,addressList:t,type:u})]})})),Je={subtotal:0,shipping:0,tax:0,grandTotal:0},Ke=f.forwardRef(((e,t)=>{const s=y(),[r,d]=f.useState({...Je}),[u,p]=f.useState(!1),m=C((({global:e})=>e.showInclusiveTaxPrice)),x=C((({quoteInfo:e})=>e.draftQuoteList)),h=e=>parseFloat(String(e)),g=f.useCallback((()=>{const e=(e=>{const{global:{blockPendingQuoteNonPurchasableOOS:{isEnableProduct:t}}}=V.getState();return!!t&&e.some((e=>!$(e.node.basePrice,e)))})(x);p(e);const t=x.reduce(((e,t)=>{const{basePrice:a,taxPrice:n=0,quantity:i}=t.node;let{subtotal:s,grandTotal:o,tax:r}=e;const{shipping:l}=e,c=Q(+a,+n);return s+=h(c*i),r+=h(+n*+i),o=(m?s:s+r)+l,{grandTotal:o,shipping:l,tax:r,subtotal:s}}),{...Je});d(t)}),[m,x]);f.useEffect((()=>{g()}),[g]),f.useImperativeHandle(t,(()=>({refreshSummary:()=>g()})));const b=e=>`${U(e)}`,j=e=>u?s("quoteDraft.quoteSummary.tbd"):e;return a.jsx(n,{children:a.jsx(i,{children:a.jsxs(o,{children:[a.jsx(l,{variant:"h5",children:s("quoteDraft.quoteSummary.summary")}),a.jsxs(o,{sx:{marginTop:"20px",color:"#212121"},children:[a.jsxs(c,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[a.jsx(l,{children:s("quoteDraft.quoteSummary.subTotal")}),a.jsx(l,{children:j(b(r.subtotal))})]}),a.jsxs(c,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[a.jsx(l,{children:s("quoteDraft.quoteSummary.shipping")}),a.jsx(l,{children:s("quoteDraft.quoteSummary.tbd")})]}),a.jsxs(c,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[a.jsx(l,{children:s("quoteDraft.quoteSummary.tax")}),a.jsx(l,{children:j(b(r.tax))})]}),a.jsxs(c,{container:!0,justifyContent:"space-between",sx:{margin:"24px 0 0"},children:[a.jsx(l,{sx:{fontWeight:"bold"},children:s("quoteDraft.quoteSummary.grandTotal")}),a.jsx(l,{sx:{fontWeight:"bold"},children:j(b(r.grandTotal))})]})]})]})})})}));function Xe({columnItems:e,isCustomRender:t=!1,tableKey:n,renderItem:i,noDataText:s="",tableFixed:o=!1,tableHeaderHide:r=!1,rowsPerPageOptions:l=[10,20,30],itemSpacing:c=2,itemXs:d=4,showCheckbox:u=!1,showSelectAllCheckbox:p=!1,selectedSymbol:m="id",isSelectOtherPageCheckbox:x=!1,showBorder:h=!0,getSelectCheckbox:g,hover:y=!1,labelRowsPerPage:b="",itemIsMobileSpacing:j=2,disableCheckbox:q=!1,onClickRow:S,showPagination:I=!0,showRowsPerPageOptions:C=!0,CollapseComponent:v,applyAllDisableCheckbox:D=!0,sortDirection:T="asc",sortByFn:w=(()=>{}),orderBy:k="",pageType:P="",items:N}){const A={offset:0,first:l[0]},[L,B]=f.useState(A),[z,O]=f.useState(!1),[F,E]=f.useState([]),[R]=_();f.useEffect((()=>{g&&g(F)}),[F,N]);const V={...L,count:N.length},$=f.useCallback((()=>!!F.length&&N.every((e=>{const t=e?.node||e;return F.includes(t[m])}))),[N,F,m]);return f.useEffect((()=>{if(x){const e=$();O(e)}}),[F,L,x,$]),a.jsx(W,{hover:y,columnItems:e||[],listItems:N.slice(L.offset,L.offset+L.first),pagination:V,rowsPerPageOptions:l,onPaginationChange:async e=>{B(e)},isCustomRender:t,isInfiniteScroll:R,renderItem:i,tableFixed:o,tableHeaderHide:r,itemSpacing:c,itemXs:d,noDataText:s,tableKey:n,itemIsMobileSpacing:j,showCheckbox:u,showSelectAllCheckbox:p,disableCheckbox:q,selectedSymbol:m,isSelectOtherPageCheckbox:x,isAllSelect:z,selectCheckbox:F,handleSelectAllItems:()=>{x?(()=>{const e=$(),t=[...F];e?N.forEach((e=>{const a=e?.node||e,n=t.findIndex((e=>e===a[m]));t.splice(n,1)})):N.forEach((e=>{const a=e?.node||e;F.includes(a[m])||t.push(a[m])})),E(t)})():(()=>{if(F.length===N.length)E([]);else{const e=[];N.forEach((t=>{const a=t?.node||t;a&&("shoppingListDetailsTable"===P?e.push(a.quantity>0||!a.disableCurrentCheckbox?a[m]:""):e.push(a[m]))})),E(e)}})()},handleSelectOneItem:e=>{const t=[...F],a=t.indexOf(e);-1!==a?t.splice(a,1):t.push(e),E(t)},showBorder:h,labelRowsPerPage:b,onClickRow:S,showPagination:I,showRowsPerPageOptions:C,CollapseComponent:v,applyAllDisableCheckbox:D,sortDirection:T,sortByFn:w,orderBy:k})}const Ye=d("img")((()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"})));function Ze(e){const{item:t,onEdit:n,onDelete:s,handleUpdateProductQty:r,idEdit:c,len:d,itemIndex:p}=e,{basePrice:m,quantity:x,id:f,primaryImage:h,productName:g,variantSku:b,productsSearch:j,taxPrice:q=0}=t,S=y(),I=Q(+m,+q),C=I*+x,v={...t.productsSearch,selectOptions:t.optionList},D=H(v,{}),T=JSON.parse(t.optionList),w=D.filter((e=>e.valueText)),{productUrl:k}=j,P=M({price:`${U(I)}`,productInfo:t,showText:S("quoteDraft.quoteSummary.tbd")}),N=M({price:`${U(C)}`,productInfo:t,showText:S("quoteDraft.quoteSummary.tbd")});return a.jsx(o,{width:"100%",sx:{borderTop:"1px solid #D9DCE9",borderBottom:p===d-1?"1px solid #D9DCE9":""},children:a.jsxs(i,{sx:{color:"#313440",display:"flex",pl:0},children:[a.jsx(o,{children:a.jsx(Ye,{src:h||L,alt:"Product-img",loading:"lazy"})}),a.jsxs(o,{sx:{flex:1},children:[a.jsx(l,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:e}}=window;k&&(window.location.href=`${e}${k}`)},sx:{cursor:"pointer"},children:g}),a.jsx(l,{variant:"body1",color:"#616161",children:b}),a.jsx(o,{sx:{margin:"1rem 0"},children:T.length>0&&w.length>0&&a.jsx(o,{children:w.map((e=>a.jsx(l,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${e.valueLabel}: ${e.valueText}`},e.valueLabel)))})}),a.jsx(l,{sx:{fontSize:"14px"},children:`Price: ${P}`}),a.jsx(u,{size:"small",type:"number",variant:"outlined",label:"qty",disabled:!c,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:x,sx:{margin:"1rem 0",width:"60%",maxWidth:"100px","& label":{fontSize:"14px"},"& input":{fontSize:"14px"}},onChange:e=>{r(t,e.target.value)}}),a.jsx(l,{sx:{fontSize:"14px"},children:`Total: ${N}`}),a.jsxs(o,{sx:{marginTop:"1rem",textAlign:"end"},id:"shoppingList-actionList-mobile",children:[T.length>0&&c&&a.jsx(Oe,{sx:{marginRight:"0.5rem",cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{n({...j,quantity:x,selectOptions:t.optionList},f)}}),c&&a.jsx(_e,{sx:{cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{s(f)}})]})]})]})},t.id)}const et=d("div")((()=>({backgroundColor:"#FFFFFF",padding:"0",width:"100%","& tbody":{"& tr":{"& td":{verticalAlign:"top"},"& td: first-of-type":{verticalAlign:"inherit"}},"& tr: hover":{"& #shoppingList-actionList":{opacity:1}}}}))),tt=d("img")((()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"}))),at=d(u)((()=>({"& input":{paddingTop:"12px",paddingRight:"6px"}}))),nt=1e6;function it(e){const{total:t,items:n,idEdit:i=!0,isB2BUser:s,updateSummary:r}=e,c=y(),d=G(),[u,p]=f.useState(!1),[m,x]=f.useState(!1),[h,g]=f.useState(null),[b,j]=f.useState(""),S=async(e,t)=>{const a=await J(e,+t);d(K({id:a.id,quantity:a.quantity})),r()},I=e=>{d(X(e)),r()},C=(e,t)=>{g(e),j(t),x(!0)},v=[{key:"Product",title:c("quoteDraft.quoteTable.product"),render:e=>{const t={...e.productsSearch,selectOptions:e.optionList},n=H(t,{}),i=JSON.parse(e.optionList),s=n.filter((e=>e.valueText));return a.jsxs(o,{sx:{display:"flex",alignItems:"flex-start"},children:[a.jsx(tt,{src:e.primaryImage||L,alt:"Product-img",loading:"lazy"}),a.jsxs(o,{children:[a.jsx(l,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:e}}=window;t?.productUrl&&(window.location.href=`${e}${t?.productUrl}`)},sx:{cursor:"pointer"},children:e.productName}),a.jsx(l,{variant:"body1",color:"#616161",children:e.variantSku}),i.length>0&&s.length>0&&a.jsx(o,{children:s.map((e=>a.jsx(l,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${e.valueLabel}: ${e.valueText}`},e.valueLabel)))})]})]})},width:"40%"},{key:"Price",title:c("quoteDraft.quoteTable.price"),render:e=>{const{basePrice:t,taxPrice:n}=e,i=Q(+t,+n);return a.jsx(l,{sx:{padding:"12px 0"},children:M({price:`${U(i)}`,productInfo:e,showText:c("quoteDraft.quoteSummary.tbd")})})},width:"15%",style:{textAlign:"right"}},{key:"Qty",title:c("quoteDraft.quoteTable.qty"),render:e=>a.jsx(at,{size:"small",type:"number",variant:"outlined",disabled:!i,value:e.quantity,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},onChange:t=>{S(e,+t.target.value)},onBlur:t=>{(async(e,t)=>{let a=q(+t);a===+t&&a>=1&&a<=nt||(+t<1&&(a=1),+t>nt&&(a=nt),S(e,a))})(e,+t.target.value)},sx:{width:"75%"}}),width:"15%",style:{textAlign:"right"}},{key:"Total",title:c("quoteDraft.quoteTable.total"),render:e=>{const{basePrice:t,quantity:n,taxPrice:s}=e,r=Q(+t,+s)*+n,d=JSON.parse(e.optionList);return a.jsxs(o,{children:[a.jsx(l,{sx:{padding:"12px 0"},children:M({price:`${U(r)}`,productInfo:e,showText:c("quoteDraft.quoteSummary.tbd")})}),a.jsxs(o,{sx:{marginTop:"1rem",opacity:0,textAlign:"end"},id:"shoppingList-actionList",children:[d.length>0&&i&&a.jsx(Oe,{sx:{marginRight:"0.5rem",cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{const{productsSearch:t,id:a,optionList:n,quantity:i}=e;C({...t,quantity:i,selectOptions:n},a)}}),i&&a.jsx(_e,{sx:{cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{const{id:t}=e;I(t)}})]})]})},width:"15%",style:{textAlign:"right"}}];return a.jsxs(et,{children:[a.jsx(o,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0.5rem 0 1rem"},children:a.jsx(l,{sx:{fontSize:"24px"},children:c("quoteDraft.quoteTable.totalProducts",{total:t||0})})}),a.jsx(Xe,{columnItems:v,rowsPerPageOptions:[12,24,36],items:n,isCustomRender:!1,hover:!0,labelRowsPerPage:c("quoteDraft.quoteTable.perPage"),showBorder:!1,itemIsMobileSpacing:0,noDataText:c("quoteDraft.quoteTable.noProducts"),renderItem:(e,n)=>a.jsx(Ze,{len:t||0,item:e,itemIndex:n,onEdit:C,onDelete:I,handleUpdateProductQty:S,idEdit:i})}),a.jsx(Ie,{isOpen:m,isLoading:u,setIsLoading:p,product:h,onCancel:()=>{x(!1)},onConfirm:async e=>{await k(e);const t=(e=>e.map((e=>{const{variantId:t,newSelectOptionList:a,id:n,productId:i,name:s,quantity:o,variants:r=[],basePrice:l,taxPrice:c=0,calculatedNoTaxPrice:d=0,calculatedTaxPrice:u=0}=e;let[p]=r;r.length>1&&(p=r.find((e=>e.variant_id===t))??p);const{image_url:m="",sku:x}=p;let f;try{f=JSON.stringify(a)}catch(y){f="[]"}const h=p.bc_calculated_price?.tax_exclusive||0,g=p.bc_calculated_price?.tax_inclusive||0;return{node:{basePrice:l||h,taxPrice:c||+g-+h,optionList:f,id:n.toString(),primaryImage:m,productId:i,productName:s,productsSearch:{...e,selectOptions:f},quantity:+o,variantSku:x,calculatedTaxPrice:u,calculatedNoTaxPrice:d,calculatedValue:{}}}})))(e);t.forEach((e=>{const{variantSku:t,productsSearch:{variants:a},basePrice:n}=e.node,i=e,s=a?.find((e=>e.sku===t));s&&(i.node.taxPrice=s.bc_calculated_price.tax_inclusive-s.bc_calculated_price.tax_exclusive),i.node.id=b,i.node.basePrice=n})),x(!1),d(Y({id:b,product:t[0]})),r(),T.success(c("quoteDraft.quoteTable.productUpdated"))},isEdit:!0,isB2BUser:s})]})}const st=(e,t)=>[{name:"label",label:t("quoteDraft.config.addressLabel"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"},{name:"firstName",label:t("quoteDraft.config.firstName"),required:!1,default:"",fieldType:"text",xs:e?12:6,variant:"outlined",size:"small"},{name:"lastName",label:t("quoteDraft.config.lastName"),required:!1,default:"",fieldType:"text",xs:e?12:6,variant:"outlined",size:"small"},{name:"companyName",label:t("quoteDraft.config.company"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"},{name:"country",label:t("quoteDraft.config.country"),required:!1,default:"",fieldType:"dropdown",options:[],xs:12,variant:"outlined",size:"small",replaceOptions:{label:"countryName",value:"countryCode"}},{name:"address",label:t("quoteDraft.config.addressLine1"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"},{name:"apartment",label:t("quoteDraft.config.addressLine2"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"},{name:"city",label:t("quoteDraft.config.city"),required:!1,default:"",fieldType:"text",options:[],xs:12,variant:"outlined",size:"small"},{name:"state",label:t("quoteDraft.config.state"),required:!1,default:"",fieldType:"text",options:[],xs:e?12:6,variant:"outlined",size:"small",replaceOptions:{label:"stateName",value:"stateName"}},{name:"zipCode",label:t("quoteDraft.config.zipCode"),required:!1,default:"",fieldType:"text",options:[],xs:e?12:6,variant:"outlined",size:"small"},{name:"phoneNumber",label:t("quoteDraft.config.phoneNumber"),required:!1,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small"}],ot={address:"",addressId:0,apartment:"",city:"",country:"",firstName:"",label:"",lastName:"",phoneNumber:"",state:"",zipCode:"",companyName:""},rt={address:"",addressId:0,apartment:"",city:"",country:"",firstName:"",label:"",lastName:"",phoneNumber:"",state:"",zipCode:"",companyName:""}}}}));
