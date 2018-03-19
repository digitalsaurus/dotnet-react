import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';

import "../Assets/sass/Site.scss";

const App: React.SFC = (props) => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
  </Layout>
);

export default App;