System.register(["./reactVendor-legacy-CtYIj4Ma.js","./mui-legacy-C2p10bcq.js","./intl-legacy-DG3cM9-L.js"],(function(e,n){"use strict";var r,t,i,o,a,u;return{setters:[e=>{r=e.r,t=e.b},e=>{i=e.P},e=>{o=e._,a=e.a,u=e.b}],execute:function(){var n=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function c(e,r){var t=function(e){var r=e.name;if(r&&-1!==r.lastIndexOf(".")&&!e.type){var t=r.split(".").pop().toLowerCase(),i=n.get(t);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof t.path){var i=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"==typeof r?r:"string"==typeof i&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var l=[".DS_Store","Thumbs.db"];function s(e){return o(this,void 0,void 0,(function(){return a(this,(function(n){return[2,(r=e,r.dataTransfer&&e.dataTransfer?p(e.dataTransfer,e.type):f(e))];var r}))}))}function f(e){return(null!==e.target&&e.target.files?g(e.target.files):[]).map((function(e){return c(e)}))}function p(e,n){return o(this,void 0,void 0,(function(){var r;return a(this,(function(t){switch(t.label){case 0:return e.items?(r=g(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,r]:[4,Promise.all(r.map(v))]):[3,2];case 1:return[2,d(y(t.sent()))];case 2:return[2,d(g(e.files).map((function(e){return c(e)})))]}}))}))}function d(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function g(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];n.push(t)}return n}function v(e){if("function"!=typeof e.webkitGetAsEntry)return m(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?D(n):m(e)}function y(e){return e.reduce((function(e,n){return u(e,Array.isArray(n)?y(n):[n])}),[])}function m(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=c(n);return Promise.resolve(r)}function b(e){return o(this,void 0,void 0,(function(){return a(this,(function(n){return[2,e.isDirectory?D(e):h(e)]}))}))}function D(e){var n=e.createReader();return new Promise((function(e,r){var t=[];!function i(){var u=this;n.readEntries((function(n){return o(u,void 0,void 0,(function(){var o,u,c;return a(this,(function(a){switch(a.label){case 0:if(n.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(t)];case 2:return o=a.sent(),e(o),[3,4];case 3:return u=a.sent(),r(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(b)),t.push(c),i(),a.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function h(e){return o(this,void 0,void 0,(function(){return a(this,(function(n){return[2,new Promise((function(n,r){e.file((function(r){var t=c(r,e.fullPath);n(t)}),(function(e){r(e)}))}))]}))}))}var F=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),t=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?t.toLowerCase().endsWith(n):n.endsWith("/*")?o===n.replace(/\/.*$/,""):i===n}))}return!0};function O(e,n){return"application/x-moz-file"===e.type||F(e,n)}function w(e,n,r){if(j(e.size)){if(j(n)&&j(r))return e.size>=n&&e.size<=r;if(j(n))return e.size>=n;if(j(r))return e.size<=r}return!0}function j(e){return null!=e}function A(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function E(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function P(e){e.preventDefault()}function k(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),i=1;i<r;i++)t[i-1]=arguments[i];return n.some((function(n){return!A(e)&&n&&n.apply(void 0,[e].concat(t)),A(e)}))}}function C(e){return function(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],t=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(c){i=!0,o=c}finally{try{t||null==u.return||u.return()}finally{if(i)throw o}}return r}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function z(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(r,!0).forEach((function(n){L(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function L(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function T(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var R=e("D",r.forwardRef((function(e,n){var i=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.accept,t=e.disabled,i=void 0!==t&&t,o=e.getFilesFromEvent,a=void 0===o?s:o,u=e.maxSize,c=void 0===u?1/0:u,l=e.minSize,f=void 0===l?0:l,p=e.multiple,d=void 0===p||p,g=e.onDragEnter,v=e.onDragLeave,y=e.onDragOver,m=e.onDrop,b=e.onDropAccepted,D=e.onDropRejected,h=e.onFileDialogCancel,F=e.preventDropOnDocument,j=void 0===F||F,x=e.noClick,R=void 0!==x&&x,B=e.noKeyboard,M=void 0!==B&&B,q=e.noDrag,G=void 0!==q&&q,N=e.noDragEventsBubbling,W=void 0!==N&&N,$=r.useRef(null),_=r.useRef(null),H=S(r.useReducer(K,I),2),V=H[0],J=H[1],Q=V.isFocused,U=V.isFileDialogActive,X=V.draggedFiles,Y=r.useCallback((function(){_.current&&(J({type:"openDialog"}),_.current.value=null,_.current.click())}),[J]),Z=function(){U&&setTimeout((function(){_.current&&(_.current.files.length||(J({type:"closeDialog"}),"function"==typeof h&&h()))}),300)};r.useEffect((function(){return window.addEventListener("focus",Z,!1),function(){window.removeEventListener("focus",Z,!1)}}),[_,U,h]);var ee=r.useCallback((function(e){$.current&&$.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Y()))}),[$,_]),ne=r.useCallback((function(){J({type:"focus"})}),[]),re=r.useCallback((function(){J({type:"blur"})}),[]),te=r.useCallback((function(){R||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?setTimeout(Y,0):Y())}),[_,R]),ie=r.useRef([]),oe=function(e){$.current&&$.current.contains(e.target)||(e.preventDefault(),ie.current=[])};r.useEffect((function(){return j&&(document.addEventListener("dragover",P,!1),document.addEventListener("drop",oe,!1)),function(){j&&(document.removeEventListener("dragover",P),document.removeEventListener("drop",oe))}}),[$,j]);var ae=r.useCallback((function(e){e.preventDefault(),e.persist(),de(e),-1===ie.current.indexOf(e.target)&&(ie.current=[].concat(C(ie.current),[e.target])),E(e)&&Promise.resolve(a(e)).then((function(n){A(e)&&!W||(J({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),g&&g(e))}))}),[a,g,W]),ue=r.useCallback((function(e){if(e.preventDefault(),e.persist(),de(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return E(e)&&y&&y(e),!1}),[y,W]),ce=r.useCallback((function(e){e.preventDefault(),e.persist(),de(e);var n=ie.current.filter((function(n){return n!==e.target&&$.current&&$.current.contains(n)}));ie.current=n,n.length>0||(J({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),E(e)&&v&&v(e))}),[$,v,W]),le=r.useCallback((function(e){e.preventDefault(),e.persist(),de(e),ie.current=[],E(e)&&Promise.resolve(a(e)).then((function(r){if(!A(e)||W){var t=[],i=[];r.forEach((function(e){O(e,n)&&w(e,f,c)?t.push(e):i.push(e)})),!d&&t.length>1&&i.push.apply(i,C(t.splice(0))),J({acceptedFiles:t,rejectedFiles:i,type:"setFiles"}),m&&m(t,i,e),i.length>0&&D&&D(i,e),t.length>0&&b&&b(t,e)}})),J({type:"reset"})}),[d,n,f,c,a,m,b,D,W]),se=function(e){return i?null:e},fe=function(e){return M?null:se(e)},pe=function(e){return G?null:se(e)},de=function(e){W&&e.stopPropagation()},ge=r.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,t=e.onKeyDown,o=e.onFocus,a=e.onBlur,u=e.onClick,c=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=T(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return z(L({onKeyDown:fe(k(t,ee)),onFocus:fe(k(o,ne)),onBlur:fe(k(a,re)),onClick:se(k(u,te)),onDragEnter:pe(k(c,ae)),onDragOver:pe(k(l,ue)),onDragLeave:pe(k(s,ce)),onDrop:pe(k(f,le))},r,$),i||M?{}:{tabIndex:0},{},p)}}),[$,ee,ne,re,te,ae,ue,ce,le,M,G,i]),ve=r.useCallback((function(e){e.stopPropagation()}),[]),ye=r.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.refKey,t=void 0===r?"ref":r,i=e.onChange,o=e.onClick,a=T(e,["refKey","onChange","onClick"]);return z({},L({accept:n,multiple:d,type:"file",style:{display:"none"},onChange:se(k(i,le)),onClick:se(k(o,ve)),autoComplete:"off",tabIndex:-1},t,_),{},a)}}),[_,n,d,le,i]),me=X.length,be=me>0&&function(e){var n=e.files,r=e.accept,t=e.minSize,i=e.maxSize;return!(!e.multiple&&n.length>1)&&n.every((function(e){return O(e,r)&&w(e,t,i)}))}({files:X,accept:n,minSize:f,maxSize:c,multiple:d});return z({},V,{isDragAccept:be,isDragReject:me>0&&!be,isFocused:Q&&!i,getRootProps:ge,getInputProps:ye,rootRef:$,inputRef:_,open:se(Y)})}(T(e,["children"])),a=o.open,u=T(o,["open"]);return r.useImperativeHandle(n,(function(){return{open:a}}),[a]),t.createElement(r.Fragment,null,i(z({},u,{open:a})))})));R.displayName="Dropzone",R.propTypes={children:i.func,accept:i.oneOfType([i.string,i.arrayOf(i.string)]),multiple:i.bool,preventDropOnDocument:i.bool,noClick:i.bool,noKeyboard:i.bool,noDrag:i.bool,noDragEventsBubbling:i.bool,minSize:i.number,maxSize:i.number,disabled:i.bool,getFilesFromEvent:i.func,onFileDialogCancel:i.func,onDragEnter:i.func,onDragLeave:i.func,onDragOver:i.func,onDrop:i.func,onDropAccepted:i.func,onDropRejected:i.func};var I={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]};function K(e,n){switch(n.type){case"focus":return z({},e,{isFocused:!0});case"blur":return z({},e,{isFocused:!1});case"openDialog":return z({},e,{isFileDialogActive:!0});case"closeDialog":return z({},e,{isFileDialogActive:!1});case"setDraggedFiles":var r=n.isDragActive;return z({},e,{draggedFiles:n.draggedFiles,isDragActive:r});case"setFiles":return z({},e,{acceptedFiles:n.acceptedFiles,rejectedFiles:n.rejectedFiles});case"reset":return z({},e,{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]});default:return e}}}}}));