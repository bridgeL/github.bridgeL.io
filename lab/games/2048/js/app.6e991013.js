(function(t){function e(e){for(var r,o,s=e[0],u=e[1],f=e[2],h=0,p=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},5340:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),i=n.n(r),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Game")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(t._s(t.msg))]),n("div",{staticClass:"container"},t._l(t.game.map,(function(e,r){return n("div",{key:r,staticClass:"item",class:"num"+e,style:{fontSize:t.getFontSize(e)+"px"}},[t._v(" "+t._s(e)+" ")])})),0),n("div",[t._v("总步数:"+t._s(t.cnt))])])},u=[],f=n("d4ec"),c=n("bee2"),h=(n("d81d"),n("ac1f"),n("00b4"),n("d3b7"),n("159b"),{name:"Game",data:function(){return{game:new p,cnt:0}},mounted:function(){this.enterKeyup()},destroyed:function(){this.enterKeyupDestroyed()},methods:{enterKey:function(t){var e=this.game.user_slip(t.key);e&&this.cnt++,this.$forceUpdate()},enterKeyupDestroyed:function(){document.removeEventListener("keyup",this.enterKey)},enterKeyup:function(){document.addEventListener("keyup",this.enterKey)},getFontSize:function(t){return t<=8192?30:t<=65536?24:16}},computed:{msg:function(){return 0==this.game.stop?"游戏开始":"游戏结束,按R重新游玩"}}}),p=function(){function t(){Object(f["a"])(this,t),this.map=[],this.start(),this.test=0,this.funcNum=2}return Object(c["a"])(t,[{key:"start",value:function(){this.stop=0;for(var t=0;t<16;t++)this.map[t]=0;this.create_point(this.map)}},{key:"slip",value:function(t,e){var n,r=0,i=[0,0,0,0],a=[0,1,2,3];"s"!=t&&"d"!=t||(a=[3,2,1,0]),n="w"==t||"s"==t?function(t,e,n){return 4*t[n]+e}:function(t,e,n){return 4*e+t[n]};for(var o=0;o<4;o++){for(var s=0;s<4;s++)i[s]=e[n(a,o,s)];var u=this.combine(i),f=u[0];0==r?u[1]&&(r=u[1]):2==r&&1==u[1]&&(r=1);for(var c=0;c<4;c++)e[n(a,o,c)]=f[c]}return r}},{key:"combine",value:function(t){for(var e=[],n=0,r=0;n<4;n++)e[n]=0,t[n]>0&&(e[r++]=t[n]);for(var i=0,a=0;a<4;a++)t[a]!=e[a]&&(i=1);for(var o=0,s=1;s<4;s++){if(0==e[s])break;if(e[s]==e[s-1]){e[s-1]*=2;for(var u=s;u<3;u++)e[u]=e[u+1];e[3]=0,o=1;break}}var f=0;return o?f=1:i&&(f=2),[e,f]}},{key:"user_slip",value:function(t){if("t"==t||"T"==t){for(var e=0;e<16;e++)this.map[e]=this.test;return this.test*=2,0==this.test?this.test=2:this.test>65536&&(this.test=0),0}if("R"!=t&&"r"!=t||this.start(this.map),this.stop)return 0;if("W"==t||"w"==t||"ArrowUp"==t)t="w";else if("A"==t||"a"==t||"ArrowLeft"==t)t="a";else if("S"==t||"s"==t||"ArrowDown"==t)t="s";else{if("D"!=t&&"d"!=t&&"ArrowRight"!=t)return 0;t="d"}var n=this.slip(t,this.map);if(0==n)return this.check(),0;if(1==n)while(1==n)n=this.slip(t,this.map);return this.create_point(),this.check(),1}},{key:"check",value:function(){for(var t=0,e=[],n=0;n<16;n++)e[n]=this.map[n],0==this.map[n]&&t++;if(0==t){for(var r=0,i=["w","s","a","d"],a=0;a<4;a++)if(this.slip(i[a],e)){r=1;break}0==r&&(this.stop=1,this.msg="游戏结束")}}},{key:"new_point_val_1",value:function(){var t=2;this.map.forEach((function(e){e&&(t=Math.max(t,e))}));var e,n,r=[2,2,2,2,2,4],i=[2,2,4,4,8,16],a=0,o=t;while(o>2)a++,o/=2;a<6?(e=r[a],n=i[a]):(e=t/32,n=t/8),this.map.forEach((function(t){t&&(e=Math.min(e,t))}));var s=e,u=[s];while(s<n)s*=2,u.push(s);return u[Math.floor(Math.random()*u.length)]}},{key:"new_point_val_2",value:function(){var t,e,n=2;this.map.forEach((function(t){t&&(n=Math.max(n,t))})),t=Math.max(2,n/32),e=Math.max(2,n/8),this.map.forEach((function(e){e&&(t=Math.min(t,e))}));var r=t,i=[r];while(r<e)r*=2,i.push(r);return i[Math.floor(Math.random()*i.length)]}},{key:"new_point_val_3",value:function(){var t=2;this.map.forEach((function(e){e&&(t=Math.max(t,e))}));var e=t;this.map.forEach((function(t){t&&(e=Math.min(e,t))}));for(var n=2,r=64,i=4,a=0;a<2;a++)t>r&&e>i/2&&(n=i),r*=4,i*=2;for(var o=[],s=0;s<5;s++)if(o.push(n),n*=2,32*n>t)break;return o[Math.floor(Math.random()*o.length)]}},{key:"create_point",value:function(){var t=0;this.map.forEach((function(e){0==e&&t++}));var e=Math.floor(Math.random()*t)+1,n=0;this.map.some((function(t,r){if(0==t&&e--,0==e)return n=r,!0}));var r=2;0==this.funcNum?r=this.new_point_val_1():1==this.funcNum?r=this.new_point_val_2():2==this.funcNum&&(r=this.new_point_val_3()),this.map[n]=r}}]),t}(),l=h,v=(n("f1f3"),n("2877")),m=Object(v["a"])(l,s,u,!1,null,"b9055ff6",null),d=m.exports,y={name:"App",components:{Game:d}},_=y,b=(n("034f"),Object(v["a"])(_,a,o,!1,null,null,null)),w=b.exports;i.a.config.productionTip=!1,new i.a({render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,n){},"8bbf":function(t,e){t.exports=Vue},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},f1f3:function(t,e,n){"use strict";n("5340")}});
//# sourceMappingURL=app.6e991013.js.map