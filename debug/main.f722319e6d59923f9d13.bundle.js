(self.webpackChunkdebug=self.webpackChunkdebug||[]).push([[0],[,(e,t,n)=>{"use strict";n.r(t);var r,l=n(2),o=n(5),a=n(10),u=n(11),i=n(12);n(41);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=o.hydrate;n(l.createElement(i.AppContainer,{slides:e,hash:t}),document.getElementById("root"))}var c=(0,a.fetchSlides)(n(46));null===(r=void 0)||void 0===r||r.accept(c.id,(function(){s((c=(0,a.fetchSlides)(n(46))).slides,Math.random())})),s(c.slides),(0,u.setTargetBlank)()},,,,,,,,,(e,t,n)=>{"use strict";function r(e){return{id:(t=e).id,slides:t.keys().sort().map((function(e){return t(e)}))};var t}n.r(t),n.d(t,{fetchSlides:()=>r})},(e,t,n)=>{"use strict";function r(){document.addEventListener("click",(function(e){if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))}n.r(t),n.d(t,{setTargetBlank:()=>r})},(e,t,n)=>{"use strict";n.r(t),n.d(t,{AppContainer:()=>z});var r=n(2),l=n(36),o=(n(13),n(15)),a=n(16),u=n(17),i=n(18),s=n(33),c=n(35);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,l=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=function(e){var t=e.slides,n=e.hash,f=M((0,r.useState)(!1),2),z=f[0],m=f[1],d=M((0,o.useCurrentIndex)(),2),p=d[0],h=d[1],y=(0,u.useSlidesProps)({originalSlides:t,hash:n,currentIndex:p}),v=y.slides,b=y.contentsList,g=M((0,a.useMode)(),2),x=g[0],w=g[1],O=(0,i.useContentComponent)(x),S=(0,s.useSidebarComponent)(x),j=(0,c.useCommentsListComponent)(x),P=function(){window.slide=null,m(!1),w("common")};return r.createElement(r.Fragment,null,S&&r.createElement(r.Fragment,null,r.createElement(S,{goTo:function(e){window.slide&&(window.slide.goToSlide(e),h(e))},isOpen:z,terminate:P,contents:b,onStateChange:function(e){var t=e.isOpen;return m(t)},currentIndex:p,runPresentationMode:function(){window.slide=null,m(!1),w("host")}}),r.createElement(l.MdMenu,{className:"btn-sidebar",onClick:function(){return m(!0)}})),O&&r.createElement(O,{hash:n,slides:v,isJumpPage:0!==p,terminate:P,currentIndex:p,onChangeSlideIndex:h}),j&&r.createElement(j,null))}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{createSlidesProps:()=>a});var r=n(14);function l(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){var t=[],n=[],o={};return e.forEach((function(e){var r=e.slides,o=e.fusumaProps;t.push.apply(t,l(r)),n.push.apply(n,l(o))})),n.reduce((function(e,t,n){var r=t.sectionTitle;return r&&e.push({title:r,index:n+1}),e}),o.contentsList=[]),o.slides=t.map((function(e,t){var l=n[t];return{slide:l.contents?(0,r.ToC)({list:o.contentsList}):e,fusumaProps:l}})),o}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{ToC:()=>l});var r=n(2),l=function(e){var t=e.list;return function(){return r.createElement("div",{className:"toc size-70 aligncenter"},r.createElement("ol",null,t.map((function(e){var t=e.index,n=e.title;return r.createElement("li",{key:n},r.createElement("a",{href:"#slide=".concat(t),title:n},r.createElement("span",{className:"chapter"},n),r.createElement("span",{className:"toc-page"},t)))}))))}}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{useCurrentIndex:()=>a});var r=n(2);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,l=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(){var e=l((0,r.useState)(function(){var e=new URL(window.location.href).hash.match(/^#slide=(.+?)$/);return null!==e?e[1]-1:0}()),2),t=e[0],n=e[1];return(0,r.useEffect)((function(){n(t)}),[n]),[t,n]}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{useMode:()=>a});var r=n(2);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,l=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(){var e=l((0,r.useState)(location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"),2),t=e[0],n=e[1];return(0,r.useEffect)((function(){n(t)}),[n]),[t,n]}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{useSlidesProps:()=>o});var r=n(2),l=n(13);function o(e){var t=e.originalSlides,n=e.hash,o=e.currentIndex,a=(0,r.useMemo)((function(){return(0,l.createSlidesProps)(t,o)}),[n]);return{slides:(0,r.useMemo)((function(){return a.slides}),[n]),contentsList:(0,r.useMemo)((function(){return a.contentsList}),[n])}}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{useContentComponent:()=>i});var r=n(2),l=n(19);function o(e,t,n,r,l,o,a){try{var u=e[o](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,l)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,l=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=a((0,r.useState)("common"===e?l.Base:null),2),u=t[0],i=t[1];return(0,r.useEffect)((function(){var t;(t=regeneratorRuntime.mark((function t(){var r,o,a,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("common"!==e){t.next=4;break}i(l.Base),t.next=21;break;case 4:if("view"!==e){t.next=12;break}return t.next=7,n.e(3).then(n.bind(n,60));case 7:r=t.sent,o=r.default,i(o),t.next=21;break;case 12:if("host"!==e){t.next=20;break}return t.next=15,Promise.all([n.e(6),n.e(5),n.e(4)]).then(n.bind(n,65));case 15:a=t.sent,u=a.default,i(u),t.next=21;break;case 20:i(null);case 21:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,l){var a=t.apply(e,n);function u(e){o(a,r,l,u,i,"next",e)}function i(e){o(a,r,l,u,i,"throw",e)}u(void 0)}))})()}),[e]),u}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{Base:()=>s});var r=n(2),l=n(20),o=n.n(l),a=(n(21),n(22),n(23),n(24),n(25),n(26),n(30)),u=n.n(a),i=n(31);var s=(0,r.memo)((function(e){var t=e.slides,n=e.onChangeSlideIndex,l=(e.hash,e.isJumpPage),a=e.showIndex;function s(){window.slide||(window.slide=(0,i.setup)({showIndex:a}),window.slide.el.addEventListener("ws:slide-change",(function(e){n&&n(e.detail.currentSlide0)})))}return l?setTimeout((function(){s(),o().highlightAll()}),0):(s(),o().highlightAll()),(0,r.useEffect)((function(){s()}),[]),r.createElement("article",{className:undefined,id:"webslides"},t.map((function(e,t){var n=e.slide,l=e.fusumaProps;return r.createElement("section",{key:t,className:u()("aligncenter",l.classes,l.sectionTitle?"section-title":void 0)},r.createElement(n,null))})))}),(function(e,t){return e.hash===t.hash}))},,,,,,,,,,,,(e,t,n)=>{"use strict";n.r(t),n.d(t,{setup:()=>r});n(32);function r(e){var t=e.showIndex,n=void 0===t||t;return new window.WebSlides({loop:!0,showIndex:n,navigateOnScroll:!1})}},,(e,t,n)=>{"use strict";n.r(t),n.d(t,{useSidebarComponent:()=>i});var r=n(2),l=n(34);function o(e,t,n,r,l,o,a){try{var u=e[o](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,l)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,l=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=a((0,r.useState)(null),2),u=t[0],i=t[1];return(0,r.useEffect)((function(){var t;(t=regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("common"!==e){t.next=11;break}if("false"===(0,l.getSearchParams)().get("sidebar")){t.next=9;break}return t.next=6,Promise.all([n.e(6),n.e(10),n.e(9)]).then(n.bind(n,998));case 6:r=t.sent,o=r.Sidebar,i(o);case 9:t.next=12;break;case 11:i(null);case 12:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,l){var a=t.apply(e,n);function u(e){o(a,r,l,u,i,"next",e)}function i(e){o(a,r,l,u,i,"throw",e)}u(void 0)}))})()}),[e]),u}},(e,t,n)=>{"use strict";function r(){return new URL(window.location.href).searchParams}n.r(t),n.d(t,{getSearchParams:()=>r})},(e,t,n)=>{"use strict";n.r(t),n.d(t,{useCommentsListComponent:()=>i});var r=n(2),l=n(34);function o(e,t,n,r,l,o,a){try{var u=e[o](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,l)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,l=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=a((0,r.useState)(null),2),n=t[0],u=t[1];return(0,r.useEffect)((function(){var t;"host"===e?(t=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,l.getSearchParams)(),e.next=7;break;case 4:t=e.sent,n=t.CommentsList,u(n);case 7:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,l){var a=t.apply(e,n);function u(e){o(a,r,l,u,i,"next",e)}function i(e){o(a,r,l,u,i,"throw",e)}u(void 0)}))})():u(null)})),n}},,,,,,(e,t,n)=>{"use strict";n.r(t);n(42),n(44)},(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(27),l=n.n(r),o=n(43),a={insert:"head",singleton:!1};l()(o.default,a);const u=o.default.locals||{}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(29),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=l},(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(27),l=n.n(r),o=n(45),a={insert:"head",singleton:!1};l()(o.default,a);const u=o.default.locals||{}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(29),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=l},(e,t,n)=>{var r={"./0-title.md":47,"./01-many-pages.md":49,"./02-file-loader.md":50,"./03-unicode.md":52,"./04-code/0.md":53,"./04-code/1.md":54,"./05-qr.md":55};function l(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=o,e.exports=l,l.id=46},(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>u,fusumaProps:()=>i,default:()=>c});var r=n(2),l=n(48);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=[function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("h2",null,"debug"))}],i=[{}],s={};function c(e){var t=e.components,n=a(e,["components"]);return(0,l.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h2",null,"debug"))}c.isMDXComponent=!0},,(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>u,fusumaProps:()=>i,default:()=>c});var r=n(2),l=n(48);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=[function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("a",{href:"https://github.com/hiroppy/fusuma/issues/110",rel:"noopener","aria-label":"issue110"},"https://github.com/hiroppy/fusuma/issues/110"),(0,l.mdx)("br",null),(0,l.mdx)("h1",null,"1"))},function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("h1",null,"2"))},function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("h1",null,"3"))}],i=[{sectionTitle:"many pages"},{},{}],s={};function c(e){var t=e.components,n=a(e,["components"]);return(0,l.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("a",{href:"https://github.com/hiroppy/fusuma/issues/110",rel:"noopener","aria-label":"issue110"},"https://github.com/hiroppy/fusuma/issues/110"),(0,l.mdx)("br",null),(0,l.mdx)("h1",null,"1"),(0,l.mdx)("hr",null),(0,l.mdx)("h1",null,"2"),(0,l.mdx)("hr",null),(0,l.mdx)("h1",null,"3"))}c.isMDXComponent=!0},(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>u,fusumaProps:()=>i,default:()=>c});var r=n(2),l=n(48);function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=[function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("h2",null,"file-loader"),(0,l.mdx)("h3",null,"from markdown"),(0,l.mdx)("p",null,(0,l.mdx)("img",a({src:n(51)},{alt:"js"}))),(0,l.mdx)("h3",null,"from html"),(0,l.mdx)("img",{src:n(51)}),(0,l.mdx)("h3",null,"font"),(0,l.mdx)("p",{className:"file-loader-font"},"font: Stratum"))}],i=[{}],s={};function c(e){var t=e.components,r=o(e,["components"]);return(0,l.mdx)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h2",null,"file-loader"),(0,l.mdx)("h3",null,"from markdown"),(0,l.mdx)("p",null,(0,l.mdx)("img",a({src:n(51)},{alt:"js"}))),(0,l.mdx)("h3",null,"from html"),(0,l.mdx)("img",{src:n(51)}),(0,l.mdx)("h3",null,"font"),(0,l.mdx)("p",{className:"file-loader-font"},"font: Stratum"))}c.isMDXComponent=!0},(e,t,n)=>{"use strict";e.exports=n.p+"849d825f17fb7df6c13a.webp"},(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>u,fusumaProps:()=>i,default:()=>c});var r=n(2),l=n(48);function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=[function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("h2",null,"Unicode"),(0,l.mdx)("p",null,(0,l.mdx)("a",a({parentName:"p"},{href:"https://github.com/hiroppy/fusuma/issues/72"}),"issue")),(0,l.mdx)("p",null,"Here come the evil byte: ->\u2028<-"))}],i=[{}],s={};function c(e){var t=e.components,n=o(e,["components"]);return(0,l.mdx)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h2",null,"Unicode"),(0,l.mdx)("p",null,(0,l.mdx)("a",a({parentName:"p"},{href:"https://github.com/hiroppy/fusuma/issues/72"}),"issue")),(0,l.mdx)("p",null,"Here come the evil byte: ->\u2028<-"))}c.isMDXComponent=!0},(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>u,fusumaProps:()=>i,default:()=>c});var r=n(2),l=n(48);function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=[function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("pre",null,(0,l.mdx)("code",a({parentName:"pre"},{className:"language-txt"}),"a\n")),(0,l.mdx)("br",null),(0,l.mdx)("br",null),(0,l.mdx)("pre",null,(0,l.mdx)("code",a({parentName:"pre"},{className:"language-js"}),"// 01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",a({parentName:"pre"},{className:"language-cpp"}),'#include <iostream>\nusing namespace std;\n\nint main(){\n   for(int i=1; i<=6; i++){\n      cout<<"i is: "<<i<<endl;\n   }\n   return 0;\n}\n')),(0,l.mdx)("br",null),(0,l.mdx)("br",null),(0,l.mdx)("p",null,"test ",(0,l.mdx)("inlineCode",{parentName:"p"},"inline")," test"))}],i=[{}],s={};function c(e){var t=e.components,n=o(e,["components"]);return(0,l.mdx)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",a({parentName:"pre"},{className:"language-txt"}),"a\n")),(0,l.mdx)("br",null),(0,l.mdx)("br",null),(0,l.mdx)("pre",null,(0,l.mdx)("code",a({parentName:"pre"},{className:"language-js"}),"// 01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",a({parentName:"pre"},{className:"language-cpp"}),'#include <iostream>\nusing namespace std;\n\nint main(){\n   for(int i=1; i<=6; i++){\n      cout<<"i is: "<<i<<endl;\n   }\n   return 0;\n}\n')),(0,l.mdx)("br",null),(0,l.mdx)("br",null),(0,l.mdx)("p",null,"test ",(0,l.mdx)("inlineCode",{parentName:"p"},"inline")," test"))}c.isMDXComponent=!0},(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>u,fusumaProps:()=>i,default:()=>c});var r=n(2),l=n(48);function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=[function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("p",null,(0,l.mdx)("a",a({parentName:"p"},{href:"https://github.com/hiroppy/fusuma/issues/223"}),"issue")),(0,l.mdx)("pre",null,(0,l.mdx)("code",a({parentName:"pre"},{className:"language-python"}),"print(bool(4 == 4))\n")))}],i=[{}],s={};function c(e){var t=e.components,n=o(e,["components"]);return(0,l.mdx)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,(0,l.mdx)("a",a({parentName:"p"},{href:"https://github.com/hiroppy/fusuma/issues/223"}),"issue")),(0,l.mdx)("pre",null,(0,l.mdx)("code",a({parentName:"pre"},{className:"language-python"}),"print(bool(4 == 4))\n")))}c.isMDXComponent=!0},(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>u,fusumaProps:()=>i,default:()=>c});var r=n(2),l=n(48);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=[function(e){return(0,l.mdx)(r.Fragment,null,(0,l.mdx)("h2",null,"QR Code"),(0,l.mdx)("h3",null,"Specified URL"),(0,l.mdx)("br",null),(0,l.mdx)("svg",{className:"qr",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"74px",height:"74px",viewBox:"0 0 74 74",preserveAspectRatio:"xMinYMin meet"},(0,l.mdx)("rect",{width:"100%",height:"100%",fill:"white",cx:"0",cy:"0"}),(0,l.mdx)("path",{d:"M8,8l2,0 0,2 -2,0 0,-2z M10,8l2,0 0,2 -2,0 0,-2z M12,8l2,0 0,2 -2,0 0,-2z M14,8l2,0 0,2 -2,0 0,-2z M16,8l2,0 0,2 -2,0 0,-2z M18,8l2,0 0,2 -2,0 0,-2z M20,8l2,0 0,2 -2,0 0,-2z M24,8l2,0 0,2 -2,0 0,-2z M26,8l2,0 0,2 -2,0 0,-2z M38,8l2,0 0,2 -2,0 0,-2z M40,8l2,0 0,2 -2,0 0,-2z M42,8l2,0 0,2 -2,0 0,-2z M44,8l2,0 0,2 -2,0 0,-2z M46,8l2,0 0,2 -2,0 0,-2z M48,8l2,0 0,2 -2,0 0,-2z M52,8l2,0 0,2 -2,0 0,-2z M54,8l2,0 0,2 -2,0 0,-2z M56,8l2,0 0,2 -2,0 0,-2z M58,8l2,0 0,2 -2,0 0,-2z M60,8l2,0 0,2 -2,0 0,-2z M62,8l2,0 0,2 -2,0 0,-2z M64,8l2,0 0,2 -2,0 0,-2z M8,10l2,0 0,2 -2,0 0,-2z M20,10l2,0 0,2 -2,0 0,-2z M36,10l2,0 0,2 -2,0 0,-2z M38,10l2,0 0,2 -2,0 0,-2z M44,10l2,0 0,2 -2,0 0,-2z M48,10l2,0 0,2 -2,0 0,-2z M52,10l2,0 0,2 -2,0 0,-2z M64,10l2,0 0,2 -2,0 0,-2z M8,12l2,0 0,2 -2,0 0,-2z M12,12l2,0 0,2 -2,0 0,-2z M14,12l2,0 0,2 -2,0 0,-2z M16,12l2,0 0,2 -2,0 0,-2z M20,12l2,0 0,2 -2,0 0,-2z M24,12l2,0 0,2 -2,0 0,-2z M30,12l2,0 0,2 -2,0 0,-2z M32,12l2,0 0,2 -2,0 0,-2z M34,12l2,0 0,2 -2,0 0,-2z M36,12l2,0 0,2 -2,0 0,-2z M38,12l2,0 0,2 -2,0 0,-2z M44,12l2,0 0,2 -2,0 0,-2z M52,12l2,0 0,2 -2,0 0,-2z M56,12l2,0 0,2 -2,0 0,-2z M58,12l2,0 0,2 -2,0 0,-2z M60,12l2,0 0,2 -2,0 0,-2z M64,12l2,0 0,2 -2,0 0,-2z M8,14l2,0 0,2 -2,0 0,-2z M12,14l2,0 0,2 -2,0 0,-2z M14,14l2,0 0,2 -2,0 0,-2z M16,14l2,0 0,2 -2,0 0,-2z M20,14l2,0 0,2 -2,0 0,-2z M24,14l2,0 0,2 -2,0 0,-2z M26,14l2,0 0,2 -2,0 0,-2z M30,14l2,0 0,2 -2,0 0,-2z M40,14l2,0 0,2 -2,0 0,-2z M42,14l2,0 0,2 -2,0 0,-2z M48,14l2,0 0,2 -2,0 0,-2z M52,14l2,0 0,2 -2,0 0,-2z M56,14l2,0 0,2 -2,0 0,-2z M58,14l2,0 0,2 -2,0 0,-2z M60,14l2,0 0,2 -2,0 0,-2z M64,14l2,0 0,2 -2,0 0,-2z M8,16l2,0 0,2 -2,0 0,-2z M12,16l2,0 0,2 -2,0 0,-2z M14,16l2,0 0,2 -2,0 0,-2z M16,16l2,0 0,2 -2,0 0,-2z M20,16l2,0 0,2 -2,0 0,-2z M24,16l2,0 0,2 -2,0 0,-2z M26,16l2,0 0,2 -2,0 0,-2z M28,16l2,0 0,2 -2,0 0,-2z M30,16l2,0 0,2 -2,0 0,-2z M34,16l2,0 0,2 -2,0 0,-2z M42,16l2,0 0,2 -2,0 0,-2z M44,16l2,0 0,2 -2,0 0,-2z M46,16l2,0 0,2 -2,0 0,-2z M52,16l2,0 0,2 -2,0 0,-2z M56,16l2,0 0,2 -2,0 0,-2z M58,16l2,0 0,2 -2,0 0,-2z M60,16l2,0 0,2 -2,0 0,-2z M64,16l2,0 0,2 -2,0 0,-2z M8,18l2,0 0,2 -2,0 0,-2z M20,18l2,0 0,2 -2,0 0,-2z M26,18l2,0 0,2 -2,0 0,-2z M32,18l2,0 0,2 -2,0 0,-2z M36,18l2,0 0,2 -2,0 0,-2z M46,18l2,0 0,2 -2,0 0,-2z M48,18l2,0 0,2 -2,0 0,-2z M52,18l2,0 0,2 -2,0 0,-2z M64,18l2,0 0,2 -2,0 0,-2z M8,20l2,0 0,2 -2,0 0,-2z M10,20l2,0 0,2 -2,0 0,-2z M12,20l2,0 0,2 -2,0 0,-2z M14,20l2,0 0,2 -2,0 0,-2z M16,20l2,0 0,2 -2,0 0,-2z M18,20l2,0 0,2 -2,0 0,-2z M20,20l2,0 0,2 -2,0 0,-2z M24,20l2,0 0,2 -2,0 0,-2z M28,20l2,0 0,2 -2,0 0,-2z M32,20l2,0 0,2 -2,0 0,-2z M36,20l2,0 0,2 -2,0 0,-2z M40,20l2,0 0,2 -2,0 0,-2z M44,20l2,0 0,2 -2,0 0,-2z M48,20l2,0 0,2 -2,0 0,-2z M52,20l2,0 0,2 -2,0 0,-2z M54,20l2,0 0,2 -2,0 0,-2z M56,20l2,0 0,2 -2,0 0,-2z M58,20l2,0 0,2 -2,0 0,-2z M60,20l2,0 0,2 -2,0 0,-2z M62,20l2,0 0,2 -2,0 0,-2z M64,20l2,0 0,2 -2,0 0,-2z M26,22l2,0 0,2 -2,0 0,-2z M30,22l2,0 0,2 -2,0 0,-2z M34,22l2,0 0,2 -2,0 0,-2z M36,22l2,0 0,2 -2,0 0,-2z M42,22l2,0 0,2 -2,0 0,-2z M48,22l2,0 0,2 -2,0 0,-2z M8,24l2,0 0,2 -2,0 0,-2z M10,24l2,0 0,2 -2,0 0,-2z M12,24l2,0 0,2 -2,0 0,-2z M14,24l2,0 0,2 -2,0 0,-2z M20,24l2,0 0,2 -2,0 0,-2z M24,24l2,0 0,2 -2,0 0,-2z M34,24l2,0 0,2 -2,0 0,-2z M36,24l2,0 0,2 -2,0 0,-2z M40,24l2,0 0,2 -2,0 0,-2z M42,24l2,0 0,2 -2,0 0,-2z M44,24l2,0 0,2 -2,0 0,-2z M50,24l2,0 0,2 -2,0 0,-2z M56,24l2,0 0,2 -2,0 0,-2z M58,24l2,0 0,2 -2,0 0,-2z M60,24l2,0 0,2 -2,0 0,-2z M64,24l2,0 0,2 -2,0 0,-2z M10,26l2,0 0,2 -2,0 0,-2z M12,26l2,0 0,2 -2,0 0,-2z M14,26l2,0 0,2 -2,0 0,-2z M16,26l2,0 0,2 -2,0 0,-2z M18,26l2,0 0,2 -2,0 0,-2z M22,26l2,0 0,2 -2,0 0,-2z M24,26l2,0 0,2 -2,0 0,-2z M26,26l2,0 0,2 -2,0 0,-2z M38,26l2,0 0,2 -2,0 0,-2z M40,26l2,0 0,2 -2,0 0,-2z M46,26l2,0 0,2 -2,0 0,-2z M48,26l2,0 0,2 -2,0 0,-2z M52,26l2,0 0,2 -2,0 0,-2z M54,26l2,0 0,2 -2,0 0,-2z M56,26l2,0 0,2 -2,0 0,-2z M64,26l2,0 0,2 -2,0 0,-2z M16,28l2,0 0,2 -2,0 0,-2z M18,28l2,0 0,2 -2,0 0,-2z M20,28l2,0 0,2 -2,0 0,-2z M36,28l2,0 0,2 -2,0 0,-2z M38,28l2,0 0,2 -2,0 0,-2z M42,28l2,0 0,2 -2,0 0,-2z M48,28l2,0 0,2 -2,0 0,-2z M50,28l2,0 0,2 -2,0 0,-2z M54,28l2,0 0,2 -2,0 0,-2z M60,28l2,0 0,2 -2,0 0,-2z M62,28l2,0 0,2 -2,0 0,-2z M16,30l2,0 0,2 -2,0 0,-2z M18,30l2,0 0,2 -2,0 0,-2z M22,30l2,0 0,2 -2,0 0,-2z M24,30l2,0 0,2 -2,0 0,-2z M30,30l2,0 0,2 -2,0 0,-2z M32,30l2,0 0,2 -2,0 0,-2z M34,30l2,0 0,2 -2,0 0,-2z M36,30l2,0 0,2 -2,0 0,-2z M38,30l2,0 0,2 -2,0 0,-2z M46,30l2,0 0,2 -2,0 0,-2z M50,30l2,0 0,2 -2,0 0,-2z M52,30l2,0 0,2 -2,0 0,-2z M56,30l2,0 0,2 -2,0 0,-2z M64,30l2,0 0,2 -2,0 0,-2z M8,32l2,0 0,2 -2,0 0,-2z M10,32l2,0 0,2 -2,0 0,-2z M14,32l2,0 0,2 -2,0 0,-2z M18,32l2,0 0,2 -2,0 0,-2z M20,32l2,0 0,2 -2,0 0,-2z M22,32l2,0 0,2 -2,0 0,-2z M24,32l2,0 0,2 -2,0 0,-2z M26,32l2,0 0,2 -2,0 0,-2z M30,32l2,0 0,2 -2,0 0,-2z M42,32l2,0 0,2 -2,0 0,-2z M46,32l2,0 0,2 -2,0 0,-2z M58,32l2,0 0,2 -2,0 0,-2z M60,32l2,0 0,2 -2,0 0,-2z M8,34l2,0 0,2 -2,0 0,-2z M16,34l2,0 0,2 -2,0 0,-2z M18,34l2,0 0,2 -2,0 0,-2z M26,34l2,0 0,2 -2,0 0,-2z M28,34l2,0 0,2 -2,0 0,-2z M30,34l2,0 0,2 -2,0 0,-2z M34,34l2,0 0,2 -2,0 0,-2z M44,34l2,0 0,2 -2,0 0,-2z M46,34l2,0 0,2 -2,0 0,-2z M52,34l2,0 0,2 -2,0 0,-2z M60,34l2,0 0,2 -2,0 0,-2z M62,34l2,0 0,2 -2,0 0,-2z M64,34l2,0 0,2 -2,0 0,-2z M8,36l2,0 0,2 -2,0 0,-2z M10,36l2,0 0,2 -2,0 0,-2z M14,36l2,0 0,2 -2,0 0,-2z M20,36l2,0 0,2 -2,0 0,-2z M32,36l2,0 0,2 -2,0 0,-2z M36,36l2,0 0,2 -2,0 0,-2z M46,36l2,0 0,2 -2,0 0,-2z M48,36l2,0 0,2 -2,0 0,-2z M52,36l2,0 0,2 -2,0 0,-2z M60,36l2,0 0,2 -2,0 0,-2z M62,36l2,0 0,2 -2,0 0,-2z M64,36l2,0 0,2 -2,0 0,-2z M18,38l2,0 0,2 -2,0 0,-2z M24,38l2,0 0,2 -2,0 0,-2z M26,38l2,0 0,2 -2,0 0,-2z M32,38l2,0 0,2 -2,0 0,-2z M34,38l2,0 0,2 -2,0 0,-2z M38,38l2,0 0,2 -2,0 0,-2z M46,38l2,0 0,2 -2,0 0,-2z M48,38l2,0 0,2 -2,0 0,-2z M50,38l2,0 0,2 -2,0 0,-2z M52,38l2,0 0,2 -2,0 0,-2z M54,38l2,0 0,2 -2,0 0,-2z M56,38l2,0 0,2 -2,0 0,-2z M62,38l2,0 0,2 -2,0 0,-2z M8,40l2,0 0,2 -2,0 0,-2z M10,40l2,0 0,2 -2,0 0,-2z M12,40l2,0 0,2 -2,0 0,-2z M20,40l2,0 0,2 -2,0 0,-2z M22,40l2,0 0,2 -2,0 0,-2z M26,40l2,0 0,2 -2,0 0,-2z M28,40l2,0 0,2 -2,0 0,-2z M30,40l2,0 0,2 -2,0 0,-2z M46,40l2,0 0,2 -2,0 0,-2z M48,40l2,0 0,2 -2,0 0,-2z M56,40l2,0 0,2 -2,0 0,-2z M58,40l2,0 0,2 -2,0 0,-2z M62,40l2,0 0,2 -2,0 0,-2z M10,42l2,0 0,2 -2,0 0,-2z M12,42l2,0 0,2 -2,0 0,-2z M16,42l2,0 0,2 -2,0 0,-2z M22,42l2,0 0,2 -2,0 0,-2z M24,42l2,0 0,2 -2,0 0,-2z M26,42l2,0 0,2 -2,0 0,-2z M32,42l2,0 0,2 -2,0 0,-2z M34,42l2,0 0,2 -2,0 0,-2z M38,42l2,0 0,2 -2,0 0,-2z M42,42l2,0 0,2 -2,0 0,-2z M54,42l2,0 0,2 -2,0 0,-2z M58,42l2,0 0,2 -2,0 0,-2z M60,42l2,0 0,2 -2,0 0,-2z M62,42l2,0 0,2 -2,0 0,-2z M8,44l2,0 0,2 -2,0 0,-2z M18,44l2,0 0,2 -2,0 0,-2z M20,44l2,0 0,2 -2,0 0,-2z M22,44l2,0 0,2 -2,0 0,-2z M26,44l2,0 0,2 -2,0 0,-2z M28,44l2,0 0,2 -2,0 0,-2z M30,44l2,0 0,2 -2,0 0,-2z M32,44l2,0 0,2 -2,0 0,-2z M38,44l2,0 0,2 -2,0 0,-2z M40,44l2,0 0,2 -2,0 0,-2z M42,44l2,0 0,2 -2,0 0,-2z M48,44l2,0 0,2 -2,0 0,-2z M52,44l2,0 0,2 -2,0 0,-2z M54,44l2,0 0,2 -2,0 0,-2z M56,44l2,0 0,2 -2,0 0,-2z M60,44l2,0 0,2 -2,0 0,-2z M18,46l2,0 0,2 -2,0 0,-2z M22,46l2,0 0,2 -2,0 0,-2z M24,46l2,0 0,2 -2,0 0,-2z M32,46l2,0 0,2 -2,0 0,-2z M40,46l2,0 0,2 -2,0 0,-2z M42,46l2,0 0,2 -2,0 0,-2z M44,46l2,0 0,2 -2,0 0,-2z M52,46l2,0 0,2 -2,0 0,-2z M54,46l2,0 0,2 -2,0 0,-2z M56,46l2,0 0,2 -2,0 0,-2z M60,46l2,0 0,2 -2,0 0,-2z M10,48l2,0 0,2 -2,0 0,-2z M14,48l2,0 0,2 -2,0 0,-2z M20,48l2,0 0,2 -2,0 0,-2z M22,48l2,0 0,2 -2,0 0,-2z M28,48l2,0 0,2 -2,0 0,-2z M30,48l2,0 0,2 -2,0 0,-2z M32,48l2,0 0,2 -2,0 0,-2z M34,48l2,0 0,2 -2,0 0,-2z M38,48l2,0 0,2 -2,0 0,-2z M40,48l2,0 0,2 -2,0 0,-2z M42,48l2,0 0,2 -2,0 0,-2z M44,48l2,0 0,2 -2,0 0,-2z M48,48l2,0 0,2 -2,0 0,-2z M50,48l2,0 0,2 -2,0 0,-2z M52,48l2,0 0,2 -2,0 0,-2z M54,48l2,0 0,2 -2,0 0,-2z M56,48l2,0 0,2 -2,0 0,-2z M58,48l2,0 0,2 -2,0 0,-2z M60,48l2,0 0,2 -2,0 0,-2z M24,50l2,0 0,2 -2,0 0,-2z M28,50l2,0 0,2 -2,0 0,-2z M32,50l2,0 0,2 -2,0 0,-2z M34,50l2,0 0,2 -2,0 0,-2z M36,50l2,0 0,2 -2,0 0,-2z M40,50l2,0 0,2 -2,0 0,-2z M44,50l2,0 0,2 -2,0 0,-2z M48,50l2,0 0,2 -2,0 0,-2z M56,50l2,0 0,2 -2,0 0,-2z M58,50l2,0 0,2 -2,0 0,-2z M60,50l2,0 0,2 -2,0 0,-2z M62,50l2,0 0,2 -2,0 0,-2z M64,50l2,0 0,2 -2,0 0,-2z M8,52l2,0 0,2 -2,0 0,-2z M10,52l2,0 0,2 -2,0 0,-2z M12,52l2,0 0,2 -2,0 0,-2z M14,52l2,0 0,2 -2,0 0,-2z M16,52l2,0 0,2 -2,0 0,-2z M18,52l2,0 0,2 -2,0 0,-2z M20,52l2,0 0,2 -2,0 0,-2z M26,52l2,0 0,2 -2,0 0,-2z M28,52l2,0 0,2 -2,0 0,-2z M30,52l2,0 0,2 -2,0 0,-2z M32,52l2,0 0,2 -2,0 0,-2z M34,52l2,0 0,2 -2,0 0,-2z M40,52l2,0 0,2 -2,0 0,-2z M44,52l2,0 0,2 -2,0 0,-2z M46,52l2,0 0,2 -2,0 0,-2z M48,52l2,0 0,2 -2,0 0,-2z M52,52l2,0 0,2 -2,0 0,-2z M56,52l2,0 0,2 -2,0 0,-2z M58,52l2,0 0,2 -2,0 0,-2z M62,52l2,0 0,2 -2,0 0,-2z M8,54l2,0 0,2 -2,0 0,-2z M20,54l2,0 0,2 -2,0 0,-2z M26,54l2,0 0,2 -2,0 0,-2z M28,54l2,0 0,2 -2,0 0,-2z M48,54l2,0 0,2 -2,0 0,-2z M56,54l2,0 0,2 -2,0 0,-2z M58,54l2,0 0,2 -2,0 0,-2z M62,54l2,0 0,2 -2,0 0,-2z M64,54l2,0 0,2 -2,0 0,-2z M8,56l2,0 0,2 -2,0 0,-2z M12,56l2,0 0,2 -2,0 0,-2z M14,56l2,0 0,2 -2,0 0,-2z M16,56l2,0 0,2 -2,0 0,-2z M20,56l2,0 0,2 -2,0 0,-2z M26,56l2,0 0,2 -2,0 0,-2z M32,56l2,0 0,2 -2,0 0,-2z M36,56l2,0 0,2 -2,0 0,-2z M38,56l2,0 0,2 -2,0 0,-2z M40,56l2,0 0,2 -2,0 0,-2z M42,56l2,0 0,2 -2,0 0,-2z M48,56l2,0 0,2 -2,0 0,-2z M50,56l2,0 0,2 -2,0 0,-2z M52,56l2,0 0,2 -2,0 0,-2z M54,56l2,0 0,2 -2,0 0,-2z M56,56l2,0 0,2 -2,0 0,-2z M60,56l2,0 0,2 -2,0 0,-2z M62,56l2,0 0,2 -2,0 0,-2z M8,58l2,0 0,2 -2,0 0,-2z M12,58l2,0 0,2 -2,0 0,-2z M14,58l2,0 0,2 -2,0 0,-2z M16,58l2,0 0,2 -2,0 0,-2z M20,58l2,0 0,2 -2,0 0,-2z M24,58l2,0 0,2 -2,0 0,-2z M26,58l2,0 0,2 -2,0 0,-2z M28,58l2,0 0,2 -2,0 0,-2z M30,58l2,0 0,2 -2,0 0,-2z M32,58l2,0 0,2 -2,0 0,-2z M36,58l2,0 0,2 -2,0 0,-2z M38,58l2,0 0,2 -2,0 0,-2z M40,58l2,0 0,2 -2,0 0,-2z M42,58l2,0 0,2 -2,0 0,-2z M44,58l2,0 0,2 -2,0 0,-2z M46,58l2,0 0,2 -2,0 0,-2z M50,58l2,0 0,2 -2,0 0,-2z M54,58l2,0 0,2 -2,0 0,-2z M56,58l2,0 0,2 -2,0 0,-2z M58,58l2,0 0,2 -2,0 0,-2z M64,58l2,0 0,2 -2,0 0,-2z M8,60l2,0 0,2 -2,0 0,-2z M12,60l2,0 0,2 -2,0 0,-2z M14,60l2,0 0,2 -2,0 0,-2z M16,60l2,0 0,2 -2,0 0,-2z M20,60l2,0 0,2 -2,0 0,-2z M24,60l2,0 0,2 -2,0 0,-2z M26,60l2,0 0,2 -2,0 0,-2z M30,60l2,0 0,2 -2,0 0,-2z M34,60l2,0 0,2 -2,0 0,-2z M44,60l2,0 0,2 -2,0 0,-2z M48,60l2,0 0,2 -2,0 0,-2z M54,60l2,0 0,2 -2,0 0,-2z M60,60l2,0 0,2 -2,0 0,-2z M64,60l2,0 0,2 -2,0 0,-2z M8,62l2,0 0,2 -2,0 0,-2z M20,62l2,0 0,2 -2,0 0,-2z M24,62l2,0 0,2 -2,0 0,-2z M30,62l2,0 0,2 -2,0 0,-2z M36,62l2,0 0,2 -2,0 0,-2z M48,62l2,0 0,2 -2,0 0,-2z M50,62l2,0 0,2 -2,0 0,-2z M54,62l2,0 0,2 -2,0 0,-2z M58,62l2,0 0,2 -2,0 0,-2z M62,62l2,0 0,2 -2,0 0,-2z M8,64l2,0 0,2 -2,0 0,-2z M10,64l2,0 0,2 -2,0 0,-2z M12,64l2,0 0,2 -2,0 0,-2z M14,64l2,0 0,2 -2,0 0,-2z M16,64l2,0 0,2 -2,0 0,-2z M18,64l2,0 0,2 -2,0 0,-2z M20,64l2,0 0,2 -2,0 0,-2z M24,64l2,0 0,2 -2,0 0,-2z M26,64l2,0 0,2 -2,0 0,-2z M28,64l2,0 0,2 -2,0 0,-2z M32,64l2,0 0,2 -2,0 0,-2z M36,64l2,0 0,2 -2,0 0,-2z M40,64l2,0 0,2 -2,0 0,-2z M44,64l2,0 0,2 -2,0 0,-2z M46,64l2,0 0,2 -2,0 0,-2z M48,64l2,0 0,2 -2,0 0,-2z M50,64l2,0 0,2 -2,0 0,-2z M52,64l2,0 0,2 -2,0 0,-2z M62,64l2,0 0,2 -2,0 0,-2z ",stroke:"transparent",fill:"black"})))}],i=[{}],s={};function c(e){var t=e.components,n=a(e,["components"]);return(0,l.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h2",null,"QR Code"),(0,l.mdx)("h3",null,"Specified URL"),(0,l.mdx)("br",null))}c.isMDXComponent=!0},()=>{console.log("start")},(e,t,n)=>{if("/Users/hiroppy/Programming/fusuma/samples/debug/style.css".match(/\+*.css$/i))try{n(58)}catch(e){console.error(e)}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(27),l=n.n(r),o=n(59),a={insert:"head",singleton:!1};l()(o.default,a);const u=o.default.locals||{}},(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(29),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=l}],function(e){"use strict";var t;t=e.x,e.x=()=>{var n=t();return[6,10,9].map(e.E),n}},[[0,1,2],[1,1,2],[56,1,2],[57,1,2]]]);