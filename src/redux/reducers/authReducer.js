import { types } from '../types';

const initialState = {
  isAuth: false,
  checking: true,
  uid: null,
  username: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        isAuth: true,
        uid: action.payload.uid,
        username: action.payload.username,
        checking: false,
      };
    case types.authLogout:
      return {
        ...state,
        isAuth: false,
        uid: null,
        username: null,
        checking: false,
      };
    case types.authFinishChecking:
      return {
        ...state,
        checking: false,
      };
    default:
      return state;
  }
};
