parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dNT7":[function(require,module,exports) {
for(var t=function(t){t.preventDefault,t.target.classList.remove("animate"),t.target.classList.add("animate"),setTimeout(function(){t.target.classList.remove("animate")},700)},e=document.getElementsByClassName("bubbly-button"),n=0;n<e.length;n++)e[n].addEventListener("click",t,!1);var r=document.querySelector("[data-count-cafe]"),o=document.querySelector("[data-count-food]"),a=Number(r.textContent),c=Number(o.textContent),s=function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",a=t;setInterval(function(){n.textContent=a+o,a!==e&&(a+=1)},r)};s(0,a,r,150),s(0,c,o,100);var u=document.querySelectorAll("[data-stat-item]"),i={threshold:[.5]},l=function(t,e){t.forEach(function(t){if(t.isIntersecting){var n,r=Number.parseInt(t.target.textContent);t.target.textContent.includes("kg")&&(n="kg");var o=r-50;o<0&&(o=0),s(o,r,t.target,30,n),e.unobserve(t.target)}})},f=new IntersectionObserver(l,i);u.forEach(function(t){return f.observe(t)});var v=document.querySelector(".product_list"),g=v.querySelectorAll(".button-arrow"),m=function(t,e){t.forEach(function(t){t.isIntersecting&&(t.target.style.transform="translateX(-50%)",e.unobserve(t.target))})},d=new IntersectionObserver(m,i);g.forEach(function(t){return d.observe(t)});var b=document.querySelector("[data-gallery]"),y=function(t,e){t.forEach(function(t){t.isIntersecting&&(t.target.style.transform="scale(1)",e.unobserve(t.target))})},h=new IntersectionObserver(y,i);h.observe(b);
},{}]},{},["dNT7"], null)
//# sourceMappingURL=/team-project-01/btn-animation.ee010948.js.map