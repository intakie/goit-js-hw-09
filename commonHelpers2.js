import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),s="feedback-form-state";e.addEventListener("submit",m);e.addEventListener("input",o);function o(t){const a={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()},l=JSON.stringify(a);localStorage.setItem(s,l)}function m(t){t.preventDefault();const a={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};a.email!==""&&a.message!==""?(console.log(a),localStorage.removeItem(s),e.reset()):alert("All form fields must be filled in")}const r=localStorage.getItem(s)??"";try{const t=JSON.parse(r);e.elements.email.value=t.email,e.elements.message.value=t.message}catch{console.log("No saved data")}const n=e.querySelectorAll("label");n.forEach(t=>t.classList.add("form-label"));const c=e.querySelector("button");c.classList.add("form-btn");const i=e.querySelectorAll("input");i.forEach(t=>t.classList.add("form-input"));const u=e.querySelector("textarea");u.classList.add("form-textarea");
//# sourceMappingURL=commonHelpers2.js.map