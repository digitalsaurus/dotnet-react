import * as React from 'react';
import { defaultServerEngine, reduxRouterServerEngine } from './render-engines';

import App from './_App';
import configureStore from './configureStore';

module.exports = {
  App: reduxRouterServerEngine(App, configureStore, 'app')
}
