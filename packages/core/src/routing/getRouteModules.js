const pageModules = import.meta.glob('/src/routes/**/*.page.jsx');
const metaModules = import.meta.globEager('/src/routes/**/*.meta.js');

export function getPageModules() {
  return pageModules;
}

export function getMetaModules() {
  return metaModules;
}
