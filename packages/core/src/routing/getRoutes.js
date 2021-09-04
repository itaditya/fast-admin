export function getRoutes(paths, getElement) {
  const routes = paths.map(path => {
    return {
      path: path,
      element: getElement(path),
    }
  })

  return routes;
}
