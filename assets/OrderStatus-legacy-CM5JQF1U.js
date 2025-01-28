System.register(["./react-setup-legacy-CEf7G1oQ.js","./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","../index-legacy.oAxYdIH8.js"],(function(e,n){"use strict";var t,a,r;return{setters:[e=>{t=e.B,a=e.a9},e=>{r=e.j},null,null],execute:function(){e("O",(function(e){const{code:n,text:t}=e,i=c(n);return i.name?r.jsx(a,{color:i.color,textColor:i.textColor,children:t||i.name}):null}));const n=(e,n)=>`{\n  ${n}(\n    search: "${e.q||""}"\n    status: "${e?.statusCode||""}"\n    first: ${e.first}\n    offset: ${e.offset}\n    beginDateAt: ${e?.beginDateAt?JSON.stringify(e.beginDateAt):null}\n    endDateAt: ${e?.endDateAt?JSON.stringify(e.endDateAt):null}\n    companyName: "${e?.companyName||""}"\n    createdBy: "${e?.createdBy||""}"\n    isShowMy: "${e?.isShowMy||0}"\n    orderBy: "${e.orderBy}"\n    email: "${e?.email||""}"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node {\n        orderId,\n        createdAt,\n        updatedAt,\n        totalIncTax,\n        currencyCode,\n        usdIncTax,\n        money,\n        items,\n        cartId,\n        userId,\n        poNumber,\n        referenceNumber,\n        status,\n        customStatus,\n        statusCode,\n        isArchived,\n        isInvoiceOrder,\n        invoiceId,\n        invoiceNumber,\n        invoiceStatus,\n        ipStatus,\n        flag,\n        billingName,\n        merchantEmail,\n        firstName,\n        lastName,\n        companyName,\n      }\n    }\n  }\n}`,i=(e,n)=>`{\n  ${n}(\n    id: ${e}\n  ){\n    id,\n    companyName,\n    firstName,\n    lastName,\n    status,\n    statusId,\n    customerId,\n    customStatus,\n    dateCreated,\n    dateModified,\n    dateShipped,\n    subtotalExTax,\n    subtotalIncTax,\n    subtotalTax,\n    baseShippingCost,\n    shippingCostExTax,\n    shippingCostIncTax,\n    shippingCostTax,\n    shippingCostTaxClassId,\n    baseHandlingCost,\n    handlingCostExTax,\n    handlingCostIncTax,\n    handlingCostTax,\n    handlingCostTaxClassId,\n    baseWrappingCost,\n    wrappingCostExTax,\n    wrappingCostIncTax,\n    wrappingCostTax,\n    wrappingCostTaxClassId,\n    totalExTax,\n    totalIncTax,\n    totalTax,\n    itemsTotal,\n    itemsShipped,\n    paymentMethod,\n    paymentProviderId,\n    paymentStatus,\n    refundedAmount,\n    orderIsDigital,\n    storeCreditAmount,\n    giftCertificateAmount,\n    ipAddress,\n    geoipCountry,\n    geoipCountryIso2,\n    currencyId,\n    currencyCode,\n    currencyExchangeRate,\n    defaultCurrencyId,\n    defaultCurrencyCode,\n    staffNotes,\n    customerMessage,\n    discountAmount,\n    couponDiscount,\n    shippingAddressCount,\n    isDeleted,\n    ebayOrderId,\n    cartId,\n    ipAddressV6,\n    isEmailOptIn,\n    poNumber,\n    storeDefaultCurrencyCode,\n    storeDefaultToTransactionalExchangeRate,\n    customerLocale,\n    channelId,\n    orderSource,\n    externalSource,\n    creditCardType,\n    externalId,\n    externalMerchantId,\n    taxProviderId,\n    canReturn,\n    createdEmail,\n    products,\n    coupons,\n    extraFields,\n    billingAddress,\n    shippingAddresses,\n    shippingAddress,\n    shipments,\n    money,\n    referenceNumber,\n    isInvoiceOrder,\n    updatedAt,\n    externalOrderId,\n    ipStatus,\n    invoiceId,\n    orderHistoryEvent {\n      id,\n      eventType,\n      status,\n      extraFields,\n      createdAt,\n    },\n  }\n}`,s=e=>`{\n  ${e} {\n    systemLabel,\n    customLabel,\n    statusCode,\n  }\n}`,d=(e,n,t)=>`{\n  ${t}(\n    companyId: ${e},\n    module: ${n},\n  ){\n    results,\n  }\n}`,o=(e("g",(e=>t.graphqlB2B({query:n(e,"allOrders")}).then((e=>e.allOrders)))),e("a",(e=>t.graphqlB2B({query:n(e,"customerOrders")}).then((e=>e.customerOrders)))),e("b",(e=>t.graphqlB2B({query:i(e,"order")}).then((e=>e.order)))),e("c",(e=>t.graphqlB2B({query:i(e,"customerOrder")}).then((e=>e.customerOrder)))),e("d",(()=>t.graphqlB2B({query:s("orderStatuses")}).then((e=>e.orderStatuses)))),e("e",(()=>t.graphqlB2B({query:s("bcOrderStatuses")}).then((e=>e.bcOrderStatuses)))),e("f",((e,n)=>t.graphqlB2B({query:d(e,n,"createdByUser")}))),{"Partially Refunded":"#F4CC46","Manual Verification Required":"#DDA3AE",Disputed:"#916CF6",Refunded:"#F4CC46",Declined:"#7A6041",Cancelled:"#000000",Shipped:"#EA617C",Completed:"#EA617C","Partially Shipped":"#516FAE","Awaiting Pickup":"#BE7FEB","Awaiting Shipment":"#BD3E1E","Awaiting Fulfillment":"#87CBF6","Awaiting Payment":"#1B5F90",Pending:"#899193",Incomplete:"#000000"}),l={"Partially Refunded":"rgba(0, 0, 0, 0.87)","Manual Verification Required":"rgba(0, 0, 0, 0.87)",Disputed:"#FFFFFF",Refunded:"rgba(0, 0, 0, 0.87)",Declined:"#FFFFFF",Cancelled:"#FFFFFF",Shipped:"rgba(0, 0, 0, 0.87)",Completed:"#FFF","Partially Shipped":"#FFFFFF","Awaiting Pickup":"#FFFFFF","Awaiting Shipment":"#FFFFFF","Awaiting Fulfillment":"rgba(0, 0, 0, 0.87)","Awaiting Payment":"#FFFFFF",Pending:"#FFFFFF",Incomplete:"#FFFFFF"},u={"Partially Refunded":"Parcialmente Reembolsado","Manual Verification Required":"Verificación Manual Requerida",Disputed:"En Disputa",Refunded:"Reembolsado",Declined:"Rechazado",Cancelled:"Cancelado",Shipped:"Enviado",Completed:"Completado","Partially Shipped":"Parcialmente Enviado","Awaiting Pickup":"En Espera de Recogida","Awaiting Shipment":"En Espera de Envío","Awaiting Fulfillment":"En Espera de Cumplimiento","Awaiting Payment":"En Espera de Pago",Pending:"Pendiente",Incomplete:"Incompleto"},c=(e("o",{Incomplete:"orders.status.incomplete",Pending:"orders.status.pending",Shipped:"orders.status.shipped","Partially Shipped":"orders.status.partiallyShipped",Refunded:"orders.status.refunded",Cancelled:"orders.status.cancelled",Declined:"orders.status.declined","Awaiting Payment":"orders.status.awaitingPayment","Awaiting Pickup":"orders.status.awaitingPickup","Awaiting Shipment":"orders.status.awaitingShipment",Completed:"orders.status.completed","Awaiting Fulfillment":"orders.status.awaitingFulfillment","Manual Verification Required":"orders.status.manualVerificationRequired",Disputed:"orders.status.disputed","Partially Refunded":"orders.status.partiallyRefunded"}),e=>({color:o[e],textColor:l[e],name:u[e]}))}}}));
