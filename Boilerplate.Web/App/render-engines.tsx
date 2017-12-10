import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ConnectedRouter, replace } from 'react-router-redux';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { createServerRenderer, RenderResult } from 'aspnet-prerendering';
import { camelize } from '@utils/stringUtils';

type Globals = {
  [index: string]: any
}

type StoreConfiguration = (...params: any[]) => Store<any>;

export function hydrateDefaultEngine(Component: any, elementName: string, propsName: string = null) {
  const element = document.getElementById(`Components.${elementName}`);
  const props = (window as any)[propsName || camelize(elementName)];
  if (element) {
    ReactDOM.hydrate(<Component {...props} />, element);
  }
}

export const defaultServerEngine = (Element: any, name: string) => createServerRenderer(params => {
  const globals: Globals = {};
  globals[name] = params.data;

  return new Promise<RenderResult>((resolve, reject) => {
    resolve({
      html: renderToString(<Element {...params.data} />),
      globals
    });
  });
});

export function hydrateReduxRouterEngine(Component: any, configureStore: StoreConfiguration, elementName: string, propsName: string = null) {
  const element = document.getElementById(`Components.${elementName}`);
  if (element) {
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    const history = createBrowserHistory({ basename: baseUrl });
    const props = (window as any)[propsName || camelize(elementName)];
    const store = configureStore(history, props);

    ReactDOM.hydrate(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component {...props} />
        </ConnectedRouter>
      </Provider>,
      element);
    ReactDOM.hydrate(<Component {...props} />, element);
  }
}

export const reduxRouterServerEngine = (Element: any, configureStore: StoreConfiguration, name: string) => createServerRenderer(params => {
  const globals: Globals = {};
  globals[name] = params.data;

  return new Promise<RenderResult>((resolve, reject) => {

    const basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
    const urlAfterBasename = params.url.substring(basename.length);
    const store = configureStore(createMemoryHistory());
    store.dispatch(replace(urlAfterBasename));

    const routerContext: any = {};
    const app = (
      <Provider store={store}>
        <StaticRouter basename={basename} context={routerContext} location={params.location.path}>
          <Element {...params.data} />
        </StaticRouter>
      </Provider>
    );

    resolve({
      html: renderToString(app),
      globals
    });
  });
});
