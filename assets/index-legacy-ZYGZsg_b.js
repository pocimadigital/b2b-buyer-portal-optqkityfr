System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./form-legacy-CAo5v63e.js","./lang-legacy-CyIWukAl.js","./lodashEs-legacy-Da1qF4L1.js","./react-setup-legacy-CjrUzkdu.js","./B3CustomForm-legacy-DB2jwHR3.js","../index-legacy.nzAN2voK.js","./users-legacy-DND0lmV6.js","./config-legacy-9tSTg0C3.js","./b3Logger-legacy-C5y5ZQF8.js","./validatorRules-legacy-Cn1K7oN3.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js"],(function(e,a){"use strict";var n,t,o,r,s,l,i,m,c,d,u,f,p,g,y,b,h,F,w,S,N,j,x,P,v,E,M,B,I,_,C;return{setters:[e=>{n=e.j,t=e.B},e=>{o=e.r},e=>{r=e.u},e=>{s=e.u},e=>{l=e.t},e=>{i=e.B,m=e.$,c=e.a0,d=e.a1,u=e.j,f=e.u,p=e.p,g=e.C,y=e.a,b=e.a2,h=e.W,F=e.k,w=e.a3,S=e.a4,N=e.a5,j=e.N,x=e.a6},e=>{P=e.B},null,e=>{v=e.c,E=e.a},e=>{M=e.d,B=e.g},e=>{I=e.b},e=>{_=e.v},e=>{C=e.u},null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{control:e,handleSubmit:a,getValues:i,formState:{errors:m},setValue:d,setError:_}=r({mode:"onSubmit"}),[L,k]=u("sf-isFinshUpdate",!1,sessionStorage),$=f(p),W=f((({company:e})=>e.companyInfo.id)),X=f((({company:e})=>e.customer)),Y=f((({company:e})=>e.customer.role)),H=f((({b2bFeatures:e})=>e.masqueradeCompany.id)),K=f((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),{state:{portalStyle:{backgroundColor:Z="#FEF9F5"}}}=o.useContext(g),G=s(),[Q]=y(),ee=C(),[ae,ne]=o.useState([]),[te,oe]=o.useState([]),[re,se]=o.useState([]),[le,ie]=o.useState(!1),[me,ce]=o.useState({}),[de,ue]=o.useState(!1),[fe,pe]=o.useState(""),ge=3===Y&&K?H:+W,ye=!$||3===Y&&!K;return o.useEffect((()=>{(async()=>{try{ie(!0);const e=await S(ye?1:2),a=ye?T:O,n=ye?{}:{companyId:ge},t=ye?"customerAccountSettings":"accountSettings",{[t]:o}=await a(n),r=B(e.accountFormFields||[]),{accountB2BFormFields:s,passwordModified:l}=V(12,G),i=(r?.contactInformation||[]).filter((e=>"field_email_marketing_newsletter"!==e.fieldId)),m=JSON.parse(JSON.stringify(i));m.forEach((e=>{const a=e;"field_first_name"===a.fieldId&&(a.label=G("accountSettings.form.firstName")),"field_last_name"===a.fieldId&&(a.label=G("accountSettings.form.lastName")),"field_email"===a.fieldId&&(a.label=G("accountSettings.form.email")),"field_phone_number"===a.fieldId&&(a.label=G("accountSettings.form.phoneNumber"))}));const{additionalInformation:c=[]}=r,d=ye?U(o,m,c):J(o,m,s,c),u=JSON.parse(JSON.stringify(l)).map((e=>(e.label=G(e.idLang),e))),f=[...d,...u],p=f.find((e=>"role"===e.name));p?.fieldType&&(p.fieldType="text"),ne(f),pe(o.email),ce(o),oe(i),se(c)}finally{L&&(N.success(G("accountSettings.notification.detailsUpdated")),k(!1)),ie(!1),ue(!0)}})()}),[]),n.jsx(b,{isSpinning:le,background:Z,children:n.jsxs(t,{sx:{width:Q?"100%":"35%",minHeight:Q?"800px":"300px","& input, & .MuiFormControl-root .MuiTextField-root, & .MuiSelect-select.MuiSelect-, & .MuiTextField-root .MuiInputBase-multiline":{bgcolor:h("#FFFFFF",.87),borderRadius:"6px",borderBottomLeftRadius:"1",borderBottomRightRadius:"1"},"& .MuiButtonBase-root.MuiCheckbox-root:not(.Mui-checked), & .MuiRadio-root:not(.Mui-checked)":{color:h(F(Z),.6)},"& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label, & .MuiFormControl-root .MuiFormLabel-root:not(.Mui-focused)":{color:h(F(Z),.87)},"& .MuiInputLabel-root.MuiInputLabel-formControl:not(.Mui-focused)":{color:h(F("#FFFFFF"),.6)}},children:[n.jsx(P,{formFields:ae,errors:m,control:e,getValues:i,setValue:d}),n.jsx(w,{sx:{mt:"28px",mb:Q?"20px":"0",width:"100%",visibility:de?"visible":"hidden"},onClick:()=>{a((async e=>{ie(!0);try{const a=await(async e=>{if(X.emailAddress===l(e))return!0;const a={email:e,channelId:x},{isValid:n}=ye?await v(a):await E(a);return n||_("email",{type:"custom",message:G("accountSettings.notification.emailExists")}),n})(e.email),n=(e=>!(e.email!==X.emailAddress&&!e.currentPassword&&(N.error(G("accountSettings.notification.updateEmailPassword")),1)))(e),t=(e=>e.password===e.confirmPassword||(_("confirmPassword",{type:"manual",message:G("global.registerComplete.passwordMatchPrompt")}),_("password",{type:"manual",message:G("global.registerComplete.passwordMatchPrompt")}),!1))(e);let o=[];ye||(o=(e=>{let a=[];const n=ae.filter((e=>e.custom&&1===e.groupId));return n.length>0&&(a=n.map((a=>({fieldName:M(a?.name||""),fieldValue:e[a.name]})))),a})(e));const r=ye?D:z;if(a&&n&&t){const{isEdit:a,param:n}=r(e,me,te,re);if(!a)return void N.success(G("accountSettings.notification.noEdits"));{ye||(n.companyId=ge,n.extraFields=o);const e=ye?R:q;if(n.newPassword&&n.currentPassword||fe!==n.email){const e=await function(e,a){return new Promise(((n,t)=>{const{email:o,confirmPassword:r,newPassword:s,currentPassword:l}=e,i=a.filter((e=>e.required&&e.custom))||[],m=new URLSearchParams,d=A()||"";m.append("FormField[1][1]",o),m.append("FormField[1][24]",l),m.append("FormField[1][2]",s),m.append("FormField[1][3]",r),m.append("authenticity_token",d),i.length&&i.forEach((a=>{if(a.name?.includes("_")){const n=a.name?.split("_")[1],{formFields:t}=e,o=t.find((e=>e.name===a.bcLabel)).value;if("date"===a.type){const e=o.split("-");if(!o&&3!==e.length)return;const[a,t,r]=e;m.append(`FormFieldYear[1][${n}]`,a),m.append(`FormFieldMonth[1][${n}]`,t),m.append(`FormFieldDay[1][${n}]`,r)}else m.append(`FormField[1][${n}]`,o)}})),function(e){return fetch(`${c}/account.php?action=update_account`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e,mode:"cors",credentials:"include"}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.text()})).then((e=>e))}(m.toString()).then((e=>{const a=e.includes("alertBox--error");n(!a)})).catch((e=>{I.error("Error:",e),t()}))}))}(n,re);if(!e)return void N.error(G("accountSettings.notification.passwordNotMatch"))}const a={...n,currentPassword:n.currentPassword};""===n.newPassword&&""===n.confirmPassword&&(delete a.newPassword,delete a.confirmPassword),await e(a)}e.password&&e.currentPassword||X.emailAddress!==l(e.email)?ee("/login?loginFlag=3"):(j.clear(),k(!0),window.location.reload())}}finally{ie(!1)}}))()},variant:"contained",children:G("accountSettings.button.saveUpdates")})]})})}));const a=e=>`mutation{\n  updateAccountSettings (\n    updateData: ${m(e)}\n  ){\n    result {\n      email\n    },\n  }\n}`,L=e=>`mutation{\n  updateCustomerAccountSettings (\n    updateData: ${m(e)}\n  ){\n    result {\n      email\n    },\n  }\n}`,k=e=>`{\n  accountSettings (\n    companyId: ${e.companyId}\n  ){\n    firstName,\n    lastName,\n    company,\n    phoneNumber,\n    email,\n    formFields {\n      name,\n      value\n    },\n    extraFields {\n      fieldName,\n      fieldValue,\n    }\n    role,\n    companyRoleId,\n    companyRoleName,\n  }\n}`,q=e=>i.graphqlB2B({query:a(e)}),R=e=>i.graphqlB2B({query:L(e)}),O=e=>i.graphqlB2B({query:k(e)}),T=()=>i.graphqlB2B({query:"{\n  customerAccountSettings {\n    firstName,\n    lastName,\n    company,\n    phoneNumber,\n    email,\n    formFields {\n      name,\n      value\n    },\n  }\n}"}),V=(e,a)=>({accountB2BFormFields:[{name:"company",label:a("accountSettings.form.company"),required:!1,default:"",fieldType:"text",xs:e,variant:"outlined",size:"small"},{name:"role",label:a("accountSettings.form.role"),required:!1,default:"",fieldType:"dropdown",options:[{label:a("accountSettings.form.admin"),value:0},{label:a("accountSettings.form.seniorBuyer"),value:1},{label:a("accountSettings.form.juniorBuyer"),value:2},{label:a("accountSettings.form.superAdmin"),value:3}],xs:e,variant:"outlined",size:"small"}],passwordModified:[{name:"currentPassword",label:"Current Password",idLang:"accountSettings.form.currentPassword"},{name:"password",label:"Password",idLang:"accountSettings.form.password"},{name:"confirmPassword",label:"Confirm Password",idLang:"accountSettings.form.confirmPassword"}].map((a=>({name:a.name,label:a.label,required:!1,default:"",fieldType:"password",xs:e,variant:"outlined",size:"small",idLang:a.idLang})))}),A=()=>{const e=d.get("XSRF-TOKEN");if(e)return decodeURIComponent(e)},$=_(["email"]),J=(e,a,n,t)=>{const o=e?.extraFields||[];return a.forEach((a=>{const n=a;"first_name"===M(a?.name||"")&&(n.default=e.firstName),"last_name"===M(a?.name||"")&&(n.default=e.lastName),"phone"===M(a?.name||"")&&(n.default=e.phoneNumber),"email"===M(a?.name||"")&&(n.default=e.email,n.validate=$)})),o.length>0&&o.forEach((e=>{const n=e,t=a.find((e=>M(e?.name||"")===n.fieldName));t&&(t.default=n.fieldValue)})),n.forEach((a=>{const n=a;"role"===a.name?(n.default=e.companyRoleName,n.disabled=!0):"company"===a.name&&(n.default=e.company,n.disabled=!0)})),t.forEach((a=>{const n=(e?.formFields||[]).find((e=>e.name===a.bcLabel));n&&(a.default=n.value)})),[...a,...n,...t]},U=(e,a,n)=>(a.forEach((a=>{const n=a;"first_name"===M(a?.name||"")&&(n.default=e.firstName),"last_name"===M(a?.name||"")&&(n.default=e.lastName),"phone"===M(a?.name||"")&&(n.default=e.phoneNumber),"email"===M(a?.name||"")&&(n.default=e.email,n.validate=$),"company"===M(a?.name||"")&&(n.default=e.company)})),n.forEach((a=>{const n=(e?.formFields||[]).find((e=>e.name===a.bcLabel));n&&(a.default=n.value)})),[...a,...n]),z=(e,a,n,t)=>{const o=a?.extraFields||[],r={formFields:[]};let s=!0,l=!0,i=!1;return Object.keys(e).forEach((m=>{n.forEach((n=>{if(m===n.name&&(l=!1,"first_name"===M(n.name)&&(a.firstName!==e[n.name]&&(s=!1),r.firstName=e[n.name]),"last_name"===M(n.name)&&(a.lastName!==e[n.name]&&(s=!1),r.lastName=e[n.name]),"phone"===M(n.name)&&(a.phoneNumber!==e[n.name]&&(s=!1),r.phoneNumber=e[n.name]),"email"===M(n.name)&&(a.email!==e[n.name]&&(s=!1),r.email=e[n.name]),n.custom)){const a=o.find((e=>e.fieldName===M(n?.name||"")));a?.fieldValue!==e[n.name]&&(i=!0)}})),i&&(s=!1),l&&t.forEach((n=>{if(n.fieldId===m&&r?.formFields){const{name:t}=n;r.formFields.push({name:n?.bcLabel||"",value:e[m]}),l=!1;const o=(a?.formFields||[]).find((e=>e.name===n.bcLabel));o&&JSON.stringify(o.value)!==JSON.stringify(e[m])&&(s=!1),!a?.formFields?.length&&t&&e[t]&&(s=!1)}})),l&&("password"===m?(r.newPassword=e[m],e[m]&&(s=!1)):r[m]=e[m]),l=!0})),delete r.company,delete r.role,{isEdit:!s,param:r}},D=(e,a,n,t)=>{const o={formFields:[]};let r=!0,s=!0;return Object.keys(e).forEach((l=>{n.forEach((n=>{l===n.name&&(s=!1,"first_name"===M(n.name)&&(a.firstName!==e[n.name]&&(r=!1),o.firstName=e[n.name]),"last_name"===M(n.name)&&(a.lastName!==e[n.name]&&(r=!1),o.lastName=e[n.name]),"phone"===M(n.name)&&(a.phoneNumber!==e[n.name]&&(r=!1),o.phoneNumber=e[n.name]),"email"===M(n.name)&&(a.email!==e[n.name]&&(r=!1),o.email=e[n.name]),"company"===M(n.name)&&(a.company!==e[n.name]&&(r=!1),o.company=e[n.name]))})),s&&t.forEach((n=>{if(n.fieldId===l&&o?.formFields){o.formFields.push({name:n?.bcLabel||"",value:e[l]}),s=!1;const t=(a?.formFields||[]).find((e=>e.name===n.bcLabel));t&&JSON.stringify(t.value)!==JSON.stringify(e[l])&&(r=!1)}})),s&&("password"===l?(o.newPassword=e[l],e[l]&&(r=!1)):o[l]=e[l]),s=!0})),{isEdit:!r,param:o}}}}}));
