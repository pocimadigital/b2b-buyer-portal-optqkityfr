System.register([],(function(e,t){"use strict";return{execute:function(){const n=e("_",(function(e,t,n){let o=Promise.resolve();return o.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))})),o=e("g",{"dom.registerElement":'[href^="/login.php"], #checkout-customer-login, [href="/login.php"] .navUser-item-loginLabel, #checkout-customer-returning .form-legend-container [href="#"]',"dom.registerUrl":"/register","dom.checkoutRegisterParentElement":"#checkout-app","dom.navUserLoginElement":".navUser-item.navUser-item--account","dom.setToQuote":"#form-action-addToCart","dom.setToShoppingListParentEl":"#add-to-cart-wrapper","dom.setToNoPuchasable":"#add-to-cart-wrapper","dom.cartActions.container":".cart-actions","dom.openB3Checkout":"checkout-customer-continue","dom.cart":'[href="/cart.php"], #form-action-addToCart, [data-button-type="add-cart"], [data-emthemesmodez-cart-item-add]',"dom.productView":".productView","dom.register":'[href^="/login.php?action=create_account"]',"dom.hideThemePayments":'.cart-additionalCheckoutButtons, .previewCart-additionalCheckoutButtons, .previewCartCheckout-additionalCheckoutButtons, [data-content-region="cart_below_totals"], .add-to-cart-wallet-buttons, [data-content-region="product_below_price"]',before_login_goto_page:"/account.php?action=order_status",checkout_super_clear_session:"true",...(()=>{let e='[href^="/account.php"],  [href^="/account.php"] .navUser-item-accountLabel, [href^="/account.php?action=address_book"], [href^="/account.php?action=order_status"], [href^="/account.php?action=account_details"], [href="/login.php"], [href="/login.php?action=create_account"]';return Object.values({Hera:'[href^="/account.php"] span, .account-item .account-action span svg, .account-item .account-action span svg use, [href^="/login.php?action=logout"], [href="/login.php"] .icon, .account-item .account-action span',RightRope:'[href="/account.php"] svg, [href="/account.php"] svg use, [href="/account.php"] span, [href="/account.php"], [href="/login.php"] span, [href="/login.php"] svg use, [href="/login.php"] svg, [href="/login.php"]',SuperMarket:'[href="/login.php"] span, [href="/account.php"] span',LifeStyle:".navUser-item--account a, .navUser-item--account a svg, .navUser-section-sub .navUser-item .needsclick, .navUser-section-sub .navUser-item .needsclick svg, .navUser-section-sub .navUser-item .needsclick span, .navUser-section-sub .navUser-item a, .navUser-section-sub .navUser-item a svg, .navUser-section-sub .navUser-item a svg use, .navUser-section-sub .navUser-item a span",Chiara:'.navUser-item--more, #navUser-more-toggle, #navUser-more-toggle .navUser-item-icon, #navUser-more-toggle .navUser-item-icon svg, #navUser-more-toggle .navUser-item-icon svg use, #navUser-more-toggle .navUser-item-moreLabel, .header-top-item--login, .header-top-item--login .header-top-action, .header-top-item--logout, .header-top-item--logout [href^="/login.php?action=logout"]',HaloOne:'[href^="/account.php"] svg, [href^="/account.php"] svg path, [href="/login.php"] svg path',FinchUS:'[href^="/account.php"] img',Beautify:'[href^="/account.php"] .new-icon-account'}).forEach((t=>{e=e.concat(t,",")})),e=e.slice(0,-1),{"dom.allOtherElement":`${e}`}})(),...window.B3Local,setting:{b2b_url:"https://api-b2b.staging.zone",b2b_socket_url:"https://api-b2b.staging.zone",...window.B3Local?.setting}}),a=window.requestIdleCallback?window.requestIdleCallback:e=>{const t=Date.now();return window.setTimeout((()=>{e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})}),1)};window.b2b={...window.b2b,initializationEnvironment:new class{clickedLinkElement;#e=!1;isInitListener;set isInit(e){this.#e=e,this.isInitListener?.()}get isInit(){return this.#e}}};const i=async()=>{window.b2b.initializationEnvironment.isInit||await n((()=>t.import("./assets/react-setup-legacy-C2ydd0r0.js").then((e=>e.b$))),void 0,t.meta.url)},r=async e=>{window.b2b.initializationEnvironment.clickedLinkElement=e.target,e.preventDefault(),e.stopPropagation(),await i()},c=()=>{document.querySelectorAll(`${o["dom.registerElement"]}, ${o["dom.allOtherElement"]}`).forEach((e=>e.removeEventListener("click",r)))};window.location.hash.startsWith("#/")?i():(a(i),document.querySelectorAll(`${o["dom.registerElement"]}, ${o["dom.allOtherElement"]}`).forEach((e=>e.addEventListener("click",r))),window.addEventListener("beforeunload",c),window.b2b.initializationEnvironment.isInitListener=()=>{c(),setTimeout((()=>window.b2b.initializationEnvironment.clickedLinkElement?.click()),0)})}}}));
