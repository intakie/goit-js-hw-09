import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),l="feedback-form-state";e.addEventListener("submit",o);e.addEventListener("input",n);function o(t){t.preventDefault();const a={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};if(a.email!==""&&a.message!==""){console.log(a);const s=JSON.stringify(a);localStorage.setItem(l,s),e.reset()}else alert("All form fields must be filled in")}function n(t){const a={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()},s=JSON.stringify(a);localStorage.setItem(l,s)}const r=localStorage.getItem(l)??"";try{const t=JSON.parse(r);e.elements.email.value=t.email,e.elements.message.value=t.message}catch{console.log("No saved data")}const m=e.querySelectorAll("label");m.forEach(t=>t.classList.add("form-label"));const c=e.querySelector("button");c.classList.add("form-btn");const i=e.querySelectorAll("input");i.forEach(t=>t.classList.add("form-input"));const d=e.querySelector("textarea");d.classList.add("form-textarea");
//# sourceMappingURL=commonHelpers2.js.map
