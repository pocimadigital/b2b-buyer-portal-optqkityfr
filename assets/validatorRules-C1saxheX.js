import{bv as m}from"./react-setup-BZAh8p9K.js";const d=(t,l)=>(e,r)=>{let a="";return t.forEach(s=>{s==="email"&&e&&!m.email.test(e)?a=r("global.validatorRules.email"):e.length>=200&&(a=r("global.emailValidate.emailLength")),s==="phone"&&e&&!m.phone.test(e)&&(a=r("global.validatorRules.phoneNumber")),s==="number"&&e&&!m.number.test(e)&&(a=r("global.validatorRules.number")),s==="max"&&(l!=null&&l.max)&&+l.max<+e&&(a=r("global.validatorRules.max",{max:l.max})),s==="password"&&e&&!m.password.test(e)&&(a=r("global.validatorRules.passwords"))}),a||void 0};export{d as v};
