import{j as l,v as L,aK as E,aL as R,X as v,B as r}from"./mui-CyG7s_nf.js";import{r as T}from"./reactVendor-BAhb8EbJ.js";import{k as b,a as V,a3 as F}from"./react-setup-BQykMGtr.js";import"../index.BdPALFw3.js";import{B as I}from"./B3FilterMore-CvmffK7_.js";import{B as w}from"./B3FilterSearch-B0mOkW3f.js";function z({value:o,handleChange:e,label:i,list:n,config:s={labelName:"",valueName:""},isFirstSelect:a=!0,firstSelectText:x,size:h="small",w:c}){const u=t=>{e(t.target.value)},m=(s==null?void 0:s.labelName)||"name",d=(s==null?void 0:s.valueName)||"id";return n.length===0?null:l.jsxs(L,{variant:"outlined",sx:{borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",width:c||120,backgroundColor:"#efeae7","& .MuiInputBase-root.MuiFilledInput-root":{backgroundColor:"#efeae7"}},children:[l.jsx(E,{id:"demo-simple-select-outlined-label",sx:{color:b("#efeae7")},children:i}),l.jsxs(R,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:o,size:h,onChange:u,sx:{color:b("#efeae7"),"& svg":{color:b("#efeae7")}},children:[a&&l.jsx(v,{value:"",children:l.jsx("em",{children:x||"None"})}),n.map(t=>l.jsx(v,{value:t[d],children:t[m]},t[d]))]})]})}function q(o){const{sortByConfig:e,startPicker:i,endPicker:n,fiterMoreInfo:s,customButtomConfig:a,handleChange:x,handleFilterChange:h,handleFilterCustomButtomClick:c,showB3FilterMoreIcon:u=!0,searchValue:m="",resetFilterInfo:d}=o,[t]=V(),[k,M]=T.useState((e==null?void 0:e.defaultValue)||""),N=p=>{M(p),x("sortBy",p)},j=p=>{x("search",p)},S=()=>{c&&c()};return l.jsxs(l.Fragment,{children:[!t&&l.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",mb:"30px"},children:[l.jsxs(r,{sx:{maxWidth:"29rem",flexBasis:"100%",display:"flex",alignItems:"center"},children:[l.jsx(w,{handleChange:j,w:"60%",searchValue:m}),u&&l.jsx(I,{startPicker:i,endPicker:n,fiterMoreInfo:s,onChange:h,resetFilterInfo:d})]}),l.jsxs(r,{sx:{display:"flex",alignItems:"center"},children:[(e==null?void 0:e.isEnabled)&&l.jsx(r,{sx:{ml:"5px",mr:0},children:l.jsx(z,{list:(e==null?void 0:e.sortByList)||[],value:k,handleChange:N,label:(e==null?void 0:e.sortByLabel)||"",config:e==null?void 0:e.sortByItemName,isFirstSelect:e==null?void 0:e.isFirstSelect,firstSelectText:e==null?void 0:e.firstSelectText,w:(e==null?void 0:e.w)||150})}),(a==null?void 0:a.isEnabled)&&l.jsx(F,{size:"small",variant:"contained",sx:{height:"42px",p:"0 20px",...(a==null?void 0:a.customButtomStyle)||{}},onClick:S,children:(a==null?void 0:a.customLabel)||""})]})]}),t&&l.jsxs(r,{sx:{display:"flex",flexDirection:"column",mb:"5vw"},children:[l.jsxs(r,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(w,{handleChange:j,w:"90%",searchValue:m}),l.jsx(I,{startPicker:i,endPicker:n,fiterMoreInfo:s,onChange:h,resetFilterInfo:d})]}),(a==null?void 0:a.isEnabled)&&l.jsx(F,{size:"small",variant:"contained",fullWidth:!0,sx:{marginTop:"20px",height:"42px",width:"100%",...(a==null?void 0:a.customButtomStyle)||{}},onClick:S,children:(a==null?void 0:a.customLabel)||""})]})]})}export{q as B};
