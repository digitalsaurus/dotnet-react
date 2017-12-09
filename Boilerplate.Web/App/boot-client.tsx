import * as React from 'react';
import * as ReactDOM from 'react-dom';

function camelize(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function hydrateServerComponent(Component: any, elementName: string, propsName: string = null) {
  const element = document.getElementById(`Components.${elementName}`);
  const props = (window as any)[propsName || camelize(elementName)];
  if (element) {
    ReactDOM.hydrate(<Component {...props} />, element);
  }
}

import App from './_App';

hydrateServerComponent(App, 'App');

