import{ag as a}from"./react-setup-CTgvGe07.js";const i=(e,n=!1)=>{const{global:{loginLandingLocation:s,recordOpenHash:o,setOpenPageFn:r}}=a.getState();if(s==="1"&&!o)return e("/"),r==null||r({isOpen:!1,openUrl:""}),n&&window.sessionStorage.clear(),window.location.reload(),!1;if(s==="1"&&o){const t=o.split("#")[1];return e(t),!1}return!0};export{i as l};
