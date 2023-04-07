import { baseUrl } from './constants';

const signUpUser = async (userData) => {
  try {
    const response = await fetch(`${baseUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.status;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export default signUpUser;
