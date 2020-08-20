(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2152ecf5"],{"4f2b":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mdui-row"},[e("div",{ref:"tab",staticClass:"mdui-tab"},[e("a",{staticClass:"mdui-ripple",attrs:{href:"#image2uri"}},[t._v("图片转 URI")]),e("a",{staticClass:"mdui-ripple",attrs:{href:"#uri2image"}},[t._v("URI 转图片")])]),e("div",{attrs:{id:"image2uri"}},[e("div",{staticClass:"mdui-m-y-2"},[e("input",{attrs:{type:"file",id:"select-image",accept:"image/*",hidden:""},on:{change:t.selectImage}}),e("label",{staticClass:"mdui-btn mdui-btn-raised mdui-ripple",attrs:{for:"select-image"}},[t._v(" 选择图片 ")]),t.file?[e("div",{staticClass:"mdui-chip mdui-m-l-2"},[e("span",{staticClass:"mdui-chip-icon mdui-color-red-600"},[e("mdui-icon",{attrs:{type:"attach_file"}})],1),e("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t.file.name))])]),e("div",{staticClass:"mdui-chip mdui-m-l-2"},[e("span",{staticClass:"mdui-chip-icon mdui-color-yellow-600"},[e("mdui-icon",{attrs:{type:"crop_free"}})],1),e("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t._f("fileSize")(t.file.size)))])]),e("div",{staticClass:"mdui-chip mdui-m-l-2"},[e("span",{staticClass:"mdui-chip-icon mdui-color-green-600"},[e("mdui-icon",{attrs:{type:"insert_drive_file"}})],1),e("span",{staticClass:"mdui-chip-title"},[t._v(t._s(t.file.type))])])]:t._e()],2),t.blobURL?e("img",{staticClass:"mdui-shadow-3",staticStyle:{"max-height":"200px","max-width":"100%"},attrs:{src:t.blobURL,alt:"预览图片"}}):t._e(),e("div",{staticClass:"mdui-m-y-2"},[e("mdui-btn",{staticClass:"mdui-m-r-2",attrs:{color:"theme-accent",disabled:!t.file,raised:"",ripple:""},on:{click:t.getDataURI}},[e("mdui-icon",{attrs:{type:"keyboard_arrow_down"}}),t._v("转换 ")],1)],1),e("editor",{staticClass:"line-10",attrs:{label:"Data URI","line-numbers":!1,"read-only":""},model:{value:t.dataURI,callback:function(i){t.dataURI=i},expression:"dataURI"}})],1),e("div",{attrs:{id:"uri2image"}},[e("editor",{staticClass:"line-10",attrs:{label:"Data URI","line-numbers":!1},model:{value:t.inputURI,callback:function(i){t.inputURI=i},expression:"inputURI"}}),e("div",{staticClass:"mdui-m-y-2"},[e("mdui-btn",{staticClass:"mdui-m-r-2",attrs:{color:"theme-accent",disabled:!t.file,raised:"",ripple:""},on:{click:t.checkURI}},[e("mdui-icon",{attrs:{type:"keyboard_arrow_down"}}),t._v("转换 ")],1)],1),t.imgURI?e("img",{staticClass:"mdui-shadow-3",staticStyle:{"max-height":"200px","max-width":"100%"},attrs:{src:t.imgURI,alt:"预览图片"},on:{error:t.loadError}}):t._e()],1)])},r=[],n=(e("99af"),e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("e762")),s={name:"DataUri",data:function(){return{tab:null,file:null,dataURI:"",inputURI:"",imgURI:""}},computed:{blobURL:function(){return this.file?window.URL.createObjectURL(this.file):""}},mounted:function(){this.tab=new this.$Tab(this.$refs.tab)},methods:{selectImage:function(t){this.file=t.target.files[0]},getDataURI:function(){var t=this,i=new FileReader;i.readAsBinaryString(this.file),i.onload=function(){t.dataURI="data:".concat(t.file.type,";base64,").concat(n["a"].btoa(String(i.result)))}},checkURI:function(){/^data:image\/.+;base64,/.test(this.inputURI)?this.imgURI=this.inputURI:this.$snackbar("Data URI 格式错误")},loadError:function(){this.imgURI="",this.$snackbar("Data URI 无法解析")}}},o=s,c=e("2877"),l=Object(c["a"])(o,a,r,!1,null,null,null);i["default"]=l.exports},e762:function(t,i,e){"use strict";e.d(i,"c",(function(){return U})),e.d(i,"b",(function(){return v})),e.d(i,"a",(function(){return A}));const a="3.4.1",r=a,n="function"===typeof Buffer,s="function"===typeof atob,o="function"===typeof btoa,c=String.fromCharCode.bind(String),l="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,i=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(i)),u=t=>t.replace(/[+\/]/g,t=>"+"==t?"-":"_").replace(/=+$/m,""),d=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),f=o?t=>btoa(t):n?t=>Buffer.from(t,"binary").toString("base64"):t=>{if(t.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return p(l(t,t=>t.charCodeAt(0)))},m=n?t=>Buffer.from(t).toString("base64"):t=>{const i=4096;let e=[];for(let a=0,r=t.length;a<r;a+=i)e.push(c.apply(null,t.subarray(a,a+i)));return btoa(e.join(""))},p=(t,i=!1)=>i?u(m(t)):m(t),b=t=>unescape(encodeURIComponent(t)),h=n?t=>Buffer.from(t,"utf8").toString("base64"):t=>f(b(t)),U=(t,i=!1)=>i?u(h(t)):h(t),R=t=>U(t,!0),g=t=>decodeURIComponent(escape(t)),y=s?t=>atob(d(t)):n?t=>Buffer.from(t,"base64").toString("binary"):t=>{throw ReferenceError("neither `atob` nor `Buffer` is available ")},I=n?t=>Buffer.from(t,"base64").toString("utf8"):t=>g(y(t)),C=t=>d(t.replace(/[-_]/g,t=>"-"==t?"+":"/")),v=t=>I(C(t)),_=n?t=>l(Buffer.from(C(t),"base64")):t=>l(y(C(t)),t=>t.charCodeAt(0)),w=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),B=function(){const t=(t,i)=>Object.defineProperty(String.prototype,t,w(i));t("fromBase64",(function(){return v(this)})),t("toBase64",(function(t){return U(this,t)})),t("toBase64URI",(function(){return U(this,!0)})),t("toBase64URL",(function(){return U(this,!0)})),t("toUint8Array",(function(){return _(this)}))},S=function(){const t=(t,i)=>Object.defineProperty(Uint8Array.prototype,t,w(i));t("toBase64",(function(t){return p(this,t)})),t("toBase64URI",(function(){return p(this,!0)})),t("toBase64URL",(function(){return p(this,!0)}))},x=()=>{B(),S()},A={version:a,VERSION:r,atob:y,btoa:f,fromBase64:v,toBase64:U,encode:U,encodeURI:R,encodeURL:R,utob:b,btou:g,decode:v,fromUint8Array:p,toUint8Array:_,extendString:B,extendUint8Array:S,extendBuiltins:x}}}]);
//# sourceMappingURL=chunk-2152ecf5.bd7c26ed.js.map