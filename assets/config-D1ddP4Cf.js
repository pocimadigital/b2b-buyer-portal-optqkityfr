import{g as h}from"./dateFns-BB2kaHor.js";import"./react-setup-5BSR6wiC.js";import"../index.BYZwzzkf.js";import{v as f}from"./validatorRules-SFapG1La.js";const T=(e,n=14)=>e?e.replace(/[^\x00-\xff]/gi,"aa").length*n/2:null,v=(e,n=14)=>{const a=document.body.clientWidth,o=a<=750,l=500,r=a+16-98,t=o?r:l,s=T(e,n);return s!==null?Math.ceil(s/t):1},w="yyyy-MM-dd",F=["register.step.account","register.step.details","register.step.finish"],L=["text","multiline","number","dropdown"],b={encode(e){return window.btoa(encodeURIComponent(e))},decode(e){return decodeURIComponent(window.atob(e))}},c={text:["text","number","password","multiline"],checkbox:["checkbox"],dropdown:["dropdown"],radio:["radio"],date:["date"]},N=e=>{var a,o,l,r,t,s;let n={};if(c.text.includes(e.fieldType)&&(n={minlength:e.minlength||null,maxLength:e.maxLength||+e.maximumLength||null,min:e.min||null,max:e.max||+e.maximumValue||null,rows:((a=e==null?void 0:e.options)==null?void 0:a.rows)||e.numberOfRows||null},n!=null&&n.max&&(n.validate=f(["max"],{max:n==null?void 0:n.max})),e.fieldType==="password"&&(n.validate=f(["password"])),((e==null?void 0:e.fieldName)==="email"||(e==null?void 0:e.fieldName)==="phone")&&(n.validate=f([e.fieldName])),(e.fieldType==="number"||e.fieldType==="text"&&e.type==="integer")&&(n.validate=f(["number"]))),c.checkbox.includes(e.fieldType)&&(n={default:e.default||[],options:((o=e.options)==null?void 0:o.items)||null}),c.dropdown.includes(e.fieldType)){const d=[];(l=e.options)!=null&&l.helperLabel&&d.push({label:e.options.helperLabel,value:""});const u=[...d,...((r=e.options)==null?void 0:r.items)||[]];e.listOfValue&&e.listOfValue.forEach(i=>u.push({label:i,value:i})),n={default:e.default||"",options:u||null}}return c.radio.includes(e.fieldType)&&(n={default:e.default||"",options:((t=e.options)==null?void 0:t.items)||[]}),n!=null&&n.options&&(n==null||n.options.forEach(d=>{const u=d;d.value&&(u.value=d.label)})),e.fieldId==="field_country"&&(n.default=((s=e.valueConfigs)==null?void 0:s.default)||n.default),n},y=["country","state","email"],R=["field_country","field_address_1","field_city","field_state","field_zip_code"],m={1:"contactInformation",2:"additionalInformation",3:"businessDetails",4:"address",5:"password"},O=e=>y.includes(e)?e:b.decode(e),I=e=>y.includes(e)?e:b.encode(e),V=e=>e==="countryCode"?"country":e==="stateOrProvince"?"state":e,p=e=>{const n={id:e.id||e.fieldName,name:V(e.name)||I(e.fieldName),label:e.label||e.labelName,required:e.required||e.isRequired,default:e.default||e.defaultValue||"",fieldType:e.fieldType,xs:12,visible:(e==null?void 0:e.visible)||!1,custom:(e==null?void 0:e.custom)||!1,bcLabel:e.label||"",type:e.type||""},a=e;typeof e.fieldType=="number"&&(a.fieldType=L[e.fieldType],n.fieldType=e.fieldType);const o=N(e);return{...n,...o}},P=e=>e.replace(/_(\w)/g,(n,a)=>a.toUpperCase()),_=e=>{const n={};return e.forEach(a=>{var r,t;const o=m[a.groupId];(r=n[o])!=null&&r.length||(n[o]=[]);let l={};if((t=a.valueConfigs)!=null&&t.id?l=p(a.valueConfigs):l=p(a),l.required=a.isRequired,l.id=a.id,l.fieldId=a.fieldId,l.groupId=a.groupId,l.groupName=a.groupName,l.visible=a.visible,l.label=a.labelName,l.custom=l.custom||(a==null?void 0:a.custom),l.variant="outlined",l.fieldType==="date"&&!l.default&&(l.default=h(new Date,w)),l.name==="country"&&(l.replaceOptions={label:"countryName",value:"countryCode"}),l.name==="state"&&(l.replaceOptions={label:"stateName",value:"stateName"}),a.fieldId==="field_confirm_password"&&(l.name="confirmPassword"),l.fieldType==="files"&&(l.filesLimit=3,l.maxFileSize=10485760,l.default=[]),l.fieldType==="checkbox"&&!l.options&&(l.label="",l.options=[{label:a.labelName,value:a.labelName}]),l.fieldType==="text"&&l.type==="integer"&&(l.fieldType="number"),l.label.length>0){let s=8.5,d=14;const u=document.body.clientWidth<=750;let i=v(l.label,16);l.fieldType==="multiline"&&(s=0),l.fieldType==="dropdown"&&(s=0,i>1&&(i+=u?1.4:2),l.fieldId==="field_state"&&(i-=u?0:.8));const g=i===1?"".concat(s,"px"):"".concat(s/16+(i-1),"rem"),x="".concat(d,"px");i>0&&(l.extraPadding={padding:"".concat(g," ").concat(x)})}n[o].push(l)}),n},k=e=>{if(e!=null&&e.length){const n=e?e.filter(o=>!!o.visible||!!o.custom&&!!o.isRequired):[];return n?_(n):{}}return{}},z=e=>[{name:"companyAttachments",label:e("register.label.companyAttachments"),default:[],fieldType:"file",required:!1,xs:12,filesLimit:3,maxFileSize:10485760}],M={2:"register.emailValidate.alreadyExitsBC",3:"global.emailValidate.multipleCustomer",4:"global.emailValidate.companyUsed",5:"global.emailValidate.alreadyExits",6:"global.emailValidate.usedSuperAdmin"};export{b as B,R as b,z as c,O as d,M as e,k as g,F as s,P as t};
