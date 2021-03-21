import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Login } from '../views/Login';
import { LoggedRouter } from './LoggedRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={LoggedRouter} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
