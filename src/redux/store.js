import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { dateReducer } from './reducers/dateReducer';

import { todoReducer } from './reducers/todoReducer';
import { uiReducer } from './reducers/uiReducer';

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  todo: todoReducer,
  date: dateReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
