(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306],{4184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&t.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&t.push(l);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},9749:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.src,n=t.sizes,r=t.unoptimized,l=void 0!==r&&r,c=t.priority,u=void 0!==c&&c,h=t.loading,p=t.lazyRoot,S=void 0===p?null:p,I=t.lazyBoundary,k=void 0===I?"200px":I,R=t.className,C=t.quality,L=t.width,P=t.height,N=t.style,_=t.objectFit,q=t.objectPosition,M=t.onLoadingComplete,B=(t.onError,t.placeholder),U=void 0===B?"empty":B,D=t.blurDataURL,F=b(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),H=s.useContext(g.ImageConfigContext),W=s.useMemo((function(){var t=v||H||d.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return y({},t,{allSizes:e,deviceSizes:n})}),[H]),T=F,V=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(V=T.layout),delete T.layout);var G=z;if("loader"in T){if(T.loader){var J=T.loader;G=function(t){t.config;var e=b(t,["config"]);return J(e)}}delete T.loader}var Q="";if(function(t){return"object"===typeof t&&(j(t)||function(t){return void 0!==t.src}(t))}(e)){var K=j(e)?e.default:e;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(D=D||K.blurDataURL,Q=K.src,(!V||"fill"!==V)&&(P=P||K.height,L=L||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}e="string"===typeof e?e:Q;var Y=O(L),$=O(P),Z=O(C),X=!u&&("lazy"===h||"undefined"===typeof h);(e.startsWith("data:")||e.startsWith("blob:"))&&(l=!0,X=!1);w.has(e)&&(X=!1);var tt,et=o(s.useState(!1),2),nt=et[0],rt=et[1],it=o(m.useIntersection({rootRef:S,rootMargin:k,disabled:!X}),3),ot=it[0],at=it[1],lt=it[2],ct=!X||at,ut={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},st={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ft=!1,dt={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:q};0;0;var mt=Object.assign({},N,"raw"===V?{aspectRatio:"".concat(Y," / ").concat($)}:dt),gt="blur"!==U||nt?{}:{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:q||"0% 0%"};if("fill"===V)ut.display="block",ut.position="absolute",ut.top=0,ut.left=0,ut.bottom=0,ut.right=0;else if("undefined"!==typeof Y&&"undefined"!==typeof $){var ht=$/Y,pt=isNaN(ht)?"100%":"".concat(100*ht,"%");"responsive"===V?(ut.display="block",ut.position="relative",ft=!0,st.paddingTop=pt):"intrinsic"===V?(ut.display="inline-block",ut.position="relative",ut.maxWidth="100%",ft=!0,st.maxWidth="100%",tt="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===V&&(ut.display="inline-block",ut.position="relative",ut.width=Y,ut.height=$)}else 0;var yt={src:A,srcSet:void 0,sizes:void 0};ct&&(yt=x({config:W,src:e,unoptimized:l,layout:V,width:Y,quality:Z,sizes:n,loader:G}));var bt=e;0;var vt,wt="imagesrcset",At="imagesizes";wt="imageSrcSet",At="imageSizes";var St=(i(vt={},wt,yt.srcSet),i(vt,At,yt.sizes),vt),jt=s.default.useLayoutEffect,xt=s.useRef(M),Ot=s.useRef(e);s.useEffect((function(){xt.current=M}),[M]),jt((function(){Ot.current!==e&&(lt(),Ot.current=e)}),[lt,e]);var zt=y({isLazy:X,imgAttributes:yt,heightInt:$,widthInt:Y,qualityInt:Z,layout:V,className:R,imgStyle:mt,blurStyle:gt,loading:h,config:W,unoptimized:l,placeholder:U,loader:G,srcString:bt,onLoadingCompleteRef:xt,setBlurComplete:rt,setIntersection:ot,isVisible:ct},T);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(E,Object.assign({},zt)):s.default.createElement("span",{style:ut},ft?s.default.createElement("span",{style:st},tt?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:tt}):null):null,s.default.createElement(E,Object.assign({},zt))),u?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+yt.src+yt.srcSet+yt.sizes,rel:"preload",as:"image",href:yt.srcSet?void 0:yt.src},St))):null)};var c,u,s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(7294)),f=(c=n(3121))&&c.__esModule?c:{default:c},d=n(139),m=n(9246),g=n(8730),h=(n(670),n(2700));function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){p(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}function b(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"undefined/_next/image",loader:"default",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"undefined/_next/image",loader:"default",experimentalLayoutRaw:!1},w=new Set,A=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e.path).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(k(n))}],["akamai",function(t){var e=t.config,n=t.src,r=t.width;return"".concat(e.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(t){return void 0!==t.default}function x(t){var e=t.config,n=t.src,r=t.unoptimized,i=t.layout,o=t.width,l=t.quality,c=t.sizes,u=t.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(t,e,n,r){var i=t.deviceSizes,o=t.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(r);l)u.push(parseInt(l[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(t){return t>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([e,2*e].map((function(t){return o.find((function(e){return e>=t}))||o[o.length-1]})))),kind:"x"}}(e,o,i,c),f=s.widths,d=s.kind,m=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(t,r){return"".concat(u({config:e,src:n,quality:l,width:t})," ").concat("w"===d?t:r+1).concat(d)})).join(", "),src:u({config:e,src:n,quality:l,width:f[m]})}}function O(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function z(t){var e,n=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",r=S.get(n);if(r)return r(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function I(t,e,n,r,i,o){t&&t.src!==A&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.parentNode&&(w.add(e),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=t.naturalWidth,a=t.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var E=function(t){var e=t.imgAttributes,n=t.heightInt,r=t.widthInt,i=t.qualityInt,o=t.layout,a=t.className,l=t.imgStyle,c=t.blurStyle,u=t.isLazy,f=t.placeholder,d=t.loading,m=t.srcString,g=t.config,h=t.unoptimized,p=t.loader,v=t.onLoadingCompleteRef,w=t.setBlurComplete,A=t.setIntersection,S=t.onError,j=(t.isVisible,b(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},j,e,"raw"!==o||e.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,className:a,style:y({},l,c),ref:s.useCallback((function(t){A(t),(null===t||void 0===t?void 0:t.complete)&&I(t,m,0,f,v,w)}),[A,m,o,f,v,w]),onLoad:function(t){I(t.currentTarget,m,0,f,v,w)},onError:function(t){"blur"===f&&w(!0),S&&S(t)}})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},j,x({config:g,src:m,unoptimized:h,layout:o,width:r,quality:i,sizes:e.sizes,loader:p}),"raw"!==o||e.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,style:l,className:a,loading:d||"lazy"}))))};function k(t){return"/"===t[0]?t.slice(1):t}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},9246:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,r=t.disabled||!l,s=o.useRef(),f=i(o.useState(!1),2),d=f[0],m=f[1],g=i(o.useState(e?e.current:null),2),h=g[0],p=g[1],y=o.useCallback((function(t){s.current&&(s.current(),s.current=void 0),r||d||t&&t.tagName&&(s.current=function(t,e,n){var r=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},r=u.find((function(t){return t.root===n.root&&t.margin===n.margin}));r?e=c.get(r):(e=c.get(n),u.push(n));if(e)return e;var i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return c.set(n,e={id:n,observer:o,elements:i}),e}(n),i=r.id,o=r.observer,a=r.elements;return a.set(t,e),o.observe(t),function(){if(a.delete(t),o.unobserve(t),0===a.size){o.disconnect(),c.delete(i);var e=u.findIndex((function(t){return t.root===i.root&&t.margin===i.margin}));e>-1&&u.splice(e,1)}}}(t,(function(t){return t&&m(t)}),{root:h,rootMargin:n}))}),[r,h,n,d]),b=o.useCallback((function(){m(!1)}),[]);return o.useEffect((function(){if(!l&&!d){var t=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[d]),o.useEffect((function(){e&&p(e.current)}),[e]),[y,d,b]};var o=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},6306:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(5893),i=(n(7294),n(5675)),o=n.n(i),a=n(4184),l=n.n(a),c={src:"/src/_next/static/media/logo.04b79c63.png",height:1e3,width:618,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAcElEQVR42jXLMQ5AQBCF4YlC6wKS6XQSR3ATZFciKnED91A4gkYr7qBwl9H4p1B8mZe3b8WiZm/QgJO8c3MhHG/Ux4IWGNF7ueFG7j+csHIrixotj/EvKxYLxYTOiwRiwIxGWLjUuJgxeABrLkqLen2b+EgcU8L1PQAAAABJRU5ErkJggg=="},u=n(881),s=n(4698);function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(){return(0,r.jsxs)("header",{className:l()(s.J,"flex items-center justify-between p-8"),children:[(0,r.jsx)("a",{href:u.FH,className:"inline-flex w-24 justify-center -mx-9 h-12 relative",children:(0,r.jsx)(o(),{alt:"Logo of the website",className:"h-12",src:c,title:"Homepage",layout:"fill",objectFit:"contain"})}),(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"block",children:[["Home",u.FH],["Blog",u.OV]].map((function(t,e){var n=d(t,2),i=n[0],o=n[1];return(0,r.jsx)("li",{className:l()("font-[Bitter] font-medium text-xl","inline-block","hover:text-orange-500",0!==e&&"ml-4"),children:(0,r.jsx)("a",{href:o,children:i})},i)}))})})]})}},881:function(t,e,n){"use strict";n.d(e,{CY:function(){return f},Dr:function(){return s},FH:function(){return r},NK:function(){return g},OV:function(){return i},PO:function(){return l},PV:function(){return d},hj:function(){return c},pK:function(){return m},uB:function(){return u},x$:function(){return o},zL:function(){return a}});var r="https://thammarith.dev",i="".concat(r,"/blog"),o="https://directus.io",a="https://github.com/thammarith/thammarith.github.io",l="https://creativecommons.org/licenses/by-sa/4.0",c="https://github.com/thammarith/thammarith.github.io/blob/master/LICENCE",u="https://nextjs.org",s="https://linkedin.com/in/thammarith",f="https://twitter.com/thammarith",d="https://github.com/thammarith",m="https://instagram.com/thammarith",g="https://medium.com/@thammarith"},5675:function(t,e,n){t.exports=n(9749)}}]);