System.register(["./react-setup-legacy-DZzlZWvn.js","./b3Logger-legacy-C5y5ZQF8.js","../index-legacy.Oph0CwYp.js","./validatorRules-legacy-Cn1NdBMd.js"],(function(e,t){"use strict";var a,r,l;return{setters:[e=>{a=e.a0},e=>{r=e.b},null,e=>{l=e.v}],execute:function(){e("g",(e=>[{name:"emailAddress",label:e("global.loginText.emailAddress"),required:!0,default:"",fieldType:"text",xs:12,size:"small",variant:"outlined",validate:l(["email"])}])),e("a",((e,t)=>[{name:"emailAddress",label:e("global.loginText.emailAddress"),required:!0,default:"",fieldType:"text",xs:12,variant:"outlined",validate:l(["email"]),isAutoComplete:!0},{name:"password",label:e("login.loginText.password"),required:!0,default:"",fieldType:"password",xs:12,variant:"outlined",isEnterTrigger:!0,handleEnterClick:t,isAutoComplete:!0}])),e("l",(e=>{const t={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e.emailAddress,password:e.password})};return fetch(`${a}/internalapi/v1/checkout/customer`,t).then((e=>e.text())).catch((e=>r.error("error",e)))})),e("s",(e=>{const t=new URLSearchParams;return t.append("email",e),fetch(`${a}/login.php?action=send_password_email`,{method:"POST",body:t,redirect:"follow"}).then((e=>e.text())).catch((e=>r.error("error",e)))}))}}}));
