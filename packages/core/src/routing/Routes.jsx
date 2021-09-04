import { Link, useRoutes } from 'react-router-dom';

import { getAppRoutes } from './getAppRoutes';

const routes = getAppRoutes();

export function Routes() {
  const element = useRoutes(routes);

  return element;
}

export { Link };
