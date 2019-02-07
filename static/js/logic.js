// Creating map object
var myMap = L.map("map", {
// style: 'mapbox://styles/mapbox/light-v9',
// callback function from folder 1 activity 1
 // center: [38.7128, -95.0059],
 center:[38.2271, -95.9431],
 zoom: 3.0,
 //layers: [statemap, countymap]
});

// Adding tile layer
 L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
   maxZoom: 18,
   id: "mapbox.light",
   accessToken: API_KEY
 }).addTo(myMap);

// set USGS earthquake feed url
var EQseven = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "yellow",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

d3.json(EQseven, function(data) {
    //   // Creating a geoJSON layer with the retrieved data
       L.geoJson(data, {
    // //    // Passing in our style object successful 1/9/ @1230
        style: geojsonMarkerOptions
       }).addTo(myMap);
    // // // below closes layer function 1/10 @1326
    });

// Binding a pop-up to feature
//   onEachFeature: function (feature, layer) {
//        return layer.bindPopup(feature.properties.place + ", Magnitude: "+ feature.properties.mag);
 //}
//})

 

