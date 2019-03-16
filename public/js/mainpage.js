let searchString = "Atlanta, GA";
L.mapquest.key = "Pfd7TG4aGomOwmZm7Pyd30Zm8WHMITIa";

let map = L.mapquest.map("map", {
  center: [0, 0],
  layers: L.mapquest.tileLayer("map"),
  zoom: 14
});
//Map searching with Search-bar
L.mapquest.geocoding().geocode(searchString);

const getComments = searchQuery => {
  axios
    .get("/comment", {
      params: {
        zipcode: searchQuery
      }
    })
    .then(function(response) {
      console.log(response.data);
    });
};
const getClimate = searchQuery => {
  axios
    .get("/climatedata", {
      params: {
        zipcode: searchQuery
      }
    })
    .then(function(response) {
      console.log(response.data.COUNT);
    });
};

$("#mapquestSearchBox").on("click", function(event) {
  event.preventDefault();
  var searchString = $("#searchInput").val();
  getClimate(searchString);
  getComments(searchString);
});
L.mapquest.geocoding().geocode(searchString);
