import * as React from 'react';
import { hydrateDefaultEngine, hydrateReduxRouterEngine } from './render-engines';

import App from './_App';

hydrateDefaultEngine(App, 'App');

