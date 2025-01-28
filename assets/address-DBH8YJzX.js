import{B as s,a8 as a,aq as r}from"./react-setup-DmaEtmS9.js";import"../index.DaEiSpoW.js";const u=()=>'{\n  addressConfig (\n    storeHash: "'.concat(a,'"\n  ){\n    key\n    isEnabled\n  }\n}'),c=({companyId:e=0,offset:d=0,first:i=50,search:t="",country:o="",state:n="",city:l=""})=>"{\n  addresses (\n    companyId: ".concat(e,"\n    offset: ").concat(d,"\n    first: ").concat(i,'\n    search: "').concat(t,'"\n    country: "').concat(o,'"\n    state: "').concat(n,'"\n    city: "').concat(l,'"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node{\n        id\n        createdAt\n        updatedAt\n        firstName\n        lastName\n        isShipping\n        isBilling\n        addressLine1\n        addressLine2\n        address\n        city\n        state\n        stateCode\n        country\n        countryCode\n        zipCode\n        phoneNumber\n        isActive\n        label\n        company\n        uuid\n        extraFields {\n          fieldName\n          fieldValue\n        }\n        isDefaultShipping\n        isDefaultBilling\n      }\n    }\n  }\n}'),p=e=>"mutation{\n  addressCreate(addressData: {\n    companyId: ".concat(e.companyId,',\n    firstName: "').concat(e.firstName,'",\n    lastName: "').concat(e.lastName,'",\n    addressLine1: "').concat(e.addressLine1,'",\n    addressLine2: "').concat(e.addressLine2||"",'",\n    country: "').concat(e.country,'",\n    countryCode: "').concat(e.countryCode,'",\n    state: "').concat(e.state,'",\n    stateCode: "').concat(e.stateCode||"",'",\n    city: "').concat(e.city,'",\n    zipCode: "').concat(e.zipCode,'",\n    phoneNumber: "').concat(e.phoneNumber,'",\n    isShipping: ').concat(e.isShipping,",\n    isBilling: ").concat(e.isBilling,",\n    isDefaultShipping: ").concat(e.isDefaultShipping,",\n    isDefaultBilling: ").concat(e.isDefaultBilling,',\n    label: "').concat(e.label,'",\n    uuid: "').concat(e.uuid||"",'",\n    extraFields: ').concat(r(e.extraFields||[]),',\n    company: "').concat(e.company,'",\n  }) {\n    address{\n      id\n    }\n  }\n}'),$=({offset:e=0,first:d=50,search:i="",country:t="",state:o="",city:n=""})=>"{\n  customerAddresses (\n    offset: ".concat(e,"\n    first: ").concat(d,'\n    search: "').concat(i,'"\n    country: "').concat(t,'"\n    stateOrProvince: "').concat(o,'"\n    city: "').concat(n,'"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node{\n        id\n        createdAt\n        updatedAt\n        firstName\n        lastName\n        company\n        bcAddressId\n        address1\n        address2\n        city\n        stateOrProvince\n        postalCode\n        country\n        countryCode\n        phone\n        addressType\n        formFields{\n          name\n          value\n          addressId\n        }\n      }\n    }\n  }\n}'),m=e=>"mutation{\n  addressUpdate(addressData: {\n    companyId: ".concat(e.companyId,',\n    firstName: "').concat(e.firstName,'",\n    lastName: "').concat(e.lastName,'",\n    addressLine1: "').concat(e.addressLine1,'",\n    addressLine2: "').concat(e.addressLine2||"",'",\n    country: "').concat(e.country,'",\n    countryCode: "').concat(e.countryCode,'",\n    state: "').concat(e.state,'",\n    stateCode: "').concat(e.stateCode||"",'",\n    city: "').concat(e.city,'",\n    zipCode: "').concat(e.zipCode,'",\n    phoneNumber: "').concat(e.phoneNumber,'",\n    isShipping: ').concat(e.isShipping,",\n    isBilling: ").concat(e.isBilling,",\n    isDefaultShipping: ").concat(e.isDefaultShipping,",\n    isDefaultBilling: ").concat(e.isDefaultBilling,',\n    label: "').concat(e.label,'",\n    uuid: "').concat(e.uuid,'",\n    extraFields: ').concat(r(e.extraFields||[]),",\n    addressId: ").concat(e.id,'\n    company: "').concat(e.company,'",\n  }) {\n    address{\n      id\n    }\n  }\n}'),y=e=>'mutation{\n  customerAddressCreate(addressData: {\n    firstName: "'.concat(e.firstName,'",\n    lastName: "').concat(e.lastName,'",\n    company: "').concat(e.company||"",'",\n    address1: "').concat(e.address1,'",\n    address2: "').concat(e.address2||"",'",\n    city: "').concat(e.city,'",\n    phone: "').concat(e.phone,'",\n    stateOrProvince: "').concat(e.state,'",\n    countryCode: "').concat(e.countryCode,'",\n    postalCode: "').concat(e.postalCode,'"\n    addressType: "').concat(e.addressType||"residential",'"\n    formFields: ').concat(r(e.formFields||[]),"\n  }) {\n    address{\n      id\n    }\n  }\n}"),g=e=>'mutation{\n  customerAddressUpdate(addressData: {\n    company: "'.concat(e.company||"",'",\n    firstName: "').concat(e.firstName,'",\n    lastName: "').concat(e.lastName,'",\n    address1: "').concat(e.address1,'",\n    address2: "').concat(e.address2||"",'",\n    city: "').concat(e.city,'",\n    phone: "').concat(e.phone,'",\n    stateOrProvince: "').concat(e.state,'",\n    countryCode: "').concat(e.countryCode,'",\n    postalCode: "').concat(e.postalCode,'"\n    addressType: "').concat(e.addressType||"residential",'"\n    formFields: ').concat(r(e.formFields||[]),"\n    bcAddressId: ").concat(e.id,"\n  }) {\n    address{\n      id\n    }\n  }\n}"),B=e=>"mutation{\n  addressDelete(\n    addressId: ".concat(e.addressId,",\n    companyId: ").concat(e.companyId,",\n  ) {\n    message\n  }\n}"),f=()=>'{\n  addressExtraFields(storeHash: "'.concat(a,'") {\n    fieldName,\n    fieldType,\n    isRequired,\n    defaultValue,\n    maximumLength,\n    maximumLength,\n    maximumValue,\n    listOfValue,\n    visibleToEnduser,\n    labelName,\n    numberOfRows,\n  }\n}'),N=()=>s.graphqlB2B({query:f()}),h=e=>"mutation{\n  customerAddressDelete(\n    bcAddressId: ".concat(e.bcAddressId,",\n  ) {\n    message\n  }\n}"),q=(e={})=>s.graphqlB2B({query:c(e)}),b=()=>s.graphqlB2B({query:u()}),I=(e={})=>s.graphqlB2B({query:$(e)}),D=(e={})=>s.graphqlB2B({query:B(e)}),x=(e={})=>s.graphqlB2B({query:h(e)}),F=(e={})=>s.graphqlB2B({query:m(e)}),L=(e={})=>s.graphqlB2B({query:p(e)}),v=(e={})=>s.graphqlB2B({query:y(e)}),P=(e={})=>s.graphqlB2B({query:g(e)});export{v as a,P as b,L as c,D as d,x as e,q as f,N as g,I as h,b as i,F as u};
