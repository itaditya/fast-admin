import React, { Suspense, useMemo, lazy, createElement } from 'react';
import { BrowserRouter, Link, useRoutes } from 'react-router-dom';

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

function getRoutesFromModules(pageModules) {
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

function useFileRouting(pageModules) {
  const routes = useMemo(() => {
    return getRoutesFromModules(pageModules);
  }, [pageModules]);

  const element = useRoutes(routes);

  return element;
}

export function FileRouting(props) {
  const { pageModules } = props;
  const element = useFileRouting(pageModules);

  return element;
}

export function Routes(props) {
  const { pageModules, children } = props;

  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
          {children}
          <FileRouting pageModules={pageModules} />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export { Link };
