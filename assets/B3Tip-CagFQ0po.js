import{j as e,B as l,r as d,a0 as c,aa as x}from"./mui-CyG7s_nf.js";import{a as h}from"./react-setup-BE8w6ZrM.js";import"./reactVendor-BAhb8EbJ.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"../index.CrdzTz2H.js";import"./lang-DxTEvHWx.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";const j={"Company only have one admin user cannot be update":'La empresa solo tiene un usuario administrador, no se puede actualizar. Ingrese como Admin y dirigase a "Configuracion de cuenta" para cambios'},m=t=>j[t]||t;function b({msg:t,onClose:r}){const n=t.jsx?t.jsx:()=>e.jsx("span",{children:m(t.msg||"")});return e.jsxs(c,{sx:{width:"320px",alignItems:"center",'& button[title="Close"]':{display:"".concat(t.isClose?"block":"none")},mb:"5px","& .MuiAlert-message":{overflow:"unset"}},variant:"outlined",severity:t.type,onClose:()=>t.isClose&&r(t.id),children:[t.title&&e.jsx(x,{children:t.title}),e.jsx(n,{})]},t.id)}function R({handleItemClose:t,vertical:r="bottom",horizontal:n="right",msgs:o=[],handleAllClose:p}){const[s]=h();return!o||!o.length?null:e.jsx(l,{children:o.length>0?o.map((i,a)=>e.jsx(d,{open:!!(i!=null&&i.id),autoHideDuration:(i==null?void 0:i.time)||5e3,onClose:(f,u)=>p(i.id,u),disableWindowBlurListener:!0,anchorOrigin:{vertical:r,horizontal:n},sx:{top:"".concat(24+a*10+a*(s?80:90),"px !important"),width:"320px",height:"auto"},children:e.jsx(l,{sx:{display:"flex"},children:e.jsx(b,{msg:i,onClose:t})})},i.id)):null})}export{R as default};
