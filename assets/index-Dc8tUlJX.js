import{j as c,B as w,I as he,a0 as ge}from"./mui-CyG7s_nf.js";import{r as b}from"./reactVendor-BAhb8EbJ.js";import{u as xe}from"./form-Bvi8lP6x.js";import{u as be}from"./lang-DxTEvHWx.js";import{n as ye}from"./eStyled-B3rIBjaz.js";import{i as Fe}from"./lodashEs-Ck10JMnh.js";import{B as Ce}from"./B3Card-CJeF0OZ7.js";import{B as T}from"./B3CustomForm-BEMu6QY4.js";import{a as we,G as Be,u as Ee,bq as Le,C as Se,k as je,a2 as Ae,a3 as Ie,a4 as Re,ac as Te,x as ve,bm as Ne,a6 as Me,br as Ve,a8 as ke}from"./react-setup-9NPp_6Sq.js";import"../index.CMPJ-jXT.js";import{b as S}from"./b3Logger-CMQiGC3f.js";import{l as Ue}from"./b3Login-BpQA0__3.js";import{d as qe,e as De,b as ze,f as Pe,T as He,I as v,a as Oe,v as _e}from"./RegisteredFinish-SERkZ2Ys.js";import{s as Ge,b as We,g as $e,d as y,t as Je,B as Ke}from"./config-Ch4FtZ_A.js";import{u as Qe}from"./router-BbCjXwHs.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./validatorRules-Qy5XGE5E.js";const Xe=ye(w)({"& #b3-customForm-id-name":{'& label[data-shrink="true"]':{whiteSpace:"break-spaces",minWidth:"calc(133% - 24px)",transition:"unset",background:"white"},'& label[data-shrink="false"]':{whiteSpace:"break-spaces",background:"white"}}});function wt(_){var P,H,O;const[N,B]=b.useState(""),[M,G]=b.useState(!1),{setOpenPage:W}=_,F=be(),[V]=we(),{control:j,handleSubmit:$,getValues:C,formState:{errors:A},setValue:E,setError:L,watch:J}=xe({mode:"onSubmit"}),{state:{storeName:K,logo:k,blockPendingAccountOrderCreation:Q,registerEnabled:U}}=b.useContext(Be),I=Qe(),X=Ee(({company:i})=>i.customer),{id:Y,firstName:Z,lastName:ee,emailAddress:q,phoneNumber:te}=X,{state:se,dispatch:f}=b.useContext(Le),{state:{companyAutoApproval:D,portalStyle:{backgroundColor:ae="#FEF9F5"}}}=b.useContext(Se),oe=je(ae),x=(i=!1)=>{f({type:"loading",payload:{isLoading:i}})};b.useEffect(()=>{x(!1),U||I("/login")},[U]),b.useEffect(()=>{(async()=>{try{f&&(x(!0),f({type:"finishInfo",payload:{submitSuccess:!1}}));const l=await Re(3),r=((l==null?void 0:l.accountFormFields)||[]).map(e=>{const t=e;return We.includes((e==null?void 0:e.fieldId)||"")&&e.groupId===4&&(t.isRequired=!0,t.visible=!0),e}),s=$e(r||[]),{countries:a}=await Te(),o=s.address.map(e=>{const t=e;return e.name==="country"&&(t.options=a,t.replaceOptions={label:"countryName",value:"countryName"}),e}),n={phone:te,first_name:Z,last_name:ee,email:q},d=s.contactInformation.map(e=>{const t=e;return t.disabled=!0,t.default=n[y(e.name)]||e.default,e.required&&!(e!=null&&e.default)&&(t.disabled=!1),e});f&&f({type:"all",payload:{isLoading:!1,storeName:K,bcTob2bContactInformation:[...d],bcTob2bCompanyExtraFields:[],bcTob2bCompanyInformation:[...s.businessDetails],bcTob2bAddressBasicFields:[...o],countryList:[...a]}})}catch(l){S.error(l)}})()},[]);const{bcTob2bContactInformation:u,isLoading:re,bcTob2bCompanyInformation:h=[],bcTob2bAddressBasicFields:g=[],countryList:z=[],bcTob2bCompanyExtraFields:ne=[]}=se;b.useEffect(()=>{const i=(s,a="")=>{var d;const o=((d=z.find(e=>e.countryCode===s||e.countryName===s))==null?void 0:d.states)||[],n=g.find(e=>e.name==="state");n&&(o.length>0?(n.fieldType="dropdown",n.options=o):(n.fieldType="text",n.options=[])),E("state",a&&s&&(o.find(e=>e.stateCode===a)||o.length===0)?a:""),f({type:"stateList",payload:{stateList:o,bcTob2bAddressBasicFields:[...g]}})};(()=>{const s=C("country"),a=C("state");i(s,a)})();const r=J((s,{name:a,type:o})=>{const{country:n,state:d}=s;a==="country"&&o==="change"&&i(n,d)});return()=>r.unsubscribe()},[z]);const ie=async(i,l)=>{let r=[];if(i.length){i.forEach(s=>{r=l[s.name]||[]});try{return(await Promise.all(r.map(o=>Ne({file:o,type:"companyAttachedFile"})))).reduce((o,n)=>{let d=o;if(n.code===200){const e={...n.data};e.fileSize=e.fileSize?"".concat(e.fileSize):"",d=[...o,e]}else throw n.data.errMsg||n.message||F("intl.global.fileUpload.fileUploadFailure");return d},[])}catch(s){throw S.error(s),s}}},le=async(i,l,r,s)=>{const a={};a.customerId=l||"",a.storeHash=ke,a.userExtraFields=s;const o=h.filter(t=>!t.custom&&t.fieldType!=="files"),n=h.filter(t=>!!t.custom);if(o.length&&o.forEach(t=>{a[Je(y(t.name))]=i[t.name]||""}),n.length){const t=[];n.forEach(p=>{const m={};m.fieldName=y(p.name),m.fieldValue=i[p.name]||"",t.push(m)}),a.extraFields=t}const d=g.filter(t=>!t.custom),e=g.filter(t=>!!t.custom);if(d.length&&d.forEach(t=>{const p=y(t.name);p==="address1"&&(a.addressLine1=i[t.name]||""),p==="address2"&&(a.addressLine2=i[t.name]||""),a[p]=i[t.name]||""}),e.length){const t=[];e.forEach(p=>{const m={};m.fieldName=y(p.name),m.fieldValue=i[p.name]||"",t.push(m)}),a.addressExtraFields=t}return a.fileList=r,a.channelId=Me,Ve(a)},ce=async i=>{var l;try{const r=h.filter(o=>!!o.custom),s=r.map(o=>({fieldName:y(o.name),fieldValue:i[o.name]||o.default})),a=await Oe({extraFields:s});if(a.code!==200){const o=((l=a.data)==null?void 0:l.errMsg)||a.message||"",n=o.split(":");if(n.length>=2){const d=r.find(e=>y(e.name)===n[0]);if(d)return L(d.name,{type:"manual",message:n[1]}),x(!1),!1}throw o}return B(""),!0}catch(r){throw S.error(r),r}},de=()=>{var r;const i=C(),l=h.find(s=>s.fieldId==="field_attachments");return!Fe(l)&&l.required&&i[l.name].length===0?(L(l.name,{type:"required",message:F("global.validate.required",{label:(r=l.label)!=null?r:""})}),x(!1),!0):!1},me=i=>{if(u){const l=u.map(r=>r.name===i?{...r,disabled:!1}:r);f&&f({type:"all",payload:{bcTob2bContactInformation:[...l]}})}},ue=async i=>{var l;try{const r=await _e({extraFields:i});if(r.code!==200){const s=((l=r.data)==null?void 0:l.errMsg)||r.message||"",a=s.split(":");if(a.length>=2){const o=u==null?void 0:u.find(n=>n.custom&&Ke.decode(n.name)===a[0]);if(o)return L(o.name,{type:"manual",message:a[1]}),me(o.name),x(!1),!1}return B(s),x(!1),!1}return B(""),!0}catch(r){return!1}},pe=i=>{const l=de();$(async r=>{if(!l){x(!0);try{if(!await ce(r))return;const o=(u||[]).filter(m=>!!m.custom),n=[];o.length&&o.forEach(m=>{const R={};R.fieldName=y(m.name),R.fieldValue=r[m.name]||(m==null?void 0:m.default)||"",n.push(R)});let d=!0;if(n.length>0&&(d=await ue(n)),!d)return;const e=h.filter(m=>m.fieldType==="files"),t=await ie(e||[],r);await le(r,Y,t,n);const p=D.enabled;q&&(f({type:"finishInfo",payload:{submitSuccess:!0,isAutoApproval:p,blockPendingAccountOrderCreation:Q}}),f({type:"all",payload:{accountType:"1"}}),await ve(),G(!0))}catch(s){S.error(s),B((s==null?void 0:s.message)||s)}finally{x(!1)}}})(i)},fe=()=>{Ue(I,!0)&&(D.enabled?I("/"):window.location.href="/")};return c.jsx(Ce,{setOpenPage:W,children:c.jsx(qe,{isMobile:V,children:c.jsx(Ae,{isSpinning:re,tip:F("global.tips.loading"),transparency:"0",children:c.jsxs(w,{sx:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center","& h4":{color:oe},"& input, & .MuiFormControl-root .MuiTextField-root, & .MuiDropzoneArea-textContainer, & .MuiSelect-select.MuiSelect-outlined, & .MuiTextField-root .MuiInputBase-multiline":{borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",padding:"10px !important"}},children:[k&&c.jsx(De,{children:c.jsx(he,{sx:{maxWidth:"250px"},onClick:()=>{window.location.href="/"},children:c.jsx("img",{src:"".concat(k),alt:F("global.tips.registerLogo"),loading:"lazy"})})}),M?c.jsx(ze,{activeStep:Ge.length,handleFinish:fe,isBCToB2B:!0}):c.jsxs(Xe,{sx:{width:V?"100%":"42rem",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px",marginTop:"1rem",background:"#FFFFFF",padding:"0"},children:[c.jsx(Pe,{children:F("registeredbctob2b.title")}),N&&c.jsx(ge,{severity:"error",children:c.jsx(He,{children:N})}),c.jsxs(w,{sx:{width:"100%"},children:[c.jsx(v,{children:u!=null&&u.length?(P=u[0])==null?void 0:P.groupName:""}),c.jsx(T,{formFields:u||[],errors:A,control:j,getValues:C,setValue:E})]}),c.jsxs(w,{sx:{width:"100%"},children:[c.jsx(v,{children:h!=null&&h.length?(H=h[0])==null?void 0:H.groupName:""}),c.jsx(T,{formFields:[...h,...ne],errors:A,control:j,getValues:C,setValue:E,setError:L})]}),c.jsxs(w,{sx:{width:"100%"},children:[c.jsx(v,{children:g!=null&&g.length?(O=g[0])==null?void 0:O.groupName:""}),c.jsx(T,{formFields:g,errors:A,control:j,getValues:C,setValue:E})]}),!M&&c.jsx(w,{sx:{display:"flex",flexDirection:"row-reverse",pt:2,width:"100%"},children:c.jsx(Ie,{variant:"contained",onClick:pe,children:F("global.button.submit")})})]})]})})})})}export{Xe as StyledRegisterContent,wt as default};
