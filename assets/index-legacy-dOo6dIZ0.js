System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","../index-legacy.CVtY65ui.js","./react-setup-legacy-Cfb8SlNa.js","./lang-legacy-CyIWukAl.js","./lodashEs-legacy-Da1qF4L1.js","./b3Logger-legacy-C5y5ZQF8.js","./B3LinkTipContent-legacy-BJDRcQs2.js","./b3TriggerCartNumber-legacy-BfZm7KA-.js","./CreateShoppingList-legacy-BDgto0PW.js","./OrderShoppingList-legacy-ChHMxMYl.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./SearchProduct-legacy-Uhyb3mVB.js","./useBlockPendingAccountViewPrice-legacy-BpsI4K-l.js","./form-legacy-CAo5v63e.js","./B3CustomForm-legacy-s85GGmBp.js","./b2bGetVariantImageByVariantInfo-legacy-BFgbB579.js","./B3FilterMore-legacy-D7rLB9_2.js","./useSort-legacy-CfCrn6Eb.js","./B3FilterSearch-legacy-CVXwNYww.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./useCustomCallbacks-legacy-BXYZnszm.js","./b3ShoppingList-legacy-C8sTfbuY.js"],(function(e,t){"use strict";var r,s,n,a,i,o,d,c,u,l,p,h,x,g,m,y,f,k,j,P,S,b,v,I,C,q,O,w,A,L,T,E,B,Q,V,D,$,F,_,R,z,M,U,N,W,G,K,H,J,X,Y,Z,ee,te,re,se,ne,ae,ie,oe,de,ce,ue,le,pe,he,xe,ge;return{setters:[e=>{r=e.a9,s=e.j,n=e.G,a=e.B,i=e.T,o=e.W,d=e.X,c=e.e,u=e.K,l=e.ab,p=e.ae,h=e.$,x=e.s,g=e.g},e=>{m=e.r},null,e=>{y=e.B,f=e.ag,k=e.a5,j=e.at,P=e.G,S=e.u,b=e.aN,v=e.R,I=e.a,C=e.am,q=e.a3,O=e.aO,w=e.aP,A=e.aI,L=e.U,T=e.aQ,E=e.aR,B=e.aD,Q=e.aS,V=e.aT,D=e.aU,$=e.aV,F=e.aE,_=e.aF,R=e.p,z=e.a2,M=e.aW,U=e.aG,N=e.aH,W=e.aX,G=e.ak,K=e.ab,H=e.aY},e=>{J=e.u},e=>{X=e.i},e=>{Y=e.b},e=>{Z=e.s},e=>{ee=e.b},e=>{te=e.default},e=>{re=e.default},e=>{se=e.u},e=>{ne=e.b},e=>{ae=e.S,ie=e.d},e=>{oe=e.u},e=>{de=e.u},e=>{ce=e.B},e=>{ue=e.b},e=>{le=e.d,pe=e.B,he=e.a},e=>{xe=e.u},e=>{ge=e.B},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const e=S(R),t=S((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),[r]=I(),[i,o]=m.useState(!1),[d,c]=m.useState([]),{purchasabilityPermission:u}=S(v),l=!e||u;return s.jsxs(a,{sx:{width:"100%"},children:[s.jsx(a,{sx:{display:"flex",justifyContent:"center"},children:s.jsxs(n,{sx:{m:0,width:"100%"},container:!0,spacing:2,children:[s.jsx(n,{item:!0,xs:r?12:8,sx:{backgroundColor:"#ffffff",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px",pr:"16px"},children:s.jsx(Le,{setCheckedArr:c,setIsRequestLoading:o,isRequestLoading:i})}),s.jsx(n,{item:!0,xs:r?12:4,sx:{pt:r?"16px":"0px !important",pl:r?"0px !important":"16px"},children:l&&s.jsx(be,{isB2BUser:e})})]})}),s.jsx(a,{sx:{position:"fixed",bottom:0,left:0,width:"100%",zIndex:"999"},children:s.jsx(Pe,{checkedArr:d,isAgenting:t,setIsRequestLoading:o,isB2BUser:e})})]})}));const t=(e,t,r)=>{const s=e.find((e=>+e.variant_id===t||r===e.sku))||{};return!X(s)&&+s.bc_calculated_price.tax_inclusive},me=e=>`{\n  orderedProducts (\n    q: "${e.q||""}"\n    first: ${e.first}\n    offset: ${e.offset}\n    beginDateAt: "${e.beginDateAt}"\n    endDateAt: "${e.endDateAt}"\n    orderBy: "${e?.orderBy||""}"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node {\n        id,\n        createdAt,\n        updatedAt,\n        productName,\n        productBrandName,\n        variantSku,\n        productId,\n        variantId,\n        optionList,\n        orderedTimes,\n        firstOrderedAt,\n        lastOrderedAt,\n        lastOrderedItems,\n        sku,\n        lastOrdered,\n        imageUrl,\n        baseSku,\n        basePrice,\n        discount,\n        tax,\n        enteredInclusive,\n        productUrl,\n        optionSelections,\n      }\n    }\n  }\n}`,ye=e=>y.graphqlB2B({query:me(e)}),fe=e=>y.graphqlB2B({query:me(e)}),ke=async()=>{const{data:{site:{cart:e}}}=await j();if(e){const{lineItems:t}=e;return Object.keys(t).reduce(((e,r)=>(t[r].forEach((t=>{e.push(t)})),e)),[])}return[]},je=async(e,t)=>{const r=await ke();return e.reduce(((e,t)=>{const{node:s}=t,n=r.find((e=>e.sku===s?.sku&&+(e?.variantEntityId||0)==+(s?.variantId||0)))?.quantity||0;return e.push({...s?.productsSearch,variantId:s?.variantId,quantity:(s?.quantity||0)+n}),e}),[]).every((e=>((e,t)=>{const{variantId:r,variants:s,inventoryLevel:n,inventoryTracking:a,orderQuantityMaximum:i,orderQuantityMinimum:o,quantity:d,sku:c}=e,u=f.getState().global?.blockPendingQuoteNonPurchasableOOS?.isEnableProduct||!1,l="none"!==a;let p=!1,h=n,x=c;const g=s.find((e=>+e.variant_id==+r));return g&&(p=g.purchasing_disabled,h="variant"===a?g.inventory_level:h,x=g.sku||c),p&&!u?(k.error(t("purchasedProducts.quickOrderPad.notPurchaseableSku",{notPurchaseSku:x})),{isVerify:!1,type:"notPurchaseableSku"}):l&&+d>+h?(k.error(t("purchasedProducts.quickOrderPad.insufficientStockSku",{sku:x}),{isClose:!0}),{isVerify:!1,type:"insufficientStockSku"}):+o>0&&+d<o?(k.error(t("purchasedProducts.quickOrderPad.minQuantityMessage",{minQuantity:o,sku:x}),{isClose:!0}),{isVerify:!1,type:"minQuantity"}):+i>0&&+d>+i?(k.error(t("purchasedProducts.quickOrderPad.maxQuantityMessage",{maxQuantity:i,sku:x}),{isClose:!0}),{isVerify:!1,type:"maxQuantity"}):{isVerify:!0}})(e,t).isVerify))};function Pe(e){const{checkedArr:u,isAgenting:l,setIsRequestLoading:p,isB2BUser:h}=e,{state:{productQuoteEnabled:x=!1,shoppingListEnabled:g=!1}}=m.useContext(P),y=J(),f=S((e=>e.company.companyInfo.id)),{currency_code:j}=S(b),{purchasabilityPermission:R}=S(v),z=!h||R,M=r("(min-width:1775px)"),[U]=I(),N=m.useRef(null),[W,G]=m.useState(!1),[K,H]=m.useState(0),[X,ae]=m.useState(!1),[ie,oe]=m.useState(!1),[de,ce]=m.useState(!1),ue=S((e=>e.company.customer.customerGroupId)),le=se(),pe=U?{alignItems:"flex-start",flexDirection:"column"}:{alignItems:"center"},he=()=>{G(!1)},xe=e=>0===e?.length?[]:e.map((({product_option_id:e,value:t})=>({optionId:`attribute[${e}]`,optionValue:t}))),ge=e=>s.jsxs(a,{sx:{display:"flex",alignItems:"center"},children:[s.jsx(a,{sx:{mr:"15px"},children:y("purchasedProducts.footer.productsAddedToShoppingList")}),s.jsx(c,{onClick:()=>(e=>{le(`/shoppingList/${e}`)})(e),variant:"text",sx:{color:"#ffffff",padding:0},children:"view shopping list"})]}),me=e=>{ae(!1),oe(!1)},ye=()=>{oe(!1),ae(!0)},fe=()=>{he(),ye(),ae(!0)},ke=[{name:y("purchasedProducts.footer.addToCart"),key:"add-selected-to-cart",handleClick:async()=>{p(!0),he();try{const e=[];if(u.forEach((t=>{const{node:r}=t;e.includes(+r.productId)||e.push(+r.productId)})),0===e.length)return void k.error(y("purchasedProducts.footer.selectOneItemToAdd"));if(!(await je(u,y)))return;const t=f,r=h?O:w,{productsSearch:s}=await r({productIds:e,companyId:t,customerGroupId:ue}),n=(e=>{const t=[];return u.forEach((r=>{const{node:s}=r,n=e.find((e=>+s.productId===e.id));if(n){const{variants:e}=n;if(e.length>0){const r=e.find((e=>s.variantSku===e.sku&&+s.variantId==+e.variant_id));if(r){const{optionList:e,quantity:n}=s,a=e.map((e=>({optionId:e.product_option_id,optionValue:e.value})));t.push({optionSelections:a,allOptions:e,productId:parseInt(r.product_id,10)||0,quantity:n,variantId:parseInt(r.variant_id,10)||0})}}}})),t})(s||[]),a=await A(n);a&&!a.errors?k.success("",{jsx:Z({message:y("purchasedProducts.footer.productsAdded"),link:L,linkText:y("purchasedProducts.footer.viewCart"),isOutLink:!0,isCustomEvent:!0}),isClose:!0}):a&&a.errors?k.error(a.errors[0].message,{isClose:!0}):k.error("Error has occurred",{isClose:!0})}finally{ee(),p(!1)}},isDisabled:!z},{name:y("purchasedProducts.footer.addToQuote"),key:"add-selected-to-quote",handleClick:async()=>{p(!0),he();try{const e=u.filter((e=>{const{node:{variantSku:t}}=e;return""!==t&&null!=t})),t=u.filter((e=>{const{node:{variantSku:t}}=e;return!t}));if(t.length>0&&k.error(y("purchasedProducts.footer.cantAddProductsNoSku"),{isClose:!0}),t.length===u.length)return;const r=[];e.forEach((e=>{const{node:t}=e;r.includes(+t.productId)||r.push(+t.productId)}));const s=h?O:w,{productsSearch:n}=await s({productIds:r,companyId:f,customerGroupId:ue,currencyCode:j}),a=T(n);let i=!1,o="",d=!0;const c=[];if(e.forEach((e=>{const{node:{basePrice:t,optionList:r,variantSku:s,productId:n,productName:u,quantity:l,variantId:p,tax:h}}=e,x=xe(r),g=a.find((e=>+e.id==+n)),m=g?.variants.find((e=>e.sku===s));m||(o=y("purchasedProducts.footer.notFoundSku",{sku:s}),d=!1);const f={node:{id:E(),variantSku:m?.sku||s,variantId:p,productsSearch:g,primaryImage:m?.image_url||B,productName:u,quantity:+l||1,optionList:JSON.stringify(x),productId:n,basePrice:t,tax:h}};c.push(f),i=!0})),i=Q(c),!d)return void k.error("",{jsx:Z({message:o,link:"",linkText:"",isOutLink:!1}),isClose:!0});i?(await V(c,"2"),D(c),k.success("",{jsx:Z({message:y("purchasedProducts.footer.productsAddedToQuote"),link:"/quoteDraft",linkText:y("purchasedProducts.footer.viewQuote"),isOutLink:!1}),isClose:!0})):k.error("",{jsx:Z({message:y("purchasedProducts.footer.productsLimit"),link:"/quoteDraft",linkText:y("purchasedProducts.footer.viewQuote"),isOutLink:!1}),isClose:!0})}catch(e){Y.error(e)}finally{p(!1)}},isDisabled:!x},{name:y("purchasedProducts.footer.addSelectedProductsToShoppingList"),key:"add-selected-to-shoppingList",handleClick:fe,isDisabled:!g}];m.useEffect((()=>{if(u.length>0){let e=0;u.forEach((r=>{const{node:{variantId:s,productsSearch:{variants:n},quantity:a,basePrice:i}}=r;if(n?.length){const r=t(n,+s)||+(i||0);e+=r*+a}else e+=+(i||0)*+a})),H(1e3*e/1e3)}else H(0)}),[u]);let Pe={display:U?"initial":"flex",flexBasis:"100%"};return M&&(Pe={display:"flex",flexGrow:1,maxWidth:1775,margin:"auto"}),s.jsxs(s.Fragment,{children:[z||x||g?s.jsx(n,{sx:{position:"fixed",bottom:U&&l?"52px":0,left:0,backgroundColor:"#fff",width:"100%",padding:U?"0 0 1rem 0":"16px 0 16px",height:U?"8rem":"auto",marginLeft:0,display:"flex",flexWrap:"nowrap",zIndex:"1000"},container:!0,spacing:2,children:s.jsxs(n,{item:U,sx:Pe,children:[s.jsx(a,{sx:{width:263,display:U?"none":"block"}}),s.jsxs(a,{sx:{flex:1,display:"flex",alignItems:"center",paddingLeft:U?0:"50px",paddingRight:U?0:"80px"},children:[s.jsxs(a,{sx:{width:U?"100%":"calc(66.6667% + 32px)",display:"flex",zIndex:"999",justifyContent:"space-between",...pe},children:[s.jsx(i,{sx:{color:"#000000",fontSize:"16px",fontWeight:"400",mr:U?"0":"1rem"},children:y("purchasedProducts.footer.selectedProducts",{quantity:u.length})}),s.jsxs(a,{sx:{display:"flex",alignItems:"center",flexWrap:U?"wrap":"nowrap",width:U?"100%":"auto"},children:[s.jsx(i,{variant:"h6",sx:{fontSize:"16px",fontWeight:"700",color:"#000000"},children:y("purchasedProducts.footer.subtotal",{subtotal:C(K)})}),s.jsxs(a,{sx:{display:"flex",alignItems:"center",marginTop:U?"0.5rem":0,marginLeft:U?0:"20px",width:U?"100%":"auto"},children:[s.jsx(q,{variant:"contained",ref:N,onClick:()=>{0===u.length?k.error(y("purchasedProducts.error.selectOneItem")):G(!0)},sx:{marginRight:U?"1rem":0,width:U?"100%":"auto"},endIcon:s.jsx(ne,{}),children:y("purchasedProducts.footer.addSelectedTo")}),s.jsx(o,{id:"basic-menu",anchorEl:N.current,open:W,onClose:he,MenuListProps:{"aria-labelledby":"basic-button"},children:ke.length>0&&ke.map((e=>e.isDisabled?null:s.jsx(d,{onClick:()=>{e.handleClick()},children:e.name},e.key)))})]})]})]}),s.jsx(a,{sx:{width:"33.3333%",display:U?"none":"block"}})]})]})}):null,s.jsx(re,{isOpen:X,dialogTitle:y("purchasedProducts.footer.addToShoppingList"),onClose:me,onConfirm:async e=>{ce(!0);try{const t=[];u.forEach((e=>{const{node:r}=e;t.includes(+r.productId)||t.push(+r.productId)}));const r=[];u.forEach((e=>{const{node:{optionList:t,productId:s,quantity:n,variantId:a,productsSearch:i}}=e,o=xe(t),d=$(o,i);r.push({productId:+s,variantId:+a,quantity:+n,optionList:d})}));const s=h?F:_;await s({shoppingListId:+e,items:r}),k.success(y("purchasedProducts.footer.productsAddedToShoppingList"),{jsx:()=>ge(e),isClose:!0}),me()}catch(t){Y.error(t)}finally{ce(!1)}},onCreate:()=>{ae(!1),oe(!0)},isLoading:de,setLoading:ce}),s.jsx(te,{open:ie,onChange:fe,onClose:ye})]})}function Se(e){const t=J(),{updateList:r=(()=>{}),quickAddToList:o,level:d=3,buttonText:c=t("purchasedProducts.quickAdd.addProductToList")}=e,u=S(R),l=S((({company:e})=>e.companyInfo.status)),[p,h]=m.useState(d),[x,g]=m.useState([]),[y,f]=m.useState(!1),j=(e,t)=>{new Array(e).fill(1).forEach(((e,r)=>t(r)))};m.useEffect((()=>{let e=[];j(p,(r=>{e=[...e,...M(r,t)]})),g(e)}),[p]);const[P]=oe(),{control:b,handleSubmit:v,getValues:I,formState:{errors:C},setError:O,setValue:w}=de({mode:"all"}),A=e=>{const r={};let s=!0;return j(p,(n=>{const a=e[`sku-${n}`],i=e[`qty-${n}`];if(s=!1!==((e,r,s)=>{if(!r&&!s)return!0;let n=!0;const a=parseInt(s,10)||0;return r||(O(`sku-${e}`,{type:"manual",message:t("global.validate.required",{label:t("purchasedProducts.quickAdd.sku")})}),n=!1),s?a<=0&&(O(`qty-${e}`,{type:"manual",message:"incorrect number"}),n=!1):(O(`qty-${e}`,{type:"manual",message:t("global.validate.required",{label:t("purchasedProducts.quickAdd.qty")})}),n=!1),n})(n,a,i)&&s,s&&a){const e=parseInt(i,10)||0;r[a]=r[a]?r[a]+e:e}})),{skuValue:r,isValid:s,skus:Object.keys(r)}},L=(e,t,r,s)=>{t.forEach((t=>{const n=Object.keys(e).find((r=>e[r]===t))||"";n&&O(n.replace("sku",r),{type:"manual",message:s})}))},T=()=>{P&&0===l?k.info("Your business account is pending approval. This feature is currently disabled."):v((async e=>{try{f(!0);const{skuValue:s,isValid:n,skus:a}=A(e);if(!n||a.length<=0)return;const i=await(async e=>{const t=u?U:N;try{const{variantSku:r}=await t({skus:e},!0);return r}catch(r){return[]}})(a),{notFoundSku:d,notPurchaseSku:c,productItems:l,passSku:p,notStockSku:h,orderLimitSku:x}=await(async(e,t,r)=>{const s=[],n=[],a=[],i=[],o=[],d=[],c=await ke();return r.forEach((r=>{const u=(e||[]).find((e=>e.variantSku.toUpperCase()===r.toUpperCase()));if(!u)return void s.push(r);const{productId:l,variantId:p,option:h,purchasingDisabled:x="1",stock:g,isStock:m,maxQuantity:y,minQuantity:f,variantSku:k}=u,j=c.find((e=>e.sku===k&&+(e?.variantEntityId||0)==+(p||0)))?.quantity||0,P=t[r]||0,S=t[r]+j||0;if("1"===x)return void n.push(r);if("1"===m&&P>+g)return void o.push({sku:r,stock:+g});if(0!==y&&0!==f&&S>0&&(S>y||S<f))return void d.push({sku:r,min:S<f?f:0,max:S>y?y:0});const b=(h||[]).reduce(((e,t)=>{try{const r="string"==typeof t?JSON.parse(t):t;return e.push({optionId:`attribute[${r.option_id}]`,optionValue:`${r.id}`}),e}catch(r){return e}}),[]);i.push(r),a.push({...u,newSelectOptionList:b,productId:parseInt(l,10)||0,quantity:P,variantId:parseInt(p,10)||0})})),{notFoundSku:s,notPurchaseSku:n,notStockSku:o,productItems:a,passSku:i,orderLimitSku:d}})(i,s,a);if(d.length>0&&(L(e,d,"sku",""),k.error(t("purchasedProducts.quickAdd.notFoundSku",{notFoundSku:d.join(",")}),{isClose:!0})),c.length>0&&(L(e,c,"sku",""),k.error(t("purchasedProducts.quickAdd.notPurchaseableSku",{notPurchaseSku:c.join(",")}),{isClose:!0})),h.length>0){const r=h.map((e=>e.sku));h.forEach((t=>{const{sku:r,stock:s}=t;L(e,[r],"qty",`${s} in stock`)})),k.error(t("purchasedProducts.quickAdd.insufficientStockSku",{stockSku:r.join(",")}),{isClose:!0})}x.length>0&&x.forEach((r=>{const{min:s,max:n,sku:a}=r,i=0===s?n:s;L(e,[a],"qty",`${0===s?"Max":"Min"} is ${i}`);const o=0===s?"maximum":"minimum";k.error(t("purchasedProducts.quickAdd.purchaseQuantityLimitMessage",{typeText:o,limit:i,sku:a}),{isClose:!0})})),l.length>0&&(await o(l),((e,t)=>{t.forEach((t=>{const r=Object.keys(e).find((r=>e[r]===t))||"";r&&(w(r,""),w(r.replace("sku","qty"),""))}))})(e,p),r())}finally{f(!1)}}))()};return s.jsx(z,{isSpinning:y,spinningHeight:"auto",children:s.jsxs(a,{sx:{width:"100%"},children:[s.jsxs(n,{container:!0,sx:{margin:"16px 0"},children:[s.jsx(n,{item:!0,sx:{flex:1,display:"flex",alignItems:"center"},children:s.jsx(i,{sx:{color:"#000"},variant:"body1",children:t("purchasedProducts.quickAdd.title")})}),s.jsx(n,{item:!0,children:s.jsx(q,{variant:"text",sx:{textTransform:"initial",ml:"-8px"},onClick:()=>{h(p+d)},children:t("purchasedProducts.quickAdd.showMoreRowsButton")})})]}),s.jsx(a,{onKeyDown:e=>{"Enter"===e.key&&T()},sx:{"& label":{zIndex:0}},children:s.jsx(ce,{formFields:x,errors:C,control:b,getValues:I,setValue:w})}),s.jsx(q,{variant:"outlined",fullWidth:!0,disabled:y,onClick:T,sx:{margin:"20px 0"},children:s.jsx(z,{isSpinning:y,tip:"",size:16,children:s.jsx(a,{sx:{flex:1,textAlign:"center"},children:c})})})]})})}function be(e){const{isB2BUser:t}=e,[r]=I(),n=J(),[o,d]=m.useState(!1),[c,x]=m.useState([]),[g,y]=m.useState("Add to cart"),[f,j]=m.useState(!1),[P]=oe(),b=S((({company:e})=>e.companyInfo.status)),v=async e=>{const t=await A(e);return t&&t.errors?k.error(t.errors[0].message,{isClose:!0}):k.success("",{jsx:Z({message:n("purchasedProducts.quickOrderPad.productsAdded"),link:L,linkText:n("purchasedProducts.quickOrderPad.viewCart"),isOutLink:!0,isCustomEvent:!0}),isClose:!0}),ee(),t};return m.useEffect((()=>{c?.length>0&&y(n("purchasedProducts.quickOrderPad.addNProductsToCart",{quantity:c.length}))}),[c]),s.jsxs(u,{sx:{marginBottom:r?"8.5rem":"50px"},children:[s.jsx(l,{children:s.jsxs(a,{children:[s.jsx(i,{variant:"h5",sx:{marginBottom:"1rem"},children:n("purchasedProducts.quickOrderPad.quickOrderPanel")}),s.jsx(ae,{addToList:async e=>{const t=e.map((e=>({node:{...e,productsSearch:e}}))),r=await je(t,n);try{r&&await v(e)}catch(s){Y.error(s)}return e},searchDialogTitle:n("purchasedProducts.quickOrderPad.quickOrderPad"),type:"quickOrder",addButtonText:n("purchasedProducts.quickOrderPad.addToCart"),isB2BUser:t}),s.jsx(p,{}),s.jsx(Se,{quickAddToList:v,buttonText:n("purchasedProducts.quickOrderPad.addProductsToCart")}),s.jsx(p,{}),s.jsx(a,{sx:{margin:"20px 0 0"},children:s.jsxs(q,{variant:"text",onClick:()=>{P&&0===b?k.info(n("purchasedProducts.quickOrderPad.addNProductsToCart")):d(!0)},children:[s.jsx(ie,{sx:{marginRight:"8px"}}),n("purchasedProducts.quickOrderPad.bulkUploadCSV")]})})]})}),s.jsx(W,{isOpen:o,setIsOpen:d,handleAddToList:async e=>{j(!0);try{const{stockErrorFile:t,validProduct:r}=e,{notPurchaseSku:a,productItems:i,limitProduct:o,minLimitQuantity:c,maxLimitQuantity:u,outOfStock:l}=(e=>{const t=[],r=[],s=[],n=[],a=[],i=[];return e.forEach((e=>{const{products:o,qty:d}=e,{option:c,isStock:u,stock:l,purchasingDisabled:p,maxQuantity:h,minQuantity:x,variantSku:g,variantId:m,productId:y,modifiers:f}=o;if("1"===p||p)return void t.push(g);if("1"===u&&0===l)return void i.push(g);if("1"===u&&l>0&&l<+d)return void s.push({variantSku:g,AvailableAmount:l});if(+x>0&&+d<+x)return void n.push({variantSku:g,minQuantity:x});if(+h>0&&+d>+h)return void a.push({variantSku:g,maxQuantity:h});const k=c.map((e=>({optionId:e.option_id,optionValue:e.id})));r.push({productId:parseInt(y,10)||0,variantId:parseInt(m,10)||0,quantity:+d,optionSelections:k,allOptions:f})})),{notPurchaseSku:t,productItems:r,limitProduct:s,minLimitQuantity:n,maxLimitQuantity:a,outOfStock:i}})(r);i.length>0&&((e=>{e&&!e.errors?k.success("",{jsx:Z({message:n("purchasedProducts.quickOrderPad.productsAdded"),link:L,linkText:n("purchasedProducts.quickOrderPad.viewCart"),isOutLink:!0,isCustomEvent:!0}),isClose:!0}):k.error("Error has occurred",{isClose:!0})})(await A(i)),ee()),o.length>0&&o.forEach((e=>{k.warning("",{jsx:()=>(e=>s.jsxs(s.Fragment,{children:[s.jsx("p",{style:{margin:0},children:n("purchasedProducts.quickOrderPad.notEnoughStock",{variantSku:e.variantSku})}),s.jsx("p",{style:{margin:0},children:n("purchasedProducts.quickOrderPad.availableAmount",{availableAmount:e.AvailableAmount})})]}))(e)})})),a.length>0&&k.error(n("purchasedProducts.quickOrderPad.notPurchaseableSku",{notPurchaseSku:a.join(",")}),{isClose:!0}),l.length>0&&t&&k.error("",{jsx:()=>((e,t)=>s.jsxs(s.Fragment,{children:[s.jsx("p",{style:{margin:0},children:n("purchasedProducts.quickOrderPad.outOfStockSku",{outOfStock:e.join(",")})}),s.jsx(h,{href:t,sx:{color:"#FFFFFF"},children:n("purchasedProducts.quickOrderPad.downloadErrorsCSV")})]}))(l,t),isClose:!0}),c.length>0&&c.forEach((e=>{k.error(n("purchasedProducts.quickOrderPad.minQuantityMessage",{minQuantity:e.minQuantity,sku:e.variantSku}),{isClose:!0})})),u.length>0&&u.forEach((e=>{k.error(n("purchasedProducts.quickOrderPad.maxQuantityMessage",{maxQuantity:e.maxQuantity,sku:e.variantSku}),{isClose:!0})})),d(!1)}finally{j(!1)}},setProductData:x,addBtnText:g,isLoading:f,isToCart:!0})]})}const ve=x("img")((()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"})));function Ie(e){const{item:t,checkBox:r,handleUpdateProductQty:n}=e,o=J(),{quantity:d,imageUrl:c,productName:u,variantSku:p,optionList:h,basePrice:x,lastOrderedAt:m,variantId:y,productsSearch:f}=t,k=+x*+d,j=f.variants||[],P=ue(j,{variantId:y})||c;return s.jsx(a,{sx:{borderTop:"1px solid #D9DCE9"},children:s.jsxs(l,{sx:{color:"#313440",display:"flex",pl:0},children:[s.jsx(a,{children:r&&r()}),s.jsx(a,{children:s.jsx(ve,{src:P||B,alt:"Product-img",loading:"lazy"})}),s.jsxs(a,{sx:{flex:1},children:[s.jsx(i,{variant:"body1",color:"#212121",children:u}),s.jsx(i,{variant:"body1",color:"#616161",children:p}),s.jsx(a,{sx:{margin:"1rem 0"},children:h.length>0&&s.jsx(a,{children:h.map((e=>s.jsx(i,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${e.display_name}: ${e.display_value}`},e.display_name)))})}),s.jsx(i,{sx:{fontSize:"14px",display:"none"},children:o("purchasedProducts.quickOrderCard.price",{price:C(k)})}),s.jsx(a,{sx:{"& label":{zIndex:0}},children:s.jsx(g,{size:"small",type:"number",variant:"outlined",label:"Qty",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:d,sx:{margin:"1rem 0",width:"60%",maxWidth:"100px","& label":{fontSize:"14px"},"& input":{fontSize:"14px"}},onChange:e=>{n(t.id,e.target.value)}})}),s.jsx(i,{sx:{fontSize:"14px"},children:o("purchasedProducts.quickOrderCard.lastOrdered",{lastOrderedAt:G(m)})})]})]})},t.id)}const Ce=x("img")((()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"}))),qe=x(a)((()=>({display:"flex",flexDirection:"column",width:"100%","& tbody":{"& tr":{"& td":{verticalAlign:"top"},"& td: first-of-type":{paddingTop:"15px"}}}}))),Oe=x(g)((()=>({"& input":{paddingTop:"12px",paddingRight:"6px"}}))),we="lastOrderedAt",Ae={product:"productName",lastOrderedAt:"lastOrderedAt"};function Le({setIsRequestLoading:e,setCheckedArr:r,isRequestLoading:n}){const o=m.useRef(null),d=S(R),c=S((({company:e})=>e.companyInfo.id)),u=S((({company:e})=>e.customer.customerGroupId)),[l,p]=m.useState({q:"",beginDateAt:le(90),endDateAt:le(0),orderBy:`-${Ae[we]}`}),[h,x,g]=xe(Ae,we,l,p),[y,f]=m.useState(0),[j]=I(),P=J(),{currency_code:v}=S(b),q=(e,t)=>{if(""!==t&&+t<=0)return;const r=o.current?.getList()||[],s=o.current?.getCacheList()||[],n=r?.map((r=>{const{node:s}=r;return s?.id===e&&(s.quantity=+t||""),r})),a=s?.map((r=>{const{node:s}=r;return s?.id===e&&(s.quantity=+t||""),r}));o.current?.setList([...n]),o.current?.setCacheAllList([...a])},A=(e,t)=>{const{productsSearch:{isPriceHidden:r}}=t;return r?"":H({price:e,productInfo:t,showText:r?"":e,forcedSkip:!0})},L=e=>{const t=o.current?.getCacheList()||[];let r=e.quantity;if(t.length>0){const s=t.find((t=>t.node.variantId===e.variantId&&t.node.productId===e.productId&&t.node.id===e.id));s&&s.node&&(r=s.node.quantity||r)}return r},E=[{key:"product",title:P("purchasedProducts.product"),render:e=>{const{optionList:t,productsSearch:r,variantId:n}=e,o=r.variants||[],d=ue(o,{variantId:n})||e.imageUrl;return s.jsxs(a,{sx:{display:"flex",alignItems:"flex-start"},children:[s.jsx(Ce,{src:d||B,alt:"Product-img",loading:"lazy"}),s.jsxs(a,{children:[s.jsx(i,{variant:"body1",color:"#212121",children:e.productName}),s.jsx(i,{variant:"body1",color:"#616161",children:e.variantSku}),t.length>0&&s.jsx(a,{children:t.map((e=>s.jsx(i,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${e.display_name}: ${e.display_value}`},e.id)))})]})]})},width:"40%",isSortable:!0},{key:"price",title:P("purchasedProducts.price"),render:e=>{const{productsSearch:{variants:r},variantId:n,basePrice:a}=e;let o=+a;r?.length&&(o=t(r,+n)||+a);const d=(o||+a)*+L(e);return s.jsx(i,{sx:{padding:"12px 0"},children:`${A(C(d),e)}`})},width:"15%",style:{textAlign:"right"}},{key:"qty",title:P("purchasedProducts.qty"),render:e=>{const t=L(e);return s.jsx(Oe,{size:"small",type:"number",variant:"outlined",value:t,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},onChange:t=>{q(e.id,t.target.value)}})},width:"15%",style:{textAlign:"right"}},{key:"lastOrderedAt",title:P("purchasedProducts.lastOrdered"),render:e=>s.jsx(a,{children:s.jsx(i,{sx:{padding:"12px 0"},children:`${G(+e.lastOrderedAt)}`})}),width:"15%",style:{textAlign:"right"},isSortable:!0}];return s.jsx(z,{isSpinning:n,children:s.jsxs(qe,{children:[s.jsx(i,{sx:{fontSize:"24px",height:"50px"},children:P("purchasedProducts.totalProducts",{total:y})}),s.jsxs(a,{sx:{marginBottom:"5px",display:"flex","& label":{zIndex:0}},children:[s.jsxs(a,{sx:{width:j?"100%":"40%",mr:"20px",display:"flex",justifyContent:j?"space-between":"flex-start"},children:[s.jsx(ge,{h:"48px",searchBGColor:"rgba(0, 0, 0, 0.06)",handleChange:e=>{(async e=>{p({...l,q:e})})(e)}}),j&&s.jsx(a,{sx:{display:"flex",alignItems:"center"},children:s.jsx(pe,{fiterMoreInfo:[],startPicker:{isEnabled:!0,label:P("purchasedProducts.from"),defaultValue:l?.beginDateAt||"",pickerKey:"start"},endPicker:{isEnabled:!0,label:P("purchasedProducts.to"),defaultValue:l?.endDateAt||"",pickerKey:"end"},isShowMore:!0,onChange:e=>{const t={...l};t.beginDateAt=e.startValue,t.endDateAt=e.endValue,p(t)}})})]}),!j&&s.jsx(he,{handleChange:(e,t)=>{const r={...l};"start"===e?r.beginDateAt=t||le(90):r.endDateAt=t||le(0),p(r)},xs:{mt:0,height:"50px"},startPicker:{isEnabled:!0,label:P("purchasedProducts.from"),defaultValue:le(90),pickerKey:"start"},endPicker:{isEnabled:!0,label:P("purchasedProducts.to"),defaultValue:le(),pickerKey:"end"},customWidth:"58%"})]}),s.jsx(K,{ref:o,columnItems:E,rowsPerPageOptions:[12,24,36],getRequestList:async e=>{const{orderedProducts:{edges:t,totalCount:r}}=d?await ye(e):await fe(e),s=await(async e=>{if(e.length>0){const r=[];e.forEach((e=>{const{node:t}=e;t.quantity=1,r.includes(t.productId)||r.push(t.productId)}));const s=d?O:w;try{const{productsSearch:t}=await s({productIds:r,currencyCode:v,companyId:c,customerGroupId:u}),n=T(t);return e.forEach((e=>{const{node:t}=e,r=n.find((e=>{const{id:r}=e;return+t.productId==+r}));t.productsSearch=r||{}})),e}catch(t){k.error(t)}}return[]})(t);return f(r),{edges:s,totalCount:r}},searchParams:l,isCustomRender:!1,showCheckbox:!0,showSelectAllCheckbox:!0,disableCheckbox:!1,hover:!0,labelRowsPerPage:P("purchasedProducts.itemsPerPage"),showBorder:!1,requestLoading:e,getSelectCheckbox:e=>{if(e.length>0){const t=o.current?.getCacheList()||[],s=e.reduce(((e,r)=>{const s=t.find((e=>{const{node:t}=e;return t.id===r}));return s&&e.push(s),e}),[]);r([...s])}else r([])},itemIsMobileSpacing:0,isSelectOtherPageCheckbox:!0,noDataText:P("purchasedProducts.noProductsFound"),sortDirection:x,orderBy:g,sortByFn:h,renderItem:(e,t,r)=>s.jsx(Ie,{item:e,checkBox:r,handleUpdateProductQty:q})})]})})}}}}));
