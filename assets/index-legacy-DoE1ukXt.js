System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-DZzlZWvn.js","./B3Filter-legacy-DYb551oY.js","../index-legacy.Oph0CwYp.js","./EditOutlined-legacy-Bvuy0KzV.js","./users-legacy-B-8U4Kyk.js","./form-legacy-CAo5v63e.js","./lodashEs-legacy-Da1qF4L1.js","./B3CustomForm-legacy-CQAeTWfZ.js","./b3Logger-legacy-C5y5ZQF8.js","./eStyled-legacy-C5ZTaXoz.js","./DeleteOutlined-legacy-DSGQdo83.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./dateFns-legacy-DDX5L0UR.js","./dropzone-legacy-Q3dhxZki.js","./B3FilterMore-legacy-BAhegRQ3.js","./B3FilterSearch-legacy-BH_FiGu1.js"],(function(e,a){"use strict";var l,t,n,s,r,i,o,d,u,c,m,f,y,g,p,x,h,b,j,N,R,C,S,I,E,B,M,F,w,v,k,T,V,z;return{setters:[e=>{l=e.j,t=e.K,n=e.ab,s=e.T,r=e.B,i=e.q},e=>{o=e.r},e=>{d=e.u},e=>{u=e.u,c=e._,m=e.az,f=e.a5,y=e.a6,g=e.a9,p=e.a,x=e.aa,h=e.R,b=e.a2,j=e.ab},e=>{N=e.B},null,e=>{R=e.d,C=e.u,S=e.a},e=>{I=e.g,E=e.b,B=e.a,M=e.d,F=e.e},e=>{w=e.u},e=>{v=e.f},e=>{k=e.B},e=>{T=e.b},e=>{V=e.n},e=>{z=e.d},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const[e,a]=o.useState(!1),[t,n]=o.useState(!1),[s,i]=o.useState({createdAt:0,email:"",firstName:"",id:"",lastName:"",phone:"",role:0,updatedAt:0,extraFields:[],companyRoleName:"",companyRoleId:""}),m=d(),[y]=p(),g=C(),R=u((({b2bFeatures:e})=>e.masqueradeCompany.id)),I=u((({company:e})=>e.customer.role)),E=u((({company:e})=>e.companyInfo)),B=+I===x.SUPER_ADMIN?R:E?.id,w=u(h).userActionsPermission,v=o.useRef(null),[k]=S(),T={isEnabled:w,customLabel:m("userManagement.addUser")},V={search:"",companyRoleId:"",companyId:B},z=A(m),[L,U]=o.useState(V),[O,D]=o.useState(z),[P,H]=o.useState(""),J=()=>{k.current?.refresh()},X=e=>{v.current?.handleOpenAddEditUserClick("edit",e)},$=e=>{i(e),n(!0)},Y=()=>{n(!1)};return o.useEffect((()=>{(()=>{const e=z.map((e=>{const a=e,l=e.options?.map((e=>(e.label=m(e.idLang),e)));return a.options=l,a.setValueName=H,a.default=L.companyRoleId,a.defaultName=L.companyRoleId?P:"",e}));D(e)})()}),[L,L.companyRoleId]),l.jsx(b,{isSpinning:e,children:l.jsxs(r,{sx:{display:"flex",flexDirection:"column",flex:1},children:[l.jsx(N,{fiterMoreInfo:O,handleChange:(e,a)=>{const l={...L,q:a};U(l)},handleFilterChange:e=>{const a={...L,companyRoleId:e.companyRoleId,offset:0};U(a)},customButtomConfig:T,handleFilterCustomButtomClick:()=>{v.current?.handleOpenAddEditUserClick("add")},resetFilterInfo:()=>{const e=O.map((e=>{const a=e;return a.setValueName=H,a.defaultName="",e}));H(""),D(e)}}),l.jsx(j,{ref:k,columnItems:[],rowsPerPageOptions:[12,24,36],getRequestList:async e=>{const a=await M(e),{users:{edges:l,totalCount:t}}=a;return{edges:l,totalCount:t}},searchParams:L||{},isCustomRender:!0,itemXs:g?3:4,requestLoading:a,renderItem:e=>l.jsx(_,{item:e,isPermissions:w,onEdit:X,onDelete:$},e.id||"")}),l.jsx(q,{companyId:B,renderList:J,ref:v}),l.jsx(c,{isOpen:t,title:m("userManagement.deleteUser"),leftSizeBtn:m("userManagement.cancel"),rightSizeBtn:m("userManagement.delete"),handleLeftClick:Y,handRightClick:async e=>{if(e)try{a(!0),Y(),await F({userId:e.id||"",companyId:B}),f.success(m("userManagement.deleteUserSuccessfully"))}finally{a(!1),J()}},row:s,rightStyleBtn:{color:"#D32F2F"},isShowBordered:!1,children:l.jsx(r,{sx:{display:"flex",justifyContent:y?"center%":"start",width:y?"100%":"450px",height:"100%"},children:m("userManagement.confirmDelete")})})]})})}));const a=()=>[{label:"Admin",name:"Admin",value:0,idLang:"userManagement.userRole.admin"},{label:"Senior buyer",name:"Senior Buyer",value:1,idLang:"userManagement.userRole.seniorBuyer"},{label:"Junior buyer",name:"Junior Buyer",value:2,idLang:"userManagement.userRole.juniorBuyer"}],A=e=>[{name:"companyRoleId",label:e("userManagement.config.userRole"),required:!1,default:"",defaultName:"",fieldType:"roleAutocomplete",xs:12,disabled:!1,variant:"outlined",size:"small"}],L={3:"global.emailValidate.multipleCustomer",4:"global.emailValidate.companyUsed",5:"global.emailValidate.alreadyExits",6:"global.emailValidate.usedSuperAdmin"},U={0:"text",1:"multiline",2:"number",3:"dropdown"},O=async()=>{let e=[];try{const{userExtraFields:a}=await I();e=(e=>e.map((e=>{const{listOfValue:a}=e,l=U[e.fieldType],t={isExtraFields:!0,name:e.fieldName,label:e.labelName,required:e.isRequired,default:e.defaultValue||"",fieldType:l,xs:12,variant:"outlined",size:"small"};switch(l){case"dropdown":if(a){const e=a?.map((e=>({label:e,value:e})));e.length>0&&(t.options=e)}break;case"number":t.max=e.maximumValue||"";break;case"mutiline":t.rows=e.numberOfRows||"";break;default:t.maxLength=e.maximumLength||""}return t})))(a.filter((e=>e.visibleToEnduser)))}catch(a){T.error(a)}return e},q=o.forwardRef((function({companyId:e,renderList:a},t){const n=u((({company:e})=>e.customer.b2bId)),[s,r]=o.useState(!1),[i,g]=o.useState(""),[p,x]=o.useState(null),[h,b]=o.useState(!1),[j,N]=o.useState([]),[R,C]=o.useState([]),S=d(),{control:I,handleSubmit:M,getValues:F,formState:{errors:T},clearErrors:V,setValue:z,setError:U}=w({mode:"onSubmit"});o.useEffect((()=>{0===R.length&&(async()=>{const e=await O();C(e)})()}),[R.length]),o.useEffect((()=>{if(s){const e=j.map((e=>{const a=e;return"edit"===i&&p&&z(e.name,p[e.name]),a}));N(e)}}),[p,s,i]);const q=()=>{j.forEach((e=>{z(e.name,""),e.isExtraFields&&z(e.name,e.default||"")})),V(),r(!1)},D=(e,a)=>{const l=((e,a,l=!1)=>{const t=A(a);return t[0].required=!0,t[0].disabled=l,[...t,{name:"email",label:a("userManagement.config.email"),required:!0,fieldType:"text",xs:12,disabled:"edit"===e,default:"",variant:"outlined",size:"small"},{name:"firstName",label:a("userManagement.config.firstName"),required:!0,default:"",fieldType:"text",xs:6,variant:"outlined",size:"small"},{name:"lastName",label:a("userManagement.config.lastName"),required:!0,fieldType:"text",xs:6,default:"",variant:"outlined",size:"small"},{name:"phone",label:a("userManagement.config.phoneNumber"),required:!1,fieldType:"text",xs:12,default:"",variant:"outlined",size:"small"}]})(e,S,"edit"===e&&n===+a.id);if("edit"===e){const e=a.extraFields||[];let t=a;if(e&&e.length>0){const l={};e.forEach((e=>{l[e.fieldName]=e.fieldValue})),t={...a,...l}}x(t);const n=l.find((e=>"companyRoleId"===e.name))||null;n&&(n.defaultName=a?.companyRoleName||"",n.default=a?.companyRoleId||"")}const t=v(l,R);N(t),g(e),r(!0)};return o.useImperativeHandle(t,(()=>({handleOpenAddEditUserClick:D}))),l.jsx(c,{isOpen:s,title:`${S("edit"===i?"userManagement.editUser":"userManagement.addNewUser")}`,leftSizeBtn:S("userManagement.cancel"),rightSizeBtn:S("userManagement.saveUser"),handleLeftClick:q,handRightClick:()=>{M((async l=>{b(!0);const t=(e=>{const a=Object.keys(e),l=[];return R.forEach((t=>{if(a.includes(t.name)){const a={fieldName:t.name||"",fieldValue:e[t.name]||""};l.push(a)}})),l})(l);let n=S("userManagement.addUserSuccessfully");try{const s={companyId:e,companyRoleId:+l.companyRoleId,...l,extraFields:t};if("edit"!==i){const{isValid:a,userType:t}=await(async a=>{const{userType:l,userInfo:{companyName:t}}=await B({email:a,companyId:e,channelId:y}),n=[m.DOESNT_EXIST,m.B2C,m.CURRENT_B2B_COMPANY_DIFFERENT_CHANNEL].includes(l);return n||U("email",{type:"custom",message:S(L[l],{companyName:t?`(${t})`:"",email:a})}),{isValid:n,userType:l}})(l.email);if(!a)return void b(!1);t===m.CURRENT_B2B_COMPANY_DIFFERENT_CHANNEL&&(s.addChannel=!0,n=S("userManagement.userDetected",{email:l.email}))}"edit"===i&&(s.userId=p?.id||"",n=S("userManagement.updateUserSuccessfully"),delete s.email),await E(s),q(),f.success(n),a()}finally{b(!1)}}))()},loading:h,isShowBordered:!0,children:l.jsx(k,{formFields:j,errors:T,control:I,getValues:F,setValue:z,type:i})})})),D=V("div")((()=>({display:"flex",alignItems:"center",justifyContent:"space-between"})));function _(e){const{item:o,onEdit:d,onDelete:u,isPermissions:c}=e;return l.jsx(t,{children:l.jsxs(n,{sx:{color:"#313440"},children:[l.jsxs(s,{variant:"h5",sx:{color:"rgba(0, 0, 0, 0.87)"},children:[o.firstName," ",o.lastName]}),l.jsx(s,{sx:{p:"15px 0"},variant:"body1",children:o.email}),l.jsxs(D,{children:[(e=>{const t=a().map((e=>2==+e.value?"Junior Buyer"!==o.companyRoleName?{color:"#ce93d8",textColor:"black",...e,label:o.companyRoleName,name:o.companyRoleName}:{color:"#D9DCE9",textColor:"black",...e}:1==+e.value?{color:"rgba(237, 108, 2, 0.3)",textColor:"black",...e}:{color:"#EA617C",textColor:"white",...e})).find((a=>a.name===e));return t?l.jsx(g,{color:t.color,textColor:t.textColor,children:t.label}):null})(o.companyRoleName),l.jsxs(r,{sx:{display:c?"block":"none"},children:[l.jsx(i,{"aria-label":"edit",size:"small",sx:{marginRight:"8px"},onClick:()=>{d(o)},children:l.jsx(R,{fontSize:"inherit"})}),l.jsx(i,{"aria-label":"delete",size:"small",onClick:()=>{u(o)},children:l.jsx(z,{fontSize:"inherit"})})]})]})]})},o.id)}}}}));
