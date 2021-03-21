import { Switch, Route} from 'react-router-dom';
import { Layout } from '../containers/Layout';

import { Home } from '../views/Home';

export const LoggedRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};
