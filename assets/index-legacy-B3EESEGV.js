System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./B3Card-legacy-BZbweeAB.js","./react-setup-legacy-CjrUzkdu.js","./b3Logger-legacy-C5y5ZQF8.js","../index-legacy.nzAN2voK.js","./b3Login-legacy-D28cq87_.js","./login-legacy-BfUVv0uQ.js","./config-legacy-BsBBHKc0.js","./config-legacy-9tSTg0C3.js","./eStyled-legacy-C5ZTaXoz.js","./form-legacy-CAo5v63e.js","./B3CustomForm-legacy-DB2jwHR3.js","./RegisteredFinish-legacy-Wcr0w6JV.js","./recaptcha-legacy-Iq5JNM2l.js","./users-legacy-DND0lmV6.js","./lodashEs-legacy-Da1qF4L1.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./validatorRules-legacy-Cn1K7oN3.js"],(function(e,t){"use strict";var a,o,n,i,r,s,l,c,d,u,m,f,p,g,h,y,x,b,j,I,w,F,S,_,C,v,M,k,B,T,L,A,E,N,R,V,P,z,H,W,O,q,$,D,G,K,U,X,Y,Z,J,Q,ee,te,ae,oe,ne,ie,re,se,le,ce,de,ue,me;return{setters:[e=>{a=e.j,o=e.B,n=e.a0,i=e.T,r=e.v,s=e.ai,l=e.w,c=e.aj,d=e.y,u=e.ak,m=e.al,f=e.am,p=e.I},e=>{g=e.r},e=>{h=e.u},e=>{y=e.B},e=>{x=e.bq,b=e.G,j=e.C,I=e.k,w=e.a6,F=e.a8,S=e.br,_=e.bm,C=e.u,v=e.bs,M=e.a,k=e.W,B=e.N,T=e.bt,L=e.a2,A=e.a4,E=e.ac,N=e.x},e=>{R=e.b},null,e=>{V=e.l},e=>{P=e.c},e=>{z=e.l},e=>{H=e.d,W=e.t,O=e.B,q=e.e,$=e.s,D=e.b,G=e.g,K=e.c},e=>{U=e.n},e=>{X=e.u},e=>{Y=e.B},e=>{Z=e.T,J=e.R,Q=e.c,ee=e.s,te=e.I,ae=e.v,oe=e.a,ne=e.b,ie=e.d,re=e.e},e=>{se=e.C,le=e.g},e=>{ce=e.a,de=e.c},e=>{ue=e.i},e=>{me=e.u},null,null,null,null,null,null,null,null,null],execute:function(){function t(e){const t=h(),{handleBack:r,activeStep:s,handleNext:l}=e,[c,d]=g.useState([]),[u,m]=g.useState(""),[f,p]=g.useState(""),[y,C]=g.useState(""),[v,M]=g.useState(!1),[k,B]=g.useState(""),[T,L]=g.useState(!1);g.useEffect((()=>{(async()=>{try{const e=await le();e&&(M(e.isEnabledOnStorefront),B(e.siteKey))}catch(e){R.error(e)}})()}),[]),g.useEffect((()=>{y&&L(!1)}),[y]);const{control:A,handleSubmit:E,setError:N,formState:{errors:V}}=X({mode:"all"}),{state:P,dispatch:z}=g.useContext(x),{state:{blockPendingAccountOrderCreation:O}}=g.useContext(b),{state:{portalStyle:{backgroundColor:q="#FEF9F5"}}}=g.useContext(j),$=I(q),{contactInformation:D,bcContactInformation:G,passwordInformation:K=[],bcPasswordInformation:U=[],accountType:te,additionalInformation:ae,bcAdditionalInformation:oe,addressBasicFields:ne=[],bcAddressBasicFields:ie=[],companyInformation:re=[],emailMarketingNewsletter:ce}=P,de="1"===te?D:G,ue="1"===te?K:U,me="1"===te?ae:oe,fe="1"===te?ne:ie;g.useEffect((()=>{if(te){if(de&&de.length){const e=de.find((e=>"email"===e.name))||{};p(e?.default||"")}d(ue)}}),[D,G,te,de,ue]);const pe=e=>{const t={};if(t.authentication={force_password_reset:!1,new_password:e.password},t.accepts_product_review_abandoned_cart_emails=ce,de&&(de.forEach((e=>{const a=H(e.name);"accepts_marketing_emails"===a?t.accepts_product_review_abandoned_cart_emails=!!e?.default?.length:e.custom||(t[a]=e?.default||"")})),t.form_fields=[],me&&me.length&&me.forEach((e=>{t.form_fields.push({name:e.bcLabel,value:e.default})}))),t.addresses=[],t.origin_channel_id=w,t.channel_ids=[w],"2"===te){const e={},a=fe.filter((e=>!e.custom)),o=fe.filter((e=>e.custom));a&&(t.addresses={},a.forEach((t=>{"country"===t.name?e.country_code=t.default:"state"===t.name?e.state_or_province=t.default:"postalCode"===t.name?e.postal_code=t.default:"firstName"===t.name?e.first_name=t.default:"lastName"===t.name?e.last_name=t.default:e[t.name]=t.default}))),e.form_fields=[],o&&o.length&&o.forEach((t=>{e.form_fields.push({name:t.bcLabel,value:t.default})})),t.addresses=[e],t.trigger_account_created_notification=!0}const a={storeHash:F,...t};return Q(a)};return a.jsxs(o,{sx:{pl:1,pr:1,mt:2,width:"100%","& h4":{color:$},"& input, & .MuiFormControl-root .MuiTextField-root":{borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",padding:"10px !important"}},children:[u&&a.jsx(n,{severity:"error",children:a.jsx(Z,{children:u})}),a.jsxs(o,{children:[c&&a.jsxs(a.Fragment,{children:[f.length>0&&a.jsx(o,{sx:{fontSize:"16px",fontWeight:400,color:"#000000",marginBottom:"10px",marginTop:"-12px",wordWrap:"break-word",textAlign:"center"},children:`Ahora por favor crea una contraseña para tu cuenta: ${f}`}),a.jsx(Y,{formFields:c,errors:V,control:A})]}),T?a.jsx(i,{variant:"body1",sx:{display:"flex",alignSelf:"flex-start",marginLeft:"8px",marginTop:"2px",fontSize:"13px"},children:t("login.loginText.missingCaptcha")}):"",v?a.jsx(o,{sx:{display:"flex",justifyContent:"center",marginTop:"20px"},children:a.jsx(se,{siteKey:k,size:"normal",handleGetKey:e=>C(e)})}):""]}),a.jsx(J,{handleBack:r,activeStep:s,handleNext:e=>{E((async e=>{if(e.password!==e.confirmPassword)return N("confirmPassword",{type:"manual",message:t("global.registerComplete.passwordMatchPrompt")}),void N("password",{type:"manual",message:t("global.registerComplete.passwordMatchPrompt")});if(!v||y){if(!T)try{z({type:"loading",payload:{isLoading:!0}});let a=!0;if("2"===te)await pe(e);else{const o=re.filter((e=>"files"===e.fieldType)),n=await(async e=>{let a=[];if(e.length){e.forEach((e=>{a=e.default}));try{return(await Promise.all(a.map((e=>_({file:e,type:"companyAttachedFile"}))))).reduce(((e,a)=>{let o=e;if(200!==a.code)throw a.data.errMsg||a.message||t("intl.global.fileUpload.fileUploadFailure");{const t={...a.data};t.fileSize=t.fileSize?`${t.fileSize}`:"",o=[...e,t]}return o}),[])}catch(o){throw R.error(o),o}}})(o||[]),i=await pe(e),{data:r}=i,s=await(async(e,t,a)=>{try{const e={};e.customerId=t||"",e.storeHash=F;const o=(de||[]).filter((e=>!!e.custom));if(o.length){const t=[];o.forEach((e=>{const a={};a.fieldName=H(e.name),a.fieldValue=e?.default||"",t.push(a)})),e.userExtraFields=t}const n=re.filter((e=>!e.custom&&"files"!==e.fieldType)),i=re.filter((e=>!!e.custom));if(n.length&&n.forEach((t=>{e[W(H(t.name))]=t?.default||""})),i.length){const t=[];i.forEach((e=>{const a={};a.fieldName=H(e.name),a.fieldValue=e?.default||"",t.push(a)})),e.extraFields=t}const r=fe.filter((e=>!e.custom))||[],s=fe.filter((e=>!!e.custom))||[];if(r.length&&r.forEach((t=>{const a=H(t.name);"address1"===a&&(e.addressLine1=t.default),"address2"===a&&(e.addressLine2=t.default),e[a]=t.default})),s.length){const t=[];s.forEach((e=>{const a={};a.fieldName=H(e.name),a.fieldValue=e?.default||"",t.push(a)})),e.addressExtraFields=t}return e.fileList=a,e.channelId=w,await S(e)}catch(o){R.error(o)}})(0,r.id,n);a=1==+(s?.companyCreate?.company?.companyStatus||"")}z({type:"finishInfo",payload:{submitSuccess:!0,isAutoApproval:a,blockPendingAccountOrderCreation:O}}),(e=>{const t=K.map((t=>("1"===te&&(t.default=e[t.name]||t.default),t))),a=U.map((t=>("2"===te&&(t.default=e[t.name]||t.default),t)));z({type:"all",payload:{passwordInformation:t,bcPasswordInformation:a}})})(e),await(async()=>{if(de&&de.length>0){const t=de.find((e=>"field_email_marketing_newsletter"===e.fieldId&&"checkbox"===e.fieldType)),a=de.find((e=>"field_first_name"===e.fieldId))||{},o=de.find((e=>"field_last_name"===e.fieldId))||{};if(t?.isChecked&&(t?.default||[]).length>0)try{await ee({storeHash:F,email:f,first_name:a.default,last_name:o.default,channel_id:w||1})}catch(e){m(e?.message||e)}}})(),l()}catch(a){m(a?.message||a)}finally{z({type:"loading",payload:{isLoading:!1}})}}else L(!0)}))(e)},email:f})]})}function fe(e){const{handleBack:t,handleNext:i,activeStep:d}=e,{state:u,dispatch:m}=g.useContext(x),f=C(v),{state:{accountLoginRegistration:p,portalStyle:{backgroundColor:y="#FEF9F5"}}}=g.useContext(j),b=I(y),F=h(),[S]=M(),[_,B]=g.useState(""),{contactInformation:T,accountType:L,additionalInformation:A,bcContactInformation:E,bcAdditionalInformation:N}=u,{control:V,handleSubmit:P,getValues:z,formState:{errors:H},setError:W,setValue:$}=X({mode:"onSubmit"}),D="1"===L?"additionalInformation":"bcAdditionalInformation",G="1"===L?A||[]:N||[],K=T?.map((e=>{const t=e;return"field_email"===e.fieldId&&"1"===L&&(t.isTip=!1),e})),U="1"===L?K:E||[],Q="1"===L?"contactInformation":"bcContactInformationFields",ee=G.length?G[0]?.groupName:"",oe=(e=!1)=>{m({type:"loading",payload:{isLoading:e}})},ne=T?.find((e=>"field_email"===e.fieldId))?.name||"email";return a.jsxs(o,{sx:{pl:1,pr:1,mt:2,width:"100%"},children:[_&&a.jsx(n,{severity:"error",children:a.jsx(Z,{children:_})}),a.jsx(o,{component:"div",sx:{color:"#000000",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:400,lineHeight:"normal",fontSize:S?"0.875rem":"1rem",textAlign:S?"center":"center ",padding:"0px 15px"},dangerouslySetInnerHTML:{__html:F("register.step.account.customText")}}),a.jsx(r,{sx:{"& h4":{color:b}},children:a.jsxs(s,{"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:L,onChange:e=>{m({type:"accountType",payload:{accountType:e.target.value}})},sx:{display:"none","& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label":{color:k(b,.87)},"& .MuiButtonBase-root.MuiRadio-root.MuiRadio-colorPrimary:not(.Mui-checked)":{color:k(b,.6)}},children:[p.b2b&&a.jsx(l,{value:"1",control:a.jsx(c,{}),label:F("register.registeredAccount.businessAccount")}),p.b2c&&a.jsx(l,{value:"2",control:a.jsx(c,{}),label:F("register.registeredAccount.personalAccount")})]})}),a.jsx(o,{sx:{"& h4":{color:b},"& input, & .MuiFormControl-root .MuiTextField-root, & .MuiTextField-root .MuiInputBase-multiline":{borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",padding:"10px !important"},"& .MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary:not(.Mui-checked)":{color:k(b,.6)},"& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label":{color:k(b,.87)}},children:a.jsx(Y,{formFields:U,errors:H,control:V,getValues:z,setValue:$})}),a.jsx(o,{}),G&&G.length?a.jsxs(o,{sx:{"& h4":{color:b},"& .MuiFormControlLabel-label, & .MuiFormControl-root .MuiFormLabel-root:not(.Mui-focused)":{color:k(b,.87)},"& .MuiRadio-root:not(.Mui-checked)":{color:k(b,.6)}},children:[a.jsx(te,{children:ee}),a.jsx(Y,{formFields:G,errors:H,control:V,getValues:z,setValue:$})]}):"",a.jsx(J,{activeStep:d,handleBack:t,handleNext:async e=>{P((async e=>{if(!(await(async e=>{const t="1"===L;try{oe(!0);const{isValid:a,userType:o,userInfo:{companyName:n=""}={}}=t?await ce({email:e,channelId:w}):await de({email:e,channelId:w});return a?B(""):(B(F(q[o],{companyName:n||"",email:e})),W(ne,{type:"custom",message:""}),f?.body.scrollIntoView(!0)),a}catch(a){return!1}finally{oe(!1)}})(e[ne])))return;const t=U.map((t=>{const a=t;return a.default=e[t.name]||t.default,"field_email_marketing_newsletter"===t.fieldId&&"checkbox"===t.fieldType&&(a.isChecked=e[t.name].length>0),t}));try{if(oe(!0),"1"===L){const a=t.filter((e=>!!e.custom)),o=a.map((t=>({fieldName:O.decode(t.name),fieldValue:e[t.name]||t.default})));if(o.length>0){const e=await ae({extraFields:o});if(200!==e.code){const t=e.data?.errMsg||e.message||"",o=t.split(":");if(o.length>=2){const e=a.find((e=>O.decode(e.name)===o[0]));if(e)return W(e.name,{type:"manual",message:o[1]}),void oe(!1)}return B(t),void oe(!1)}}B("")}}catch(o){R.error(o)}finally{oe(!1)}let a=[];G&&(a=G.map((t=>(t.default=e[t.name]||t.default,t)))),m({type:"all",payload:{[D]:[...a],[Q]:[...t]}}),i()}))(e)}})]})}function pe(e){const t=h(),[i]=M(),{handleBack:r,handleNext:s,activeStep:l}=e,{state:c,dispatch:d}=g.useContext(x),u=c.contactInformation||[],m=c.companyInformation||[],f=`${u.find((e=>"field_first_name"===e.fieldId))?.default||""} ${u.find((e=>"field_last_name"===e.fieldId))?.default||""}`.trim(),p=m.find((e=>"field_company_name"===e.fieldId));p&&(p.default=f);const y=u.find((e=>"field_email"===e.fieldId))?.default||"",b=m.find((e=>"field_company_email"===e.fieldId));b&&(b.default=y);const w=u.find((e=>"field_phone_number"===e.fieldId))?.default||"",F=m.find((e=>"field_company_phone_number"===e.fieldId));F&&(F.default=w);const S=u.find((e=>"Cédula profesional"===e.label))?.default||"",_=m.find((e=>"Cédula profesional"===e.label));_&&(_.default=S);const{state:{portalStyle:{backgroundColor:C="#FEF9F5"}}}=g.useContext(j),v=I(C),[k,B]=g.useState(""),{accountType:T="1",companyInformation:L=[],companyAttachment:A=[],addressBasicFields:E=[],bcAddressBasicFields:N=[],countryList:R=[]}=c,{control:V,handleSubmit:P,getValues:z,formState:{errors:H},setValue:W,watch:q,setError:$}=X({mode:"all"}),D="1"===T?L[0]?.groupName:"",G="1"===T?"addressBasicFields":"bcAddressBasicFields",K="1"===T?E:N,U=K[0]?.groupName||"",Q=g.useCallback(((e,t="")=>{const a=R.find((t=>t.countryCode===e||t.countryName===e))?.states||[],o=K.find((e=>"state"===e.name));o&&(a.length>0?(o.fieldType="dropdown",o.options=a):(o.fieldType="text",o.options=[])),W("state",t&&e&&(a.find((e=>e.stateName===t))||0===a.length)?t:""),d({type:"stateList",payload:{stateList:a,addressBasicFields:E,bcAddressBasicFields:N,[G]:[...K]}})}),[E,K,G,N,R]);g.useEffect((()=>{const e=z("country"),t=z("state");Q(e,t)}),[]),g.useEffect((()=>{const e=q(((e,{name:t,type:a})=>{const{country:o,state:n}=e;"country"===t&&"change"===a&&Q(o,n)}));return()=>e.unsubscribe()}),[R,Q]);const ee=(e=!1)=>{d({type:"loading",payload:{isLoading:e}})},ae=(e,t)=>e.map((e=>(e.default=t[e.name]||e.default,e))),ne=()=>{const e=[...L,...A,...K].reduce(((e,t)=>(e[t.name]=z(t.name)||t.default,e)),{}),t=ae(L,e),a=ae(A,e),o=ae(K,e);d({type:"all",payload:{companyInformation:[...t],companyAttachment:[...a],[G]:[...o]}})};return a.jsxs(o,{sx:{pl:1,pr:1,mt:2,width:"100%","& h4":{color:v},"& input, & .MuiFormControl-root .MuiTextField-root, & .MuiDropzoneArea-textContainer, & .MuiSelect-select.MuiSelect-outlined, & .MuiTextField-root .MuiInputBase-multiline":{borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",padding:"10px !important"}},children:[k&&a.jsx(n,{severity:"error",children:a.jsx(Z,{children:k})}),a.jsx(o,{component:"div",sx:{color:"#000000",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:400,lineHeight:"normal",fontSize:i?"0.875rem":"1rem",textAlign:i?"center":"center ",padding:"0px 15px"},dangerouslySetInnerHTML:{__html:t("register.step.details.customText")}}),"1"===T?a.jsxs(o,{sx:{display:"none !important"},children:[a.jsx(te,{children:D}),a.jsx(Y,{formFields:[...L],errors:H,control:V,getValues:z,setValue:W,setError:$})]}):null,a.jsxs(o,{children:[a.jsx(te,{children:U}),a.jsx(Y,{formFields:K,errors:H,control:V,getValues:z,setValue:W})]}),a.jsx(J,{handleBack:()=>{ne(),r()},handleNext:e=>{const a=(()=>{if("1"===T){const e=z(),a=L.find((e=>"field_attachments"===e.fieldId));if(!ue(a)&&a.required&&0===e[a.name].length)return $(a.name,{type:"required",message:t("global.validate.required",{label:a.label??""})}),ee(!1),!0}return!1})();P((async e=>{if(!a){ee(!0);try{if("1"===T){const t=L.filter((e=>!!e.custom)),a=t.map((t=>({fieldName:O.decode(t.name),fieldValue:e[t.name]||t.default}))),o=await oe({extraFields:a});if(200!==o.code){const e=o.data?.errMsg||o.message||"",a=e.split(":");if(a.length>=2){const e=t.find((e=>O.decode(e.name)===a[0]));if(e)return $(e.name,{type:"manual",message:a[1]}),void ee(!1)}return B(e),void ee(!1)}B("")}ne(),ee(!1),s()}catch(t){ee(!1)}}}))(e)},activeStep:l})]})}e("default",(function(e){const{setOpenPage:t}=e,[n,i]=g.useState(0),r=h(),[s]=M(),l=me(),c=C(v),{state:{isCheckout:d,isCloseGotoBCHome:u,logo:m,storeName:f,registerEnabled:I}}=g.useContext(b),{state:{isLoading:w,accountType:F,contactInformation:S=[],passwordInformation:_=[],bcPasswordInformation:k=[],bcContactInformation:H=[]},dispatch:W}=g.useContext(x),{state:{accountLoginRegistration:O,portalStyle:{backgroundColor:q="#FEF9F5"}}}=g.useContext(j);g.useEffect((()=>{I||l("/login")}),[I]),g.useEffect((()=>{(async()=>{try{W&&(W({type:"loading",payload:{isLoading:!0}}),W({type:"finishInfo",payload:{submitSuccess:!1}}));const e=xe.map((e=>A(e))),t=await Promise.all(e),a=(t[1]?.accountFormFields||[]).map((e=>{const t=e;return D.includes(e?.fieldId||"")&&4===e.groupId&&(t.isRequired=!0,t.visible=!0),e})),o=G(t[0]?.accountFormFields||[]),n=G(a||[]),{countries:i}=await E(),s=n.address?.map((e=>{const t=e;return"country"===e.name&&(t.options=i,t.replaceOptions={label:"countryName",value:"countryName"}),e}))||[],l=o.address?.map((e=>{const t=e;if("country"===e.name){t.options=i;const a=i.find((t=>t.countryName===e.default));t.default=a?.countryCode||e.default}return e}))||[],{b2b:c,b2c:d}=O;W&&W({type:"all",payload:{accountType:d&&!c?"2":"1",isLoading:!1,storeName:f,contactInformation:[...n.contactInformation||[]],bcContactInformation:[...o.contactInformation||[]],additionalInformation:[...n.additionalInformation||[]],bcAdditionalInformation:[...o.additionalInformation||[]],companyExtraFields:[],companyInformation:[...n?.businessDetails||[]],companyAttachment:[...K(r)],addressBasicFields:[...s],bcAddressBasicFields:[...l],countryList:[...i],passwordInformation:[...n.password||[]],bcPasswordInformation:[...o.password||[]]}})}catch(e){R.error(e)}})()}),[]);const $=()=>({emailAddress:("1"===F?S:H).find((e=>"email"===e.name))?.default||"",password:("1"===F?_:k).find((e=>"password"===e.name))?.default||""}),U=()=>{W&&W({type:"all",payload:{accountType:"",isLoading:!1,storeName:"",submitSuccess:!1,contactInformation:[],additionalInformation:[],companyExtraFields:[],companyInformation:[],companyAttachment:[],addressBasicFields:[],addressExtraFields:[],countryList:[],passwordInformation:[]}})};return g.useEffect((()=>{c?.body.scrollIntoView(!0)}),[n]),T(!1),a.jsx(y,{setOpenPage:t,children:a.jsx(ie,{isMobile:s,children:a.jsx(L,{isSpinning:w,tip:r("global.tips.loading"),transparency:"0",children:a.jsxs(o,{sx:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"},children:[m&&a.jsx(re,{children:a.jsx(p,{sx:{maxWidth:"250px"},onClick:()=>{window.location.href="/"},children:a.jsx("img",{src:`${m}`,alt:r("global.tips.registerLogo"),loading:"lazy"})})}),a.jsx(ye,{activeStep:n,isStepOptional:e=>-1===e,backgroundColor:q,children:a.jsx(he,{activeStep:n,handleBack:()=>{i((e=>e-1))},handleNext:async()=>{i((e=>e+1))},handleFinish:async()=>{W({type:"loading",payload:{isLoading:!0}});const e=$();if(d)try{await z(e),window.location.reload()}catch(t){R.error(t)}else try{const t={email:e.emailAddress,pass:e.password},{data:a}=await P(t);if(a?.login?.customer&&B.set("loginCustomer",{emailAddress:a.login.customer.email,phoneNumber:a.login.customer.phone,...a.login.customer}),await N(),U(),!V(l))return;u?window.location.href="/":l("/orders")}catch(t){R.error(t)}W({type:"loading",payload:{isLoading:!1}})}})})]})})})})}));const ge=U(o)({"& #b3-customForm-id-name":{'& label[data-shrink="true"]':{whiteSpace:"break-spaces",transition:"unset",background:"white"},'& label[data-shrink="false"]':{whiteSpace:"break-spaces",color:"#474747",fontFamily:"Montserrat",fontSize:"0.9375rem",fontStyle:"normal",fontWeight:400,lineHeight:"normal",top:"-4px",background:"white"}}});function he(e){const{activeStep:o,handleBack:n,handleNext:i,handleFinish:r}=e;return a.jsx(ge,{component:"div",children:(e=>{switch(e){case 0:return a.jsx(fe,{activeStep:o,handleBack:n,handleNext:i});case 1:return a.jsx(pe,{activeStep:o,handleBack:n,handleNext:i});case 2:return a.jsx(t,{activeStep:o,handleBack:n,handleNext:i});case 3:return a.jsx(ne,{activeStep:o,handleFinish:r});default:return null}})(o)})}function ye(e){const{children:t,isStepOptional:n,activeStep:r,backgroundColor:s}=e,l=h(),[c]=M(),p=d(),{state:y}=g.useContext(x),{accountType:b,submitSuccess:j,isAutoApproval:w}=y,F=B.get("blockPendingAccountOrderCreation")&&!w,S=l(F?"register.title.registerCompleteWarning":"register.title.registerComplete"),_="1"===b?S:l("register.title.accountCreated"),C=I(s);return a.jsxs(o,{component:"div",sx:{borderRadius:"4px",marginTop:"3px",background:"#FFFFFF",width:"100%",padding:c?"0 20px":"0 20%"},children:[a.jsx(o,{component:"h3",sx:{color:"#474747",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:400,lineHeight:"normal",fontSize:c?"1.625rem":"2.5rem",textAlign:c?"center":"center "},children:j?_:l("register.title.accountRegister")}),!j&&a.jsx(u,{activeStep:r,sx:{display:"none","& .MuiSvgIcon-root:not(.Mui-active) .MuiStepIcon-text":{fill:I(C)},"& .MuiSvgIcon-root.Mui-active .MuiStepIcon-text":{fill:I(p.palette.primary.main)}},children:$.map(((e,t)=>{const o={};return n(t)&&(o.optional=a.jsx(i,{variant:"caption",children:l("register.step.optional")})),a.jsx(m,{children:a.jsx(f,{...o,children:l(e)})},e)}))}),t]})}const xe=[1,2]}}}));
