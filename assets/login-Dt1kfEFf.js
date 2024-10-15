import{B as o,b3 as i}from"./react-setup-9NPp_6Sq.js";import"../index.CMPJ-jXT.js";const t=()=>"mutation Login($email: String!, $pass: String!) {\n  login(email: $email, password: $pass) {\n    result,\n    customer {\n      entityId,\n      phone,\n      firstName,\n      lastName,\n      email,\n      customerGroupId,\n    }\n  }\n}",r=()=>"mutation Logout {\n  logout {\n    result\n  }\n}",a="mutation Login($loginData: UserLoginType!) {\n  login(loginData: $loginData) {\n    result{\n      storefrontLoginToken\n      token\n      permissions {\n        code\n        permissionLevel\n      }\n    }\n  }\n}",l=(e,s=!0)=>o.graphqlB2B({query:a,variables:e},s),m=e=>i==="bigcommerce"?o.graphqlBC({query:t(),variables:e}):o.graphqlBCProxy({query:t(),variables:e}),u=()=>i==="bigcommerce"?o.graphqlBC({query:r()}):o.graphqlBCProxy({query:r()});export{l as a,u as b,m as c};
