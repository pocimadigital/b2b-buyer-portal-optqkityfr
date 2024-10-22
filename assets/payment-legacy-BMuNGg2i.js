System.register(["./react-setup-legacy-CoXV7Ff0.js","./b3Logger-legacy-C5y5ZQF8.js","../index-legacy.4Oc0YHSS.js","./b3checkout-legacy-0uOYthUf.js"],(function(n,e){"use strict";var t,a,r,i;return{setters:[n=>{t=n.B,a=n.aq},n=>{r=n.b},null,n=>{i=n.a}],execute:function(){const e=n=>`{\n  invoices (\n    search: "${n.q||""}"\n    first: ${n.first}\n    offset: ${n.offset} \n    ${n?.status?`status: ${a(n.status?[n.status]:[])}`:""}\n    ${n?.beginDateAt?`beginDateAt: "${n.beginDateAt}"`:""}\n    ${n?.endDateAt?`endDateAt: "${n.endDateAt}"`:""}\n    orderBy: "${n?.orderBy}"\n    ${n?.beginDueDateAt?`beginDueDateAt: "${n.beginDueDateAt}"`:""}\n    ${n?.endDueDateAt?`endDueDateAt: "${n.endDueDateAt}"`:""}\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node {\n        id,\n        createdAt,\n        updatedAt,\n        storeHash,\n        customerId,\n        externalId,\n        invoiceNumber,\n        dueDate,\n        orderNumber,\n        purchaseOrderNumber,\n        notAllowedPay,\n        details,\n        status,\n        pendingPaymentCount,\n        purchaseOrderNumber,\n        openBalance {\n          code,\n          value,\n        },\n        originalBalance {\n          code,\n          value,\n        },\n      }\n    }\n  }\n}`,o=n=>`{\n  invoiceStats (\n    ${""===n?"":`status: ${n},`}\n  ){\n    totalBalance,\n    overDueBalance,\n  }\n}`,c=(n,e)=>`mutation {\n  invoicePdf (\n    invoiceId: ${n}\n    ${e?`isPayNow: ${e}`:""}\n  ){\n    url,\n  }\n}`,u=n=>`mutation {\n  invoiceCreateBcCart (\n    bcCartData: {\n      lineItems: ${a(n.lineItems)},\n      currency: "${n.currency}"\n      details: {\n        memo: ""\n      }\n    }\n  ) {\n    result {\n      checkoutUrl\n      cartId\n    }\n  }\n}`,d=n=>`{\n  allReceiptLines (\n    invoiceId: "${n}"\n    first: 50\n    offset: 0\n  ) {\n    edges {\n      node {\n        id\n        paymentType\n        invoiceId\n        amount\n        transactionType\n        referenceNumber\n        createdAt\n      }\n    }\n    totalCount\n  }\n}`,s=n=>`{\n  receipt (\n    id: ${n}\n  ) {\n    id,\n    createdAt,\n    updatedAt,\n    storeHash,\n    customerId,\n    externalId,\n    externalCustomerId,\n    totalCode,\n    totalAmount,\n    payerName,\n    payerCustomerId,\n    details,\n    paymentId,\n    transactionType,\n    paymentType,\n    referenceNumber,\n    receiptLineSet {\n      edges {\n        node {\n          id,\n          createdAt,\n          updatedAt,\n          storeHash,\n          customerId,\n          externalId,\n          externalCustomerId,\n          receiptId,\n          invoiceId,\n          amountCode,\n          amount,\n          paymentStatus,\n          paymentType,\n          invoiceNumber,\n          paymentId,\n          transactionType,\n          referenceNumber,\n        }\n      }\n    }\n  }\n}`,l=(n("c",(n=>t.graphqlB2B({query:e(n)}))),n("i",((n,e)=>t.graphqlB2B({query:c(n,e)}))),n("a",(n=>t.graphqlB2B({query:d(n)}))),n("f",(n=>{return t.graphqlB2B({query:(e=n,`{\n  invoice (\n    invoiceId: ${e}\n  ) {\n    id,\n    createdAt,\n    updatedAt,\n    storeHash,\n    customerId,\n    externalId,\n    invoiceNumber,\n    dueDate,\n    orderNumber,\n    purchaseOrderNumber,\n    notAllowedPay,\n    details,\n    status,\n    pendingPaymentCount,\n    purchaseOrderNumber,\n    openBalance {\n      code,\n      value,\n    },\n    originalBalance {\n      code,\n      value,\n    },\n  }\n}`)});var e})),n("b",(n=>t.graphqlB2B({query:s(n)}))),n("e",(n=>t.graphqlB2B({query:"mutation($invoiceFilterData: InvoiceFilterDataType!, $lang: String!) {\n  invoicesExport (\n    invoiceFilterData: $invoiceFilterData,\n    lang: $lang,\n  ) {\n    url\n  }\n}",variables:n}))),n("d",(n=>t.graphqlB2B({query:o(n)}))),async n=>{const{invoiceCreateBcCart:{result:{checkoutUrl:e,cartId:a}}}=await(r=n,t.graphqlB2B({query:u(r)}));var r;return{checkoutUrl:e,cartId:a}});n("g",(async(n,e,t)=>{const{checkoutUrl:a,cartId:o}=await l(n),c=()=>{t?window.location.replace(a):window.location.href=a};if("bigcommerce"!==e)try{await i(o,a,t)}catch(u){r.error(u),c()}else c()}))}}}));
