System.register(["./mui-legacy-C2p10bcq.js","./lang-legacy-CyIWukAl.js","./reactVendor-legacy-CtYIj4Ma.js","./react-setup-legacy-CEf7G1oQ.js","../index-legacy.oAxYdIH8.js"],(function(e,l){"use strict";var a,t,s,i,o;return{setters:[e=>{a=e.j},e=>{t=e.u},null,e=>{s=e.u,i=e.R,o=e.a9},null],execute:function(){e("S",(function({status:e}){const{submitShoppingListPermission:l}=s(i),n=t(),u=r(l).find((l=>+l.value==+e));return u?a.jsx(o,{color:u.color,textColor:u.textColor,children:n(u.idLang)}):null}));const l=e=>{const l=[{label:"All",value:99,idLang:"global.shoppingLists.status.all"},{label:"Approved",value:0,idLang:"global.shoppingLists.status.approved"},{label:"Draft",value:30,idLang:"global.shoppingLists.status.draft"},{label:"Ready for approval",value:40,idLang:"global.shoppingLists.status.readyForApproval"},{label:"Rejected",value:20,idLang:"global.shoppingLists.status.rejected"}];return e?l:l.filter((e=>30!==e.value&&20!==e.value))},r=(e("a",((e,a)=>[{name:"createdBy",label:"Created by",required:!1,default:"",fieldType:"dropdown",options:e?.createdByUser?.results.map((e=>({createdBy:`${e.firstName} ${e.lastName} (${e.email})`})))||[],replaceOptions:{label:"createdBy",value:"createdBy"},xs:12,variant:"outlined",size:"small",idLang:"global.shoppingLists.filter.createdBy"},{name:"status",label:"Status",required:!1,default:"",fieldType:"dropdown",options:l(a),xs:12,variant:"outlined",size:"small",idLang:"global.shoppingLists.filter.status"}])),e("g",(e=>[{name:"name",label:e("shoppingLists.name"),required:!0,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small",maxLength:200},{name:"description",label:e("shoppingLists.description"),required:!1,default:"",fieldType:"multiline",xs:12,variant:"outlined",size:"small",rows:4,maxLength:200}])),e=>l(e).map((e=>0==+e.value?{color:"#EA617C",textColor:"white",...e}:40==+e.value?{color:"#F4CC46",textColor:"black",...e}:30==+e.value?{color:"#899193",textColor:"#FFFFFF",...e}:{color:"#7A6041",textColor:"#FFFFFF",...e})))}}}));
