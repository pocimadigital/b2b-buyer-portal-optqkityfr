import{a0 as o}from"./react-setup-DNiVtwmK.js";import{b as s}from"./b3Logger-CMQiGC3f.js";import"../index._cUIRZek.js";import{v as i}from"./validatorRules-DX8sXHKh.js";const p=e=>[{name:"emailAddress",label:e("global.loginText.emailAddress"),required:!0,default:"",fieldType:"text",xs:12,size:"small",variant:"outlined",validate:i(["email"])}],u=(e,t)=>[{name:"emailAddress",label:e("global.loginText.emailAddress"),required:!0,default:"",fieldType:"text",xs:12,variant:"outlined",validate:i(["email"]),isAutoComplete:!0},{name:"password",label:e("login.loginText.password"),required:!0,default:"",fieldType:"password",xs:12,variant:"outlined",isEnterTrigger:!0,handleEnterClick:t,isAutoComplete:!0}],c=e=>{const t={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e.emailAddress,password:e.password})};return fetch("".concat(o,"/internalapi/v1/checkout/customer"),t).then(r=>r.text()).catch(r=>s.error("error",r))},g=e=>{const t=new URLSearchParams;t.append("email",e);const r={method:"POST",body:t,redirect:"follow"};return fetch("".concat(o,"/login.php?action=send_password_email"),r).then(a=>a.text()).catch(a=>s.error("error",a))};export{u as a,p as g,c as l,g as s};
