import{j as A}from"./mui-CyG7s_nf.js";import{r as d}from"./reactVendor-BAhb8EbJ.js";import{u as P,bs as T,B as g}from"./react-setup-BXoEAsM4.js";const f="/* eslint-disable */\n\nwindow.INITIALIZE_CAPTCHA_PREFIX = function () {\n  if (window.grecaptcha?.render === undefined) {\n    return\n  }\n\n  if (window.WIDGET_TIMER_PREFIX !== null) {\n    window.clearInterval(window.WIDGET_TIMER_PREFIX)\n    window.WIDGET_TIMER_PREFIX = null\n  }\n\n  var sendMessage = function (eventType, payload) {\n    window.parent.postMessage(\n      'PREFIX' +\n        JSON.stringify({\n          type: eventType,\n          payload: payload,\n        }),\n      'PARENT_ORIGIN'\n    )\n  }\n\n  window.grecaptcha.render(\n    'PREFIX',\n    {\n      callback: function (token) {\n        sendMessage('CAPTCHA_SUCCESS', token)\n      },\n      'error-callback': function () {\n        sendMessage('CAPTCHA_ERROR', null)\n      },\n      'expired-callback': function () {\n        sendMessage('CAPTCHA_EXPIRED', null)\n      },\n    },\n    true\n  )\n}\n\nwindow.WIDGET_TIMER_PREFIX = window.setInterval(\n  window.INITIALIZE_CAPTCHA_PREFIX,\n  250\n)\n",R="https://www.google.com/recaptcha/api.js?render=explicit",E={PREFIX:"",PARENT_ORIGIN:window.location.origin,CAPTCHA_SUCCESS:"captcha-success",CAPTCHA_ERROR:"captcha-error",CAPTCHA_EXPIRED:"captcha-expired"};function _(e){if((e==null?void 0:e.head.querySelector('script[src="'.concat(R,'"]')))===null){const n=e.createElement("script");n.src=R,e.head.appendChild(n)}}function S(e,n){if(!e)return;let t=f;E.PREFIX=n,Object.entries(E).forEach(([r,l])=>{t=t.replace(RegExp(r,"g"),l)});const a=e.createElement("script");a.textContent=t,e.head.appendChild(a)}function y(){return"widget_".concat(Date.now())}function M(e){const{theme:n,size:t,email:a,handleGetKey:r,siteKey:l}=e,o=P(T),s=d.useMemo(()=>y(),[]),p=d.useRef(!1);return d.useEffect(()=>{const C=i=>{var c,u;if((u=(c=i==null?void 0:i.data)==null?void 0:c.startsWith)!=null&&u.call(c,s)){const h=i.data.slice(s.length),w=JSON.parse(h),I=w.payload;switch(w.type){case E.CAPTCHA_SUCCESS:I&&r(I);break}}};return window.addEventListener("message",C,!1),()=>{p.current&&window.removeEventListener("message",C)}},[a,s,r]),d.useEffect(()=>{o===void 0||p.current||(_(o),S(o,s),p.current=!0)},[o,s]),A.jsx("div",{id:s,"data-sitekey":l,"data-theme":n,"data-size":t})}const k="query {\n    site {\n        settings {\n            reCaptcha {\n                siteKey\n                isEnabledOnStorefront\n            }\n        }\n    }\n}",H="mutation recaptcha($token: String!, $email: String!) {\n    customer {\n      requestResetPassword(\n        reCaptchaV2: { \n            token: $token\n        },\n        input: {\n          email: $email,\n        }\n      ) {\n        errors {\n          ... on ValidationError {\n            message\n          }\n        }\n      }\n    }\n  }\n",X=(e,n)=>g.graphqlBCProxy({query:H,variables:{token:e,email:n}}),b=()=>g.graphqlBCProxy({query:k}).then(e=>{var n,t,a;return(a=(t=(n=e==null?void 0:e.data)==null?void 0:n.site)==null?void 0:t.settings)==null?void 0:a.reCaptcha});export{M as C,b as g,X as r};
