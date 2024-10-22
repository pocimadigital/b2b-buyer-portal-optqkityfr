System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./form-legacy-CAo5v63e.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-CoXV7Ff0.js","./B3CustomForm-legacy-B4W3KTQE.js","../index-legacy.4Oc0YHSS.js","./useBlockPendingAccountViewPrice-legacy-DvWRKvzo.js"],(function(t,e){"use strict";var s,n,i,o,r,a,u,l,c,d,p,h,g,f,k,y,m,b,x;return{setters:[t=>{s=t.j,n=t.B,i=t.G,o=t.T},t=>{r=t.r},t=>{a=t.u},t=>{u=t.u},t=>{l=t.u,c=t.p,d=t.bI,p=t.bJ,h=t.a2,g=t.a3,f=t.aW,k=t.a5,y=t.aG,m=t.aH},t=>{b=t.B},null,t=>{x=t.u}],execute:function(){t("Q",(function(t){const e=u(),{updateList:j,quickAddToList:S,level:q=3,buttonText:A=e("shoppingList.quickAdd.addToShoppingList"),buttonLoading:v=!1,type:L}=t,I=l(c),V=l((({company:t})=>t.companyInfo.status)),$=l((({quoteInfo:t})=>t.draftQuoteList)),[w]=x(),[C,E]=r.useState(q),[P,O]=r.useState([]),[F,T]=r.useState(!1),N=(t,e)=>{new Array(t).fill(1).forEach(((t,s)=>e(s)))};r.useEffect((()=>{let t=[];N(C,(s=>{t=[...t,...f(s,e)]})),O(t)}),[C]);const{control:B,handleSubmit:W,getValues:J,formState:{errors:Q},setError:_,setValue:z}=a({mode:"all"}),D=t=>{const s={};let n=!0;return N(C,(i=>{const o=t[`sku-${i}`],r=t[`qty-${i}`];if(n=!1!==((t,s,n)=>{if(!s&&!n)return!0;let i=!0;const o=parseInt(n,10)||0;return s||(_(`sku-${t}`,{type:"manual",message:e("global.validate.required",{label:e("purchasedProducts.quickAdd.sku")})}),i=!1),n?o<=0&&(_(`qty-${t}`,{type:"manual",message:"incorrect number"}),i=!1):(_(`qty-${t}`,{type:"manual",message:e("global.validate.required",{label:e("purchasedProducts.quickAdd.qty")})}),i=!1),i})(i,o,r)&&n,n&&o){const t=parseInt(r,10)||0;s[o]=s[o]?s[o]+t:t}})),{skuValue:s,isValid:n,skus:Object.keys(s)}},G=r.useCallback(((t,e,s)=>{const n=[],i=[],o=[],r=[],a=[],u=[];return s.forEach((s=>{const l=(t||[]).find((t=>t.variantSku.toUpperCase()===s.toUpperCase()));if(!l)return void n.push(s);const{productId:c,variantId:h,option:g,purchasingDisabled:f="1",modifiers:k,variantSku:y}=l,m=d(k),b=e[s]||0;if("1"===f&&"shoppingList"!==L)return void i.push(s);if(m.filter((t=>!t.isVerified)).length>0)return void a.push(s);if(+b<1||+b>1e6)return void u.push(s);const x=(g||[]).reduce(((t,e)=>{try{const s="string"==typeof e?JSON.parse(e):e;return t.push({optionId:`attribute[${s.option_id}]`,optionValue:`${s.id}`}),t}catch(s){return t}}),[]);m.forEach((t=>{const{type:e}=t;if("date"===e){const{defaultValue:e}=t;Object.keys(e).forEach((e=>{x.push({optionId:`attribute[${t.option_id}][${e}]`,optionValue:`${t.defaultValue[e]}`})}))}else x.push({optionId:`attribute[${t.option_id}]`,optionValue:`${t.defaultValue}`})})),r.push(s);const j=$.find((t=>t.node.variantSku===y));if(j){const t=JSON.parse(j.node.optionList);let{quantity:e}=j.node;if((t.length>x.length?p(t,x):p(x,t))&&(e+=b),e>1e6)return void u.push(s)}o.push({...l,newSelectOptionList:x,productId:parseInt(c,10)||0,quantity:b,variantId:parseInt(h,10)||0})})),{notFoundSku:n,notPurchaseSku:i,productItems:o,passSku:r,notAddAble:a,numberLimit:u}}),[$,L]),H=(t,e,s,n)=>{e.forEach((e=>{const i=Object.keys(t).find((s=>t[s]===e))||"";i&&_(i.replace("sku",s),{type:"manual",message:n})}))},U=()=>{w&&0===V?k.info("Your business account is pending approval. This feature is currently disabled."):W((async t=>{try{T(!0);const{skuValue:s,isValid:n,skus:i}=D(t);if(!n||i.length<=0)return;const o=await(async t=>{const e=I?y:m;try{const{variantSku:s}=await e({skus:t},!0);return s}catch(s){return[]}})(i),{notFoundSku:r,notPurchaseSku:a,productItems:u,notAddAble:l,passSku:c,numberLimit:d}=G(o,s,i);r.length>0&&(H(t,r,"sku",""),k.error(e("shoppingList.quickAdd.skuNotFound",{notFoundSku:r.join(", ")}),{isClose:!0})),a.length>0&&(H(t,a,"sku",""),k.error(e("shoppingList.quickAdd.skuNotPurchasable",{notPurchaseSku:a.join(", ")}),{isClose:!0})),l.length>0&&(H(t,l,"sku",""),k.error(e("shoppingList.quickAdd.skuNotAddable",{notAddAble:l.join(", ")}),{isClose:!0})),d.length>0&&(d.forEach((e=>{H(t,[e],"qty","")})),k.error(e("shoppingList.quickAdd.skuLimitQuantity",{numberLimit:d.join(", ")}),{isClose:!0})),u.length>0&&(await S(u),((t,e)=>{e.forEach((e=>{const s=Object.keys(t).find((s=>t[s]===e))||"";s&&(z(s,""),z(s.replace("sku","qty"),""))}))})(t,c),j())}finally{T(!1)}}))()};return s.jsx(h,{isSpinning:F,spinningHeight:"auto",children:s.jsxs(n,{sx:{width:"100%"},children:[s.jsxs(i,{container:!0,sx:{margin:"16px 0"},children:[s.jsx(i,{item:!0,sx:{flex:1,display:"flex",alignItems:"center"},children:s.jsx(o,{sx:{color:"#000"},variant:"body1",children:e("shoppingList.quickAdd.quickAdd")})}),s.jsx(i,{item:!0,children:s.jsx(g,{variant:"text",sx:{textTransform:"initial",ml:"-8px",fontWeight:"400"},onClick:()=>{E(C+q)},children:e("shoppingList.quickAdd.showMoreRows")})})]}),s.jsx(n,{onKeyDown:t=>{"Enter"===t.key&&U()},sx:{"& label":{zIndex:0}},children:s.jsx(b,{formFields:P,errors:Q,control:B,getValues:J,setValue:z})}),s.jsx(g,{variant:"outlined",fullWidth:!0,disabled:F,onClick:U,sx:{margin:"20px 0"},children:s.jsx(h,{isSpinning:!!v&&F,tip:"",size:16,children:s.jsx(n,{sx:{flex:1,textAlign:"center"},children:A})})})]})})}))}}}));
