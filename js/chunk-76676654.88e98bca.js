(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76676654"],{"0b25":function(t,e,r){var n=r("a691"),i=r("50c4");t.exports=function(t){if(void 0===t)return 0;var e=n(t),r=i(e);if(e!==r)throw RangeError("Wrong length or index");return r}},"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},2626:function(t,e,r){"use strict";var n=r("d066"),i=r("9bf2"),a=r("b622"),o=r("83ab"),c=a("species");t.exports=function(t){var e=n(t),r=i.f;o&&e&&!e[c]&&r(e,c,{configurable:!0,get:function(){return this}})}},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),a=r("7b0b"),o=r("50c4"),c=r("a691"),u=r("1d80"),s=r("8aa5"),l=r("14c3"),f=Math.max,h=Math.min,d=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=n.REPLACE_KEEPS_$0,b=m?"$":"$0";return[function(r,n){var i=u(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!m&&y||"string"===typeof n&&-1===n.indexOf(b)){var a=r(e,t,this,n);if(a.done)return a.value}var u=i(t),d=String(this),p="function"===typeof n;p||(n=String(n));var v=u.global;if(v){var x=u.unicode;u.lastIndex=0}var E=[];while(1){var _=l(u,d);if(null===_)break;if(E.push(_),!v)break;var I=String(_[0]);""===I&&(u.lastIndex=s(d,o(u.lastIndex),x))}for(var R="",L=0,k=0;k<E.length;k++){_=E[k];for(var P=String(_[0]),U=f(h(c(_.index),d.length),0),C=[],S=1;S<_.length;S++)C.push(g(_[S]));var O=_.groups;if(p){var A=[P].concat(C,U,d);void 0!==O&&A.push(O);var T=String(n.apply(void 0,A))}else T=w(P,d,U,C,O,n);U>=L&&(R+=d.slice(L,U)+T,L=U+P.length)}return R+d.slice(L)}];function w(t,r,n,i,o,c){var u=n+t.length,s=i.length,l=v;return void 0!==o&&(o=a(o),l=p),e.call(c,l,(function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>s){var f=d(l/10);return 0===f?e:f<=s?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},"621a":function(t,e,r){"use strict";var n=r("da84"),i=r("83ab"),a=r("a981"),o=r("9112"),c=r("e2cc"),u=r("d039"),s=r("19aa"),l=r("a691"),f=r("50c4"),h=r("0b25"),d=r("77a7"),p=r("e163"),v=r("d2bb"),g=r("241c").f,m=r("9bf2").f,y=r("81d5"),b=r("d44e"),w=r("69f3"),x=w.get,E=w.set,_="ArrayBuffer",I="DataView",R="prototype",L="Wrong length",k="Wrong index",P=n[_],U=P,C=n[I],S=C&&C[R],O=Object.prototype,A=n.RangeError,T=d.pack,N=d.unpack,j=function(t){return[255&t]},z=function(t){return[255&t,t>>8&255]},B=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},$=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},F=function(t){return T(t,23,4)},D=function(t){return T(t,52,8)},M=function(t,e){m(t[R],e,{get:function(){return x(this)[e]}})},G=function(t,e,r,n){var i=h(r),a=x(t);if(i+e>a.byteLength)throw A(k);var o=x(a.buffer).bytes,c=i+a.byteOffset,u=o.slice(c,c+e);return n?u:u.reverse()},W=function(t,e,r,n,i,a){var o=h(r),c=x(t);if(o+e>c.byteLength)throw A(k);for(var u=x(c.buffer).bytes,s=o+c.byteOffset,l=n(+i),f=0;f<e;f++)u[s+f]=l[a?f:e-f-1]};if(a){if(!u((function(){P(1)}))||!u((function(){new P(-1)}))||u((function(){return new P,new P(1.5),new P(NaN),P.name!=_}))){U=function(t){return s(this,U),new P(h(t))};for(var q,V=U[R]=P[R],K=g(P),Y=0;K.length>Y;)(q=K[Y++])in U||o(U,q,P[q]);V.constructor=U}v&&p(S)!==O&&v(S,O);var H=new C(new U(2)),J=S.setInt8;H.setInt8(0,2147483648),H.setInt8(1,2147483649),!H.getInt8(0)&&H.getInt8(1)||c(S,{setInt8:function(t,e){J.call(this,t,e<<24>>24)},setUint8:function(t,e){J.call(this,t,e<<24>>24)}},{unsafe:!0})}else U=function(t){s(this,U,_);var e=h(t);E(this,{bytes:y.call(new Array(e),0),byteLength:e}),i||(this.byteLength=e)},C=function(t,e,r){s(this,C,I),s(t,U,I);var n=x(t).byteLength,a=l(e);if(a<0||a>n)throw A("Wrong offset");if(r=void 0===r?n-a:f(r),a+r>n)throw A(L);E(this,{buffer:t,byteLength:r,byteOffset:a}),i||(this.buffer=t,this.byteLength=r,this.byteOffset=a)},i&&(M(U,"byteLength"),M(C,"buffer"),M(C,"byteLength"),M(C,"byteOffset")),c(C[R],{getInt8:function(t){return G(this,1,t)[0]<<24>>24},getUint8:function(t){return G(this,1,t)[0]},getInt16:function(t){var e=G(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=G(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return $(G(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return $(G(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return N(G(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return N(G(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){W(this,1,t,j,e)},setUint8:function(t,e){W(this,1,t,j,e)},setInt16:function(t,e){W(this,2,t,z,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){W(this,2,t,z,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){W(this,4,t,B,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){W(this,4,t,B,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){W(this,4,t,F,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){W(this,8,t,D,e,arguments.length>2?arguments[2]:void 0)}});b(U,_),b(C,I),t.exports={ArrayBuffer:U,DataView:C}},"77a7":function(t,e){var r=1/0,n=Math.abs,i=Math.pow,a=Math.floor,o=Math.log,c=Math.LN2,u=function(t,e,u){var s,l,f,h=new Array(u),d=8*u-e-1,p=(1<<d)-1,v=p>>1,g=23===e?i(2,-24)-i(2,-77):0,m=t<0||0===t&&1/t<0?1:0,y=0;for(t=n(t),t!=t||t===r?(l=t!=t?1:0,s=p):(s=a(o(t)/c),t*(f=i(2,-s))<1&&(s--,f*=2),t+=s+v>=1?g/f:g*i(2,1-v),t*f>=2&&(s++,f/=2),s+v>=p?(l=0,s=p):s+v>=1?(l=(t*f-1)*i(2,e),s+=v):(l=t*i(2,v-1)*i(2,e),s=0));e>=8;h[y++]=255&l,l/=256,e-=8);for(s=s<<e|l,d+=e;d>0;h[y++]=255&s,s/=256,d-=8);return h[--y]|=128*m,h},s=function(t,e){var n,a=t.length,o=8*a-e-1,c=(1<<o)-1,u=c>>1,s=o-7,l=a-1,f=t[l--],h=127&f;for(f>>=7;s>0;h=256*h+t[l],l--,s-=8);for(n=h&(1<<-s)-1,h>>=-s,s+=e;s>0;n=256*n+t[l],l--,s-=8);if(0===h)h=1-u;else{if(h===c)return n?NaN:f?-r:r;n+=i(2,e),h-=u}return(f?-1:1)*n*i(2,h-e)};t.exports={pack:u,unpack:s}},"81d5":function(t,e,r){"use strict";var n=r("7b0b"),i=r("23cb"),a=r("50c4");t.exports=function(t){var e=n(this),r=a(e.length),o=arguments.length,c=i(o>1?arguments[1]:void 0,r),u=o>2?arguments[2]:void 0,s=void 0===u?r:i(u,r);while(s>c)e[c++]=t;return e}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,u=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(c=function(t){var e,r,i,c,f=this,h=s&&f.sticky,d=n.call(f),p=f.source,v=0,g=t;return h&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),r=new RegExp("^(?:"+p+")",d)),l&&(r=new RegExp("^"+p+"$(?!\\s)",d)),u&&(e=f.lastIndex),i=a.call(h?r:f,g),h?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:u&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),o=new U(n||[]);return a._invoke=R(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=y.prototype=g.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function r(i,a,o,c){var u=l(t[i],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(f).then((function(t){s.value=t,o(s)}),(function(t){return r("throw",t,o,c)}))}c(u.arg)}var i;function a(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function R(t,e,r){var n=f;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return S()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var c=L(o,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=E.constructor=y,y.constructor=m,m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},_(I.prototype),I.prototype[o]=function(){return this},t.AsyncIterator=I,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new I(s(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(E),u(E,c,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,U.prototype={constructor:U,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a981:function(t,e){t.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},c19f:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("621a"),o=r("2626"),c="ArrayBuffer",u=a[c],s=i[c];n({global:!0,forced:s!==u},{ArrayBuffer:u}),o(c)},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),o=r("9263"),c=r("9112"),u=a("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var p=a(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!v||!g||"replace"===t&&(!s||!l||h)||"split"===t&&!d){var m=/./[p],y=r(p,""[t],(function(t,e,r,n,i){return e.exec===o?v&&!i?{done:!0,value:m.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=y[0],w=y[1];n(String.prototype,t,b),n(RegExp.prototype,p,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},e1b6:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mdui-row"},[r("div",{staticClass:"mdui-m-y-2"},[r("input",{attrs:{type:"file",id:"select-image",accept:"image/*",hidden:""},on:{change:t.selectImage}}),r("label",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple",attrs:{for:"select-image"}},[t._v(" 选择图片 ")]),t.file?[r("div",{staticClass:"mdui-chip mdui-m-l-2"},[r("span",{staticClass:"mdui-chip-icon mdui-color-red-600"},[r("mdui-icon",{attrs:{type:"attach_file"}})],1),r("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t.file.name))])]),r("div",{staticClass:"mdui-chip mdui-m-l-2"},[r("span",{staticClass:"mdui-chip-icon mdui-color-yellow-600"},[r("mdui-icon",{attrs:{type:"crop_free"}})],1),r("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t._f("fileSize")(t.file.size)))])]),r("div",{staticClass:"mdui-chip mdui-m-l-2"},[r("span",{staticClass:"mdui-chip-icon mdui-color-green-600"},[r("mdui-icon",{attrs:{type:"insert_drive_file"}})],1),r("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t.file.type))])])]:t._e()],2),r("div",{staticClass:"mdui-m-t-2"},[t._v(" 尺寸： "),t._l(t.sizeList,(function(e){return r("label",{key:e,staticClass:"mdui-checkbox mdui-p-l-3 mdui-m-l-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.size)?t._i(t.size,e)>-1:t.size},on:{change:function(r){var n=t.size,i=r.target,a=!!i.checked;if(Array.isArray(n)){var o=e,c=t._i(n,o);i.checked?c<0&&(t.size=n.concat([o])):c>-1&&(t.size=n.slice(0,c).concat(n.slice(c+1)))}else t.size=a}}}),r("i",{staticClass:"mdui-checkbox-icon"}),t._v(" "+t._s(e)+" ")])}))],2),r("div",{staticClass:"mdui-m-t-2"},[t._v(" 形状： "),t._l(t.shapeList,(function(e){return r("label",{key:e.value,staticClass:"mdui-radio mdui-p-l-3 mdui-m-l-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.shape,expression:"shape"}],attrs:{type:"radio"},domProps:{value:e.value,checked:t._q(t.shape,e.value)},on:{change:[function(r){t.shape=e.value},function(e){"fillet"!==t.shape&&(t.bleed=!1)}]}}),r("i",{staticClass:"mdui-radio-icon"}),t._v(" "+t._s(e.name)+" ")])})),r("br"),t._v(" 留白： "),r("mdui-checkbox",{attrs:{"mdui-tooltip":"{content: '此选项只在形状为“圆角矩形”时生效', position: 'right'}",label:"启用",disabled:"fillet"!==t.shape},model:{value:t.bleed,callback:function(e){t.bleed=e},expression:"bleed"}})],2),t.blobURL?r("img",{staticClass:"mdui-shadow-3",staticStyle:{"max-height":"200px","max-width":"100%"},attrs:{alt:"预览图片",src:t.blobURL}}):t._e(),r("div",{staticClass:"mdui-m-t-2"},[r("mdui-btn",{staticClass:"mdui-m-r-2",attrs:{color:"theme-accent",disabled:!t.file,raised:"",ripple:""},on:{click:t.convert}},[t._v("转换")]),t.icoUrl?r("mdui-btn",{staticClass:"mdui-m-r-2",attrs:{color:"theme",raised:"",ripple:""},on:{click:function(){return t.$refs.download.click()}}},[t._v(" 下载 ")]):t._e()],1),r("div",{staticClass:"mdui-m-t-2"},[r("label",{staticClass:"mdui-textfield-label"},[t._v("效果预览")]),t.icoUrl?r("img",{staticClass:"mdui-shadow-3",attrs:{alt:"效果预览",src:t.icoUrl}}):t._e()]),r("a",{ref:"download",staticStyle:{display:"none"},attrs:{href:t.icoUrl,download:t.icoName}})])},i=[];r("b0c0"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("ddb0"),r("2b3d"),r("96cf");function a(t,e,r,n,i,a,o){try{var c=t[a](o),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function c(t){a(o,n,i,c,u,"next",t)}function u(t){a(o,n,i,c,u,"throw",t)}c(void 0)}))}}r("c19f"),r("a4d3"),r("e01a"),r("d28b");var c=r("06c5");function u(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(c["a"])(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(u)throw a}}}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,r){return e&&l(t.prototype,e),r&&l(t,r),t}var h=function(){function t(){s(this,t)}return f(t,[{key:"createCanvas",value:function(t){var e=document.createElement("canvas");return e.width=t,e.height=t,e}},{key:"converImageURL",value:function(){var t=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=o(regeneratorRuntime.mark((function t(r,n){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("string"!==typeof e){t.next=10;break}return t.next=3,fetch(e,{method:"get"});case 3:return i=t.sent,t.next=6,i.blob();case 6:a=t.sent,r(URL.createObjectURL(a)),t.next=11;break;case 10:e instanceof File?r(URL.createObjectURL(e)):n("参数 `opt.source` 无法识别");case 11:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"drawImage",value:function(t,e,r,n){var i,a,o=t.getContext("2d");if(!o)return console.error("`ctx` 为空");if(o.clearRect(0,0,t.width,t.height),e.naturalWidth<e.naturalHeight?(i=t.width,a=i/e.naturalWidth*e.naturalHeight):(a=t.height,i=a/e.naturalHeight*e.naturalWidth),"square"===r&&o.drawImage(e,0,0,i,a),"circle"===r){var c=t.width/2;o.save(),o.beginPath(),o.arc(c,c,c,0,2*Math.PI,!1),o.clip(),o.drawImage(e,0,0,i,a),o.restore()}if("fillet"===r){var u=0,s=0;if(n&&t.width>16){var l=10/256;u=s=Math.ceil(l*t.width)}var f=t.width-2*u,h=t.height-2*s,d=Math.floor(f/8);o.beginPath(),o.moveTo(u+d,s),o.arcTo(u+f,s,u+f,s+h,d),o.arcTo(u+f,s+h,u,s+h,d),o.arcTo(u,s+h,u,s,d),o.arcTo(u,s,u+f,s,d),o.closePath(),o.clip(),o.drawImage(e,0,0,i,a)}return o}},{key:"getPngBlob",value:function(){var t=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=o(regeneratorRuntime.mark((function t(r,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.toBlob((function(t){t?r(t):n("`blob` 为空")}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"loadImage",value:function(){var t=o(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=o(regeneratorRuntime.mark((function t(n){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.converImageURL(e);case 2:i=t.sent,a=document.createElement("img"),a.src=i,a.onload=function(){return n(a)};case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"createPngBuffer",value:function(){var t=o(regeneratorRuntime.mark((function t(e){var r,n,i,a=this,c=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:[16,48,96,256],n=c.length>2&&void 0!==c[2]?c[2]:"square",i=!(c.length>3&&void 0!==c[3])||c[3],t.abrupt("return",new Promise(function(){var t=o(regeneratorRuntime.mark((function t(o){var c,u,s,l,f,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c=[],u=r.length;case 2:if(!(u>0)){t.next=17;break}return s=r[r.length-u],l=a.createCanvas(s),a.drawImage(l,e,n,i),t.next=8,a.getPngBlob(l);case 8:return f=t.sent,t.next=11,f.arrayBuffer();case 11:h=t.sent,c.push({size:s,buffer:h}),u--,0===u&&o(c),t.next=2;break;case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"createIcon",value:function(t){var e=[],r=6,n=new ArrayBuffer(r),i=new DataView(n);i.setInt16(0,0,!0),i.setInt16(2,1,!0),i.setInt16(4,t.length,!0),e.push(n);var a,o=16,c=o*t.length,s=r+c,l=0,f=u(t);try{for(f.s();!(a=f.n()).done;){var h=a.value;s+=l;var d=new ArrayBuffer(o),p=new DataView(d);p.setInt8(0,h.size),p.setInt8(1,h.size),p.setInt8(2,0),p.setInt8(3,0),p.setInt16(4,1,!0),p.setInt16(6,32,!0),p.setInt32(8,h.buffer.byteLength,!0),p.setInt32(12,s,!0),e.push(d),l=h.buffer.byteLength}}catch(y){f.e(y)}finally{f.f()}var v,g=u(t);try{for(g.s();!(v=g.n()).done;){var m=v.value;e.push(m.buffer)}}catch(y){g.e(y)}finally{g.f()}return new Blob(e,{type:"image/vnd.microsoft.icon"})}}]),t}(),d=function(){function t(){s(this,t)}return f(t,[{key:"convert",value:function(t){return new Promise(function(){var e=o(regeneratorRuntime.mark((function e(r){var n,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new h,e.next=3,n.loadImage(t.source);case 3:return i=e.sent,e.next=6,n.createPngBuffer(i,t.size,t.shape,t.bleed);case 6:a=e.sent,o=n.createIcon(a),r(o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),t}(),p=new d,v={name:"PngToIco",data:function(){return{file:null,sizeList:[16,32,48,96,128,256,512],size:[16,96,256],shapeList:[{value:"square",name:"正方形"},{value:"circle",name:"圆形"},{value:"fillet",name:"圆角矩形"}],shape:"square",bleed:!1,icoUrl:"",icoName:""}},computed:{blobURL:function(){return this.file?window.URL.createObjectURL(this.file):""}},methods:{selectImage:function(t){this.file=t.target.files[0]},convert:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.convert({source:t.file,size:t.size,shape:t.shape,bleed:t.bleed});case 2:r=e.sent,t.icoUrl=URL.createObjectURL(r),t.icoName=t.file.name.replace(/\.\w+$/,".ico");case 5:case"end":return e.stop()}}),e)})))()}}},g=v,m=r("2877"),y=Object(m["a"])(g,n,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-76676654.88e98bca.js.map