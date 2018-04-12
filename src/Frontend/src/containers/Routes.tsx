import * as React from 'react';
import { Route, Switch, RouteProps } from 'react-router';

import Home from './Home/Home';
import DogList from './DogList/DogList';
import DogProfile from './DogProfile/DogProfile';

export const RouteWithContainer = (props: RouteProps) => (
  <div className="container">
    <Route {...props} />
  </div>
);

const Routes = () => (
  <main className="site-main">
    <Switch>
      <RouteWithContainer exact={true} path="/" component={Home} />
      <RouteWithContainer exact={true} path="/dogs" component={DogList} />
      <RouteWithContainer exact={true} path="/dog/:dog" component={DogProfile} />
    </Switch>
  </main>
);

export default Routes;
