import{B as o,aq as c}from"./react-setup-9NPp_6Sq.js";import{b as u}from"./b3Logger-CMQiGC3f.js";import"../index.CMPJ-jXT.js";import{a as l}from"./b3checkout-B6rLAw4g.js";const p=e=>'{\n  invoices (\n    search: "'.concat(e.q||"",'"\n    first: ').concat(e.first,"\n    offset: ").concat(e.offset," \n    ").concat(e!=null&&e.status?"status: ".concat(c(e.status?[e.status]:[])):"","\n    ").concat(e!=null&&e.beginDateAt?'beginDateAt: "'.concat(e.beginDateAt,'"'):"","\n    ").concat(e!=null&&e.endDateAt?'endDateAt: "'.concat(e.endDateAt,'"'):"",'\n    orderBy: "').concat(e==null?void 0:e.orderBy,'"\n    ').concat(e!=null&&e.beginDueDateAt?'beginDueDateAt: "'.concat(e.beginDueDateAt,'"'):"","\n    ").concat(e!=null&&e.endDueDateAt?'endDueDateAt: "'.concat(e.endDueDateAt,'"'):"","\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node {\n        id,\n        createdAt,\n        updatedAt,\n        storeHash,\n        customerId,\n        externalId,\n        invoiceNumber,\n        dueDate,\n        orderNumber,\n        purchaseOrderNumber,\n        notAllowedPay,\n        details,\n        status,\n        pendingPaymentCount,\n        purchaseOrderNumber,\n        openBalance {\n          code,\n          value,\n        },\n        originalBalance {\n          code,\n          value,\n        },\n      }\n    }\n  }\n}"),m=e=>"{\n  invoiceStats (\n    ".concat(e===""?"":"status: ".concat(e,","),"\n  ){\n    totalBalance,\n    overDueBalance,\n  }\n}"),d=(e,t)=>"mutation {\n  invoicePdf (\n    invoiceId: ".concat(e,"\n    ").concat(t?"isPayNow: ".concat(t):"","\n  ){\n    url,\n  }\n}"),v=e=>"mutation {\n  invoiceCreateBcCart (\n    bcCartData: {\n      lineItems: ".concat(c(e.lineItems),',\n      currency: "').concat(e.currency,'"\n      details: {\n        memo: ""\n      }\n    }\n  ) {\n    result {\n      checkoutUrl\n      cartId\n    }\n  }\n}'),g=e=>'{\n  allReceiptLines (\n    invoiceId: "'.concat(e,'"\n    first: 50\n    offset: 0\n  ) {\n    edges {\n      node {\n        id\n        paymentType\n        invoiceId\n        amount\n        transactionType\n        referenceNumber\n        createdAt\n      }\n    }\n    totalCount\n  }\n}'),y=e=>"{\n  invoice (\n    invoiceId: ".concat(e,"\n  ) {\n    id,\n    createdAt,\n    updatedAt,\n    storeHash,\n    customerId,\n    externalId,\n    invoiceNumber,\n    dueDate,\n    orderNumber,\n    purchaseOrderNumber,\n    notAllowedPay,\n    details,\n    status,\n    pendingPaymentCount,\n    purchaseOrderNumber,\n    openBalance {\n      code,\n      value,\n    },\n    originalBalance {\n      code,\n      value,\n    },\n  }\n}"),I=e=>"{\n  receipt (\n    id: ".concat(e,"\n  ) {\n    id,\n    createdAt,\n    updatedAt,\n    storeHash,\n    customerId,\n    externalId,\n    externalCustomerId,\n    totalCode,\n    totalAmount,\n    payerName,\n    payerCustomerId,\n    details,\n    paymentId,\n    transactionType,\n    paymentType,\n    referenceNumber,\n    receiptLineSet {\n      edges {\n        node {\n          id,\n          createdAt,\n          updatedAt,\n          storeHash,\n          customerId,\n          externalId,\n          externalCustomerId,\n          receiptId,\n          invoiceId,\n          amountCode,\n          amount,\n          paymentStatus,\n          paymentType,\n          invoiceNumber,\n          paymentId,\n          transactionType,\n          referenceNumber,\n        }\n      }\n    }\n  }\n}"),D="mutation($invoiceFilterData: InvoiceFilterDataType!, $lang: String!) {\n  invoicesExport (\n    invoiceFilterData: $invoiceFilterData,\n    lang: $lang,\n  ) {\n    url\n  }\n}",C=e=>o.graphqlB2B({query:p(e)}),q=(e,t)=>o.graphqlB2B({query:d(e,t)}),h=e=>o.graphqlB2B({query:v(e)}),N=e=>o.graphqlB2B({query:g(e)}),P=e=>o.graphqlB2B({query:y(e)}),w=e=>o.graphqlB2B({query:I(e)}),x=e=>o.graphqlB2B({query:D,variables:e}),S=e=>o.graphqlB2B({query:m(e)}),B=async e=>{const{invoiceCreateBcCart:{result:{checkoutUrl:t,cartId:n}}}=await h(e);return{checkoutUrl:t,cartId:n}},T=async(e,t,n)=>{const{checkoutUrl:r,cartId:s}=await B(e),i=()=>{n?window.location.replace(r):window.location.href=r};if(t==="bigcommerce"){i();return}try{await l(s,r,n)}catch(a){u.error(a),i()}};export{N as a,w as b,C as c,S as d,x as e,P as f,T as g,q as i};
