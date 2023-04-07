import { github, linkedin, mail, telegram } from '../components/icons';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const isLoggedIn = 'loggedInUserData';

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
    inputType: 'text',
  },
  {
    id: 'password',
    label: 'Password',
    inputType: 'password',
  },
  {
    id: 'confirm-password',
    label: 'Confirm your password',
    inputType: 'password',
  },
];

const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,}$/g;

const emptyError = "Field can't be empty";

const minError = 'Field should has at least 2 symbols';

const maxError = "Field shouldn't be longer than 25 symbols";

const dateError = "Date can't be later than today";

const emailError = 'Check your e-mail spelling';

const passwordError =
  'Password should contain at least 8 symbols, one uppercase character, one number and one of special symbols !@#$%';

const comparisonError = "Passwords don't match";

const requestStatuses = {
  created: 201,
  successful: 200,
  forbidden: 403,
  error: 500,
};

export {
  baseUrl,
  isLoggedIn,
  authorsContacts,
  inputs,
  emailValidation,
  passwordValidation,
  emptyError,
  minError,
  maxError,
  dateError,
  emailError,
  passwordError,
  comparisonError,
  requestStatuses,
};
