var G=Object.defineProperty;var _=(s,e,r)=>e in s?G(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var k=(s,e,r)=>(_(s,typeof e!="symbol"?e+"":e,r),r);import{r as n}from"./reactVendor-BAhb8EbJ.js";import"./mui-CyG7s_nf.js";import{u as H}from"./lang-DxTEvHWx.js";import{i as $,G as z,u as d,p as N,q as j,C as V,H as W,t as A,v as X,B as Y,w as Z,x as J,y as O,z as K,A as tt}from"./react-setup-5BSR6wiC.js";import"../index.BYZwzzkf.js";import{b as et}from"./b3Logger-CMQiGC3f.js";import{c as rt}from"./b3ShoppingList-DgURkD3s.js";import{s as st,e as ot}from"./masquerade-C9f1bY-S.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";class nt{constructor(){k(this,"callbacks");this.callbacks=new Map}addEventListener(e,r){var a;this.callbacks.has(e)||this.callbacks.set(e,[r]);const o=(a=this.callbacks.get(e))!=null?a:[];o.find(c=>c===r)||o.push(r)}removeEventListener(e,r){var a;if(!this.callbacks.has(e))return!1;const o=(a=this.callbacks.get(e))!=null?a:[],u=o.findIndex(c=>c===r);return u===-1?!1:(o.splice(u,1),!0)}dispatchEvent(e,r){var c;let o=!0;const u={data:r,preventDefault:()=>{o=!1}};return this.callbacks.has(e)?(((c=this.callbacks.get(e))!=null?c:[]).forEach(l=>{try{l(u)}catch(p){o=!1,p instanceof Error&&et.error(p.message)}}),o):!0}}const F=s=>s.map(e=>{const{selectedOptions:r}=e;return{...e,selectedOptions:r==null?void 0:r.reduce((o,{optionEntityId:u,optionValueEntityId:a})=>(o["attribute[".concat(u,"]")]=a,o),{})}});function Qt({setOpenPage:s}){const e=$(),r=H(),{state:{registerEnabled:o,productQuoteEnabled:u,cartQuoteEnabled:a,shoppingListEnabled:c}}=n.useContext(z),l=d(N),p=d(({b2bFeatures:t})=>t.masqueradeCompany.id),f=d(({company:t})=>t.customer),b=d(({company:t})=>t.customer.role),h=d(j),C=d(({company:t})=>t.tokens.B2BToken),{state:{addQuoteBtn:R,shoppingListBtn:L,addToAllQuoteBtn:I}}=n.useContext(V),{addToQuote:v}=tt(s),U=()=>{s({isOpen:!0,openUrl:"/register"})},M=t=>{s({isOpen:!0,openUrl:"/shoppingList/".concat(t),params:{shoppingListBtn:"add"}})},y=f.id,g=n.useRef(+p),E=n.useRef(y),i=n.useRef(f),w=n.useRef(+b),B=n.useRef(l),Q=n.useRef(u),P=n.useRef(c),T=n.useRef(a),q=n.useRef(R),x=n.useRef(L),S=n.useRef(I);return g.current=+p,E.current=y,i.current=f,w.current=+b,B.current=l,Q.current=u,P.current=c,T.current=a,q.current=R,x.current=L,S.current=I,n.useEffect(()=>{window.b2b={...window.b2b,callbacks:new nt,utils:{openPage:t=>setTimeout(()=>{if(t==="CLOSE"){s({isOpen:!1});return}s({isOpen:!0,openUrl:W[t]})},0),quote:{addProductFromPage:t=>A([t],s),addProductsFromCart:()=>v(),addProducts:t=>A(t,s),getCurrent:()=>({productList:h}),getButtonInfo:()=>({...q.current,enabled:Q.current}),getButtonInfoAddAllFromCartToQuote:()=>({...S.current,enabled:T.current})},user:{getProfile:()=>({...i.current,role:b}),getMasqueradeState:async()=>{if(typeof i.current.b2bId!="number")return{current_company_id:g.current,companies:[]};const{superAdminCompanies:{edges:t=[]}}=await X(i.current.b2bId,{first:50,offset:0,orderBy:"companyId"});return{current_company_id:g.current,companies:t.map(({node:m})=>m)}},getB2BToken:()=>C,setMasqueradeCompany:t=>{typeof i.current.b2bId=="number"&&st({companyId:t,b2bId:i.current.b2bId,customerId:E.current})},endMasquerade:()=>{typeof i.current.b2bId=="number"&&ot({b2bId:i.current.b2bId})},graphqlBCProxy:Y.graphqlBCProxy,loginWithB2BStorefrontToken:async t=>{e(Z(t)),await J(t)}},shoppingList:{itemFromCurrentPage:[],addProductFromPage:t=>{window.b2b.utils.shoppingList.itemFromCurrentPage=F([t]),O({role:w.current,storeDispatch:e,saveFn:U,setOpenPage:s,registerEnabled:o})},addProducts:(t,m)=>K({shoppingListId:t,items:F(m),isB2BUser:B.current,customerGroupId:i.current.customerGroupId,gotoShoppingDetail:M,b3Lang:r}),createNewShoppingList:async(t,m)=>{const{shoppingListsCreate:D}=await rt({data:{name:t,description:m},isB2BUser:B.current});return D.shoppingList},getButtonInfo:()=>({...x.current,enabled:P.current})}}}},[h,C]),null}export{Qt as default};
