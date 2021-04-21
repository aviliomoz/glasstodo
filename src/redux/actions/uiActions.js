import { types } from '../types';

export const loadErrorMessage = (errorMessage) => {
  return {
    type: types.uiLoadErrorMessage,
    payload: errorMessage,
  };
};

export const cleanErrorMessage = () => {
  return {
    type: types.uiCleanErrorMessage,
  };
};
