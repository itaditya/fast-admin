import { routeTree } from './routeTree';
import { getTitle } from './getTitle';

export function getActions() {
  const routes = Object.values(routeTree);

  let actions = [];

  routes.forEach((route) => {
    const routeConfig = route.meta?.routeConfig || {};
    const pageTitle = getTitle(route);
    const pageDescription = routeConfig.descriptions || '';

    const pageAction = {
      title: pageTitle,
      description: pageDescription,
    };
    const otherActions = routeConfig.actions || [];

    actions = [...actions, pageAction, ...otherActions];
  });

  return actions;
}
