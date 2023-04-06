import { github, linkedin, mail, telegram } from '../components/icons';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const isLoggedIn = 'isUserLoggedIn';

const authorsContacts = [
  {
    link: 'https://github.com/saachko',
    icon: github,
    title: 'Anastasiya on GitHub',
  },
  {
    link: 'https://t.me/saachko',
    icon: telegram,
    title: 'Send a message',
  },
  {
    link: 'https://www.linkedin.com/in/saachko/',
    icon: linkedin,
    title: 'Anastasiya on LinkedIn',
  },
  {
    link: 'mailto:naztya12323@gmail.com',
    icon: mail,
    title: 'Send an e-mail',
  },
];

export { baseUrl, isLoggedIn, authorsContacts };
