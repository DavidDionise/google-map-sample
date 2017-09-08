function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 36.51, lng: -120.350 },
  });

  // Define the LatLng coordinates for the outer path.
  var outerCoords = [
    {lat: 35.207, lng: -124.364},
    {lat: 35.207, lng: -116.364},
    {lat: 39.207, lng: -116.364},
    {lat: 39.207, lng: -124.364}
  ];

  // Define the LatLng coordinates for an inner path.
  var innerCoords1 = [
    {lat: -33.364, lng: 154.207},
    {lat: -34.364, lng: 154.207},
    {lat: -34.364, lng: 155.207},
    {lat: -33.364, lng: 155.207}
  ];

  // Define the LatLng coordinates for another inner path.
  var innerCoords2 = [
    {lat: -33.364, lng: 156.207},
    {lat: -34.364, lng: 156.207},
    {lat: -34.364, lng: 157.207},
    {lat: -33.364, lng: 157.207}
  ];

  var georssLayer = new google.maps.KmlLayer({
    url: 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml',
    preserveViewport: true,
    zIndex: 100
  });
  const polygon = new google.maps.Data.Polygon([outerCoords]);

  georssLayer.setMap(map);
  map.data.add({ geometry: polygon });
  map.data.setStyle({ zIndex: 1 });
}
