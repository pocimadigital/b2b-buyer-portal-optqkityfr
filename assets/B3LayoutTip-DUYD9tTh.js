import{j as g}from"./mui-CyG7s_nf.js";import{r as p,d as u}from"./reactVendor-BAhb8EbJ.js";import{V as h}from"./react-setup-CTgvGe07.js";import y from"./B3Tip-BfORuZQ2.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-B3rIBjaz.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./lodashEs-Ck10JMnh.js";import"../index.mqw90l6u.js";import"./lang-DxTEvHWx.js";import"./router-BbCjXwHs.js";import"./muiIcon-BfPleEzf.js";import"./dateFns-BB2kaHor.js";import"./dropzone-D4lSiSJA.js";import"./b3Logger-CMQiGC3f.js";function R(){const{state:{tipMessage:s},dispatch:i}=p.useContext(h);p.useEffect(()=>{window.tipDispatch=i},[]);const m=(t=[])=>{i({type:"common",payload:{tipMessage:{...s,msgs:t}}})},{msgs:o=[],autoHideDuration:a=5e3,vertical:n="top",horizontal:l="right"}=s,c=t=>{const e=o.filter(r=>r.id!==t);m(e)},d=(t,e)=>{e!=="clickaway"&&u.flushSync(()=>{if(o.length){const r=o.filter(f=>f.id!==t);i({type:"common",payload:{tipMessage:{...s,msgs:r}}})}})};return g.jsx(y,{msgs:o,handleAllClose:d,autoHideDuration:a,handleItemClose:c,vertical:n,horizontal:l})}export{R as default};
