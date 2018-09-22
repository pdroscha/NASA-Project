var options = {atmosphere: true, center: [0, 0], zoom: 0};
//var earth = new WE.map('map', options);
var myMap = L.map("map", {
    center: [37.09, -95.71], 
    zoom: 5
});

// API key
const API_KEY = "pk.eyJ1IjoidHIwdWJsMyIsImEiOiJjamxjdmdmcHkwNHIxM3Zsc2ZwbWNldTc4In0.KAg5hvQneKORbh4hOlYxvA";

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < mydata.length; i++) {
  L.marker([mydata[i].Latitude, mydata[i].Longitude], {
  }).bindPopup(`${mydata[i].Date}, ${mydata[i].Altitude}, ${mydata[i].Velocity}`).addTo(myMap);
}

/* 
WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
  minZoom: 0,
  maxZoom: 5,
  attribution: 'NASA'
}).addTo(earth);
*/

/*
var data;
for (var i = 0; i < data.length; i++) {
  WE.circle(data[i].Cordinates, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",

  }).addTo(earth);
}
*/

//  var marker = WE.marker([coordinates]).addTo(earth);

