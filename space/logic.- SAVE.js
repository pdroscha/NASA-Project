var orbit = data;


for (var i = 0, length = orbit.length; i < length; i++) {
    var data = orbit[i],
        latLng = new google.maps.LatLng(data.Latitude, data.Longitude); 
  
    // Creating a marker and putting it on the map
    var marker = new google.maps.Marker({
      position: latLng,
      map: earth,
      title: data.title
    });

    var locations = L.geoJSON(data, {
        onEachFeature: onEachFeature
      }).addTo(earth);
    var marker = WE.marker([Latitude, Longitude]).addTo(earth)
    var overlay = API.tileLayerJSON(DataTransferItemList);
  }