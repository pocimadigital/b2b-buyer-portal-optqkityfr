import{j as o,B as a}from"./mui-CyG7s_nf.js";import{r as i}from"./reactVendor-BAhb8EbJ.js";import{G as l,K as c,bu as p}from"./react-setup-DNiVtwmK.js";import{u as x}from"./router-BbCjXwHs.js";function d(t){const{setOpenPage:e}=t,{state:{isCloseGotoBCHome:s}}=i.useContext(l),n=x(),r=()=>{s?window.location.href="/":(n("/"),e({isOpen:!1,openUrl:""})),window.history.replaceState(null,"",window.location.pathname||"/")};return o.jsx(a,{sx:{display:"flex",flexDirection:"row-reverse",pr:2},children:o.jsx(c,{onClick:r})})}function h(t){const{setOpenPage:e,children:s}=t;return o.jsxs(p,{children:[e&&o.jsx(d,{setOpenPage:e}),s]})}export{h as B};
