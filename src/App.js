import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
