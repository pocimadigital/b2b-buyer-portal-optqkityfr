System.register(["./react-setup-legacy-BoEYl_s9.js","../index-legacy.DWg148U-.js"],(function(e,a){"use strict";var t,s,n,r,c,i;return{setters:[e=>{t=e.ae,s=e.af,n=e.ag,r=e.ah,c=e.n,i=e.o},null],execute:function(){e("s",(async({companyId:e,b2bId:a,customerId:c})=>{await t(e,a);const i=await s(c);if(!i?.superAdminMasquerading)return;const{id:u,companyName:d,customerGroupId:o=0}=i.superAdminMasquerading,m={masqueradeCompany:{id:u,isAgenting:!0,companyName:d,customerGroupId:o}};n.dispatch(r(m))})),e("e",(async({b2bId:e})=>{const{masqueradeCompany:a}=n.getState().b2bFeatures,t=a.id;await c(t,e),n.dispatch(i())}))}}}));
