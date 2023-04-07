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

const inputs = [
  {
    id: 'name',
    label: 'Name',
    inputType: 'text',
  },
  {
    id: 'surname',
    label: 'Surname',
    inputType: 'text',
  },
  {
    id: 'birthday',
    label: 'Date of birth',
    inputType: 'date',
  },
  {
    id: 'email',
    label: 'E-mail',
    inputType: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    inputType: 'password',
  },
  {
    id: 'confirmPassword',
    label: 'Confirm your password',
    inputType: 'password',
  },
];

export { baseUrl, isLoggedIn, authorsContacts, inputs };
