parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"n8cQ":[function(require,module,exports) {
var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-backdrop]")};function t(e){e.target===e.currentTarget&&o()}function o(){e.backdrop.classList.contains("is-open")?window.removeEventListener("keydown",c):window.addEventListener("keydown",c),e.backdrop.classList.toggle("is-open")}function c(e){"Escape"===e.code&&o()}e.openModalBtn&&(e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.backdrop.addEventListener("click",t));var n=document.querySelector("[data-modal]");function r(){n.focus(),n.style.outline="none"}e.openModalBtn.addEventListener("click",r);var a=document.querySelector("[data-checkbox-icon]"),d=document.querySelector("[data-checkbox-input]"),i=document.querySelector("[data-checkbox-label]");function s(){window.addEventListener("keydown",l)}function l(e){e.target.classList.contains("checkbox-icon")&&"Enter"===e.code&&(d.setAttribute("checked",""),a.classList.add("checked"),window.removeEventListener("keydown",l),window.addEventListener("keydown",u))}function u(e){e.target.classList.contains("checkbox-icon")&&"Enter"===e.code&&(d.removeAttribute("checked"),a.classList.remove("checked"),window.removeEventListener("keydown",u),s())}function k(e){(e.target.classList.contains("form__text-checkbox")||e.target.classList.contains("checkbox-icon"))&&(d.hasAttribute("checked")?(d.removeAttribute("checked"),a.classList.remove("checked"),s()):(d.setAttribute("checked",""),a.classList.add("checked"),window.addEventListener("keydown",u)))}i.addEventListener("click",k),a.addEventListener("focus",s());var v=document.querySelector("[data-form-modal]"),m=function(e){e.preventDefault();var t=e.target,c=t.querySelectorAll("input"),n=!0;if(c.forEach(function(e){if(!e.hasAttribute("checked")){if(e.style.borderColor="#d41443","checkbox"===e.getAttribute("type"))t.querySelector(".checkbox-icon").classList.add("border-not-checked");n=!1}}),n){var r=new FormData(t),i={};r.forEach(function(e,t){i[t]=e}),console.dir(i),o(),c.forEach(function(e){e.value="",e.removeAttribute("checked")}),a.classList.remove("border-not-checked"),d.removeAttribute("checked"),a.classList.remove("checked"),window.removeEventListener("keydown",u),s()}else console.log("not all inputs checked")};v&&v.addEventListener("submit",m);var h=document.querySelectorAll("[data-form-modal] input"),b=function(e){var t;"name"===e.target.name&&(t=/^[a-zA-ZА-Яа-яЁё\s]+$/),"tel"===e.target.name&&(t=/^[0-9]{9,12}(\s*)?$/),"email"===e.target.name&&(t=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/),t.test(e.target.value)?(e.target.style.outlineColor="inherit",e.target.style.borderColor="rgba(33, 33, 33, 0.2)",e.target.setAttribute("checked","")):(e.target.style.outlineColor="#d41443",e.target.removeAttribute("checked"))};h.forEach(function(e){return e.addEventListener("input",_.debounce(b,500))});
},{}]},{},["n8cQ"], null)
//# sourceMappingURL=/team-project-01/modal-form.4e86a704.js.map