const convertCoordinatesForUrlApi = (routes) => {
  let urlForApi = '';
  let coordinates = '';
  routes?.checkpoints?.forEach(checkpoint => {
    coordinates += checkpoint.coordinates.lng + ',' + checkpoint.coordinates.lat + ';';
  });
  urlForApi += coordinates;
  urlForApi = urlForApi.substring(0, urlForApi.length - 1);

  return urlForApi;
}

const convertApiRequestInCoordinatesForMap = (coordinatesFromApi) => {
  const multiPolyline = [];

  coordinatesFromApi?.routes?.forEach(route => {
    route.legs?.forEach(leg => {
      const polyline = [];
      leg.steps?.forEach(step => {
        step.intersections?.forEach(intersection => {
          const lat = intersection.location[1];
          const lng = intersection.location[0];

          polyline.push([lat, lng]);
        })
      })
      if (polyline.length > 0) multiPolyline.push(polyline);
    })
  })

  if (multiPolyline.length > 0) return multiPolyline;
}

const getCenterFromRoute = (route) => {
  let center = null;
  if (route) {
    if (route.checkpoints?.length > 0) {
      const lat = route.checkpoints[0].coordinates.lat;
      const lng = route.checkpoints[0].coordinates.lng;
      if (lat && lng) {
        center = [lat, lng];
        return center;
      }
    }
  }
}

const getPolylineFromRoute = (route) => {
  let polyline = null;
  if (route) {
    if (route.checkpoints?.length > 0) {
      route.checkpoints.forEach(checkpoint => {
        const lat = checkpoint.coordinates.lat;
        const lng = checkpoint.coordinates.lng;
        if (lat && lng) {
          const coordinates = [lat, lng];
          if (polyline) polyline.push(coordinates);
          if (!polyline) polyline=[coordinates];
        }
      })
      if (polyline) return polyline;
    }
  }
}

export {
  convertCoordinatesForUrlApi,
  convertApiRequestInCoordinatesForMap,
  getCenterFromRoute,
  getPolylineFromRoute
}