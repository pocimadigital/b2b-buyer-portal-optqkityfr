import{j as u,B as V,G as w,T as ht}from"./mui-CyG7s_nf.js";import{r as k}from"./reactVendor-BAhb8EbJ.js";import{u as mt}from"./form-Bvi8lP6x.js";import{u as gt}from"./lang-CO9rnotr.js";import{u as B,p as kt,bI as yt,bJ as D,a2 as N,a3 as Q,aW as bt,a5 as y,aG as xt,aH as At}from"./react-setup-DmRjJMtp.js";import{B as Lt}from"./B3CustomForm-D63ourZ6.js";import"../index.CVSTvWZ2.js";import{u as It}from"./useBlockPendingAccountViewPrice-B1RUkb0U.js";function Ct(R){const r=gt(),{updateList:M,quickAddToList:U,level:P=3,buttonText:_=r("shoppingList.quickAdd.addToShoppingList"),buttonLoading:G=!1,type:E}=R,J=B(kt),W=B(({company:t})=>t.companyInfo.status),F=B(({quoteInfo:t})=>t.draftQuoteList),[z]=It(),[b,H]=k.useState(P),[K,Y]=k.useState([]),[I,C]=k.useState(!1),$=(t,e)=>{new Array(t).fill(1).forEach((n,s)=>e(s))};k.useEffect(()=>{let t=[];$(b,e=>{t=[...t,...bt(e,r)]}),Y(t)},[b]);const X=()=>{H(b+P)},{control:Z,handleSubmit:tt,getValues:st,formState:{errors:et},setError:x,setValue:S}=mt({mode:"all"}),nt=(t,e,n)=>{if(!e&&!n)return!0;let s=!0;const i=parseInt(n,10)||0;return e||(x("sku-".concat(t),{type:"manual",message:r("global.validate.required",{label:r("purchasedProducts.quickAdd.sku")})}),s=!1),n?i<=0&&(x("qty-".concat(t),{type:"manual",message:"incorrect number"}),s=!1):(x("qty-".concat(t),{type:"manual",message:r("global.validate.required",{label:r("purchasedProducts.quickAdd.qty")})}),s=!1),s},ot=t=>{const e={};let n=!0;return $(b,s=>{const i=t["sku-".concat(s)],a=t["qty-".concat(s)];if(n=nt(s,i,a)===!1?!1:n,n&&i){const c=parseInt(a,10)||0;e[i]=e[i]?e[i]+c:c}}),{skuValue:e,isValid:n,skus:Object.keys(e)}},it=k.useCallback((t,e,n)=>{const s=[],i=[],a=[],c=[],g=[],p=[];return n.forEach(d=>{const f=(t||[]).find(o=>o.variantSku.toUpperCase()===d.toUpperCase());if(!f){s.push(d);return}const{productId:q,variantId:ct,option:dt,purchasingDisabled:lt="1",modifiers:pt,variantSku:ft}=f,O=yt(pt),L=e[d]||0;if(lt==="1"&&E!=="shoppingList"){i.push(d);return}if(O.filter(o=>!o.isVerified).length>0){g.push(d);return}if(+L<1||+L>1e6){p.push(d);return}const h=(dt||[]).reduce((o,l)=>{try{const m=typeof l=="string"?JSON.parse(l):l;return o.push({optionId:"attribute[".concat(m.option_id,"]"),optionValue:"".concat(m.id)}),o}catch(m){return o}},[]);O.forEach(o=>{const{type:l}=o;if(l==="date"){const{defaultValue:m}=o;Object.keys(m).forEach(T=>{h.push({optionId:"attribute[".concat(o.option_id,"][").concat(T,"]"),optionValue:"".concat(o.defaultValue[T])})})}else h.push({optionId:"attribute[".concat(o.option_id,"]"),optionValue:"".concat(o.defaultValue)})}),c.push(d);const j=F.find(o=>o.node.variantSku===ft);if(j){const o=JSON.parse(j.node.optionList);let{quantity:l}=j.node;if((o.length>h.length?D(o,h):D(h,o))&&(l+=L),l>1e6){p.push(d);return}}a.push({...f,newSelectOptionList:h,productId:parseInt(q,10)||0,quantity:L,variantId:parseInt(ct,10)||0})}),{notFoundSku:s,notPurchaseSku:i,productItems:a,passSku:c,notAddAble:g,numberLimit:p}},[F,E]),A=(t,e,n,s)=>{e.forEach(i=>{const a=Object.keys(t).find(c=>t[c]===i)||"";a&&x(a.replace("sku",n),{type:"manual",message:s})})},rt=(t,e)=>{e.forEach(n=>{const s=Object.keys(t).find(i=>t[i]===n)||"";s&&(S(s,""),S(s.replace("sku","qty"),""))})},at=async t=>{const e=J?xt:At;try{const{variantSku:n}=await e({skus:t},!0);return n}catch(n){return[]}},v=()=>{if(z&&W===0){y.info("Your business account is pending approval. This feature is currently disabled.");return}tt(async t=>{try{C(!0);const{skuValue:e,isValid:n,skus:s}=ot(t);if(!n||s.length<=0)return;const i=await at(s),{notFoundSku:a,notPurchaseSku:c,productItems:g,notAddAble:p,passSku:d,numberLimit:f}=it(i,e,s);a.length>0&&(A(t,a,"sku",""),y.error(r("shoppingList.quickAdd.skuNotFound",{notFoundSku:a.join(", ")}),{isClose:!0})),c.length>0&&(A(t,c,"sku",""),y.error(r("shoppingList.quickAdd.skuNotPurchasable",{notPurchaseSku:c.join(", ")}),{isClose:!0})),p.length>0&&(A(t,p,"sku",""),y.error(r("shoppingList.quickAdd.skuNotAddable",{notAddAble:p.join(", ")}),{isClose:!0})),f.length>0&&(f.forEach(q=>{A(t,[q],"qty","")}),y.error(r("shoppingList.quickAdd.skuLimitQuantity",{numberLimit:f.join(", ")}),{isClose:!0})),g.length>0&&(await U(g),rt(t,d),M())}finally{C(!1)}})()},ut=t=>{t.key==="Enter"&&v()};return u.jsx(N,{isSpinning:I,spinningHeight:"auto",children:u.jsxs(V,{sx:{width:"100%"},children:[u.jsxs(w,{container:!0,sx:{margin:"16px 0"},children:[u.jsx(w,{item:!0,sx:{flex:1,display:"flex",alignItems:"center"},children:u.jsx(ht,{sx:{color:"#000"},variant:"body1",children:r("shoppingList.quickAdd.quickAdd")})}),u.jsx(w,{item:!0,children:u.jsx(Q,{variant:"text",sx:{textTransform:"initial",ml:"-8px",fontWeight:"400"},onClick:X,children:r("shoppingList.quickAdd.showMoreRows")})})]}),u.jsx(V,{onKeyDown:ut,sx:{"& label":{zIndex:0}},children:u.jsx(Lt,{formFields:K,errors:et,control:Z,getValues:st,setValue:S})}),u.jsx(Q,{variant:"outlined",fullWidth:!0,disabled:I,onClick:v,sx:{margin:"20px 0"},children:u.jsx(N,{isSpinning:G?I:!1,tip:"",size:16,children:u.jsx(V,{sx:{flex:1,textAlign:"center"},children:_})})})]})})}export{Ct as Q};
