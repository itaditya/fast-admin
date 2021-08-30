import React, { Suspense, useMemo, lazy, createElement } from 'react';
import { BrowserRouter, Link, useRoutes } from 'react-router-dom';

const pageModules = import.meta.glob('/src/pages/*.jsx');

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

function getRoutesFromModules() {
  const routes = [];

  Object.keys(pageModules).forEach((key) => {
    const component = lazy(pageModules[key]);
    const route = convertPathToRoute(key);

    routes.push({
      path: route,
      element: createElement(component),
    });
  });

  return routes;
}

function FileRouting() {
  const routes = useMemo(getRoutesFromModules, []);
  const element = useRoutes(routes);

  return element;
}

export function Routes(props) {
  const { children } = props;

  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
          {children}
          <FileRouting />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export { Link };
