(function(e){function t(t){for(var n,i,s=t[0],a=t[1],c=t[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&p.push(l[i][0]),l[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,s=1;s<o.length;s++){var a=o[s];0!==l[a]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},l={app:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=a;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"2b04":function(e){e.exports=JSON.parse('[["blue","gray","red","gray"],["pink","purple","greenyellow","olive"],["olive","pink","pink","blue"],["gray","orange","gray","orange"],["orange","yellow","lightblue","red"],["blue","navy","green","purple"],["green","olive","yellow","red"],["navy","greenyellow","orange","green"],["pink","lightblue","greenyellow","green"],["lightblue","red","olive","greenyellow"],["lightblue","yellow","blue","navy"],["purple","navy","purple","yellow"],[],[]]')},"4bcd":function(e,t,o){"use strict";o("fe40")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("p",[e._v("这是一个模板")]),n("BottleGame")],1)},r=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("FloatBottle",{attrs:{bottle:e.bottleFloat}}),o("div",{staticClass:"container"},e._l(e.bottleArr,(function(t,n){return o("Bottle",{key:n,attrs:{bottle_click:e.bottle_click,bottle:t}})})),1)],1)},s=[],a=(o("d3b7"),o("fb6a"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"area",on:{click:function(t){return e.bottle_click(e.bottle.id)}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.bottle.show,expression:"bottle.show"}],staticClass:"bottle"},e._l(e.bottle.wines,(function(e,t){return o("div",{key:t,staticClass:"wine",style:{backgroundColor:e}})})),0)])}),c=[],u={name:"Bottle",props:["bottle_click","bottle"]},f=u,p=(o("da27"),o("2877")),d=Object(p["a"])(f,a,c,!1,null,"0699143d",null),b=d.exports,h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.bottle.show,expression:"bottle.show"}]},[o("div",{staticClass:"area",style:{left:e.left,top:e.top}},[o("div",{staticClass:"bottle"},e._l(e.bottle.wines,(function(e,t){return o("div",{key:t,staticClass:"wine",style:{backgroundColor:e}})})),0)])])},v=[],w={name:"FloatBottle",props:["bottle"],data:function(){return{left:0,top:0}},mounted:function(){document.addEventListener("mousemove",this.set_pos)},destroyed:function(){document.removeEventListener("mousemove",this.set_pos)},methods:{set_pos:function(e){this.left=e.clientX+10+"px",this.top=e.clientY+10+"px"}}},g=w,y=(o("915e"),Object(p["a"])(g,h,v,!1,null,"d9ae3fdc",null)),m=y.exports,_=o("e1bd"),k={name:"BottleGame",components:{Bottle:b,FloatBottle:m},data:function(){return{bottleArr:[],row:2,col:7,bottleFloat:{id:"",show:!1,wines:[]}}},created:function(){for(var e=o("2b04"),t=0;t<this.row*this.col;t++){var n={id:Object(_["a"])(),show:!0,wines:e[t]};this.bottleArr.push(n)}},methods:{bottle_click:function(e){var t=this;console.log(e),this.bottleArr.some((function(o){if(o.id==e)return o.show?t.bottleFloat.show?o.wines.length<4&&t.bottleFloat.wines.length>0&&o.wines.unshift(t.bottleFloat.wines.shift()):(t.bottleFloat={id:o.id,show:!0,wines:o.wines.slice()},o.show=!1):(t.bottleFloat.show=!1,o.show=!0,o.wines=t.bottleFloat.wines),!0}))}}},O=k,x=(o("4bcd"),Object(p["a"])(O,i,s,!1,null,"ac27c384",null)),j=x.exports,F={name:"App",components:{BottleGame:j},data:function(){return{}},methods:{}},B=F,C=(o("034f"),Object(p["a"])(B,l,r,!1,null,null,null)),P=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,o){},"915e":function(e,t,o){"use strict";o("e4d6")},ccb6:function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},da27:function(e,t,o){"use strict";o("ccb6")},e4d6:function(e,t,o){},fe40:function(e,t,o){}});
//# sourceMappingURL=app.ab2b6232.js.map