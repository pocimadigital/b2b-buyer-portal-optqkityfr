const __vite__fileDeps=["https://b2b-buyer-portal-optqkityfr.pages.dev/assets/react-setup-BQykMGtr.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/mui-CyG7s_nf.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/reactVendor-BAhb8EbJ.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/eReact-DeS39u1B.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/intl-CIPMD0ue.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/eCache-BQInSoPa.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/eStyled-B3rIBjaz.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/redux-B-shcavw.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/toolkit-CHPG993j.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/lodashEs-Ck10JMnh.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/lang-DxTEvHWx.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/router-BbCjXwHs.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/muiIcon-BfPleEzf.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/dateFns-BB2kaHor.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/dropzone-D4lSiSJA.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/b3Logger-CMQiGC3f.js","https://b2b-buyer-portal-optqkityfr.pages.dev/assets/react-setup-Bofl6DAz.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var C=Object.defineProperty;var I=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(I(e,typeof t!="symbol"?t+"":t,n),n),f=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var b=(e,t,n)=>(f(e,t,"read from private field"),n?n.call(e):t.get(e)),w=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},k=(e,t,n,r)=>(f(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);function A(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}const B="modulepreload",P=function(e,t){return e[0]==="."?new URL(e,t).href:e},E={},S=function(t,n,r){let g=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),v=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));g=Promise.all(n.map(i=>{if(i=P(i,r),i in E)return;E[i]=!0;const s=i.endsWith(".css"),y=s?'[rel="stylesheet"]':"";if(!!r)for(let l=c.length-1;l>=0;l--){const h=c[l];if(h.href===i&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(i,'"]').concat(y)))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":B,s||(a.as="script",a.crossOrigin=""),a.href=i,v&&a.setAttribute("nonce",v),document.head.appendChild(a),s)return new Promise((l,h)=>{a.addEventListener("load",l),a.addEventListener("error",()=>h(new Error("Unable to preload CSS for ".concat(i))))})}))}return g.then(()=>t()).catch(c=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=c,window.dispatchEvent(o),!o.defaultPrevented)throw c})},T=()=>{let t='[href^="/account.php"],  [href^="/account.php"] .navUser-item-accountLabel, [href^="/account.php?action=address_book"], [href^="/account.php?action=order_status"], [href^="/account.php?action=account_details"], [href="/login.php"], [href="/login.php?action=create_account"]';return Object.values({Hera:'[href^="/account.php"] span, .account-item .account-action span svg, .account-item .account-action span svg use, [href^="/login.php?action=logout"], [href="/login.php"] .icon, .account-item .account-action span',RightRope:'[href="/account.php"] svg, [href="/account.php"] svg use, [href="/account.php"] span, [href="/account.php"], [href="/login.php"] span, [href="/login.php"] svg use, [href="/login.php"] svg, [href="/login.php"]',SuperMarket:'[href="/login.php"] span, [href="/account.php"] span',LifeStyle:".navUser-item--account a, .navUser-item--account a svg, .navUser-section-sub .navUser-item .needsclick, .navUser-section-sub .navUser-item .needsclick svg, .navUser-section-sub .navUser-item .needsclick span, .navUser-section-sub .navUser-item a, .navUser-section-sub .navUser-item a svg, .navUser-section-sub .navUser-item a svg use, .navUser-section-sub .navUser-item a span",Chiara:'.navUser-item--more, #navUser-more-toggle, #navUser-more-toggle .navUser-item-icon, #navUser-more-toggle .navUser-item-icon svg, #navUser-more-toggle .navUser-item-icon svg use, #navUser-more-toggle .navUser-item-moreLabel, .header-top-item--login, .header-top-item--login .header-top-action, .header-top-item--logout, .header-top-item--logout [href^="/login.php?action=logout"]',HaloOne:'[href^="/account.php"] svg, [href^="/account.php"] svg path, [href="/login.php"] svg path',FinchUS:'[href^="/account.php"] img',Beautify:'[href^="/account.php"] .new-icon-account'}).forEach(r=>{t=t.concat(r,",")}),t=t.slice(0,-1),{"dom.allOtherElement":"".concat(t)}};var _;const m={"dom.registerElement":'[href^="/login.php"], #checkout-customer-login, [href="/login.php"] .navUser-item-loginLabel, #checkout-customer-returning .form-legend-container [href="#"]',"dom.registerUrl":"/register","dom.checkoutRegisterParentElement":"#checkout-app","dom.navUserLoginElement":".navUser-item.navUser-item--account","dom.setToQuote":"#form-action-addToCart","dom.setToShoppingListParentEl":"#add-to-cart-wrapper","dom.setToNoPuchasable":"#add-to-cart-wrapper","dom.cartActions.container":".cart-actions","dom.openB3Checkout":"checkout-customer-continue","dom.cart":'[href="/cart.php"], #form-action-addToCart, [data-button-type="add-cart"], [data-emthemesmodez-cart-item-add]',"dom.productView":".productView","dom.register":'[href^="/login.php?action=create_account"]',"dom.hideThemePayments":'.cart-additionalCheckoutButtons, .previewCart-additionalCheckoutButtons, .previewCartCheckout-additionalCheckoutButtons, [data-content-region="cart_below_totals"], .add-to-cart-wallet-buttons, [data-content-region="product_below_price"]',before_login_goto_page:"/account.php?action=order_status",checkout_super_clear_session:"true",...T(),...window.B3Local,setting:{b2b_url:"https://api-b2b.staging.zone",b2b_socket_url:"https://api-b2b.staging.zone",...(_=window.B3Local)==null?void 0:_.setting}},R=window.requestIdleCallback?window.requestIdleCallback:e=>{const t=Date.now();return window.setTimeout(()=>{e({didTimeout:!1,timeRemaining(){return Math.max(0,50-(Date.now()-t))}})},1)};var u;class z{constructor(){p(this,"clickedLinkElement");w(this,u,!1);p(this,"isInitListener")}set isInit(t){var n;k(this,u,t),(n=this.isInitListener)==null||n.call(this)}get isInit(){return b(this,u)}}u=new WeakMap;window.b2b={...window.b2b,initializationEnvironment:new z};const d=async()=>{window.b2b.initializationEnvironment.isInit||await S(()=>import("./assets/react-setup-BQykMGtr.js").then(e=>e.b$),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url)},L=async e=>{window.b2b.initializationEnvironment.clickedLinkElement=e.target,e.preventDefault(),e.stopPropagation(),await d()},O=()=>{document.querySelectorAll("".concat(m["dom.registerElement"],", ").concat(m["dom.allOtherElement"])).forEach(t=>t.addEventListener("click",L))},U=()=>{document.querySelectorAll("".concat(m["dom.registerElement"],", ").concat(m["dom.allOtherElement"])).forEach(t=>t.removeEventListener("click",L))};window.location.hash.startsWith("#/")?d():(R(d),O(),window.addEventListener("beforeunload",U),window.b2b.initializationEnvironment.isInitListener=()=>{U(),setTimeout(()=>{var e;return(e=window.b2b.initializationEnvironment.clickedLinkElement)==null?void 0:e.click()},0)});export{S as _,A as __vite_legacy_guard,m as g};
