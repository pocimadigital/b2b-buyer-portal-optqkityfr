System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./lang-legacy-CyIWukAl.js","./react-setup-legacy-CjrUzkdu.js","../index-legacy.nzAN2voK.js","./QuoteStatus-legacy-BSsd78pg.js","./QuoteNote-legacy-Nj3Thb4f.js","./dateFns-legacy-DDX5L0UR.js","./b3Logger-legacy-C5y5ZQF8.js","./b3checkout-legacy-BYQPiMTc.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-CrtdWcGA.js","./lodashEs-legacy-Da1qF4L1.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-C5ZTaXoz.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./dropzone-legacy-Q3dhxZki.js","./DeleteOutlined-legacy-W6tX_yjW.js"],(function(e,t){"use strict";var s,n,a,r,i,o,l,c,d,u,x,p,h,g,m,f,y,j,b,D,w,C,q,S,v,k,T,P,R,I,E,A,$,N,B,L,F,z,H,U,Q,M,O,W,V,_,G,K,Y,X,Z,J,ee,te,se,ne,ae,re,ie,oe,le,ce,de,ue,xe,pe,he,ge;return{setters:[e=>{s=e.o,n=e.j,a=e.y,r=e.B,i=e.K,o=e.ab,l=e.g,c=e.ah,d=e.s,u=e.G,x=e.T,p=e.e},e=>{h=e.g,g=e.r},e=>{m=e.u},e=>{f=e.r,y=e.G,j=e.u,b=e.R,D=e.a8,w=e.a2,C=e.aL,q=e.ag,S=e.b1,v=e.b2,k=e.b3,T=e.a,P=e.a3,R=e.C,I=e.k,E=e.W,A=e.ak,$=e.b4,N=e.b5,B=e.aD,L=e.ab,F=e.aY,z=e.p,H=e.aN,U=e.b6,Q=e.a5,M=e.aQ,O=e.aO,W=e.aP},null,e=>{V=e.u,_=e.a,G=e.g,K=e.b,Y=e.c,X=e.Q,Z=e.d,J=e.e,ee=e.f,te=e.h},e=>{se=e.B,ne=e.Q,ae=e.a,re=e.b},e=>{ie=e.g,oe=e.h},e=>{le=e.b},e=>{ce=e.s,de=e.a},e=>{ue=e.a,xe=e.u,pe=e.c},e=>{he=e.A},e=>{ge=e.g},null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){const{id:e=""}=pe(),t=xe(),{state:{bcLanguage:s}}=g.useContext(y),a=j(z),i=j((({company:e})=>e.companyInfo.id)),o=j((({company:e})=>e.customer.emailAddress)),l=j((({company:e})=>e.customer.customerGroupId)),c=j((({company:e})=>e.customer.role)),d=j((({b2bFeatures:e})=>e.masqueradeCompany.isAgenting)),[x]=T(),{quoteConvertToOrderPermission:h,purchasabilityPermission:f}=j(b),D=a?h:2!=+c,C=a?f:2!=+c,q=m(),[S,k]=g.useState({}),[P,R]=g.useState([]),[I,E]=g.useState([]),[A,$]=g.useState(!1),[N,B]=g.useState(!0),[L,F]=g.useState({originalSubtotal:0,discount:0,tax:0,shipping:0,totalAmount:0}),[V,_]=g.useState(!1),[G,K]=g.useState(!1),[Y,X]=g.useState(0),[se,ie]=g.useState({oos:"",nonPurchasable:""}),[oe,le]=g.useState(!1),ce=ue(),de=j(H),he=j((({global:e})=>e.taxZoneRates)),me=j((({storeConfigs:e})=>e.currencies.enteredInclusiveTax)),fe=j((({global:e})=>e.blockPendingQuoteNonPurchasableOOS?.isEnableProduct));g.useEffect((()=>{let e="",t="";P.forEach((s=>{const n=U(s);n?.type&&fe&&!s?.purchaseHandled&&("oos"===n.type&&(e+=`${s.productName}${e?",":""}`),"non-purchasable"===n.type&&(t+=`${s.productName}${t?",":""}`))}));const s=!!e||!!t;fe&&A&&s&&(e&&Q.error(q("quoteDetail.message.insufficientStock",{ProductName:e})),t&&Q.error(q("quoteDetail.message.nonPurchasable",{ProductName:t}))),B(s),ie({oos:e,nonPurchasable:t})}),[fe,A,P]);const je=g.useCallback((()=>{if(N){const{oos:e,nonPurchasable:t}=se;e&&Q.error(q("quoteDetail.message.insufficientStock",{ProductName:e})),t&&Q.error(q("quoteDetail.message.nonPurchasable",{ProductName:t}))}return N}),[N,se]),be=[];if(he?.length){const e=he?.find((e=>1===e.id));if(e){const{rates:t=[]}=e;t[0]&&t[0].enabled&&t[0].classRates.length&&t[0].classRates.forEach((e=>be.push(e)))}}const De=(e,t)=>{if(t.length){const e=ge(t,"[0].bc_calculated_price.tax_exclusive",0),s=ge(t,"[0].bc_calculated_price.tax_inclusive",0);return e>0?(s-e)/e:0}return be.length?(be.find((t=>t.taxClassId===e))?.rate||0)/100:0},we=async()=>{_(!0),K(!1);try{const{search:t}=ce,s=v(t,"date")||"",n={id:+e,date:s.toString()},r=99==+c?Z:J,{quote:o}=await r(n),d=await(async e=>{if(e.length>0){const s=[];e.forEach((e=>{s.includes(e.productId)||s.push(e.productId)}));const n=a?O:W;try{const{currency_code:t}=de,{productsSearch:a}=await n({productIds:s,currencyCode:t,companyId:i,customerGroupId:l}),r=M(a);return e.forEach((e=>{const t=e,s=r.find((t=>{const{id:s}=t;return+e.productId==+s}));t.productsSearch=s||{}})),e}catch(t){Q.error(t)}}})(o.productsList);if(k(o),F({originalSubtotal:o.subtotal,discount:o.discount,tax:o.taxTotal,shipping:o.shippingTotal,totalAmount:o.totalAmount}),R(d),0==+o.shippingTotal)X(+o.taxTotal);else{let e=0;d?.forEach((t=>{const{quantity:s,offeredPrice:n,productsSearch:{variants:a=[],taxClassId:r}}=t,i=De(r,a);e+=me?+n*i/(1+i)*+s:+n*i*+s})),X(e)}const{backendAttachFiles:u=[],storefrontAttachFiles:x=[],salesRep:p,salesRepEmail:h}=o;$(!!p||!!h);const g=[];return x.forEach((e=>{g.push({fileName:e.fileName,fileType:e.fileType,fileUrl:e.fileUrl,id:e.id,hasDelete:4!==S.status,title:q("quoteDetail.uploadedByCustomer",{createdBy:e.createdBy})})})),u.forEach((e=>{g.push({fileName:e.fileName,fileType:e.fileType,fileUrl:e.fileUrl,id:e.id,title:q("quoteDetail.uploadedBySalesRep",{createdBy:e.createdBy})})})),E(g),o}catch(t){throw Q.error(t),t}finally{_(!1),K(!0)}},Ce=async e=>{_(!0);const{id:t,createdAt:n}=S;try{const a={quoteId:+t,createdAt:n,isPreview:e,lang:s},r=99==+c?ee:te,i=await r(a);if(i)return{url:i.quoteFrontendPdf.url,content:i.quoteFrontendPdf.content}}catch(a){Q.error(a)}return{url:"",content:""}};return g.useEffect((()=>{const{state:e}=ce;e&&(setTimeout((()=>{Q.success("",{jsx:()=>n.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[n.jsx(r,{sx:{mr:"15px"},children:q(100==+c?"quoteDetail.submittedQuote":"quoteDetail.quoteSubmitted")}),n.jsx(p,{onClick:()=>{100==+c?(ye(window.location.href),Q.success(q("quoteDetail.copySuccessful"))):t("/quotes")},variant:"text",sx:{color:"#ffffff",textAlign:"left",padding:0},children:q(100==+c?"quoteDetail.copyQuoteLink":"quoteDetail.reviewAllQuotes")})]}),isClose:!0,duration:3e4})}),10),ce.state=null)}),[ce,t,c]),g.useEffect((()=>{ce.search.includes("isCheckout")&&e&&(async()=>{try{le(!0),await ke({quoteId:e,proceedingCheckoutFn:je,role:c,location:ce,navigate:t})}finally{le(!1)}})()}),[e,ce,je]),n.jsx(w,{isSpinning:V||oe,children:n.jsxs(r,{sx:{display:"flex",flexDirection:"column",flex:1},children:[n.jsx(Re,{status:S.status,quoteNumber:S.quoteNumber,issuedAt:S.createdAt,expirationDate:S.expiredAt,exportPdf:async()=>{try{const{url:e}=await Ce(!1);e&&window.open(`${e}`,"_blank")}catch(e){Q.error(e)}finally{_(!1)}},printQuote:async()=>{try{const{content:e}=await Ce(!0),t=document.createElement("iframe");t.setAttribute("style","display:none;"),document.getElementById("bundle-container")?.appendChild(t),t.contentDocument?.open(),t.contentDocument?.write(e),t.contentDocument?.close(),_(!1),t.contentWindow?.print()}catch(e){Q.error(e)}},role:c,quoteTitle:S.quoteTitle,salesRepInfo:S.salesRepInfo}),n.jsx(r,{sx:{marginTop:"1rem"},children:n.jsx(ne,{contactInfo:S.contactInfo,shippingAddress:S.shippingAddress,billingAddress:S.billingAddress})}),n.jsxs(u,{container:!0,spacing:x?2:0,rowSpacing:0,sx:{overflow:"auto",flexWrap:x?"wrap":"nowrap",paddingBottom:"20px",marginBottom:x?"6rem":0,marginTop:x?0:"1rem","@media print":{overflow:"hidden"}},children:[n.jsx(u,{item:!0,xs:x?12:8,rowSpacing:0,sx:x?{flexBasis:"100%",pl:"16px"}:{mr:"16px"},children:n.jsx(r,{sx:x?{flexBasis:"100%"}:{},children:n.jsx(Be,{total:P.length,currency:S.currency,isHandleApprove:A,getQuoteTableDetails:async e=>{let t=P;if(0===t.length){const e=await we();t=e?.productsList||[]}const s=+e.offset,n=+e.first+s;return t.length?{edges:t.slice(s,n),totalCount:t.length}:{edges:[],totalCount:0}},getTaxRate:De,displayDiscount:S.displayDiscount})})}),n.jsxs(u,{item:!0,xs:x?12:4,rowSpacing:0,sx:x?{flexBasis:"100%"}:{pl:0},children:[n.jsx(r,{sx:{marginBottom:"1rem"},children:n.jsx(Ie,{isHideQuoteCheckout:N,quoteSummary:L,quoteDetailTax:Y,status:S.status,quoteDetail:S})}),S.notes&&n.jsx(r,{sx:{marginBottom:"1rem",displayPrint:"none"},children:n.jsx(ae,{quoteNotes:S.notes})}),n.jsx(r,{sx:{marginBottom:"1rem",displayPrint:"none"},children:n.jsx(ve,{id:e,status:S.status,isB2BUser:a,email:o||"",msgs:S?.trackingHistory||[]})}),n.jsx(r,{sx:{marginBottom:"1rem",displayPrint:"none"},children:n.jsx(re,{allowUpload:4!=+S.status,quoteId:S.id,status:S.status,defaultFileList:I})}),S.legalTerms&&n.jsx(r,{sx:{displayPrint:"none"},children:n.jsx(Le,{quoteLegalTerms:S.legalTerms})})]})]}),D&&C&&4!=+S.status&&G&&S?.allowCheckout&&(!fe||!(!A||!N)||!N)&&n.jsx(Te,{quoteId:S.id,role:c,isAgenting:d,status:S.status,proceedingCheckoutFn:je})]})})}));var t=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,s=[],n=0;n<e.rangeCount;n++)s.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||s.forEach((function(t){e.addRange(t)})),t&&t.focus()}},me={"text/plain":"Text","text/html":"Url",default:"Text"},fe=function(e,s){var n,a,r,i,o,l,c=!1;s||(s={}),n=s.debug||!1;try{if(r=t(),i=document.createRange(),o=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(t){if(t.stopPropagation(),s.format)if(t.preventDefault(),void 0===t.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=me[s.format]||me.default;window.clipboardData.setData(a,e)}else t.clipboardData.clearData(),t.clipboardData.setData(s.format,e);s.onCopy&&(t.preventDefault(),s.onCopy(t.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),o.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(s.format||"text",e),s.onCopy&&s.onCopy(window.clipboardData),c=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in s?s.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{o&&("function"==typeof o.removeRange?o.removeRange(i):o.removeAllRanges()),l&&document.body.removeChild(l),r()}return c};const ye=h(fe);var je={},be=s;Object.defineProperty(je,"__esModule",{value:!0});var De=je.default=void 0,we=be(f()),Ce=n;function qe({msg:e,isEndMessage:t,isCustomer:s}){const a=m();return n.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:s?"flex-end":"flex-start",paddingTop:"5px"},children:[e?.role&&n.jsx(r,{sx:{height:"14px",fontWeight:400,lineHeight:"14px",fontSize:"10px",letterSpacing:"0.17px",color:"rgba(0, 0, 0, 0.38)"},children:e.role}),e?.message&&n.jsxs(r,{sx:{display:"inline-block",lineHeight:"34px",padding:"0 10px",background:s?"rgba(25, 118, 210, 0.3)":"rgba(0, 0, 0, 0.12)",borderRadius:"18px",m:"1px"},children:[n.jsx(c,{title:ie(1e3*(e.sendTime||0),"K:m aa"),placement:"top",arrow:!0,children:n.jsx(r,{sx:{wordBreak:"break-word"},children:e.message})}),t&&n.jsx(r,{sx:{height:"14px",fontWeight:400,lineHeight:"14px",fontSize:"10px",letterSpacing:"0.17px",color:"rgba(0, 0, 0, 0.38)"},children:`${a("quoteDetail.message.sent")} ${oe(new Date(1e3*(e.sendTime||0)),new Date,{addSuffix:!0})}`})]})]})}function Se({msg:e}){return n.jsx(r,{sx:{color:"rgba(0, 0, 0, 0.6)",textAlign:"center",height:"21px",mb:"5px"},children:`${C(e?.date||0)}`})}function ve({msgs:e,id:t,isB2BUser:s,email:c,status:d}){const{dispatch:u}=g.useContext(y),x=a().palette.primary.main,p=m(),h=g.useRef(null),f=g.useRef(0),[C,q]=g.useState([]),[S,v]=g.useState(0),[k,T]=g.useState(""),[P,R]=g.useState(!1),{quotesActionsPermission:I}=j(b),E=!s||I,A=e=>{let t={};const s=[];let n=0;e.forEach(((e,a)=>{0===a?(s.push({isCustomer:!e.role?.includes("Sales rep:"),date:e?.date,key:`${e?.date}date`}),s.push({isCustomer:!e.role?.includes("Sales rep:"),message:e.message,sendTime:e.date,role:e.role,key:e?.date}),t=e,t.isCustomer=!e.role?.includes("Sales rep:")):((e?.date||0)-(t?.date||0)>3600&&s.push({isCustomer:!e.role?.includes("Sales rep:"),date:e?.date,key:`${e?.date}date`}),t.isCustomer===!e.role?.includes("Sales rep:")?s.push({isCustomer:!e.role?.includes("Sales rep:"),message:e.message,sendTime:e.date,key:e?.date}):s.push({isCustomer:!e.role?.includes("Sales rep:"),message:e.message,role:e.role,sendTime:e.date,key:e?.date}),t=e,t.isCustomer=!e.role?.includes("Sales rep:")),e.role?.includes("Sales rep:")&&!e.read&&(n+=1)})),v(n),q(s)},$=g.useMemo((()=>n.jsxs(r,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[`${p("quoteDetail.message.message")} `,0!==S&&n.jsx(r,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"20px",height:"20px",borderRadius:"50%",background:x||"#1976D2",color:"#fff",fontSize:"12px",ml:"8px"},children:S})]})),[x,S]);g.useEffect((()=>{A(e)}),[e]),g.useEffect((()=>{h.current&&C.length&&(h.current.scrollTop=h.current.scrollHeight)}),[C]);const N=async e=>{try{const n=s?V:_;R(!0);const{quoteUpdate:{quote:{trackingHistory:a}}}=await n({id:+t,quoteData:{message:e,lastMessage:parseInt(""+(new Date).getTime()/1e3,10),userEmail:c||"",storeHash:D}});T(""),v(0),A(a)}finally{R(!1)}},B=g.useCallback((n=>{if(n){if(!E&&s)return;const n=s?V:_;0===f.current&&e.length&&n({id:+t,quoteData:{lastMessage:e[e.length-1]?.date,userEmail:c||"",storeHash:D}}),v(0),h.current&&(h.current.scrollTop=h.current.scrollHeight),f.current+=1}}),[c,t,s,e,E]);return g.useEffect((()=>{u({type:"common",payload:{quoteDetailHasNewMessages:0!==S}})}),[S]),n.jsx(i,{children:n.jsx(o,{sx:{p:"16px !important"},children:n.jsxs(se,{handleOnChange:B,title:$,children:[n.jsxs(r,{sx:{padding:"16px 0"},children:[n.jsx(r,{sx:{position:"relative",color:"rgba(0, 0, 0, 0.6)",opacity:.6,textAlign:"left",width:"100%",fontSize:"14px"},children:p("quoteDetail.message.merchantAnswers")}),n.jsx(r,{ref:h,sx:{mt:"20px",maxHeight:"280px",overflowY:"auto","&::-webkit-scrollbar":{display:"none"}},children:C.map(((e,t)=>n.jsxs(r,{children:[n.jsx(qe,{msg:e,isEndMessage:t===C.length-1,isCustomer:!!e.isCustomer}),e.date&&n.jsx(Se,{msg:e})]},e.key)))})]}),4!==d&&E&&n.jsx(w,{isSpinning:P,spinningHeight:50,size:10,isCloseLoading:!0,tip:"waiting..",children:n.jsxs(r,{sx:{display:"flex",width:"100%"},children:[n.jsx(l,{onKeyDown:e=>{"Enter"===e.key&&N(e.target.value||"")},sx:{width:"100%","& .MuiFormLabel-root":{color:"rgba(0, 0, 0, 0.38)"},"& input":{padding:"1.5rem 0 0.5rem 0"}},value:k,onChange:e=>{T(e.target.value)},size:"small",label:p("quoteDetail.message.typeMessage"),variant:"outlined"}),n.jsx(r,{onClick:()=>N(k),sx:{width:"42px",height:"36px",margin:"10px 0 0 10px",background:"#BAD6F2",borderRadius:"50%"},children:n.jsx(De,{sx:{height:"18px",width:"18px",margin:"8px 0 0 9px",color:"#0000008A"},fontSize:"small"})})]})})]})})})}De=je.default=(0,we.default)((0,Ce.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");const ke=async({role:e,proceedingCheckoutFn:t,location:s,quoteId:n,navigate:a})=>{try{if(q.dispatch(S("")),t())return;const{storefrontProductSettings:{hidePriceFromGuests:r}}=await G();if(r&&100==+e&&a)return q.dispatch(S(s.pathname+s.search)),void a("/login");const i=99==+e?K:Y,o=v(s.search,"date"),l=await i({id:+n});ce(n,o);const{quoteCheckout:{quoteCheckout:{checkoutUrl:c,cartId:d}}}=l;if("bigcommerce"===k)return void(window.location.href=c);await de(d,c)}catch(r){le.error(r)}};function Te(e){const{quoteId:t,role:s,isAgenting:a,status:i,proceedingCheckoutFn:o}=e,[l]=T(),c=m(),d=ue(),u=xe(),x=l?{alignItems:"flex-end",flexDirection:"column"}:{alignItems:"center"};return 5!==i?n.jsx(r,{sx:{position:"fixed",bottom:l&&a?"52px":0,left:0,backgroundColor:"#fff",width:"100%",padding:"0.8rem 1rem",height:"auto",display:"flex",zIndex:"999",justifyContent:l?"center":"flex-end",displayPrint:"none",...x},children:n.jsx(P,{variant:"contained",onClick:()=>{ke({proceedingCheckoutFn:o,role:s,location:d,quoteId:t,navigate:u})},sx:{width:l?"100%":"auto"},children:c("quoteDetail.footer.proceedToCheckout")})}):null}const Pe=d("div")((()=>({display:"flex",alignItems:"center",marginTop:"0.5rem"})));function Re(e){const[t]=T(),s=m(),{status:i,quoteNumber:o,issuedAt:l,expirationDate:c,exportPdf:d,printQuote:p,role:h,quoteTitle:f,salesRepInfo:y}=e,{state:{portalStyle:{backgroundColor:j="#FEF9F5"}}}=g.useContext(R),b=I(j),D=a().palette.primary.main,w=xe(),C=e=>t?{}:{xs:e};return n.jsxs(n.Fragment,{children:[100!=+h&&n.jsx(r,{sx:{marginBottom:"10px",width:"fit-content",displayPrint:"none"},children:n.jsxs(r,{sx:{color:"#1976d2",cursor:"pointer",display:"flex",alignItems:"center"},onClick:()=>{w("/quotes")},children:[n.jsx(he,{fontSize:"small",sx:{fontSize:"12px",marginRight:"0.5rem",color:D}}),n.jsx("p",{style:{color:D,margin:"0"},children:s("quoteDetail.header.backToQuoteLists")})]})}),n.jsxs(u,{container:!0,spacing:2,sx:{display:"flex",justifyContent:"space-between",flexDirection:t?"column":"row",mb:t?"16px":""},children:[n.jsxs(u,{item:!0,...C(8),sx:{color:b},children:[n.jsxs(r,{sx:{display:"flex",alignItems:t?"start":"center",flexDirection:t?"column":"row"},children:[n.jsx(x,{sx:{marginRight:"10px",fontSize:"34px",color:E(b,.87)},children:s("quoteDetail.header.quoteNumber",{quoteNumber:o||""})}),n.jsx(X,{code:i})]}),f&&n.jsxs(Pe,{children:[n.jsx(x,{variant:"subtitle2",sx:{marginRight:"0.5rem",fontSize:"16px"},children:s("quoteDetail.header.title")}),n.jsx("span",{children:f})]}),(y?.salesRepName||y?.salesRepEmail)&&n.jsxs(Pe,{children:[n.jsx(x,{variant:"subtitle2",sx:{marginRight:"0.5rem",fontSize:"16px"},children:s("quoteDetail.header.salesRep")}),n.jsx("span",{children:""!==y?.salesRepEmail?`${y?.salesRepName}(${y?.salesRepEmail})`:y?.salesRepName})]}),n.jsxs(r,{children:[n.jsxs(Pe,{children:[n.jsx(x,{variant:"subtitle2",sx:{marginRight:"0.5rem",fontSize:"16px"},children:s("quoteDetail.header.issuedOn")}),n.jsx("span",{children:`${l?A(+l):""}`})]}),n.jsxs(Pe,{children:[n.jsx(x,{variant:"subtitle2",sx:{marginRight:"0.5rem",fontSize:"16px"},children:s("quoteDetail.header.expirationDate")}),n.jsx("span",{children:`${c?A(+c):""}`})]})]})]}),100!=+h&&n.jsx(u,{item:!0,sx:{textAlign:t?"none":"end",displayPrint:"none"},...C(4),children:n.jsxs(r,{children:[n.jsx(P,{variant:"outlined",sx:{marginRight:"1rem",displayPrint:"none"},onClick:p,children:s("quoteDetail.header.print")}),n.jsx(P,{variant:"outlined",onClick:d,children:s("quoteDetail.header.downloadPDF")})]})})]})]})}function Ie({quoteSummary:{originalSubtotal:e,discount:t,tax:s,shipping:a,totalAmount:l},quoteDetailTax:c=0,status:d,quoteDetail:p,isHideQuoteCheckout:h}){const g=m(),f=j((({storeConfigs:e})=>e.currencies.enteredInclusiveTax)),y=j((({global:e})=>e.showInclusiveTaxPrice)),b=(e,t)=>f?y?e:e-t:y?e+t:e,D=e=>`${$(e,{currency:p.currency,isConversionRate:!1,useCurrentCurrency:!!p.currency})}`,w=p?.shippingMethod?.id?{shippingText:`${g("quoteDetail.summary.shipping")}(${p?.shippingMethod?.description||""})`,shippingVal:D(+a),taxText:g("quoteDetail.summary.tax"),taxVal:D(+s)}:p?.salesRepEmail||p?.shippingMethod?.id||1!=+d?!p?.salesRepEmail||p?.shippingMethod?.id||1!=+d&&5!=+d?null:{shippingText:`${g("quoteDetail.summary.shipping")}(${g("quoteDetail.summary.quoteCheckout")})`,shippingVal:g("quoteDetail.summary.tbd"),taxText:g("quoteDetail.summary.tax"),taxVal:g("quoteDetail.summary.tbd")}:{shippingText:g("quoteDetail.summary.shipping"),shippingVal:g("quoteDetail.summary.tbd"),taxText:g("quoteDetail.summary.estimatedTax"),taxVal:D(+s)},C=e=>h?g("quoteDraft.quoteSummary.tbd"):e,q=+e,S=+e-+t;return n.jsx(i,{children:n.jsx(o,{children:n.jsxs(r,{children:[n.jsx(x,{variant:"h5",children:g("quoteDetail.summary.quoteSummary")}),n.jsxs(r,{sx:{marginTop:"20px",color:"#212121"},children:[p?.displayDiscount&&n.jsxs(u,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[n.jsx(x,{children:g("quoteDetail.summary.originalSubtotal")}),n.jsx(x,{children:C(D(b(q,c)))})]}),p?.salesRepEmail||1!=+d?n.jsxs(u,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0",display:p?.displayDiscount?"":"none"},children:[n.jsx(x,{children:g("quoteDetail.summary.discountAmount")}),n.jsx(x,{children:+t>0?`-${D(+t)}`:D(+t)})]}):null,n.jsxs(u,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[n.jsx(x,{sx:{fontWeight:"bold",color:"#212121"},children:g("quoteDetail.summary.quotedSubtotal")}),n.jsx(x,{sx:{fontWeight:"bold",color:"#212121"},children:C(D(b(S,c)))})]}),w&&n.jsxs(n.Fragment,{children:[n.jsxs(u,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[n.jsx(x,{sx:{maxWidth:"70%",wordBreak:"break-word"},children:w.shippingText}),n.jsx(x,{children:C(w.shippingVal)})]}),n.jsxs(u,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[n.jsx(x,{children:w.taxText}),n.jsx(x,{children:C(w.taxVal)})]})]}),n.jsxs(u,{container:!0,justifyContent:"space-between",sx:{margin:"24px 0 0"},children:[n.jsx(x,{sx:{fontWeight:"bold",color:"#212121"},children:g("quoteDetail.summary.grandTotal")}),n.jsx(x,{sx:{fontWeight:"bold",color:"#212121"},children:C(D(+l))})]})]})]})})})}const Ee=d("img")((()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"})));function Ae(e){const{item:t,len:s,itemIndex:a,getTaxRate:i,showPrice:l,currency:c,displayDiscount:d}=e,u=m(),p=j((({storeConfigs:e})=>e.currencies.enteredInclusiveTax)),{basePrice:h,quantity:g,imageUrl:f,productName:y,options:b,sku:D,notes:w,offeredPrice:C,productsSearch:{productUrl:q,variants:S=[],taxClassId:v}}=t,k=i(v,S),T=p?+C*k/(1+k):+C*k,P=N(+h,p?+h*k/(1+k):+h*k),R=+h-+C>0&&d,I=+P*+g,E=N(+C,T)*+g;return n.jsx(r,{width:"100%",sx:{borderTop:"1px solid #D9DCE9",borderBottom:a===s-1?"1px solid #D9DCE9":""},children:n.jsxs(o,{sx:{color:"#313440",display:"flex",pl:0},children:[n.jsx(r,{children:n.jsx(Ee,{src:f||B,alt:"Product-img",loading:"lazy"})}),n.jsxs(r,{sx:{flex:1},children:[n.jsx(x,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:e}}=window;q&&(window.location.href=`${e}${q}`)},sx:{cursor:"pointer"},children:y}),n.jsx(x,{variant:"body1",color:"#616161",children:D}),n.jsx(r,{sx:{margin:"1rem 0"},children:b.length>0&&n.jsx(r,{children:b.map((e=>n.jsx(x,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${e.optionName}: ${e.optionLabel}`},e.optionName)))})}),n.jsx(x,{variant:"body1",color:"#616161",children:w}),n.jsxs(x,{sx:{fontSize:"14px"},children:[u("quoteDetail.tableCard.price"),R&&n.jsx("span",{style:{marginLeft:"5px",textDecoration:"line-through"},children:`${l($(P,{currency:c}),t)}`}),n.jsx("span",{style:{marginLeft:"5px",color:R?"#2E7D32":"#212121"},children:`${l($(C,{currency:c}),t)}`})]}),n.jsx(x,{sx:{padding:"12px 0",fontSize:"14px"},children:u("quoteDetail.tableCard.qty",{quantity:g})}),n.jsxs(x,{sx:{fontSize:"14px"},children:[u("quoteDetail.tableCard.total"),R&&n.jsx("span",{style:{marginLeft:"5px",textDecoration:"line-through"},children:`${l($(I,{currency:c}),t)}`}),n.jsx("span",{style:{marginLeft:"5px",color:R?"#2E7D32":"#212121"},children:`${l($(E,{currency:c}),t)}`})]})]})]})},t.id)}const $e=d("div")((()=>({backgroundColor:"#FFFFFF",padding:"1rem",width:"100%",border:"1px solid #E0E0E0",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px","& tbody":{"& tr":{"& td":{verticalAlign:"top"},"& td: first-of-type":{verticalAlign:"inherit"}},"& tr: hover":{"& #shoppingList-actionList":{opacity:1}}}}))),Ne=d("img")((()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"}))),Be=g.forwardRef((function(e,t){const s=m(),{total:a,getQuoteTableDetails:i,getTaxRate:o,isHandleApprove:l,displayDiscount:c,currency:d}=e,u=j((({global:e})=>e.blockPendingQuoteNonPurchasableOOS.isEnableProduct)),p=j((({storeConfigs:e})=>e.currencies.enteredInclusiveTax)),h=g.useRef(null),[f,y]=g.useState({first:12,offset:0});g.useImperativeHandle(t,(()=>({getList:()=>h.current?.getList(),refreshList:()=>{y({offset:0})}})));const b=(e,t)=>u?l?e:F({price:e,productInfo:t,showText:s("quoteDraft.quoteSummary.tbd")}):e,D=[{key:"Product",title:s("quoteDetail.table.product"),render:e=>{const t=e.options,s=e.productsSearch?.productUrl;return n.jsxs(r,{sx:{display:"flex",alignItems:"flex-start"},children:[n.jsx(Ne,{src:e.imageUrl||B,alt:"Product-img",loading:"lazy"}),n.jsxs(r,{children:[n.jsx(x,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:e}}=window;s&&(window.location.href=`${e}${s}`)},sx:{cursor:"pointer"},children:e.productName}),n.jsx(x,{variant:"body1",color:"#616161",children:e.sku}),t.length>0&&n.jsx(r,{children:t.map((e=>e.optionLabel&&n.jsx(x,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:`${e.optionName}: ${e.optionLabel}`},`${e.optionName}_${e.optionLabel}`)))}),e.notes&&n.jsxs(x,{variant:"body1",color:"#ED6C02",sx:{fontSize:"0.9rem",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[n.jsx("span",{children:"Notes: "}),e.notes]})]})]})},width:"40%"},{key:"Price",title:s("quoteDetail.table.price"),render:e=>{const{basePrice:t,offeredPrice:s,productsSearch:{variants:a=[],taxClassId:r}}=e,i=o(r,a),l=p?+s*i/(1+i):+s*i,u=N(+t,p?+t*i/(1+i):+t*i),h=N(+s,l),g=+t-+s>0&&c;return n.jsxs(n.Fragment,{children:[g&&n.jsx(x,{sx:{padding:"12px 0 0 0",textDecoration:"line-through"},children:b(`${$(u,{currency:d,isConversionRate:!1,useCurrentCurrency:!!d})}`,e)}),n.jsx(x,{sx:{padding:g?"0":"12px 0 0 0",color:g?"#2E7D32":"#212121"},children:b(`${$(h,{currency:d,isConversionRate:!1,useCurrentCurrency:!!d})}`,e)})]})},width:"15%",style:{textAlign:"right"}},{key:"Qty",title:s("quoteDetail.table.qty"),render:e=>n.jsx(x,{sx:{padding:"12px 0"},children:e.quantity}),width:"15%",style:{textAlign:"right"}},{key:"Total",title:s("quoteDetail.table.total"),render:e=>{const{basePrice:t,quantity:s,offeredPrice:a,productsSearch:{variants:i=[],taxClassId:l}}=e,u=o(l,i),h=p?+a*u/(1+u):+a*u,g=N(+t,p?+t*u/(1+u):+t*u),m=N(+a,h),f=+t-+a>0&&c,y=g*+s,j=m*+s;return n.jsxs(r,{children:[f&&n.jsx(x,{sx:{padding:"12px 0 0 0",textDecoration:"line-through"},children:b(`${$(y,{currency:d,isConversionRate:!1,useCurrentCurrency:!!d})}`,e)}),n.jsx(x,{sx:{padding:f?"0":"12px 0 0 0",color:f?"#2E7D32":"#212121"},children:b(`${$(j,{currency:d,isConversionRate:!1,useCurrentCurrency:!!d})}`,e)})]})},width:"20%",style:{textAlign:"right"}}];return n.jsxs($e,{children:[n.jsx(r,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0.5rem 0 1rem 0"},children:n.jsx(x,{sx:{fontSize:"24px"},children:s("quoteDetail.table.totalProducts",{total:a||0})})}),n.jsx(L,{ref:h,columnItems:D,rowsPerPageOptions:[12,24,36],getRequestList:i,isCustomRender:!1,hover:!0,searchParams:f,labelRowsPerPage:s("quoteDetail.table.perPage"),showBorder:!1,itemIsMobileSpacing:0,noDataText:s("quoteDetail.table.noProducts"),tableKey:"productId",renderItem:(e,t)=>n.jsx(Ae,{len:a||0,item:e,showPrice:b,itemIndex:t,currency:d,displayDiscount:c,getTaxRate:o})})]})}));function Le(e){const{quoteLegalTerms:t=""}=e,[s,a]=g.useState(!1),l=m();return n.jsx(i,{sx:{".MuiCardContent-root":{maxHeight:s?"637px":"auto"}},children:n.jsx(o,{sx:{p:"16px !important"},children:n.jsx(se,{title:l("quoteDetail.termsAndConditions"),handleOnChange:e=>{a(e)},children:n.jsx(r,{children:n.jsx(x,{variant:"body1",sx:{padding:"16px 0",maxHeight:"545px",whiteSpace:"pre-wrap",overflow:"auto"},children:t})})})})})}}}}));