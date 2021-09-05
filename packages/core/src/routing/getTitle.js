export function getTitle(route) {
  const title = route.meta?.routeConfig?.title;
  const defaultTitle = `To ${route.route}`;

  return title || defaultTitle;
}
