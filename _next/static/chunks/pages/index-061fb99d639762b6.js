(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6741)}])},7645:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},u=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),u.forEach((function(t){n(e,t,r[t])}))}return e}t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](o):o instanceof l)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=u({},n,e));var o,l;var s=n=u({},n,t);0;if(s.suspense)return r(s);n.loadableGenerated&&delete(n=u({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,i(r,n);delete n.ssr}return r(n)};o(r(7294));var a=o(r(4588));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var u=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=u},4588:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},l=r(2021),s=r(3644);var c=[],f=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var b=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,u;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var u=this;this._timeout=setTimeout((function(){u._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),u&&n(t,u),e}();function v(e){return function(e,t){var r=function(){if(!u){var t=new b(e,n);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=i.default.lazy(n.loader));var u=null;if(!d&&!n.suspense){var o=n.webpack?n.webpack():n.modules;o&&f.push((function(e){var t=!0,n=!1,u=void 0;try{for(var a,i=o[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var l=a.value;if(-1!==e.indexOf(l))return r()}}catch(s){n=!0,u=s}finally{try{t||null==i.return||i.return()}finally{if(n)throw u}}}))}var c=n.suspense?function(e,t){return i.default.createElement(n.lazy,a({},e,{ref:t}))}:function(e,t){r();var a=i.default.useContext(s.LoadableContext),o=l.useSubscription(u);return i.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),i.default.useMemo((function(){return o.loading||o.error?i.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:u.retry}):o.loaded?i.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!n.suspense&&r()},c.displayName="LoadableComponent",i.default.forwardRef(c)}(p,e)}function h(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return h(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){h(c).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};h(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var m=v;t.default=m},4698:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var n="p-8 max-w-[72ch] mx-auto"},6741:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n,u=r(5893),a=(r(7294),r(9008)),o=(0,r(5152).default)((function(){return Promise.all([r.e(112),r.e(896),r.e(290)]).then(r.bind(r,7290))}),{loadableGenerated:{webpack:function(){return[7290]}}}),i=function(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a.default,{children:[(0,u.jsx)("title",{children:"Create Next App"}),(0,u.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(null===(n=e.withNavbar)||void 0===n||n)&&(0,u.jsx)("nav",{children:"Navbar"}),(0,u.jsx)("main",{children:e.children}),(0,u.jsx)(o,{})]})},l=r(4698),s=function(){return(0,u.jsx)(i,{children:(0,u.jsx)("div",{className:l.J,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere dolore dolores quam praesentium reiciendis tempora autem temporibus nisi sequi, consequuntur sit veniam modi neque? Et nam neque natus illum?"})})}},2021:function(e,t,r){(()=>{"use strict";var t={800:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function u(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var u={};return"abcdefghijklmnopqrst".split("").forEach((function(e){u[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},u)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,i,l=u(e),s=1;s<arguments.length;s++){for(var c in o=Object(arguments[s]))r.call(o,c)&&(l[c]=o[c]);if(t){i=t(o);for(var f=0;f<i.length;f++)n.call(o,i[f])&&(l[i[f]]=o[i[f]])}}return l}},569:(e,t,r)=>{0},403:(e,t,r)=>{var n=r(800),u=r(522);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,a=u.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=a[0];var o=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===r||(a=t(),o({getCurrentValue:t,subscribe:r,value:a})),u.useDebugValue(a),u.useEffect((function(){function e(){if(!u){var e=t();o((function(u){return u.getCurrentValue!==t||u.subscribe!==r||u.value===e?u:n({},u,{value:e})}))}}var u=!1,a=r(e);return e(),function(){u=!0,a()}}),[t,r]),a}},138:(e,t,r)=>{e.exports=r(403)},522:e=>{e.exports=r(7294)}},n={};function u(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,u),o=!1}finally{o&&delete n[e]}return a.exports}u.ab="//";var a=u(138);e.exports=a})()},5152:function(e,t,r){e.exports=r(7645)},9008:function(e,t,r){e.exports=r(3121)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);