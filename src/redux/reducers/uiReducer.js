import { types } from '../types';

const initialState = {
  activeFilter: 'all',
  modalIsOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetActiveFilter:
      return {
        ...state,
        activeFilter: action.payload,
      };
    case types.iuOpenModal:
      return {
        ...state,
        modalIsOpen: true,
      };
    case types.iuCloseModal:
      return {
        ...state,
        modalIsOpen: false,
      };

    default:
      return state;
  }
};
