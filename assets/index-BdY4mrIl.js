import{j as n,K as se,ab as te,T as Y,B as H,q as X}from"./mui-CyG7s_nf.js";import{r as i}from"./reactVendor-BAhb8EbJ.js";import{u as K}from"./lang-DxTEvHWx.js";import{u as M,_ as Q,az as D,a5 as W,a6 as ae,a9 as ne,a as re,aa as le,R as oe,a2 as ie,ab as de}from"./react-setup-BXoEAsM4.js";import{B as ce}from"./B3Filter-DxbrCM_0.js";import"../index.CIyF7Vyw.js";import{d as ue,u as me,a as fe}from"./EditOutlined-lj0ThnwJ.js";import{g as pe,b as xe,a as ge,d as he,e as ye}from"./users-BJQhOjDX.js";import{u as be}from"./form-Bvi8lP6x.js";import{f as Re}from"./lodashEs-Ck10JMnh.js";import{B as Ee}from"./B3CustomForm-OSVXs3i_.js";import{b as Ce}from"./b3Logger-CMQiGC3f.js";import{n as Ie}from"./eStyled-B3rIBjaz.js";import{d as Fe}from"./DeleteOutlined-TNX8_wib.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./B3FilterMore-CGYdGuBT.js";import"./B3FilterSearch-C4ApMTKJ.js";const Ue=()=>[{label:"Admin",name:"Admin",value:0,idLang:"userManagement.userRole.admin"},{label:"Senior buyer",name:"Senior Buyer",value:1,idLang:"userManagement.userRole.seniorBuyer"},{label:"Junior buyer",name:"Junior Buyer",value:2,idLang:"userManagement.userRole.juniorBuyer"}],Z=d=>[{name:"companyRoleId",label:d("userManagement.config.userRole"),required:!1,default:"",defaultName:"",fieldType:"roleAutocomplete",xs:12,disabled:!1,variant:"outlined",size:"small"}],Ne=(d,t,l=!1)=>{const c=Z(t);return c[0].required=!0,c[0].disabled=l,[...c,{name:"email",label:t("userManagement.config.email"),required:!0,fieldType:"text",xs:12,disabled:d==="edit",default:"",variant:"outlined",size:"small"},{name:"firstName",label:t("userManagement.config.firstName"),required:!0,default:"",fieldType:"text",xs:6,variant:"outlined",size:"small"},{name:"lastName",label:t("userManagement.config.lastName"),required:!0,fieldType:"text",xs:6,default:"",variant:"outlined",size:"small"},{name:"phone",label:t("userManagement.config.phoneNumber"),required:!1,fieldType:"text",xs:12,default:"",variant:"outlined",size:"small"}]},Se={3:"global.emailValidate.multipleCustomer",4:"global.emailValidate.companyUsed",5:"global.emailValidate.alreadyExits",6:"global.emailValidate.usedSuperAdmin"},Be={0:"text",1:"multiline",2:"number",3:"dropdown"},Le=d=>d.map(l=>{const{listOfValue:c}=l,p=Be[l.fieldType],x={isExtraFields:!0,name:l.fieldName,label:l.labelName,required:l.isRequired,default:l.defaultValue||"",fieldType:p,xs:12,variant:"outlined",size:"small"};switch(p){case"dropdown":if(c){const r=c==null?void 0:c.map(y=>({label:y,value:y}));r.length>0&&(x.options=r)}break;case"number":x.max=l.maximumValue||"";break;case"mutiline":x.rows=l.numberOfRows||"";break;default:x.maxLength=l.maximumLength||"";break}return x}),we=async()=>{let d=[];try{const{userExtraFields:t}=await pe(),l=t.filter(p=>p.visibleToEnduser);d=Le(l)}catch(t){Ce.error(t)}return d};function Me({companyId:d,renderList:t},l){const c=M(({company:s})=>s.customer.b2bId),[p,x]=i.useState(!1),[r,y]=i.useState(""),[b,m]=i.useState(null),[S,C]=i.useState(!1),[I,O]=i.useState([]),[F,B]=i.useState([]),g=K(),{control:q,handleSubmit:z,getValues:T,formState:{errors:E},clearErrors:j,setValue:U,setError:k}=be({mode:"onSubmit"}),P=async()=>{const s=await we();B(s)};i.useEffect(()=>{F.length===0&&P()},[F.length]);const L=s=>{const a=Object.keys(s),u=[];return F.forEach(f=>{if(a.includes(f.name)){const R={fieldName:f.name||"",fieldValue:s[f.name]||""};u.push(R)}}),u};i.useEffect(()=>{if(p){const s=I.map(a=>{const u=a;return r==="edit"&&b&&U(a.name,b[a.name]),u});O(s)}},[b,p,r]);const A=()=>{I.forEach(s=>{U(s.name,""),s.isExtraFields&&U(s.name,s.default||"")}),j(),x(!1)},v=async s=>{const{userType:a,userInfo:{companyName:u}}=await ge({email:s,companyId:d,channelId:ae}),f=[D.DOESNT_EXIST,D.B2C,D.CURRENT_B2B_COMPANY_DIFFERENT_CHANNEL].includes(a);return f||k("email",{type:"custom",message:g(Se[a],{companyName:u?"(".concat(u,")"):"",email:s})}),{isValid:f,userType:a}},V=()=>{z(async s=>{C(!0);const a=L(s);let u=g("userManagement.addUserSuccessfully");try{const f={companyId:d,companyRoleId:+s.companyRoleId,...s,extraFields:a};if(r!=="edit"){const{isValid:R,userType:N}=await v(s.email);if(!R){C(!1);return}N===D.CURRENT_B2B_COMPANY_DIFFERENT_CHANNEL&&(f.addChannel=!0,u=g("userManagement.userDetected",{email:s.email}))}r==="edit"&&(f.userId=(b==null?void 0:b.id)||"",u=g("userManagement.updateUserSuccessfully"),delete f.email),await xe(f),A(),W.success(u),t()}finally{C(!1)}})()},_=(s,a)=>{const u=Ne(s,g,s==="edit"?c===+a.id:!1);if(s==="edit"){const R=a.extraFields||[];let N=a;if(R&&R.length>0){const e={};R.forEach(o=>{e[o.fieldName]=o.fieldValue}),N={...a,...e}}m(N);const w=u.find(e=>e.name==="companyRoleId")||null;w&&(w.defaultName=(a==null?void 0:a.companyRoleName)||"",w.default=(a==null?void 0:a.companyRoleId)||"")}const f=Re(u,F);O(f),y(s),x(!0)};return i.useImperativeHandle(l,()=>({handleOpenAddEditUserClick:_})),n.jsx(Q,{isOpen:p,title:"".concat(g(r==="edit"?"userManagement.editUser":"userManagement.addNewUser")),leftSizeBtn:g("userManagement.cancel"),rightSizeBtn:g("userManagement.saveUser"),handleLeftClick:A,handRightClick:V,loading:S,isShowBordered:!0,children:n.jsx(Ee,{formFields:I,errors:E,control:q,getValues:T,setValue:U,type:r})})}const Te=i.forwardRef(Me),je=Ie("div")(()=>({display:"flex",alignItems:"center",justifyContent:"space-between"}));function ke(d){const{item:t,onEdit:l,onDelete:c,isPermissions:p}=d,x=()=>Ue().map(m=>+m.value==2?t.companyRoleName!=="Junior Buyer"?{color:"#ce93d8",textColor:"black",...m,label:t.companyRoleName,name:t.companyRoleName}:{color:"#D9DCE9",textColor:"black",...m}:+m.value==1?{color:"rgba(237, 108, 2, 0.3)",textColor:"black",...m}:{color:"#EA617C",textColor:"white",...m}),r=y=>{const m=x().find(S=>S.name===y);return m?n.jsx(ne,{color:m.color,textColor:m.textColor,children:m.label}):null};return n.jsx(se,{children:n.jsxs(te,{sx:{color:"#313440"},children:[n.jsxs(Y,{variant:"h5",sx:{color:"rgba(0, 0, 0, 0.87)"},children:[t.firstName," ",t.lastName]}),n.jsx(Y,{sx:{p:"15px 0"},variant:"body1",children:t.email}),n.jsxs(je,{children:[r(t.companyRoleName),n.jsxs(H,{sx:{display:"".concat(p?"block":"none")},children:[n.jsx(X,{"aria-label":"edit",size:"small",sx:{marginRight:"8px"},onClick:()=>{l(t)},children:n.jsx(ue,{fontSize:"inherit"})}),n.jsx(X,{"aria-label":"delete",size:"small",onClick:()=>{c(t)},children:n.jsx(Fe,{fontSize:"inherit"})})]})]})]})},t.id)}function ls(){const[d,t]=i.useState(!1),[l,c]=i.useState(!1),[p,x]=i.useState({createdAt:0,email:"",firstName:"",id:"",lastName:"",phone:"",role:0,updatedAt:0,extraFields:[],companyRoleName:"",companyRoleId:""}),r=K(),[y]=re(),b=me(),m=M(({b2bFeatures:e})=>e.masqueradeCompany.id),S=M(({company:e})=>e.customer.role),C=M(({company:e})=>e.companyInfo),I=+S===le.SUPER_ADMIN?m:C==null?void 0:C.id,F=M(oe).userActionsPermission,B=i.useRef(null),[g]=fe(),q={isEnabled:F,customLabel:r("userManagement.addUser")},z={search:"",companyRoleId:"",companyId:I},T=Z(r),[E,j]=i.useState(z),[U,k]=i.useState(T),[P,L]=i.useState(""),A=async e=>{const o=await he(e),{users:{edges:h,totalCount:$}}=o;return{edges:h,totalCount:$}},v=()=>{var e;(e=g.current)==null||e.refresh()},V=()=>{const e=T.map(o=>{var J;const h=o,$=(J=o.options)==null?void 0:J.map(G=>{const ee=G;return ee.label=r(G.idLang),G});return h.options=$,h.setValueName=L,h.default=E.companyRoleId,h.defaultName=E.companyRoleId?P:"",o});return k(e),e},_=(e,o)=>{const h={...E,q:o};j(h)},s=e=>{const o={...E,companyRoleId:e.companyRoleId,offset:0};j(o)},a=()=>{var e;(e=B.current)==null||e.handleOpenAddEditUserClick("add")},u=e=>{var o;(o=B.current)==null||o.handleOpenAddEditUserClick("edit",e)},f=e=>{x(e),c(!0)},R=()=>{c(!1)},N=async e=>{if(e)try{t(!0),R(),await ye({userId:e.id||"",companyId:I}),W.success(r("userManagement.deleteUserSuccessfully"))}finally{t(!1),v()}},w=()=>{const e=U.map(o=>{const h=o;return h.setValueName=L,h.defaultName="",o});L(""),k(e)};return i.useEffect(()=>{V()},[E,E.companyRoleId]),n.jsx(ie,{isSpinning:d,children:n.jsxs(H,{sx:{display:"flex",flexDirection:"column",flex:1},children:[n.jsx(ce,{fiterMoreInfo:U,handleChange:_,handleFilterChange:s,customButtomConfig:q,handleFilterCustomButtomClick:a,resetFilterInfo:w}),n.jsx(de,{ref:g,columnItems:[],rowsPerPageOptions:[12,24,36],getRequestList:A,searchParams:E||{},isCustomRender:!0,itemXs:b?3:4,requestLoading:t,renderItem:e=>n.jsx(ke,{item:e,isPermissions:F,onEdit:u,onDelete:f},e.id||"")}),n.jsx(Te,{companyId:I,renderList:v,ref:B}),n.jsx(Q,{isOpen:l,title:r("userManagement.deleteUser"),leftSizeBtn:r("userManagement.cancel"),rightSizeBtn:r("userManagement.delete"),handleLeftClick:R,handRightClick:N,row:p,rightStyleBtn:{color:"#D32F2F"},isShowBordered:!1,children:n.jsx(H,{sx:{display:"flex",justifyContent:"".concat(y?"center%":"start"),width:"".concat(y?"100%":"450px"),height:"100%"},children:r("userManagement.confirmDelete")})})]})})}export{ls as default};
