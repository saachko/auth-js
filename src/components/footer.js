import { authorsContacts } from '../utils/constants';
import createElement from '../utils/createElement';

function renderFooter() {
  const app = document.querySelector('#app');
  const footer = createElement('footer', 'footer', app);
  const logo = createElement('a', 'logo', footer, null, [
    ['href', 'https://codabrasoft.com/'],
    ['target', '_blank'],
  ]);
  createElement('img', 'logo__img', logo, null, [['src', '/logo.png']]);
  const textContainer = createElement('div', 'logo__text', logo);
  createElement('h3', 'logo__text_primary', textContainer, 'Codabrasoft');
  createElement('p', 'logo__text_secondary', textContainer, 'test task');
  const container = createElement('div', '', footer);
  const contacts = createElement('div', 'contacts', container);
  authorsContacts.forEach((contact) => {
    createElement('a', '', contacts, contact.icon, [
      ['href', contact.link],
      ['target', '_blank'],
      ['title', contact.title],
    ]);
  });
  createElement('p', 'copyright', container, 'Anastasiya Sachko © 2023');
}

export default renderFooter;
