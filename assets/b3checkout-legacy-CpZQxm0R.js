System.register(["./react-setup-legacy-B6eAX8Vb.js"],(function(t,e){"use strict";var r;return{setters:[t=>{r=t.B}],execute:function(){const e=(t,e)=>{e?window.location.replace(t):window.location.href=t};t("a",(async(t,a,n)=>{try{const a=await(o={cartData:{cartId:t}},r.graphqlB2B({query:"mutation checkoutLogin($cartData: CheckoutLoginType!) {\n    checkoutLogin(\n        cartData: $cartData\n    ) {\n        result {\n            redirectUrl\n        }\n    }\n}",variables:o})),{checkoutLogin:{result:c}}=a;e(c.redirectUrl,n)}catch(c){e(a,n)}var o})),t("s",((t,e)=>{sessionStorage.setItem("isNewStorefront",JSON.stringify(!0)),sessionStorage.setItem("quoteCheckoutId",t),sessionStorage.setItem("quoteDate",e?.toString())}))}}}));
