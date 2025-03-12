System.register(["./react-setup-legacy-CpAGB0s3.js","../index-legacy.DD1VDECJ.js"],(function(n,e){"use strict";var s,a,d;return{setters:[n=>{s=n.B,a=n.a8,d=n.aq},null],execute:function(){const e=({companyId:n=0,offset:e=0,first:s=50,search:a="",country:d="",state:t="",city:i=""})=>`{\n  addresses (\n    companyId: ${n}\n    offset: ${e}\n    first: ${s}\n    search: "${a}"\n    country: "${d}"\n    state: "${t}"\n    city: "${i}"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node{\n        id\n        createdAt\n        updatedAt\n        firstName\n        lastName\n        isShipping\n        isBilling\n        addressLine1\n        addressLine2\n        address\n        city\n        state\n        stateCode\n        country\n        countryCode\n        zipCode\n        phoneNumber\n        isActive\n        label\n        company\n        uuid\n        extraFields {\n          fieldName\n          fieldValue\n        }\n        isDefaultShipping\n        isDefaultBilling\n      }\n    }\n  }\n}`,t=n=>`mutation{\n  addressCreate(addressData: {\n    companyId: ${n.companyId},\n    firstName: "${n.firstName}",\n    lastName: "${n.lastName}",\n    addressLine1: "${n.addressLine1}",\n    addressLine2: "${n.addressLine2||""}",\n    country: "${n.country}",\n    countryCode: "${n.countryCode}",\n    state: "${n.state}",\n    stateCode: "${n.stateCode||""}",\n    city: "${n.city}",\n    zipCode: "${n.zipCode}",\n    phoneNumber: "${n.phoneNumber}",\n    isShipping: ${n.isShipping},\n    isBilling: ${n.isBilling},\n    isDefaultShipping: ${n.isDefaultShipping},\n    isDefaultBilling: ${n.isDefaultBilling},\n    label: "${n.label}",\n    uuid: "${n.uuid||""}",\n    extraFields: ${d(n.extraFields||[])},\n    company: "${n.company}",\n  }) {\n    address{\n      id\n    }\n  }\n}`,i=({offset:n=0,first:e=50,search:s="",country:a="",state:d="",city:t=""})=>`{\n  customerAddresses (\n    offset: ${n}\n    first: ${e}\n    search: "${s}"\n    country: "${a}"\n    stateOrProvince: "${d}"\n    city: "${t}"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node{\n        id\n        createdAt\n        updatedAt\n        firstName\n        lastName\n        company\n        bcAddressId\n        address1\n        address2\n        city\n        stateOrProvince\n        postalCode\n        country\n        countryCode\n        phone\n        addressType\n        formFields{\n          name\n          value\n          addressId\n        }\n      }\n    }\n  }\n}`,r=n=>`mutation{\n  addressUpdate(addressData: {\n    companyId: ${n.companyId},\n    firstName: "${n.firstName}",\n    lastName: "${n.lastName}",\n    addressLine1: "${n.addressLine1}",\n    addressLine2: "${n.addressLine2||""}",\n    country: "${n.country}",\n    countryCode: "${n.countryCode}",\n    state: "${n.state}",\n    stateCode: "${n.stateCode||""}",\n    city: "${n.city}",\n    zipCode: "${n.zipCode}",\n    phoneNumber: "${n.phoneNumber}",\n    isShipping: ${n.isShipping},\n    isBilling: ${n.isBilling},\n    isDefaultShipping: ${n.isDefaultShipping},\n    isDefaultBilling: ${n.isDefaultBilling},\n    label: "${n.label}",\n    uuid: "${n.uuid}",\n    extraFields: ${d(n.extraFields||[])},\n    addressId: ${n.id}\n    company: "${n.company}",\n  }) {\n    address{\n      id\n    }\n  }\n}`,o=n=>`mutation{\n  customerAddressCreate(addressData: {\n    firstName: "${n.firstName}",\n    lastName: "${n.lastName}",\n    company: "${n.company||""}",\n    address1: "${n.address1}",\n    address2: "${n.address2||""}",\n    city: "${n.city}",\n    phone: "${n.phone}",\n    stateOrProvince: "${n.state}",\n    countryCode: "${n.countryCode}",\n    postalCode: "${n.postalCode}"\n    addressType: "${n.addressType||"residential"}"\n    formFields: ${d(n.formFields||[])}\n  }) {\n    address{\n      id\n    }\n  }\n}`,l=n=>`mutation{\n  customerAddressUpdate(addressData: {\n    company: "${n.company||""}",\n    firstName: "${n.firstName}",\n    lastName: "${n.lastName}",\n    address1: "${n.address1}",\n    address2: "${n.address2||""}",\n    city: "${n.city}",\n    phone: "${n.phone}",\n    stateOrProvince: "${n.state}",\n    countryCode: "${n.countryCode}",\n    postalCode: "${n.postalCode}"\n    addressType: "${n.addressType||"residential"}"\n    formFields: ${d(n.formFields||[])}\n    bcAddressId: ${n.id}\n  }) {\n    address{\n      id\n    }\n  }\n}`,u=n=>`mutation{\n  addressDelete(\n    addressId: ${n.addressId},\n    companyId: ${n.companyId},\n  ) {\n    message\n  }\n}`,$=(n("g",(()=>s.graphqlB2B({query:`{\n  addressExtraFields(storeHash: "${a}") {\n    fieldName,\n    fieldType,\n    isRequired,\n    defaultValue,\n    maximumLength,\n    maximumLength,\n    maximumValue,\n    listOfValue,\n    visibleToEnduser,\n    labelName,\n    numberOfRows,\n  }\n}`}))),n=>`mutation{\n  customerAddressDelete(\n    bcAddressId: ${n.bcAddressId},\n  ) {\n    message\n  }\n}`);n("f",((n={})=>s.graphqlB2B({query:e(n)}))),n("i",(()=>s.graphqlB2B({query:`{\n  addressConfig (\n    storeHash: "${a}"\n  ){\n    key\n    isEnabled\n  }\n}`}))),n("h",((n={})=>s.graphqlB2B({query:i(n)}))),n("d",((n={})=>s.graphqlB2B({query:u(n)}))),n("e",((n={})=>s.graphqlB2B({query:$(n)}))),n("u",((n={})=>s.graphqlB2B({query:r(n)}))),n("c",((n={})=>s.graphqlB2B({query:t(n)}))),n("a",((n={})=>s.graphqlB2B({query:o(n)}))),n("b",((n={})=>s.graphqlB2B({query:l(n)})))}}}));
