import { routeTree } from './routeTree';

function getTitle(route) {
  const title = route.meta?.routeConfig?.title;
  const defaultTitle = `To ${route.route}`;

  return title || defaultTitle;
}

function getNavlinks() {
  const routes = Object.values(routeTree);
  const navlinks = routes.map((route) => {
    return {
      title: getTitle(route),
      to: route.route,
    };
  });

  return navlinks;
}

export function getSidebarItems() {
  const navlinks = getNavlinks();

  return {
    navlinks,
  }
}
