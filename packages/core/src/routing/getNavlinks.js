import { routeTree } from './routeTree';
import { getTitle } from './getTitle';

export function getNavlinks() {
  const routes = Object.values(routeTree);
  const navlinks = routes.map((route) => {
    return {
      title: getTitle(route),
      to: route.route,
    };
  });

  return navlinks;
}
