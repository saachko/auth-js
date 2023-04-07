import * as storage from './storage';
import { isLoggedIn } from './constants';

const logOut = () => {
  storage.remove(isLoggedIn);
  document.location.reload();
};

export default logOut;
