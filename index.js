import * as storage from './src/utils/storage';

import './src/styles/styles.scss';

function startApp() {
  if (storage.get('isUserLoggedIn')) {
    document.querySelector('#app').innerHTML = "User's profile";
  } else {
    document.querySelector('#app').innerHTML = 'Auth app';
  }
}

startApp();
