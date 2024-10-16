import{o as Wt,j as n,g as xt,B as F,T as nt,ae as zt,ad as Lt}from"./mui-CyG7s_nf.js";import{r as Qt,u as j,b8 as Mt,bF as Kt,bG as Ut,a5 as mt,bH as Gt,_ as vt,a2 as yt,aD as Ht,am as $t,aO as Ot,aP as It,b9 as Jt,aT as ft,b5 as Xt,a as kt,a3 as gt,aK as Yt,aQ as Zt}from"./react-setup-BZAh8p9K.js";import{r as s}from"./reactVendor-BAhb8EbJ.js";import{u as st}from"./lang-DxTEvHWx.js";import{d as _t}from"./B3FilterSearch-CO7sZeGw.js";import"../index.B1nqUXe0.js";import{u as te}from"./useBlockPendingAccountViewPrice-BsoEUyQS.js";import{u as ee}from"./form-Bvi8lP6x.js";import{n as X}from"./eStyled-B3rIBjaz.js";import{a as ne}from"./lodashEs-Ck10JMnh.js";import{B as se}from"./B3CustomForm-BkjKnsyD.js";import{b as ie}from"./b3Logger-CMQiGC3f.js";var Pt={},oe=Wt;Object.defineProperty(Pt,"__esModule",{value:!0});var ae=Pt.default=void 0,re=oe(Qt()),ce=n;ae=Pt.default=(0,re.default)((0,ce.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile");const le=X("div")({display:"flex",wordBreak:"break-word",gap:"8px",flexWrap:"wrap",padding:"12px 0 12px","&:first-of-type":{marginTop:"12px"}}),ht=X("div")(({padding:h})=>({display:"flex",flexGrow:1,flexShrink:1,alignItems:"flex-start",width:"100%",padding:h||"0 0 0 16px"})),de=X("img")(()=>({width:"60px",height:"60px",borderRadius:"4px",marginTop:"12px",flexShrink:0})),ue=X("div")(()=>({fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"})),pe=X(xt)(()=>({"& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":{marginTop:"-8px",marginBottom:"8px"}}));function he(h){const{isOpen:l,onCancel:O,onConfirm:I,product:e,isEdit:m=!1,isLoading:b,setIsLoading:D,isB2BUser:V,type:k,...M}=h,L=st(),{addButtonText:v=L("shoppingList.chooseOptionsDialog.addToList")}=M,y=j(({global:t})=>t.showInclusiveTaxPrice),R=j(({global:t})=>t.blockPendingQuoteNonPurchasableOOS.isEnableProduct),_=j(({b2bFeatures:t})=>t.masqueradeCompany.id),N=j(t=>t.company.customer.customerGroupId),K=j(t=>t.company.companyInfo.id),[f,w]=s.useState(1),[u,x]=s.useState([]),[p,S]=s.useState(null),[P,it]=s.useState(""),[ot,Y]=s.useState((e==null?void 0:e.imageUrl)||""),[Z,U]=s.useState(!0),[W,at]=s.useState({}),[G,rt]=s.useState([]),[tt,et]=s.useState(0),[B,H]=s.useState([]),[ct,a]=s.useState(!1);s.useEffect(()=>{if(k==="quote"&&e)if(P){const t=e;t.quantity=f;const i=!!Mt(t.base_price,t,{sku:P});U(i)}else{const t=e;t.quantity=f,!!Kt(t.base_price,t)||U(!1)}else(k==="shoppingList"||k==="quickOrder")&&e&&U(!(e!=null&&e.isPriceHidden))},[P,f,e,k]);const T=async t=>{var i,r;try{D(!0);const o=((i=t==null?void 0:t.modifiers)==null?void 0:i.filter(g=>g.type==="product_list_with_images"||g.type==="product_list"))||[],d={},C={};if(o.length>0){const g=o.reduce(($,J)=>{const{option_values:Q}=J;return Q.forEach(A=>{var Ct;(Ct=A==null?void 0:A.value_data)!=null&&Ct.product_id&&$.push(A.value_data.product_id)}),$},[]);if(g.length>0){const $=V?Ot:It,J=K||_,{productsSearch:Q}=await $({productIds:g,companyId:J,customerGroupId:N});Q.forEach(A=>{d[A.id]=A.imageUrl,C[A.id]=A})}}at(C),w(t.quantity),((r=t.variants)==null?void 0:r.length)===1&&t.variants[0]&&S(t.variants[0]);const c=Jt(t,d);x([...c])}finally{D(!1)}},E=t=>{var r;const i=[];(r=t.allOptions)==null||r.forEach(o=>{(o.type==="product_list_with_images"||o.type==="product_list"||o.type==="checkbox"||o.type==="rectangles"||o.type==="swatch"||o.type==="radio_buttons"||o.type==="dropdown")&&i.push(o)}),rt(i)};s.useEffect(()=>{var t;e?(T(e),H([]),et(0),(t=e==null?void 0:e.allOptions)!=null&&t.length&&E(e)):(w(1),x([]))},[e]);const lt=t=>{var o,d,C;const{variants:i=[]}=t;let r=0;if(P){const c=(o=i.find(g=>g.sku===P))==null?void 0:o.bc_calculated_price;r=(y?c==null?void 0:c.tax_inclusive:c==null?void 0:c.tax_exclusive)||0}else{const c=(d=i[0])==null?void 0:d.bc_calculated_price;r=parseFloat((C=y?c==null?void 0:c.tax_inclusive:c==null?void 0:c.tax_exclusive)==null?void 0:C.toString())||0}return r},Dt=t=>{(!t.target.value||parseInt(t.target.value,10)>0)&&w(t.target.value)},Tt=t=>{["KeyE","Equal","Minus"].indexOf(t.code)>-1&&t.preventDefault()},At=()=>{f||w(1),+f>1e6&&w(1e6)},{control:Bt,handleSubmit:Et,getValues:Vt,formState:{errors:qt},watch:bt,setValue:St,reset:Ft}=ee({mode:"all"}),z=bt(),q=s.useRef(z),dt=s.useCallback(async(t,i="")=>{var C;if(!(((C=u.find(c=>c.name===i))==null?void 0:C.isVariantOption)||!1)||!e||!i)return;const{variants:o=[]}=e||{},d=o.find(c=>{const{option_values:g=[]}=c;return g.reduce((J,Q)=>t[Ut.encode("attribute[".concat(Q.option_id,"]"))].toString()!==(Q.id||"").toString()?!1:J,!0)})||null;if(it(d?d.sku:""),S(d),d&&(d.sku||d.variant_id)){const c=o.find(g=>g.sku===d.sku||g.variant_id===d.variant_id);Y((c==null?void 0:c.image_url)||e.imageUrl||"")}},[u,e]);s.useEffect(()=>{const t=bt((i,{name:r})=>{dt(i,r)});if(u[0]){const i=u.reduce((r,o)=>{const d=r;return d[o.name]=o.default,St(o.name,o.default),r},{});dt(i,u[0].name)}return()=>t.unsubscribe()},[u,dt]);const ut=s.useCallback(()=>{const{purchasing_disabled:t=!0}=p||{};return k!=="shoppingList"&&t===!0&&!R?(mt.error(L("shoppingList.chooseOptionsDialog.productNoLongerForSale")),!1):!0},[R,k,p]),pt=s.useCallback(t=>{const i=Gt(u,{},t);return Object.keys(i).map(r=>{var o;return{optionId:r,optionValue:(o=i[r])==null?void 0:o.toString()}})},[u]);s.useEffect(()=>{if(!(q!=null&&q.current&&ne(q==null?void 0:q.current,z))&&(q.current=z,Object.keys(z).length&&u.length&&G.length)){const t=pt(z),{variant_id:i=""}=p||{};if(!e||!e.id||!i||!ut())return;const r=[{...e,newSelectOptionList:t,productId:e==null?void 0:e.id,quantity:parseInt(f.toString(),10)||1,variantId:parseInt(i.toString(),10)||1,additionalProducts:W}];if(B[0]){let o=!1;const{newSelectOptionList:d}=B[0];d.forEach(C=>{const c=G.findIndex(g=>C.optionId.includes(String(g.id)));t.forEach(g=>{C.optionId===g.optionId&&C.optionValue!==g.optionValue&&c!==-1&&(o=!0)})}),o&&H(r)}else H(r)}},[W,B,u.length,z,pt,e,G,f,ut,p]),s.useEffect(()=>{(async()=>{try{if(B.length){a(!0);const i=await ft(B);if(i[0]){const{basePrice:r,taxPrice:o}=i[0],d=Xt(+r,+o);et(d)}}}catch(i){ie.error(i)}finally{a(!1)}})()},[B]);const Rt=()=>{Et(t=>{const i=pt(t),{variant_id:r=""}=p||{};!e||!e.id||!r||!ut()||I([{...e,newSelectOptionList:i,productId:e==null?void 0:e.id,quantity:parseInt(f.toString(),10)||1,variantId:parseInt(r.toString(),10)||1,additionalProducts:W}])})()},Nt=()=>{w(1),O()};return s.useEffect(()=>{l||Ft()},[l]),n.jsx(vt,{isOpen:l,rightSizeBtn:m?L("shoppingList.chooseOptionsDialog.saveOption"):v,handleLeftClick:Nt,handRightClick:Rt,title:L("shoppingList.chooseOptionsDialog.chooseOptions"),loading:b||ct,children:n.jsx(yt,{isSpinning:b,children:e&&n.jsx(F,{children:n.jsxs(F,{sx:{display:"flex",flexDirection:"column"},children:[n.jsxs(F,{sx:{display:"flex"},children:[n.jsx(de,{src:ot||e.imageUrl||Ht}),n.jsxs(le,{children:[n.jsx(ht,{padding:"0",children:n.jsxs(F,{sx:{marginLeft:"16px"},children:[n.jsx(nt,{variant:"body1",color:"#212121",children:e.name}),n.jsx(nt,{variant:"body1",color:"#616161",children:P||e.sku}),(e.product_options||[]).map(t=>n.jsx(ue,{children:"".concat(t.display_name,": ").concat(t.display_value)},"".concat(t.option_id)))]})}),n.jsxs(ht,{children:[n.jsx("span",{children:L("shoppingList.chooseOptionsDialog.price")}),Z?$t(tt*+f||lt(e)):""]}),n.jsx(ht,{children:n.jsx(pe,{type:"number",variant:"outlined",label:L("shoppingList.chooseOptionsDialog.quantity"),value:f,onChange:Dt,onKeyDown:Tt,onBlur:At,size:"small",sx:{width:"60%",maxWidth:"100px"}})})]})]}),n.jsx(zt,{sx:{margin:"16px 0 24px"}}),n.jsx(se,{formFields:u,errors:qt,control:Bt,getValues:Vt,setValue:St})]})})})})}const wt={id:0,isLoading:!1},jt=s.createContext({state:wt,dispatch:()=>{}}),fe=(h,l)=>{switch(l.type){case"all":return{...h,...l.payload};case"init":return{...h,id:l.payload.id};case"loading":return{...h,isLoading:l.payload.isLoading};default:return h}};function je(h){const[l,O]=s.useReducer(fe,wt),{children:I}=h,e=s.useMemo(()=>({state:l,dispatch:O}),[l]);return n.jsx(jt.Provider,{value:e,children:I})}function ge(h){const{product:{id:l,allOptions:O},onAddToListClick:I,onChooseOptionsClick:e,addButtonText:m}=h,{state:{isLoading:b=!1}}=s.useContext(jt),[D]=kt(),V=st();return O&&O.length>0?n.jsx(gt,{variant:"outlined",onClick:()=>{e(l)},disabled:b,fullWidth:D,children:V("global.searchProduct.chooseOptionsButton")}):n.jsx(gt,{variant:"outlined",onClick:()=>{I(l)},disabled:b,fullWidth:D,children:m})}const xe=Yt;function me(h){const l=st(),{isOpen:O,onCancel:I,searchText:e,productList:m,onSearchTextChange:b,onSearch:D,onProductQuantityChange:V,onAddToListClick:k,onChooseOptionsClick:M,isLoading:L,type:v,searchDialogTitle:y=l("shoppingLists.title"),addButtonText:R=l("shoppingLists.addButtonText")}=h,_=j(({global:x})=>x.blockPendingQuoteNonPurchasableOOS.isEnableProduct),[N]=kt(),K=()=>{I()},f=x=>{x.key==="Enter"&&D()},w=s.useCallback(x=>{const{variants:p=[]}=x||{},{purchasing_disabled:S=!0}=p[0]||{};return v!=="shoppingList"&&S===!0&&!_?(mt.error(l("shoppingList.chooseOptionsDialog.productNoLongerForSale")),!1):!0},[_,v]),u=x=>{var S;const p=m.find(P=>P.id===x);if(p&&w(p||{})){let P=p.variantId||0;!p.variantId&&((S=p.variants)!=null&&S[0])&&(P=p.variants[0].variant_id),k([{...p,newSelectOptionList:[],quantity:parseInt(p.quantity.toString(),10)||1,variantId:P}])}};return n.jsx(vt,{fullWidth:!0,isOpen:O,handleLeftClick:K,title:y,showRightBtn:!1,loading:L,maxWidth:"md",leftSizeBtn:l("shoppingLists.close"),children:n.jsx(yt,{isSpinning:L,children:n.jsxs(F,{sx:{minWidth:N?"initial":"100%",flex:1},children:[n.jsx(xt,{hiddenLabel:!0,variant:"outlined",fullWidth:!0,size:"small",value:e,onChange:b,onKeyDown:f,error:!m||m.length<=0,InputProps:{startAdornment:n.jsx(Lt,{position:"start",children:n.jsx(_t,{})})},sx:{margin:"12px 0","& input":{padding:"12px 12px 12px 0"}}}),m&&m.length>0?n.jsx(xe,{products:m,quantityEditable:!0,type:v,textAlign:N?"left":"right",canToProduct:!0,onProductQuantityChange:V,renderAction:x=>n.jsx(ge,{product:x,onAddToListClick:u,onChooseOptionsClick:M,addButtonText:R}),actionWidth:"180px"}):n.jsx(nt,{children:"No products found"})]})})})}function De({updateList:h=()=>{},addToList:l,searchDialogTitle:O,addButtonText:I,isB2BUser:e,type:m}){const b=st(),D=j(({company:a})=>a.companyInfo.id),V=j(a=>a.company.customer.customerGroupId),k=j(({company:a})=>a.companyInfo.status),M=j(({b2bFeatures:a})=>a.masqueradeCompany.id),L=D||M,[v,y]=s.useState(!1),[R,_]=s.useState(!1),[N,K]=s.useState(!1),[f,w]=s.useState(""),[u,x]=s.useState([]),[p,S]=s.useState(!1),[P,it]=s.useState(),[ot]=te(),Y=a=>{w(a.target.value)},Z=async()=>{if(!f||v)return;if(ot&&k===0){mt.info(b("global.searchProductAddProduct.businessAccountPendingApproval"));return}const a=e?Ot:It;y(!0);try{const{productsSearch:T}=await a({search:f,companyId:L,customerGroupId:V,categoryFilter:!0}),E=Zt(T);x(E),_(!0)}finally{y(!1)}},U=a=>{a.key==="Enter"&&Z()},W=()=>{Z()},at=()=>{x([])},G=()=>{S(!1),_(!1),N&&(K(!1),h()),at()},rt=(a,T)=>{const E=u.find(lt=>lt.id===a);E&&(E.quantity=T),x([...u])},tt=async a=>{try{y(!0),await ft(a),await l(a),h()}finally{y(!1)}},et=async a=>{await tt(a)},B=a=>{const T=u.find(E=>E.id===a);T&&it({...T}),_(!1),S(!0)},H=()=>{S(!1),_(!0)},ct=async a=>{try{y(!0),await ft(a),await tt(a),S(!1),_(!0)}catch(T){y(!1)}finally{y(!1)}};return n.jsxs(F,{sx:{margin:"24px 0"},children:[n.jsx(nt,{children:b("global.searchProductAddProduct.searchBySkuOrName")}),n.jsx(xt,{hiddenLabel:!0,placeholder:b("global.searchProduct.placeholder.".concat(m)),variant:"outlined",fullWidth:!0,size:"small",value:f,onChange:Y,onKeyDown:U,InputProps:{startAdornment:n.jsx(Lt,{position:"start",children:n.jsx(_t,{})})},sx:{margin:"12px 0","& input":{padding:"12px 12px 12px 0"}}}),n.jsx(gt,{variant:"outlined",fullWidth:!0,disabled:v,onClick:W,children:n.jsx(yt,{isSpinning:v,tip:"",size:16,children:n.jsx(F,{sx:{flex:1,textAlign:"center"},children:b("global.searchProductAddProduct.searchProduct")})})}),n.jsx(me,{isOpen:R,isLoading:v,productList:u,searchText:f,type:m,onSearchTextChange:Y,onSearch:W,onCancel:G,onProductQuantityChange:rt,onChooseOptionsClick:B,onAddToListClick:et,searchDialogTitle:O,addButtonText:I}),n.jsx(he,{isOpen:p,isLoading:v,type:m,setIsLoading:y,product:P,onCancel:H,onConfirm:ct,addButtonText:I,isB2BUser:e})]})}export{he as C,De as S,jt as a,je as b,ae as d};
