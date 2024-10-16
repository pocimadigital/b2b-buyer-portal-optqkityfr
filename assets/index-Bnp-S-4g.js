import{s as Be,j as s,w as ae,x as ie,y as Ae,K as Se,ab as De,T as _,B as H,q as me,ac as be}from"./mui-CyG7s_nf.js";import{r as f}from"./reactVendor-BAhb8EbJ.js";import{u as X}from"./lang-DxTEvHWx.js";import{B as Fe}from"./B3Filter-dSgMFcTq.js";import{B as je,a7 as Ee,a8 as Le,_ as pe,a5 as w,a9 as ge,a3 as Ie,a as he,a4 as we,u as M,p as ke,G as ve,R as Ne,aa as ue,a2 as Te,ab as Re,ac as Oe}from"./react-setup-5BSR6wiC.js";import"../index.BYZwzzkf.js";import{d as Pe,u as $e,a as ze}from"./EditOutlined-C4sHGy7k.js";import{b as K}from"./b3Logger-CMQiGC3f.js";import{c as Ue,u as xe,a as _e,b as qe,d as Ve,e as Me,g as We,f as Ge,h as Je,i as He}from"./address-ns5gJMIj.js";import{u as Ke}from"./form-Bvi8lP6x.js";import{c as Xe}from"./lodashEs-Ck10JMnh.js";import{B as Qe}from"./B3CustomForm-BzcTvd60.js";import{d as te,g as ye}from"./config-D1ddP4Cf.js";import{b as Ye,a as Ze,f as es,c as ss}from"./config-BL938AdE.js";import{n as Ce}from"./eStyled-B3rIBjaz.js";import{d as ts}from"./DeleteOutlined-ByNOYO2A.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./B3FilterMore-Cz5ju5EO.js";import"./dateFns-BB2kaHor.js";import"./B3FilterSearch-D15sWUei.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dropzone-D4lSiSJA.js";import"./validatorRules-SFapG1La.js";const as=r=>je.post("/api/v2/extra-fields/address/validate",Ee.B2BRest,{...r,storeHash:Le}),is=Be("div")(()=>({display:"flex","& div::first-of-type":{marginRight:"2rem"},"& div":{minWidth:"45%",display:"flex",flexDirection:"column"}}));function ns({addressFields:r,updateAddressList:t,companyId:m,isBCPermission:c,countries:l},j){const y=X(),[A,g]=f.useState(!1),[h,R]=f.useState(""),[k,v]=f.useState(!1),[S,q]=f.useState(r),[N,T]=f.useState([]),[O,W]=f.useState([]),[E,V]=f.useState(null),[F,D]=f.useState({isShipping:!1,isBilling:!1,isDefaultShipping:!1,isDefaultBilling:!1}),$=!c,{control:ne,handleSubmit:Q,getValues:G,formState:{errors:z},watch:J,setError:re,setValue:L,reset:Y}=Ke({mode:"all"}),Z=async u=>{var d;try{const e=N.map(i=>({fieldName:te(i.name),fieldValue:u[i.name]||i.default})),a=await as({extraFields:e});if(a.code!==200){const i=((d=a.data)==null?void 0:d.errMsg)||a.message||"",n=i.split(":");if(n.length>=2){const p=N.find(B=>te(B.name)===n[0]);if(p)return re(p.name,{type:"manual",message:n[1]}),v(!1),!1}throw i}return!0}catch(e){throw w.error(e),e}},ee=()=>{Y(),D({isShipping:!1,isBilling:!1,isDefaultShipping:!1,isDefaultBilling:!1}),g(!1),R("")},se=()=>{Q(async u=>{v(!0);try{if(!await Z(u))return;const e=N.map(I=>({fieldName:te(I.name),fieldValue:u[I.name]||I.default})),{country:a,state:i}=u;let n="",p="",B=i;l.forEach(I=>{const{countryName:U,countryCode:o,states:C}=I;if(o===a)if(n=U,C.length>0){const b=C.find(P=>P.stateCode===B||P.stateName===B);p=(b==null?void 0:b.stateName)||p,B=(b==null?void 0:b.stateCode)||B}else B="",p=i});const x={...u,companyId:+m,extraFields:e,isShipping:F.isShipping?1:0,isBilling:F.isBilling?1:0,isDefaultShipping:F.isDefaultShipping?1:0,isDefaultBilling:F.isDefaultBilling?1:0,country:n,countryCode:a,state:p,stateCode:B};if(h==="add")await Ue(x),w.success(y("addresses.addressForm.newAddressAdded"));else if(h==="edit"&&E){const{id:I}=E;await xe({...x,id:+I}),w.success(y("addresses.addressForm.addressUpdated"))}D({isShipping:!1,isBilling:!1,isDefaultShipping:!1,isDefaultBilling:!1}),g(!1),await t(!0)}catch(d){w.error(d)}finally{v(!1)}})()},de=()=>{Q(async u=>{v(!0);try{const d=N.map(x=>({name:x.bcLabel,value:u[x.name]||x.default})),{country:e,state:a}=u;let i="",n="",p=a;l.forEach(x=>{const{countryName:I,countryCode:U,states:o}=x;if(U===e)if(i=I,o.length>0){const C=o.find(b=>b.stateCode===p||b.stateName===p);n=(C==null?void 0:C.stateName)||n,p=(C==null?void 0:C.stateCode)||p}else p="",n=a});const B={...u,formFields:d,country:i,countryCode:e,state:n,stateCode:p,addressType:""};if(h==="add")await _e(B),w.success(y("addresses.addressForm.newAddressAdded"));else if(h==="edit"&&E){const{bcAddressId:x}=E;x&&await qe({...B,id:+x}),w.success(y("addresses.addressForm.addressUpdated"))}g(!1),await t(!0)}catch(d){w.error(d)}finally{v(!1)}})()},oe=()=>{$?se():de()},le=(u,d)=>{u==="add"&&O.length>0&&S.forEach(e=>{const a=e;if(e.custom)if($){const i=O.filter(n=>n.name===e.name)[0];a.default=i.default||""}else{const i=O.filter(n=>n.name===e.name||n.bcLabel===e.bcLabel)[0];a.default=i.default||""}}),Y(),V(d),R(u),g(!0)};f.useImperativeHandle(j,()=>({handleOpenAddEditAddressClick:le}));const ce=(u,d)=>{D(d==="isShipping"?{...F,[d]:u,isDefaultShipping:!1}:{...F,[d]:u,isDefaultBilling:!1})};return f.useEffect(()=>{const u=JSON.parse(JSON.stringify(r));u.forEach(e=>{const a=e;return a.label=y(e.idLang)||e.label,!$&&e.fieldId==="field_21"&&(a.default=""),e}),q(u);const d=r.filter(e=>e.custom);if(T(d),O.length===0){const e=Xe(r);W(e)}},[r,O.length,$]),f.useEffect(()=>{A&&h==="edit"&&E&&(()=>{if(E){const{isShipping:d,isBilling:e,isDefaultShipping:a,isDefaultBilling:i,state:n,stateCode:p,countryCode:B,extraFields:x}=E,I=l.filter(U=>U.countryCode===B);D({isShipping:d===1,isBilling:e===1,isDefaultShipping:a===1,isDefaultBilling:i===1}),S.forEach(U=>{const o=U;if(o.custom&&x.length>0)if($){const C=te(o.name),b=x.find(fe=>fe.fieldName===C),P=O.find(fe=>fe.name===C);b?(L(o.name,b.fieldValue||""),o.default=b.fieldValue||""):(L(o.name,""),o.default=P.default)}else{const C=x.find(P=>P.fieldName===o.name||P.fieldName===o.bcLabel),b=O.filter(P=>P.name===o.name||P.bcLabel===o.bcLabel)[0];C?(L(o.name,C.fieldValue||""),o.default=C.fieldValue||b.default):(L(o.name,""),o.default=b.default)}else if(o.name==="country")L(o.name,B);else if(o.name==="state"){if(L(o.name,p||n),I[0]){const{states:C}=I[0];C.length>0?(o.options=C,o.fieldType="dropdown"):(o.options=[],o.fieldType="text")}}else L(o.name,E[o.name]==="undefined"?"":E[o.name])})}})()},[E,S,l,$,A,O,L,h]),f.useEffect(()=>{const u=e=>{var n;const a=((n=l.find(p=>p.countryCode===e))==null?void 0:n.states)||[],i=S.find(p=>p.name==="state");i&&(a.length>0?(i.fieldType="dropdown",i.options=a):(i.fieldType="text",i.options=[])),L("state",""),q([...S])},d=J((e,{name:a,type:i})=>{const{country:n}=e;a==="country"&&i==="change"&&u(n)});return()=>d.unsubscribe()},[S,l,J]),s.jsxs(pe,{isOpen:A,title:y(h==="add"?"addresses.addressForm.addNewAddress":"addresses.addressForm.editAddress"),leftSizeBtn:y("addresses.addressForm.cancel"),rightSizeBtn:y("addresses.addressForm.saveAddress"),handleLeftClick:ee,handRightClick:oe,loading:k,isShowBordered:!0,children:[$&&s.jsxs(s.Fragment,{children:[s.jsx("p",{children:y("addresses.addressForm.selectAddressType")}),s.jsx(is,{children:Ye.map(u=>{const{child:d,name:e,idLang:a}=u;return s.jsxs("div",{children:[s.jsx(ae,{control:s.jsx(ie,{checked:F[e],onChange:i=>{ce(i.target.checked,e)}}),label:y(a)}),d&&s.jsx(ae,{control:s.jsx(ie,{checked:F[d.name],onChange:()=>{D({...F,[d.name]:!F[d.name]})}}),label:y(d.idLang),sx:{display:F[e]?"":"none"}})]},e)})})]}),s.jsx(Qe,{formFields:S,errors:z,control:ne,getValues:G,setValue:L})]})}const rs=f.forwardRef(ns),ds=Ce("div")(({marginBottom:r})=>({marginBottom:r,"& > span:not(:last-child)":{marginRight:"4px"}})),os=Ce("div")(({theme:r})=>({display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:r.spacing(3)}));function ls(r){const{item:t,onEdit:m,onDelete:c,onSetDefault:l,editPermission:j,isBCPermission:y}=r,A=Ae(),g=X();return s.jsx(Se,{children:s.jsxs(De,{sx:{color:"#313440",wordBreak:"break-word",minHeight:"400px",background:"#FAFAFA",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[t.label&&s.jsx(_,{variant:"h5",sx:{marginBottom:t.isDefaultShipping===1||t.isDefaultBilling===1?A.spacing(1):A.spacing(3),color:"#000000",fontWeight:"500"},children:t.label}),s.jsxs(ds,{marginBottom:t.isDefaultShipping===1||t.isDefaultBilling===1?A.spacing(3):0,children:[t.isDefaultShipping===1&&s.jsx(ge,{color:"transparent",textColor:"#EA617C",padding:"0px 5px 5px 0px",children:g("addresses.addressItemCard.defaultShipping")}),t.isDefaultBilling===1&&s.jsx(ge,{color:"transparent",textColor:"#EA617C",padding:"0px 5px 5px 0px",children:g("addresses.addressItemCard.defaultBilling")})]}),s.jsx(_,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:"".concat(t.firstName," ").concat(t.lastName)}),s.jsx(_,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:t.company||""}),s.jsx(_,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:t.addressLine1}),s.jsx(_,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:t.addressLine2==="undefined"?"":t.addressLine2}),s.jsx(_,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:"".concat(t.city,", ").concat(t.state," ").concat(t.zipCode,", ").concat(t.country)}),s.jsx(_,{sx:{color:"#000000",fontWeight:"500"},variant:"body1",children:t.phoneNumber}),j&&s.jsxs(os,{children:[!y&&s.jsx(Ie,{variant:"text",sx:{ml:"-8px",background:"transparent !important",color:"#EA617C !important",textTransform:"uppercase !important",border:"none !important",padding:"10px !important",justifyContent:"flex-start"},onClick:()=>{l(t)},children:g("addresses.addressItemCard.setAsDefault")}),s.jsxs(H,{sx:{flex:1,display:"flex",justifyContent:"flex-end"},children:[s.jsx(me,{"aria-label":"edit",size:"small",sx:{marginRight:"8px"},onClick:()=>{m(t)},children:s.jsx(Pe,{fontSize:"inherit"})}),s.jsx(me,{"aria-label":"delete",size:"small",onClick:()=>{c(t)},children:s.jsx(ts,{fontSize:"inherit"})})]})]})]})},t.id)}function cs(r){const{isOpen:t,setIsOpen:m,addressData:c,updateAddressList:l,setIsLoading:j,companyId:y,isBCPermission:A}=r,[g]=he(),h=X(),R=async()=>{if(c)try{j(!0),m(!1);const{id:k="",bcAddressId:v=""}=c;A?await Me({bcAddressId:v}):await Ve({addressId:k,companyId:y}),w.success(h("addresses.deleteAddressDialog.successfullyDeleted")),l()}catch(k){j(!1)}};return s.jsx(pe,{isOpen:t,title:h("addresses.deleteAddressDialog.deleteAddress"),leftSizeBtn:h("addresses.deleteAddressDialog.cancel"),rightSizeBtn:h("addresses.deleteAddressDialog.delete"),handleLeftClick:()=>{m(!1)},handRightClick:R,rightStyleBtn:{color:"#D32F2F"},isShowBordered:!1,children:s.jsx(H,{sx:{display:"flex",alignItems:"".concat(g?"start":"center"),justifyContent:"".concat(g?"center":"start"),width:"".concat(g?"100%":"450px"),height:"100%"},children:h("addresses.deleteAddressDialog.confirmDelete")})})}function fs(r){const{isOpen:t,setIsOpen:m,setIsLoading:c,addressData:l,updateAddressList:j,companyId:y}=r,[A]=he(),g=X(),[h,R]=f.useState();f.useEffect(()=>{R(l)},[l]);const k=S=>q=>{const{checked:N}=q.target;if(h){const T={...h};S==="isDefaultShipping"&&(T.isDefaultShipping=N?1:0,T.isShipping=N?1:T.isShipping),S==="isDefaultBilling"&&(T.isDefaultBilling=N?1:0,T.isBilling=N?1:T.isShipping),R(T)}},v=async()=>{try{c(!0),m(!1),await xe({...h,companyId:y}),w.success(g("addresses.setDefaultDialog.successfullySet")),j()}catch(S){c(!1)}};return s.jsx(pe,{isOpen:t,title:g("addresses.setDefaultDialog.setDefaultAddress"),leftSizeBtn:g("addresses.setDefaultDialog.cancel"),rightSizeBtn:"set",handleLeftClick:()=>{m(!1)},handRightClick:v,children:s.jsx(H,{sx:{display:"flex",alignItems:"".concat(A?"start":"center"),justifyContent:"".concat(A?"center%":"start"),width:"".concat(A?"100%":"450px"),height:"100%"},children:h&&s.jsx(H,{sx:{padding:A?"0":"10px 0"},children:s.jsxs(be,{children:[s.jsx(ae,{control:s.jsx(ie,{checked:h.isDefaultShipping===1,onChange:k("isDefaultShipping")}),label:g("addresses.setDefaultDialog.setDefaultShippingAddress")}),s.jsx(ae,{control:s.jsx(ie,{checked:h.isDefaultBilling===1,onChange:k("isDefaultBilling")}),label:g("addresses.setDefaultDialog.setDefaultBillingAddress")})]})})})})}const us=r=>{if(r.length===0)return[];const t=r.filter(l=>l.visibleToEnduser)||[];if((t==null?void 0:t.length)===0)return[];const m=t.map(l=>({...l,groupId:4,visible:l.visibleToEnduser})),c=ye(m).address;return c.map(l=>{const j=l;return j.custom=!0,l}),c},ps=async()=>{try{const{accountFormFields:r}=await we(1),t=r.filter(c=>c.groupId===4);return ye(t).address}catch(r){K.error(r)}},ms=async()=>{try{const r=await We(),t=us(r.addressExtraFields);return[...Ze,...t]}catch(r){K.error(r)}return[]},gs=async(r,t)=>{let m=[];try{if(r){const c=await ms();c&&(m=c)}else m=await ps();return m.map(c=>{const l=c;return c.name==="country"&&(l.options=t),c.name==="state"&&(l.fieldType="text"),c}),m}catch(c){K.error(c)}return[]};function Ms(){const r=M(ke),t=M(({company:e})=>e.companyInfo.id),m=M(({company:e})=>e.customer.role),c=M(({b2bFeatures:e})=>e.masqueradeCompany.id),l=M(({b2bFeatures:e})=>e.masqueradeCompany.isAgenting),{state:{addressConfig:j},dispatch:y}=f.useContext(ve),{addressesActionsPermission:A}=M(Ne),g=X(),h=$e(),[R]=ze(),k=f.useRef(null),[v,S]=f.useState(!1),[q,N]=f.useState([]),[T,O]=f.useState([]),[W,E]=f.useState({search:""}),V=m===ue.SUPER_ADMIN&&l?c:t;let F=!1,D=!1;r&&(!m||m===ue.SUPER_ADMIN&&l)&&(F=!0),(!r||m===ue.SUPER_ADMIN&&!l)&&(D=!0),f.useEffect(()=>{(async()=>{const{countries:a}=await Oe();O(a),S(!0);try{const i=await gs(!D,a);N(i||[])}catch(i){K.error(i)}finally{S(!1)}})()},[]);const $=async(e={})=>{let a=[],i=0;if(D){const{customerAddresses:{edges:n=[],totalCount:p}}=await Je({...e});a=n.map(B=>({node:ss(B.node)})),i=p}else{const{addresses:{edges:n=[],totalCount:p}}=await Ge({companyId:V,...e});a=n,i=p}return{edges:a,totalCount:i}},ne=(e,a)=>{e==="search"&&E({...W,search:a})},Q=e=>{E({...W,country:e.country||"",state:e.state||"",city:e.city||""})},G=()=>{var e;(e=R.current)==null||e.refresh()},[z,J]=f.useState(r?A:!1),[re,L]=f.useState(!1),[Y,Z]=f.useState(!1),[ee,se]=f.useState();f.useEffect(()=>{(async()=>{var a,i;if(D){J(!0);return}if(F)try{let n=j;if(!n){const{addressConfig:x}=await He();n=x,y({type:"common",payload:{addressConfig:n}})}const p=m===3?"address_sales_rep":"address_admin",B=((a=(n||[]).find(x=>x.key==="address_book"))==null?void 0:a.isEnabled)==="1"&&((i=(n||[]).find(x=>x.key===p))==null?void 0:i.isEnabled)==="1"&&A;J(B)}catch(n){K.error(n)}})()},[j,F,D,m]);const de=()=>{var e;if(!z){w.error(g("addresses.noPermissionToAdd"));return}(e=k.current)==null||e.handleOpenAddEditAddressClick("add")},oe=e=>{var a;if(!z){w.error(g("addresses.noPermissionToEdit"));return}(a=k.current)==null||a.handleOpenAddEditAddressClick("edit",e)},le=e=>{if(!z){w.error(g("addresses.noPermissionToEdit"));return}se({...e}),Z(!0)},ce=e=>{se({...e}),L(!0)},u={isEnabled:z,customLabel:g("addresses.addNewAddress")},d=JSON.parse(JSON.stringify(es));return d.map(e=>{const a=e;return a.label=g(e.idLang),e}),s.jsx(Te,{isSpinning:v,children:s.jsxs(H,{sx:{display:"flex",flexDirection:"column",flex:1},children:[s.jsx(Fe,{fiterMoreInfo:d,handleChange:ne,handleFilterChange:Q,customButtomConfig:u,handleFilterCustomButtomClick:de}),s.jsx(Re,{ref:R,columnItems:[],rowsPerPageOptions:[12,24,36],getRequestList:$,searchParams:W,isCustomRender:!0,itemXs:h?3:4,requestLoading:S,tableKey:"id",renderItem:e=>s.jsx(ls,{item:e,onEdit:()=>oe(e),onDelete:le,onSetDefault:ce,editPermission:z,isBCPermission:D},e.id)}),s.jsx(rs,{updateAddressList:G,addressFields:q,ref:k,companyId:V,isBCPermission:D,countries:T}),z&&!D&&s.jsx(fs,{isOpen:re,setIsOpen:L,setIsLoading:S,addressData:ee,updateAddressList:G,companyId:V}),z&&s.jsx(cs,{isOpen:Y,setIsOpen:Z,setIsLoading:S,addressData:ee,updateAddressList:G,companyId:V,isBCPermission:D})]})})}export{Ms as default};
