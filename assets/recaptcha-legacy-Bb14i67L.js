System.register(["./mui-legacy-C2p10bcq.js","./reactVendor-legacy-CtYIj4Ma.js","./react-setup-legacy-BjZvYiUe.js"],(function(n,e){"use strict";var t,a,r,s,i;return{setters:[n=>{t=n.j},n=>{a=n.r},n=>{r=n.u,s=n.bs,i=n.B}],execute:function(){n("C",(function(n){const{theme:i,size:d,email:l,handleGetKey:u,siteKey:E}=n,p=r(s),w=a.useMemo((()=>`widget_${Date.now()}`),[]),I=a.useRef(!1);return a.useEffect((()=>{const n=n=>{if(n?.data?.startsWith?.(w)){const e=n.data.slice(w.length),t=JSON.parse(e),a=t.payload;t.type===o.CAPTCHA_SUCCESS&&a&&u(a)}};return window.addEventListener("message",n,!1),()=>{I.current&&window.removeEventListener("message",n)}}),[l,w,u]),a.useEffect((()=>{void 0===p||I.current||(function(n){if(null===n?.head.querySelector(`script[src="${c}"]`)){const e=n.createElement("script");e.src=c,n.head.appendChild(e)}}(p),function(n,t){if(!n)return;let a=e;o.PREFIX=t,Object.entries(o).forEach((([n,e])=>{a=a.replace(RegExp(n,"g"),e)}));const r=n.createElement("script");r.textContent=a,n.head.appendChild(r)}(p,w),I.current=!0)}),[p,w]),t.jsx("div",{id:w,"data-sitekey":E,"data-theme":i,"data-size":d})}));const e="/* eslint-disable */\n\nwindow.INITIALIZE_CAPTCHA_PREFIX = function () {\n  if (window.grecaptcha?.render === undefined) {\n    return\n  }\n\n  if (window.WIDGET_TIMER_PREFIX !== null) {\n    window.clearInterval(window.WIDGET_TIMER_PREFIX)\n    window.WIDGET_TIMER_PREFIX = null\n  }\n\n  var sendMessage = function (eventType, payload) {\n    window.parent.postMessage(\n      'PREFIX' +\n        JSON.stringify({\n          type: eventType,\n          payload: payload,\n        }),\n      'PARENT_ORIGIN'\n    )\n  }\n\n  window.grecaptcha.render(\n    'PREFIX',\n    {\n      callback: function (token) {\n        sendMessage('CAPTCHA_SUCCESS', token)\n      },\n      'error-callback': function () {\n        sendMessage('CAPTCHA_ERROR', null)\n      },\n      'expired-callback': function () {\n        sendMessage('CAPTCHA_EXPIRED', null)\n      },\n    },\n    true\n  )\n}\n\nwindow.WIDGET_TIMER_PREFIX = window.setInterval(\n  window.INITIALIZE_CAPTCHA_PREFIX,\n  250\n)\n",c="https://www.google.com/recaptcha/api.js?render=explicit",o={PREFIX:"",PARENT_ORIGIN:window.location.origin,CAPTCHA_SUCCESS:"captcha-success",CAPTCHA_ERROR:"captcha-error",CAPTCHA_EXPIRED:"captcha-expired"};n("r",((n,e)=>i.graphqlBCProxy({query:"mutation recaptcha($token: String!, $email: String!) {\n    customer {\n      requestResetPassword(\n        reCaptchaV2: { \n            token: $token\n        },\n        input: {\n          email: $email,\n        }\n      ) {\n        errors {\n          ... on ValidationError {\n            message\n          }\n        }\n      }\n    }\n  }\n",variables:{token:n,email:e}}))),n("g",(()=>i.graphqlBCProxy({query:"query {\n    site {\n        settings {\n            reCaptcha {\n                siteKey\n                isEnabledOnStorefront\n            }\n        }\n    }\n}"}).then((n=>n?.data?.site?.settings?.reCaptcha))))}}}));
