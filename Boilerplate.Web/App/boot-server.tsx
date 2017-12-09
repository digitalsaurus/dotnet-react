import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { createServerRenderer, RenderResult } from 'aspnet-prerendering';

type Globals = {
  [index: string]: any
}

const defaultServerRenderer = (Element: any, name: string) => createServerRenderer(params => {
  const globals: Globals = {};
  globals[name] = params.data;

  return new Promise<RenderResult>((resolve, reject) => {
    resolve({
      html: renderToString(<Element {...params.data} />),
      globals
    });
  });
});

import  App from './_App';

module.exports = {
  App: defaultServerRenderer(App, 'app')
}
