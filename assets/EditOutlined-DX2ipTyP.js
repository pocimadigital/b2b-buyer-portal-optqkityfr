import{r as t}from"./reactVendor-BAhb8EbJ.js";import{o as a,j as s}from"./mui-CyG7s_nf.js";import{r as o}from"./react-setup-BnN2zy6E.js";function u(){const[i,r]=t.useState({width:window.innerWidth,height:window.innerHeight}),e=t.useCallback(()=>{r({width:window.innerWidth,height:window.innerHeight})},[]);return t.useEffect(()=>(window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)),[e]),i}const v=()=>{const{width:i}=u(),[r,e]=t.useState(!1);return t.useEffect(()=>{+i>=1536?e(!0):e(!1)},[i]),r};function m(){return[t.useRef(null)]}var n={},d=a;Object.defineProperty(n,"__esModule",{value:!0});var l=n.default=void 0,f=d(o()),c=s;l=n.default=(0,f.default)((0,c.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined");export{m as a,l as d,v as u};
