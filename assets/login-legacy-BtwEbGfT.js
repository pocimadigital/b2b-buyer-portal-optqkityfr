System.register(["./react-setup-legacy-Cfb8SlNa.js","../index-legacy.CVtY65ui.js"],(function(n,e){"use strict";var t,r;return{setters:[n=>{t=n.B,r=n.b3},null],execute:function(){n("a",((n,e=!0)=>t.graphqlB2B({query:"mutation Login($loginData: UserLoginType!) {\n  login(loginData: $loginData) {\n    result{\n      storefrontLoginToken\n      token\n      permissions {\n        code\n        permissionLevel\n      }\n    }\n  }\n}",variables:n},e))),n("c",(n=>"bigcommerce"===r?t.graphqlBC({query:"mutation Login($email: String!, $pass: String!) {\n  login(email: $email, password: $pass) {\n    result,\n    customer {\n      entityId,\n      phone,\n      firstName,\n      lastName,\n      email,\n      customerGroupId,\n    }\n  }\n}",variables:n}):t.graphqlBCProxy({query:"mutation Login($email: String!, $pass: String!) {\n  login(email: $email, password: $pass) {\n    result,\n    customer {\n      entityId,\n      phone,\n      firstName,\n      lastName,\n      email,\n      customerGroupId,\n    }\n  }\n}",variables:n}))),n("b",(()=>"bigcommerce"===r?t.graphqlBC({query:"mutation Logout {\n  logout {\n    result\n  }\n}"}):t.graphqlBCProxy({query:"mutation Logout {\n  logout {\n    result\n  }\n}"})))}}}));
