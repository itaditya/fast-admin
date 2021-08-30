import { useMemo, lazy, createElement } from 'react';
import { Link, useRoutes } from 'react-router-dom';

const pageModules = import.meta.glob('/src/routes/*.page.jsx');
const metaModules = import.meta.globEager('/src/routes/*.meta.jsx');

function convertPathToRoute(path) {
  // Todo: Find a lib to replace this.
  if (path.includes('billing')) {
    return '/billing';
  }

  if (path.includes('users')) {
    return '/users';
  }

  return '/';
}

function stripExtension(pageKey) {
  const path = pageKey.replace('.page.jsx', '');

  return path;
}

function getRoutesFromModules() {
  const routes = [];
  const data = {};

  Object.keys(pageModules).forEach((pageKey) => {
    const component = lazy(pageModules[pageKey]);
    const route = convertPathToRoute(pageKey);
    const path = stripExtension(pageKey);
    const metaKey = path + '.meta.jsx';
    const meta = metaModules[metaKey] || {};

    data[route] = {
      route: route,
      meta: {
        ...meta,
      },
    };

    routes.push({
      path: route,
      element: createElement(component),
    });
  });

  return {
    data,
    routes,
  };
}

export function Routes() {
  const { data, routes } = useMemo(getRoutesFromModules, []);
  const element = useRoutes(routes);
  console.log(`data`, data); // aditodo remove this

  return element;
}

export { Link };
