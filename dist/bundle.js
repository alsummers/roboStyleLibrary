!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="/assets/",t(t.s=2)}([function(n,r){n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(e[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&e[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),r.push(a))}},r}},function(n,r,t){(r=n.exports=t(0)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);",""]),r.push([n.i,"/* font-family: 'Roboto Mono', monospace; */",""])},function(n,r,t){t(3)},function(n,r,t){var e=t(4);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(9)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){(r=n.exports=t(0)(!1)).i(t(5),""),r.i(t(6),""),r.i(t(7),""),r.i(t(8),""),r.push([n.i,"",""])},function(n,r,t){(r=n.exports=t(0)(!1)).i(t(1),""),r.push([n.i,".button-def{\r\n    border: none;\r\n    color: green;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 3px 0 rgba(0, 0, 0, 0.19);\r\n    font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.button-def:hover {\r\n    box-shadow: none;\r\n    background-color: darkgrey;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-accent {\r\n    background-color: white;\r\n    border: 2px solid darkgrey;\r\n    color: darkgrey;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 3px 0 rgba(0, 0, 0, 0.19);\r\n    font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.button-accent:hover{\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.button-def:disabled{\r\n    border:none;\r\n    background-color:rgb(233, 233, 233);\r\n    color:rgb(182, 182, 182);\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    opacity: .7;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    box-shadow: none;\r\n    font-family: 'Roboto Mono', monospace;\r\n\r\n}\r\n.button-def:disabled:hover {\r\n    cursor: default\r\n}",""])},function(n,r,t){(r=n.exports=t(0)(!1)).i(t(1),""),r.push([n.i,".input-def{\r\n    width: 10%;\r\n    border: none;\r\n    border-bottom: 2px solid darkgray;\r\n    padding: 1rem;\r\n    padding-bottom: .2rem;\r\n    font-family: 'Roboto Mono', monospace;\r\n    -webkit-transition: width 0.4s ease-in-out;\r\n    transition: width 0.4s ease-in-out;\r\n}\r\n.input-alt{\r\n    width: 10%;\r\n    border: none;\r\n    border-bottom: 2px solid darkgray;\r\n    padding: 1.5rem;\r\n    padding-bottom: .2rem;\r\n    font-family: 'Roboto Mono', monospace;\r\n    -webkit-transition: padding 0.4s ease-in-out;\r\n    transition: padding 0.4s ease-in-out;\r\n\r\n    \r\n}\r\n.input-alt:focus{\r\n    border: none;\r\n    border-bottom: 2px solid darkgray;\r\n    border-top: 2px solid darkgray;\r\n    padding: .5rem;\r\n    padding-right: 1.5rem;\r\n    padding-left: 1.5rem;\r\n    outline: none;\r\n}\r\n.input-def:focus{\r\n    border: 3px solid darkgray;\r\n    font-size: 14px;\r\n    padding-bottom: 1rem;\r\n    width: 30%;\r\n    outline: none;\r\n\r\n}\r\n",""])},function(n,r,t){(n.exports=t(0)(!1)).push([n.i,"ul {\r\n    list-style-type: none;\r\n    margin: auto;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: lightgrey;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 3px 0 rgba(0, 0, 0, 0.19);\r\n    /* position: fixed;\r\n    top: 0; */\r\n    width: 100%;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n}",""])},function(n,r,t){(r=n.exports=t(0)(!1)).i(t(1),""),r.push([n.i,".badge-def {\r\n    position:relative;\r\n}\r\n.badge-def[data-badge]:after {\r\n    content:attr(data-badge);\r\n    position:absolute;\r\n    top:-10px;\r\n    font-size:1em;\r\n    font-weight: bold;\r\n    background: lightgrey;\r\n    color: darkgrey;\r\n    width:18px;height:18px;\r\n    text-align:center;\r\n    line-height:18px;\r\n    border-radius:10%;\r\n    box-shadow:0 2px 1px rgba(0, 0, 0, 0.2), 0 2px 1px rgba(0, 0, 0, 0.2);\r\n}",""])},function(n,r,t){var e,o,i={},a=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=e.apply(this,arguments)),o}),s=function(n){var r={};return function(n,t){if("function"==typeof n)return n();if(void 0===r[n]){var e=function(n,r){return r?r.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}}(),c=null,u=0,d=[],f=t(10);function p(n,r){for(var t=0;t<n.length;t++){var e=n[t],o=i[e.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](e.parts[a]);for(;a<e.parts.length;a++)o.parts.push(x(e.parts[a],r))}else{var s=[];for(a=0;a<e.parts.length;a++)s.push(x(e.parts[a],r));i[e.id]={id:e.id,refs:1,parts:s}}}}function l(n,r){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],a=r.base?i[0]+r.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(s):t.push(e[a]={id:a,parts:[s]})}return t}function b(n,r){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=d[d.length-1];if("top"===n.insertAt)e?e.nextSibling?t.insertBefore(r,e.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),d.push(r);else if("bottom"===n.insertAt)t.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,t);t.insertBefore(r,o)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=d.indexOf(n);r>=0&&d.splice(r,1)}function g(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return t.nc}();e&&(n.attrs.nonce=e)}return m(r,n.attrs),b(n,r),r}function m(n,r){Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})}function x(n,r){var t,e,o,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var a=u++;t=c||(c=g(r)),e=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(r,n.attrs),b(n,r),r}(r),e=function(n,r,t){var e=t.css,o=t.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(e=f(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([e],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,r),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(r),e=function(n,r){var t=r.css,e=r.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){h(t)});return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var t=l(n,r);return p(t,r),function(n){for(var e=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,e.push(s)}n&&p(l(n,r),r);for(o=0;o<e.length;o++){var s;if(0===(s=e[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,v=(y=[],function(n,r){return y[n]=r,y.filter(Boolean).join("\n")});function w(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=v(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=r.protocol+"//"+r.host,e=t+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);