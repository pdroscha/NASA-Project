// Creating map object
var launchMap = L.map("map", {
  center: [48.85, 2.35],
  zoom: 2.4
});

//  tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(launchMap);
  
  // markerSize function based on mass
  function markerSize(launchMass) {
    return launchMass / 1;
  }
var launchSite = [{
  location: [45.96, 63.30],
  name: "Baikonur Cosmodrome",
  launchMass: 598365
},
{
  location: [28.39, -80.60],
  name: "Cape Canaveral",
  launchMass: 533112
},
{
  location: [51.09, 59.84],
  name: "Dombarovsky Air Base",
  launchMass: 8497
},
{
  location: [3.93, -53.12],
  name: "Guiana Space Center",
  launchMass: 674640
},
{
  location: [0,150],
  name: "International Space Station",
  launchMass: 161
},
{
  location: [41, 100],
  name: "Jiuquan Satellite Launch Center",
  launchMass: 31116
},
{
  location: [57.49, -153.49],
  name: "Kodiak Launch Complex",
  launchMass: 701
},
{
  location: [8.71, 167.73],
  name: "Kwajalein Island",
  launchMass: 822
},
{
  location: [34.44, 127.53],
  name: "Naro Space Center",
  launchMass: 93
},
{
  location: [31.88, 34.68],
  name: "Palmachim Launch Complex",
  launchMass: 1200
},
{
  location: [62.92, 40.57],
  name: "Plesetsk Cosmodrome",
  launchMass: 80088
},
{
  location: [13.72, 80.22],
  name: "Satish Dhawan Space Center",
  launchMass: 37294
},
{
  location: [ 0, -154],
  name: "Sea Launch(Odyssey)",
  launchMass: 140396
},
{
  location: [51, 128],
  name: "Svobodny Cosmodrome",
  launchMass: 840
},
{
  location: [40.95, 100.28],
  name: "Taiyuan Launch Center",
  launchMass: 33080
},
{
  location: [30.37, 130.95],
  name: "Tanegashima Space Center",
  launchMass: 51628
},
{
  location: [31.25, 131.07],
  name: "Uchinoura Space Center",
  launchMass: 2648
},
{
  location: [34.74, -120.57],
  name: "Vandenberg AFB",
  launchMass: 211478
},
{
  location: [51.88, 128.33],
  name: "Vostochny Cosmodrome",
  launchMass: 1178
},
{
  location: [37.93, -75.45],
  name: "Wallops Island Flight Facility",
  launchMass: 1225
},
{
  location: [28.24, 102.02],
  name: "Xichang Satellite Launch Center",
  launchMass: 210344
}
];

// Loop through array and create marker 
for (var i = 0; i < launchSite.length; i++) {
  L.circle(launchSite[i].location, {
    fillOpacity: 0.75,
    color: "black",
    fillColor: "red",
    // Setting radius equal to the output of our markerSize function
    radius: markerSize(launchSite[i].launchMass)
  }).bindPopup("<h1>" + launchSite[i].name + "</h1> <hr> <h3>Launch Mass: " + launchSite[i].launchMass + "</h3>").addTo(launchMap);
};

