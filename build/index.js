!function(){var e={115:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},941:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},222:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},558:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},398:function(e,t,n){var r=n(910),o=n(299);function i(t,n,c){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},764:function(e,t,n){var r=n(53),o=n(299),i=n(598);e.exports=function(e){var t=o();return function(){var n,o=r(e);if(t){var c=r(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return i(this,n)}},e.exports.default=e.exports,e.exports.__esModule=!0},679:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},53:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},264:function(e,t,n){var r=n(910);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},555:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.default=e.exports,e.exports.__esModule=!0},299:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},564:function(e){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],_n=!0,c=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);_n=!0);}catch(s){c=!0,o=s}finally{try{_n||null==n.return||n.return()}finally{if(c)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},255:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},410:function(e,t,n){var r=n(679);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},598:function(e,t,n){var r=n(370).default,o=n(222);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},910:function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(n,r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},406:function(e,t,n){var r=n(941),o=n(564),i=n(927),c=n(255);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},370:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},927:function(e,t,n){var r=n(115);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},234:function(e,t,n){var r=n(53),o=n(910),i=n(555),c=n(398);function s(t){var n="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return c(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.default=e.exports,e.exports.__esModule=!0,s(t)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},587:function(e,t,n){"use strict";var r=n(843);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},268:function(e,t,n){e.exports=n(587)()},843:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){"use strict";n.r(r);var e=window.React,t=n.n(e),o=window.ReactDOM,i=n.n(o),c=window.wp.data,s=n(406),u=n.n(s),a=window.wp.i18n,l=n(410),p=n.n(l),f=window.wp.components,d=n(268),y=n.n(d),h=n(558),x=n.n(h),g=n(264),m=n.n(g),_=n(764),b=n.n(_),w=n(234),v=n.n(w),S=window.lodash;function P(e){return function(t){m()(r,t);var n=b()(r);function r(){var t;x()(this,r);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=n.call.apply(n,[this].concat(i))).name=e,t}return r}(v()(Error))}var O=P("JsonParseError"),C=P("JsonParseAfterRedirectError"),j=P("Api404Error"),T=P("Api404AfterRedirectError"),R=P("FetchNetworkError");function E(e){return e.status>=200&&e.status<300?e:404===e.status?new Promise((function(){throw e.redirected?new T(e.redirected):new j})):e.json().catch((function(e){return M(e)})).then((function(t){var n=new Error("".concat(t.message," (Status ").concat(e.status,")"));throw n.response=t,n.name="ApiError",n}))}function k(e){return e.json().catch((function(t){return M(t,e.redirected,e.url)}))}function M(e,t,n){throw t?new C(n):new O}function A(){throw new R}var I=new function(e,t){var n=e,r={"X-WP-Nonce":t},o={credentials:"same-origin",headers:r},i={method:"post",credentials:"same-origin",headers:(0,S.assign)({},r,{"Content-type":"application/json"})},c={setApiRoot:function(e){n=e},setApiNonce:function(e){o={credentials:"same-origin",headers:r={"X-WP-Nonce":e}},i={method:"post",credentials:"same-origin",headers:(0,S.assign)({},r,{"Content-type":"application/json"})}},registerSite:function(e,t){return(r="".concat(n,"jetpack/v4/connection/register"),o=i,c={body:JSON.stringify({registration_nonce:e,no_iframe:!0,redirect_uri:t})},fetch(r,(0,S.assign)({},o,c)).catch(A)).then(E).then(k);var r,o,c},fetchAuthorizationUrl:function(e){return s("".concat(n,"jetpack/v4/connection/authorize_url?no_iframe=1&redirect_uri=").concat(encodeURIComponent(e)),o).then(E).then(k)},fetchSiteConnectionStatus:function(){return s("".concat(n,"jetpack/v4/connection"),o).then(k)}};function s(e,t){return fetch(function(e){var t=e.split("?"),n=t.length>1?t[1]:"",r=n.length?n.split("&"):[];return r.push("_cacheBuster="+(new Date).getTime()),t[0]+"?"+r.join("&")}(e),t)}(0,S.assign)(this,c)},__=a.__,U=function(n){var r=n.title,o=n.isLoading,i=n.width,c=n.displayTOS,s=n.scrollToIframe,u=n.connectUrl,a=n.onComplete,l=n.onThirdPartyCookiesBlocked,p=n.location,f=n.height,d=(0,e.useRef)(),y=(0,e.useRef)(),h=function e(t){if(y.current&&t.source===y.current.contentWindow)switch(t.data){case"close":window.removeEventListener("message",e),a&&a();break;case"wpcom_nocookie":l&&l()}};(0,e.useEffect)((function(){s&&window.scrollTo(0,d.current.offsetTop-10),window.addEventListener("message",h)}));var x=u.replace("authorize/","authorize_iframe/");return x.includes("?")||(x+="?"),c&&(x+="&display-tos",f=(parseInt(f)+50).toString()),x+="&iframe_height="+parseInt(f),p&&(x+="&iframe_source="+p),t().createElement("div",{className:"dops-card fade-in jp-iframe-wrap",ref:d},t().createElement("h1",null,r),o?t().createElement("p",null,__("Loading…","jetpack")):t().createElement("iframe",{title:r,width:i,height:f,src:x,ref:y}))};U.propTypes={title:y().string.isRequired,isLoading:y().bool,width:y().string,height:y().string,connectUrl:y().string.isRequired,displayTOS:y().bool.isRequired,scrollToIframe:y().bool,onComplete:y().func,onThirdPartyCookiesBlocked:y().func,location:y().string},U.defaultProps={isLoading:!1,height:"300",width:"100%",scrollToIframe:!1};var N=U,F=a.__,D=function(n){var r=n.redirectFunc,o=n.connectUrl,i=n.redirectUri,c=n.inPlaceTitle,s=n.forceCalypsoFlow,a=n.from,l=n.onComplete,p=n.displayTOS,f=(0,e.useState)(null),d=u()(f,2),y=d[0],h=d[1];return o&&o!==y&&h(o),(0,e.useEffect)((function(){y||I.fetchAuthorizationUrl(i).then((function(e){return h(e.authorizeUrl)})).catch((function(e){throw e}))}),[]),y?s?(r(y+(a?(y.includes("?")?"&":"?")+"from="+encodeURIComponent(a):"")),null):t().createElement(N,{connectUrl:y,title:c,onComplete:l,displayTOS:p}):null};D.propTypes={connectUrl:y().string,redirectUri:y().string.isRequired,inPlaceTitle:y().string,forceCalypsoFlow:y().bool,onComplete:y().func,from:y().string,displayTOS:y().bool.isRequired,redirectFunc:y().func},D.defaultProps={redirectFunc:function(e){return window.location.assign(e)},inPlaceTitle:F("Connect your WordPress.com account","jetpack"),forceCalypsoFlow:!1};var L=D,B=a.__,q=function(n){var r=(0,e.useState)(!1),o=u()(r,2),i=o[0],c=o[1],s=(0,e.useState)(!1),a=u()(s,2),l=a[0],d=a[1],y=(0,e.useState)(null),h=u()(y,2),x=h[0],g=h[1],m=(0,e.useState)(!1),_=u()(m,2),b=_[0],w=_[1],v=(0,e.useState)({}),S=u()(v,2),P=S[0],O=S[1],C=n.apiRoot,j=n.apiNonce,T=n.connectLabel,R=n.onRegistered,E=n.onUserConnected,k=n.registrationNonce,M=n.redirectUri,A=n.forceCalypsoFlow,U=n.inPlaceTitle,N=n.from,F=n.children;(0,e.useEffect)((function(){I.setApiRoot(C),I.setApiNonce(j)}),[C,j]),(0,e.useEffect)((function(){w(!0),I.fetchSiteConnectionStatus().then((function(e){w(!1),O(e)})).catch((function(e){throw w(!1),e}))}),[]);var D=(0,e.useCallback)((function(){d(!1),O((function(e){return p()(p()({},e),{},{isUserConnected:!0})})),E&&E()}),[d,E]),B=(0,e.useCallback)((function(e){e&&e.preventDefault(),P.isRegistered?d(!0):(c(!0),I.registerSite(k,M).then((function(e){c(!1),R&&R(e),g(e.authorizeUrl),d(!0),O((function(e){return p()(p()({},e),{},{isRegistered:!0})}))})).catch((function(e){throw c(!1),e})))}),[c,g,P,O,R,k,M]),q=(0,e.useCallback)((function(){if(F&&"[object Function]"==={}.toString.call(F))return F(P)}),[P,F]);return t().createElement("div",{className:"jp-connection-main"},q(),b&&"Loading...",(!P.isRegistered||!P.isUserConnected)&&!b&&t().createElement(f.Button,{label:T,onClick:B,isPrimary:!0,disabled:i||l},T),l&&t().createElement(L,{connectUrl:x,redirectUri:M,inPlaceTitle:U,onComplete:D,displayTOS:P.hasConnectedOwner||P.isRegistered,forceCalypsoFlow:A,from:N}))};q.propTypes={connectLabel:y().string,inPlaceTitle:y().string,forceCalypsoFlow:y().bool,apiRoot:y().string.isRequired,apiNonce:y().string.isRequired,onRegistered:y().func,onUserConnected:y().func,registrationNonce:y().string.isRequired,from:y().string,redirectUri:y().string.isRequired},q.defaultProps={inPlaceTitle:B("Connect your WordPress.com account","jetpack"),forceCalypsoFlow:!1,connectLabel:B("Connect","jetpack")};var W=q,z="SET_CONNECTION_STATUS",J={setConnectionStatus:function(e){return{type:z,connectionStatus:e}}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return t.connectionStatus}return e},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},V=(0,c.combineReducers)({connectionStatus:X,API:H,connectionData:K}),Y=p()({},J),$={getConnectionStatus:function(e){return e.connectionStatus||{}}},G={getAPIRoot:function(e){return e.API.WP_API_root||null},getAPINonce:function(e){return e.API.WP_API_nonce||null},getRegistrationNonce:function(e){return e.API.registrationNonce||null}},Q={getDoNotUseConnectionIframe:function(e){return e.connectionData.doNotUseConnectionIframe||null}},Z=p()(p()(p()({},$),G),Q),ee="jetpack-backup-plugin",te={reducer:V,actions:Y,selectors:Z,initialState:window.JPBACKUP_INITIAL_STATE||{}};var ne,re=a.__,oe=function(){var e=function(){var e=(0,c.useSelect)((function(e){return e(ee).getAPINonce()}),[]),n=(0,c.useSelect)((function(e){return e(ee).getAPIRoot()}),[]),r=(0,c.useSelect)((function(e){return e(ee).getDoNotUseConnectionIframe()}),[]),o=(0,c.useSelect)((function(e){return e(ee).getRegistrationNonce()}),[]),i=(0,c.useSelect)((function(e){return e(ee).getConnectionStatus()}),[]),s=(0,c.useDispatch)(ee).setConnectionStatus;return[i,function(){return t().createElement(W,{apiRoot:n,apiNonce:e,forceCalypsoFlow:r,registrationNonce:o,from:"jetpack-backup",redirectUri:"admin.php?page=jetpack-backup"},(function(e){return s(e),null}))}]}(),n=u()(e,2),r=n[0],o=r.isUserConnected,i=r.isRegistered,s=n[1];return t().createElement("div",{id:"jetpack-backup-admin-container",className:"wrap"},t().createElement("h1",null,"Jetpack Backup Plugin"),!o&&t().createElement(t().Fragment,null,t().createElement("p",{className:"notice notice-error"},re("Jetpack Backup requires a user connection to WordPress.com to be able to backup your website.","jetpack-backup")),s()),o&&i&&t().createElement("p",{className:"notice notice-success"},re("Site and User Connected. Todo: Show Backup plugin centric data :)","jetpack-backup")))};(0,c.registerStore)(ee,te),null!==(ne=document.getElementById("jetpack-backup-root"))&&i().render(t().createElement(oe,null),ne)}();var o=window;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})}();