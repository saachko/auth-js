import validateForm from './validateForm';
import * as storage from './storage';
import { isLoggedIn } from './constants';

const submitForm = async (event) => {
  event.preventDefault();
  if (validateForm()) {
    const form = document.forms['auth-form'];
    const requestBody = {};
    Array.from(form.elements).forEach((el) => {
      requestBody[`${el.id}`] = el.value;
    });
    delete requestBody.submit;
    delete requestBody['confirm-password'];
    console.log(requestBody);
    storage.set(isLoggedIn, `${requestBody.name} ${requestBody.surname}`);
    document.location.reload();
  }
};

export default submitForm;
