import { getPageModules, getMetaModules } from './getRouteModules';

const pageModules = getPageModules();
const metaModules = getMetaModules();

const pathRx = new RegExp('src/routes(.*?).page.jsx');

function convertPathToRoute(path) {
  const route = pathRx.exec(path)[1];

  return route;
}

function getMetaKey(pageKey) {
  const path = pageKey.replace('.page.jsx', '.meta.jsx');

  return path;
}

function getRouteTree() {
  const routeTree = {};

  Object.keys(pageModules).forEach((pageKey) => {
    const componentImport = pageModules[pageKey];
    const route = convertPathToRoute(pageKey);
    const metaKey = getMetaKey(pageKey);
    const meta = metaModules[metaKey] || {};

    routeTree[route] = {
      route: route,
      componentImport,
      meta: {
        ...meta,
      },
    };
  });

  return routeTree;
}

export const routeTree = getRouteTree();
