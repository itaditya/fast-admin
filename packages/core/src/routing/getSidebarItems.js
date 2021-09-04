import { routeTree } from './routeTree';

function getNavlinks() {
  return [
    {
      title: 'Billing',
      to: '/billing',
    },
    {
      title: 'Users Details',
      to: '/users',
    },
  ];
}

export function getSidebarItems() {
  const navlinks = getNavlinks();

  return {
    navlinks,
  }
}
