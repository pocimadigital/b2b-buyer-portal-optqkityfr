System.register(["./mui-legacy-C2p10bcq.js","./react-setup-legacy-CEf7G1oQ.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./B3FilterSearch-legacy-C1pZhde9.js","../index-legacy.oAxYdIH8.js","./useBlockPendingAccountViewPrice-legacy-BQoxjaUn.js","./form-legacy-CAo5v63e.js","./eStyled-legacy-C5ZTaXoz.js","./lodashEs-legacy-Da1qF4L1.js","./B3CustomForm-legacy-BYLVF0jY.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(t,e){"use strict";var n,i,a,s,o,r,c,l,d,u,p,h,g,x,f,y,m,b,v,j,S,L,C,_,k,O,I,w,P,T,B,E,A,D,q,V;return{setters:[t=>{n=t.o,i=t.j,a=t.g,s=t.B,o=t.T,r=t.ae,c=t.ad},t=>{l=t.r,d=t.u,u=t.b8,p=t.bF,h=t.bG,g=t.a5,x=t.bH,f=t._,y=t.a2,m=t.aD,b=t.am,v=t.aO,j=t.aP,S=t.b9,L=t.aT,C=t.b5,_=t.a,k=t.a3,O=t.aK,I=t.aQ},t=>{w=t.r},t=>{P=t.u},t=>{T=t.d},null,t=>{B=t.u},t=>{E=t.u},t=>{A=t.n},t=>{D=t.a},t=>{q=t.B},t=>{V=t.b}],execute:function(){t({C:K,S:function({updateList:t=(()=>{}),addToList:e,searchDialogTitle:n,addButtonText:r,isB2BUser:l,type:u}){const p=P(),h=d((({company:t})=>t.companyInfo.id)),x=d((t=>t.company.customer.customerGroupId)),f=d((({company:t})=>t.companyInfo.status)),m=d((({b2bFeatures:t})=>t.masqueradeCompany.id)),b=h||m,[S,C]=w.useState(!1),[_,O]=w.useState(!1),[E,A]=w.useState(!1),[D,q]=w.useState(""),[V,W]=w.useState([]),[F,z]=w.useState(!1),[U,G]=w.useState(),[H]=B(),N=t=>{q(t.target.value)},Q=async()=>{if(!D||S)return;if(H&&0===f)return void g.info(p("global.searchProductAddProduct.businessAccountPendingApproval"));const t=l?v:j;C(!0);try{const{productsSearch:e}=await t({search:D,companyId:b,customerGroupId:x,categoryFilter:!0}),n=I(e);W(n),O(!0)}finally{C(!1)}},M=()=>{Q()},R=async n=>{try{C(!0),await L(n),await e(n),t()}finally{C(!1)}};return i.jsxs(s,{sx:{margin:"24px 0"},children:[i.jsx(o,{children:p("global.searchProductAddProduct.searchBySkuOrName")}),i.jsx(a,{hiddenLabel:!0,placeholder:p(`global.searchProduct.placeholder.${u}`),variant:"outlined",fullWidth:!0,size:"small",value:D,onChange:N,onKeyDown:t=>{"Enter"===t.key&&Q()},InputProps:{startAdornment:i.jsx(c,{position:"start",children:i.jsx(T,{})})},sx:{margin:"12px 0","& input":{padding:"12px 12px 12px 0"}}}),i.jsx(k,{variant:"outlined",fullWidth:!0,disabled:S,onClick:M,children:i.jsx(y,{isSpinning:S,tip:"",size:16,children:i.jsx(s,{sx:{flex:1,textAlign:"center"},children:p("global.searchProductAddProduct.searchProduct")})})}),i.jsx(Y,{isOpen:_,isLoading:S,productList:V,searchText:D,type:u,onSearchTextChange:N,onSearch:M,onCancel:()=>{z(!1),O(!1),E&&(A(!1),t()),W([])},onProductQuantityChange:(t,e)=>{const n=V.find((e=>e.id===t));n&&(n.quantity=e),W([...V])},onChooseOptionsClick:t=>{const e=V.find((e=>e.id===t));e&&G({...e}),O(!1),z(!0)},onAddToListClick:async t=>{await R(t)},searchDialogTitle:n,addButtonText:r}),i.jsx(K,{isOpen:F,isLoading:S,type:u,setIsLoading:C,product:U,onCancel:()=>{z(!1),O(!0)},onConfirm:async t=>{try{C(!0),await L(t),await R(t),z(!1),O(!0)}catch(e){C(!1)}finally{C(!1)}},addButtonText:r,isB2BUser:l})]})},b:function(t){const[e,n]=w.useReducer($,M),{children:a}=t,s=w.useMemo((()=>({state:e,dispatch:n})),[e]);return i.jsx(R.Provider,{value:s,children:a})}});var e={},W=n;Object.defineProperty(e,"__esModule",{value:!0}),t("d",e.default=void 0);var F=W(l()),z=i;t("d",e.default=(0,F.default)((0,z.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"));const U=A("div")({display:"flex",wordBreak:"break-word",gap:"8px",flexWrap:"wrap",padding:"12px 0 12px","&:first-of-type":{marginTop:"12px"}}),G=A("div")((({padding:t})=>({display:"flex",flexGrow:1,flexShrink:1,alignItems:"flex-start",width:"100%",padding:t||"0 0 0 16px"}))),H=A("img")((()=>({width:"60px",height:"60px",borderRadius:"4px",marginTop:"12px",flexShrink:0}))),N=A("div")((()=>({fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"}))),Q=A(a)((()=>({"& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":{marginTop:"-8px",marginBottom:"8px"}})));function K(t){const{isOpen:e,onCancel:n,onConfirm:a,product:c,isEdit:l=!1,isLoading:_,setIsLoading:k,isB2BUser:O,type:I,...T}=t,B=P(),{addButtonText:A=B("shoppingList.chooseOptionsDialog.addToList")}=T,W=d((({global:t})=>t.showInclusiveTaxPrice)),F=d((({global:t})=>t.blockPendingQuoteNonPurchasableOOS.isEnableProduct)),z=d((({b2bFeatures:t})=>t.masqueradeCompany.id)),K=d((t=>t.company.customer.customerGroupId)),M=d((t=>t.company.companyInfo.id)),[R,$]=w.useState(1),[J,X]=w.useState([]),[Y,Z]=w.useState(null),[tt,et]=w.useState(""),[nt,it]=w.useState(c?.imageUrl||""),[at,st]=w.useState(!0),[ot,rt]=w.useState({}),[ct,lt]=w.useState([]),[dt,ut]=w.useState(0),[pt,ht]=w.useState([]),[gt,xt]=w.useState(!1);w.useEffect((()=>{if("quote"===I&&c)if(tt){const t=c;t.quantity=R;const e=!!u(t.base_price,t,{sku:tt});st(e)}else{const t=c;t.quantity=R,p(t.base_price,t)||st(!1)}else"shoppingList"!==I&&"quickOrder"!==I||!c||st(!c?.isPriceHidden)}),[tt,R,c,I]),w.useEffect((()=>{c?((async t=>{try{k(!0);const e=t?.modifiers?.filter((t=>"product_list_with_images"===t.type||"product_list"===t.type))||[],n={},i={};if(e.length>0){const t=e.reduce(((t,e)=>{const{option_values:n}=e;return n.forEach((e=>{e?.value_data?.product_id&&t.push(e.value_data.product_id)})),t}),[]);if(t.length>0){const e=O?v:j,a=M||z,{productsSearch:s}=await e({productIds:t,companyId:a,customerGroupId:K});s.forEach((t=>{n[t.id]=t.imageUrl,i[t.id]=t}))}}rt(i),$(t.quantity),1===t.variants?.length&&t.variants[0]&&Z(t.variants[0]);const a=S(t,n);X([...a])}finally{k(!1)}})(c),ht([]),ut(0),c?.allOptions?.length&&(t=>{const e=[];t.allOptions?.forEach((t=>{"product_list_with_images"!==t.type&&"product_list"!==t.type&&"checkbox"!==t.type&&"rectangles"!==t.type&&"swatch"!==t.type&&"radio_buttons"!==t.type&&"dropdown"!==t.type||e.push(t)})),lt(e)})(c)):($(1),X([]))}),[c]);const{control:ft,handleSubmit:yt,getValues:mt,formState:{errors:bt},watch:vt,setValue:jt,reset:St}=E({mode:"all"}),Lt=vt(),Ct=w.useRef(Lt),_t=w.useCallback((async(t,e="")=>{if(!J.find((t=>t.name===e))?.isVariantOption||!c||!e)return;const{variants:n=[]}=c||{},i=n.find((e=>{const{option_values:n=[]}=e;return n.reduce(((e,n)=>t[h.encode(`attribute[${n.option_id}]`)].toString()===(n.id||"").toString()&&e),!0)}))||null;if(et(i?i.sku:""),Z(i),i&&(i.sku||i.variant_id)){const t=n.find((t=>t.sku===i.sku||t.variant_id===i.variant_id));it(t?.image_url||c.imageUrl||"")}}),[J,c]);w.useEffect((()=>{const t=vt(((t,{name:e})=>{_t(t,e)}));if(J[0]){const t=J.reduce(((t,e)=>(t[e.name]=e.default,jt(e.name,e.default),t)),{});_t(t,J[0].name)}return()=>t.unsubscribe()}),[J,_t]);const kt=w.useCallback((()=>{const{purchasing_disabled:t=!0}=Y||{};return!("shoppingList"!==I&&!0===t&&!F&&(g.error(B("shoppingList.chooseOptionsDialog.productNoLongerForSale")),1))}),[F,I,Y]),Ot=w.useCallback((t=>{const e=x(J,{},t);return Object.keys(e).map((t=>({optionId:t,optionValue:e[t]?.toString()})))}),[J]);return w.useEffect((()=>{if((!Ct?.current||!D(Ct?.current,Lt))&&(Ct.current=Lt,Object.keys(Lt).length&&J.length&&ct.length)){const t=Ot(Lt),{variant_id:e=""}=Y||{};if(!(c&&c.id&&e&&kt()))return;const n=[{...c,newSelectOptionList:t,productId:c?.id,quantity:parseInt(R.toString(),10)||1,variantId:parseInt(e.toString(),10)||1,additionalProducts:ot}];if(pt[0]){let e=!1;const{newSelectOptionList:i}=pt[0];i.forEach((n=>{const i=ct.findIndex((t=>n.optionId.includes(String(t.id))));t.forEach((t=>{n.optionId===t.optionId&&n.optionValue!==t.optionValue&&-1!==i&&(e=!0)}))})),e&&ht(n)}else ht(n)}}),[ot,pt,J.length,Lt,Ot,c,ct,R,kt,Y]),w.useEffect((()=>{(async()=>{try{if(pt.length){xt(!0);const t=await L(pt);if(t[0]){const{basePrice:e,taxPrice:n}=t[0],i=C(+e,+n);ut(i)}}}catch(t){V.error(t)}finally{xt(!1)}})()}),[pt]),w.useEffect((()=>{e||St()}),[e]),i.jsx(f,{isOpen:e,rightSizeBtn:l?B("shoppingList.chooseOptionsDialog.saveOption"):A,handleLeftClick:()=>{$(1),n()},handRightClick:()=>{yt((t=>{const e=Ot(t),{variant_id:n=""}=Y||{};c&&c.id&&n&&kt()&&a([{...c,newSelectOptionList:e,productId:c?.id,quantity:parseInt(R.toString(),10)||1,variantId:parseInt(n.toString(),10)||1,additionalProducts:ot}])}))()},title:B("shoppingList.chooseOptionsDialog.chooseOptions"),loading:_||gt,children:i.jsx(y,{isSpinning:_,children:c&&i.jsx(s,{children:i.jsxs(s,{sx:{display:"flex",flexDirection:"column"},children:[i.jsxs(s,{sx:{display:"flex"},children:[i.jsx(H,{src:nt||c.imageUrl||m}),i.jsxs(U,{children:[i.jsx(G,{padding:"0",children:i.jsxs(s,{sx:{marginLeft:"16px"},children:[i.jsx(o,{variant:"body1",color:"#212121",children:c.name}),i.jsx(o,{variant:"body1",color:"#616161",children:tt||c.sku}),(c.product_options||[]).map((t=>i.jsx(N,{children:`${t.display_name}: ${t.display_value}`},`${t.option_id}`)))]})}),i.jsxs(G,{children:[i.jsx("span",{children:B("shoppingList.chooseOptionsDialog.price")}),at?b(dt*+R||(t=>{const{variants:e=[]}=t;let n=0;if(tt){const t=e.find((t=>t.sku===tt))?.bc_calculated_price;n=(W?t?.tax_inclusive:t?.tax_exclusive)||0}else{const t=e[0]?.bc_calculated_price;n=parseFloat((W?t?.tax_inclusive:t?.tax_exclusive)?.toString())||0}return n})(c)):""]}),i.jsx(G,{children:i.jsx(Q,{type:"number",variant:"outlined",label:B("shoppingList.chooseOptionsDialog.quantity"),value:R,onChange:t=>{(!t.target.value||parseInt(t.target.value,10)>0)&&$(t.target.value)},onKeyDown:t=>{["KeyE","Equal","Minus"].indexOf(t.code)>-1&&t.preventDefault()},onBlur:()=>{R||$(1),+R>1e6&&$(1e6)},size:"small",sx:{width:"60%",maxWidth:"100px"}})})]})]}),i.jsx(r,{sx:{margin:"16px 0 24px"}}),i.jsx(q,{formFields:J,errors:bt,control:ft,getValues:mt,setValue:jt})]})})})})}const M={id:0,isLoading:!1},R=t("a",w.createContext({state:M,dispatch:()=>{}})),$=(t,e)=>{switch(e.type){case"all":return{...t,...e.payload};case"init":return{...t,id:e.payload.id};case"loading":return{...t,isLoading:e.payload.isLoading};default:return t}};function J(t){const{product:{id:e,allOptions:n},onAddToListClick:a,onChooseOptionsClick:s,addButtonText:o}=t,{state:{isLoading:r=!1}}=w.useContext(R),[c]=_(),l=P();return n&&n.length>0?i.jsx(k,{variant:"outlined",onClick:()=>{s(e)},disabled:r,fullWidth:c,children:l("global.searchProduct.chooseOptionsButton")}):i.jsx(k,{variant:"outlined",onClick:()=>{a(e)},disabled:r,fullWidth:c,children:o})}const X=O;function Y(t){const e=P(),{isOpen:n,onCancel:r,searchText:l,productList:u,onSearchTextChange:p,onSearch:h,onProductQuantityChange:x,onAddToListClick:m,onChooseOptionsClick:b,isLoading:v,type:j,searchDialogTitle:S=e("shoppingLists.title"),addButtonText:L=e("shoppingLists.addButtonText")}=t,C=d((({global:t})=>t.blockPendingQuoteNonPurchasableOOS.isEnableProduct)),[k]=_(),O=w.useCallback((t=>{const{variants:n=[]}=t||{},{purchasing_disabled:i=!0}=n[0]||{};return!("shoppingList"!==j&&!0===i&&!C&&(g.error(e("shoppingList.chooseOptionsDialog.productNoLongerForSale")),1))}),[C,j]),I=t=>{const e=u.find((e=>e.id===t));if(e&&O(e||{})){let t=e.variantId||0;!e.variantId&&e.variants?.[0]&&(t=e.variants[0].variant_id),m([{...e,newSelectOptionList:[],quantity:parseInt(e.quantity.toString(),10)||1,variantId:t}])}};return i.jsx(f,{fullWidth:!0,isOpen:n,handleLeftClick:()=>{r()},title:S,showRightBtn:!1,loading:v,maxWidth:"md",leftSizeBtn:e("shoppingLists.close"),children:i.jsx(y,{isSpinning:v,children:i.jsxs(s,{sx:{minWidth:k?"initial":"100%",flex:1},children:[i.jsx(a,{hiddenLabel:!0,variant:"outlined",fullWidth:!0,size:"small",value:l,onChange:p,onKeyDown:t=>{"Enter"===t.key&&h()},error:!u||u.length<=0,InputProps:{startAdornment:i.jsx(c,{position:"start",children:i.jsx(T,{})})},sx:{margin:"12px 0","& input":{padding:"12px 12px 12px 0"}}}),u&&u.length>0?i.jsx(X,{products:u,quantityEditable:!0,type:j,textAlign:k?"left":"right",canToProduct:!0,onProductQuantityChange:x,renderAction:t=>i.jsx(J,{product:t,onAddToListClick:I,onChooseOptionsClick:b,addButtonText:L}),actionWidth:"180px"}):i.jsx(o,{children:"No products found"})]})})})}}}}));
