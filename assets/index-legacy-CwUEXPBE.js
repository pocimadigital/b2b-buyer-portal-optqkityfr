System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./B3Filter-legacy-DYb551oY.js","./react-setup-legacy-DZzlZWvn.js","../index-legacy.Oph0CwYp.js","./EditOutlined-legacy-Bvuy0KzV.js","./b3Logger-legacy-C5y5ZQF8.js","./address-legacy-BznFtWi_.js","./form-legacy-CAo5v63e.js","./lodashEs-legacy-Da1qF4L1.js","./B3CustomForm-legacy-CQAeTWfZ.js","./config-legacy-BV8ILw8N.js","./config-legacy-CquFG6f7.js","./eStyled-legacy-C5ZTaXoz.js","./DeleteOutlined-legacy-DSGQdo83.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./B3FilterMore-legacy-BAhegRQ3.js","./dateFns-legacy-DDX5L0UR.js","./B3FilterSearch-legacy-BH_FiGu1.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dropzone-legacy-Q3dhxZki.js","./validatorRules-legacy-Cn1NdBMd.js"],(function(e,s){"use strict";var t,a,i,n,d,l,r,o,c,u,f,g,p,m,h,y,x,j,S,C,D,b,B,A,I,w,F,E,L,k,v,N,O,P,R,T,z,V,_,W,$,M,q,U,J,H,K,G,X,Y,Z,Q,ee,se,te,ae;return{setters:[e=>{t=e.s,a=e.j,i=e.w,n=e.x,d=e.y,l=e.K,r=e.ab,o=e.T,c=e.B,u=e.q,f=e.ac},e=>{g=e.r},e=>{p=e.u},e=>{m=e.B},e=>{h=e.B,y=e.a7,x=e.a8,j=e._,S=e.a5,C=e.a9,D=e.a3,b=e.a,B=e.a4,A=e.u,I=e.p,w=e.G,F=e.R,E=e.aa,L=e.a2,k=e.ab,v=e.ac},null,e=>{N=e.d,O=e.u,P=e.a},e=>{R=e.b},e=>{T=e.c,z=e.u,V=e.a,_=e.b,W=e.d,$=e.e,M=e.g,q=e.f,U=e.h,J=e.i},e=>{H=e.u},e=>{K=e.c},e=>{G=e.B},e=>{X=e.d,Y=e.g},e=>{Z=e.b,Q=e.a,ee=e.f,se=e.c},e=>{te=e.n},e=>{ae=e.d},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const e=A(I),s=A((({company:e})=>e.companyInfo.id)),t=A((({company:e})=>e.customer.role)),i=A((({b2bFeatures:e})=>e.masqueradeCompany.id)),n=A((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),{state:{addressConfig:d},dispatch:l}=g.useContext(w),{addressesActionsPermission:r}=A(F),o=p(),u=O(),[f]=P(),h=g.useRef(null),[y,x]=g.useState(!1),[j,C]=g.useState([]),[D,b]=g.useState([]),[B,N]=g.useState({search:""}),T=t===E.SUPER_ADMIN&&n?i:s;let z=!1,V=!1;e&&(!t||t===E.SUPER_ADMIN&&n)&&(z=!0),e&&(t!==E.SUPER_ADMIN||n)||(V=!0),g.useEffect((()=>{(async()=>{const{countries:e}=await v();b(e),x(!0);try{const s=await ue(!V,e);C(s||[])}catch(s){R.error(s)}finally{x(!1)}})()}),[]);const _=()=>{f.current?.refresh()},[W,$]=g.useState(!!e&&r),[M,H]=g.useState(!1),[K,G]=g.useState(!1),[X,Y]=g.useState();g.useEffect((()=>{(async()=>{if(V)$(!0);else if(z)try{let e=d;if(!e){const{addressConfig:s}=await J();e=s,l({type:"common",payload:{addressConfig:e}})}const s=3===t?"address_sales_rep":"address_admin",a="1"===(e||[]).find((e=>"address_book"===e.key))?.isEnabled&&"1"===(e||[]).find((e=>e.key===s))?.isEnabled&&r;$(a)}catch(e){R.error(e)}})()}),[d,z,V,t]);const Z=e=>{W?(Y({...e}),G(!0)):S.error(o("addresses.noPermissionToEdit"))},Q=e=>{Y({...e}),H(!0)},te={isEnabled:W,customLabel:o("addresses.addNewAddress")},ae=JSON.parse(JSON.stringify(ee));return ae.map((e=>(e.label=o(e.idLang),e))),a.jsx(L,{isSpinning:y,children:a.jsxs(c,{sx:{display:"flex",flexDirection:"column",flex:1},children:[a.jsx(m,{fiterMoreInfo:ae,handleChange:(e,s)=>{"search"===e&&N({...B,search:s})},handleFilterChange:e=>{N({...B,country:e.country||"",state:e.state||"",city:e.city||""})},customButtomConfig:te,handleFilterCustomButtomClick:()=>{W?h.current?.handleOpenAddEditAddressClick("add"):S.error(o("addresses.noPermissionToAdd"))}}),a.jsx(k,{ref:f,columnItems:[],rowsPerPageOptions:[12,24,36],getRequestList:async(e={})=>{let s=[],t=0;if(V){const{customerAddresses:{edges:a=[],totalCount:i}}=await U({...e});s=a.map((e=>({node:se(e.node)}))),t=i}else{const{addresses:{edges:a=[],totalCount:i}}=await q({companyId:T,...e});s=a,t=i}return{edges:s,totalCount:t}},searchParams:B,isCustomRender:!0,itemXs:u?3:4,requestLoading:x,tableKey:"id",renderItem:e=>a.jsx(le,{item:e,onEdit:()=>(e=>{W?h.current?.handleOpenAddEditAddressClick("edit",e):S.error(o("addresses.noPermissionToEdit"))})(e),onDelete:Z,onSetDefault:Q,editPermission:W,isBCPermission:V},e.id)}),a.jsx(ie,{updateAddressList:_,addressFields:j,ref:h,companyId:T,isBCPermission:V,countries:D}),W&&!V&&a.jsx(oe,{isOpen:M,setIsOpen:H,setIsLoading:x,addressData:X,updateAddressList:_,companyId:T}),W&&a.jsx(re,{isOpen:K,setIsOpen:G,setIsLoading:x,addressData:X,updateAddressList:_,companyId:T,isBCPermission:V})]})})}));const s=t("div")((()=>({display:"flex","& div::first-of-type":{marginRight:"2rem"},"& div":{minWidth:"45%",display:"flex",flexDirection:"column"}}))),ie=g.forwardRef((function({addressFields:e,updateAddressList:t,companyId:d,isBCPermission:l,countries:r},o){const c=p(),[u,f]=g.useState(!1),[m,C]=g.useState(""),[D,b]=g.useState(!1),[B,A]=g.useState(e),[I,w]=g.useState([]),[F,E]=g.useState([]),[L,k]=g.useState(null),[v,N]=g.useState({isShipping:!1,isBilling:!1,isDefaultShipping:!1,isDefaultBilling:!1}),O=!l,{control:P,handleSubmit:R,getValues:W,formState:{errors:$},watch:M,setError:q,setValue:U,reset:J}=H({mode:"all"}),Y=async e=>{try{const s=I.map((s=>({fieldName:X(s.name),fieldValue:e[s.name]||s.default}))),t=await(e=>h.post("/api/v2/extra-fields/address/validate",y.B2BRest,{...e,storeHash:x}))({extraFields:s});if(200!==t.code){const e=t.data?.errMsg||t.message||"",s=e.split(":");if(s.length>=2){const e=I.find((e=>X(e.name)===s[0]));if(e)return q(e.name,{type:"manual",message:s[1]}),b(!1),!1}throw e}return!0}catch(s){throw S.error(s),s}},Q=(e,s)=>{"add"===e&&F.length>0&&B.forEach((e=>{const s=e;if(e.custom)if(O){const t=F.filter((s=>s.name===e.name))[0];s.default=t.default||""}else{const t=F.filter((s=>s.name===e.name||s.bcLabel===e.bcLabel))[0];s.default=t.default||""}})),J(),k(s),C(e),f(!0)};return g.useImperativeHandle(o,(()=>({handleOpenAddEditAddressClick:Q}))),g.useEffect((()=>{const s=JSON.parse(JSON.stringify(e));s.forEach((e=>{const s=e;return s.label=c(e.idLang)||e.label,O||"field_21"!==e.fieldId||(s.default=""),e})),A(s);const t=e.filter((e=>e.custom));if(w(t),0===F.length){const s=K(e);E(s)}}),[e,F.length,O]),g.useEffect((()=>{u&&"edit"===m&&L&&(()=>{if(L){const{isShipping:e,isBilling:s,isDefaultShipping:t,isDefaultBilling:a,state:i,stateCode:n,countryCode:d,extraFields:l}=L,o=r.filter((e=>e.countryCode===d));N({isShipping:1===e,isBilling:1===s,isDefaultShipping:1===t,isDefaultBilling:1===a}),B.forEach((e=>{const s=e;if(s.custom&&l.length>0)if(O){const e=X(s.name),t=l.find((s=>s.fieldName===e)),a=F.find((s=>s.name===e));t?(U(s.name,t.fieldValue||""),s.default=t.fieldValue||""):(U(s.name,""),s.default=a.default)}else{const e=l.find((e=>e.fieldName===s.name||e.fieldName===s.bcLabel)),t=F.filter((e=>e.name===s.name||e.bcLabel===s.bcLabel))[0];e?(U(s.name,e.fieldValue||""),s.default=e.fieldValue||t.default):(U(s.name,""),s.default=t.default)}else if("country"===s.name)U(s.name,d);else if("state"===s.name){if(U(s.name,n||i),o[0]){const{states:e}=o[0];e.length>0?(s.options=e,s.fieldType="dropdown"):(s.options=[],s.fieldType="text")}}else U(s.name,"undefined"===L[s.name]?"":L[s.name])}))}})()}),[L,B,r,O,u,F,U,m]),g.useEffect((()=>{const e=M(((e,{name:s,type:t})=>{const{country:a}=e;"country"===s&&"change"===t&&(e=>{const s=r.find((s=>s.countryCode===e))?.states||[],t=B.find((e=>"state"===e.name));t&&(s.length>0?(t.fieldType="dropdown",t.options=s):(t.fieldType="text",t.options=[])),U("state",""),A([...B])})(a)}));return()=>e.unsubscribe()}),[B,r,M]),a.jsxs(j,{isOpen:u,title:c("add"===m?"addresses.addressForm.addNewAddress":"addresses.addressForm.editAddress"),leftSizeBtn:c("addresses.addressForm.cancel"),rightSizeBtn:c("addresses.addressForm.saveAddress"),handleLeftClick:()=>{J(),N({isShipping:!1,isBilling:!1,isDefaultShipping:!1,isDefaultBilling:!1}),f(!1),C("")},handRightClick:()=>{O?R((async e=>{b(!0);try{if(!(await Y(e)))return;const s=I.map((s=>({fieldName:X(s.name),fieldValue:e[s.name]||s.default}))),{country:a,state:i}=e;let n="",l="",o=i;r.forEach((e=>{const{countryName:s,countryCode:t,states:d}=e;if(t===a)if(n=s,d.length>0){const e=d.find((e=>e.stateCode===o||e.stateName===o));l=e?.stateName||l,o=e?.stateCode||o}else o="",l=i}));const u={...e,companyId:+d,extraFields:s,isShipping:v.isShipping?1:0,isBilling:v.isBilling?1:0,isDefaultShipping:v.isDefaultShipping?1:0,isDefaultBilling:v.isDefaultBilling?1:0,country:n,countryCode:a,state:l,stateCode:o};if("add"===m)await T(u),S.success(c("addresses.addressForm.newAddressAdded"));else if("edit"===m&&L){const{id:e}=L;await z({...u,id:+e}),S.success(c("addresses.addressForm.addressUpdated"))}N({isShipping:!1,isBilling:!1,isDefaultShipping:!1,isDefaultBilling:!1}),f(!1),await t(!0)}catch(s){S.error(s)}finally{b(!1)}}))():R((async e=>{b(!0);try{const s=I.map((s=>({name:s.bcLabel,value:e[s.name]||s.default}))),{country:a,state:i}=e;let n="",d="",l=i;r.forEach((e=>{const{countryName:s,countryCode:t,states:r}=e;if(t===a)if(n=s,r.length>0){const e=r.find((e=>e.stateCode===l||e.stateName===l));d=e?.stateName||d,l=e?.stateCode||l}else l="",d=i}));const o={...e,formFields:s,country:n,countryCode:a,state:d,stateCode:l,addressType:""};if("add"===m)await V(o),S.success(c("addresses.addressForm.newAddressAdded"));else if("edit"===m&&L){const{bcAddressId:e}=L;e&&await _({...o,id:+e}),S.success(c("addresses.addressForm.addressUpdated"))}f(!1),await t(!0)}catch(s){S.error(s)}finally{b(!1)}}))()},loading:D,isShowBordered:!0,children:[O&&a.jsxs(a.Fragment,{children:[a.jsx("p",{children:c("addresses.addressForm.selectAddressType")}),a.jsx(s,{children:Z.map((e=>{const{child:s,name:t,idLang:d}=e;return console.log("name",t),a.jsxs("div",{children:[a.jsx(i,{control:a.jsx(n,{checked:v[t],onChange:e=>{((e,s)=>{N("isShipping"===s?{...v,[s]:e,isDefaultShipping:!1}:{...v,[s]:e,isDefaultBilling:!1})})(e.target.checked,t)}}),label:c(d)}),s&&a.jsx(i,{control:a.jsx(n,{checked:v[s.name],onChange:()=>{N({...v,[s.name]:!v[s.name]})}}),label:c(s.idLang),sx:{display:v[t]?"":"none"}})]},t)}))})]}),a.jsx(G,{formFields:B,errors:$,control:P,getValues:W,setValue:U})]})})),ne=te("div")((({marginBottom:e})=>({marginBottom:e,"& > span:not(:last-child)":{marginRight:"4px"}}))),de=te("div")((({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:e.spacing(3)})));function le(e){const{item:s,onEdit:t,onDelete:i,onSetDefault:n,editPermission:f,isBCPermission:g}=e,m=d(),h=p();return a.jsx(l,{children:a.jsxs(r,{sx:{color:"#313440",wordBreak:"break-word",minHeight:"400px",background:"#FAFAFA",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[s.label&&a.jsx(o,{variant:"h5",sx:{marginBottom:1===s.isDefaultShipping||1===s.isDefaultBilling?m.spacing(1):m.spacing(3),color:"#000000",fontWeight:"500"},children:s.label}),a.jsxs(ne,{marginBottom:1===s.isDefaultShipping||1===s.isDefaultBilling?m.spacing(3):0,children:[1===s.isDefaultShipping&&a.jsx(C,{color:"transparent",textColor:"#EA617C",padding:"0px 5px 5px 0px",children:h("addresses.addressItemCard.defaultShipping")}),1===s.isDefaultBilling&&a.jsx(C,{color:"transparent",textColor:"#EA617C",padding:"0px 5px 5px 0px",children:h("addresses.addressItemCard.defaultBilling")})]}),a.jsx(o,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:`${s.firstName} ${s.lastName}`}),a.jsx(o,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:s.company||""}),a.jsx(o,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:s.addressLine1}),a.jsx(o,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:"undefined"===s.addressLine2?"":s.addressLine2}),a.jsx(o,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:`${s.city}, ${s.state} ${s.zipCode}, ${s.country}`}),a.jsx(o,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:s.phoneNumber}),f&&a.jsxs(de,{children:[!g&&a.jsx(D,{variant:"text",sx:{ml:"-8px",background:"transparent !important",color:"#EA617C !important",textTransform:"uppercase !important",border:"none !important",padding:"10px !important",justifyContent:"flex-start"},onClick:()=>{n(s)},children:h("addresses.addressItemCard.setAsDefault")}),a.jsxs(c,{sx:{flex:1,display:"flex",justifyContent:"flex-end"},children:[a.jsx(u,{"aria-label":"edit",size:"small",sx:{marginRight:"8px"},onClick:()=>{t(s)},children:a.jsx(N,{fontSize:"inherit"})}),a.jsx(u,{"aria-label":"delete",size:"small",onClick:()=>{i(s)},children:a.jsx(ae,{fontSize:"inherit"})})]})]})]})},s.id)}function re(e){const{isOpen:s,setIsOpen:t,addressData:i,updateAddressList:n,setIsLoading:d,companyId:l,isBCPermission:r}=e,[o]=b(),u=p();return a.jsx(j,{isOpen:s,title:u("addresses.deleteAddressDialog.deleteAddress"),leftSizeBtn:u("addresses.deleteAddressDialog.cancel"),rightSizeBtn:u("addresses.deleteAddressDialog.delete"),handleLeftClick:()=>{t(!1)},handRightClick:async()=>{if(i)try{d(!0),t(!1);const{id:e="",bcAddressId:s=""}=i;r?await $({bcAddressId:s}):await W({addressId:e,companyId:l}),S.success(u("addresses.deleteAddressDialog.successfullyDeleted")),n()}catch(e){d(!1)}},rightStyleBtn:{color:"#D32F2F"},isShowBordered:!1,children:a.jsx(c,{sx:{display:"flex",alignItems:o?"start":"center",justifyContent:o?"center":"start",width:o?"100%":"450px",height:"100%"},children:u("addresses.deleteAddressDialog.confirmDelete")})})}function oe(e){const{isOpen:s,setIsOpen:t,setIsLoading:d,addressData:l,updateAddressList:r,companyId:o}=e,[u]=b(),m=p(),[h,y]=g.useState();g.useEffect((()=>{y(l)}),[l]);const x=e=>s=>{const{checked:t}=s.target;if(h){const s={...h};"isDefaultShipping"===e&&(s.isDefaultShipping=t?1:0,s.isShipping=t?1:s.isShipping),"isDefaultBilling"===e&&(s.isDefaultBilling=t?1:0,s.isBilling=t?1:s.isShipping),y(s)}};return a.jsx(j,{isOpen:s,title:m("addresses.setDefaultDialog.setDefaultAddress"),leftSizeBtn:m("addresses.setDefaultDialog.cancel"),rightSizeBtn:"set",handleLeftClick:()=>{t(!1)},handRightClick:async()=>{try{d(!0),t(!1),await z({...h,companyId:o}),S.success(m("addresses.setDefaultDialog.successfullySet")),r()}catch(e){d(!1)}},children:a.jsx(c,{sx:{display:"flex",alignItems:u?"start":"center",justifyContent:u?"center%":"start",width:u?"100%":"450px",height:"100%"},children:h&&a.jsx(c,{sx:{padding:u?"0":"10px 0"},children:a.jsxs(f,{children:[a.jsx(i,{control:a.jsx(n,{checked:1===h.isDefaultShipping,onChange:x("isDefaultShipping")}),label:m("addresses.setDefaultDialog.setDefaultShippingAddress")}),a.jsx(i,{control:a.jsx(n,{checked:1===h.isDefaultBilling,onChange:x("isDefaultBilling")}),label:m("addresses.setDefaultDialog.setDefaultBillingAddress")})]})})})})}const ce=async()=>{try{const e=(e=>{if(0===e.length)return[];const s=e.filter((e=>e.visibleToEnduser))||[];if(0===s?.length)return[];const t=s.map((e=>({...e,groupId:4,visible:e.visibleToEnduser}))),a=Y(t).address;return a.map((e=>(e.custom=!0,e))),a})((await M()).addressExtraFields);return[...Q,...e]}catch(e){R.error(e)}return[]},ue=async(e,s)=>{let t=[];try{if(e){const e=await ce();e&&(t=e)}else t=await(async()=>{try{const{accountFormFields:e}=await B(1),s=e.filter((e=>4===e.groupId));return Y(s).address}catch(e){R.error(e)}})();return t.map((e=>{const t=e;return"country"===e.name&&(t.options=s),"state"===e.name&&(t.fieldType="text"),e})),t}catch(a){R.error(a)}return[]}}}}));
