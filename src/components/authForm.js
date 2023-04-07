import { inputs, passwordError } from '../utils/constants';
import createElement from '../utils/createElement';
import submitForm from '../utils/submitForm';
import { eye } from './icons';

function renderAuthForm() {
  const main = document.querySelector('main');
  createElement('h1', '', main, 'Sign up');
  const form = createElement('form', 'auth-form', main, null, [['name', 'auth-form']]);

  inputs.forEach((elem) => {
    const formGroup = createElement('div', 'mb-3 auth-form__group', form);
    createElement('label', 'form-label', formGroup, elem.label, [
      ['for', elem.id],
    ]);
    const formControl = createElement(
      'input',
      'form-control',
      formGroup,
      null,
      [
        ['id', elem.id],
        ['type', elem.inputType],
        ['name', elem.id],
      ]
    );
    if (elem.id === 'password') {
      createElement('div', 'error-tooltip hidden', formGroup, passwordError);
    }
    if (elem.inputType === 'password') {
      const showPasswordIcon = createElement(
        'div',
        'password-icon',
        formGroup,
        eye
      );
      formControl.style.paddingRight = '45px';
      showPasswordIcon.addEventListener('mouseover', () => {
        formControl.type = 'text';
      });
      showPasswordIcon.addEventListener('mouseout', () => {
        formControl.type = 'password';
      });
    }
    createElement('div', 'invalid-feedback', formGroup, null, [
      ['id', `error-${elem.id}`],
    ]);
  });

  document.querySelector('#name').focus();
  createElement('button', 'btn btn-primary mt-2', form, 'Submit', [
    ['type', 'submit'],
    ['id', 'submit'],
  ]);
  form.addEventListener('submit', (event) => submitForm(event));
}

export default renderAuthForm;
