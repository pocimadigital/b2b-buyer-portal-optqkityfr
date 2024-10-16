System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-CVgV69kS.js","../index-legacy.DMqXW-Ne.js","./QuoteStatus-legacy-OWAXSiyM.js","./eStyled-legacy-C5ZTaXoz.js","./DeleteOutlined-legacy-B7LgfXhd.js","./lodashEs-legacy-Da1qF4L1.js"],(function(e,t){"use strict";var i,l,a,o,n,s,r,d,c,f,u,p,x,g,h,m,b,j,y,w,v,S,q,N,z,I,C,L,D,F,E,U,A,B,k;return{setters:[e=>{i=e.o,l=e.j,a=e.B,o=e.T,n=e.V,s=e.y,r=e.ah,d=e.K,c=e.ab,f=e.g},e=>{u=e.r},e=>{p=e.u},e=>{x=e.r,g=e.bj,h=e.bk,m=e.a2,b=e.bl,j=e.a5,y=e.bm,w=e.aR,v=e.i,S=e.u,q=e.bn,N=e.be,z=e.a,I=e.a3,C=e.p,L=e.R,D=e.ag,F=e.bo},null,e=>{E=e.q,U=e.m},e=>{A=e.n},e=>{B=e.d},e=>{k=e.n}],execute:function(){e({B:W,Q:function({contactInfo:e,shippingAddress:t,billingAddress:i,handleEditInfoClick:o,status:n}){const s=p(),[r]=z();return l.jsxs(le,{flexDirection:"column",xs:{boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px"},children:[l.jsxs(a,{sx:{width:"100%",display:"flex",justifyContent:"space-between",flexDirection:r?"column":"row"},children:[l.jsx(se,{title:s("quoteDraft.contactInfo.contact"),flag:"info",status:n,info:e}),l.jsx(se,{title:s("global.quoteInfo.billing"),flag:"Billing",status:n,info:i}),l.jsx(se,{title:s("global.quoteInfo.shipping"),flag:"Shipping",status:n,info:t})]}),o&&l.jsx(I,{sx:{mt:"10px",mb:"15px"},onClick:o,variant:"outlined",children:s("global.quoteInfo.editInfo")})]})},a:function(e){const t=p(),{quoteStatus:i,quoteNotes:n=""}=e,[s,r]=u.useState(""),[x,g]=u.useState(!1),h=S(C),m=S(L),b=!h||m.quotesActionsPermission;return u.useEffect((()=>{const e=D.getState().quoteInfo.draftQuoteInfo.note||"";r(e)}),[]),u.useEffect((()=>{D.dispatch(F(s||""))}),[s]),u.useEffect((()=>{n&&g(!0)}),[n]),l.jsx(d,{children:l.jsx(c,{sx:{p:"16px !important"},children:l.jsx(W,{title:t(i&&"Draft"===i?"global.quoteNote.message":"global.quoteNote.notes"),defaultOpen:x,children:l.jsxs(a,{sx:{padding:"16px 0"},children:[i&&"Draft"===i&&l.jsx(a,{sx:{fontSize:"16px",color:"rgba(0, 0, 0, 0.38)",mb:"16px"},children:t("global.quoteNote.messageNote")}),n?l.jsx(o,{variant:"body1",style:{whiteSpace:"pre-line",maxHeight:"400px",overflow:"auto"},children:n}):l.jsx(a,{children:b?l.jsx(f,{multiline:!0,fullWidth:!0,rows:5,value:s,onChange:e=>{r(e?.target.value||""),D.dispatch(F(e?.target.value||""))},label:t("global.quoteNote.typeMessage"),size:"small",variant:"outlined",sx:{"& .MuiFormLabel-root":{color:"rgba(0, 0, 0, 0.38)"}}}):null})]})})})})},b:function(e){const{allowUpload:t=!0,defaultFileList:i=[],status:o,quoteId:n}=e,s=p(),r=v(),f=S((({company:e})=>e.customer.firstName)),x=S((({company:e})=>e.customer.lastName)),g=S((({quoteInfo:e})=>e.draftQuoteInfo)),[h]=q(),[m,b]=u.useState([]),y=u.useRef(null);u.useEffect((()=>{if(0===o){const{fileInfo:e=[]}=g||{};b("object"!=typeof e?[]:e)}else i.length&&b(i)}),[i.length,o]);const w=e=>{if(g){const t={...g,fileInfo:e};r(N(t))}};return l.jsx(d,{children:l.jsx(c,{sx:{p:"16px !important"},children:l.jsx(W,{title:s("global.quoteAttachment.title"),children:l.jsx(a,{children:l.jsx(ie,{ref:y,requestType:"b2b"!==h?"customerQuoteAttachedFile":"quoteAttachedFile",isEndLoadding:!0,fileList:m,limitUploadFn:()=>m.filter((e=>e?.title&&e.title.includes("by customer"))).length>=3&&(j.error(s("global.quoteAttachment.maxFilesMessage")),!0),onchange:async e=>{try{let t=[];if(0!==o){const i={fileName:e.fileName,fileType:e.fileType,fileUrl:e.fileUrl,fileSize:e.fileSize},{quoteAttachFileCreate:{attachFiles:l}}=await E({fileList:[{...i}],quoteId:n});i.id=l[0].id,t=[{...i,title:s("global.quoteAttachment.uploadedByCustomer",{createdBy:l[0].createdBy}),hasDelete:!0},...m]}else t=[{...e,title:s("global.quoteAttachment.uploadedByCustomerWithName",{firstName:f,lastName:x}),hasDelete:!0},...m],w(t);b(t)}finally{y.current?.setUploadLoadding(!1)}},onDelete:async e=>{try{y.current?.setUploadLoadding(!0);const t=m.find((t=>t.id===e)),i=m.filter((t=>t.id!==e));0!==o&&t?await U({fileId:t?.id||"",quoteId:n}):w(i),b(i)}finally{y.current?.setUploadLoadding(!1)}},allowUpload:t})})})})})}});var t={},M=i;Object.defineProperty(t,"__esModule",{value:!0});var T=t.default=void 0,O=M(x()),R=l;T=t.default=(0,O.default)((0,R.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");var $={},P=i;Object.defineProperty($,"__esModule",{value:!0});var _=$.default=void 0,H=P(x()),Q=l;function W(e){const{children:t,title:i="",header:s,defaultOpen:r=!1,handleOnChange:d}=e,[c,f]=u.useState(r);return u.useEffect((()=>{d&&d(c)}),[d,c]),u.useEffect((()=>{r&&f(r)}),[r]),l.jsxs(a,{children:[l.jsxs(a,{onClick:()=>{f(!c)},sx:{display:"flex",justifyContent:"space-between",cursor:"pointer",alignItems:"center"},children:[s||l.jsx(o,{variant:"h5",children:i}),c?l.jsx(T,{}):l.jsx(_,{})]}),l.jsx(n,{in:c,timeout:"auto",unmountOnExit:!0,children:t})]})}_=$.default=(0,H.default)((0,Q.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");var K={},V=i;Object.defineProperty(K,"__esModule",{value:!0});var G=K.default=void 0,J=V(x()),X=l;G=K.default=(0,J.default)((0,X.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"}),"Help");const Y=A(a)((({style:e})=>({"& .file-upload-area":{cursor:"pointer","& .MuiDropzoneArea-textContainer":{display:"flex",alignItems:"center",color:e?.color||"#1976D2"},"& .MuiDropzoneArea-text":{order:1,textTransform:"capitalize",fontWeight:400,fontSize:"14px",lineHeight:"24px"}}}))),Z=A(a)((e=>({display:"flex",background:"true"===e.hasdelete?"rgba(25, 118, 210, 0.3)":"rgba(0, 0, 0, 0.12)",borderRadius:"18px",padding:"6px 8px",alignItems:"center",margin:"0 0 2px",color:"rgba(0, 0, 0, 0.54)","& .fileList-name-area":{display:"flex",flex:1,alignItems:"center"},"& .fileList-name":{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",flexGrow:1,flexBasis:"100px",maxWidth:"200px",color:"#313440",fontSize:"14px",cursor:"pointer"}}))),ee=A(o)({marginBottom:"16px",fontSize:"10px",color:"rgba(0, 0, 0, 0.38)",padding:"0 12px",textAlign:"right",wordBreak:"break-word"}),te=A(g)((()=>({transform:"rotate(45deg)",marginRight:"5px"}))),ie=u.forwardRef((function(e,t){const i=p(),{title:n=i("global.fileUpload.addAttachment"),tips:d=i("global.fileUpload.maxFileSizeMessage"),maxFileSize:c=2097152,fileNumber:f=3,limitUploadFn:x,acceptedFiles:g=h,onchange:v=k,fileList:S=[],allowUpload:q=!0,onDelete:N=k,isEndLoadding:z=!1,requestType:I="quoteAttachedFile"}=e,C=s().palette.primary.main,[L,D]=u.useState(!1);u.useImperativeHandle(t,(()=>({setUploadLoadding:e=>D(e)})));const F=e=>e/1048576>1?`${(e/1048576).toFixed(1)}MB`:e/1024>1?`${(e/1024).toFixed(1)}KB`:`${e}B`;return l.jsx(m,{isSpinning:L,children:l.jsxs(a,{sx:{padding:"12px 0 0",width:"100%"},children:[l.jsx(a,{children:S.map(((e,t)=>l.jsxs(a,{children:[l.jsxs(Z,{hasdelete:(e?.hasDelete||"").toString(),children:[l.jsxs(a,{className:"fileList-name-area",children:[l.jsx(te,{}),l.jsx(o,{className:"fileList-name",onClick:()=>{var t;(t=e.fileUrl)&&window.open(t,"_blank")},children:e.fileName})]}),e.hasDelete&&l.jsx(B,{sx:{cursor:"pointer"},onClick:()=>{N(e?.id||"")}})]}),l.jsx(ee,{children:e.title||""})]},e.id||t)))}),q&&l.jsxs(a,{sx:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[l.jsx(Y,{style:{color:C},children:l.jsx(b,{dropzoneClass:"file-upload-area",Icon:te,filesLimit:1,onChange:async e=>{const t=e.length>0?e[0]:null;if(!(t&&x&&x()))if(!x&&t&&S.length>=f)j.error(i("global.fileUpload.maxFileNumber",{fileNumber:f}));else if(t)try{D(!0);const{code:e,data:i,message:l}=await y({file:t,type:I});200===e?v({...i,id:w()}):j.error(l)}finally{z||D(!1)}},showPreviews:!1,showPreviewsInDropzone:!1,maxFileSize:c,showAlerts:!1,dropzoneText:n,getDropRejectMessage:(e,t,l)=>{const{size:a,type:o}=e;let n=!1;t.forEach((e=>{n=new RegExp(e).test(o)||n}));let s="";return n||(s=i("global.fileUpload.fileTypeNotSupported")),a>l&&(s=i("global.fileUpload.fileSizeExceedsLimit",{maxFileSize:F(l)})),s&&j.error(s),s},getFileLimitExceedMessage:()=>(j.error(i("global.fileUpload.fileSizeExceedsLimit",{maxFileSize:F(c)})),""),acceptedFiles:g})}),l.jsx(r,{title:d,sx:{fontSize:"20px",color:"rgba(0, 0, 0, 0.54)"},children:l.jsx(G,{})})]})]})})})),le=e("C",A("div")((({padding:e="1rem",alignItems:t="flex-start",flexDirection:i="row",backgroundColor:l="white",width:a="100%",xs:o})=>({display:"flex",flexDirection:i,alignItems:t,padding:e,width:a,backgroundColor:l,...o})))),ae=["name","email","companyName","phoneNumber","quoteTitle"],oe=["label","firstName","lastName","company","address","apartment","city","state","zipCode","country","phoneNumber"],ne=["label",["firstName","lastName"],"company","address","apartment",["city","state","zipCode","country"],"phoneNumber"];function se({flag:e,title:t,info:i,status:n}){const s="info"===e?ae:ne,[r]=z(),d=p(),c="Draft"===n?"Por favor, añade tu direción de "+("Billing"===e?"facturación":"envío"):"Sin dirección de  "+("Billing"===e?"facturación":"envío"),f="info"!==e&&oe.some((e=>i&&!!i[e])),u="info"===e||r?0:"10px";return l.jsxs(a,{sx:{width:r?"100%":"33.3%",paddingLeft:u},children:[l.jsx(o,{sx:{fontWeight:400,fontSize:"24px",height:"32px"},children:t}),l.jsxs(a,{sx:{p:"15px 0"},children:[(f||"info"===e)&&"{}"!==JSON.stringify(i)&&s.map((e=>"quoteTitle"===e?"Draft"===n?l.jsx(o,{sx:{wordBreak:"break-all"},variant:"body1",children:`${d("quoteDraft.quoteInfo.quoteTitle")}${i[e]||""}`},e):"":"string"==typeof e?l.jsx(o,{variant:"body1",children:i&&i[e]||""},e):l.jsx(o,{variant:"body1",children:e.map(((t,l)=>l===e.length-1?i[t]||"":"firstName"===t?`${i[t]||""} `:i[t]?`${i[t]||""}, `:""))},`${e}`))),!f&&"info"!==e&&l.jsx(a,{children:c})]})]})}}}}));