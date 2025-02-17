System.register(["./react-setup-legacy-C2ydd0r0.js","../index-legacy.BKqYUbnO.js","./mui-legacy-C2p10bcq.js","./lang-legacy-CyIWukAl.js","./reactVendor-legacy-CtYIj4Ma.js"],(function(n,e){"use strict";var t,a,r,o,s,d,l,i;return{setters:[n=>{t=n.B,a=n.$,r=n.aq,o=n.a8,s=n.a6,d=n.a9},null,n=>{l=n.j},n=>{i=n.u},null],execute:function(){n("Q",(function(n){const e=i(),{code:t}=n,a=f(t,e);return a?.name?l.jsx(d,{color:a.color,textColor:a.textColor,children:a.name}):null}));const e=(n,e)=>`{\n  ${"b2b"===e?"quotes":"customerQuotes"}(\n    first: ${n.first}\n    offset: ${n.offset}\n    search: "${n.q||""}"\n    orderBy: "${n?.orderBy||""}"\n    createdBy: "${n?.createdBy||""}"\n    email: "${n?.email||""}"\n    salesRep: "${n?.salesRep||""}"\n    ${n?.status?`status: "${n.status}"`:""}\n    ${n?.dateCreatedBeginAt?`dateCreatedBeginAt: "${n.dateCreatedBeginAt}"`:""}\n    ${n?.dateCreatedEndAt?`dateCreatedEndAt: "${n.dateCreatedEndAt}"`:""}\n    ${"bc"===e?`channelId: ${n?.channelId||1}`:""}\n  ) {\n    totalCount,\n    edges {\n      node {\n        id,\n        createdAt,\n        updatedAt,\n        quoteNumber,\n        quoteTitle,\n        referenceNumber,\n        createdBy,\n        expiredAt,\n        expiredAt,\n        discount,\n        grandTotal,\n        currency,\n        status,\n        salesRep,\n        salesRepEmail,\n        orderId,\n        subtotal,\n        totalAmount,\n        taxTotal,\n      }\n    }\n  }\n}`,u=n=>`{\n  addresses (\n    first: 50\n    offset: 0\n    companyId: ${n}\n  ){\n    totalCount,\n    edges{\n      node{\n        id,\n        createdAt,\n        updatedAt,\n        firstName,\n        lastName,\n        isShipping,\n        isBilling,\n        addressLine1,\n        addressLine2,\n        address,\n        city,\n        state,\n        stateCode,\n        country,\n        countryCode,\n        zipCode,\n        phoneNumber,\n        isActive,\n        label,\n        company,\n        uuid,\n        isDefaultShipping,\n        isDefaultBilling,\n      },\n    },\n  }\n}`,c=n=>`mutation{\n  quoteCreate(quoteData: {\n    message: "${n.message}",\n    legalTerms: "${n.legalTerms}",\n    totalAmount: "${n.totalAmount}",\n    grandTotal: "${n.grandTotal}",\n    subtotal: "${n.subtotal||""}",\n    taxTotal: "${n.taxTotal||""}"\n    ${n?.companyId?`companyId: ${n.companyId}`:""}\n    storeHash: "${n.storeHash}",\n    discount: "${n.discount}",\n    channelId: ${n.channelId},\n    userEmail: "${n?.userEmail||""}",\n    currency: ${a(n.currency)}\n    shippingAddress: ${a(n.shippingAddress)}\n    billingAddress: ${a(n.billingAddress)}\n    contactInfo: ${a(n.contactInfo)}\n    productList: ${r(n.productList||[])},\n    fileList: ${r(n.fileList||[])},\n    quoteTitle: "${n.quoteTitle}"\n  }) {\n    quote{\n      id,\n      createdAt,\n    }\n  }\n}`,p=n=>`mutation{\n  quoteUpdate(\n    id: ${n.id},\n    quoteData: ${a(n.quoteData)}\n  ) {\n    quote{\n      trackingHistory,\n    }\n  }\n}`,m=n=>`{\n  quote(\n    id: ${n.id},\n    storeHash: "${o}",\n    date:  "${n?.date||""}",\n  ) {\n    id,\n    createdAt,\n    updatedAt,\n    quoteNumber,\n    quoteTitle,\n    referenceNumber,\n    userEmail,\n    bcCustomerId,\n    createdBy,\n    expiredAt,\n    companyId {\n      id,\n      companyName,\n      bcGroupName,\n      description,\n      catalogId,\n      companyStatus,\n      addressLine1,\n      addressLine2,\n      city,\n      state,\n      zipCode,\n      country,\n      extraFields {\n        fieldName,\n        fieldValue,\n      },\n    },\n    salesRepStatus,\n    customerStatus,\n    subtotal,\n    discount,\n    grandTotal,\n    cartId,\n    cartUrl,\n    checkoutUrl,\n    bcOrderId,\n    currency,\n    contactInfo,\n    trackingHistory,\n    extraFields {\n      fieldName,\n      fieldValue,\n    },\n    notes,\n    legalTerms,\n    shippingTotal,\n    taxTotal,\n    totalAmount,\n    shippingMethod,\n    billingAddress,\n    oldSalesRepStatus,\n    oldCustomerStatus,\n    recipients,\n    discountType,\n    discountValue,\n    status,\n    company,\n    salesRep,\n    salesRepEmail,\n    orderId,\n    shippingAddress,\n    productsList {\n      productId,\n      sku,\n      basePrice,\n      discount,\n      offeredPrice,\n      quantity,\n      variantId,\n      imageUrl,\n      orderQuantityMaximum,\n      orderQuantityMinimum,\n      productName,\n      purchaseHandled,\n      options,\n      notes,\n      costPrice,\n      inventoryTracking,\n      inventoryLevel,\n    },\n    storefrontAttachFiles {\n      id,\n      fileName,\n      fileType,\n      fileUrl,\n      createdBy,\n    },\n    backendAttachFiles {\n      id,\n      fileName,\n      fileType,\n      fileUrl,\n      createdBy,\n    },\n    storeInfo {\n      storeName,\n      storeAddress,\n      storeCountry,\n      storeLogo,\n      storeUrl,\n    },\n    companyInfo {\n      companyId,\n      companyName,\n      companyAddress,\n      companyCountry,\n      companyState,\n      companyCity,\n      companyZipCode,\n      phoneNumber,\n    },\n    salesRepInfo {\n      salesRepName,\n      salesRepEmail,\n      salesRepPhoneNumber,\n    },\n    quoteLogo,\n    quoteUrl,\n    channelId,\n    channelName,\n    allowCheckout,\n    displayDiscount,\n  }\n}`,y=n=>`mutation{\n  quoteFrontendPdf(\n    quoteId: ${n.quoteId},\n    storeHash: "${o}",\n    createdAt: ${n.createdAt},\n    lang: "${n.lang}",\n    isPreview: ${n.isPreview}\n  ) {\n    url,\n    content,\n  }\n}`,g=n=>`mutation{\n  quoteCheckout(\n    id: ${n.id},\n    storeHash: "${o}",\n  ) {\n    quoteCheckout {\n      checkoutUrl,\n      cartId,\n      cartUrl,\n    }\n  }\n}`,q=n=>`mutation{\n  quoteAttachFileCreate(\n    quoteId: ${n.quoteId},\n    fileList: ${r(n.fileList||[])}\n  ) {\n    attachFiles {\n      id,\n      createdBy,\n      fileUrl,\n    }\n  }\n}`,h=n=>`mutation{\n  quoteAttachFileDelete(\n    quoteId: ${n.quoteId},\n    fileId: ${n.fileId}\n  ) {\n    message\n  }\n}`,$=(n("j",(()=>t.graphqlB2B({query:"{\n  customerAddresses (\n    first: 50\n    offset: 0\n  ){\n    totalCount,\n    edges {\n      node {\n        id,\n        createdAt,\n        updatedAt,\n        firstName,\n        lastName,\n        company,\n        bcAddressId,\n        address1,\n        address2,\n        city,\n        stateOrProvince,\n        postalCode,\n        country,\n        countryCode,\n        phone,\n        addressType,\n      },\n    },\n  }\n}"}))),n("i",(n=>t.graphqlB2B({query:u(n)}))),n("n",(n=>t.graphqlB2B({query:e(n,"b2b")}).then((n=>n.quotes)))),n("o",(n=>t.graphqlB2B({query:e(n,"bc")}).then((n=>n.customerQuotes)))),n("l",(n=>t.graphqlB2B({query:c(n)}))),n("k",(n=>t.graphqlB2B({query:c(n)}))),n("u",(n=>t.graphqlB2B({query:p(n)}))),n("a",(n=>t.graphqlB2B({query:p(n)}))),n("e",(n=>t.graphqlB2B({query:m(n)}))),n("d",(n=>t.graphqlB2B({query:m(n)}))),n("h",(n=>t.graphqlB2B({query:y(n)}))),n("f",(n=>t.graphqlB2B({query:y(n)}))),n("c",(n=>t.graphqlB2B({query:g(n)}))),n("b",(n=>t.graphqlB2B({query:g(n)}))),n("q",(n=>t.graphqlB2B({query:q(n)}))),n("m",(n=>t.graphqlB2B({query:h(n)}))),n("g",(()=>t.graphqlB2B({query:"\nquery getStorefrontProductSettings($storeHash: String!, $channelId: Int) {\n  storefrontProductSettings(storeHash: $storeHash, channelId: $channelId) {\n    hidePriceFromGuests\n  }\n}\n",variables:{storeHash:o,channelId:s}}))),{0:{textColor:"rgba(0, 0, 0, 0.87)",idLang:"global.quoteStatusCode.draft",color:"#D8D6D1"},1:{textColor:"rgba(0, 0, 0, 0.87)",idLang:"global.quoteStatusCode.open",color:"#F1C224"},4:{textColor:"#FFF",idLang:"global.quoteStatusCode.ordered",color:"#EA617C"},5:{textColor:"#fff",idLang:"global.quoteStatusCode.expired",color:"#BD3E1E"}}),f=(n,e)=>{const t=$[n];if(!t)return;const{idLang:a,...r}=t;return{...r,name:e(a)}}}}}));
