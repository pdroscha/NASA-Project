var tableData = data;


console.log(tableData);


var orbit = [].concat(tableData)


var date = orbit.map(orbit=>orbit.Date);
var latitude = orbit.map(orbit=>orbit.Latitude);
var longitude = orbit.map(orbit=>orbit.Longitude);
var velocity = orbit.map(orbit=>orbit.Velocity);
var altitude = orbit.map(orbit=>orbit.Altitude);