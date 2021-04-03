import { types } from '../types';

const initialState = {
  activeFilter: 'all',
  modalIsOpen: false,
  errorMessage: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetActiveFilter:
      return {
        ...state,
        activeFilter: action.payload,
      };
    case types.uiOpenModal:
      return {
        ...state,
        modalIsOpen: true,
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalIsOpen: false,
      };
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
