import{b as h}from"./assets/b3Logger-CMQiGC3f.js";function I(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}const{MODE:f,VITE_LOCAL_GRAPHQL_ORIGIN:S}={VITE_B2B_URL:"https://api-b2b.bigcommerce.com",VITE_B2B_SOCKET_URL:"https://api-b2b.bigcommerce.com",VITE_TRANSLATION_SERVICE_URL:"https://api-b2b.bigcommerce.com",VITE_CATPCHA_SETKEY:"captcha_setkey",VITE_B2B_CLIENT_ID:"dl7c39mdpul6hyc489yk0vzxl6jesyx",VITE_LOCAL_DEBUG:"FALSE",VITE_LOCAL_GRAPHQL_ORIGIN:"https://api-b2b.bigcommerce.com",VITE_ASSETS_ABSOLUTE_PATH:"https://cdn.jsdelivr.net/gh/pocimadigital/b2b-BC-dermalink-scripts@main/assets/",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,LEGACY:!1},g={development:S,staging:"https://api-b2b.staging.zone",production:"https://api-b2b.bigcommerce.com"};function y(){const m=c=>{const e=new DOMParser().parseFromString(c,"text/html").querySelectorAll("script");if(e.length){const a=document.querySelector("body"),o=document.querySelectorAll(".headless-buyerPortal-id");o.length>0&&o.forEach(t=>{var i;(i=t.parentNode)==null||i.removeChild(t)}),e.forEach((t,i)=>{const E=(t==null?void 0:t.innerHTML)||"",n=(t==null?void 0:t.src)||"",l=(t==null?void 0:t.dataSrc)||"",_=(t==null?void 0:t.type)||"",d=(t==null?void 0:t.crossorigin)||"",p=(t==null?void 0:t.id)||"",r=document.createElement("script");r.innerHTML=E,r.className="headless-buyerPortal-id",n&&r.setAttribute("src",n),l&&r.setAttribute("data-src",l),_?r.setAttribute("type","module"):i!==0&&(r.noModule=!0),p&&r.setAttribute("id",p),d&&r.setAttribute("crossorigin","true"),a&&a.appendChild(r)})}};async function u(c){const s={siteUrl:c,storehash:"",channelId:""},e=document.querySelector("script[data-storehash][data-channelid]");if(e!=null&&e.dataset){const t=e.dataset;s.storehash=t.storehash||"",s.channelId=t.channelid||""}const a={query:'\n        {\n          storefrontScript(\n            storeHash: "'.concat(s.storehash,'"\n            channelId: ').concat(s.channelId,'\n            siteUrl: "').concat(s.siteUrl,'"\n          ) {\n            script\n            storeHash\n            channelId\n          }\n        }')},o={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)};fetch("".concat(g[f],"/graphql"),o).then(t=>{if(!t.ok)throw new Error("La respuesta de la red no es correcta");return t.json()}).then(t=>{const{data:{storefrontScript:i}}=t;m(i.script)}).catch(t=>{h.error("Hubo un error con la operacion fetch:",t)})}async function b(){try{const{origin:c}=window.location;await u(c)}catch(c){h.error("Error de interface")}}b()}y();export{I as __vite_legacy_guard};