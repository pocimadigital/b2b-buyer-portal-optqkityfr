import{a9 as Yt,j as t,G as at,B as g,T as z,W as Zt,X as te,e as ee,K as se,ab as Vt,ae as Tt,$ as re,s as yt,g as Qt}from"./mui-CyG7s_nf.js";import{r as q}from"./reactVendor-BAhb8EbJ.js";import"../index.mqw90l6u.js";import{B as Dt,ag as ne,a5 as k,at as oe,G as ie,u as K,aN as Ft,R as _t,a as kt,am as Ot,a3 as gt,aO as It,aP as bt,aI as Ct,U as jt,aQ as Mt,aR as ae,aD as At,aS as ce,aT as de,aU as ue,aV as le,aE as pe,aF as he,p as wt,a2 as Lt,aW as fe,aG as xe,aH as me,aX as ge,ak as Rt,ab as ye,aY as ke}from"./react-setup-CTgvGe07.js";import{u as xt}from"./lang-DxTEvHWx.js";import{i as Pe}from"./lodashEs-Ck10JMnh.js";import{b as vt}from"./b3Logger-CMQiGC3f.js";import{s as pt}from"./B3LinkTipContent-BURvls1t.js";import{b as qt}from"./b3TriggerCartNumber-B0HGVg_J.js";import Se from"./CreateShoppingList-Bk1Qa6Et.js";import Ie from"./OrderShoppingList-DZQw8GKN.js";import{u as be}from"./router-BbCjXwHs.js";import{b as Ce}from"./muiIcon-BfPleEzf.js";import{S as je,d as Le}from"./SearchProduct-DZudKWVm.js";import{u as $t}from"./useBlockPendingAccountViewPrice-Cb0XTHej.js";import{u as ve}from"./form-Bvi8lP6x.js";import{B as qe}from"./B3CustomForm-JX8vp-Z8.js";import{b as Ut}from"./b2bGetVariantImageByVariantInfo-BMNBG_0_.js";import{d as lt,B as Oe,a as Ae}from"./B3FilterMore-CdE_4KCK.js";import{u as we}from"./useSort-Cu2YrCwH.js";import{B as Te}from"./B3FilterSearch-Bs8uWzyp.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./useCustomCallbacks-D2SU_LXI.js";import"./b3ShoppingList-BKGnXeE6.js";const zt=(h,n,b)=>{const i=h.find(x=>+x.variant_id===n||b===x.sku)||{};return Pe(i)?!1:+i.bc_calculated_price.tax_inclusive},Nt=h=>'{\n  orderedProducts (\n    q: "'.concat(h.q||"",'"\n    first: ').concat(h.first,"\n    offset: ").concat(h.offset,'\n    beginDateAt: "').concat(h.beginDateAt,'"\n    endDateAt: "').concat(h.endDateAt,'"\n    orderBy: "').concat((h==null?void 0:h.orderBy)||"",'"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node {\n        id,\n        createdAt,\n        updatedAt,\n        productName,\n        productBrandName,\n        variantSku,\n        productId,\n        variantId,\n        optionList,\n        orderedTimes,\n        firstOrderedAt,\n        lastOrderedAt,\n        lastOrderedItems,\n        sku,\n        lastOrdered,\n        imageUrl,\n        baseSku,\n        basePrice,\n        discount,\n        tax,\n        enteredInclusive,\n        productUrl,\n        optionSelections,\n      }\n    }\n  }\n}'),Be=h=>Dt.graphqlB2B({query:Nt(h)}),Ee=h=>Dt.graphqlB2B({query:Nt(h)}),Ve=(h,n)=>{var J,R;const{variantId:b,variants:i,inventoryLevel:x,inventoryTracking:O,orderQuantityMaximum:p,orderQuantityMinimum:a,quantity:S,sku:B}=h,Z=((R=(J=ne.getState().global)==null?void 0:J.blockPendingQuoteNonPurchasableOOS)==null?void 0:R.isEnableProduct)||!1,H=O!=="none";let N=!1,f=x,E=B;const I=i.find(st=>+st.variant_id==+b);return I&&(N=I.purchasing_disabled,f=O==="variant"?I.inventory_level:f,E=I.sku||B),N&&!Z?(k.error(n("purchasedProducts.quickOrderPad.notPurchaseableSku",{notPurchaseSku:E})),{isVerify:!1,type:"notPurchaseableSku"}):H&&+S>+f?(k.error(n("purchasedProducts.quickOrderPad.insufficientStockSku",{sku:E}),{isClose:!0}),{isVerify:!1,type:"insufficientStockSku"}):+a>0&&+S<a?(k.error(n("purchasedProducts.quickOrderPad.minQuantityMessage",{minQuantity:a,sku:E}),{isClose:!0}),{isVerify:!1,type:"minQuantity"}):+p>0&&+S>+p?(k.error(n("purchasedProducts.quickOrderPad.maxQuantityMessage",{maxQuantity:p,sku:E}),{isClose:!0}),{isVerify:!1,type:"maxQuantity"}):{isVerify:!0}},Gt=async()=>{const{data:{site:{cart:h}}}=await oe();if(h){const{lineItems:n}=h;return Object.keys(n).reduce((b,i)=>(n[i].forEach(x=>{b.push(x)}),b),[])}return[]},Wt=async(h,n)=>{const b=await Gt();return h.reduce((x,O)=>{var S;const{node:p}=O,a=((S=b.find(B=>B.sku===(p==null?void 0:p.sku)&&+((B==null?void 0:B.variantEntityId)||0)==+((p==null?void 0:p.variantId)||0)))==null?void 0:S.quantity)||0;return x.push({...p==null?void 0:p.productsSearch,variantId:p==null?void 0:p.variantId,quantity:((p==null?void 0:p.quantity)||0)+a}),x},[]).every(x=>Ve(x,n).isVerify)};function Qe(h){const{checkedArr:n,isAgenting:b,setIsRequestLoading:i,isB2BUser:x}=h,{state:{productQuoteEnabled:O=!1,shoppingListEnabled:p=!1}}=q.useContext(ie),a=xt(),S=K(r=>r.company.companyInfo.id),{currency_code:B}=K(Ft),{purchasabilityPermission:Z}=K(_t),H=x?Z:!0,N=Yt("(min-width:1775px)"),[f]=kt(),E=q.useRef(null),[I,J]=q.useState(!1),[R,st]=q.useState(0),[ct,tt]=q.useState(!1),[rt,y]=q.useState(!1),[A,G]=q.useState(!1),F=K(r=>r.company.customer.customerGroupId),W=be(),s=f?{alignItems:"flex-start",flexDirection:"column"}:{alignItems:"center"},o=()=>{n.length===0?k.error(a("purchasedProducts.error.selectOneItem")):J(!0)},c=()=>{J(!1)},m=r=>{const w=[];return n.forEach(T=>{const{node:V}=T,D=r.find(Q=>+V.productId===Q.id);if(D){const{variants:Q}=D;if(Q.length>0){const v=Q.find(M=>V.variantSku===M.sku&&+V.variantId==+M.variant_id);if(v){const{optionList:M,quantity:et}=V,nt=M.map(U=>({optionId:U.product_option_id,optionValue:U.value}));w.push({optionSelections:nt,allOptions:M,productId:parseInt(v.product_id,10)||0,quantity:et,variantId:parseInt(v.variant_id,10)||0})}}}}),w},e=async()=>{i(!0),c();try{const r=[];if(n.forEach(M=>{const{node:et}=M;r.includes(+et.productId)||r.push(+et.productId)}),r.length===0){k.error(a("purchasedProducts.footer.selectOneItemToAdd"));return}if(!await Wt(n,a))return;const T=S,V=x?It:bt,{productsSearch:D}=await V({productIds:r,companyId:T,customerGroupId:F}),Q=m(D||[]),v=await Ct(Q);v&&!v.errors?k.success("",{jsx:pt({message:a("purchasedProducts.footer.productsAdded"),link:jt,linkText:a("purchasedProducts.footer.viewCart"),isOutLink:!0,isCustomEvent:!0}),isClose:!0}):v&&v.errors?k.error(v.errors[0].message,{isClose:!0}):k.error("Error has occurred",{isClose:!0})}finally{qt(),i(!1)}},d=r=>(r==null?void 0:r.length)===0?[]:r.map(({product_option_id:T,value:V})=>({optionId:"attribute[".concat(T,"]"),optionValue:V})),u=async()=>{i(!0),c();try{const r=n.filter(U=>{const{node:{variantSku:_}}=U;return _!==""&&_!==null&&_!==void 0}),w=n.filter(U=>{const{node:{variantSku:_}}=U;return!_});if(w.length>0&&k.error(a("purchasedProducts.footer.cantAddProductsNoSku"),{isClose:!0}),w.length===n.length)return;const T=[];r.forEach(U=>{const{node:_}=U;T.includes(+_.productId)||T.push(+_.productId)});const V=x?It:bt,{productsSearch:D}=await V({productIds:T,companyId:S,customerGroupId:F,currencyCode:B}),Q=Mt(D);let v=!1,M="",et=!0;const nt=[];if(r.forEach(U=>{const{node:{basePrice:_,optionList:Pt,variantSku:ut,productId:X,productName:ht,quantity:ft,variantId:Kt,tax:Ht}}=U,Jt=d(Pt),mt=Q.find(St=>+St.id==+X),dt=mt==null?void 0:mt.variants.find(St=>St.sku===ut);dt||(M=a("purchasedProducts.footer.notFoundSku",{sku:ut}),et=!1);const Xt={node:{id:ae(),variantSku:(dt==null?void 0:dt.sku)||ut,variantId:Kt,productsSearch:mt,primaryImage:(dt==null?void 0:dt.image_url)||At,productName:ht,quantity:+ft||1,optionList:JSON.stringify(Jt),productId:X,basePrice:_,tax:Ht}};nt.push(Xt),v=!0}),v=ce(nt),!et){k.error("",{jsx:pt({message:M,link:"",linkText:"",isOutLink:!1}),isClose:!0});return}v?(await de(nt,"2"),ue(nt),k.success("",{jsx:pt({message:a("purchasedProducts.footer.productsAddedToQuote"),link:"/quoteDraft",linkText:a("purchasedProducts.footer.viewQuote"),isOutLink:!1}),isClose:!0})):k.error("",{jsx:pt({message:a("purchasedProducts.footer.productsLimit"),link:"/quoteDraft",linkText:a("purchasedProducts.footer.viewQuote"),isOutLink:!1}),isClose:!0})}catch(r){vt.error(r)}finally{i(!1)}},l=r=>{W("/shoppingList/".concat(r))},P=r=>t.jsxs(g,{sx:{display:"flex",alignItems:"center"},children:[t.jsx(g,{sx:{mr:"15px"},children:a("purchasedProducts.footer.productsAddedToShoppingList")}),t.jsx(ee,{onClick:()=>l(r),variant:"text",sx:{color:"#ffffff",padding:0},children:"view shopping list"})]}),C=r=>{tt(!1),y(!1)},L=()=>{tt(!1),y(!0)},j=()=>{y(!1),tt(!0)},ot=()=>{c(),j(),tt(!0)},it=async r=>{G(!0);try{const w=[];n.forEach(D=>{const{node:Q}=D;w.includes(+Q.productId)||w.push(+Q.productId)});const T=[];n.forEach(D=>{const{node:{optionList:Q,productId:v,quantity:M,variantId:et,productsSearch:nt}}=D,U=d(Q),_=le(U,nt);T.push({productId:+v,variantId:+et,quantity:+M,optionList:_})}),await(x?pe:he)({shoppingListId:+r,items:T}),k.success(a("purchasedProducts.footer.productsAddedToShoppingList"),{jsx:()=>P(r),isClose:!0}),C(!0)}catch(w){vt.error(w)}finally{G(!1)}},$=[{name:a("purchasedProducts.footer.addToCart"),key:"add-selected-to-cart",handleClick:e,isDisabled:!H},{name:a("purchasedProducts.footer.addToQuote"),key:"add-selected-to-quote",handleClick:u,isDisabled:!O},{name:a("purchasedProducts.footer.addSelectedProductsToShoppingList"),key:"add-selected-to-shoppingList",handleClick:ot,isDisabled:!p}];q.useEffect(()=>{if(n.length>0){let r=0;n.forEach(w=>{const{node:{variantId:T,productsSearch:{variants:V},quantity:D,basePrice:Q}}=w;if(V!=null&&V.length){const v=zt(V,+T)||+(Q||0);r+=v*+D}else r+=+(Q||0)*+D}),st(1e3*r/1e3)}else st(0)},[n]);let Y={display:f?"initial":"flex",flexBasis:"100%"};return N&&(Y={display:"flex",flexGrow:1,maxWidth:1775,margin:"auto"}),t.jsxs(t.Fragment,{children:[H||O||p?t.jsx(at,{sx:{position:"fixed",bottom:f&&b?"52px":0,left:0,backgroundColor:"#fff",width:"100%",padding:f?"0 0 1rem 0":"16px 0 16px",height:f?"8rem":"auto",marginLeft:0,display:"flex",flexWrap:"nowrap",zIndex:"1000"},container:!0,spacing:2,children:t.jsxs(at,{item:f,sx:Y,children:[t.jsx(g,{sx:{width:263,display:f?"none":"block"}}),t.jsxs(g,{sx:{flex:1,display:"flex",alignItems:"center",paddingLeft:f?0:"50px",paddingRight:f?0:"80px"},children:[t.jsxs(g,{sx:{width:f?"100%":"calc(66.6667% + 32px)",display:"flex",zIndex:"999",justifyContent:"space-between",...s},children:[t.jsx(z,{sx:{color:"#000000",fontSize:"16px",fontWeight:"400",mr:f?"0":"1rem"},children:a("purchasedProducts.footer.selectedProducts",{quantity:n.length})}),t.jsxs(g,{sx:{display:"flex",alignItems:"center",flexWrap:f?"wrap":"nowrap",width:f?"100%":"auto"},children:[t.jsx(z,{variant:"h6",sx:{fontSize:"16px",fontWeight:"700",color:"#000000"},children:a("purchasedProducts.footer.subtotal",{subtotal:Ot(R)})}),t.jsxs(g,{sx:{display:"flex",alignItems:"center",marginTop:f?"0.5rem":0,marginLeft:f?0:"20px",width:f?"100%":"auto"},children:[t.jsx(gt,{variant:"contained",ref:E,onClick:o,sx:{marginRight:f?"1rem":0,width:f?"100%":"auto"},endIcon:t.jsx(Ce,{}),children:a("purchasedProducts.footer.addSelectedTo")}),t.jsx(Zt,{id:"basic-menu",anchorEl:E.current,open:I,onClose:c,MenuListProps:{"aria-labelledby":"basic-button"},children:$.length>0&&$.map(r=>r.isDisabled?null:t.jsx(te,{onClick:()=>{r.handleClick()},children:r.name},r.key))})]})]})]}),t.jsx(g,{sx:{width:"33.3333%",display:f?"none":"block"}})]})]})}):null,t.jsx(Ie,{isOpen:ct,dialogTitle:a("purchasedProducts.footer.addToShoppingList"),onClose:C,onConfirm:it,onCreate:L,isLoading:A,setLoading:G}),t.jsx(Se,{open:rt,onChange:ot,onClose:j})]})}function De(h){const n=xt(),{updateList:b=()=>{},quickAddToList:i,level:x=3,buttonText:O=n("purchasedProducts.quickAdd.addProductToList")}=h,p=K(wt),a=K(({company:e})=>e.companyInfo.status),[S,B]=q.useState(x),[Z,H]=q.useState([]),[N,f]=q.useState(!1),E=(e,d)=>{new Array(e).fill(1).forEach((u,l)=>d(l))};q.useEffect(()=>{let e=[];E(S,d=>{e=[...e,...fe(d,n)]}),H(e)},[S]);const[I]=$t(),J=()=>{B(S+x)},{control:R,handleSubmit:st,getValues:ct,formState:{errors:tt},setError:rt,setValue:y}=ve({mode:"all"}),A=(e,d,u)=>{if(!d&&!u)return!0;let l=!0;const P=parseInt(u,10)||0;return d||(rt("sku-".concat(e),{type:"manual",message:n("global.validate.required",{label:n("purchasedProducts.quickAdd.sku")})}),l=!1),u?P<=0&&(rt("qty-".concat(e),{type:"manual",message:"incorrect number"}),l=!1):(rt("qty-".concat(e),{type:"manual",message:n("global.validate.required",{label:n("purchasedProducts.quickAdd.qty")})}),l=!1),l},G=e=>{const d={};let u=!0;return E(S,l=>{const P=e["sku-".concat(l)],C=e["qty-".concat(l)];if(u=A(l,P,C)===!1?!1:u,u&&P){const L=parseInt(C,10)||0;d[P]=d[P]?d[P]+L:L}}),{skuValue:d,isValid:u,skus:Object.keys(d)}},F=async(e,d,u)=>{const l=[],P=[],C=[],L=[],j=[],ot=[],it=await Gt();return u.forEach($=>{var ut;const Y=(e||[]).find(X=>X.variantSku.toUpperCase()===$.toUpperCase());if(!Y){l.push($);return}const{productId:r,variantId:w,option:T,purchasingDisabled:V="1",stock:D,isStock:Q,maxQuantity:v,minQuantity:M,variantSku:et}=Y,nt=((ut=it.find(X=>X.sku===et&&+((X==null?void 0:X.variantEntityId)||0)==+(w||0)))==null?void 0:ut.quantity)||0,U=d[$]||0,_=d[$]+nt||0;if(V==="1"){P.push($);return}if(Q==="1"&&U>+D){j.push({sku:$,stock:+D});return}if(v!==0&&M!==0&&_>0&&(_>v||_<M)){ot.push({sku:$,min:_<M?M:0,max:_>v?v:0});return}const Pt=(T||[]).reduce((X,ht)=>{try{const ft=typeof ht=="string"?JSON.parse(ht):ht;return X.push({optionId:"attribute[".concat(ft.option_id,"]"),optionValue:"".concat(ft.id)}),X}catch(ft){return X}},[]);L.push($),C.push({...Y,newSelectOptionList:Pt,productId:parseInt(r,10)||0,quantity:U,variantId:parseInt(w,10)||0})}),{notFoundSku:l,notPurchaseSku:P,notStockSku:j,productItems:C,passSku:L,orderLimitSku:ot}},W=(e,d,u,l)=>{d.forEach(P=>{const C=Object.keys(e).find(L=>e[L]===P)||"";C&&rt(C.replace("sku",u),{type:"manual",message:l})})},s=(e,d)=>{d.forEach(u=>{const l=Object.keys(e).find(P=>e[P]===u)||"";l&&(y(l,""),y(l.replace("sku","qty"),""))})},o=async e=>{const d=p?xe:me;try{const{variantSku:u}=await d({skus:e},!0);return u}catch(u){return[]}},c=()=>{if(I&&a===0){k.info("Your business account is pending approval. This feature is currently disabled.");return}st(async e=>{try{f(!0);const{skuValue:d,isValid:u,skus:l}=G(e);if(!u||l.length<=0)return;const P=await o(l),{notFoundSku:C,notPurchaseSku:L,productItems:j,passSku:ot,notStockSku:it,orderLimitSku:$}=await F(P,d,l);if(C.length>0&&(W(e,C,"sku",""),k.error(n("purchasedProducts.quickAdd.notFoundSku",{notFoundSku:C.join(",")}),{isClose:!0})),L.length>0&&(W(e,L,"sku",""),k.error(n("purchasedProducts.quickAdd.notPurchaseableSku",{notPurchaseSku:L.join(",")}),{isClose:!0})),it.length>0){const Y=it.map(r=>r.sku);it.forEach(r=>{const{sku:w,stock:T}=r;W(e,[w],"qty","".concat(T," in stock"))}),k.error(n("purchasedProducts.quickAdd.insufficientStockSku",{stockSku:Y.join(",")}),{isClose:!0})}$.length>0&&$.forEach(Y=>{const{min:r,max:w,sku:T}=Y,V=r===0?"Max":"Min",D=r===0?w:r;W(e,[T],"qty","".concat(V," is ").concat(D));const Q=r===0?"maximum":"minimum";k.error(n("purchasedProducts.quickAdd.purchaseQuantityLimitMessage",{typeText:Q,limit:D,sku:T}),{isClose:!0})}),j.length>0&&(await i(j),s(e,ot),b())}finally{f(!1)}})()},m=e=>{e.key==="Enter"&&c()};return t.jsx(Lt,{isSpinning:N,spinningHeight:"auto",children:t.jsxs(g,{sx:{width:"100%"},children:[t.jsxs(at,{container:!0,sx:{margin:"16px 0",flexWrap:"column",flexDirection:"column",gap:"10px"},children:[t.jsx(at,{item:!0,sx:{flex:1,display:"flex",alignItems:"center"},children:t.jsx(z,{sx:{color:"#000"},variant:"body1",children:n("purchasedProducts.quickAdd.title")})}),t.jsx(at,{item:!0,children:t.jsx(gt,{variant:"text",sx:{textTransform:"initial",ml:"-8px"},onClick:J,children:n("purchasedProducts.quickAdd.showMoreRowsButton")})})]}),t.jsx(g,{onKeyDown:m,sx:{"& label":{zIndex:0}},children:t.jsx(qe,{formFields:Z,errors:tt,control:R,getValues:ct,setValue:y})}),t.jsx(gt,{variant:"outlined",fullWidth:!0,disabled:N,onClick:c,sx:{margin:"20px 0"},children:t.jsx(Lt,{isSpinning:N,tip:"",size:16,children:t.jsx(g,{sx:{flex:1,textAlign:"center"},children:O})})})]})})}function Fe(h){const{isB2BUser:n}=h,[b]=kt(),i=xt(),[x,O]=q.useState(!1),[p,a]=q.useState([]),[S,B]=q.useState("Add to cart"),[Z,H]=q.useState(!1),[N]=$t(),f=K(({company:y})=>y.companyInfo.status),E=y=>{y&&!y.errors?k.success("",{jsx:pt({message:i("purchasedProducts.quickOrderPad.productsAdded"),link:jt,linkText:i("purchasedProducts.quickOrderPad.viewCart"),isOutLink:!0,isCustomEvent:!0}),isClose:!0}):k.error("Error has occurred",{isClose:!0})},I=async y=>{const A=await Ct(y);return A&&A.errors?k.error(A.errors[0].message,{isClose:!0}):k.success("",{jsx:pt({message:i("purchasedProducts.quickOrderPad.productsAdded"),link:jt,linkText:i("purchasedProducts.quickOrderPad.viewCart"),isOutLink:!0,isCustomEvent:!0}),isClose:!0}),qt(),A},J=y=>t.jsxs(t.Fragment,{children:[t.jsx("p",{style:{margin:0},children:i("purchasedProducts.quickOrderPad.notEnoughStock",{variantSku:y.variantSku})}),t.jsx("p",{style:{margin:0},children:i("purchasedProducts.quickOrderPad.availableAmount",{availableAmount:y.AvailableAmount})})]}),R=(y,A)=>t.jsxs(t.Fragment,{children:[t.jsx("p",{style:{margin:0},children:i("purchasedProducts.quickOrderPad.outOfStockSku",{outOfStock:y.join(",")})}),t.jsx(re,{href:A,sx:{color:"#FFFFFF"},children:i("purchasedProducts.quickOrderPad.downloadErrorsCSV")})]}),st=y=>{const A=[],G=[],F=[],W=[],s=[],o=[];return y.forEach(c=>{const{products:m,qty:e}=c,{option:d,isStock:u,stock:l,purchasingDisabled:P,maxQuantity:C,minQuantity:L,variantSku:j,variantId:ot,productId:it,modifiers:$}=m;if(P==="1"||P){A.push(j);return}if(u==="1"&&l===0){o.push(j);return}if(u==="1"&&l>0&&l<+e){F.push({variantSku:j,AvailableAmount:l});return}if(+L>0&&+e<+L){W.push({variantSku:j,minQuantity:L});return}if(+C>0&&+e>+C){s.push({variantSku:j,maxQuantity:C});return}const Y=d.map(r=>({optionId:r.option_id,optionValue:r.id}));G.push({productId:parseInt(it,10)||0,variantId:parseInt(ot,10)||0,quantity:+e,optionSelections:Y,allOptions:$})}),{notPurchaseSku:A,productItems:G,limitProduct:F,minLimitQuantity:W,maxLimitQuantity:s,outOfStock:o}},ct=async y=>{H(!0);try{const{stockErrorFile:A,validProduct:G}=y,{notPurchaseSku:F,productItems:W,limitProduct:s,minLimitQuantity:o,maxLimitQuantity:c,outOfStock:m}=st(G);if(W.length>0){const e=await Ct(W);E(e),qt()}s.length>0&&s.forEach(e=>{k.warning("",{jsx:()=>J(e)})}),F.length>0&&k.error(i("purchasedProducts.quickOrderPad.notPurchaseableSku",{notPurchaseSku:F.join(",")}),{isClose:!0}),m.length>0&&A&&k.error("",{jsx:()=>R(m,A),isClose:!0}),o.length>0&&o.forEach(e=>{k.error(i("purchasedProducts.quickOrderPad.minQuantityMessage",{minQuantity:e.minQuantity,sku:e.variantSku}),{isClose:!0})}),c.length>0&&c.forEach(e=>{k.error(i("purchasedProducts.quickOrderPad.maxQuantityMessage",{maxQuantity:e.maxQuantity,sku:e.variantSku}),{isClose:!0})}),O(!1)}finally{H(!1)}},tt=async y=>{const A=y.map(F=>({node:{...F,productsSearch:F}})),G=await Wt(A,i);try{G&&await I(y)}catch(F){vt.error(F)}return y},rt=()=>{N&&f===0?k.info(i("purchasedProducts.quickOrderPad.addNProductsToCart")):O(!0)};return q.useEffect(()=>{(p==null?void 0:p.length)>0&&B(i("purchasedProducts.quickOrderPad.addNProductsToCart",{quantity:p.length}))},[p]),t.jsxs(se,{sx:{marginBottom:b?"8.5rem":"50px"},children:[t.jsx(Vt,{children:t.jsxs(g,{children:[t.jsx(z,{variant:"h5",sx:{marginBottom:"1rem"},children:i("purchasedProducts.quickOrderPad.quickOrderPanel")}),t.jsx(je,{addToList:tt,searchDialogTitle:i("purchasedProducts.quickOrderPad.quickOrderPad"),type:"quickOrder",addButtonText:i("purchasedProducts.quickOrderPad.addToCart"),isB2BUser:n}),t.jsx(Tt,{}),t.jsx(De,{quickAddToList:I,buttonText:i("purchasedProducts.quickOrderPad.addProductsToCart")}),t.jsx(Tt,{}),t.jsx(g,{sx:{margin:"20px 0 0"},children:t.jsxs(gt,{variant:"text",onClick:()=>rt(),children:[t.jsx(Le,{sx:{marginRight:"8px"}}),i("purchasedProducts.quickOrderPad.bulkUploadCSV")]})})]})}),t.jsx(ge,{isOpen:x,setIsOpen:O,handleAddToList:ct,setProductData:a,addBtnText:S,isLoading:Z,isToCart:!0})]})}const _e=yt("img")(()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"}));function Me(h){const{item:n,checkBox:b,handleUpdateProductQty:i}=h,x=xt(),{quantity:O,imageUrl:p,productName:a,variantSku:S,optionList:B,basePrice:Z,lastOrderedAt:H,variantId:N,productsSearch:f}=n,E=+Z*+O,I=f.variants||[],J=Ut(I,{variantId:N})||p;return t.jsx(g,{sx:{borderTop:"1px solid #D9DCE9"},children:t.jsxs(Vt,{sx:{color:"#313440",display:"flex",pl:0},children:[t.jsx(g,{children:b&&b()}),t.jsx(g,{children:t.jsx(_e,{src:J||At,alt:"Product-img",loading:"lazy"})}),t.jsxs(g,{sx:{flex:1},children:[t.jsx(z,{variant:"body1",color:"#212121",children:a}),t.jsx(z,{variant:"body1",color:"#616161",children:S}),t.jsx(g,{sx:{margin:"1rem 0"},children:B.length>0&&t.jsx(g,{children:B.map(R=>t.jsx(z,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:"".concat(R.display_name,": ").concat(R.display_value)},R.display_name))})}),t.jsx(z,{sx:{fontSize:"14px",display:"none"},children:x("purchasedProducts.quickOrderCard.price",{price:Ot(E)})}),t.jsx(g,{sx:{"& label":{zIndex:0}},children:t.jsx(Qt,{size:"small",type:"number",variant:"outlined",label:"Qty",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:O,sx:{margin:"1rem 0",width:"60%",maxWidth:"100px","& label":{fontSize:"14px"},"& input":{fontSize:"14px"}},onChange:R=>{i(n.id,R.target.value)}})}),t.jsx(z,{sx:{fontSize:"14px"},children:x("purchasedProducts.quickOrderCard.lastOrdered",{lastOrderedAt:Rt(H)})})]})]})},n.id)}const Re=yt("img")(()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"})),$e=yt(g)(()=>({display:"flex",flexDirection:"column",width:"100%","& tbody":{"& tr":{"& td":{verticalAlign:"top"},"& td: first-of-type":{paddingTop:"15px"}}}})),Ue=yt(Qt)(()=>({"& input":{paddingTop:"12px",paddingRight:"6px"}})),Bt="lastOrderedAt",Et={product:"productName",lastOrderedAt:"lastOrderedAt"};function ze({setIsRequestLoading:h,setCheckedArr:n,isRequestLoading:b}){const i=q.useRef(null),x=K(wt),O=K(({company:s})=>s.companyInfo.id),p=K(({company:s})=>s.customer.customerGroupId),[a,S]=q.useState({q:"",beginDateAt:lt(90),endDateAt:lt(0),orderBy:"-".concat(Et[Bt])}),[B,Z,H]=we(Et,Bt,a,S),[N,f]=q.useState(0),[E]=kt(),I=xt(),{currency_code:J}=K(Ft),R=async s=>{if(s.length>0){const o=[];s.forEach(m=>{const{node:e}=m;e.quantity=1,o.includes(e.productId)||o.push(e.productId)});const c=x?It:bt;try{const{productsSearch:m}=await c({productIds:o,currencyCode:J,companyId:O,customerGroupId:p}),e=Mt(m);return s.forEach(d=>{const{node:u}=d,l=e.find(P=>{const{id:C}=P;return+u.productId==+C});u.productsSearch=l||{}}),s}catch(m){k.error(m)}}return[]},st=async s=>{const{orderedProducts:{edges:o,totalCount:c}}=x?await Be(s):await Ee(s),m=await R(o);return f(c),{edges:m,totalCount:c}},ct=async s=>{S({...a,q:s})},tt=s=>{var o;if(s.length>0){const c=((o=i.current)==null?void 0:o.getCacheList())||[],m=s.reduce((e,d)=>{const u=c.find(l=>{const{node:P}=l;return P.id===d});return u&&e.push(u),e},[]);n([...m])}else n([])},rt=(s,o)=>{const c={...a};s==="start"?c.beginDateAt=o||lt(90):c.endDateAt=o||lt(0),S(c)},y=s=>{const o={...a};o.beginDateAt=s.startValue,o.endDateAt=s.endValue,S(o)},A=(s,o)=>{var u,l,P,C;if(o!==""&&+o<=0)return;const c=((u=i.current)==null?void 0:u.getList())||[],m=((l=i.current)==null?void 0:l.getCacheList())||[],e=c==null?void 0:c.map(L=>{const{node:j}=L;return(j==null?void 0:j.id)===s&&(j.quantity=+o||""),L}),d=m==null?void 0:m.map(L=>{const{node:j}=L;return(j==null?void 0:j.id)===s&&(j.quantity=+o||""),L});(P=i.current)==null||P.setList([...e]),(C=i.current)==null||C.setCacheAllList([...d])},G=(s,o)=>{const{productsSearch:{isPriceHidden:c}}=o;return c?"":ke({price:s,productInfo:o,showText:c?"":s,forcedSkip:!0})},F=s=>{var m;const o=((m=i.current)==null?void 0:m.getCacheList())||[];let c=s.quantity;if(o.length>0){const e=o.find(d=>d.node.variantId===s.variantId&&d.node.productId===s.productId&&d.node.id===s.id);e&&e.node&&(c=e.node.quantity||c)}return c},W=[{key:"product",title:I("purchasedProducts.product"),render:s=>{const{optionList:o,productsSearch:c,variantId:m}=s,e=c.variants||[],d=Ut(e,{variantId:m})||s.imageUrl;return t.jsxs(g,{sx:{display:"flex",alignItems:"flex-start"},children:[t.jsx(Re,{src:d||At,alt:"Product-img",loading:"lazy"}),t.jsxs(g,{children:[t.jsx(z,{variant:"body1",color:"#212121",children:s.productName}),t.jsx(z,{variant:"body1",color:"#616161",children:s.variantSku}),o.length>0&&t.jsx(g,{children:o.map(u=>t.jsx(z,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:"".concat(u.display_name,": ").concat(u.display_value)},u.id))})]})]})},width:"40%",isSortable:!0},{key:"price",title:I("purchasedProducts.price"),render:s=>{const{productsSearch:{variants:o},variantId:c,basePrice:m}=s;let e=+m;o!=null&&o.length&&(e=zt(o,+c)||+m);const d=F(s),l=(e||+m)*+d;return t.jsx(z,{sx:{padding:"12px 0"},children:"".concat(G(Ot(l),s))})},width:"15%",style:{textAlign:"right"}},{key:"qty",title:I("purchasedProducts.qty"),render:s=>{const o=F(s);return t.jsx(Ue,{size:"small",type:"number",variant:"outlined",value:o,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},onChange:c=>{A(s.id,c.target.value)}})},width:"15%",style:{textAlign:"right"}},{key:"lastOrderedAt",title:I("purchasedProducts.lastOrdered"),render:s=>t.jsx(g,{children:t.jsx(z,{sx:{padding:"12px 0"},children:"".concat(Rt(+s.lastOrderedAt))})}),width:"15%",style:{textAlign:"right"},isSortable:!0}];return t.jsx(Lt,{isSpinning:b,children:t.jsxs($e,{children:[t.jsx(z,{sx:{fontSize:"24px",height:"50px"},children:I("purchasedProducts.totalProducts",{total:N})}),t.jsxs(g,{sx:{marginBottom:"5px",display:"flex","& label":{zIndex:0}},children:[t.jsxs(g,{sx:{width:E?"100%":"40%",mr:"20px",display:"flex",justifyContent:E?"space-between":"flex-start"},children:[t.jsx(Te,{h:"48px",searchBGColor:"rgba(0, 0, 0, 0.06)",handleChange:s=>{ct(s)}}),E&&t.jsx(g,{sx:{display:"flex",alignItems:"center"},children:t.jsx(Oe,{fiterMoreInfo:[],startPicker:{isEnabled:!0,label:I("purchasedProducts.from"),defaultValue:(a==null?void 0:a.beginDateAt)||"",pickerKey:"start"},endPicker:{isEnabled:!0,label:I("purchasedProducts.to"),defaultValue:(a==null?void 0:a.endDateAt)||"",pickerKey:"end"},isShowMore:!0,onChange:y})})]}),!E&&t.jsx(Ae,{handleChange:rt,xs:{mt:0,height:"50px"},startPicker:{isEnabled:!0,label:I("purchasedProducts.from"),defaultValue:lt(90),pickerKey:"start"},endPicker:{isEnabled:!0,label:I("purchasedProducts.to"),defaultValue:lt(),pickerKey:"end"},customWidth:"58%"})]}),t.jsx(ye,{ref:i,columnItems:W,rowsPerPageOptions:[12,24,36],getRequestList:st,searchParams:a,isCustomRender:!1,showCheckbox:!0,showSelectAllCheckbox:!0,disableCheckbox:!1,hover:!0,labelRowsPerPage:I("purchasedProducts.itemsPerPage"),showBorder:!1,requestLoading:h,getSelectCheckbox:tt,itemIsMobileSpacing:0,isSelectOtherPageCheckbox:!0,noDataText:I("purchasedProducts.noProductsFound"),sortDirection:Z,orderBy:H,sortByFn:B,renderItem:(s,o,c)=>t.jsx(Me,{item:s,checkBox:c,handleUpdateProductQty:A})})]})})}function Is(){const h=K(wt),n=K(({b2bFeatures:B})=>B.masqueradeCompany.isAgenting),[b]=kt(),[i,x]=q.useState(!1),[O,p]=q.useState([]),{purchasabilityPermission:a}=K(_t),S=h?a:!0;return t.jsxs(g,{sx:{width:"100%"},children:[t.jsx(g,{sx:{display:"flex",justifyContent:"center"},children:t.jsxs(at,{sx:{m:0,width:"100%"},container:!0,spacing:2,children:[t.jsx(at,{item:!0,xs:b?12:8,sx:{backgroundColor:"#ffffff",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px",pr:"16px"},children:t.jsx(ze,{setCheckedArr:p,setIsRequestLoading:x,isRequestLoading:i})}),t.jsx(at,{item:!0,xs:b?12:4,sx:{pt:b?"16px":"0px !important",pl:b?"0px !important":"16px"},children:S&&t.jsx(Fe,{isB2BUser:h})})]})}),t.jsx(g,{sx:{position:"fixed",bottom:0,left:0,width:"100%",zIndex:"999"},children:t.jsx(Qe,{checkedArr:O,isAgenting:n,setIsRequestLoading:x,isB2BUser:h})})]})}export{Is as default};
