import * as storage from './src/utils/storage';
import { isLoggedIn } from './src/utils/constants';

import './src/styles/styles.scss';

function startApp() {
  if (storage.get(isLoggedIn)) {
    document.querySelector('#app').innerHTML = "User's profile";
  } else {
    document.querySelector('#app').innerHTML = 'Auth app';
  }
}

startApp();
