import{j as i}from"./mui-CyG7s_nf.js";import{u as n}from"./lang-DxTEvHWx.js";import"./reactVendor-BAhb8EbJ.js";import{u,R as p,a9 as d}from"./react-setup-DmaEtmS9.js";import"../index.DaEiSpoW.js";const r=t=>{const s=[{label:"All",value:99,idLang:"global.shoppingLists.status.all"},{label:"Approved",value:0,idLang:"global.shoppingLists.status.approved"},{label:"Draft",value:30,idLang:"global.shoppingLists.status.draft"},{label:"Ready for approval",value:40,idLang:"global.shoppingLists.status.readyForApproval"},{label:"Rejected",value:20,idLang:"global.shoppingLists.status.rejected"}];return t?s:s.filter(e=>e.value!==30&&e.value!==20)},h=(t,s)=>{var a;return[{name:"createdBy",label:"Created by",required:!1,default:"",fieldType:"dropdown",options:((a=t==null?void 0:t.createdByUser)==null?void 0:a.results.map(l=>({createdBy:"".concat(l.firstName," ").concat(l.lastName," (").concat(l.email,")")})))||[],replaceOptions:{label:"createdBy",value:"createdBy"},xs:12,variant:"outlined",size:"small",idLang:"global.shoppingLists.filter.createdBy"},{name:"status",label:"Status",required:!1,default:"",fieldType:"dropdown",options:r(s),xs:12,variant:"outlined",size:"small",idLang:"global.shoppingLists.filter.status"}]},v=t=>[{name:"name",label:t("shoppingLists.name"),required:!0,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small",maxLength:200},{name:"description",label:t("shoppingLists.description"),required:!1,default:"",fieldType:"multiline",xs:12,variant:"outlined",size:"small",rows:4,maxLength:200}],g=t=>r(t).map(e=>+e.value==0?{color:"#EA617C",textColor:"white",...e}:+e.value==40?{color:"#F4CC46",textColor:"black",...e}:+e.value==30?{color:"#899193",textColor:"#FFFFFF",...e}:{color:"#7A6041",textColor:"#FFFFFF",...e});function S({status:t}){const{submitShoppingListPermission:s}=u(p),o=n(),a=g(s).find(l=>+l.value==+t);return a?i.jsx(d,{color:a.color,textColor:a.textColor,children:o(a.idLang)}):null}export{S,h as a,v as g};
