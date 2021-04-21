import { types } from '../types';

const initialState = {
  errorMessage: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiLoadErrorMessage:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case types.uiCleanErrorMessage:
      return {
        ...state,
        errorMessage: null,
      };

    default:
      return state;
  }
};
