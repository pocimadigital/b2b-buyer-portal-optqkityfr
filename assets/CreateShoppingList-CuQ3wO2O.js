const __vite__fileDeps=["https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/react-setup-DmRjJMtp.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/mui-CyG7s_nf.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/reactVendor-BAhb8EbJ.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/eReact-DeS39u1B.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/intl-CIPMD0ue.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/eCache-BQInSoPa.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/eStyled-B3rIBjaz.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/redux-B-shcavw.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/toolkit-CHPG993j.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/lodashEs-Ck10JMnh.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/undefined","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/lang-CO9rnotr.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/router-BbCjXwHs.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/muiIcon-BfPleEzf.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/dateFns-BB2kaHor.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/dropzone-D4lSiSJA.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/b3Logger-CMQiGC3f.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/react-setup-Bofl6DAz.css","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/B3CustomForm-D63ourZ6.js","https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/form-Bvi8lP6x.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"../index.CVSTvWZ2.js";import{j as e,B as i}from"./mui-CyG7s_nf.js";import{r as o}from"./reactVendor-BAhb8EbJ.js";import{u as b}from"./form-Bvi8lP6x.js";import{u as j}from"./lang-CO9rnotr.js";import{u as y,p as C}from"./react-setup-DmRjJMtp.js";import{c as E}from"./b3ShoppingList-BZO90CZj.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";const v=o.lazy(()=>a(()=>import("./react-setup-DmRjJMtp.js").then(t=>t.b_),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url)),R=o.lazy(()=>a(()=>import("./B3CustomForm-D63ourZ6.js").then(t=>t.a),__vite__mapDeps([18,1,2,3,4,5,6,0,7,8,9,10,11,12,13,14,15,16,17,19]),import.meta.url)),w=t=>[{name:"name",label:t("global.createShoppingList.name"),required:!0,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small",maxLength:200},{name:"description",label:t("global.createShoppingList.description"),required:!1,default:"",fieldType:"multiline",xs:12,variant:"outlined",size:"small",rows:4,maxLength:200}];function Q({open:t,onChange:l,onClose:n}){const m=o.useRef(null),r=j(),[p,s]=o.useState(!1),u=y(C),{control:c,handleSubmit:d,getValues:f,formState:{errors:h},setValue:g}=b({mode:"onSubmit"}),x=()=>{n()},_=()=>{d(async L=>{const{name:S,description:B}=L;s(!0),await E({data:{name:S,description:B},isB2BUser:u}),s(!1),l()})()};return e.jsxs(i,{sx:{ml:3,cursor:"pointer",width:"50%"},children:[e.jsx(i,{ref:m}),e.jsx(v,{isOpen:t,fullWidth:!0,title:r("global.createShoppingList.createNew"),loading:p,handleLeftClick:x,handRightClick:_,children:e.jsx(i,{sx:{minHeight:"auto",display:"flex",alignItems:"flex-start"},children:e.jsx(R,{formFields:w(r),errors:h,control:c,getValues:f,setValue:g})})})]})}export{Q as default};
