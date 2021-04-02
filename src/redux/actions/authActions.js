import { types } from '../types';
import { fetchWithToken, simpleFetch } from '../../helpers/fetch';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await simpleFetch('/auth/login', 'POST', { email, password });
      const data = await res.json();

      localStorage.setItem('jwt', data.token);

      if (data.ok) {
        dispatch({
          type: types.authLogin,
          payload: {
            uid: data.uid,
            username: data.username,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (name, lastname, email, password) => {
  return async (dispatch) => {
    try {
      const res = await simpleFetch('/auth/signin', 'POST', {
        name,
        lastname,
        email,
        password,
      });
      const data = await res.json();

      localStorage.setItem('jwt', data.token);

      if (data.ok) {
        dispatch({
          type: types.authLogin,
          payload: {
            uid: data.uid,
            username: data.username,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();

    dispatch({
      type: types.authLogout,
    });
    dispatch({
      type: types.todoReset,
    });
  };
};

export const renew = () => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken(`/auth/renew`);
      const data = await res.json();

      dispatch({
        type: types.authFinishChecking,
      });

      if (data.ok) {
        localStorage.setItem('jwt', data.token);

        dispatch({
          type: types.authLogin,
          payload: {
            uid: data.uid,
            username: data.username,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: types.authFinishChecking,
      });
    }
  };
};