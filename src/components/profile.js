import createElement from '../utils/createElement';
import logOut from '../utils/logOut';
import { hello } from './icons';

const renderUserProfile = (requestBody) => {
  const main = document.querySelector('main');
  main.innerHTML = hello;
  const dataWrapper = createElement('div', 'mb-2 mt-5', main);
  const userData = Object.entries(requestBody);
  const safeUserData = userData.filter(([key]) => key !== 'password');
  safeUserData.forEach(([key, value]) => {
    const dataField = createElement(
      'div',
      'd-flex gap-2 justify-content-center align-items-baseline',
      dataWrapper
    );
    createElement('h3', '', dataField, `${key}:`);
    createElement('p', '', dataField, value);
  });
  const logOutButton = createElement(
    'button',
    'btn btn-light w-100',
    dataWrapper,
    'Log out and return',
    [['type', 'button']]
  );
  logOutButton.addEventListener('click', logOut);
};

export default renderUserProfile;
