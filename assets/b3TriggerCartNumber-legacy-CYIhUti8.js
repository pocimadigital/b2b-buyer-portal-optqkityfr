System.register(["./react-setup-legacy-BoEYl_s9.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(t,e){"use strict";var s,a,c,i;return{setters:[t=>{s=t.at,a=t.ag,c=t.bw},t=>{i=t.b}],execute:function(){const e=["customItems","digitalItems","giftCertificates","physicalItems"];t("b",(async()=>{let t=0;try{const a=await s();if(a.data.site.cart){const s=a.data.site.cart.lineItems;e.forEach((e=>{const a=s[e];a&&a.length>0&&("giftCertificates"===e?t+=a.length:a.forEach((e=>{t+=+e.quantity})))}))}}catch(r){i.error(r)}a.dispatch(c(t))}))}}}));
