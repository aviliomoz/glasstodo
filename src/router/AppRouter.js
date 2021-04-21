import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { renew } from '../redux/actions/authActions';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { Home } from '../views/Home';
import { Login } from '../views/Login';
import { Signin } from '../views/Signin';
import { Loading } from '../components/Loading';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { isAuth, checking } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(renew());
  }, [dispatch]);

  // Returns Loading component if authentication procces is not completed
  if (checking) {
    return <Loading />;
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
          component={Home}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
