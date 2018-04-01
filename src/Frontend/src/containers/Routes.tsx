import * as React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home/Home';
import DogList from './DogList/DogList';
import DogProfile from './DogProfile/DogProfile';

const Routes = () => (
  <main className="site-main">
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/dogs" component={DogList} />
      <Route exact={true} path="/dog/:dog" component={DogProfile} />
    </Switch>
  </main>
);

export default Routes;
