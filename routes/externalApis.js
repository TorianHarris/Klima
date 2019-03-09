require("dotenv").config();
const axios = require("axios");

//TODO figure out wht .env doesn't

const getLatLong = zip => {
  const key = process.env.MAPQUESTKEY;
  const queryUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${zip}`;
  axios
    .get(queryUrl)
    .then(response => {
      console.log(response.data.results[0].locations[0].latLng);
      return response.data.results[0].locations[0].latLng;
    })
    .catch(error => {
      console.log(error);
    });
};

const getNoaa = (latLong = "102.0,32.7") => {
  let typeOfWeather = "nx3tvs";
  let dateOne = "20060509";
  let dateTwo = "20080509";
  let radius = "15.0"; //latLong format 102.0,32.7
  let queryUrl = `https://www.ncdc.noaa.gov/swdiws/json/${typeOfWeather}/${dateOne}:${dateTwo}?radius=${radius}&center=${latLong}&stat=count`;
  axios
    .get(queryUrl)
    .then(response => {
      console.log(response.data.result[0]);
      return response.data.result[0];
    })
    .catch(error => {
      console.log(error);
    });
};
module.exports = {
  getLatLong: getLatLong,
  getNoaa: getNoaa
};

getLatLong("30084");
getNoaa("-102.0,32.7");
//Get Route For Mapquest Geocode
//GET route for NOAA Severe Weather
//Possible GET Route for ATTOM
