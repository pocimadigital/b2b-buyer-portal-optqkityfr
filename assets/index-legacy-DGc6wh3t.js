System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./form-legacy-CAo5v63e.js","./lang-legacy-DRIvecGC.js","./eStyled-legacy-C5ZTaXoz.js","./lodashEs-legacy-Da1qF4L1.js","./B3Card-legacy-BfBAJ0RA.js","./B3CustomForm-legacy-Bk1hH9jz.js","./react-setup-legacy-CiLdZFVf.js","../index-legacy.D-U_SIL6.js","./b3Logger-legacy-C5y5ZQF8.js","./b3Login-legacy-CqziT8uI.js","./RegisteredFinish-legacy-BeN8KYKj.js","./config-legacy-BcVYy-JL.js","./router-legacy-CCJEjNy7.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./validatorRules-legacy-BrvWH46A.js"],(function(e,t){"use strict";var a,s,n,r,o,i,l,c,d,u,m,g,f,p,h,b,y,x,j,F,w,C,S,T,E,I,B,N,k,L,V,v,A,M,R,q,z,O,P,D,W,_,U;return{setters:[e=>{a=e.j,s=e.B,n=e.I,r=e.a0},e=>{o=e.r},e=>{i=e.u},e=>{l=e.u},e=>{c=e.n},e=>{d=e.i},e=>{u=e.B},e=>{m=e.B},e=>{g=e.a,f=e.G,p=e.u,h=e.bq,b=e.C,y=e.k,x=e.a2,j=e.a3,F=e.a4,w=e.ac,C=e.x,S=e.bm,T=e.a6,E=e.br,I=e.a8},null,e=>{B=e.b},e=>{N=e.l},e=>{k=e.d,L=e.e,V=e.b,v=e.f,A=e.T,M=e.I,R=e.a,q=e.v},e=>{z=e.s,O=e.b,P=e.g,D=e.d,W=e.t,_=e.B},e=>{U=e.u},null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(e){const[c,$]=o.useState(""),[G,H]=o.useState(!1),{setOpenPage:Y}=e,Z=l(),[J]=g(),{control:K,handleSubmit:Q,getValues:X,formState:{errors:ee},setValue:te,setError:ae,watch:se}=i({mode:"onSubmit"}),{state:{storeName:ne,logo:re,blockPendingAccountOrderCreation:oe,registerEnabled:ie}}=o.useContext(f),le=U(),ce=p((({company:e})=>e.customer)),{id:de,firstName:ue,lastName:me,emailAddress:ge,phoneNumber:fe}=ce,{state:pe,dispatch:he}=o.useContext(h),{state:{companyAutoApproval:be,portalStyle:{backgroundColor:ye="#FEF9F5"}}}=o.useContext(b),xe=y(ye),je=(e=!1)=>{he({type:"loading",payload:{isLoading:e}})};o.useEffect((()=>{je(!1),ie||le("/login")}),[ie]),o.useEffect((()=>{(async()=>{try{he&&(je(!0),he({type:"finishInfo",payload:{submitSuccess:!1}}));const e=await F(3),t=(e?.accountFormFields||[]).map((e=>{const t=e;return O.includes(e?.fieldId||"")&&4===e.groupId&&(t.isRequired=!0,t.visible=!0),e})),a=P(t||[]),{countries:s}=await w(),n=a.address.map((e=>{const t=e;return"country"===e.name&&(t.options=s,t.replaceOptions={label:"countryName",value:"countryName"}),e})),r={phone:fe,first_name:ue,last_name:me,email:ge},o=a.contactInformation.map((e=>{const t=e;return t.disabled=!0,t.default=r[D(e.name)]||e.default,e.required&&!e?.default&&(t.disabled=!1),e}));he&&he({type:"all",payload:{isLoading:!1,storeName:ne,bcTob2bContactInformation:[...o],bcTob2bCompanyExtraFields:[],bcTob2bCompanyInformation:[...a.businessDetails],bcTob2bAddressBasicFields:[...n],countryList:[...s]}})}catch(e){B.error(e)}})()}),[]);const{bcTob2bContactInformation:Fe,isLoading:we,bcTob2bCompanyInformation:Ce=[],bcTob2bAddressBasicFields:Se=[],countryList:Te=[],bcTob2bCompanyExtraFields:Ee=[]}=pe;o.useEffect((()=>{const e=(e,t="")=>{const a=Te.find((t=>t.countryCode===e||t.countryName===e))?.states||[],s=Se.find((e=>"state"===e.name));s&&(a.length>0?(s.fieldType="dropdown",s.options=a):(s.fieldType="text",s.options=[])),te("state",t&&e&&(a.find((e=>e.stateCode===t))||0===a.length)?t:""),he({type:"stateList",payload:{stateList:a,bcTob2bAddressBasicFields:[...Se]}})};(()=>{const t=X("country"),a=X("state");e(t,a)})();const t=se(((t,{name:a,type:s})=>{const{country:n,state:r}=t;"country"===a&&"change"===s&&e(n,r)}));return()=>t.unsubscribe()}),[Te]);const Ie=async e=>{try{const t=await q({extraFields:e});if(200!==t.code){const e=t.data?.errMsg||t.message||"",a=e.split(":");if(a.length>=2){const e=Fe?.find((e=>e.custom&&_.decode(e.name)===a[0]));if(e)return ae(e.name,{type:"manual",message:a[1]}),(e=>{if(Fe){const t=Fe.map((t=>t.name===e?{...t,disabled:!1}:t));he&&he({type:"all",payload:{bcTob2bContactInformation:[...t]}})}})(e.name),je(!1),!1}return $(e),je(!1),!1}return $(""),!0}catch(t){return!1}};return a.jsx(u,{setOpenPage:Y,children:a.jsx(k,{isMobile:J,children:a.jsx(x,{isSpinning:we,tip:Z("global.tips.loading"),transparency:"0",children:a.jsxs(s,{sx:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center","& h4":{color:xe},"& input, & .MuiFormControl-root .MuiTextField-root, & .MuiDropzoneArea-textContainer, & .MuiSelect-select.MuiSelect-outlined, & .MuiTextField-root .MuiInputBase-multiline":{borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",padding:"10px !important"}},children:[re&&a.jsx(L,{children:a.jsx(n,{sx:{maxWidth:"250px"},onClick:()=>{window.location.href="/"},children:a.jsx("img",{src:`${re}`,alt:Z("global.tips.registerLogo"),loading:"lazy"})})}),G?a.jsx(V,{activeStep:z.length,handleFinish:()=>{N(le,!0)&&(be.enabled?le("/"):window.location.href="/")},isBCToB2B:!0}):a.jsxs(t,{sx:{width:J?"100%":"42rem",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px",marginTop:"1rem",background:"#FFFFFF",padding:"0"},children:[a.jsx(v,{children:Z("registeredbctob2b.title")}),c&&a.jsx(r,{severity:"error",children:a.jsx(A,{children:c})}),a.jsxs(s,{sx:{width:"100%"},children:[a.jsx(M,{children:Fe?.length?Fe[0]?.groupName:""}),a.jsx(m,{formFields:Fe||[],errors:ee,control:K,getValues:X,setValue:te})]}),a.jsxs(s,{sx:{width:"100%"},children:[a.jsx(M,{children:Ce?.length?Ce[0]?.groupName:""}),a.jsx(m,{formFields:[...Ce,...Ee],errors:ee,control:K,getValues:X,setValue:te,setError:ae})]}),a.jsxs(s,{sx:{width:"100%"},children:[a.jsx(M,{children:Se?.length?Se[0]?.groupName:""}),a.jsx(m,{formFields:Se,errors:ee,control:K,getValues:X,setValue:te})]}),!G&&a.jsx(s,{sx:{display:"flex",flexDirection:"row-reverse",pt:2,width:"100%"},children:a.jsx(j,{variant:"contained",onClick:e=>{const t=(()=>{const e=X(),t=Ce.find((e=>"field_attachments"===e.fieldId));return!(d(t)||!t.required||0!==e[t.name].length||(ae(t.name,{type:"required",message:Z("global.validate.required",{label:t.label??""})}),je(!1),0))})();Q((async e=>{if(!t){je(!0);try{const t=await(async e=>{try{const t=Ce.filter((e=>!!e.custom)),a=t.map((t=>({fieldName:D(t.name),fieldValue:e[t.name]||t.default}))),s=await R({extraFields:a});if(200!==s.code){const e=s.data?.errMsg||s.message||"",a=e.split(":");if(a.length>=2){const e=t.find((e=>D(e.name)===a[0]));if(e)return ae(e.name,{type:"manual",message:a[1]}),je(!1),!1}throw e}return $(""),!0}catch(t){throw B.error(t),t}})(e);if(!t)return;const a=(Fe||[]).filter((e=>!!e.custom)),s=[];a.length&&a.forEach((t=>{const a={};a.fieldName=D(t.name),a.fieldValue=e[t.name]||t?.default||"",s.push(a)}));let n=!0;if(s.length>0&&(n=await Ie(s)),!n)return;const r=Ce.filter((e=>"files"===e.fieldType)),o=await(async(e,t)=>{let a=[];if(e.length){e.forEach((e=>{a=t[e.name]||[]}));try{return(await Promise.all(a.map((e=>S({file:e,type:"companyAttachedFile"}))))).reduce(((e,t)=>{let a=e;if(200!==t.code)throw t.data.errMsg||t.message||Z("intl.global.fileUpload.fileUploadFailure");{const s={...t.data};s.fileSize=s.fileSize?`${s.fileSize}`:"",a=[...e,s]}return a}),[])}catch(s){throw B.error(s),s}}})(r||[],e);await(async(e,t,a,s)=>{const n={};n.customerId=t||"",n.storeHash=I,n.userExtraFields=s;const r=Ce.filter((e=>!e.custom&&"files"!==e.fieldType)),o=Ce.filter((e=>!!e.custom));if(r.length&&r.forEach((t=>{n[W(D(t.name))]=e[t.name]||""})),o.length){const t=[];o.forEach((a=>{const s={};s.fieldName=D(a.name),s.fieldValue=e[a.name]||"",t.push(s)})),n.extraFields=t}const i=Se.filter((e=>!e.custom)),l=Se.filter((e=>!!e.custom));if(i.length&&i.forEach((t=>{const a=D(t.name);"address1"===a&&(n.addressLine1=e[t.name]||""),"address2"===a&&(n.addressLine2=e[t.name]||""),n[a]=e[t.name]||""})),l.length){const t=[];l.forEach((a=>{const s={};s.fieldName=D(a.name),s.fieldValue=e[a.name]||"",t.push(s)})),n.addressExtraFields=t}return n.fileList=a,n.channelId=T,E(n)})(e,de,o,s);const i=be.enabled;ge&&(he({type:"finishInfo",payload:{submitSuccess:!0,isAutoApproval:i,blockPendingAccountOrderCreation:oe}}),he({type:"all",payload:{accountType:"1"}}),await C(),H(!0))}catch(a){B.error(a),$(a?.message||a)}finally{je(!1)}}}))(e)},children:Z("global.button.submit")})})]})]})})})})}));const t=e("StyledRegisterContent",c(s)({"& #b3-customForm-id-name":{'& label[data-shrink="true"]':{whiteSpace:"break-spaces",minWidth:"calc(133% - 24px)",transition:"unset",background:"white"},'& label[data-shrink="false"]':{whiteSpace:"break-spaces",background:"white"}}}))}}}));
