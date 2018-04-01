import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

import configureStore from './configureStore';
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app-root') as HTMLElement
);
registerServiceWorker();
