(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e72c4a8"],{"0b25":function(t,e,r){var n=r("a691"),i=r("50c4");t.exports=function(t){if(void 0===t)return 0;var e=n(t),r=i(e);if(e!==r)throw RangeError("Wrong length or index");return r}},2626:function(t,e,r){"use strict";var n=r("d066"),i=r("9bf2"),a=r("b622"),o=r("83ab"),c=a("species");t.exports=function(t){var e=n(t),r=i.f;o&&e&&!e[c]&&r(e,c,{configurable:!0,get:function(){return this}})}},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),a=r("7b0b"),o=r("50c4"),c=r("a691"),u=r("1d80"),s=r("8aa5"),l=r("14c3"),f=Math.max,h=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=n.REPLACE_KEEPS_$0,w=g?"$":"$0";return[function(r,n){var i=u(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!g&&y||"string"===typeof n&&-1===n.indexOf(w)){var a=r(e,t,this,n);if(a.done)return a.value}var u=i(t),d=String(this),v="function"===typeof n;v||(n=String(n));var p=u.global;if(p){var x=u.unicode;u.lastIndex=0}var L=[];while(1){var k=l(u,d);if(null===k)break;if(L.push(k),!p)break;var _=String(k[0]);""===_&&(u.lastIndex=s(d,o(u.lastIndex),x))}for(var I="",R=0,E=0;E<L.length;E++){k=L[E];for(var C=String(k[0]),P=f(h(c(k.index),d.length),0),U=[],O=1;O<k.length;O++)U.push(m(k[O]));var S=k.groups;if(v){var A=[C].concat(U,P,d);void 0!==S&&A.push(S);var j=String(n.apply(void 0,A))}else j=b(C,d,P,U,S,n);P>=R&&(I+=d.slice(R,P)+j,R=P+C.length)}return I+d.slice(R)}];function b(t,r,n,i,o,c){var u=n+t.length,s=i.length,l=p;return void 0!==o&&(o=a(o),l=v),e.call(c,l,(function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>s){var f=d(l/10);return 0===f?e:f<=s?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},"621a":function(t,e,r){"use strict";var n=r("da84"),i=r("83ab"),a=r("a981"),o=r("9112"),c=r("e2cc"),u=r("d039"),s=r("19aa"),l=r("a691"),f=r("50c4"),h=r("0b25"),d=r("77a7"),v=r("e163"),p=r("d2bb"),m=r("241c").f,g=r("9bf2").f,y=r("81d5"),w=r("d44e"),b=r("69f3"),x=b.get,L=b.set,k="ArrayBuffer",_="DataView",I="prototype",R="Wrong length",E="Wrong index",C=n[k],P=C,U=n[_],O=U&&U[I],S=Object.prototype,A=n.RangeError,j=d.pack,z=d.unpack,N=function(t){return[255&t]},T=function(t){return[255&t,t>>8&255]},B=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},F=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},$=function(t){return j(t,23,4)},M=function(t){return j(t,52,8)},G=function(t,e){g(t[I],e,{get:function(){return x(this)[e]}})},D=function(t,e,r,n){var i=h(r),a=x(t);if(i+e>a.byteLength)throw A(E);var o=x(a.buffer).bytes,c=i+a.byteOffset,u=o.slice(c,c+e);return n?u:u.reverse()},W=function(t,e,r,n,i,a){var o=h(r),c=x(t);if(o+e>c.byteLength)throw A(E);for(var u=x(c.buffer).bytes,s=o+c.byteOffset,l=n(+i),f=0;f<e;f++)u[s+f]=l[a?f:e-f-1]};if(a){if(!u((function(){C(1)}))||!u((function(){new C(-1)}))||u((function(){return new C,new C(1.5),new C(NaN),C.name!=k}))){P=function(t){return s(this,P),new C(h(t))};for(var q,V=P[I]=C[I],H=m(C),J=0;H.length>J;)(q=H[J++])in P||o(P,q,C[q]);V.constructor=P}p&&v(O)!==S&&p(O,S);var Y=new U(new P(2)),K=O.setInt8;Y.setInt8(0,2147483648),Y.setInt8(1,2147483649),!Y.getInt8(0)&&Y.getInt8(1)||c(O,{setInt8:function(t,e){K.call(this,t,e<<24>>24)},setUint8:function(t,e){K.call(this,t,e<<24>>24)}},{unsafe:!0})}else P=function(t){s(this,P,k);var e=h(t);L(this,{bytes:y.call(new Array(e),0),byteLength:e}),i||(this.byteLength=e)},U=function(t,e,r){s(this,U,_),s(t,P,_);var n=x(t).byteLength,a=l(e);if(a<0||a>n)throw A("Wrong offset");if(r=void 0===r?n-a:f(r),a+r>n)throw A(R);L(this,{buffer:t,byteLength:r,byteOffset:a}),i||(this.buffer=t,this.byteLength=r,this.byteOffset=a)},i&&(G(P,"byteLength"),G(U,"buffer"),G(U,"byteLength"),G(U,"byteOffset")),c(U[I],{getInt8:function(t){return D(this,1,t)[0]<<24>>24},getUint8:function(t){return D(this,1,t)[0]},getInt16:function(t){var e=D(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=D(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return F(D(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return F(D(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return z(D(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return z(D(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){W(this,1,t,N,e)},setUint8:function(t,e){W(this,1,t,N,e)},setInt16:function(t,e){W(this,2,t,T,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){W(this,2,t,T,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){W(this,4,t,B,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){W(this,4,t,B,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){W(this,4,t,$,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){W(this,8,t,M,e,arguments.length>2?arguments[2]:void 0)}});w(P,k),w(U,_),t.exports={ArrayBuffer:P,DataView:U}},"77a7":function(t,e){var r=1/0,n=Math.abs,i=Math.pow,a=Math.floor,o=Math.log,c=Math.LN2,u=function(t,e,u){var s,l,f,h=new Array(u),d=8*u-e-1,v=(1<<d)-1,p=v>>1,m=23===e?i(2,-24)-i(2,-77):0,g=t<0||0===t&&1/t<0?1:0,y=0;for(t=n(t),t!=t||t===r?(l=t!=t?1:0,s=v):(s=a(o(t)/c),t*(f=i(2,-s))<1&&(s--,f*=2),t+=s+p>=1?m/f:m*i(2,1-p),t*f>=2&&(s++,f/=2),s+p>=v?(l=0,s=v):s+p>=1?(l=(t*f-1)*i(2,e),s+=p):(l=t*i(2,p-1)*i(2,e),s=0));e>=8;h[y++]=255&l,l/=256,e-=8);for(s=s<<e|l,d+=e;d>0;h[y++]=255&s,s/=256,d-=8);return h[--y]|=128*g,h},s=function(t,e){var n,a=t.length,o=8*a-e-1,c=(1<<o)-1,u=c>>1,s=o-7,l=a-1,f=t[l--],h=127&f;for(f>>=7;s>0;h=256*h+t[l],l--,s-=8);for(n=h&(1<<-s)-1,h>>=-s,s+=e;s>0;n=256*n+t[l],l--,s-=8);if(0===h)h=1-u;else{if(h===c)return n?NaN:f?-r:r;n+=i(2,e),h-=u}return(f?-1:1)*n*i(2,h-e)};t.exports={pack:u,unpack:s}},"81d5":function(t,e,r){"use strict";var n=r("7b0b"),i=r("23cb"),a=r("50c4");t.exports=function(t){var e=n(this),r=a(e.length),o=arguments.length,c=i(o>1?arguments[1]:void 0,r),u=o>2?arguments[2]:void 0,s=void 0===u?r:i(u,r);while(s>c)e[c++]=t;return e}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),o=new P(n||[]);return a._invoke=I(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",p={};function m(){}function g(){}function y(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(U([])));x&&x!==r&&n.call(x,a)&&(w=x);var L=y.prototype=m.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(i,a,o,c){var u=l(t[i],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(f).then((function(t){s.value=t,o(s)}),(function(t){return r("throw",t,o,c)}))}c(u.arg)}var i;function a(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function I(t,e,r){var n=f;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw a;return O()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var c=R(o,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}function R(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function U(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=L.constructor=y,y.constructor=g,g.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[o]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new _(s(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(L),u(L,c,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=U,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:U(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},a981:function(t,e){t.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},c19f:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("621a"),o=r("2626"),c="ArrayBuffer",u=a[c],s=i[c];n({global:!0,forced:s!==u},{ArrayBuffer:u}),o(c)},e1b6:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mdui-row"},[r("div",{staticClass:"mdui-m-y-2"},[r("input",{attrs:{type:"file",id:"select-image",accept:"image/*",hidden:""},on:{change:t.selectImage}}),r("label",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme",attrs:{for:"select-image"}},[t._v(" 选择图片 ")]),t.file?[r("mdui-btn",{staticClass:"mdui-m-l-2",attrs:{color:"red-600",raised:"",ripple:""},on:{click:function(e){t.file=null}}},[r("mdui-icon",{attrs:{type:"delete"}}),t._v(" 删除图片 ")],1),r("div",{staticClass:"mdui-chip mdui-m-l-2"},[r("span",{staticClass:"mdui-chip-icon mdui-color-red-600"},[r("mdui-icon",{attrs:{type:"attach_file"}})],1),r("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t.file.name))])]),r("div",{staticClass:"mdui-chip mdui-m-l-2"},[r("span",{staticClass:"mdui-chip-icon mdui-color-yellow-600"},[r("mdui-icon",{attrs:{type:"crop_free"}})],1),r("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t._f("fileSize")(t.file.size)))])]),r("div",{staticClass:"mdui-chip mdui-m-l-2"},[r("span",{staticClass:"mdui-chip-icon mdui-color-green-600"},[r("mdui-icon",{attrs:{type:"insert_drive_file"}})],1),r("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t.file.type))])])]:t._e()],2),r("div",{staticClass:"mdui-m-t-2"},[t._v(" 尺寸： "),t._l(t.sizeList,(function(e){return r("label",{key:e,staticClass:"mdui-checkbox mdui-p-l-3 mdui-m-l-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.size)?t._i(t.size,e)>-1:t.size},on:{change:function(r){var n=t.size,i=r.target,a=!!i.checked;if(Array.isArray(n)){var o=e,c=t._i(n,o);i.checked?c<0&&(t.size=n.concat([o])):c>-1&&(t.size=n.slice(0,c).concat(n.slice(c+1)))}else t.size=a}}}),r("i",{staticClass:"mdui-checkbox-icon"}),t._v(" "+t._s(e)+" ")])}))],2),r("div",{staticClass:"mdui-m-t-2"},[t._v(" 形状： "),t._l(t.shapeList,(function(e){return r("label",{key:e.value,staticClass:"mdui-radio mdui-p-l-3 mdui-m-l-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shape,expression:"shape"}],attrs:{type:"radio"},domProps:{value:e.value,checked:t._q(t.shape,e.value)},on:{change:[function(r){t.shape=e.value},function(e){"fillet"!==t.shape&&(t.bleed=!1)}]}}),r("i",{staticClass:"mdui-radio-icon"}),t._v(" "+t._s(e.name)+" ")])})),r("br"),t._v(" 留白： "),r("mdui-checkbox",{attrs:{"mdui-tooltip":"{content: '此选项只在形状为“圆角矩形”时生效', position: 'right'}",label:"启用",disabled:"fillet"!==t.shape},model:{value:t.bleed,callback:function(e){t.bleed=e},expression:"bleed"}})],2),t.blobURL?r("img",{staticClass:"mdui-shadow-3",staticStyle:{"max-height":"200px","max-width":"100%"},attrs:{alt:"预览图片",src:t.blobURL}}):r("paste-image",{on:{paste:t.pasteImage}}),r("div",{staticClass:"mdui-m-t-2"},[r("mdui-btn",{staticClass:"mdui-m-r-2",attrs:{color:"theme-accent",disabled:!t.file,raised:"",ripple:""},on:{click:t.convert}},[t._v("转换")]),t.icoUrl?r("mdui-btn",{staticClass:"mdui-m-r-2",attrs:{color:"theme",raised:"",ripple:""},on:{click:function(){return t.$refs.download.click()}}},[t._v(" 下载 ")]):t._e()],1),t.icoUrl?r("div",{staticClass:"mdui-m-t-2"},[r("label",{staticClass:"mdui-textfield-label"},[t._v("效果预览")]),r("img",{staticClass:"mdui-shadow-3",attrs:{alt:"效果预览",src:t.icoUrl}})]):t._e(),r("a",{ref:"download",staticStyle:{display:"none"},attrs:{href:t.icoUrl,download:t.icoName}})],1)},i=[];r("b0c0"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("ddb0"),r("2b3d"),r("96cf");function a(t,e,r,n,i,a,o){try{var c=t[a](o),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function c(t){a(o,n,i,c,u,"next",t)}function u(t){a(o,n,i,c,u,"throw",t)}c(void 0)}))}}r("c19f"),r("a4d3"),r("e01a"),r("d28b");var c=r("06c5");function u(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(c["a"])(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(u)throw a}}}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,r){return e&&l(t.prototype,e),r&&l(t,r),t}var h=function(){function t(){s(this,t)}return f(t,[{key:"createCanvas",value:function(t){var e=document.createElement("canvas");return e.width=t,e.height=t,e}},{key:"converImageURL",value:function(){var t=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=o(regeneratorRuntime.mark((function t(r,n){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("string"!==typeof e){t.next=10;break}return t.next=3,fetch(e,{method:"get"});case 3:return i=t.sent,t.next=6,i.blob();case 6:a=t.sent,r(URL.createObjectURL(a)),t.next=11;break;case 10:e instanceof File?r(URL.createObjectURL(e)):n("参数 `opt.source` 无法识别");case 11:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"drawImage",value:function(t,e,r,n){var i,a,o=t.getContext("2d");if(!o)return console.error("`ctx` 为空");if(o.clearRect(0,0,t.width,t.height),e.naturalWidth<e.naturalHeight?(i=t.width,a=i/e.naturalWidth*e.naturalHeight):(a=t.height,i=a/e.naturalHeight*e.naturalWidth),"square"===r&&o.drawImage(e,0,0,i,a),"circle"===r){var c=t.width/2;o.save(),o.beginPath(),o.arc(c,c,c,0,2*Math.PI,!1),o.clip(),o.drawImage(e,0,0,i,a),o.restore()}if("fillet"===r){var u=0,s=0;if(n&&t.width>16){var l=10/256;u=s=Math.ceil(l*t.width)}var f=t.width-2*u,h=t.height-2*s,d=Math.floor(f/8);o.beginPath(),o.moveTo(u+d,s),o.arcTo(u+f,s,u+f,s+h,d),o.arcTo(u+f,s+h,u,s+h,d),o.arcTo(u,s+h,u,s,d),o.arcTo(u,s,u+f,s,d),o.closePath(),o.clip(),o.drawImage(e,0,0,i,a)}return o}},{key:"getPngBlob",value:function(){var t=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=o(regeneratorRuntime.mark((function t(r,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.toBlob((function(t){t?r(t):n("`blob` 为空")}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"loadImage",value:function(){var t=o(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=o(regeneratorRuntime.mark((function t(n){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.converImageURL(e);case 2:i=t.sent,a=document.createElement("img"),a.src=i,a.onload=function(){return n(a)};case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"createPngBuffer",value:function(){var t=o(regeneratorRuntime.mark((function t(e){var r,n,i,a=this,c=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:[16,48,96,256],n=c.length>2&&void 0!==c[2]?c[2]:"square",i=!(c.length>3&&void 0!==c[3])||c[3],t.abrupt("return",new Promise(function(){var t=o(regeneratorRuntime.mark((function t(o){var c,u,s,l,f,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c=[],u=r.length;case 2:if(!(u>0)){t.next=17;break}return s=r[r.length-u],l=a.createCanvas(s),a.drawImage(l,e,n,i),t.next=8,a.getPngBlob(l);case 8:return f=t.sent,t.next=11,f.arrayBuffer();case 11:h=t.sent,c.push({size:s,buffer:h}),u--,0===u&&o(c),t.next=2;break;case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"createIcon",value:function(t){var e=[],r=6,n=new ArrayBuffer(r),i=new DataView(n);i.setInt16(0,0,!0),i.setInt16(2,1,!0),i.setInt16(4,t.length,!0),e.push(n);var a,o=16,c=o*t.length,s=r+c,l=0,f=u(t);try{for(f.s();!(a=f.n()).done;){var h=a.value;s+=l;var d=new ArrayBuffer(o),v=new DataView(d);v.setInt8(0,h.size),v.setInt8(1,h.size),v.setInt8(2,0),v.setInt8(3,0),v.setInt16(4,1,!0),v.setInt16(6,32,!0),v.setInt32(8,h.buffer.byteLength,!0),v.setInt32(12,s,!0),e.push(d),l=h.buffer.byteLength}}catch(y){f.e(y)}finally{f.f()}var p,m=u(t);try{for(m.s();!(p=m.n()).done;){var g=p.value;e.push(g.buffer)}}catch(y){m.e(y)}finally{m.f()}return new Blob(e,{type:"image/vnd.microsoft.icon"})}}]),t}(),d=function(){function t(){s(this,t)}return f(t,[{key:"convert",value:function(t){return new Promise(function(){var e=o(regeneratorRuntime.mark((function e(r){var n,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new h,e.next=3,n.loadImage(t.source);case 3:return i=e.sent,e.next=6,n.createPngBuffer(i,t.size,t.shape,t.bleed);case 6:a=e.sent,o=n.createIcon(a),r(o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),t}(),v=new d,p={name:"PngToIco",data:function(){return{file:null,sizeList:[16,32,48,96,128,256,512],size:[16,96,256],shapeList:[{value:"square",name:"正方形"},{value:"circle",name:"圆形"},{value:"fillet",name:"圆角矩形"}],shape:"square",bleed:!1,icoUrl:"",icoName:""}},computed:{blobURL:function(){return this.file?window.URL.createObjectURL(this.file):""}},methods:{selectImage:function(t){this.file=t.target.files[0]},pasteImage:function(t){this.file=t},convert:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.convert({source:t.file,size:t.size,shape:t.shape,bleed:t.bleed});case 2:r=e.sent,t.icoUrl=URL.createObjectURL(r),t.icoName=t.file.name.replace(/\.\w+$/,".ico");case 5:case"end":return e.stop()}}),e)})))()}}},m=p,g=r("2877"),y=Object(g["a"])(m,n,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-0e72c4a8.f914963a.js.map