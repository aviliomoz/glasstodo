import { types } from '../types';

export const setActiveDate = (date) => {
  return {
    type: types.dateSetActiveDate,
    payload: date,
  };
};
