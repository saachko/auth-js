import {
  dateError,
  emailError,
  emailValidation,
  passwordValidation,
  emptyError,
  inputs,
  maxError,
  minError,
  passwordError,
  comparisonError,
} from './constants';

const clearErrors = () => {
  const errors = document.querySelectorAll('.invalid-feedback');
  errors.forEach((errorElem) => {
    errorElem.innerHTML = null;
  });
  return errors;
};

const checkTextField = (textValue, id) => {
  if (textValue && textValue.length < 2) {
    document.querySelector(`#error-${id}`).innerHTML = minError;
  }
  if (textValue && textValue.length > 25) {
    document.querySelector(`#error-${id}`).innerHTML = maxError;
  }
};

const checkDate = (dateValue, id) => {
  if (dateValue && new Date(dateValue) > new Date()) {
    document.querySelector(`#error-${id}`).innerHTML = dateError;
  }
};

const checkEmail = (emailValue, id) => {
  if (emailValue && !emailValue.match(emailValidation)) {
    document.querySelector(`#error-${id}`).innerHTML = emailError;
  }
};

const checkPassword = (passwordValue, id) => {
  if (
    passwordValue &&
    (passwordValue.length < 8 || !passwordValue.match(passwordValidation))
  ) {
    const passwordErrorDiv = document.querySelector(`#error-${id}`);
    passwordErrorDiv.innerHTML = passwordError;
    passwordErrorDiv.addEventListener('mouseover', () => {
      document.querySelector('.error-tooltip').classList.remove('hidden');
    });
    passwordErrorDiv.addEventListener('mouseout', () => {
      document.querySelector('.error-tooltip').classList.add('hidden');
    });
  }
};

const comparePasswords = (password, passwordToConfirm, id) => {
  if (password && passwordToConfirm && password !== passwordToConfirm) {
    document.querySelector(`#error-${id}`).innerHTML = comparisonError;
  }
};

const validateForm = () => {
  const errors = clearErrors();
  let isFormValid = false;
  const inputElements = {};

  inputs.forEach((elem) => {
    inputElements[elem.id] = document.querySelector(`#${elem.id}`);
    if (!document.querySelector(`#${elem.id}`).value) {
      document.querySelector(`#error-${elem.id}`).innerHTML = emptyError;
    }
  });
  checkTextField(inputElements.name.value, 'name');
  checkTextField(inputElements.surname.value, 'surname');
  checkDate(inputElements.birthday.value, 'birthday');
  checkEmail(inputElements.email.value, 'email');
  checkPassword(inputElements.password.value, 'password');
  comparePasswords(
    inputElements.password.value,
    inputElements['confirm-password'].value,
    'confirm-password'
  );

  if (Array.from(errors).every((elem) => !elem.innerHTML)) {
    isFormValid = true;
  }
  return isFormValid;
};

export default validateForm;
