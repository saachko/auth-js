import renderPageLayout from './src/components/pageLayout';
import renderAuthForm from './src/components/authForm';

import * as storage from './src/utils/storage';
import { isLoggedIn } from './src/utils/constants';

import './src/styles/index.scss';
import renderUserProfile from './src/components/profile';

function startApp() {
  renderPageLayout();
  if (storage.get(isLoggedIn)) {
    const requestBody = JSON.parse(storage.get(isLoggedIn));
    console.log(requestBody);
    renderUserProfile(requestBody);
  } else {
    renderAuthForm();
  }
}

startApp();
