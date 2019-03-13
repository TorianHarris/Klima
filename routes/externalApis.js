require("dotenv").config();
const axios = require("axios");

const getLatLong = (zip, req, response, cb) => {
  const key = process.env.MAPQUESTKEY;
  const queryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${zip}`;
  axios
    .get(queryUrl)
    .then(weatherData => {
      const latLngObj = weatherData.data.results[0].locations[0].latLng;
      const latLng = latLngObj.lat.toFixed(2) + "," + latLngObj.lng.toFixed(2);
      return cb(latLng, req, response);
    })
    .catch(error => {
      console.log(error);
    });
};

const getNoaa = (latLong, req, response) => {
  let typeOfWeather = "nx3tvs";
  let dateOne = "20060509";
  let dateTwo = "20080509";
  let radius = "5.0"; //latLong format 102.0,32.7
  let queryUrl = `https://www.ncdc.noaa.gov/swdiws/json/${typeOfWeather}/${dateOne}:${dateTwo}?radius=${radius}&center=${latLong}&stat=count`;
  axios
    .get(queryUrl)
    .then(weatherData => {
      return response.json(weatherData.data.result[0]);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = {
  getLatLong,
  getNoaa
};

// getLatLong("30084", getNoaa);

//Get Route For Mapquest Geocode
//GET route for NOAA Severe Weather
//Possible GET Route for ATTOM
