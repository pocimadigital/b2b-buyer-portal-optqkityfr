import{o as c,j as e,au as _,aN as C}from"./mui-CyG7s_nf.js";import{r as o}from"./reactVendor-BAhb8EbJ.js";import{u as R}from"./lang-DxTEvHWx.js";import{r as p}from"./react-setup-BSIMKRnC.js";import"../index.Drw-vWYS.js";function B(r,t){const[s,u]=o.useState(r);return o.useEffect(()=>{const a=setTimeout(()=>u(r),t);return()=>{clearTimeout(a)}},[r,t]),s}var l={},E=c;Object.defineProperty(l,"__esModule",{value:!0});var f=l.default=void 0,I=E(p()),z=e;f=l.default=(0,I.default)((0,z.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");var d={},D=c;Object.defineProperty(d,"__esModule",{value:!0});var x=d.default=void 0,M=D(p()),q=e;x=d.default=(0,M.default)((0,q.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");function O({handleChange:r,w:t="100%",h:s,searchBGColor:u="#FAFAFA",searchValue:a="",...m}){const[n,i]=o.useState(""),h=R(),g=B(n,500),{placeholder:b=h("global.filter.search")}=m,v=j=>{i(j.target.value)},S=()=>{i("")};return o.useEffect(()=>{r(n)},[g]),o.useEffect(()=>{a.length>0&&i(a)},[a]),e.jsxs(_,{component:"div",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:t,maxWidth:t,border:"none",boxShadow:"none",height:s||"50px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",borderBottom:"1px solid rgba(0, 0, 0, 0.42)",backgroundColor:u},children:[e.jsx(x,{sx:{p:"10px",color:"rgba(0, 0, 0, 0.54)",fontSize:"2.7rem"}}),e.jsx(C,{sx:{ml:1,flex:1,"& .MuiInputBase-input":{pb:0}},size:"small",value:n,placeholder:b,onChange:v,endAdornment:n.length>0&&e.jsx(f,{sx:{marginRight:"8px",cursor:"pointer",padding:"4px",fontSize:"1.8rem",color:"rgba(0, 0, 0, 0.54)",":hover":{backgroundColor:"rgba(0, 0, 0, 0.04)",borderRadius:"48px"}},onClick:S})})]})}export{O as B,x as d};
