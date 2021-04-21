import { types } from '../types';

const initialState = {
  activeDate: ''
}

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.dateSetActiveDate:
      return {
        ...state,
        activeDate: action.payload
      }
    default:
      return state;
  }
}