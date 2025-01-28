import{o as Ze,j as e,y as qe,B as d,K as ge,ab as ie,g as et,ah as tt,s as ce,G as M,T as x,e as st}from"./mui-CyG7s_nf.js";import{g as nt,r as m}from"./reactVendor-BAhb8EbJ.js";import{u as K}from"./lang-DxTEvHWx.js";import{r as rt,G as Le,u as Q,R as $e,a8 as ve,a2 as Qe,aL as ot,ag as Te,b1 as De,b2 as Be,b3 as at,a as ye,a3 as me,C as it,k as ct,W as lt,ak as ke,b4 as G,b5 as Y,aD as Ne,ab as dt,aY as ut,p as pt,aN as xt,b6 as ht,a5 as U,aQ as ft,aO as mt,aP as gt}from"./react-setup-BE8w6ZrM.js";import"../index.CrdzTz2H.js";import{u as Ie,a as Ee,g as yt,b as bt,c as jt,Q as Ct,d as St,e as wt,f as Pt,h as vt}from"./QuoteStatus-CwOrYNYH.js";import{B as Fe,Q as Tt,a as Dt,b as kt}from"./QuoteNote-CXxA6f4f.js";import{g as It,h as Et}from"./dateFns-BB2kaHor.js";import{b as At}from"./b3Logger-CMQiGC3f.js";import{s as Rt,a as qt}from"./b3checkout-DkmB-4HA.js";import{a as He,u as be,c as Lt}from"./router-BbCjXwHs.js";import{A as $t}from"./muiIcon-BfPleEzf.js";import{g as Ae}from"./lodashEs-Ck10JMnh.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./dropzone-D4lSiSJA.js";import"./DeleteOutlined-D99lS3o8.js";var Qt=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var n=document.activeElement,o=[],g=0;g<s.rangeCount;g++)o.push(s.getRangeAt(g));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||o.forEach(function(k){s.addRange(k)}),n&&n.focus()}},Bt=Qt,Re={"text/plain":"Text","text/html":"Url",default:"Text"},Nt="Copy to clipboard: #{key}, Enter";function Ft(s){var n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,n)}function Ht(s,n){var o,g,k,C,y,t,b=!1;n||(n={}),o=n.debug||!1;try{k=Bt(),C=document.createRange(),y=document.getSelection(),t=document.createElement("span"),t.textContent=s,t.ariaHidden="true",t.style.all="unset",t.style.position="fixed",t.style.top=0,t.style.clip="rect(0, 0, 0, 0)",t.style.whiteSpace="pre",t.style.webkitUserSelect="text",t.style.MozUserSelect="text",t.style.msUserSelect="text",t.style.userSelect="text",t.addEventListener("copy",function(h){if(h.stopPropagation(),n.format)if(h.preventDefault(),typeof h.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var p=Re[n.format]||Re.default;window.clipboardData.setData(p,s)}else h.clipboardData.clearData(),h.clipboardData.setData(n.format,s);n.onCopy&&(h.preventDefault(),n.onCopy(h.clipboardData))}),document.body.appendChild(t),C.selectNodeContents(t),y.addRange(C);var a=document.execCommand("copy");if(!a)throw new Error("copy command was unsuccessful");b=!0}catch(h){o&&console.error("unable to copy using execCommand: ",h),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",s),n.onCopy&&n.onCopy(window.clipboardData),b=!0}catch(p){o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),g=Ft("message"in n?n.message:Nt),window.prompt(g,s)}}finally{y&&(typeof y.removeRange=="function"?y.removeRange(C):y.removeAllRanges()),t&&document.body.removeChild(t),k()}return b}var Mt=Ht;const zt=nt(Mt);var je={},Ut=Ze;Object.defineProperty(je,"__esModule",{value:!0});var Me=je.default=void 0,Ot=Ut(rt()),_t=e;Me=je.default=(0,Ot.default)((0,_t.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");function Vt({msg:s,isEndMessage:n,isCustomer:o}){const g=K();return e.jsxs(d,{sx:{display:"flex",flexDirection:"column",alignItems:"".concat(o?"flex-end":"flex-start"),paddingTop:"5px"},children:[(s==null?void 0:s.role)&&e.jsx(d,{sx:{height:"14px",fontWeight:400,lineHeight:"14px",fontSize:"10px",letterSpacing:"0.17px",color:"rgba(0, 0, 0, 0.38)"},children:s.role}),(s==null?void 0:s.message)&&e.jsxs(d,{sx:{display:"inline-block",lineHeight:"34px",padding:"0 10px",background:"".concat(o?"rgba(25, 118, 210, 0.3)":"rgba(0, 0, 0, 0.12)"),borderRadius:"18px",m:"1px"},children:[e.jsx(tt,{title:It((s.sendTime||0)*1e3,"K:m aa"),placement:"top",arrow:!0,children:e.jsx(d,{sx:{wordBreak:"break-word"},children:s.message})}),n&&e.jsx(d,{sx:{height:"14px",fontWeight:400,lineHeight:"14px",fontSize:"10px",letterSpacing:"0.17px",color:"rgba(0, 0, 0, 0.38)"},children:"".concat(g("quoteDetail.message.sent")," ").concat(Et(new Date((s.sendTime||0)*1e3),new Date,{addSuffix:!0}))})]})]})}function Wt({msg:s}){return e.jsx(d,{sx:{color:"rgba(0, 0, 0, 0.6)",textAlign:"center",height:"21px",mb:"5px"},children:"".concat(ot((s==null?void 0:s.date)||0))})}function Gt({msgs:s,id:n,isB2BUser:o,email:g,status:k}){const{dispatch:C}=m.useContext(Le),t=qe().palette.primary.main,b=K(),a=m.useRef(null),h=m.useRef(0),[p,H]=m.useState([]),[I,P]=m.useState(0),[i,l]=m.useState(""),[f,A]=m.useState(!1),{quotesActionsPermission:j}=Q($e),D=o?j:!0,v=w=>{let E={};const R=[];let N=0;w.forEach((c,le)=>{var X,J,te,se,Z,_,ne,W,re;le===0?(R.push({isCustomer:!((X=c.role)!=null&&X.includes("Sales rep:")),date:c==null?void 0:c.date,key:"".concat(c==null?void 0:c.date,"date")}),R.push({isCustomer:!((J=c.role)!=null&&J.includes("Sales rep:")),message:c.message,sendTime:c.date,role:c.role,key:c==null?void 0:c.date}),E=c,E.isCustomer=!((te=c.role)!=null&&te.includes("Sales rep:"))):(((c==null?void 0:c.date)||0)-((E==null?void 0:E.date)||0)>60*60&&R.push({isCustomer:!((se=c.role)!=null&&se.includes("Sales rep:")),date:c==null?void 0:c.date,key:"".concat(c==null?void 0:c.date,"date")}),E.isCustomer===!((Z=c.role)!=null&&Z.includes("Sales rep:"))?R.push({isCustomer:!((_=c.role)!=null&&_.includes("Sales rep:")),message:c.message,sendTime:c.date,key:c==null?void 0:c.date}):R.push({isCustomer:!((ne=c.role)!=null&&ne.includes("Sales rep:")),message:c.message,role:c.role,sendTime:c.date,key:c==null?void 0:c.date}),E=c,E.isCustomer=!((W=c.role)!=null&&W.includes("Sales rep:"))),(re=c.role)!=null&&re.includes("Sales rep:")&&!c.read&&(N+=1)}),P(N),H(R)},$=m.useMemo(()=>e.jsxs(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:["".concat(b("quoteDetail.message.message")," "),I!==0&&e.jsx(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"20px",height:"20px",borderRadius:"50%",background:t||"#1976D2",color:"#fff",fontSize:"12px",ml:"8px"},children:I})]}),[t,I]);m.useEffect(()=>{v(s)},[s]),m.useEffect(()=>{a.current&&p.length&&(a.current.scrollTop=a.current.scrollHeight)},[p]);const B=async w=>{try{const E=o?Ie:Ee;A(!0);const{quoteUpdate:{quote:{trackingHistory:R}}}=await E({id:+n,quoteData:{message:w,lastMessage:parseInt("".concat(new Date().getTime()/1e3),10),userEmail:g||"",storeHash:ve}});l(""),P(0),v(R)}finally{A(!1)}},O=w=>{w.key==="Enter"&&B(w.target.value||"")},V=m.useCallback(w=>{var E;if(w){if(!D&&o)return;const R=o?Ie:Ee;h.current===0&&s.length&&R({id:+n,quoteData:{lastMessage:(E=s[s.length-1])==null?void 0:E.date,userEmail:g||"",storeHash:ve}}),P(0),a.current&&(a.current.scrollTop=a.current.scrollHeight),h.current+=1}},[g,n,o,s,D]);return m.useEffect(()=>{C({type:"common",payload:{quoteDetailHasNewMessages:I!==0}})},[I]),e.jsx(ge,{children:e.jsx(ie,{sx:{p:"16px !important"},children:e.jsxs(Fe,{handleOnChange:V,title:$,children:[e.jsxs(d,{sx:{padding:"16px 0"},children:[e.jsx(d,{sx:{position:"relative",color:"rgba(0, 0, 0, 0.6)",opacity:.6,textAlign:"left",width:"100%",fontSize:"14px"},children:b("quoteDetail.message.merchantAnswers")}),e.jsx(d,{ref:a,sx:{mt:"20px",maxHeight:"280px",overflowY:"auto","&::-webkit-scrollbar":{display:"none"}},children:p.map((w,E)=>e.jsxs(d,{children:[e.jsx(Vt,{msg:w,isEndMessage:E===p.length-1,isCustomer:!!w.isCustomer}),w.date&&e.jsx(Wt,{msg:w})]},w.key))})]}),k!==4&&D&&e.jsx(Qe,{isSpinning:f,spinningHeight:50,size:10,isCloseLoading:!0,tip:"waiting..",children:e.jsxs(d,{sx:{display:"flex",width:"100%"},children:[e.jsx(et,{onKeyDown:O,sx:{width:"100%","& .MuiFormLabel-root":{color:"rgba(0, 0, 0, 0.38)"},"& input":{padding:"1.5rem 0 0.5rem 0"}},value:i,onChange:w=>{l(w.target.value)},size:"small",label:b("quoteDetail.message.typeMessage"),variant:"outlined"}),e.jsx(d,{onClick:()=>B(i),sx:{width:"42px",height:"36px",margin:"10px 0 0 10px",background:"#BAD6F2",borderRadius:"50%"},children:e.jsx(Me,{sx:{height:"18px",width:"18px",margin:"8px 0 0 9px",color:"#0000008A"},fontSize:"small"})})]})})]})})})}const ze=async({role:s,proceedingCheckoutFn:n,location:o,quoteId:g,navigate:k})=>{try{if(Te.dispatch(De("")),n())return;const{storefrontProductSettings:{hidePriceFromGuests:y}}=await yt();if(y&&+s==100&&k){Te.dispatch(De(o.pathname+o.search)),k("/login");return}const t=+s==99?bt:jt,b=Be(o.search,"date"),a=await t({id:+g});Rt(g,b);const{quoteCheckout:{quoteCheckout:{checkoutUrl:h,cartId:p}}}=a;if(at==="bigcommerce"){window.location.href=h;return}await qt(p,h)}catch(C){At.error(C)}};function Kt(s){const{quoteId:n,role:o,isAgenting:g,status:k,proceedingCheckoutFn:C}=s,[y]=ye(),t=K(),b=He(),a=be(),h=y?{alignItems:"flex-end",flexDirection:"column"}:{alignItems:"center"};return k!==5?e.jsx(d,{sx:{position:"fixed",bottom:y&&g?"52px":0,left:0,backgroundColor:"#fff",width:"100%",padding:"0.8rem 1rem",height:"auto",display:"flex",zIndex:"999",justifyContent:y?"center":"flex-end",displayPrint:"none",...h},children:e.jsx(me,{variant:"contained",onClick:()=>{ze({proceedingCheckoutFn:C,role:o,location:b,quoteId:n,navigate:a})},sx:{width:y?"100%":"auto"},children:t("quoteDetail.footer.proceedToCheckout")})}):null}const ae=ce("div")(()=>({display:"flex",alignItems:"center",marginTop:"0.5rem"}));function Yt(s){const[n]=ye(),o=K(),{status:g,quoteNumber:k,issuedAt:C,expirationDate:y,exportPdf:t,printQuote:b,role:a,quoteTitle:h,salesRepInfo:p}=s,{state:{portalStyle:{backgroundColor:H="#FEF9F5"}}}=m.useContext(it),I=ct(H),i=qe().palette.primary.main,l=be(),f=A=>n?{}:{xs:A};return e.jsxs(e.Fragment,{children:[+a!=100&&e.jsx(d,{sx:{marginBottom:"10px",width:"fit-content",displayPrint:"none"},children:e.jsxs(d,{sx:{color:"#1976d2",cursor:"pointer",display:"flex",alignItems:"center"},onClick:()=>{l("/quotes")},children:[e.jsx($t,{fontSize:"small",sx:{fontSize:"12px",marginRight:"0.5rem",color:i}}),e.jsx("p",{style:{color:i,margin:"0"},children:o("quoteDetail.header.backToQuoteLists")})]})}),e.jsxs(M,{container:!0,spacing:2,sx:{display:"flex",justifyContent:"space-between",flexDirection:"".concat(n?"column":"row"),mb:"".concat(n?"16px":"")},children:[e.jsxs(M,{item:!0,...f(8),sx:{color:I},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"".concat(n?"start":"center"),flexDirection:"".concat(n?"column":"row")},children:[e.jsx(x,{sx:{marginRight:"10px",fontSize:"34px",color:lt(I,.87)},children:o("quoteDetail.header.quoteNumber",{quoteNumber:k||""})}),e.jsx(Ct,{code:g})]}),h&&e.jsxs(ae,{children:[e.jsx(x,{variant:"subtitle2",sx:{marginRight:"0.5rem",fontSize:"16px"},children:o("quoteDetail.header.title")}),e.jsx("span",{children:h})]}),((p==null?void 0:p.salesRepName)||(p==null?void 0:p.salesRepEmail))&&e.jsxs(ae,{children:[e.jsx(x,{variant:"subtitle2",sx:{marginRight:"0.5rem",fontSize:"16px"},children:o("quoteDetail.header.salesRep")}),e.jsx("span",{children:(p==null?void 0:p.salesRepEmail)!==""?"".concat(p==null?void 0:p.salesRepName,"(").concat(p==null?void 0:p.salesRepEmail,")"):p==null?void 0:p.salesRepName})]}),e.jsxs(d,{children:[e.jsxs(ae,{children:[e.jsx(x,{variant:"subtitle2",sx:{marginRight:"0.5rem",fontSize:"16px"},children:o("quoteDetail.header.issuedOn")}),e.jsx("span",{children:"".concat(C?ke(+C):"")})]}),e.jsxs(ae,{children:[e.jsx(x,{variant:"subtitle2",sx:{marginRight:"0.5rem",fontSize:"16px"},children:o("quoteDetail.header.expirationDate")}),e.jsx("span",{children:"".concat(y?ke(+y):"")})]})]})]}),+a!=100&&e.jsx(M,{item:!0,sx:{textAlign:"".concat(n?"none":"end"),displayPrint:"none"},...f(4),children:e.jsxs(d,{children:[e.jsx(me,{variant:"outlined",sx:{marginRight:"1rem",displayPrint:"none"},onClick:b,children:o("quoteDetail.header.print")}),e.jsx(me,{variant:"outlined",onClick:t,children:o("quoteDetail.header.downloadPDF")})]})})]})]})}function Xt({quoteSummary:{originalSubtotal:s,discount:n,tax:o,shipping:g,totalAmount:k},quoteDetailTax:C=0,status:y,quoteDetail:t,isHideQuoteCheckout:b}){const a=K(),h=Q(({storeConfigs:j})=>j.currencies.enteredInclusiveTax),p=Q(({global:j})=>j.showInclusiveTaxPrice),H=(j,D)=>h?p?j:j-D:p?j+D:j,I=j=>"".concat(G(j,{currency:t.currency,isConversionRate:!1,useCurrentCurrency:!!t.currency})),i=(()=>{var j,D,v,$;return(j=t==null?void 0:t.shippingMethod)!=null&&j.id?{shippingText:"".concat(a("quoteDetail.summary.shipping"),"(").concat(((D=t==null?void 0:t.shippingMethod)==null?void 0:D.description)||"",")"),shippingVal:I(+g),taxText:a("quoteDetail.summary.tax"),taxVal:I(+o)}:!(t!=null&&t.salesRepEmail)&&!((v=t==null?void 0:t.shippingMethod)!=null&&v.id)&&+y==1?{shippingText:a("quoteDetail.summary.shipping"),shippingVal:a("quoteDetail.summary.tbd"),taxText:a("quoteDetail.summary.estimatedTax"),taxVal:I(+o)}:t!=null&&t.salesRepEmail&&!(($=t==null?void 0:t.shippingMethod)!=null&&$.id)&&(+y==1||+y==5)?{shippingText:"".concat(a("quoteDetail.summary.shipping"),"(").concat(a("quoteDetail.summary.quoteCheckout"),")"),shippingVal:a("quoteDetail.summary.tbd"),taxText:a("quoteDetail.summary.tax"),taxVal:a("quoteDetail.summary.tbd")}:null})(),l=j=>b?a("quoteDraft.quoteSummary.tbd"):j,f=+s,A=+s-+n;return e.jsx(ge,{children:e.jsx(ie,{children:e.jsxs(d,{children:[e.jsx(x,{variant:"h5",children:a("quoteDetail.summary.quoteSummary")}),e.jsxs(d,{sx:{marginTop:"20px",color:"#212121"},children:[(t==null?void 0:t.displayDiscount)&&e.jsxs(M,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[e.jsx(x,{children:a("quoteDetail.summary.originalSubtotal")}),e.jsx(x,{children:l(I(H(f,C)))})]}),!(t!=null&&t.salesRepEmail)&&+y==1?null:e.jsxs(M,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0",display:t!=null&&t.displayDiscount?"":"none"},children:[e.jsx(x,{children:a("quoteDetail.summary.discountAmount")}),e.jsx(x,{children:+n>0?"-".concat(I(+n)):I(+n)})]}),e.jsxs(M,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[e.jsx(x,{sx:{fontWeight:"bold",color:"#212121"},children:a("quoteDetail.summary.quotedSubtotal")}),e.jsx(x,{sx:{fontWeight:"bold",color:"#212121"},children:l(I(H(A,C)))})]}),i&&e.jsxs(e.Fragment,{children:[e.jsxs(M,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[e.jsx(x,{sx:{maxWidth:"70%",wordBreak:"break-word"},children:i.shippingText}),e.jsx(x,{children:l(i.shippingVal)})]}),e.jsxs(M,{container:!0,justifyContent:"space-between",sx:{margin:"4px 0"},children:[e.jsx(x,{children:i.taxText}),e.jsx(x,{children:l(i.taxVal)})]})]}),e.jsxs(M,{container:!0,justifyContent:"space-between",sx:{margin:"24px 0 0"},children:[e.jsx(x,{sx:{fontWeight:"bold",color:"#212121"},children:a("quoteDetail.summary.grandTotal")}),e.jsx(x,{sx:{fontWeight:"bold",color:"#212121"},children:l(I(+k))})]})]})]})})})}const Jt=ce("img")(()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"}));function Zt(s){const{item:n,len:o,itemIndex:g,getTaxRate:k,showPrice:C,currency:y,displayDiscount:t}=s,b=K(),a=Q(({storeConfigs:N})=>N.currencies.enteredInclusiveTax),{basePrice:h,quantity:p,imageUrl:H,productName:I,options:P,sku:i,notes:l,offeredPrice:f,productsSearch:{productUrl:A,variants:j=[],taxClassId:D}}=n,v=k(D,j),$=a?+h*v/(1+v):+h*v,B=a?+f*v/(1+v):+f*v,O=Y(+h,$),V=Y(+f,B),w=+h-+f>0&&t,E=+O*+p,R=V*+p;return e.jsx(d,{width:"100%",sx:{borderTop:"1px solid #D9DCE9",borderBottom:g===o-1?"1px solid #D9DCE9":""},children:e.jsxs(ie,{sx:{color:"#313440",display:"flex",pl:0},children:[e.jsx(d,{children:e.jsx(Jt,{src:H||Ne,alt:"Product-img",loading:"lazy"})}),e.jsxs(d,{sx:{flex:1},children:[e.jsx(x,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:N}}=window;A&&(window.location.href="".concat(N).concat(A))},sx:{cursor:"pointer"},children:I}),e.jsx(x,{variant:"body1",color:"#616161",children:i}),e.jsx(d,{sx:{margin:"1rem 0"},children:P.length>0&&e.jsx(d,{children:P.map(N=>e.jsx(x,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:"".concat(N.optionName,": ").concat(N.optionLabel)},N.optionName))})}),e.jsx(x,{variant:"body1",color:"#616161",children:l}),e.jsxs(x,{sx:{fontSize:"14px"},children:[b("quoteDetail.tableCard.price"),w&&e.jsx("span",{style:{marginLeft:"5px",textDecoration:"line-through"},children:"".concat(C(G(O,{currency:y}),n))}),e.jsx("span",{style:{marginLeft:"5px",color:w?"#2E7D32":"#212121"},children:"".concat(C(G(f,{currency:y}),n))})]}),e.jsx(x,{sx:{padding:"12px 0",fontSize:"14px"},children:b("quoteDetail.tableCard.qty",{quantity:p})}),e.jsxs(x,{sx:{fontSize:"14px"},children:[b("quoteDetail.tableCard.total"),w&&e.jsx("span",{style:{marginLeft:"5px",textDecoration:"line-through"},children:"".concat(C(G(E,{currency:y}),n))}),e.jsx("span",{style:{marginLeft:"5px",color:w?"#2E7D32":"#212121"},children:"".concat(C(G(R,{currency:y}),n))})]})]})]})},n.id)}const es=ce("div")(()=>({backgroundColor:"#FFFFFF",padding:"1rem",width:"100%",border:"1px solid #E0E0E0",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px","& tbody":{"& tr":{"& td":{verticalAlign:"top"},"& td: first-of-type":{verticalAlign:"inherit"}},"& tr: hover":{"& #shoppingList-actionList":{opacity:1}}}})),ts=ce("img")(()=>({maxWidth:"60px",height:"auto",marginRight:"0.5rem"}));function ss(s,n){const o=K(),{total:g,getQuoteTableDetails:k,getTaxRate:C,isHandleApprove:y,displayDiscount:t,currency:b}=s,a=Q(({global:l})=>l.blockPendingQuoteNonPurchasableOOS.isEnableProduct),h=Q(({storeConfigs:l})=>l.currencies.enteredInclusiveTax),p=m.useRef(null),[H,I]=m.useState({first:12,offset:0});m.useImperativeHandle(n,()=>({getList:()=>{var l;return(l=p.current)==null?void 0:l.getList()},refreshList:()=>{I({offset:0})}}));const P=(l,f)=>a?y?l:ut({price:l,productInfo:f,showText:o("quoteDraft.quoteSummary.tbd")}):l,i=[{key:"Product",title:o("quoteDetail.table.product"),render:l=>{var j;const f=l.options,A=(j=l.productsSearch)==null?void 0:j.productUrl;return e.jsxs(d,{sx:{display:"flex",alignItems:"flex-start"},children:[e.jsx(ts,{src:l.imageUrl||Ne,alt:"Product-img",loading:"lazy"}),e.jsxs(d,{children:[e.jsx(x,{variant:"body1",color:"#212121",onClick:()=>{const{location:{origin:D}}=window;A&&(window.location.href="".concat(D).concat(A))},sx:{cursor:"pointer"},children:l.productName}),e.jsx(x,{variant:"body1",color:"#616161",children:l.sku}),f.length>0&&e.jsx(d,{children:f.map(D=>D.optionLabel&&e.jsx(x,{sx:{fontSize:"0.75rem",lineHeight:"1.5",color:"#455A64"},children:"".concat(D.optionName,": ").concat(D.optionLabel)},"".concat(D.optionName,"_").concat(D.optionLabel)))}),l.notes&&e.jsxs(x,{variant:"body1",color:"#ED6C02",sx:{fontSize:"0.9rem",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[e.jsx("span",{children:"Notes: "}),l.notes]})]})]})},width:"40%"},{key:"Price",title:o("quoteDetail.table.price"),render:l=>{const{basePrice:f,offeredPrice:A,productsSearch:{variants:j=[],taxClassId:D}}=l,v=C(D,j),$=h?+f*v/(1+v):+f*v,B=h?+A*v/(1+v):+A*v,O=Y(+f,$),V=Y(+A,B),w=+f-+A>0&&t;return e.jsxs(e.Fragment,{children:[w&&e.jsx(x,{sx:{padding:"12px 0 0 0",textDecoration:"line-through"},children:P("".concat(G(O,{currency:b,isConversionRate:!1,useCurrentCurrency:!!b})),l)}),e.jsx(x,{sx:{padding:w?"0":"12px 0 0 0",color:w?"#2E7D32":"#212121"},children:P("".concat(G(V,{currency:b,isConversionRate:!1,useCurrentCurrency:!!b})),l)})]})},width:"15%",style:{textAlign:"right"}},{key:"Qty",title:o("quoteDetail.table.qty"),render:l=>e.jsx(x,{sx:{padding:"12px 0"},children:l.quantity}),width:"15%",style:{textAlign:"right"}},{key:"Total",title:o("quoteDetail.table.total"),render:l=>{const{basePrice:f,quantity:A,offeredPrice:j,productsSearch:{variants:D=[],taxClassId:v}}=l,$=C(v,D),B=h?+f*$/(1+$):+f*$,O=h?+j*$/(1+$):+j*$,V=Y(+f,B),w=Y(+j,O),E=+f-+j>0&&t,R=V*+A,N=w*+A;return e.jsxs(d,{children:[E&&e.jsx(x,{sx:{padding:"12px 0 0 0",textDecoration:"line-through"},children:P("".concat(G(R,{currency:b,isConversionRate:!1,useCurrentCurrency:!!b})),l)}),e.jsx(x,{sx:{padding:E?"0":"12px 0 0 0",color:E?"#2E7D32":"#212121"},children:P("".concat(G(N,{currency:b,isConversionRate:!1,useCurrentCurrency:!!b})),l)})]})},width:"20%",style:{textAlign:"right"}}];return e.jsxs(es,{children:[e.jsx(d,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0.5rem 0 1rem 0"},children:e.jsx(x,{sx:{fontSize:"24px"},children:o("quoteDetail.table.totalProducts",{total:g||0})})}),e.jsx(dt,{ref:p,columnItems:i,rowsPerPageOptions:[12,24,36],getRequestList:k,isCustomRender:!1,hover:!0,searchParams:H,labelRowsPerPage:o("quoteDetail.table.perPage"),showBorder:!1,itemIsMobileSpacing:0,noDataText:o("quoteDetail.table.noProducts"),tableKey:"productId",renderItem:(l,f)=>e.jsx(Zt,{len:g||0,item:l,showPrice:P,itemIndex:f,currency:b,displayDiscount:t,getTaxRate:C})})]})}const ns=m.forwardRef(ss);function rs(s){const{quoteLegalTerms:n=""}=s,[o,g]=m.useState(!1),k=K(),C=y=>{g(y)};return e.jsx(ge,{sx:{".MuiCardContent-root":{maxHeight:o?"637px":"auto"}},children:e.jsx(ie,{sx:{p:"16px !important"},children:e.jsx(Fe,{title:k("quoteDetail.termsAndConditions"),handleOnChange:C,children:e.jsx(d,{children:e.jsx(x,{variant:"body1",sx:{padding:"16px 0",maxHeight:"545px",whiteSpace:"pre-wrap",overflow:"auto"},children:n})})})})})}function Ts(){const{id:s=""}=Lt(),n=be(),{state:{bcLanguage:o}}=m.useContext(Le),g=Q(pt),k=Q(({company:r})=>r.companyInfo.id),C=Q(({company:r})=>r.customer.emailAddress),y=Q(({company:r})=>r.customer.customerGroupId),t=Q(({company:r})=>r.customer.role),b=Q(({b2bFeatures:r})=>r.masqueradeCompany.isAgenting),[a]=ye(),{quoteConvertToOrderPermission:h,purchasabilityPermission:p}=Q($e),H=g?h:+t!=2,I=g?p:+t!=2,P=K(),[i,l]=m.useState({}),[f,A]=m.useState([]),[j,D]=m.useState([]),[v,$]=m.useState(!1),[B,O]=m.useState(!0),[V,w]=m.useState({originalSubtotal:0,discount:0,tax:0,shipping:0,totalAmount:0}),[E,R]=m.useState(!1),[N,c]=m.useState(!1),[le,X]=m.useState(0),[J,te]=m.useState({oos:"",nonPurchasable:""}),[se,Z]=m.useState(!1),_=He(),ne=Q(xt),W=Q(({global:r})=>r.taxZoneRates),re=Q(({storeConfigs:r})=>r.currencies.enteredInclusiveTax),oe=Q(({global:r})=>{var u;return(u=r.blockPendingQuoteNonPurchasableOOS)==null?void 0:u.isEnableProduct});m.useEffect(()=>{let r="",u="";f.forEach(S=>{const T=ht(S);T!=null&&T.type&&oe&&!(S!=null&&S.purchaseHandled)&&(T.type==="oos"&&(r+="".concat(S.productName).concat(r?",":"")),T.type==="non-purchasable"&&(u+="".concat(S.productName).concat(u?",":"")))});const q=!!r||!!u;oe&&v&&q&&(r&&U.error(P("quoteDetail.message.insufficientStock",{ProductName:r})),u&&U.error(P("quoteDetail.message.nonPurchasable",{ProductName:u}))),O(q),te({oos:r,nonPurchasable:u})},[oe,v,f]);const de=m.useCallback(()=>{if(B){const{oos:r,nonPurchasable:u}=J;r&&U.error(P("quoteDetail.message.insufficientStock",{ProductName:r})),u&&U.error(P("quoteDetail.message.nonPurchasable",{ProductName:u}))}return B},[B,J]),ue=[];if(W!=null&&W.length){const r=W==null?void 0:W.find(u=>u.id===1);if(r){const{rates:u=[]}=r;u[0]&&u[0].enabled&&u[0].classRates.length&&u[0].classRates.forEach(q=>ue.push(q))}}const Ce=(r,u)=>{var q;if(u.length){const S=Ae(u,"[0].bc_calculated_price.tax_exclusive",0),T=Ae(u,"[0].bc_calculated_price.tax_inclusive",0);return S>0?(T-S)/S:0}return ue.length?(((q=ue.find(S=>S.taxClassId===r))==null?void 0:q.rate)||0)/100:0},Ue=async r=>{if(r.length>0){const u=[];r.forEach(S=>{u.includes(S.productId)||u.push(S.productId)});const q=g?mt:gt;try{const{currency_code:S}=ne,{productsSearch:T}=await q({productIds:u,currencyCode:S,companyId:k,customerGroupId:y}),L=ft(T);return r.forEach(z=>{const pe=z,xe=L.find(he=>{const{id:ee}=he;return+z.productId==+ee});pe.productsSearch=xe||{}}),r}catch(S){U.error(S)}}},Oe=async()=>{R(!0),c(!1);try{const{search:r}=_,u=Be(r,"date")||"",q={id:+s,date:u.toString()},S=+t==99?St:wt,{quote:T}=await S(q),L=await Ue(T.productsList);if(l(T),w({originalSubtotal:T.subtotal,discount:T.discount,tax:T.taxTotal,shipping:T.shippingTotal,totalAmount:T.totalAmount}),A(L),+T.shippingTotal==0)X(+T.taxTotal);else{let F=0;L==null||L.forEach(Ye=>{const{quantity:we,offeredPrice:Pe,productsSearch:{variants:Xe=[],taxClassId:Je}}=Ye,fe=Ce(Je,Xe);F+=re?+Pe*fe/(1+fe)*+we:+Pe*fe*+we}),X(F)}const{backendAttachFiles:z=[],storefrontAttachFiles:pe=[],salesRep:xe,salesRepEmail:he}=T;$(!!xe||!!he);const ee=[];return pe.forEach(F=>{ee.push({fileName:F.fileName,fileType:F.fileType,fileUrl:F.fileUrl,id:F.id,hasDelete:i.status!==4,title:P("quoteDetail.uploadedByCustomer",{createdBy:F.createdBy})})}),z.forEach(F=>{ee.push({fileName:F.fileName,fileType:F.fileType,fileUrl:F.fileUrl,id:F.id,title:P("quoteDetail.uploadedBySalesRep",{createdBy:F.createdBy})})}),D(ee),T}catch(r){throw U.error(r),r}finally{R(!1),c(!0)}},Se=async r=>{R(!0);const{id:u,createdAt:q}=i;try{const S={quoteId:+u,createdAt:q,isPreview:r,lang:o},L=await(+t==99?Pt:vt)(S);if(L)return{url:L.quoteFrontendPdf.url,content:L.quoteFrontendPdf.content}}catch(S){U.error(S)}return{url:"",content:""}},_e=async()=>{try{const{url:r}=await Se(!1);r&&window.open("".concat(r),"_blank")}catch(r){U.error(r)}finally{R(!1)}},Ve=async()=>{var r,u,q,S,T;try{const{content:L}=await Se(!0),z=document.createElement("iframe");z.setAttribute("style","display:none;"),(r=document.getElementById("bundle-container"))==null||r.appendChild(z),(u=z.contentDocument)==null||u.open(),(q=z.contentDocument)==null||q.write(L),(S=z.contentDocument)==null||S.close(),R(!1),(T=z.contentWindow)==null||T.print()}catch(L){U.error(L)}},We=async r=>{let u=f;if(u.length===0){const L=await Oe();u=(L==null?void 0:L.productsList)||[]}const q=+r.offset,S=+r.first+q;return u.length?{edges:u.slice(q,S),totalCount:u.length}:{edges:[],totalCount:0}};m.useEffect(()=>{const{state:r}=_;if(!r)return;const u=()=>e.jsxs(d,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(d,{sx:{mr:"15px"},children:+t==100?P("quoteDetail.submittedQuote"):P("quoteDetail.quoteSubmitted")}),e.jsx(st,{onClick:()=>{+t==100?(zt(window.location.href),U.success(P("quoteDetail.copySuccessful"))):n("/quotes")},variant:"text",sx:{color:"#ffffff",textAlign:"left",padding:0},children:+t==100?P("quoteDetail.copyQuoteLink"):P("quoteDetail.reviewAllQuotes")})]});setTimeout(()=>{U.success("",{jsx:()=>u(),isClose:!0,duration:3e4})},10),_.state=null},[_,n,t]);const Ge=async()=>{try{Z(!0),await ze({quoteId:s,proceedingCheckoutFn:de,role:t,location:_,navigate:n})}finally{Z(!1)}};m.useEffect(()=>{_.search.includes("isCheckout")&&s&&Ge()},[s,_,de]);const Ke=()=>oe?!!(v&&B||!B):!0;return e.jsx(Qe,{isSpinning:E||se,children:e.jsxs(d,{sx:{display:"flex",flexDirection:"column",flex:1},children:[e.jsx(Yt,{status:i.status,quoteNumber:i.quoteNumber,issuedAt:i.createdAt,expirationDate:i.expiredAt,exportPdf:_e,printQuote:Ve,role:t,quoteTitle:i.quoteTitle,salesRepInfo:i.salesRepInfo}),e.jsx(d,{sx:{marginTop:"1rem"},children:e.jsx(Tt,{contactInfo:i.contactInfo,shippingAddress:i.shippingAddress,billingAddress:i.billingAddress})}),e.jsxs(M,{container:!0,spacing:a?2:0,rowSpacing:0,sx:{overflow:"auto",flexWrap:a?"wrap":"nowrap",paddingBottom:"20px",marginBottom:a?"6rem":0,marginTop:a?0:"1rem","@media print":{overflow:"hidden"}},children:[e.jsx(M,{item:!0,xs:a?12:8,rowSpacing:0,sx:a?{flexBasis:"100%",pl:"16px"}:{mr:"16px"},children:e.jsx(d,{sx:a?{flexBasis:"100%"}:{},children:e.jsx(ns,{total:f.length,currency:i.currency,isHandleApprove:v,getQuoteTableDetails:We,getTaxRate:Ce,displayDiscount:i.displayDiscount})})}),e.jsxs(M,{item:!0,xs:a?12:4,rowSpacing:0,sx:a?{flexBasis:"100%"}:{pl:0},children:[e.jsx(d,{sx:{marginBottom:"1rem"},children:e.jsx(Xt,{isHideQuoteCheckout:B,quoteSummary:V,quoteDetailTax:le,status:i.status,quoteDetail:i})}),i.notes&&e.jsx(d,{sx:{marginBottom:"1rem",displayPrint:"none"},children:e.jsx(Dt,{quoteNotes:i.notes})}),e.jsx(d,{sx:{marginBottom:"1rem",displayPrint:"none"},children:e.jsx(Gt,{id:s,status:i.status,isB2BUser:g,email:C||"",msgs:(i==null?void 0:i.trackingHistory)||[]})}),e.jsx(d,{sx:{marginBottom:"1rem",displayPrint:"none"},children:e.jsx(kt,{allowUpload:+i.status!=4,quoteId:i.id,status:i.status,defaultFileList:j})}),i.legalTerms&&e.jsx(d,{sx:{displayPrint:"none"},children:e.jsx(rs,{quoteLegalTerms:i.legalTerms})})]})]}),H&&I&&+i.status!=4&&N&&(i==null?void 0:i.allowCheckout)&&Ke()&&e.jsx(Kt,{quoteId:i.id,role:t,isAgenting:b,status:i.status,proceedingCheckoutFn:de})]})})}export{Ts as default};
