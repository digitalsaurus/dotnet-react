import * as React from 'react';
import { defaultServerEngine, reduxRouterServerEngine } from './render-engines';

import App from './_App';

module.exports = {
  App: defaultServerEngine(App, 'app')
}
