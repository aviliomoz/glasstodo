import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { renew } from '../redux/actions/authActions';

import { Login } from '../views/Login';
import { Signin } from '../views/Signin';
import { LoggedRouter } from './LoggedRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { isAuth, checking } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(renew());
  }, [dispatch]);

  // Return Loading component if authentication procces is not completed
  if (checking) {
    return <h2>Loading</h2>;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          isAuthenticated={isAuth}
          exact
          path="/login"
          component={Login}
        />
        <PublicRoute
          isAuthenticated={isAuth}
          exact
          path="/signin"
          component={Signin}
        />
        <PrivateRoute
          isAuthenticated={isAuth}
          exact
          path="/"
          component={LoggedRouter}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
