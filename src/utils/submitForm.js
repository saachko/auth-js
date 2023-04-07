import validateForm from './validateForm';
import * as storage from './storage';
import { isLoggedIn, requestStatuses } from './constants';
import signUpUser from './api';

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
    const newUser = await signUpUser(requestBody);
    if (newUser === requestStatuses.successful || requestStatuses.created) {
      storage.set(isLoggedIn, JSON.stringify(requestBody));
      document.location.reload();
    }
  }
};

export default submitForm;
