import renderPageLayout from './src/components/pageLayout';

// import * as storage from './src/utils/storage';
// import { isLoggedIn } from './src/utils/constants';

import './src/styles/index.scss';

function startApp() {
  renderPageLayout();
  // if (storage.get(isLoggedIn)) {
  //   document.querySelector('#app').innerHTML = "User's profile";
  // } else {
  //   document.querySelector('#app').innerHTML = 'Auth app';
  // }
}

startApp();
