import{ae as i,af as m,ag as r,ah as p,n as c,o as q}from"./react-setup-BnN2zy6E.js";import"../index.CmwWzQnO.js";const M=async({companyId:e,b2bId:s,customerId:n})=>{await i(e,s);const a=await m(n);if(!(a!=null&&a.superAdminMasquerading))return;const{id:t,companyName:o,customerGroupId:d=0}=a.superAdminMasquerading,u={masqueradeCompany:{id:t,isAgenting:!0,companyName:o,customerGroupId:d}};r.dispatch(p(u))},A=async({b2bId:e})=>{const{masqueradeCompany:s}=r.getState().b2bFeatures,n=s.id;await c(n,e),r.dispatch(q())};export{A as e,M as s};
