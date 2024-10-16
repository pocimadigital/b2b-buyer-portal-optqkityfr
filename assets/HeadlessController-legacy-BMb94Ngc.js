System.register(["./reactVendor-legacy-CtYIj4Ma.js","./mui-legacy-C2p10bcq.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-CVgV69kS.js","../index-legacy.DMqXW-Ne.js","./b3Logger-legacy-C5y5ZQF8.js","./b3ShoppingList-legacy-rNP-9_0e.js","./masquerade-legacy-BEKJl-sw.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js"],(function(e,t){"use strict";var r,n,s,a,c,u,o,l,i,d,p,g,b,m,y,f,h,B,I,j,L;return{setters:[e=>{r=e.r},null,e=>{n=e.u},e=>{s=e.i,a=e.G,c=e.u,u=e.p,o=e.q,l=e.C,i=e.H,d=e.t,p=e.v,g=e.B,b=e.w,m=e.x,y=e.y,f=e.z,h=e.A},null,e=>{B=e.b},e=>{I=e.c},e=>{j=e.s,L=e.e},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({setOpenPage:e}){const B=s(),k=n(),{state:{registerEnabled:E,productQuoteEnabled:P,cartQuoteEnabled:w,shoppingListEnabled:R}}=r.useContext(a),q=c(u),x=c((({b2bFeatures:e})=>e.masqueradeCompany.id)),F=c((({company:e})=>e.customer)),O=c((({company:e})=>e.customer.role)),S=c(o),v=c((({company:e})=>e.tokens.B2BToken)),{state:{addQuoteBtn:T,shoppingListBtn:Q,addToAllQuoteBtn:A}}=r.useContext(l),{addToQuote:U}=h(e),M=()=>{e({isOpen:!0,openUrl:"/register"})},_=t=>{e({isOpen:!0,openUrl:`/shoppingList/${t}`,params:{shoppingListBtn:"add"}})},D=F.id,G=r.useRef(+x),z=r.useRef(D),V=r.useRef(F),$=r.useRef(+O),H=r.useRef(q),N=r.useRef(P),W=r.useRef(R),J=r.useRef(w),K=r.useRef(T),X=r.useRef(Q),Y=r.useRef(A);return G.current=+x,z.current=D,V.current=F,$.current=+O,H.current=q,N.current=P,W.current=R,J.current=w,K.current=T,X.current=Q,Y.current=A,r.useEffect((()=>{window.b2b={...window.b2b,callbacks:new t,utils:{openPage:t=>setTimeout((()=>{e("CLOSE"!==t?{isOpen:!0,openUrl:i[t]}:{isOpen:!1})}),0),quote:{addProductFromPage:t=>d([t],e),addProductsFromCart:()=>U(),addProducts:t=>d(t,e),getCurrent:()=>({productList:S}),getButtonInfo:()=>({...K.current,enabled:N.current}),getButtonInfoAddAllFromCartToQuote:()=>({...Y.current,enabled:J.current})},user:{getProfile:()=>({...V.current,role:O}),getMasqueradeState:async()=>{if("number"!=typeof V.current.b2bId)return{current_company_id:G.current,companies:[]};const{superAdminCompanies:{edges:e=[]}}=await p(V.current.b2bId,{first:50,offset:0,orderBy:"companyId"});return{current_company_id:G.current,companies:e.map((({node:e})=>e))}},getB2BToken:()=>v,setMasqueradeCompany:e=>{"number"==typeof V.current.b2bId&&j({companyId:e,b2bId:V.current.b2bId,customerId:z.current})},endMasquerade:()=>{"number"==typeof V.current.b2bId&&L({b2bId:V.current.b2bId})},graphqlBCProxy:g.graphqlBCProxy,loginWithB2BStorefrontToken:async e=>{B(b(e)),await m(e)}},shoppingList:{itemFromCurrentPage:[],addProductFromPage:t=>{window.b2b.utils.shoppingList.itemFromCurrentPage=C([t]),y({role:$.current,storeDispatch:B,saveFn:M,setOpenPage:e,registerEnabled:E})},addProducts:(e,t)=>f({shoppingListId:e,items:C(t),isB2BUser:H.current,customerGroupId:V.current.customerGroupId,gotoShoppingDetail:_,b3Lang:k}),createNewShoppingList:async(e,t)=>{const{shoppingListsCreate:r}=await I({data:{name:e,description:t},isB2BUser:H.current});return r.shoppingList},getButtonInfo:()=>({...X.current,enabled:W.current})}}}}),[S,v]),null}));class t{callbacks;constructor(){this.callbacks=new Map}addEventListener(e,t){this.callbacks.has(e)||this.callbacks.set(e,[t]);const r=this.callbacks.get(e)??[];r.find((e=>e===t))||r.push(t)}removeEventListener(e,t){if(!this.callbacks.has(e))return!1;const r=this.callbacks.get(e)??[],n=r.findIndex((e=>e===t));return-1!==n&&(r.splice(n,1),!0)}dispatchEvent(e,t){let r=!0;const n={data:t,preventDefault:()=>{r=!1}};return!this.callbacks.has(e)||((this.callbacks.get(e)??[]).forEach((e=>{try{e(n)}catch(t){r=!1,t instanceof Error&&B.error(t.message)}})),r)}}const C=e=>e.map((e=>{const{selectedOptions:t}=e;return{...e,selectedOptions:t?.reduce(((e,{optionEntityId:t,optionValueEntityId:r})=>(e[`attribute[${t}]`]=r,e)),{})}}))}}}));
