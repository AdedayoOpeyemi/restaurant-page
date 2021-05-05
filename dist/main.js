(()=>{"use strict";var e={196:(e,n,t)=>{e.exports=t.p+"0709c3c8f3b1baebdd37.jpg"},129:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(196),s=o()((function(e){return e[1]})),d=a()(c);s.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: url("+d+");\n  background-color: #3f3f3f;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n  width: 100%;\n  color: white;\n}\n\nheader {\n  width: 100%;\n  border-bottom: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.74);\n  position: relative;\n  top: 0;\n  height: 8em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 8em;\n  padding-left: 8em;\n}\n\nheader > nav > ul {\n  list-style: none;\n}\n\nheader > nav > ul > li {\n  display: inline-flex;\n  margin-right: 20px;\n  font-size: 1.5em;\n  padding: 0.4em;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  transition: transform 0.2s;\n}\n\nheader > nav > ul > li:hover {\n  transform: scale(1.5);\n}\n\n#content {\n  font-size: 40px;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0, 0, 0, 0.74);\n  padding: 16px;\n  text-align: center;\n  min-height: 30vh;\n  min-width: 30vw;\n}\n\n.active {\n  border: 2px solid white !important;\n}\n\nbutton {\n  cursor: pointer;\n  align-self: flex-start;\n  width: auto;\n  padding: 0.7em;\n  border-radius: 5px;\n  background-color: black;\n  color: white;\n  border: 2px solid white;\n  font-weight: bold;\n}\n\nbutton:hover {\n  background-color: white;\n  color: black;\n  border: 2px solid white;\n}\n\n.center {\n  margin: 0;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n}\n\n.menuContent {\n  display: flex;\n}\n\n.menuContent ul {\n  list-style: none;\n  text-align: center;\n  padding: 1em;\n}\n\n.menuContent > ul > h3 {\n  font-size: 2em;\n  margin-bottom: 24px;\n}\n\n.reservation {\n  display: flex;\n  flex-direction: column;\n}\n\n.reservation > p {\n  font-size: 24px;\n}\n\n.reservation > h6 {\n  font-size: 1.5em;\n  margin-bottom: 10px;\n}\n",""]);const l=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:l,updater:h(m,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function m(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function h(e,n){var t,r,o;if(n.singleton){var i=f++;t=p||(p=s(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(129);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=document.querySelector("#content"),i=document.querySelector("body"),a=document.createElement("LI"),c=document.createElement("LI"),s=document.createElement("LI"),d=document.createElement("h1"),l=document.querySelector("#content"),u=document.createElement("BUTTON"),m=()=>{const e=document.createElement("DIV");e.setAttribute("id","home"),e.setAttribute("class","elements");const n=document.createElement("P"),t=document.createElement("H2"),r=document.querySelector("#navList").childNodes,o=document.querySelector("#home");for(let e=0;e<r.length;e+=1)r[e].classList.remove("active");o.classList.add("active"),u.classList.add("center"),t.textContent="Hungry?!",n.innerText="We have got something \n fresh, yummy and delicious",u.innerText="View our Menu",e.append(t,n,u),l.appendChild(e)},p=document.querySelector("#content"),f=document.querySelector("#content"),h=document.querySelector("#content");(()=>{const e=document.createElement("HEADER");e.setAttribute("id","header"),d.setAttribute("id","logo"),d.innerText="Amazing Food";const n=document.createElement("NAV"),t=document.createElement("UL");t.setAttribute("id","navList"),a.textContent="Home",a.setAttribute("id","home"),c.textContent="Menu",c.setAttribute("id","menu"),s.textContent="Reservation",s.setAttribute("id","reservation"),t.appendChild(a),t.appendChild(c),t.appendChild(s),n.appendChild(t),e.append(d,n),i.insertBefore(e,o)})();const v=()=>{h.innerHTML=""};document.addEventListener("onload",m()),a.addEventListener("click",(()=>{v(),m()})),d.addEventListener("click",(()=>{v(),m()})),c.addEventListener("click",(()=>{v(),(()=>{const e=document.querySelector("nav > ul").childNodes,n=document.querySelector("#menu");for(let n=0;n<e.length;n+=1)e[n].classList.remove("active");n.classList.add("active");const t=document.createElement("DIV");t.setAttribute("id","menu"),t.setAttribute("class","menuContent");const r=document.createElement("UL"),o=r.cloneNode(!1),i=document.createElement("H3");i.innerText="Drinks",o.appendChild(i);const a=r.cloneNode(!1),c=document.createElement("H3");c.innerText="Pastry",a.appendChild(c);const s=r.cloneNode(!1),d=document.createElement("H3");d.innerText="Snacks",s.appendChild(d);const l=[o,a,s],u=(e,n)=>{const t=document.createElement("LI");return t.innerText=n,e.appendChild(t),!0};["Coca-cola","Pepsi","Smoov","BCocktail","Red Wine"].map((e=>u(o,e))),["Burger","Meat-Pie","Donuts","Sausage","Pizza"].map((e=>u(a,e))),["Jollof rices","Fried rice","Spagethi","Macaronni"].map((e=>u(s,e))),t.append(...l),p.appendChild(t)})()})),s.addEventListener("click",(()=>{v(),(()=>{const e=document.querySelector("#navList").childNodes,n=document.querySelector("#reservation");for(let n=0;n<e.length;n+=1)e[n].classList.remove("active");n.classList.add("active");const t=document.createElement("DIV");t.setAttribute("id","reservation"),t.setAttribute("class","reservation");const r=document.createElement("P");r.innerText="We are open at this time \n everyday of the week";const o=document.createElement("H6");o.innerText="8 AM - 10 PM";const i=document.createElement("P");i.innerText="For info and reservations:";const a=document.createElement("H6");a.innerText="(+234) 800 0000 000, \n (+234) 800 0000 00",t.append(r,o,i,a),f.appendChild(t)})()}))})()})();