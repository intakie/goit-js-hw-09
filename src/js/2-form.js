const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
    const data = JSON.stringify(formData);
    localStorage.setItem(storageKey, data);

    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
}

function handleInput(event) {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  const data = JSON.stringify(formData);
  localStorage.setItem(storageKey, data);
}

const savedData = localStorage.getItem(storageKey) ?? '';

try {
  const formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
} catch {
  console.log('No saved data');
}

const labels = form.querySelectorAll('label');
labels.forEach(label => label.classList.add('form-label'));

const btn = form.querySelector('button');
btn.classList.add('form-btn');

const inputs = form.querySelectorAll('input');
inputs.forEach(input => input.classList.add('form-input'));

const textarea = form.querySelector('textarea');
textarea.classList.add('form-textarea');
