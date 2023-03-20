(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(81),r=t.n(a),i=t(645),o=t.n(i),c=t(667),d=t.n(c),s=new URL(t(541),t.b),l=new URL(t(194),t.b),p=new URL(t(560),t.b),u=new URL(t(877),t.b),m=new URL(t(408),t.b),h=new URL(t(957),t.b),f=o()(r()),g=d()(s),v=d()(l),b=d()(p),y=d()(u),w=d()(m),x=d()(h);f.push([e.id,'@font-face {\n  font-family: "MyFont";\n  src: url('+g+");\n  font-weight: 600;\n  font-style: normal;\n  letter-spacing: 3rem;\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  width: auto;\n  font-family: 'MyFont';\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  height: 4.5vh;\n  background-color: black;\n}\n\n.navBtn {\n  background-color: white;\n  border-top-right-radius: 1vh;\n  border-top-left-radius: 1vh;\n  margin-left: .5vw;\n  margin-right: .5vw;\n  padding: .5vh;\n  cursor: pointer;\n}\n\n.page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  align-items: center;\n  height: 89.5vh;\n  width: auto;\n}\n\np {\n  margin: 6vh;\n  margin-bottom: 10vh;\n  width: 25vw;\n  min-width: 300px;\n  height: auto;\n}\n\n.nameOfResturant {\n  margin: 2vh;\n}\n\n.cafeImage {\n  background: url("+v+");\n  height: 50vh;\n  width: auto;\n}\n\n.classicBlackImg {\n  background: url("+b+");\n  height: 20vh;\n  width: 7vw;\n}\n\n.cappuccinoImg {\n  background: url("+y+");\n  height: 20vh;\n  width: 7vw;\n}\n\n.latteImg {\n  background: url("+w+");\n  height: 20vh;\n  width: 7vw;\n}\n\n.contactImg {\n  background: url("+x+");\n  height: 40vh;\n  width: auto;\n}\n\n.menuContent {\n  height: 88vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.menuItem {\n  display: flex;\n  align-items: center;\n  width: 30vw;\n  height: auto;\n  padding: 4vh;\n}\n\n#middleItem {\n  border-bottom: 1px solid gray;\n  border-top: 1px solid gray;\n}\n\n.footer {\n  color: white;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6vh;\n  width: auto;\n}\n\nimg {\n  margin-right: 1.5vw;\n}",""]);const C=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var d=a(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},541:(e,n,t)=>{e.exports=t.p+"ec7b3653f4b64c1ea8e3.ttf"},560:(e,n,t)=>{e.exports=t.p+"f0f0c7a8a2dabe657053.jpg"},877:(e,n,t)=>{e.exports=t.p+"48b22b01b5786455945f.jpg"},408:(e,n,t)=>{e.exports=t.p+"c6c8f363f4f37907fd74.jpg"},194:(e,n,t)=>{e.exports=t.p+"6ea6fc603169954c6980.jpg"},957:(e,n,t)=>{e.exports=t.p+"ad665c50a4f707d7c0af.jpg"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),i=t(569),o=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(194);const g=()=>{const e=document.querySelector(".main");e.innerText="";const n=document.createElement("div"),t=document.createElement("h1");t.innerText="Cafe Milano",t.classList.add("nameOfResturant");const a=document.createElement("p");a.textContent="This coffee shop is my favorite place to hang and catch up on work. I really enjoy the quite atmosphere of this place.The coffee and pastries so delicious.";const r=new Image;r.src=f,r.classList.add("cafeImage"),n.appendChild(t),n.appendChild(r),n.appendChild(a),n.classList.add("page"),e.appendChild(n)};var v=t(560),b=t(877),y=t(408),w=t(957);const x=document.getElementById("content"),C=document.createElement("div"),L=document.createElement("div"),E=document.createElement("div"),I=document.createElement("div"),T=document.createElement("div"),k=document.createElement("div");L.textContent="Home",E.textContent="Menu",I.textContent="Contact",k.textContent="Seamus Quixote for the odin project current year",L.addEventListener("click",g),E.addEventListener("click",(()=>{const e=document.querySelector(".main");e.innerText="";const n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");i.innerText="A single sourced dark roast Brazilian bean.";const o=document.createElement("div");o.innerText="A freakin cappuccino whoa";const c=document.createElement("div");c.innerText="Hey. I'm a freakin latte!",n.classList.add("menuContent");const d=new Image;d.src=v,d.classList.add("classicBlackImg");const s=new Image;s.src=b,s.classList.add("cappuccinoImg");const l=new Image;l.src=y,l.classList.add("latteImg"),t.classList.add("menuItem"),a.classList.add("menuItem"),a.setAttribute("id","middleItem"),r.classList.add("menuItem"),t.appendChild(d),t.appendChild(i),n.appendChild(t),a.appendChild(s),a.appendChild(o),n.appendChild(a),r.appendChild(l),r.appendChild(c),n.appendChild(r),e.classList.add("page"),e.appendChild(n)})),I.addEventListener("click",(()=>{const e=document.querySelector(".main");e.innerText="";const n=document.createElement("h1");n.classList.add("nameOfResturant");const t=document.createElement("div");t.innerText="Email: swbrookshire@gmail.com ",t.classList.add("menuContent");const a=document.createElement("p");a.innerText="This webpage was created using only vanilla JavaScript. With all the navigation between the pages being rendered dynamically.";const r=new Image;r.src=w,r.classList.add("contactImg"),n.innerText="Contact",e.classList.add("page"),e.appendChild(n),e.appendChild(r),e.appendChild(t),e.appendChild(a)})),C.classList.add("header"),L.classList.add("navBtn"),E.classList.add("navBtn"),I.classList.add("navBtn"),T.classList.add("main"),k.classList.add("footer"),C.appendChild(L),C.appendChild(E),C.appendChild(I),x.appendChild(C),x.appendChild(T),x.appendChild(k),g()})()})();