import { lazy, createElement } from 'react';
import { routeTree } from './routeTree';
import { getRoutes } from './getRoutes';

function getElement(route) {
  const { componentImport } = routeTree[route];
  const component = lazy(componentImport);
  const element = createElement(component);

  return element;
}

export function getAppRoutes() {
  const paths = Object.keys(routeTree);
  const routes = getRoutes(paths, getElement);

  return routes;
}
