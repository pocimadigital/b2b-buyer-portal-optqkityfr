System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./lodashEs-legacy-Da1qF4L1.js","./react-setup-legacy-CoXV7Ff0.js","../index-legacy.4Oc0YHSS.js","./useCustomCallbacks-legacy-BXYZnszm.js","./SearchProduct-legacy-DSkDCN3i.js","./useBlockPendingAccountViewPrice-legacy-DvWRKvzo.js","./QuickAdd-legacy-CnG_3GBs.js","./eStyled-legacy-C5ZTaXoz.js","./B3LinkTipContent-legacy-BJDRcQs2.js","./b3TriggerCartNumber-legacy-uBJaRwM0.js","./muiIcon-legacy-CrtdWcGA.js","./b3Logger-legacy-C5y5ZQF8.js","./ShoppingStatus-legacy-B86_p0Kc.js","./router-legacy-CCJEjNy7.js","./b2bGetVariantImageByVariantInfo-legacy-BFgbB579.js","./useSort-legacy-CfCrn6Eb.js","./B3FilterSearch-legacy-BgozuzF1.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./form-legacy-CAo5v63e.js","./B3CustomForm-legacy-B4W3KTQE.js"],(function(t,e){"use strict";var i,s,n,o,r,a,d,l,c,p,u,h,g,x,m,f,y,L,j,b,S,C,k,I,v,w,A,T,P,B,q,O,D,E,N,Q,R,F,z,U,$,V,W,J,G,_,H,M,X,Y,K,Z,tt,et,it,st,nt,ot,rt,at,dt,lt,ct,pt,ut,ht,gt,xt,mt,ft,yt,Lt,jt,bt,St,Ct,kt,It,vt,wt,At,Tt,Pt,Bt,qt,Ot,Dt,Et,Nt,Qt,Rt,Ft,zt,Ut,$t;return{setters:[t=>{i=t.j,s=t.K,n=t.ab,o=t.B,r=t.T,a=t.ae,d=t.G,l=t.a0,c=t.W,p=t.X,u=t.s,h=t.g,g=t.y},t=>{x=t.r},t=>{m=t.u},t=>{f=t.c,y=t.i},t=>{L=t.a,j=t.bQ,b=t.u,S=t.aV,C=t.a5,k=t.a3,I=t.aX,v=t.aE,w=t.aF,A=t.bI,T=t.R,P=t.aN,B=t._,q=t.a2,O=t.b9,D=t.aD,E=t.am,N=t.ba,Q=t.bR,R=t.aI,F=t.e,z=t.U,U=t.G,$=t.a1,V=t.aG,W=t.aH,J=t.au,G=t.at,_=t.av,H=t.bS,M=t.aO,X=t.aP,Y=t.aQ,K=t.aR,Z=t.aS,tt=t.aT,et=t.aU,it=t.C,st=t.k,nt=t.b5,ot=t.ab,rt=t.aY,at=t.bT,dt=t.bU,lt=t.p,ct=t.aA,pt=t.bV,ut=t.bW,ht=t.bK,gt=t.bL,xt=t.a6,mt=t.bX,ft=t.bY,yt=t.bZ},null,t=>{Lt=t.u,jt=t.C},t=>{bt=t.a,St=t.S,Ct=t.d,kt=t.C,It=t.b},t=>{vt=t.u},t=>{wt=t.Q},t=>{At=t.n},t=>{Tt=t.s},t=>{Pt=t.b},t=>{Bt=t.c,qt=t.b,Ot=t.A,Dt=t.d,Et=t.E},t=>{Nt=t.b},t=>{Qt=t.S},t=>{Rt=t.u,Ft=t.c},t=>{zt=t.b},t=>{Ut=t.u},t=>{$t=t.B},null,null,null,null,null,null,null,null,null],execute:function(){function e(t){const[e]=L(),{disabled:s=!1,label:n=(e?"Qty":""),value:o="",maxQuantity:r=0,minQuantity:a=0,isStock:d="0",stock:l=0,hiddenLabel:c=!e,onChange:p=(()=>{}),sx:u={width:e?"110px":"72px","& .MuiFormHelperText-root":{marginLeft:"0",marginRight:"0"}}}=t,[h,g]=x.useState(""),m=x.useCallback((t=>{const e=parseInt(`${t}`,10)||0;let i="";return"1"===d&&0===l?i="Agotado":"1"===d&&e>l?i=`${l} en stock`:0!==a&&e<a?i=`Mínimo es ${a}`:0!==r&&e>r&&(i=`Máximo es ${r}`),g(i),i}),[d,r,a,l]);return x.useEffect((()=>{m(o)}),[m,o]),i.jsx(j,{size:"small",type:"number",variant:"outlined",disabled:s,hiddenLabel:c,label:n,value:o,error:!!h,helperText:h,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},onChange:t=>{var e;e=t.target.value,p(e,!!h)},onBlur:()=>{(()=>{const t=parseInt(`${o}`,10)||0;p(t,!m(t))})()},sx:u})}function Vt(t){const{state:{id:e}}=x.useContext(bt),d=b((({company:t})=>t.companyInfo.status)),{updateList:l,isB2BUser:c,type:p=""}=t,u=m(),[h,g]=x.useState(!1),[f,y]=x.useState(!1),[L]=vt(),j=c?v:w,T=Lt(jt.OnAddToShoppingList,(async(t,i)=>{try{if(!i(t))throw new Error;const s=t.map((t=>({optionList:S(t.newSelectOptionList,t),productId:t.id,quantity:t.quantity,variantId:t.variantId}))),n=await j({shoppingListId:e,items:s});return C.success(u("shoppingList.addToShoppingList.productsAdded"),{isClose:!0}),n}catch(s){s.message.length>0&&C.error(s.message,{isClose:!0})}return!0})),P=async t=>{const i=t.map((t=>({optionList:S(t.newSelectOptionList||t.optionList,t?.products||t)||[],productId:parseInt(t.productId,10)||0,quantity:t.quantity,variantId:parseInt(t.variantId,10)||0}))),s=await j({shoppingListId:e,items:i});return C.success(u("shoppingList.addToShoppingList.productsAdded"),{isClose:!0}),s};return i.jsx(s,{sx:{marginBottom:"50px"},children:i.jsx(n,{children:i.jsxs(o,{children:[i.jsx(r,{variant:"h5",children:u("shoppingList.addToShoppingList.addToList")}),i.jsx(St,{updateList:l,addToList:T,isB2BUser:c,type:"shoppingList"}),i.jsx(a,{}),i.jsx(wt,{type:"shoppingList",updateList:l,quickAddToList:P}),i.jsx(a,{}),i.jsx(o,{sx:{margin:"20px 0 0"},children:i.jsxs(k,{variant:"text",onClick:()=>{L&&0===d?C.info("Your business account is pending approval. This feature is currently disabled."):g(!0)},children:[i.jsx(Ct,{sx:{marginRight:"8px"}}),u("shoppingList.addToShoppingList.bulkUploadCsv")]})}),i.jsx(I,{isOpen:h,setIsOpen:g,handleAddToList:async t=>{y(!0);try{const{validProduct:e}=t,{notPurchaseSku:i,productItems:s,notAddAble:n}=(t=>{const e=[],i=[],s=[];return t.forEach((t=>{const{products:n,qty:o}=t,{option:r,purchasingDisabled:a,variantSku:d,variantId:l,productId:c,modifiers:u}=n,h=A(u);if(a&&"shoppingList"!==p)return void e.push(d);if(h.filter((t=>!t.isVerified)).length>0)return void s.push(d);const g=r.map((t=>({optionId:`attribute[${t.option_id}]`,optionValue:t.id.toString()})));h.forEach((t=>{const{type:e}=t;if("date"===e){const{defaultValue:e}=t;Object.keys(e).forEach((e=>{g.push({optionId:`attribute[${t.option_id}][${e}]`,optionValue:`${t.defaultValue[e]}`})}))}else g.push({optionId:`attribute[${t.option_id}]`,optionValue:`${t.defaultValue}`})})),i.push({productId:parseInt(c,10)||0,variantId:parseInt(l,10)||0,quantity:+o,optionList:g,products:t.products})})),{notPurchaseSku:e,productItems:i,notAddAble:s}})(e);s.length>0&&(await P(s),l()),n.length>0&&"shoppingList"!==p&&C.error(u("shoppingList.addToShoppingList.skuNotAddable",{notAddAble:n.join(", ")}),{isClose:!0}),i.length>0&&"shoppingList"!==p&&C.error(u("shoppingList.addToShoppingList.skuNotPurchasable",{notPurchaseSku:i.join(", ")}),{isClose:!0}),g(!1)}finally{y(!1)}},isLoading:f,withModifiers:!0})]})})})}t("default",(function({setOpenPage:t}){return i.jsx(It,{children:i.jsx(ce,{setOpenPage:t})})}));const Wt=At("div")((({isHeader:t,isMobile:e})=>({display:"flex",wordBreak:"break-word",padding:"8px 0 0",gap:"8px",flexWrap:e?"wrap":"initial",...t?{borderBottom:"1px solid #D9DCE9",paddingBottom:"8px",alignItems:"center"}:{alignItems:"flex-start"},...e?{borderTop:"1px solid #D9DCE9",padding:"12px 0 12px","&:first-of-type":{marginTop:"12px"}}:{}}))),Jt=At(o)((({width:t,padding:e="0",flexBasis:i,flexDirection:s="row",alignItems:n,textAlignLocation:o})=>({display:"flex",justifyContent:"right"===o?"flex-end":"flex-start",flexDirection:s,flexGrow:t?0:1,flexShrink:t?0:1,alignItems:n||"flex-start",flexBasis:i,width:t,padding:e}))),Gt=At("div")((()=>({fontSize:"0.875rem",lineHeight:"1.5",color:"#263238"}))),_t=At("img")((()=>({width:"60px",borderRadius:"4px",flexShrink:0}))),Ht={default:{width:"15%"},qty:{width:"80px"},delete:{width:"30px"}},Mt={default:{width:"100%",padding:"0 0 0 76px"},qty:{width:"100%",padding:"0 0 0 76px"},delete:{width:"100%",padding:"0 0 0 76px",display:"flex",flexDirection:"row-reverse"}};function Xt(t){const{shoppingListInfo:s,products:n,successProducts:a,allowJuniorPlaceOrder:c,setValidateFailureProducts:p,setValidateSuccessProducts:u,textAlign:h="left"}=t,{submitShoppingListPermission:g}=b(T),f=m(),[y,j]=x.useState(!1),[S,I]=x.useState(!1),[v]=L(),{decimal_places:w=2}=b(P);x.useEffect((()=>{n.length>0?j(!0):j(!1)}),[n]);const A=v?Mt:Ht,U=()=>{j(!1),p([]),u([])};return i.jsx(B,{isOpen:y,handleLeftClick:U,handRightClick:async()=>{if(n.every((t=>t.isValid)))try{I(!0);const t=Q(n),e=await R(t);e.errors||(U(),c&&g&&0===s?.status?window.location.href=F:(C.success("",{jsx:Tt({message:f("shoppingList.reAddToCart.productsAdded"),link:z,linkText:f("shoppingList.reAddToCart.viewCart"),isOutLink:!0,isCustomEvent:!0}),isClose:!0}),Pt())),e.errors&&C.error(e.message,{isClose:!0}),Pt()}finally{I(!1)}else C.error(f("shoppingList.reAddToCart.fillCorrectQuantity"))},title:f(c?"shoppingList.reAddToCart.proceedToCheckout":"shoppingList.reAddToCart.addToCart"),rightSizeBtn:f(c?"shoppingList.reAddToCart.proceedToCheckout":"shoppingList.reAddToCart.addToCart"),maxWidth:"xl",children:i.jsxs(d,{children:[i.jsx(o,{sx:{m:"0 0 1rem 0"},children:i.jsx(l,{variant:"outlined",severity:"success",children:f(c?"shoppingList.reAddToCart.productsCanCheckout":"shoppingList.reAddToCart.productsAddedToCart",{successProducts:a})})}),i.jsx(o,{sx:{m:"1rem 0"},children:i.jsx(l,{variant:"outlined",severity:"error",children:f(c?"shoppingList.reAddToCart.productsCantCheckout":"shoppingList.reAddToCart.productsNotAddedToCart",{quantity:n.length})})}),i.jsxs(q,{isSpinning:S,size:16,isFlex:!1,children:[i.jsxs(o,{sx:{display:"flex",justifyContent:"space-between",margin:"0.5rem 0 1rem 0"},children:[i.jsx(o,{sx:{fontSize:"24px"},children:f("shoppingList.reAddToCart.productCount",{quantity:n.length})}),i.jsx(k,{onClick:()=>(async()=>{const t=n.filter((t=>"0"===t.isStock||0!==t.stock)),e=[];t.forEach((t=>{const i=t,{node:{quantity:s},minQuantity:n=0,maxQuantity:o=0,isStock:r,stock:a}=t,d=parseInt(`${s}`,10)||0;0!==n&&d<n?i.node.quantity=n:0!==o&&d>o&&(i.node.quantity=o),"0"!==r&&a&&(s?+s:0)>a&&(i.node.quantity=a),i.isValid=!0;const l=t?.node?.quantity?+t.node.quantity:0;e.push(N(t.node,l))})),(await Promise.all(e)).forEach(((e,i)=>{t[i].node=e})),p(t)})(),children:f("shoppingList.reAddToCart.adjustQuantity")})]}),n.length>0?i.jsxs(o,{children:[!v&&i.jsxs(Wt,{isHeader:!0,isMobile:v,children:[i.jsx(Jt,{children:i.jsx(Gt,{children:f("shoppingList.reAddToCart.product")})}),i.jsx(Jt,{...A.default,textAlignLocation:h,children:i.jsx(Gt,{children:f("shoppingList.reAddToCart.price")})}),i.jsx(Jt,{sx:{justifyContent:"center"},...A.default,textAlignLocation:h,children:i.jsx(Gt,{children:f("shoppingList.reAddToCart.quantity")})}),i.jsx(Jt,{...A.default,textAlignLocation:h,children:i.jsx(Gt,{children:f("shoppingList.reAddToCart.total")})}),i.jsx(Jt,{...A.delete,children:i.jsx(Gt,{children:" "})})]}),n.map(((t,s)=>{const{isStock:a,maxQuantity:d,minQuantity:l,stock:c}=t,{quantity:u=1,primaryImage:g,productName:x,variantSku:m,optionList:f,productsSearch:y,basePrice:L}=t.node,j=+L,b=(j*(u?+u:0)).toFixed(w),S={...y,selectOptions:f},C=O(S,{}),k=JSON.parse(f),I=C.filter((t=>t.valueText));return i.jsxs(Wt,{isMobile:v,children:[i.jsxs(Jt,{children:[i.jsx(_t,{src:g||D}),i.jsxs(o,{sx:{marginLeft:"16px"},children:[i.jsx(r,{variant:"body1",color:"#212121",children:x}),i.jsx(r,{variant:"body1",color:"#616161",children:m}),k.length>0&&I.length>0&&I.map((t=>i.jsx(r,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${t.valueLabel}: ${t.valueText}`},t.valueLabel)))]})]}),i.jsxs(Jt,{...A.default,textAlignLocation:h,children:[v&&i.jsx("span",{children:"Price: "}),`${E(j)}`]}),i.jsx(Jt,{...A.default,textAlignLocation:h,children:i.jsx(e,{isStock:a,maxQuantity:d,minQuantity:l,stock:c,value:u,onChange:(t,e)=>{(async(t,e,i)=>{const s=[...n];s[t].node.quantity=+e,s[t].isValid=i;const o=await N(s[t].node,+e);o&&(s[t].node=o,p(s))})(s,t,e)}})}),i.jsxs(Jt,{...A.default,textAlignLocation:h,children:[v&&i.jsx("div",{children:"Total: "}),`${E(b)}`]}),i.jsx(Jt,{...A.delete,children:i.jsx(Bt,{sx:{cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{(t=>{const e=[...n];e.splice(t,1),p(e)})(s)}})})]},m)}))]}):null]})]})})}function Yt(t){const e=m(),[s]=L(),{open:n,handleCancelClick:r,handleDeleteProductClick:a}=t;return i.jsx(B,{isOpen:n,title:e("shoppingList.deleteItems.subtotal"),leftSizeBtn:e("shoppingList.deleteItems.cancel"),rightSizeBtn:e("shoppingList.deleteItems.delete"),handleLeftClick:r,handRightClick:a,rightStyleBtn:{color:"#D32F2F"},children:i.jsx(o,{sx:{display:"flex",justifyContent:s?"center%":"start",width:s?"100%":"450px",height:"100%"},children:e("shoppingList.deleteItems.confirmDelete")})})}function Kt(t){const[e]=L(),s=m(),{state:{productQuoteEnabled:n=!1}}=x.useContext(U),a=b((({b2bFeatures:t})=>t.masqueradeCompany.isAgenting)),l=b((({company:t})=>t.companyInfo.id)),u=b((({company:t})=>t.customer.customerGroupId)),{shoppingListActionsPermission:h,purchasabilityPermission:g,submitShoppingListPermission:f}=b(T),y=x.useRef(null),[j,S]=x.useState(!1),I=$.get("cartId"),v=e?{alignItems:"flex-start",flexDirection:"column"}:{alignItems:"center"},{shoppingListInfo:w,allowJuniorPlaceOrder:A,checkedArr:P,selectedSubTotal:B,setLoading:q,setDeleteOpen:O,setValidateFailureProducts:N,setValidateSuccessProducts:it,isB2BUser:st,customColor:nt,isCanEditShoppingList:ot,role:rt}=t,at=!st||h,dt=!st||g,lt=st?f:2==+rt,ct=()=>{S(!1)},pt=async()=>{if(0!==P.length){ct(),q(!0);try{const t=[];let e="";if(P.forEach((i=>{const{node:s}=i;"disabled"===s.productsSearch.availability&&(e+=`${s.variantSku},`),t.push(s.variantSku)})),e)return void C.error(s("shoppingList.footer.unavailableProducts",{skus:e.slice(0,-1)}),{isClose:!0});if(0===t.length)return void C.error(s(A?"shoppingList.footer.selectItemsToCheckout":"shoppingList.footer.selectItemsToAddToCart"),{isClose:!0});const i=st?V:W,n=await i({skus:t}),{validateFailureArr:o,validateSuccessArr:r}=(t=>{const e=[],i=[];return P.forEach((s=>{const{node:n}=s,o=t.find((t=>t.variantSku===n.variantSku))||{};if(o){let t=!0;"1"===o.isStock&&(n?.quantity?+n.quantity:0)>o.stock&&(t=!1),0!==o.minQuantity&&(n?.quantity?+n.quantity:0)<o.minQuantity&&(t=!1),0!==o.maxQuantity&&(n?.quantity?+n.quantity:0)>o.maxQuantity&&(t=!1),t?i.push({node:n}):e.push({node:{...n},stock:o.stock,isStock:o.isStock,maxQuantity:o.maxQuantity,minQuantity:o.minQuantity})}})),{validateFailureArr:e,validateSuccessArr:i}})(n?.variantSku||[]);if(0!==r.length){const t=Q(r),e=J(I),i=await G();let n=null;A&&i.length?(await _(e),n=await H(i,t)):(n=await R(t),Pt()),n&&n.errors?C.error(n.errors[0].message,{isClose:!0}):0===o.length&&(A&&lt&&0===w?.status?window.location.href=F:(C.success("",{jsx:Tt({message:s("shoppingList.footer.productsAddedToCart"),link:z,linkText:s("shoppingList.footer.viewCart"),isOutLink:!0,isCustomEvent:!0}),isClose:!0}),Pt()))}N(o),it(r)}finally{q(!1)}}else C.error(s("shoppingList.footer.selectOneItem"))},ut={adSelectedToCart:{name:s("shoppingList.footer.addToCart"),key:"add-selected-to-cart",handleClick:pt,isDisabled:!1},proceedToCheckout:{name:s("shoppingList.footer.proceedToCheckout"),key:"add-select-to-checkout",handleClick:pt,isDisabled:!1},addSelectedToQuote:{name:s("shoppingList.footer.addToQuote"),key:"add-selected-to-quote",handleClick:async()=>{if(0!==P.length){q(!0),ct();try{const t=P.filter((t=>{const{node:{variantSku:e}}=t;return""!==e&&null!=e})),e=P.filter((t=>{const{node:{variantSku:e}}=t;return!e}));if(e.length>0&&C.error(s("shoppingList.footer.cantAddProductsNoSku"),{isClose:!0}),e.length===P.length)return;const i=[];t.forEach((t=>{const{node:e}=t;i.includes(+e.productId)||i.push(+e.productId)}));const n=st?M:X,{productsSearch:o}=await n({productIds:i,companyId:l,customerGroupId:u}),r=Y(o);let a=!1,d="",c=!0;const p=[];if(t.forEach((t=>{const{node:{basePrice:e,optionList:i,variantSku:n,productId:o,productName:l,quantity:u,variantId:h,tax:g}}=t,x=(m=JSON.parse(i),0===m?.length?[]:m.map((({option_id:t,option_value:e})=>({optionId:t,optionValue:e}))));var m;const f=r.find((t=>+t.id==+o)),y=f?.variants.find((t=>t.sku===n));y||(d=s("shoppingList.footer.notFoundSku",{sku:n}),c=!1);const L={node:{id:K(),variantSku:y?.sku||n,variantId:h,productsSearch:f,primaryImage:y?.image_url||D,productName:l,quantity:+u||1,optionList:JSON.stringify(x),productId:o,basePrice:e,tax:g}};p.push(L),a=!0})),a=Z(p),!c)return void C.error("",{jsx:Tt({message:d,link:"",linkText:"",isOutLink:!1}),isClose:!0});a?(await tt(p,"2"),et(p),C.success("",{jsx:Tt({message:s("shoppingList.footer.productsAddedToQuote"),link:"/quoteDraft",linkText:s("shoppingList.footer.viewQuote"),isOutLink:!1}),isClose:!0})):C.error("",{jsx:Tt({message:s("shoppingList.footer.productsLimit"),link:"/quoteDraft",linkText:s("shoppingList.footer.viewQuote"),isOutLink:!1}),isClose:!0})}catch(t){Nt.error(t)}finally{q(!1)}}else C.error(s("shoppingList.footer.selectOneItem"))},isDisabled:!1}},ht=0!==w?.status&&st?[]:!dt&&st?n?[ut.addSelectedToQuote]:[]:lt?A&&n?[ut.proceedToCheckout,ut.addSelectedToQuote]:A?[ut.proceedToCheckout]:n?[ut.addSelectedToQuote]:[]:n?[ut.adSelectedToCart,ut.addSelectedToQuote]:[ut.adSelectedToCart];return i.jsxs(d,{sx:{position:"fixed",bottom:e&&a?"52px":0,left:0,backgroundColor:"#fff",width:"100%",padding:e?"0 0 1rem 0":"0 40px 1rem 40px",height:e?"8rem":"auto",marginLeft:0,display:"flex",flexWrap:"nowrap",zIndex:"999"},container:!0,spacing:2,children:[i.jsx(d,{item:!0,sx:{display:e?"none":"block",width:"290px",paddingLeft:"20px"}}),i.jsx(d,{item:!0,sx:e?{flexBasis:"100%"}:{flexBasis:"690px",flexGrow:1},children:i.jsxs(o,{sx:{width:"100%",pr:"20px",display:"flex",zIndex:"999",justifyContent:"space-between",...v},children:[i.jsx(r,{sx:{color:"#000000",fontSize:"16px",fontWeight:"400"},children:s("shoppingList.footer.selectedProducts",{quantity:P.length})}),i.jsxs(o,{sx:{display:"flex",alignItems:"center",flexWrap:e?"wrap":"nowrap"},children:[i.jsx(r,{variant:"h6",sx:{fontSize:"16px",fontWeight:"700",color:"#000000"},children:s("shoppingList.footer.subtotal",{subtotal:E(B)})}),i.jsxs(o,{sx:{display:"flex",alignItems:"center",marginTop:e?"0.5rem":0,width:e?"100%":"auto"},children:[!A&&ot&&at&&i.jsx(k,{sx:{padding:"5px",border:`1px solid ${nt||"#1976d2"}`,margin:e?"0 1rem 0 0":"0 1rem",minWidth:"auto"},disabled:40===w?.status,children:i.jsx(Bt,{color:"primary",sx:{color:nt},onClick:()=>{O(!0)}})}),ht.length?i.jsxs(o,{sx:{display:"flex",alignItems:"center",marginTop:e?"0.5rem":0,marginLeft:e?0:"20px",width:e?"100%":"auto"},children:[1===ht.length&&ht[0]&&i.jsx(k,{variant:"contained",onClick:ht[0].handleClick,sx:{marginRight:e?"1rem":0,width:e?"100%":"auto"},children:ht[0].name}),2===ht.length&&i.jsxs(i.Fragment,{children:[i.jsx(k,{variant:"contained",onClick:()=>{0===P.length?C.error(s("shoppingList.footer.selectOneItem")):S(!0)},ref:y,sx:{marginRight:e?"1rem":0,width:e?"100%":"auto"},endIcon:i.jsx(qt,{}),children:s("shoppingList.footer.addSelectedTo")}),i.jsx(c,{id:"basic-menu",anchorEl:y.current,open:j,onClose:ct,MenuListProps:{"aria-labelledby":"basic-button"},children:ht.length>1&&ht.map((t=>i.jsx(p,{onClick:()=>{t.handleClick()},children:t.name},t.key)))})]})]}):null]})]})]})}),i.jsx(d,{item:!0,sx:e?{flexBasis:"100%",display:e?"none":"block"}:{flexBasis:"340px",display:e?"none":"block"}})]})}const Zt=u("div")((()=>({display:"flex",alignItems:"center"})));function te(t){const e=m(),[s]=L(),{shoppingListInfo:n,customerInfo:a,handleUpdateShoppingList:l,goToShoppingLists:c,isB2BUser:p,setOpenPage:u,openAPPParams:h,customColor:g}=t,{state:{portalStyle:{backgroundColor:f="#FEF9F5"}}}=x.useContext(it),y=Rt(),j=0===n?.products?.edges.length,{submitShoppingListPermission:S,approveShoppingListPermission:C}=b(T),I=t=>s?{}:{xs:t};return i.jsxs(i.Fragment,{children:[i.jsx(o,{sx:{marginBottom:"16px",width:"fit-content"},children:i.jsxs(o,{sx:{color:"#1976d2",cursor:"pointer",display:"flex",alignItems:"center"},onClick:()=>{"add"!==h.shoppingListBtn?c():(y("/"),u({isOpen:!1,openUrl:""}))},children:[i.jsx(Ot,{fontSize:"small",sx:{fontSize:"12px",marginRight:"0.5rem",color:g}}),i.jsx(o,{sx:{margin:0,color:g,m:"0"},children:"add"!==h.shoppingListBtn?e("shoppingList.header.backToShoppingLists"):e("shoppingList.header.backToProduct")})]})}),i.jsxs(d,{container:!0,spacing:2,sx:{display:"flex",justifyContent:"space-between",flexDirection:s?"column":"row",mb:s?"16px":""},children:[i.jsxs(d,{item:!0,...I(8),sx:{color:st(f)},children:[i.jsxs(o,{sx:{display:"flex",alignItems:s?"start":"center",flexDirection:s?"column":"row"},children:[i.jsx(r,{variant:"h4",sx:{marginRight:"1rem",wordBreak:"break-all"},children:`${n?.name||""}`}),p&&(S||C&&n?.approvedFlag)&&i.jsx(r,{sx:{m:s?"10px 0":"0"},children:n&&i.jsx(Qt,{status:n?.status})})]}),i.jsxs(o,{children:[i.jsx(r,{sx:{width:"100%",wordBreak:"break-all"},children:n?.description}),p&&i.jsxs(Zt,{children:[i.jsx(r,{variant:"subtitle2",sx:{marginRight:"0.5rem"},children:e("shoppingList.header.createdBy")}),i.jsx("span",{children:`${a?.firstName||""} ${a?.lastName||""}`})]})]})]}),i.jsxs(d,{item:!0,sx:{textAlign:s?"none":"end"},...I(4),children:[S&&30===n?.status&&i.jsx(k,{variant:"outlined",disabled:j,onClick:()=>{l(40)},children:e("shoppingList.header.submitForApproval")}),C&&40===n?.status&&i.jsxs(o,{children:[i.jsx(k,{variant:"outlined",sx:{marginRight:"1rem"},onClick:()=>{l(20)},children:e("shoppingList.header.reject")}),C&&i.jsx(k,{variant:"outlined",onClick:()=>{l(0)},children:e("shoppingList.header.approve")})]})]})]})]})}function ee(t){const e=m(),[s]=L(),{open:n,notes:r,setNotes:a,handleCancelAddNotesClick:d,handleAddItemNotesClick:l}=t;return i.jsx(B,{isOpen:n,title:e("shoppingList.addItemNotes.title"),leftSizeBtn:e("shoppingList.addItemNotes.cancel"),rightSizeBtn:e("shoppingList.addItemNotes.save"),handleLeftClick:d,handRightClick:l,isShowBordered:!1,children:i.jsx(o,{sx:{display:"flex",justifyContent:s?"center%":"start",width:s?"100%":"450px",height:"100%"},children:i.jsx(h,{multiline:!0,rows:6,defaultValue:r,onChange:t=>a(t.target.value),variant:"outlined",fullWidth:!0,placeholder:e("shoppingList.addItemNotes.placeholder")})})})}const ie=u("img")((()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"})));function se(t){const e=m(),{item:s,onEdit:a,onDelete:d,checkBox:l,handleUpdateProductQty:c,handleUpdateShoppingListItem:p,isReadForApprove:u,len:g,itemIndex:x,setDeleteOpen:f,setAddNoteOpen:y,setAddNoteItemId:L,setNotes:j,showPrice:b,b2bAndBcShoppingListActionsPermissions:S}=t,{basePrice:C,quantity:k,itemId:I,variantId:v,primaryImage:w,productName:A,variantSku:T,productsSearch:P,productUrl:B,taxPrice:q=0,productNote:N}=s,Q=nt(+C,+q),R=Q*+k,F={...s.productsSearch,selectOptions:s.optionList},z=O(F,{}),U=JSON.parse(s.optionList),$=z.filter((t=>t.valueText)),V=U.length>0&&!u&&S,W=F.variants||[],J=zt(W,{variantId:v,variantSku:T})||w;return i.jsx(o,{sx:{borderTop:"1px solid #D9DCE9",borderBottom:x===g-1?"1px solid #D9DCE9":""},children:i.jsxs(n,{sx:{color:"#313440",display:"flex",pl:0},children:[i.jsx(o,{children:l&&l()}),i.jsx(o,{children:i.jsx(ie,{src:J||D,alt:"Product-img",loading:"lazy"})}),i.jsxs(o,{sx:{flex:1},children:[i.jsx(r,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:t}}=window;window.location.href=`${t}${B}`},sx:{cursor:"pointer"},children:A}),i.jsx(r,{variant:"body1",color:"#616161",children:T}),i.jsx(o,{sx:{margin:"0 0 0.5rem 0"},children:U.length>0&&$.length>0&&i.jsx(o,{children:$.map((t=>i.jsx(r,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${t.valueLabel}: ${t.valueText}`},t.valueLabel)))})}),N&&N.trim().length>0&&i.jsx(r,{sx:{fontSize:"0.75rem",color:"#ED6C02",marginTop:"0.3rem",marginBottom:"0.3rem"},children:N}),i.jsx(r,{sx:{color:"#212121",fontSize:"14px"},children:e("shoppingList.shoppingDetailCard.price",{price:b(E(Q),s)})}),i.jsx(h,{size:"small",type:"number",variant:"outlined",label:e("shoppingList.shoppingDetailCard.quantity"),disabled:!S||u,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:k,sx:{margin:"0.5rem 0",width:"60%",maxWidth:"100px","& label":{zIndex:0,fontSize:"14px"},"& input":{fontSize:"14px"}},onChange:t=>{c(s.id,t.target.value)},onBlur:()=>{p(I)}}),i.jsx(r,{sx:{color:"#212121",fontSize:"14px"},children:e("shoppingList.shoppingDetailCard.total",{total:b(E(R),s)})}),i.jsxs(o,{sx:{marginTop:"11px",textAlign:"end"},id:"shoppingList-actionList-mobile",children:[S&&i.jsx(Dt,{sx:{marginRight:"0.5rem",cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{y(!0),L(+I),N&&j(N)}}),V&&i.jsx(Et,{sx:{marginRight:V?"0.5rem":"",marginLeft:V?"0.3rem":"",cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{a({...P,selectOptions:U,quantity:k},v,I)}}),S&&!u&&i.jsx(Bt,{sx:{marginLeft:"0.3rem",cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{f(!0),d(+I)}})]})]})]})},s.id)}const ne=u("div")((()=>({backgroundColor:"#FFFFFF",padding:"1rem",borderRadius:"4px",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)","& tbody":{"& tr":{"& td":{verticalAlign:"top"},"& td: first-of-type":{paddingTop:"15px"}},"& tr: hover":{"& #shoppingList-actionList":{opacity:1}}}}))),oe=u("img")((()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"}))),re=u(h)((()=>({"& input":{paddingTop:"12px",paddingRight:"6px"}}))),ae="updatedAt",de={Product:"productName",updatedAt:"updatedAt",Qty:"quantity"},le=x.forwardRef((function(t,e){const[s]=L(),n=m(),{shoppingListInfo:a,isRequestLoading:l,setIsRequestLoading:c,shoppingListId:p,getShoppingListDetails:u,setCheckedArr:h,isReadForApprove:g,setDeleteItemId:y,setDeleteOpen:j,isJuniorApprove:k,isB2BUser:I,allowJuniorPlaceOrder:v,productQuoteEnabled:w,isCanEditShoppingList:A,role:P}=t,B=b((({global:t})=>t.showInclusiveTaxPrice)),{shoppingListActionsPermission:q,submitShoppingListPermission:N}=b(T),Q=!I||q&&A,R=!I||Q,F=I?N:2==+P,z=x.useRef(null),[U,$]=x.useState(!1),[V,W]=x.useState(null),[J,G]=x.useState(null),[_,H]=x.useState({orderBy:`-${de[ae]}`}),[M,X]=x.useState(!0),[Y,K]=x.useState([]),[Z,tt]=x.useState(0),[et,it]=x.useState(!1),[st,lt]=x.useState(""),[ct,pt]=x.useState(""),[ut,ht]=x.useState(!1),[gt,xt]=x.useState(!1),[mt,ft,yt]=Ut(de,ae,_,H),Lt=(t,e)=>{if(+e<0)return;const i=Y.find((e=>{const{node:i}=e;return i.id===t}));X(+(i?.node?.quantity||"")==+e);const s=z.current?.getList()||[],n=s?.map((i=>{const{node:s}=i;return s?.id===t&&(s.quantity=""+ +e,s.disableCurrentCheckbox=0==+e),i})),o=n.filter((t=>0==+t.node.quantity));ht(o.length===n.length),z.current?.setList([...n])},jt=()=>{z.current?.refresh()};x.useImperativeHandle(e,(()=>({initSearch:jt,getList:()=>z.current?.getList(),setList:()=>z.current?.setList(),getSelectedValue:()=>z.current?.getSelectedValue()})));const bt=(t,e,i)=>{G(i),W(t),$(!0)},St=async t=>{const e=(z.current?.getList()||[]).find((e=>{const{node:i}=e;return i.itemId===t}));let i;e&&(i=e.node);const s=JSON.parse(i?.optionList||"[]").map((t=>({optionId:t.option_id,optionValue:t.option_value}))),n={variantId:i?.variantId,quantity:i?.quantity?+i.quantity:0,optionList:s||[],productNote:ct},o={itemId:t,shoppingListId:p,itemData:n},r=I?at:dt;await r(o)},Ct=async t=>{if(!M){c(!0);try{await St(t),C.success(n("shoppingList.table.quantityUpdated")),X(!0),jt()}finally{c(!1)}}},It=()=>{it(!1),lt(""),pt("")};x.useEffect((()=>{if(a){const{products:{edges:t},grandTotal:e,totalTax:i}=a,s=B?+e:+e-+i||0,n=t.some((t=>t?.node?.productsSearch&&t.node.productsSearch?.isPriceHidden||!1));xt(n),K(f(t)),tt(s)}}),[a,B]),x.useEffect((()=>{if(a){const{products:{edges:t}}=a,e=t.filter((t=>0===t.node.quantity));ht(e.length===t.length)}}),[a]);const vt=(t,e)=>{const{productsSearch:{isPriceHidden:i}}=e;return i?"":rt({price:t,productInfo:e,showText:i?"":t,forcedSkip:!0})},wt=[{key:"Product",title:n("shoppingList.table.product"),render:t=>{const e={...t.productsSearch,selectOptions:t.optionList},s=O(e,{}),n=JSON.parse(t.optionList),a=s.filter((t=>t.valueText)),d=e.variants||[],l=zt(d,{variantId:t.variantId,variantSku:t.variantSku})||t.primaryImage;return i.jsxs(o,{sx:{display:"flex",alignItems:"flex-start"},children:[i.jsx(oe,{src:l||D,alt:"Product-img",loading:"lazy"}),i.jsxs(o,{children:[i.jsx(r,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:e}}=window;window.location.href=`${e}${t.productUrl}`},sx:{cursor:"pointer"},children:t.productName}),i.jsx(r,{variant:"body1",color:"#616161",children:t.variantSku}),n.length>0&&a.length>0&&i.jsx(o,{children:a.map((t=>i.jsx(r,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${t.valueLabel}: ${t.valueText}`},t.valueLabel)))}),t?.productNote&&t?.productNote.trim().length>0&&i.jsx(r,{sx:{fontSize:"0.75rem",color:"#ED6C02",marginTop:"0.3rem"},children:t.productNote})]})]})},width:"45%",isSortable:!0},{key:"Price",title:n("shoppingList.table.price"),render:t=>{const{basePrice:e,taxPrice:s=0}=t,n=nt(+e,+s);return i.jsx(r,{sx:{padding:"12px 0"},children:vt(E(n),t)})},width:"15%",style:{textAlign:"right"}},{key:"Qty",title:n("shoppingList.table.quantity"),render:t=>i.jsx(re,{size:"small",type:"number",variant:"outlined",sx:{width:"72px"},disabled:!R||g||k,value:t.quantity,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},onChange:e=>{Lt(t.id,e.target.value)},onBlur:()=>{Ct(t.itemId)}}),width:"15%",style:{textAlign:"right"},isSortable:!0},{key:"Total",title:n("shoppingList.table.total"),render:t=>{const{basePrice:e,quantity:n,itemId:a,productsSearch:{options:l},taxPrice:c=0}=t,p=nt(+e,+c)*+n,u=(l||JSON.parse(t.optionList)).length>0&&!g&&!k&&R;return i.jsxs(o,{children:[i.jsx(r,{sx:{padding:"12px 0"},children:vt(E(p),t)}),i.jsx(o,{sx:{marginTop:"1rem",opacity:0,textAlign:s?"end":"start",display:"flex",justifyContent:"flex-end"},id:"shoppingList-actionList",children:Q&&i.jsxs(i.Fragment,{children:[i.jsx(d,{item:!0,sx:{marginRight:"0.5rem",minWidth:"32px"},children:i.jsx(Dt,{sx:{cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{it(!0),lt(+a),t.productNote&&pt(t.productNote)}})}),i.jsx(d,{item:!0,sx:{marginRight:u?"0.5rem":"",marginLeft:u?"0.3rem":""},children:u&&i.jsx(Et,{sx:{cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{const{productsSearch:e,variantId:i,itemId:s,optionList:n,quantity:o}=t;bt({...e,selectOptions:n,quantity:o},0,s)}})}),i.jsx(d,{item:!0,sx:{marginLeft:"0.3rem"},children:R&&!g&&!k&&i.jsx(Bt,{sx:{cursor:"pointer",color:"rgba(0, 0, 0, 0.54)"},onClick:()=>{j(!0),y(+a)}})})]})})]})},width:"15%",style:{textAlign:"right"}}];return i.jsxs(ne,{children:[i.jsxs(o,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0 0 1rem 0"},children:[i.jsx(r,{sx:{fontSize:"24px"},children:n("shoppingList.table.totalProductCount",{quantity:a?.products?.totalCount||0})}),i.jsx(r,{sx:{fontSize:"24px"},children:gt?"":`${E(Z||0)}`})]}),i.jsx(o,{sx:{marginBottom:"5px"},children:i.jsx($t,{searchBGColor:"rgba(0, 0, 0, 0.06)",handleChange:t=>{(async t=>{H({..._,search:t})})(t)}})}),i.jsx(ot,{ref:z,columnItems:wt,rowsPerPageOptions:[10,20,50],getRequestList:u,searchParams:_,isCustomRender:!1,showCheckbox:!0,showSelectAllCheckbox:!0,applyAllDisableCheckbox:!1,disableCheckbox:ut||(F?!(v||w):(g||k)&&R),hover:!0,labelRowsPerPage:n("shoppingList.table.itemsPerPage"),showBorder:!1,requestLoading:c,getSelectCheckbox:t=>{if(t.length>0){const e=z.current?.getList()||[],i=[];t.forEach((t=>{const s=e.find((e=>{const{node:i}=e;return i.id===t}));s&&i.push(s)})),h([...i])}else h([])},itemIsMobileSpacing:0,noDataText:n("shoppingList.table.noProductsFound"),sortDirection:ft,orderBy:yt,sortByFn:mt,pageType:"shoppingListDetailsTable",renderItem:(t,e,s)=>i.jsx(se,{len:a?.products?.edges.length||0,item:t,itemIndex:e,showPrice:vt,onEdit:bt,onDelete:y,checkBox:s,setDeleteOpen:j,setAddNoteOpen:it,setAddNoteItemId:lt,setNotes:pt,handleUpdateProductQty:Lt,handleUpdateShoppingListItem:Ct,isReadForApprove:g||k,b2bAndBcShoppingListActionsPermissions:R})}),i.jsx(kt,{isOpen:U,isLoading:l,setIsLoading:c,product:V,type:"shoppingList",onCancel:()=>{G(""),$(!1)},onConfirm:async t=>{c(!0);const e=I?at:dt;try{const i=S(t[0].newSelectOptionList,t[0]),s={itemId:J,shoppingListId:p,itemData:{variantId:t[0].variantId,quantity:t[0].quantity,optionList:i||[]}};await e(s),$(!1),G(""),C.success(n("shoppingList.table.productUpdated")),jt()}finally{c(!1)}},isEdit:!0,isB2BUser:I}),i.jsx(ee,{open:et,notes:ct,setNotes:pt,handleCancelAddNotesClick:It,handleAddItemNotesClick:async()=>{c(!0);try{It(),await St(st),C.success(n("shoppingList.table.productNotesUpdated")),jt()}finally{c(!1)}}})]})}));function ce({setOpenPage:t}){const{id:e=""}=Ft(),{state:{openAPPParams:s,productQuoteEnabled:n=!1}}=x.useContext(U),r=b(lt),{currency_code:a}=b(P),l=b((({company:t})=>t.customer.role)),c=b((({company:t})=>t.companyInfo.id)),p=b((({company:t})=>t.customer.customerGroupId)),u=b((({company:t})=>t.permissions)),h=b((({b2bFeatures:t})=>t.masqueradeCompany.isAgenting)),f=Rt(),[j]=L(),{dispatch:S}=x.useContext(bt),k=g(),I=m(),v=k.palette.primary.main,w=x.useRef(null),[A,B]=x.useState([]),[O,D]=x.useState(null),[E,N]=x.useState(null),[Q,R]=x.useState(0),[F,z]=x.useState(!1),[$,V]=x.useState(!1),[W,J]=x.useState(""),[G,_]=x.useState([]),[H,K]=x.useState([]),[Z,et]=x.useState(!1),[it,st]=x.useState(!0),{shoppingListActionsPermission:ot,purchasabilityPermission:rt,submitShoppingListPermission:at}=b(T),dt=!r||ot&&it,Lt=!r||rt,jt=r?at:2===l,St=0===O?.status&&jt,Ct=40===O?.status||20===O?.status;x.useEffect((()=>{S({type:"init",payload:{id:parseInt(e,10)||0}})}),[e]);const kt=()=>{w.current?.initSearch()},It=()=>{V(!1),J("")};return x.useEffect((()=>{if(A.length>0){let t=0;A.forEach((e=>{const{node:{quantity:i,basePrice:s,taxPrice:n}}=e,o=nt(+s,+n);t+=o*+i})),R(1e3*t/1e3)}else R(0)}),[A]),x.useEffect((()=>{St&&(async()=>{const{storeConfigSwitchStatus:{isEnabled:t}}=await mt();et("1"===t&&Lt)})()}),[St]),x.useEffect((()=>{if(r&&O){const t=u.find((t=>"deplicate_shopping_list"===t.code)),e=[];if(t&&!y(t)){const i=t.permissionLevel,s=O?.isOwner||!1;e.push({permissionType:"shoppingListActionsPermission",permissionLevel:1===i&&s?i:2})}const{shoppingListActionsPermission:i}=ct(e);st(i)}}),[O,r]),i.jsxs(i.Fragment,{children:[i.jsxs(o,{sx:{display:"flex",flexDirection:"column",flex:1},children:[i.jsx(te,{isB2BUser:r,shoppingListInfo:O,customerInfo:E,role:l,goToShoppingLists:()=>{f("/shoppingLists")},handleUpdateShoppingList:async t=>{z(!0);try{const i={id:+e,name:O?.name||"",description:O?.description||""};r?await ht({...i,status:t}):await gt({...i,channelId:xt}),C.success(I("shoppingList.shoppingListStatusUpdated"),{isClose:!0}),w.current?.initSearch()}finally{z(!1)}},setOpenPage:t,isAgenting:h,openAPPParams:s,customColor:v}),i.jsxs(d,{container:!0,spacing:2,sx:{marginTop:"0",overflow:"auto",flexWrap:j?"wrap":"nowrap",paddingBottom:"20px",marginBottom:j?"6rem":0},children:[i.jsx(o,{sx:j?{flexBasis:"100%",pl:"16px"}:{flexBasis:"690px",flexGrow:1,ml:"16px",pt:"16px"},children:i.jsx(q,{isSpinning:F,spinningHeight:"auto",children:i.jsx(d,{item:!0,sx:j?{flexBasis:"100%"}:{flexBasis:"690px",flexGrow:1},children:i.jsx(le,{ref:w,isReadForApprove:Ct,isJuniorApprove:St,allowJuniorPlaceOrder:Z,setCheckedArr:B,shoppingListInfo:O,isRequestLoading:F,setIsRequestLoading:z,shoppingListId:e,getShoppingListDetails:async t=>{const i=r?await pt({id:e,...t}):await ut({id:e,...t}),{products:{edges:s,totalCount:n}}=i,o=await(async t=>{if(t.length>0)try{const e=[];t.forEach((t=>{const{node:i}=t;e.includes(i.productId)||e.push(i.productId)}));const i=r?M:X,{productsSearch:s}=await i({productIds:e,currencyCode:a,companyId:c,customerGroupId:p}),n=Y(s);return t.forEach((t=>{const{node:e}=t,i=n.find((t=>{const{id:i}=t;return e.productId===i}));e.productsSearch=i||{},e.productName=i?.name||e.productName,e.productUrl=i?.productUrl||e.productUrl,e.disableCurrentCheckbox=!1,0===e.quantity&&(e.disableCurrentCheckbox=!0)})),t}catch(e){C.error(e)}return[]})(s);return await tt(o,"2"),r&&N(i.customerInfo),D(i),o?{edges:o,totalCount:n}:{edges:[],totalCount:0}},setDeleteOpen:V,setDeleteItemId:J,isB2BUser:r,productQuoteEnabled:n,isCanEditShoppingList:it,role:l})})})}),i.jsx(d,{item:!0,sx:j?{flexBasis:"100%"}:{flexBasis:"340px"},children:dt&&!Ct&&!St&&i.jsx(Vt,{updateList:kt,type:"shoppingList",isB2BUser:r})})]}),!Ct&&(Z||n||!St)&&i.jsx(Kt,{shoppingListInfo:O,allowJuniorPlaceOrder:Z,checkedArr:A,selectedSubTotal:Q,setLoading:z,setDeleteOpen:V,setValidateFailureProducts:K,setValidateSuccessProducts:_,isB2BUser:r,customColor:v,isCanEditShoppingList:it,role:l})]}),i.jsx(Xt,{shoppingListInfo:O,role:l,products:H,successProducts:G.length,allowJuniorPlaceOrder:Z,setValidateFailureProducts:K,setValidateSuccessProducts:_,textAlign:j?"left":"right"}),i.jsx(Yt,{open:$,handleCancelClick:It,handleDeleteProductClick:async()=>{await(async(t="")=>{z(!0);const i=r?ft:yt;try{if(t){if(await i({itemId:t,shoppingListId:e}),A.length>0){const e=A.filter((e=>{const{itemId:i}=e.node;return t!==i}));B([...e])}}else{if(0===A.length)return;A.forEach((async t=>{const{node:s}=t;await i({itemId:s.itemId,shoppingListId:e})})),B([])}C.success(I("shoppingList.productRemoved"))}finally{z(!1),kt()}})(+W),await It()}})]})}}}}));
