/*! For license information please see bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-sequence"]=t():e["react-sequence"]=t()}(self,(function(){return(()=>{var e={382:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(537),o=r.n(n),i=r(645),a=r.n(i),s=r(667),c=r.n(s),u=new URL(r(416),r.b),l=a()(o()),f=c()(u);l.push([e.id,"@font-face {\r\n    font-family: 'Uni Sans';\r\n    src: url("+f+") format('opentype');\r\n}","",{version:3,sources:["webpack://./src/font.css"],names:[],mappings:"AAAA;IACI,uBAAuB;IACvB,+DAAyD;AAC7D",sourcesContent:["@font-face {\r\n    font-family: 'Uni Sans';\r\n    src: url('./fonts/Uni Sans Heavy.otf') format('opentype');\r\n}"],sourceRoot:""}]);const p=l},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{"use strict";e.exports=function(e){var t=e[1],r=e[3];if(!r)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),i="/*# ".concat(o," */"),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}return[t].join("\n")}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,s,c=o(e),u=1;u<arguments.length;u++){for(var l in a=Object(arguments[u]))r.call(a,l)&&(c[l]=a[l]);if(t){s=t(a);for(var f=0;f<s.length;f++)n.call(a,s[f])&&(c[s[f]]=a[s[f]])}}return c}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},408:(e,t,r)=>{"use strict";var n=r(418),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),s=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function v(){}function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var g=m.prototype=new v;g.constructor=m,n(g,h.prototype),g.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,r){var n,i={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===n?"."+j(c,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),_(a,t,r,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),t.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+j(s=e[u],u);c+=_(s,t,r,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=_(s=s.value,t,r,l=n+j(s,u++),a);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function k(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function A(){var e=C.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var i=n({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)w.call(t,l)&&!O.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=L,t.createFactory=function(e){var t=L.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:k}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return A().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,r){return A().useReducer(e,t,r)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.2"},294:(e,t,r)=>{"use strict";e.exports=r(408)},91:(e,t,r)=>{var n=r(382);"string"==typeof n&&(n=[[e.id,n,""]]);r(723)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(e.exports=n.locals)},723:(e,t,r)=>{var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,l=0,f=[],p=r(947);function d(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(g(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(g(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function y(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function b(e,t){var r=c(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),f.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,r);r.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=r.nc;n&&(e.attrs.nonce=n)}return m(t,e.attrs),b(e,t),t}function m(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function g(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;r=u||(u=v(t)),n=O.bind(null,r,a,!1),o=O.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),b(e,t),t}(t),n=R.bind(null,r,t),o=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(t),n=L.bind(null,r),o=function(){h(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=y(e,t);return d(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}for(e&&d(y(e,t),t),o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function O(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function L(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function R(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=p(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},947:e=>{e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},416:(e,t,r)=>{"use strict";e.exports=r.p+"c6f6824ca9c5d2e144e8.otf"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/dist/",r.b=document.baseURI||self.location.href;var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>b});var e=r(294),t=r(697),o=r.n(t),i=function(t){var r=t.children,n=t.width;return e.createElement("div",{style:{flex:"0 0 ".concat(n,"px")}}," ",r," ")};i.defaultProps={children:" "},i.propTypes={children:o().oneOfType([o().string,o().element]),width:o().number.isRequired};const a=i;function s(t){var r=t.labels,n=t.width,o=t.labelsVisibility,i=t.squares,s=t.height,c=t.yWidth;return e.createElement("div",{style:{display:"flex"}},e.createElement(a,{width:c}),r.map((function(t,r){return e.createElement("div",{key:r,style:{flex:i?"none":1,textAlign:"center",width:i?"".concat(s+1,"px"):n,fontSize:"12px",fontFamily:"Uni Sans",color:"#55606E",padding:"8px 0px",visibility:o&&!o[r]?"hidden":"visible"}},t)})))}s.propTypes={labels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,labelsVisibility:o().arrayOf(o().bool),width:o().number.isRequired,squares:o().bool,height:o().number},s.defaultProps={labelsVisibility:null,squares:!1,height:30};const c=s;function u(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(t){var r=t.xLabels,n=t.yLabels,o=t.data,i=(t.xLabelWidth,t.yLabelWidth),s=t.background,c=t.height,l=t.yLabelTextAlign,f=t.unit,p=t.displayYLabels,d=t.onClick,y=t.cursor,b=t.squares,h=t.cellRender,v=t.cellStyle,m=t.title,g=o.reduce((function(e,t){return[].concat(u(t),u(e))}),[]),x=Math.max.apply(Math,u(g)),w=Math.min.apply(Math,u(g));return e.createElement("div",null,n.map((function(t,n){return e.createElement("div",{key:n,style:{display:"flex"}},e.createElement(a,{width:i},e.createElement("div",{style:{position:"relative",textAlign:l,paddingRight:"5px",paddingTop:"".concat(c/3.7,"px"),width:"".concat(i,"px"),fontSize:"12px",fontFamily:"Uni Sans",color:"#55606E",transform:"rotate(-90deg)",top:"15px",right:"5px"}},p&&t)),r.map((function(r,i){var a=o[n][i],u=Object.assign({cursor:"".concat(y),margin:"1px 1px 0 0",height:c,width:b?"".concat(c,"px"):void 0,fontFamily:"Uni Sans",flex:b?"none":1,textAlign:"center"},v(s,a,w,x,o,i,n));return e.createElement("div",{onClick:function(){return d(i,n)},title:function(){return m(a,f,i,n)},key:"".concat(i,"_").concat(n),style:u},e.createElement("div",null,h(a,r,t)))})))})))};f.propTypes={xLabels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,yLabels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,data:o().arrayOf(o().array).isRequired,background:o().string.isRequired,height:o().number.isRequired,xLabelWidth:o().number.isRequired,yLabelWidth:o().number.isRequired,yLabelTextAlign:o().string.isRequired,unit:o().string.isRequired,displayYLabels:o().bool,onClick:o().func,cursor:o().string,squares:o().bool,cellRender:o().func.isRequired,cellStyle:o().func.isRequired,title:o().func},f.defaultProps={displayYLabels:!0,cursor:"",onClick:function(){},squares:!1,title:function(e,t){return(e||0===e)&&"".concat(e," ").concat(t)}};const p=f;function d(t){var r=t.xLabels,n=t.yLabels,o=t.data,i=t.background,a=t.height,s=t.xLabelWidth,u=t.yLabelWidth,l=t.xLabelsLocation,f=t.yLabelTextAlign,d=t.xLabelsVisibility,y=t.unit,b=t.displayYLabels,h=t.onClick,v=t.squares,m=t.cellRender,g=t.cellStyle,x=t.title,w="";void 0!==h&&(w="pointer");var O=e.createElement(c,{labels:r,width:s,labelsVisibility:d,height:a,squares:v,yWidth:u});return e.createElement("div",null,"top"===l&&O,e.createElement(p,{xLabels:r,yLabels:n,data:o,background:i,height:a,xLabelWidth:s,yLabelWidth:u,yLabelTextAlign:f,unit:y,xLabelsLocation:l,displayYLabels:b,onClick:h,cursor:w,squares:v,cellRender:m,cellStyle:g,title:x}),"bottom"===l&&O)}d.propTypes={xLabels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,yLabels:o().arrayOf(o().oneOfType([o().string,o().number,o().object])).isRequired,data:o().arrayOf(o().array).isRequired,background:o().string,height:o().number,xLabelWidth:o().number,yLabelWidth:o().number,xLabelsLocation:o().oneOf(["top","bottom"]),xLabelsVisibility:o().arrayOf(o().bool),yLabelTextAlign:o().string,displayYLabels:o().bool,unit:o().string,onClick:o().func,squares:o().bool,cellRender:o().func,cellStyle:o().func,title:o().func},d.defaultProps={background:"#329fff",height:30,xLabelWidth:60,yLabelWidth:40,yLabelTextAlign:"right",unit:"",xLabelsLocation:"top",xLabelsVisibility:null,displayYLabels:!0,onClick:void 0,squares:!1,cellRender:function(){return null},cellStyle:function(e,t,r,n){return{background:e,opacity:(t-r)/(n-r)||0}}};const y=d;r(91);const b=y})(),n})()}));
//# sourceMappingURL=bundle.js.map