var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(issSightings) {
    console.log(issSightings);
});

data.forEach(function(issSightings) {
    console.log(issSightings);
    var row = tbody.append("tr");
});

data.forEach(function(issSightings) {
    console.log(issSightings);
    var row = tbody.append("tr");

    Object.entries(issSightings).forEach(function([key, value]) {
        console.log(key, value);
    });
});

data.forEach(function(issSightings) {
    console.log(issSightings);
    var row = tbody.append("tr");

    Object.entries(issSightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
    });
});

data.forEach(function(issSightings) {
    console.log(issSightings);
    var row = tbody.append("tr");
    Object.entries(issSightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

data.forEach((issSightings) => {
    var row = tbody.append("tr");
    Object.entries(issSightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });