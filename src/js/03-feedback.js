import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

formEl.addEventListener('input', throttle(onEmailMessageSave, 500));
formEl.addEventListener('submit', onSubmit);

populateInput();


function onEmailMessageSave(evt) {
  evt.preventDefault();

 
  const emailInput = formEl.elements.email.value;
  const messageInput = textareaEl.value;

  formData = { email: emailInput, message: messageInput };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}



function populateInput() {
  const saveInput = localStorage.getItem(STORAGE_KEY);

  const parsSaveInput = JSON.parse(saveInput);

  if (saveInput) {
    textareaEl.value = parsSaveInput.message || '';
    formEl.elements.email.value = parsSaveInput.email || '';
  }

  formData = parsSaveInput;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();

  submitInput = {
    Message: textareaEl.value,
    Email: formEl.elements.email.value,
  };
  console.log(submitInput);

  localStorage.removeItem(STORAGE_KEY);

  evt.currentTarget.reset();
}
