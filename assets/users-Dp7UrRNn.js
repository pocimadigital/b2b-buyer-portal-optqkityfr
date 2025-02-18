import{B as s,az as r,aq as m,a8 as o}from"./react-setup-0pxRNfGw.js";import"../index.OrcBLeG3.js";const n=e=>"{\n  users (\n    first: ".concat(e.first,'\n    search: "').concat(e.q||"",'"\n    offset: ').concat(e.offset,"\n    companyId: ").concat(e.companyId,"\n    ").concat(e.companyRoleId===""?"":"companyRoleId: ".concat(e.companyRoleId),"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node{\n        id,\n        createdAt,\n        updatedAt,\n        firstName,\n        lastName,\n        email,\n        phone,\n        bcId,\n        role,\n        uuid,\n        extraFields{\n          fieldName\n          fieldValue\n        }\n        companyRoleId,\n        companyRoleName,\n      }\n    }\n  }\n}"),c=e=>"mutation{\n  ".concat(e!=null&&e.userId?"userUpdate":"userCreate"," (\n    userData: {\n      companyId: ").concat(e.companyId,"\n      ").concat(e!=null&&e.email?'email: "'.concat(e.email,'"'):"",'\n      firstName: "').concat(e.firstName||"",'"\n      lastName: "').concat(e.lastName||"",'"\n      phone: "').concat(e.phone||"",'"\n      ').concat(e!=null&&e.companyRoleId?"companyRoleId: ".concat(e.companyRoleId):"","\n      ").concat(e!=null&&e.userId?"userId: ".concat(e.userId):"","\n      ").concat(e!=null&&e.addChannel?"addChannel: ".concat(e.addChannel):"","\n      extraFields: ").concat(m((e==null?void 0:e.extraFields)||[]),"\n      ").concat(e!=null&&e.companyRoleName?"companyRoleName: ".concat(e.companyRoleName):"","\n    }\n  ){\n    user{\n      id,\n      bcId,\n    }\n  }\n}"),i=e=>"mutation{\n  userDelete (\n    companyId: ".concat(e.companyId,"\n    userId: ").concat(e.userId,"\n  ){\n    message\n  }\n}"),u=e=>'{\n  userEmailCheck (\n    email: "'.concat(e.email,'"\n    companyId: ').concat(e.companyId||null,'\n    storeHash: "').concat(o,'"\n    channelId: ').concat(e.channelId||null,"\n  ){\n    userType,\n    userInfo{\n      id\n      email\n      firstName\n      lastName\n      phoneNumber\n      role\n      companyName\n      originChannelId\n      forcePasswordReset\n    }\n  }\n}"),p=e=>'{\n  customerEmailCheck (\n    email: "'.concat(e.email,'"\n    storeHash: "').concat(o,'"\n    channelId: ').concat(e.channelId||null,"\n  ){\n    userType,\n  }\n}"),h=()=>"{\n  userExtraFields {\n    fieldName\n    fieldType\n    isRequired\n    defaultValue\n    maximumLength\n    numberOfRows\n    maximumValue\n    listOfValue\n    visibleToEnduser\n    labelName\n  }\n}",$=e=>s.graphqlB2B({query:n(e)}),a=()=>s.graphqlB2B({query:h()}),f=e=>s.graphqlB2B({query:c(e)}),t=e=>s.graphqlB2B({query:i(e)}),B=e=>s.graphqlB2B({query:u(e)}).then(l=>({...l.userEmailCheck,isValid:l.userEmailCheck.userType===r.DOESNT_EXIST})),N=e=>s.graphqlB2B({query:p(e)}).then(l=>({...l.customerEmailCheck,isValid:l.customerEmailCheck.userType!==r.B2C}));export{B as a,f as b,N as c,$ as d,t as e,a as g};
