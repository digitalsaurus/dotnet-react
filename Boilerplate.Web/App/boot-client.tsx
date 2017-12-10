import * as React from 'react';
import { hydrateDefaultEngine, hydrateReduxRouterEngine } from './render-engines';

import App from './_App';
import configureStore from './configureStore';

hydrateReduxRouterEngine(App, configureStore, 'App');

