System.register(["../index-legacy.DWg148U-.js","./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./form-legacy-CAo5v63e.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-BoEYl_s9.js","./b3ShoppingList-legacy-CuEg0IPR.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(e,l){"use strict";var t,a,s,n,i,r,o,c,u;return{setters:[e=>{t=e._},e=>{a=e.j,s=e.B},e=>{n=e.r},e=>{i=e.u},e=>{r=e.u},e=>{o=e.u,c=e.p},e=>{u=e.c},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function({open:e,onChange:l,onClose:t}){const y=n.useRef(null),j=r(),[p,h]=n.useState(!1),f=o(c),{control:x,handleSubmit:b,getValues:S,formState:{errors:L},setValue:C}=i({mode:"onSubmit"});return a.jsxs(s,{sx:{ml:3,cursor:"pointer",width:"50%"},children:[a.jsx(s,{ref:y}),a.jsx(g,{isOpen:e,fullWidth:!0,title:j("global.createShoppingList.createNew"),loading:p,handleLeftClick:()=>{t()},handRightClick:()=>{b((async e=>{const{name:t,description:a}=e;h(!0),await u({data:{name:t,description:a},isB2BUser:f}),h(!1),l()}))()},children:a.jsx(s,{sx:{minHeight:"auto",display:"flex",alignItems:"flex-start"},children:a.jsx(d,{formFields:m(j),errors:L,control:x,getValues:S,setValue:C})})})]})}));const g=n.lazy((()=>t((()=>l.import("./react-setup-legacy-BoEYl_s9.js").then((e=>e.b_))),void 0,l.meta.url))),d=n.lazy((()=>t((()=>l.import("./B3CustomForm-legacy-D3ercyEo.js").then((e=>e.a))),void 0,l.meta.url))),m=e=>[{name:"name",label:e("global.createShoppingList.name"),required:!0,default:"",fieldType:"text",xs:12,variant:"outlined",size:"small",maxLength:200},{name:"description",label:e("global.createShoppingList.description"),required:!1,default:"",fieldType:"multiline",xs:12,variant:"outlined",size:"small",rows:4,maxLength:200}]}}}));
