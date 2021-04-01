import { types } from '../types';

export const setActiveFilter = (filterId) => {
  return {
    type: types.uiSetActiveFilter,
    payload: filterId,
  };
};

export const openModal = () => {
  return {
    type: types.uiOpenModal,
  };
};

export const closeModal = () => {
  return {
    type: types.uiCloseModal,
  };
};
