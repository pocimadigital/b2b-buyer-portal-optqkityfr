import{at as c,ag as o,bw as m}from"./react-setup-BE8w6ZrM.js";import{b as g}from"./b3Logger-CMQiGC3f.js";const n=["customItems","digitalItems","giftCertificates","physicalItems"],f=async()=>{let e=0;try{const t=await c();if(t.data.site.cart){const s=t.data.site.cart.lineItems;n.forEach(a=>{const r=s[a];r&&r.length>0&&(a==="giftCertificates"?e+=r.length:r.forEach(i=>{e+=+i.quantity}))})}}catch(t){g.error(t)}o.dispatch(m(e))},u=f;export{u as b};
