System.register(["./reactVendor-legacy-CtYIj4Ma.js","./mui-legacy-C2p10bcq.js"],(function(e,t){"use strict";var r,n,o,a;return{setters:[e=>{r=e.a,n=e.r,o=e.d},e=>{a=e.p}],execute:function(){var t={exports:{}},i={},s={exports:{}},l={};function u(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=u(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function c(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=u(e))&&(n&&(n+=" "),n+=t);return n}const f=Object.freeze(Object.defineProperty({__proto__:null,clsx:c,default:c},Symbol.toStringTag,{value:"Module"})),d=r(f);var p={},h={};Object.defineProperty(h,"__esModule",{value:!0}),h.dontSetMe=function(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))},h.findInArray=function(e,t){for(let r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]},h.int=function(e){return parseInt(e,10)},h.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},h.isNum=function(e){return"number"==typeof e&&!isNaN(e)};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.browserPrefixToKey=m,g.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},g.default=void 0,g.getPrefix=b;const y=["Moz","Webkit","O","ms"];function b(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";const r=null===(e=window.document)||void 0===e||null===(e=e.documentElement)||void 0===e?void 0:e.style;if(!r)return"";if(t in r)return"";for(let n=0;n<y.length;n++)if(m(t,y[n])in r)return y[n];return""}function m(e,t){return t?"".concat(t).concat(function(e){let t="",r=!0;for(let n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}g.default=b(),Object.defineProperty(p,"__esModule",{value:!0}),p.addClassName=j,p.addEvent=function(e,t,r,n){if(!e)return;const o={capture:!0,...n};e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r},p.addUserSelectStyles=function(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&j(e.body,"react-draggable-transparent-selection")},p.createCSSTransform=function(e,t){const r=P(e,t,"px");return{[(0,O.browserPrefixToKey)("transform",O.default)]:r}},p.createSVGTransform=function(e,t){return P(e,t,"")},p.getTouch=function(e,t){return e.targetTouches&&(0,v.findInArray)(e.targetTouches,(e=>t===e.identifier))||e.changedTouches&&(0,v.findInArray)(e.changedTouches,(e=>t===e.identifier))},p.getTouchIdentifier=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0},p.getTranslation=P,p.innerHeight=function(e){let t=e.clientHeight;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,v.int)(r.paddingTop),t-=(0,v.int)(r.paddingBottom),t},p.innerWidth=function(e){let t=e.clientWidth;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,v.int)(r.paddingLeft),t-=(0,v.int)(r.paddingRight),t},p.matchesSelector=D,p.matchesSelectorAndParentsTo=function(e,t,r){let n=e;do{if(D(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},p.offsetXYFromParent=function(e,t,r){const n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),o=(e.clientX+t.scrollLeft-n.left)/r,a=(e.clientY+t.scrollTop-n.top)/r;return{x:o,y:a}},p.outerHeight=function(e){let t=e.clientHeight;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,v.int)(r.borderTopWidth),t+=(0,v.int)(r.borderBottomWidth),t},p.outerWidth=function(e){let t=e.clientWidth;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,v.int)(r.borderLeftWidth),t+=(0,v.int)(r.borderRightWidth),t},p.removeClassName=x,p.removeEvent=function(e,t,r,n){if(!e)return;const o={capture:!0,...n};e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null},p.removeUserSelectStyles=function(e){if(e)try{if(e.body&&x(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(t){}};var v=h,O=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=w(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(g);function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(w=function(e){return e?r:t})(e)}let S="";function D(e,t){return S||(S=(0,v.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,v.isFunction)(e[t])}))),!!(0,v.isFunction)(e[S])&&e[S](t)}function P(e,t,r){let{x:n,y:o}=e,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){const e="".concat("string"==typeof t.x?t.x:t.x+r),n="".concat("string"==typeof t.y?t.y:t.y+r);a="translate(".concat(e,", ").concat(n,")")+a}return a}function j(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function x(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var M={};Object.defineProperty(M,"__esModule",{value:!0}),M.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},M.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},M.createCoreData=function(e,t,r){const n=!(0,R.isNum)(e.lastX),o=z(e);return n?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:o,deltaX:t-e.lastX,deltaY:r-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:r}},M.createDraggableData=function(e,t){const r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}},M.getBoundPosition=function(e,t,r){if(!e.props.bounds)return[t,r];let{bounds:n}=e.props;n="string"==typeof n?n:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(n);const o=z(e);if("string"==typeof n){const{ownerDocument:e}=o,t=e.defaultView;let r;if(r="parent"===n?o.parentNode:e.querySelector(n),!(r instanceof t.HTMLElement))throw new Error('Bounds selector "'+n+'" could not find an element.');const a=r,i=t.getComputedStyle(o),s=t.getComputedStyle(a);n={left:-o.offsetLeft+(0,R.int)(s.paddingLeft)+(0,R.int)(i.marginLeft),top:-o.offsetTop+(0,R.int)(s.paddingTop)+(0,R.int)(i.marginTop),right:(0,C.innerWidth)(a)-(0,C.outerWidth)(o)-o.offsetLeft+(0,R.int)(s.paddingRight)-(0,R.int)(i.marginRight),bottom:(0,C.innerHeight)(a)-(0,C.outerHeight)(o)-o.offsetTop+(0,R.int)(s.paddingBottom)-(0,R.int)(i.marginBottom)}}return(0,R.isNum)(n.right)&&(t=Math.min(t,n.right)),(0,R.isNum)(n.bottom)&&(r=Math.min(r,n.bottom)),(0,R.isNum)(n.left)&&(t=Math.max(t,n.left)),(0,R.isNum)(n.top)&&(r=Math.max(r,n.top)),[t,r]},M.getControlPosition=function(e,t,r){const n="number"==typeof t?(0,C.getTouch)(e,t):null;if("number"==typeof t&&!n)return null;const o=z(r),a=r.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,C.offsetXYFromParent)(n||e,a,r.props.scale)},M.snapToGrid=function(e,t,r){const n=Math.round(t/e[0])*e[0],o=Math.round(r/e[1])*e[1];return[n,o]};var R=h,C=p;function z(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var E={},N={};Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(){},Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var T=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=U(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(n),k=Y(a),_=Y(o),H=p,A=M,W=h,X=Y(N);function Y(e){return e&&e.__esModule?e:{default:e}}function U(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(U=function(e){return e?r:t})(e)}function L(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const V={start:"touchstart",move:"touchmove",stop:"touchend"},B={start:"mousedown",move:"mousemove",stop:"mouseup"};let I=B,G=class extends T.Component{constructor(){super(...arguments),L(this,"dragging",!1),L(this,"lastX",NaN),L(this,"lastY",NaN),L(this,"touchIdentifier",null),L(this,"mounted",!1),L(this,"handleDragStart",(e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;const t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=t;if(this.props.disabled||!(e.target instanceof r.defaultView.Node)||this.props.handle&&!(0,H.matchesSelectorAndParentsTo)(e.target,this.props.handle,t)||this.props.cancel&&(0,H.matchesSelectorAndParentsTo)(e.target,this.props.cancel,t))return;"touchstart"===e.type&&e.preventDefault();const n=(0,H.getTouchIdentifier)(e);this.touchIdentifier=n;const o=(0,A.getControlPosition)(e,n,this);if(null==o)return;const{x:a,y:i}=o,s=(0,A.createCoreData)(this,a,i);(0,X.default)("DraggableCore: handleDragStart: %j",s),(0,X.default)("calling",this.props.onStart),!1!==this.props.onStart(e,s)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,H.addUserSelectStyles)(r),this.dragging=!0,this.lastX=a,this.lastY=i,(0,H.addEvent)(r,I.move,this.handleDrag),(0,H.addEvent)(r,I.stop,this.handleDragStop))})),L(this,"handleDrag",(e=>{const t=(0,A.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:r,y:n}=t;if(Array.isArray(this.props.grid)){let e=r-this.lastX,t=n-this.lastY;if([e,t]=(0,A.snapToGrid)(this.props.grid,e,t),!e&&!t)return;r=this.lastX+e,n=this.lastY+t}const o=(0,A.createCoreData)(this,r,n);if((0,X.default)("DraggableCore: handleDrag: %j",o),!1!==this.props.onDrag(e,o)&&!1!==this.mounted)this.lastX=r,this.lastY=n;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(a){const e=document.createEvent("MouseEvents");e.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}})),L(this,"handleDragStop",(e=>{if(!this.dragging)return;const t=(0,A.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:r,y:n}=t;if(Array.isArray(this.props.grid)){let e=r-this.lastX||0,t=n-this.lastY||0;[e,t]=(0,A.snapToGrid)(this.props.grid,e,t),r=this.lastX+e,n=this.lastY+t}const o=(0,A.createCoreData)(this,r,n);if(!1===this.props.onStop(e,o)||!1===this.mounted)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,H.removeUserSelectStyles)(a.ownerDocument),(0,X.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,X.default)("DraggableCore: Removing handlers"),(0,H.removeEvent)(a.ownerDocument,I.move,this.handleDrag),(0,H.removeEvent)(a.ownerDocument,I.stop,this.handleDragStop))})),L(this,"onMouseDown",(e=>(I=B,this.handleDragStart(e)))),L(this,"onMouseUp",(e=>(I=B,this.handleDragStop(e)))),L(this,"onTouchStart",(e=>(I=V,this.handleDragStart(e)))),L(this,"onTouchEnd",(e=>(I=V,this.handleDragStop(e))))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,H.addEvent)(e,V.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:t}=e;(0,H.removeEvent)(t,B.move,this.handleDrag),(0,H.removeEvent)(t,V.move,this.handleDrag),(0,H.removeEvent)(t,B.stop,this.handleDragStop),(0,H.removeEvent)(t,V.stop,this.handleDragStop),(0,H.removeEvent)(e,V.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,H.removeUserSelectStyles)(t)}}findDOMNode(){var e,t;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current:_.default.findDOMNode(this)}render(){return T.cloneElement(T.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};E.default=G,L(G,"displayName","DraggableCore"),L(G,"propTypes",{allowAnyClick:k.default.bool,children:k.default.node.isRequired,disabled:k.default.bool,enableUserSelectHack:k.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:k.default.arrayOf(k.default.number),handle:k.default.string,cancel:k.default.string,nodeRef:k.default.object,onStart:k.default.func,onDrag:k.default.func,onStop:k.default.func,onMouseDown:k.default.func,scale:k.default.number,className:W.dontSetMe,style:W.dontSetMe,transform:W.dontSetMe}),L(G,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return f.default}}),e.default=void 0;var t=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(n),r=y(a),i=y(o),s=y(d),l=p,u=M,c=h,f=y(E),g=y(N);function y(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function v(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class O extends t.Component{static getDerivedStateFromProps(e,t){let{position:r}=e,{prevPropsPosition:n}=t;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,g.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:{...r}})}constructor(e){super(e),v(this,"onDragStart",((e,t)=>{if((0,g.default)("Draggable: onDragStart: %j",t),!1===this.props.onStart(e,(0,u.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})})),v(this,"onDrag",((e,t)=>{if(!this.state.dragging)return!1;(0,g.default)("Draggable: onDrag: %j",t);const r=(0,u.createDraggableData)(this,t),n={x:r.x,y:r.y,slackX:0,slackY:0};if(this.props.bounds){const{x:e,y:t}=n;n.x+=this.state.slackX,n.y+=this.state.slackY;const[o,a]=(0,u.getBoundPosition)(this,n.x,n.y);n.x=o,n.y=a,n.slackX=this.state.slackX+(e-n.x),n.slackY=this.state.slackY+(t-n.y),r.x=n.x,r.y=n.y,r.deltaX=n.x-this.state.x,r.deltaY=n.y-this.state.y}if(!1===this.props.onDrag(e,r))return!1;this.setState(n)})),v(this,"onDragStop",((e,t)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(e,(0,u.createDraggableData)(this,t)))return!1;(0,g.default)("Draggable: onDragStop: %j",t);const r={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:e,y:t}=this.props.position;r.x=e,r.y=t}this.setState(r)})),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!==(e=null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current)&&void 0!==e?e:i.default.findDOMNode(this)}render(){const{axis:e,bounds:r,children:n,defaultPosition:o,defaultClassName:a,defaultClassNameDragging:i,defaultClassNameDragged:c,position:d,positionOffset:p,scale:h,...g}=this.props;let y={},b=null;const v=!Boolean(d)||this.state.dragging,O=d||o,w={x:(0,u.canDragX)(this)&&v?this.state.x:O.x,y:(0,u.canDragY)(this)&&v?this.state.y:O.y};this.state.isElementSVG?b=(0,l.createSVGTransform)(w,p):y=(0,l.createCSSTransform)(w,p);const S=(0,s.default)(n.props.className||"",a,{[i]:this.state.dragging,[c]:this.state.dragged});return t.createElement(f.default,m({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(n),{className:S,style:{...n.props.style,...y},transform:b}))}}e.default=O,v(O,"displayName","Draggable"),v(O,"propTypes",{...f.default.propTypes,axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe}),v(O,"defaultProps",{...f.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})}(l);const{default:F,DraggableCore:q}=l;s.exports=F,s.exports.default=F,s.exports.DraggableCore=q;var K,J=s.exports,Q={__esModule:!0,cloneElement:function(e,t){return t.style&&e.props.style&&(t.style=ee(ee({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),Z.default.cloneElement(e,t)}},Z=(K=n)&&K.__esModule?K:{default:K};function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var re={__esModule:!0,resizableProps:void 0},ne=function(e){return e&&e.__esModule?e:{default:e}}(a),oe={axis:ne.default.oneOf(["both","x","y","none"]),className:ne.default.string,children:ne.default.element.isRequired,draggableOpts:ne.default.shape({allowAnyClick:ne.default.bool,cancel:ne.default.string,children:ne.default.node,disabled:ne.default.bool,enableUserSelectHack:ne.default.bool,offsetParent:ne.default.node,grid:ne.default.arrayOf(ne.default.number),handle:ne.default.string,nodeRef:ne.default.object,onStart:ne.default.func,onDrag:ne.default.func,onStop:ne.default.func,onMouseDown:ne.default.func,scale:ne.default.number}),height:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,o=t[0];return"both"===o.axis||"y"===o.axis?(n=ne.default.number).isRequired.apply(n,t):ne.default.number.apply(ne.default,t)},handle:ne.default.oneOfType([ne.default.node,ne.default.func]),handleSize:ne.default.arrayOf(ne.default.number),lockAspectRatio:ne.default.bool,maxConstraints:ne.default.arrayOf(ne.default.number),minConstraints:ne.default.arrayOf(ne.default.number),onResizeStop:ne.default.func,onResizeStart:ne.default.func,onResize:ne.default.func,resizeHandles:ne.default.arrayOf(ne.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:ne.default.number,width:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,o=t[0];return"both"===o.axis||"x"===o.axis?(n=ne.default.number).isRequired.apply(n,t):ne.default.number.apply(ne.default,t)}};re.resizableProps=oe,i.__esModule=!0,i.default=void 0;var ae=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=ce(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(n),ie=J,se=Q,le=re,ue=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function ce(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(ce=function(e){return e?r:t})(e)}function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fe.apply(this,arguments)}function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){he(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function he(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ge(e,t){return ge=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ge(e,t)}var ye=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleRefs={},t.lastHandleRect=null,t.slack=null,t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,ge(t,r);var o=n.prototype;return o.componentWillUnmount=function(){this.resetData()},o.resetData=function(){this.lastHandleRect=this.slack=null},o.runConstraints=function(e,t){var r=this.props,n=r.minConstraints,o=r.maxConstraints,a=r.lockAspectRatio;if(!n&&!o&&!a)return[e,t];if(a){var i=this.props.width/this.props.height,s=e-this.props.width,l=t-this.props.height;Math.abs(s)>Math.abs(l*i)?t=e/i:e=t*i}var u=e,c=t,f=this.slack||[0,0],d=f[0],p=f[1];return e+=d,t+=p,n&&(e=Math.max(n[0],e),t=Math.max(n[1],t)),o&&(e=Math.min(o[0],e),t=Math.min(o[1],t)),this.slack=[d+(u-e),p+(c-t)],[e,t]},o.resizeHandler=function(e,t){var r=this;return function(n,o){var a=o.node,i=o.deltaX,s=o.deltaY;"onResizeStart"===e&&r.resetData();var l=("both"===r.props.axis||"x"===r.props.axis)&&"n"!==t&&"s"!==t,u=("both"===r.props.axis||"y"===r.props.axis)&&"e"!==t&&"w"!==t;if(l||u){var c=t[0],f=t[t.length-1],d=a.getBoundingClientRect();null!=r.lastHandleRect&&("w"===f&&(i+=d.left-r.lastHandleRect.left),"n"===c&&(s+=d.top-r.lastHandleRect.top)),r.lastHandleRect=d,"w"===f&&(i=-i),"n"===c&&(s=-s);var p=r.props.width+(l?i/r.props.transformScale:0),h=r.props.height+(u?s/r.props.transformScale:0),g=r.runConstraints(p,h);p=g[0],h=g[1];var y=p!==r.props.width||h!==r.props.height,b="function"==typeof r.props[e]?r.props[e]:null;b&&!("onResize"===e&&!y)&&(null==n.persist||n.persist(),b(n,{node:a,size:{width:p,height:h},handle:t})),"onResizeStop"===e&&r.resetData()}}},o.renderResizeHandle=function(e,t){var r=this.props.handle;if(!r)return ae.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+e,ref:t});if("function"==typeof r)return r(e,t);var n=pe({ref:t},"string"==typeof r.type?{}:{handleAxis:e});return ae.cloneElement(r,n)},o.render=function(){var e=this,t=this.props,r=t.children,n=t.className,o=t.draggableOpts;t.width,t.height,t.handle,t.handleSize,t.lockAspectRatio,t.axis,t.minConstraints,t.maxConstraints,t.onResize,t.onResizeStop,t.onResizeStart;var a=t.resizeHandles;t.transformScale;var i=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,ue);return(0,se.cloneElement)(r,pe(pe({},i),{},{className:(n?n+" ":"")+"react-resizable",children:[].concat(r.props.children,a.map((function(t){var r,n=null!=(r=e.handleRefs[t])?r:e.handleRefs[t]=ae.createRef();return ae.createElement(ie.DraggableCore,fe({},o,{nodeRef:n,key:"resizableHandle-"+t,onStop:e.resizeHandler("onResizeStop",t),onStart:e.resizeHandler("onResizeStart",t),onDrag:e.resizeHandler("onResize",t)}),e.renderResizeHandle(t,n))})))}))},n}(ae.Component);i.default=ye,ye.propTypes=le.resizableProps,ye.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var be={__esModule:!0,default:void 0},me=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=Pe(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(n),ve=De(a),Oe=De(i),we=re,Se=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function De(e){return e&&e.__esModule?e:{default:e}}function Pe(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(Pe=function(e){return e?r:t})(e)}function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},je.apply(this,arguments)}function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){Re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Re(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ce(e,t){return Ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ce(e,t)}var ze=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={width:t.props.width,height:t.props.height,propsWidth:t.props.width,propsHeight:t.props.height},t.onResize=function(e,r){var n=r.size;t.props.onResize?(null==e.persist||e.persist(),t.setState(n,(function(){return t.props.onResize&&t.props.onResize(e,r)}))):t.setState(n)},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,Ce(t,r),n.getDerivedStateFromProps=function(e,t){return t.propsWidth!==e.width||t.propsHeight!==e.height?{width:e.width,height:e.height,propsWidth:e.width,propsHeight:e.height}:null},n.prototype.render=function(){var e=this.props,t=e.handle,r=e.handleSize;e.onResize;var n=e.onResizeStart,o=e.onResizeStop,a=e.draggableOpts,i=e.minConstraints,s=e.maxConstraints,l=e.lockAspectRatio,u=e.axis;e.width,e.height;var c=e.resizeHandles,f=e.style,d=e.transformScale,p=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,Se);return me.createElement(Oe.default,{axis:u,draggableOpts:a,handle:t,handleSize:r,height:this.state.height,lockAspectRatio:l,maxConstraints:s,minConstraints:i,onResizeStart:n,onResize:this.onResize,onResizeStop:o,resizeHandles:c,transformScale:d,width:this.state.width},me.createElement("div",je({},p,{style:Me(Me({},f),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},n}(me.Component);be.default=ze,ze.propTypes=Me(Me({},we.resizableProps),{},{children:ve.default.element}),t.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")},e("R",t.exports.Resizable=i.default),t.exports.ResizableBox=be.default}}}));
