import renderFooter from './footer';

import createElement from '../utils/createElement';

function renderPageLayout() {
  const app = document.querySelector('#app');
  createElement('main', '', app);
  renderFooter();
}

export default renderPageLayout;
