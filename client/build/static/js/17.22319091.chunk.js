(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[17],{245:function(e,t,r){"use strict";r.r(t);var n=r(32);var a=r(33);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r(30),o=r(0),u=r.n(o),s=r(81),l=r.n(s),f=r(60);t.default=function(){var e=Object(o.useState)([{id:0,source:"",isActive:!0}]),t=Object(i.a)(e,2),r=t[0],n=t[1],a=Object(o.useState)(""),s=Object(i.a)(a,2),m=s[0],v=s[1],d=Object(o.useRef)({});return u.a.createElement("div",{id:"json"},u.a.createElement("div",{className:"title"},"JSON \u683c\u5f0f\u5316"),u.a.createElement("div",{className:"tab"},r.map((function(e){return u.a.createElement("div",{key:e.id,className:"item ".concat(e.isActive?"active":""),onClick:function(){return t=e.id,r.forEach((function(e){e.isActive=e.id===t,e.isActive&&v(e.source)})),void n(c(r));var t}},"tab-",e.id)})),u.a.createElement("div",{className:"item",onClick:function(){r.forEach((function(e){return e.isActive=!1})),r.push({id:r.length,source:"",isActive:!0}),n(c(r)),v("")}},"+"),u.a.createElement("button",{className:"error",onClick:function(){r.forEach((function(e){return e.isActive&&(e.source="")})),n(c(r)),v(""),d.current.style.height="498px"}},"\u6e05\u7a7a")),u.a.createElement("div",{className:"content"},u.a.createElement("textarea",{className:"source",ref:d,onChange:function(){var e=d.current.value;r.forEach((function(t){return t.isActive&&(t.source=e)})),n(c(r)),v(e),d.current.style.height=2+d.current.scrollHeight+"px"},value:m,placeholder:"\u8f93\u5165\u9700\u8981\u683c\u5f0f\u5316\u7684 JSON"}),u.a.createElement("div",{className:"output"},u.a.createElement(l.a,{src:function(e){if(""===e.trim())return{};var t={ERROR:"\u4e0d\u662f\u6709\u6548\u7684 JSON \u5bf9\u8c61"};try{var r=JSON.parse(Object(f.a)(e)),n=typeof r;return null!=n&&"object"===n?r:t}catch(a){return t}}(m),name:!1}))))}},60:function(e,t,r){"use strict";function n(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r).toString(16);t.push("\\u"+n.slice(-4).padStart(4,"0"))}return t.join("")}function a(e){return e.replace(/(\\)?\\u/g,"\\u").replace(/\\u[0-9a-f]{4}/gi,(function(e){var t=Number("0x"+e.substring(2));return String.fromCodePoint(t)}))}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=17.22319091.chunk.js.map