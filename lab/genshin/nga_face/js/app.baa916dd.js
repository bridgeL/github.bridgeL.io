(function(t){function n(n){for(var e,o,a=n[0],g=n[1],m=n[2],f=0,u=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(e in g)Object.prototype.hasOwnProperty.call(g,e)&&(t[e]=g[e]);s&&s(n);while(u.length)u.shift()();return c.push.apply(c,m||[]),i()}function i(){for(var t,n=0;n<c.length;n++){for(var i=c[n],e=!0,a=1;a<i.length;a++){var g=i[a];0!==r[g]&&(e=!1)}e&&(c.splice(n--,1),t=o(o.s=i[0]))}return t}var e={},r={app:0},c=[];function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,n,i){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(i,e,function(n){return t[n]}.bind(null,e));return i},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],g=a.push.bind(a);a.push=n,a=a.slice();for(var m=0;m<a.length;m++)n(a[m]);var s=g;c.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"034f":function(t,n,i){"use strict";i("85ec")},"56d7":function(t,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("8bbf"),r=i.n(e),c=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("div",[t._v(t._s(t.msg))]),i("div",{staticClass:"container"},t._l(t.items,(function(n,e){return i("div",{key:e,staticClass:"face",attrs:{"data-clipboard-text":"[img]"+n.url+"[/img]"},on:{click:t.copy}},[i("img",{attrs:{src:n.src}})])})),0)])},o=[],a={name:"App",data:function(){return{items:i("8e00"),msg:"点表情复制代码地址"}},components:{},methods:{copy:function(){var t=this,n=new this.Clipboard(".face");n.on("success",(function(i){t.msg="复制成功",alert("复制成功"),console.log(i),n.destroy()})),n.on("error",(function(t){alert("该浏览器不支持自动复制"),console.log(t),n.destroy()}))}}},g=a,m=(i("034f"),i("2877")),s=Object(m["a"])(g,c,o,!1,null,null,null),f=s.exports,u=i("b311"),l=i.n(u);r.a.config.productionTip=!1,r.a.prototype.Clipboard=l.a,new r.a({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,n,i){},"8bbf":function(t,n){t.exports=Vue},"8e00":function(t){t.exports=JSON.parse('[{"src":"img/0.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-nohK7T8S35-2y.gif"},{"src":"img/1.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-l6ldK8T8S30-2w.gif"},{"src":"img/2.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-9cowK8T8S3d-2v.gif"},{"src":"img/3.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-ksfkK8T8S2x-2v.gif"},{"src":"img/4.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-63heK8T8S31-2w.gif"},{"src":"img/5.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-gqnK7T8S32-2x.gif"},{"src":"img/6.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-gd1xK8T8S3h-2w.gif"},{"src":"img/7.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-jpf7K7T8S3b-2x.gif"},{"src":"img/8.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-890tK7T8S3g-2x.gif"},{"src":"img/9.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-lc5fK8T8S38-2x.gif"},{"src":"img/10.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qjdc-9m3xK7T8S3c-2x.gif"},{"src":"img/11.gif","url":"http://img.nga.178.com/attachments/mon_202202/19/i2Qmosi-g6q0K8T8S3f-2y.gif"},{"src":"img/12.gif","url":"http://img.nga.178.com/attachments/mon_202202/20/i2Qjdd-ibwgK7T8S37-2x.gif"},{"src":"img/13.gif","url":"http://img.nga.178.com/attachments/mon_202202/20/i2Qjdd-jeqxK7T8S3a-2x.gif"},{"src":"img/14.gif","url":"http://img.nga.178.com/attachments/mon_202202/20/i2Qjdd-8vi7K9T8S3g-2x.gif"},{"src":"img/15.gif","url":"http://img.nga.178.com/attachments/mon_202202/20/i2Qjdd-4dbnK7T8S39-2x.gif"}]')}});