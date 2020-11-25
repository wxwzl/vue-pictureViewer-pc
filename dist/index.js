!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-picture-viewer-pc",[],e):"object"==typeof exports?exports["vue-picture-viewer-pc"]=e():t["vue-picture-viewer-pc"]=e()}(self,(function(){return function(){var t={447:function(t,e,n){"use strict";Object.defineProperty(e,"X",{value:!0});var r=o(n(902)),i=o(n(239));function o(t){return t&&t.__esModule?t:{default:t}}e.Z={name:"pictureViewer",props:{images:{type:Array,default:function(){return[]}},current:{type:Number,default:0},visible:{type:Boolean,default:!1}},watch:{images:{handler:function(){this.setImageUrl()},immediate:!0,deep:!0},current:function(){this.currentIndex=this.current,this.setImageUrl()}},data:function(){return{currentImgUrl:"",currentIndex:0,rotateIndex:0,imgNode:null}},computed:{show:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t)}}},mounted:function(){this.setImageUrl(),this.bindEvent()},methods:{bindEvent:function(){var t=this,e=this.$refs.post;e.addEventListener("dragover",(function(t){t.preventDefault()}),!1),e.addEventListener("drop",(function(e){var n=e.dataTransfer.getData("Text");try{n=JSON.parse(n)}catch(e){console.log(e)}t.setStyle(t.imgNode,{top:e.offsetY-n.offsetY+"px",left:e.offsetX-n.offsetX+"px","margin-top":0,"margin-left":0})}),!1)},before:function(){this.currentIndex<=0||(this.currentIndex>=1?this.currentIndex--:this.currentIndex=0,this.setImageUrl())},next:function(){this.currentIndex>=this.images.length-1||(this.currentIndex<this.images.length-1?this.currentIndex++:this.currentIndex=this.images.length-1,this.setImageUrl())},close:function(){this.show=!1},setImageUrl:function(){if(this.images[this.currentIndex]){this.$emit("update:current",this.currentIndex);var t=new Image;t.src=this.images[this.currentIndex],t.onload=this.imgLoaded.bind(this),t.ondragstart=function(t){var e=t.offsetX,n=t.offsetY;t.dataTransfer.setData("Text",(0,i.default)({offsetX:e,offsetY:n}))}}},imgLoaded:function(t){this.imgNode&&this.imgNode.remove();var e=this.imgNode=t.target,n=this.getStyle(this.$refs.post,"width"),r=this.getStyle(this.$refs.post,"height"),i=this.getNumberFromPx(n),o=this.getNumberFromPx(r),s=e.width,a=e.height,c=s/i,u=a/o,l=.8,f=s,d=a;(u>l||c>l)&&u>c&&(d=a/u*l,f=s/u*l),this.setStyle(e,{width:f+"px",height:d+"px","vertical-align":"middle",position:"absolute",top:0,left:0,right:0,bottom:0,margin:"auto auto"}),e.draggable=!0,this.$refs.post.append(e)},getStyle:function(t,e){if(!t||!e)return null;"float"===e&&(e="cssFloat");var n=t.style;try{var r=n[e];if(r)return r;var i=document.defaultView.getComputedStyle(t,"");return i?i[e]:""}catch(t){return n[e]}},setStyle:function(t,e,n){var i=this;t&&e&&(e instanceof CSSStyleDeclaration||this.isObject(e)?(0,r.default)(e).forEach((function(n){i.setStyle(t,n,e[n])})):t.style[e]=n)},magnify:function(){if(this.imgNode){var t=this.getNumberFromPx(this.imgNode.width),e=this.getNumberFromPx(this.imgNode.height);this.setStyle(this.imgNode,"width",1.1*t+"px"),this.setStyle(this.imgNode,"height",1.1*e+"px")}},deflate:function(){if(this.imgNode){var t=this.getNumberFromPx(this.imgNode.width),e=this.getNumberFromPx(this.imgNode.height);this.setStyle(this.imgNode,"width",.9*t+"px"),this.setStyle(this.imgNode,"height",.9*e+"px")}},getNumberFromPx:function(t){return t?isNaN(t)?t.substr(0,t.length-2):t:0},handLeft:function(){this.rotateIndex--,this.rotateIndex=this.rotateIndex%4,this.setRotateStyle()},handRight:function(){this.rotateIndex++,this.rotateIndex=this.rotateIndex%4,this.setRotateStyle()},setRotateStyle:function(){this.setStyle(this.imgNode,"transform","rotate("+90*this.rotateIndex+"deg)")},isObject:function(t){return"[object Object]"==Object.prototype.toString.call(t)},getTarget:function(t){return t.target}}}},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=(r=n(487))&&r.__esModule?r:{default:r};i.default.install=function(t){t.component("pictureViewer",i.default)},e.default=i.default},239:function(t,e,n){t.exports={default:n(59),__esModule:!0}},902:function(t,e,n){t.exports={default:n(358),__esModule:!0}},59:function(t,e,n){var r=n(731),i=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},358:function(t,e,n){n(559),t.exports=n(731).Object.keys},449:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},504:function(t,e,n){var r=n(97);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},389:function(t,e,n){var r=n(874),i=n(317),o=n(838);t.exports=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},499:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},731:function(t){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},821:function(t,e,n){var r=n(449);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},605:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},810:function(t,e,n){t.exports=!n(777)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},825:function(t,e,n){var r=n(97),i=n(362).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},568:function(t){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},901:function(t,e,n){var r=n(362),i=n(731),o=n(821),s=n(519),a=n(571),c=function(t,e,n){var u,l,f,d=t&c.F,h=t&c.G,A=t&c.S,p=t&c.P,m=t&c.B,g=t&c.W,v=h?i:i[e]||(i[e]={}),b=v.prototype,x=h?r:A?r[e]:(r[e]||{}).prototype;for(u in h&&(n=e),n)(l=!d&&x&&void 0!==x[u])&&a(v,u)||(f=l?x[u]:n[u],v[u]=h&&"function"!=typeof x[u]?n[u]:m&&l?o(f,r):g&&x[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):p&&"function"==typeof f?o(Function.call,f):f,p&&((v.virtual||(v.virtual={}))[u]=f,t&c.R&&b&&!b[u]&&s(b,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},777:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},362:function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},571:function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},519:function(t,e,n){var r=n(738),i=n(51);t.exports=n(810)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},254:function(t,e,n){t.exports=!n(810)&&!n(777)((function(){return 7!=Object.defineProperty(n(825)("div"),"a",{get:function(){return 7}}).a}))},312:function(t,e,n){var r=n(499);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},97:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},346:function(t){t.exports=!0},738:function(t,e,n){var r=n(504),i=n(254),o=n(408),s=Object.defineProperty;e.f=n(810)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},152:function(t,e,n){var r=n(571),i=n(874),o=n(389)(!1),s=n(210)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},656:function(t,e,n){var r=n(152),i=n(568);t.exports=Object.keys||function(t){return r(t,i)}},903:function(t,e,n){var r=n(901),i=n(731),o=n(777);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",s)}},51:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},210:function(t,e,n){var r=n(151)("keys"),i=n(535);t.exports=function(t){return r[t]||(r[t]=i(t))}},151:function(t,e,n){var r=n(731),i=n(362),o="__core-js_shared__",s=i[o]||(i[o]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(346)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},838:function(t,e,n){var r=n(485),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},485:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},874:function(t,e,n){var r=n(312),i=n(605);t.exports=function(t){return r(i(t))}},317:function(t,e,n){var r=n(485),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},411:function(t,e,n){var r=n(605);t.exports=function(t){return Object(r(t))}},408:function(t,e,n){var r=n(97);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},535:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},559:function(t,e,n){var r=n(411),i=n(656);n(903)("keys",(function(){return function(t){return i(r(t))}}))},547:function(t,e,n){"use strict";var r=n(15),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([t.id,"\n*[data-v-4c613c9e] {\n  box-sizing: border-box;\n}\n.pictureViewer[data-v-4c613c9e] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n}\n.mask[data-v-4c613c9e] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: inherit;\n}\n.container[data-v-4c613c9e] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width:100%;\n  z-index: 10001;\n  padding-bottom: 50px;\n}\n.side[data-v-4c613c9e] {\n  position: fixed;\n  z-index: 10002;\n  bottom: 0;\n  height: 35px;\n  top: 0;\n  margin: auto 0;\n  cursor: pointer;\n}\n.side.left[data-v-4c613c9e] {\n  left: 50px;\n}\n.side.right[data-v-4c613c9e] {\n  right: 50px;\n}\n.bottom[data-v-4c613c9e] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  height: 50px;\n  bottom: 0;\n  z-index: 10001;\n  text-align: center;\n}\nbutton[data-v-4c613c9e] {\n  vertical-align: middle;\n  cursor: pointer;\n}\n.imagePost[data-v-4c613c9e] {\n  overflow: hidden;\n  height: 100%;\n  position: relative;\n}\n.imagePost img[data-v-4c613c9e] {\n  position: absolute;\n  /* left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto auto; */\n}\n.close[data-v-4c613c9e] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  background-color: #fff;\n  z-index: 10001;\n  cursor: pointer;\n}\n","",{version:3,sources:["webpack://./packages/src/pictureViewer.vue"],names:[],mappings:";AA+QA;EACA,sBAAA;AACA;AACA;EACA,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;AACA;AACA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,sBAAA;EACA,aAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,cAAA;EACA,oBAAA;AACA;AACA;EACA,eAAA;EACA,cAAA;EACA,SAAA;EACA,YAAA;EACA,MAAA;EACA,cAAA;EACA,eAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,eAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,SAAA;EACA,cAAA;EACA,kBAAA;AACA;AACA;EACA,sBAAA;EACA,eAAA;AACA;AACA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;EACA;;;;sBAIA;AACA;AACA;EACA,eAAA;EACA,MAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,eAAA;AACA",sourcesContent:['<template>\r\n  <div class="pictureViewer" v-show="show">\r\n    <div class="mask"></div>\r\n    <div class="container">\r\n      <div ref="post" class="imagePost">\r\n        \x3c!-- <img ref="img" :src="currentImgUrl" /> --\x3e\r\n      </div>\r\n    </div>\r\n    <slot name="before">\r\n      <button class="side left" @click="before">上一张</button>\r\n    </slot>\r\n    <slot name="next">\r\n      <button class="side right" @click="next">下一张</button>\r\n    </slot>\r\n    <slot name="close">\r\n      <button class="close" @click="close">X</button>\r\n    </slot>\r\n\r\n    \x3c!-- <div class="side left" @click="before">\r\n      <div class="vertical-center"></div>\r\n      \r\n    </div> --\x3e\r\n    \x3c!-- <div class="side right" @click="next">\r\n      <div class="vertical-center"></div>\r\n      \r\n    </div> --\x3e\r\n    <div class="bottom">\r\n      <slot name="bottom">\r\n        <button @click="magnify">+</button>\r\n        <button @click="deflate">-</button>\r\n        <button @click="handLeft">向左旋转</button>\r\n        <button @click="handRight">向右旋转</button>\r\n      </slot>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\n  export default {\r\n    name: "pictureViewer",\r\n    props: {\r\n      images: {\r\n        type: Array,\r\n        default: function () {\r\n          return [];\r\n        },\r\n      },\r\n      current: {\r\n        type: Number,\r\n        default: 0,\r\n      },\r\n      visible: {\r\n        type: Boolean,\r\n        default: false,\r\n      },\r\n    },\r\n    watch: {\r\n      images: {\r\n        handler() {\r\n           this.setImageUrl();\r\n        },\r\n        immediate: true,\r\n        deep: true,\r\n      },\r\n      current(){\r\n        this.currentIndex=this.current;\r\n        this.setImageUrl();\r\n      }\r\n    },\r\n    data() {\r\n      return {\r\n        currentImgUrl: "",\r\n        currentIndex: 0,\r\n        rotateIndex: 0,\r\n        imgNode: null,\r\n      };\r\n    },\r\n    computed: {\r\n      show: {\r\n        get() {\r\n          return this.visible;\r\n        },\r\n        set(val) {\r\n          this.$emit("update:visible", val);\r\n        },\r\n      },\r\n    },\r\n    mounted() {\r\n      this.setImageUrl();\r\n      this.bindEvent();\r\n    },\r\n    methods: {\r\n      bindEvent() {\r\n        let postNode = this.$refs.post;\r\n        postNode.addEventListener(\r\n          "dragover",\r\n          (e) => {\r\n            e.preventDefault();\r\n          },\r\n          false\r\n        );\r\n        postNode.addEventListener(\r\n          "drop",\r\n          (e) => {\r\n            let data = e.dataTransfer.getData("Text");\r\n            try {\r\n              data = JSON.parse(data);\r\n            } catch (e) {\r\n              console.log(e);\r\n            }\r\n            this.setStyle(this.imgNode, {\r\n              top: e.offsetY - data.offsetY + "px",\r\n              left: e.offsetX - data.offsetX + "px",\r\n              "margin-top": 0,\r\n              "margin-left": 0,\r\n            });\r\n          },\r\n          false\r\n        );\r\n      },\r\n      before() {\r\n        if (this.currentIndex <= 0) {\r\n          return;\r\n        }\r\n        if (this.currentIndex >= 1) {\r\n          this.currentIndex--;\r\n        } else {\r\n          this.currentIndex = 0;\r\n        }\r\n        this.setImageUrl();\r\n      },\r\n      next() {\r\n        if (this.currentIndex >= this.images.length - 1) {\r\n          return;\r\n        }\r\n        if (this.currentIndex < this.images.length - 1) {\r\n          this.currentIndex++;\r\n        } else {\r\n          this.currentIndex = this.images.length - 1;\r\n        }\r\n        this.setImageUrl();\r\n      },\r\n      close() {\r\n        this.show = false;\r\n      },\r\n      setImageUrl() {\r\n        if(!this.images[this.currentIndex]){\r\n          return ;\r\n        }\r\n        this.$emit("update:current", this.currentIndex);\r\n        let image = new Image();\r\n        image.src = this.images[this.currentIndex];\r\n        image.onload = this.imgLoaded.bind(this);\r\n        image.ondragstart = function (e) {\r\n          // e.preventDefault();\r\n          let offsetX = e.offsetX;\r\n          let offsetY = e.offsetY;\r\n          e.dataTransfer.setData("Text", JSON.stringify({ offsetX: offsetX, offsetY: offsetY }));\r\n        };\r\n      },\r\n      imgLoaded(e) {\r\n        if (this.imgNode) {\r\n          this.imgNode.remove();\r\n        }\r\n        let imgNode = (this.imgNode = e.target);\r\n        let maxWidthStr = this.getStyle(this.$refs.post, "width");\r\n        let maxHeightStr = this.getStyle(this.$refs.post, "height");\r\n        let maxWidth = this.getNumberFromPx(maxWidthStr);\r\n        let maxHeight = this.getNumberFromPx(maxHeightStr);\r\n        let imgWidth = imgNode.width;\r\n        let imgHeight = imgNode.height;\r\n        let widthRadio = imgWidth / maxWidth;\r\n        let heightRadio = imgHeight / maxHeight;\r\n        let radio = 0.8;\r\n        let width = imgWidth;\r\n        let height = imgHeight;\r\n        if (heightRadio > radio || widthRadio > radio) {\r\n          if (heightRadio > widthRadio) {\r\n            height = (imgHeight / heightRadio) * radio;\r\n            width = (imgWidth / heightRadio) * radio;\r\n          }\r\n        }\r\n        this.setStyle(imgNode, {\r\n          width: width + "px",\r\n          height: height + "px",\r\n          "vertical-align": "middle",\r\n          position: "absolute",\r\n          top: 0,\r\n          left: 0,\r\n          right: 0,\r\n          bottom: 0,\r\n          margin: "auto auto",\r\n        });\r\n        imgNode.draggable = true;\r\n        this.$refs.post.append(imgNode);\r\n      },\r\n      getStyle(element, styleName) {\r\n        if (!element || !styleName) return null;\r\n        // styleName = camelize(styleName);\r\n        if (styleName === "float") {\r\n          styleName = "cssFloat";\r\n        }\r\n        const styleObj = element.style;\r\n        try {\r\n          const style = styleObj[styleName];\r\n          if (style) return style;\r\n          const computed = document.defaultView.getComputedStyle(element, "");\r\n          return computed ? computed[styleName] : "";\r\n        } catch (e) {\r\n          return styleObj[styleName];\r\n        }\r\n      },\r\n      setStyle(element, styleName, value) {\r\n        if (!element || !styleName) return;\r\n\r\n        if (styleName instanceof CSSStyleDeclaration || this.isObject(styleName)) {\r\n          Object.keys(styleName).forEach((prop) => {\r\n            this.setStyle(element, prop, styleName[prop]);\r\n          });\r\n        } else {\r\n          element.style[styleName] = value;\r\n        }\r\n      },\r\n      magnify() {\r\n        if (this.imgNode) {\r\n          let width = this.getNumberFromPx(this.imgNode.width);\r\n          let height = this.getNumberFromPx(this.imgNode.height);\r\n          this.setStyle(this.imgNode, "width", width * 1.1 + "px");\r\n          this.setStyle(this.imgNode, "height", height * 1.1 + "px");\r\n        }\r\n      },\r\n      deflate() {\r\n        if (this.imgNode) {\r\n          let width = this.getNumberFromPx(this.imgNode.width);\r\n          let height = this.getNumberFromPx(this.imgNode.height);\r\n          this.setStyle(this.imgNode, "width", width * 0.9 + "px");\r\n          this.setStyle(this.imgNode, "height", height * 0.9 + "px");\r\n        }\r\n      },\r\n      getNumberFromPx(str) {\r\n        if (str) {\r\n          if (isNaN(str)) {\r\n            return str.substr(0, str.length - 2);\r\n          } else {\r\n            return str;\r\n          }\r\n        }\r\n        return 0;\r\n      },\r\n      handLeft() {\r\n        this.rotateIndex--;\r\n        this.rotateIndex = this.rotateIndex % 4;\r\n        this.setRotateStyle();\r\n      },\r\n      handRight() {\r\n        this.rotateIndex++;\r\n        this.rotateIndex = this.rotateIndex % 4;\r\n        this.setRotateStyle();\r\n      },\r\n      setRotateStyle() {\r\n        this.setStyle(this.imgNode, "transform", "rotate(" + this.rotateIndex * 90 + "deg)");\r\n      },\r\n      isObject(obj) {\r\n        return Object.prototype.toString.call(obj) == "[object Object]";\r\n      },\r\n      getTarget(e) {\r\n        return e.target;\r\n      },\r\n    },\r\n  };\r\n<\/script>\r\n<style scoped>\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  .pictureViewer {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1000;\r\n  }\r\n  .mask {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #000;\r\n    opacity: 0.75;\r\n    z-index: inherit;\r\n  }\r\n  .container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    width:100%;\r\n    z-index: 10001;\r\n    padding-bottom: 50px;\r\n  }\r\n  .side {\r\n    position: fixed;\r\n    z-index: 10002;\r\n    bottom: 0;\r\n    height: 35px;\r\n    top: 0;\r\n    margin: auto 0;\r\n    cursor: pointer;\r\n  }\r\n  .side.left {\r\n    left: 50px;\r\n  }\r\n  .side.right {\r\n    right: 50px;\r\n  }\r\n  .bottom {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    height: 50px;\r\n    bottom: 0;\r\n    z-index: 10001;\r\n    text-align: center;\r\n  }\r\n  button {\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n  }\r\n  .imagePost {\r\n    overflow: hidden;\r\n    height: 100%;\r\n    position: relative;\r\n  }\r\n  .imagePost img {\r\n    position: absolute;\r\n    /* left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto auto; */\r\n  }\r\n  .close {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #fff;\r\n    z-index: 10001;\r\n    cursor: pointer;\r\n  }\r\n</style>\r\n'],sourceRoot:""}]),e.Z=s},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},15:function(t){"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n,r,i=(r=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(n,r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],s=i[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),u="/*# ".concat(c," */"),l=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[o].concat(l).concat([u]).join("\n")}return[o].join("\n")}},379:function(t,e,n){"use strict";var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function s(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],i=0;i<t.length;i++){var a=t[i],c=e.base?a[0]+e.base:a[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var f=s(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(o[f].references++,o[f].updater(d)):o.push({identifier:l,updater:p(d,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,A=0;function p(t,e){var n,r,i;if(e.singleton){var o=A++;n=h||(h=c(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=c(e),r=d.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=s(n[r]);o[i].references--}for(var c=a(t,e),u=0;u<n.length;u++){var l=s(n[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}},487:function(t,e,n){"use strict";n.r(e),n.d(e,{__esModule:function(){return i.X},default:function(){return l}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"pictureViewer"},[n("div",{staticClass:"mask"}),t._v(" "),n("div",{staticClass:"container"},[n("div",{ref:"post",staticClass:"imagePost"})]),t._v(" "),t._t("before",[n("button",{staticClass:"side left",on:{click:t.before}},[t._v("上一张")])]),t._v(" "),t._t("next",[n("button",{staticClass:"side right",on:{click:t.next}},[t._v("下一张")])]),t._v(" "),t._t("close",[n("button",{staticClass:"close",on:{click:t.close}},[t._v("X")])]),t._v(" "),n("div",{staticClass:"bottom"},[t._t("bottom",[n("button",{on:{click:t.magnify}},[t._v("+")]),t._v(" "),n("button",{on:{click:t.deflate}},[t._v("-")]),t._v(" "),n("button",{on:{click:t.handLeft}},[t._v("向左旋转")]),t._v(" "),n("button",{on:{click:t.handRight}},[t._v("向右旋转")])])],2)],2)};r._withStripped=!0;var i=n(447),o=i.Z,s=n(379),a=n.n(s),c=n(547);a()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var u=function(t,e,n,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=[],u._compiled=!0),u._scopeId="data-v-4c613c9e",c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}(o,r);u.options.__file="packages/src/pictureViewer.vue";var l=u.exports}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(56)}()}));
//# sourceMappingURL=index.js.map