import{B as r,a9 as d}from"./react-setup-TCnEAC1_.js";import{j as l}from"./mui-CyG7s_nf.js";import"./reactVendor-BAhb8EbJ.js";import"../index.BTcqsZPD.js";const n=(e,t)=>"{\n  ".concat(t,'(\n    search: "').concat(e.q||"",'"\n    status: "').concat((e==null?void 0:e.statusCode)||"",'"\n    first: ').concat(e.first,"\n    offset: ").concat(e.offset,"\n    beginDateAt: ").concat(e!=null&&e.beginDateAt?JSON.stringify(e.beginDateAt):null,"\n    endDateAt: ").concat(e!=null&&e.endDateAt?JSON.stringify(e.endDateAt):null,'\n    companyName: "').concat((e==null?void 0:e.companyName)||"",'"\n    createdBy: "').concat((e==null?void 0:e.createdBy)||"",'"\n    isShowMy: "').concat((e==null?void 0:e.isShowMy)||0,'"\n    orderBy: "').concat(e.orderBy,'"\n    email: "').concat((e==null?void 0:e.email)||"",'"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node {\n        orderId,\n        createdAt,\n        updatedAt,\n        totalIncTax,\n        currencyCode,\n        usdIncTax,\n        money,\n        items,\n        cartId,\n        userId,\n        poNumber,\n        referenceNumber,\n        status,\n        customStatus,\n        statusCode,\n        isArchived,\n        isInvoiceOrder,\n        invoiceId,\n        invoiceNumber,\n        invoiceStatus,\n        ipStatus,\n        flag,\n        billingName,\n        merchantEmail,\n        firstName,\n        lastName,\n        companyName,\n      }\n    }\n  }\n}'),a=(e,t)=>"{\n  ".concat(t,"(\n    id: ").concat(e,"\n  ){\n    id,\n    companyName,\n    firstName,\n    lastName,\n    status,\n    statusId,\n    customerId,\n    customStatus,\n    dateCreated,\n    dateModified,\n    dateShipped,\n    subtotalExTax,\n    subtotalIncTax,\n    subtotalTax,\n    baseShippingCost,\n    shippingCostExTax,\n    shippingCostIncTax,\n    shippingCostTax,\n    shippingCostTaxClassId,\n    baseHandlingCost,\n    handlingCostExTax,\n    handlingCostIncTax,\n    handlingCostTax,\n    handlingCostTaxClassId,\n    baseWrappingCost,\n    wrappingCostExTax,\n    wrappingCostIncTax,\n    wrappingCostTax,\n    wrappingCostTaxClassId,\n    totalExTax,\n    totalIncTax,\n    totalTax,\n    itemsTotal,\n    itemsShipped,\n    paymentMethod,\n    paymentProviderId,\n    paymentStatus,\n    refundedAmount,\n    orderIsDigital,\n    storeCreditAmount,\n    giftCertificateAmount,\n    ipAddress,\n    geoipCountry,\n    geoipCountryIso2,\n    currencyId,\n    currencyCode,\n    currencyExchangeRate,\n    defaultCurrencyId,\n    defaultCurrencyCode,\n    staffNotes,\n    customerMessage,\n    discountAmount,\n    couponDiscount,\n    shippingAddressCount,\n    isDeleted,\n    ebayOrderId,\n    cartId,\n    ipAddressV6,\n    isEmailOptIn,\n    poNumber,\n    storeDefaultCurrencyCode,\n    storeDefaultToTransactionalExchangeRate,\n    customerLocale,\n    channelId,\n    orderSource,\n    externalSource,\n    creditCardType,\n    externalId,\n    externalMerchantId,\n    taxProviderId,\n    canReturn,\n    createdEmail,\n    products,\n    coupons,\n    extraFields,\n    billingAddress,\n    shippingAddresses,\n    shippingAddress,\n    shipments,\n    money,\n    referenceNumber,\n    isInvoiceOrder,\n    updatedAt,\n    externalOrderId,\n    ipStatus,\n    invoiceId,\n    orderHistoryEvent {\n      id,\n      eventType,\n      status,\n      extraFields,\n      createdAt,\n    },\n  }\n}"),o=e=>"{\n  ".concat(e," {\n    systemLabel,\n    customLabel,\n    statusCode,\n  }\n}"),u=(e,t,i)=>"{\n  ".concat(i,"(\n    companyId: ").concat(e,",\n    module: ").concat(t,",\n  ){\n    results,\n  }\n}"),f=e=>r.graphqlB2B({query:n(e,"allOrders")}).then(t=>t.allOrders),x=e=>r.graphqlB2B({query:n(e,"customerOrders")}).then(t=>t.customerOrders),A=e=>r.graphqlB2B({query:a(e,"order")}).then(t=>t.order),S=e=>r.graphqlB2B({query:a(e,"customerOrder")}).then(t=>t.customerOrder),I=()=>r.graphqlB2B({query:o("orderStatuses")}).then(e=>e.orderStatuses),B=()=>r.graphqlB2B({query:o("bcOrderStatuses")}).then(e=>e.bcOrderStatuses),E=(e,t)=>r.graphqlB2B({query:u(e,t,"createdByUser")}),c={"Partially Refunded":"#F4CC46","Manual Verification Required":"#DDA3AE",Disputed:"#916CF6",Refunded:"#F4CC46",Declined:"#7A6041",Cancelled:"#000000",Shipped:"#EA617C",Completed:"#EA617C","Partially Shipped":"#516FAE","Awaiting Pickup":"#BE7FEB","Awaiting Shipment":"#BD3E1E","Awaiting Fulfillment":"#87CBF6","Awaiting Payment":"#1B5F90",Pending:"#899193",Incomplete:"#000000"},p={"Partially Refunded":"rgba(0, 0, 0, 0.87)","Manual Verification Required":"rgba(0, 0, 0, 0.87)",Disputed:"#FFFFFF",Refunded:"rgba(0, 0, 0, 0.87)",Declined:"#FFFFFF",Cancelled:"#FFFFFF",Shipped:"rgba(0, 0, 0, 0.87)",Completed:"#FFF","Partially Shipped":"#FFFFFF","Awaiting Pickup":"#FFFFFF","Awaiting Shipment":"#FFFFFF","Awaiting Fulfillment":"rgba(0, 0, 0, 0.87)","Awaiting Payment":"#FFFFFF",Pending:"#FFFFFF",Incomplete:"#FFFFFF"},m={"Partially Refunded":"Parcialmente Reembolsado","Manual Verification Required":"Verificación Manual Requerida",Disputed:"En Disputa",Refunded:"Reembolsado",Declined:"Rechazado",Cancelled:"Cancelado",Shipped:"Enviado",Completed:"Completado","Partially Shipped":"Parcialmente Enviado","Awaiting Pickup":"En Espera de Recogida","Awaiting Shipment":"En Espera de Envío","Awaiting Fulfillment":"En Espera de Cumplimiento","Awaiting Payment":"En Espera de Pago",Pending:"Pendiente",Incomplete:"Incompleto"},T={Incomplete:"orders.status.incomplete",Pending:"orders.status.pending",Shipped:"orders.status.shipped","Partially Shipped":"orders.status.partiallyShipped",Refunded:"orders.status.refunded",Cancelled:"orders.status.cancelled",Declined:"orders.status.declined","Awaiting Payment":"orders.status.awaitingPayment","Awaiting Pickup":"orders.status.awaitingPickup","Awaiting Shipment":"orders.status.awaitingShipment",Completed:"orders.status.completed","Awaiting Fulfillment":"orders.status.awaitingFulfillment","Manual Verification Required":"orders.status.manualVerificationRequired",Disputed:"orders.status.disputed","Partially Refunded":"orders.status.partiallyRefunded"},g=e=>({color:c[e],textColor:p[e],name:m[e]});function P(e){const{code:t,text:i}=e,s=g(t);return s.name?l.jsx(d,{color:s.color,textColor:s.textColor,children:i||s.name}):null}export{P as O,x as a,A as b,S as c,I as d,B as e,E as f,f as g,T as o};