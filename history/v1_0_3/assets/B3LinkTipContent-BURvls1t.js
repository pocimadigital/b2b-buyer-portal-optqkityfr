import{j as t,B as r}from"./mui-CyG7s_nf.js";import{u,C as f}from"./useCustomCallbacks-D2SU_LXI.js";import"./reactVendor-BAhb8EbJ.js";import{u as p}from"./router-BbCjXwHs.js";function x({message:i,link:e="",linkText:n="View",isOutLink:s=!1,isCustomEvent:o=!1}){const a=p(),c=u(f.OnClickCartButton,(m,l)=>{o&&!l()||(s?window.location.href=e:a(e))});return t.jsxs(r,{children:[t.jsx(r,{sx:{display:"inline",marginRight:e?"20px":"0"},children:i}),e&&t.jsx(r,{onClick:c,sx:{color:"inherit",display:"inline",textDecoration:"none",cursor:"pointer"},children:n})]})}const v=({message:i,link:e="",linkText:n="View",isOutLink:s=!1,isCustomEvent:o=!1})=>function(){return t.jsx(x,{message:i,link:e,linkText:n,isOutLink:s,isCustomEvent:o})};export{v as s};