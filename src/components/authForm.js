import { inputs } from '../utils/constants';
import createElement from '../utils/createElement';

function renderAuthForm() {
  const main = document.querySelector('main');
  createElement('h1', '', main, 'Sign up');
  const form = createElement('form', 'auth-form', main);
  inputs.forEach((elem) => {
    const formGroup = createElement('div', 'mb-3', form);
    createElement('label', 'form-label', formGroup, elem.label, [
      ['for', elem.id],
    ]);
    createElement('input', 'form-control', formGroup, null, [
      ['id', elem.id],
      ['type', elem.inputType],
    ]);
  });
  document.querySelector('#name').focus();
  createElement('button', 'btn btn-primary mt-2', form, 'Submit', [
    ['type', 'submit'],
    ['id', 'submit'],
  ]);
}

export default renderAuthForm;
