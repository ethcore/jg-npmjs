!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1674)}({0:function(t,e,n){t.exports=n(1)(0)},1:function(t,e){t.exports=vendor_lib},11:function(t,e,n){t.exports=n(1)(766)},14:function(t,e,n){t.exports=n(1)(22)},15:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var u=e[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},16:function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=p[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(i(o.parts[a],e))}else{for(var u=[],a=0;a<o.parts.length;a++)u.push(i(o.parts[a],e));p[o.id]={id:o.id,refs:1,parts:u}}}}function o(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],a=r[0],u=r[1],l=r[2],i=r[3],c={css:u,media:l,sourceMap:i};n[a]?n[a].parts.push(c):e.push(n[a]={id:a,parts:[c]})}return e}function r(t,e){var n=m(),o=y[y.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function u(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function i(t,e){var n,o,r;if(e.singleton){var i=g++;n=b||(b=u(e)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),o=f.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(e),o=s.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function c(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var a=document.createTextNode(r),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(a,u[e]):t.appendChild(a)}}function s(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e){var n=e.css,o=e.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var p={},d=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,y=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=h()),void 0===e.insertAt&&(e.insertAt="bottom");var r=o(t);return n(r,e),function(t){for(var a=[],u=0;u<r.length;u++){var l=r[u],i=p[l.id];i.refs--,a.push(i)}if(t){n(o(t),e)}for(var u=0;u<a.length;u++){var i=a[u];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete p[i.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},1674:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(14),a=o(r),u=n(0),l=o(u),i=n(24),c=n(21),s=o(c),f=n(498),p=o(f);n(17),n(18),n(20),(0,s.default)(),a.default.render(l.default.createElement(i.AppContainer,null,l.default.createElement(p.default,null)),document.querySelector("#container"))},17:function(t,e,n){var o=n(27);"string"==typeof o&&(o=[[t.i,o,""]]);n(16)(o,{});o.locals&&(t.exports=o.locals)},18:function(t,e,n){var o=n(28);"string"==typeof o&&(o=[[t.i,o,""]]);n(16)(o,{});o.locals&&(t.exports=o.locals)},20:function(t,e){},21:function(t,e,n){var o=(n(65),n(63)),r=!1;t.exports=function(t){t=t||{};var e=t.shouldRejectClick||o;r=!0,n(66).injection.injectEventPluginsByName({TapEventPlugin:n(61)(e)})}},239:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=window.parent.secureApi;e.api=o},24:function(t,e,n){t.exports=n(83)},27:function(t,e,n){e=t.exports=n(15)(),e.push([t.i,'@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(30)+') format("woff2");unicode-range:u+0460-052f,u+20b4,u+2de0-2dff,u+a640-a69f}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(31)+') format("woff2");unicode-range:u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(29)+') format("woff2");unicode-range:u+1f??}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(33)+') format("woff2");unicode-range:u+0370-03ff}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(34)+') format("woff2");unicode-range:u+0102-0103,u+1ea0-1ef9,u+20ab}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(35)+') format("woff2");unicode-range:u+0100-024f,u+1e??,u+20a0-20ab,u+20ad-20cf,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(32)+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2212,u+2215,u+e0ff,u+effd,u+f000}',""])},28:function(t,e,n){e=t.exports=n(15)(),e.push([t.i,'@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(37)+') format("woff2");unicode-range:u+0460-052f,u+20b4,u+2de0-2dff,u+a640-a69f}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(39)+') format("woff2");unicode-range:u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(42)+') format("woff2");unicode-range:u+1f??}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(38)+') format("woff2");unicode-range:u+0370-03ff}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(36)+') format("woff2");unicode-range:u+0102-0103,u+1ea0-1ef9,u+20ab}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(40)+') format("woff2");unicode-range:u+0100-024f,u+1e??,u+20a0-20ab,u+20ad-20cf,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(41)+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2212,u+2215,u+e0ff,u+effd,u+f000}',""])},29:function(t,e,n){t.exports=n.p+"fonts/-L14Jk06m6pUHB-5mXQQnYX0hVgzZQUfRDuZrPvH3D885b8ec3ad2.woff2"},30:function(t,e,n){t.exports=n.p+"fonts/0eC6fl06luXEYWpBSJvXCIX0hVgzZQUfRDuZrPvH3D89b68886401.woff2"},31:function(t,e,n){t.exports=n.p+"fonts/Fl4y0QdOxyyTHEGMXX8kcYX0hVgzZQUfRDuZrPvH3D8af34a57573.woff2"},32:function(t,e,n){t.exports=n.p+"fonts/Hgo13k-tfSpn0qi1SFdUfZBw1xU1rKptJj_0jans92016a9467557.woff2"},33:function(t,e,n){t.exports=n.p+"fonts/I3S1wsgSg9YCurV6PUkTOYX0hVgzZQUfRDuZrPvH3D8890137f2a9.woff2"},331:function(t,e,n){t.exports=n(1)(23)},34:function(t,e,n){t.exports=n.p+"fonts/NYDWBdD4gIq26G5XYbHsFIX0hVgzZQUfRDuZrPvH3D8bcb5918360.woff2"},35:function(t,e,n){t.exports=n.p+"fonts/Pru33qjShpZSmG3z6VYwnYX0hVgzZQUfRDuZrPvH3D889028d2d23.woff2"},36:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz-pRBTtN4E2_qSPBnw6AgMc62f2f972e0.woff2"},37:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz0ExlR2MysFCBK8OirNw2kMc9e9d851eb.woff2"},38:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz2MSHb9EAJwuSzGfuRChQzQ3c4e397d8b.woff2"},39:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz2dsm03krrxlabhmVQFB99s200142f539.woff2"},40:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz9Dnm4qiMZlH5rhYv_7LI2Ybd43bb45b2.woff2"},41:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz9TIkQYohD4BpHvJ3NvbHoA63cba37360.woff2"},42:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59FzyJ0caWjaSBdV-xZbEgst_kefb845429d.woff2"},498:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(835),a=o(r);e.default=a.default},50:function(t,e,n){"use strict";var o=function(t){var e;for(e in t)if(t.hasOwnProperty(e))return e;return null};t.exports=o},546:function(t,e){t.exports={container:"application__container___dWREr"}},547:function(t,e){t.exports={icon:"identityIcon__icon___2xaw4"}},548:function(t,e){t.exports={from:"transaction__from___2ZZAo",txhash:"transaction__txhash___wqgBH",transaction:"transaction__transaction___1T4nd",local:"transaction__local___1EOjZ",nowrap:"transaction__nowrap___1Ay46",edit:"transaction__edit___30QxL"}},60:function(t,e,n){"use strict";var o={topAbort:null,topAnimationEnd:null,topAnimationIteration:null,topAnimationStart:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topInvalid:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topTransitionEnd:null,topVolumeChange:null,topWaiting:null,topWheel:null},r={topLevelTypes:o};t.exports=r},61:function(t,e,n){"use strict";function o(t,e){var n=s.extractSingleTouch(e);return n?n[t.page]:t.page in e?e[t.page]:e[t.client]+f[t.envScroll]}function r(t,e){var n=o(w.x,e),r=o(w.y,e);return Math.pow(Math.pow(n-t.x,2)+Math.pow(r-t.y,2),.5)}function a(t){return{tapMoveThreshold:b,ignoreMouseThreshold:g,eventTypes:x,extractEvents:function(e,n,a,u){if(!d(e)&&!h(e))return null;if(m(e))v=T();else if(t(v,T()))return null;var l=null,s=r(y,a);return h(e)&&s<b&&(l=c.getPooled(x.touchTap,n,a,u)),d(e)?(y.x=o(w.x,a),y.y=o(w.y,a)):h(e)&&(y.x=0,y.y=0),i.accumulateTwoPhaseDispatches(l),l}}}var u=n(60),l=n(69),i=n(67),c=n(68),s=n(62),f=n(70),p=n(50),d=(u.topLevelTypes,l.isStartish),h=l.isEndish,m=function(t){return["topTouchCancel","topTouchEnd","topTouchStart","topTouchMove"].indexOf(t)>=0},b=10,g=750,y={x:null,y:null},v=null,w={x:{page:"pageX",client:"clientX",envScroll:"currentPageScrollLeft"},y:{page:"pageY",client:"clientY",envScroll:"currentPageScrollTop"}},E=["topTouchStart","topTouchCancel","topTouchEnd","topTouchMove"],_=["topMouseDown","topMouseMove","topMouseUp"].concat(E),x={touchTap:{phasedRegistrationNames:{bubbled:p({onTouchTap:null}),captured:p({onTouchTapCapture:null})},dependencies:_}},T=function(){return Date.now?Date.now:function(){return+new Date}}();t.exports=a},62:function(t,e){var n={extractSingleTouch:function(t){var e=t.touches,n=t.changedTouches,o=e&&e.length>0,r=n&&n.length>0;return!o&&r?n[0]:o?e[0]:t}};t.exports=n},63:function(t,e){t.exports=function(t,e){if(t&&e-t<750)return!0}},65:function(t,e,n){t.exports=n(1)(13)},66:function(t,e,n){t.exports=n(1)(179)},67:function(t,e,n){t.exports=n(1)(180)},68:function(t,e,n){t.exports=n(1)(182)},69:function(t,e,n){t.exports=n(1)(329)},70:function(t,e,n){t.exports=n(1)(665)},81:function(t,e,n){"use strict";t.exports=n(82)},82:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(0),i=l.Component,c=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),u(e,[{key:"render",value:function(){return this.props.component?l.createElement(this.props.component,this.props.props):l.Children.only(this.props.children)}}]),e}(i);t.exports=c},83:function(t,e,n){"use strict";var o=n(81);t.exports=function(t){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):t&&t.types&&t.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},t.exports.AppContainer=o},835:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(){function t(t,e){var n=[],o=!0,r=!1,a=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(11),s=o(c),f=n(0),p=o(f),d=n(239),h=n(546),m=o(h),b=n(838),g=function(t){function e(){var t,n,o,u;r(this,e);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),o.state={loading:!0,transactions:[],localTransactions:{},blockNumber:0},u=n,a(o,u)}return u(e,t),i(e,[{key:"componentDidMount",value:function(){var t=this;!function e(){t._timeout=window.setTimeout(function(){t.fetchTransactionData().then(e).catch(e)},1e3)}()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timeout)}},{key:"fetchTransactionData",value:function(){var t=this;return Promise.all([d.api.parity.pendingTransactions(),d.api.parity.pendingTransactionsStats(),d.api.parity.localTransactions(),d.api.eth.blockNumber()]).then(function(e){var n=l(e,4),o=n[0],r=n[1],a=n[2],u=n[3],i=o.map(function(t){return{transaction:t,stats:r[t.hash],isLocal:!!a[t.hash]}});i.filter(function(t){return t.isLocal}).map(function(t){var e=t.transaction;a[e.hash].transaction=e,a[e.hash].stats=t.stats});var c=Object.keys(a).map(function(t){var e=a[t];return e.txHash=t,e});c.sort(function(t,e){return t=t.transaction||{},e=e.transaction||{},t.from&&e.from&&t.from!==e.from?t.from<e.from:t.nonce&&e.nonce?new s.default(t.nonce).comparedTo(new s.default(e.nonce)):t.nonce?-1:1}),t.setState({loading:!1,transactions:i,localTransactions:c,blockNumber:u})})}},{key:"render",value:function(){return this.state.loading?p.default.createElement("div",{className:m.default.container},"Loading..."):p.default.createElement("div",{className:m.default.container},p.default.createElement("h1",null,"Your local transactions"),this.renderLocals(),p.default.createElement("h1",null,"Transactions in the queue"),this.renderQueueSummary(),this.renderQueue())}},{key:"renderQueueSummary",value:function(){var t=this.state.transactions;if(!t.length)return null;var e=t.length,n=t.filter(function(t){return t.isLocal}).length,o=t.map(function(t){return t.transaction}).map(function(t){return t.gasPrice.mul(t.gas)}).reduce(function(t,e){return t.add(e)},new s.default(0));return p.default.createElement("h3",null,"Count: ",p.default.createElement("strong",null,n?e+" ("+n+")":e),"  Total Fee: ",p.default.createElement("strong",null,d.api.util.fromWei(o).toFixed(3)," ETH"))}},{key:"renderQueue",value:function(){var t=this.state,e=t.blockNumber,n=t.transactions;return n.length?p.default.createElement("table",{cellSpacing:"0"},p.default.createElement("thead",null,b.Transaction.renderHeader()),p.default.createElement("tbody",null,n.map(function(t,n){return p.default.createElement(b.Transaction,{key:t.transaction.hash,idx:n+1,isLocal:t.isLocal,transaction:t.transaction,stats:t.stats,blockNumber:e})}))):p.default.createElement("h3",null,"The queue seems is empty.")}},{key:"renderLocals",value:function(){var t=this.state.localTransactions;return t.length?p.default.createElement("table",{cellSpacing:"0"},p.default.createElement("thead",null,b.LocalTransaction.renderHeader()),p.default.createElement("tbody",null,t.map(function(t){return p.default.createElement(b.LocalTransaction,{key:t.txHash,hash:t.txHash,transaction:t.transaction,status:t.status,stats:t.stats,details:t})}))):p.default.createElement("h3",null,"You haven't sent any transactions yet.")}}]),e}(f.Component);e.default=g},836:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(0),c=o(i),s=n(239),f=n(547),p=o(f),d=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,t),l(e,[{key:"render",value:function(){var t=this.props.address;return c.default.createElement("img",{className:p.default.icon,src:s.api.util.createIdentityImg(t,3)})}}]),e}(i.Component);e.default=d},837:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(836),a=o(r);e.default=a.default},838:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(839);Object.defineProperty(e,"Transaction",{enumerable:!0,get:function(){return o.Transaction}}),Object.defineProperty(e,"LocalTransaction",{enumerable:!0,get:function(){return o.LocalTransaction}})},839:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.LocalTransaction=e.Transaction=void 0;var i,c,s,f,p=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),d=n(11),h=o(d),m=n(0),b=o(m),g=n(331),y=o(g),v=n(239),w=n(548),E=o(w),_=n(837),x=o(_),T=function(t){function e(){return a(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),p(e,[{key:"shortHash",value:function(t){return t.substr(0,5)+".."+t.substr(t.length-3)}},{key:"renderHash",value:function(t){return b.default.createElement("code",{title:t,className:E.default.txhash},t)}},{key:"renderFrom",value:function(t){return t?b.default.createElement("div",{title:t.from,className:E.default.from},b.default.createElement(x.default,{address:t.from})):"-"}},{key:"renderGasPrice",value:function(t){return t?b.default.createElement("span",{title:t.gasPrice.toFormat(0)+" wei"},v.api.util.fromWei(t.gasPrice,"shannon").toFormat(2)," shannon"):"-"}},{key:"renderGas",value:function(t){return t?b.default.createElement("span",{title:t.gas.toFormat(0)+" Gas"},t.gas.div(Math.pow(10,6)).toFormat(3)," MGas"):"-"}},{key:"renderPropagation",value:function(t){var e=Object.keys(t.propagatedTo).length,n=Object.values(t.propagatedTo).reduce(function(t,e){return t+e},0);return b.default.createElement("span",{className:E.default.nowrap},n," (",e," peers)")}}]),e}(m.Component);e.Transaction=(c=i=function(t){function e(){return a(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),p(e,[{key:"render",value:function(){var t=this.props,e=t.isLocal,n=t.stats,o=t.transaction,a=t.idx,u=new h.default(n.firstSeen),l=(0,y.default)(E.default.transaction,r({},E.default.local,e));return b.default.createElement("tr",{className:l},b.default.createElement("td",null,a,"."),b.default.createElement("td",null,this.renderHash(o.hash)),b.default.createElement("td",null,this.renderFrom(o)),b.default.createElement("td",null,this.renderGasPrice(o)),b.default.createElement("td",null,this.renderGas(o)),b.default.createElement("td",{title:u.toFormat(0)},this.renderTime(n.firstSeen)),b.default.createElement("td",null,this.renderPropagation(n)))}},{key:"renderTime",value:function(t){var e=this.props.blockNumber;return t?e.sub(t).mul(14).div(60).toFormat(1)+" minutes ago":"never"}}],[{key:"renderHeader",value:function(){return b.default.createElement("tr",{className:E.default.header},b.default.createElement("th",null),b.default.createElement("th",null,"Transaction"),b.default.createElement("th",null,"From"),b.default.createElement("th",null,"Gas Price"),b.default.createElement("th",null,"Gas"),b.default.createElement("th",null,"First propagation"),b.default.createElement("th",null,"# Propagated"),b.default.createElement("th",null))}}]),e}(T),i.defaultProps={isLocal:!1,stats:{firstSeen:0,propagatedTo:{}}},c),e.LocalTransaction=(f=s=function(t){function e(){var t,n,o,r;a(this,e);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=o=u(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),o.state={isSending:!1,isResubmitting:!1,gasPrice:null,gas:null},o.toggleResubmit=function(){var t=o.props.transaction,e=o.state.isResubmitting,n={isResubmitting:!e};e||(n.gasPrice=v.api.util.fromWei(t.gasPrice,"shannon").toNumber(),n.gas=t.gas.div(1e6).toNumber()),o.setState(n)},o.setGasPrice=function(t){o.setState({gasPrice:t.target.value})},o.setGas=function(t){o.setState({gas:t.target.value})},o.sendTransaction=function(){var t=o.props,e=t.transaction,n=t.status,r=o.state,a=r.gasPrice,u=r.gas,l={from:e.from,value:e.value,data:e.input,gasPrice:v.api.util.toWei(a,"shannon"),gas:new h.default(u).mul(1e6)};o.setState({isResubmitting:!1,isSending:!0});var i=function(){o.setState({isSending:!1,gasPrice:null,gas:null})};e.to&&(l.to=e.to),["mined","replaced"].includes(n)||(l.nonce=e.nonce),v.api.eth.sendTransaction(l).then(i).catch(i)},r=n,u(o,r)}return l(e,t),p(e,[{key:"render",value:function(){if(this.state.isResubmitting)return this.renderResubmit();var t=this.props,e=t.stats,n=t.transaction,o=t.hash,r=t.status,a=this.state.isSending,u=a?"sending...":b.default.createElement("button",{onClick:this.toggleResubmit},"resubmit");return b.default.createElement("tr",{className:E.default.transaction},b.default.createElement("td",null,n?u:null),b.default.createElement("td",null,this.renderHash(o)),b.default.createElement("td",null,this.renderFrom(n)),b.default.createElement("td",null,this.renderGasPrice(n)),b.default.createElement("td",null,this.renderGas(n)),b.default.createElement("td",null,this.renderStatus(),b.default.createElement("br",null),"pending"===r?this.renderPropagation(e):null))}},{key:"renderStatus",value:function(){var t=this,e=this.props.details,n={pending:function(){return"In queue: Pending"},future:function(){return"In queue: Future"},mined:function(){return"Mined"},dropped:function(){return"Dropped because of queue limit"},invalid:function(){return"Transaction is invalid"},rejected:function(){return"Rejected: "+e.error},replaced:function(){return"Replaced by "+t.shortHash(e.hash)}}[this.props.status];return n?n():"unknown"}},{key:"renderResubmit",value:function(){var t=this.props.transaction,e=this.state,n=e.gasPrice,o=e.gas;return b.default.createElement("tr",{className:E.default.transaction},b.default.createElement("td",null,b.default.createElement("button",{onClick:this.toggleResubmit},"cancel")),b.default.createElement("td",null,this.renderHash(t.hash)),b.default.createElement("td",null,this.renderFrom(t)),b.default.createElement("td",{className:E.default.edit},b.default.createElement("input",{type:"number",value:n,onChange:this.setGasPrice}),b.default.createElement("span",null,"shannon")),b.default.createElement("td",{className:E.default.edit},b.default.createElement("input",{type:"number",value:o,onChange:this.setGas}),b.default.createElement("span",null,"MGas")),b.default.createElement("td",{colSpan:"2"},b.default.createElement("button",{onClick:this.sendTransaction},"Send")))}}],[{key:"renderHeader",value:function(){return b.default.createElement("tr",{className:E.default.header},b.default.createElement("th",null),b.default.createElement("th",null,"Transaction"),b.default.createElement("th",null,"From"),b.default.createElement("th",null,"Gas Price"),b.default.createElement("th",null,"Gas"),b.default.createElement("th",null,"Status"))}}]),e}(T),s.defaultProps={stats:{propagatedTo:{}}},f)}});