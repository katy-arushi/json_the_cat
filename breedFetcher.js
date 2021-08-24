const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback(`The following error occured: ${error}`, null);
    } else {
      const data = JSON.parse(body);
      if ((data[0] !== undefined) && (response.statusCode === 200)) {
        callback(null, (data[0].description));
      } else {
        callback(("Sorry, the breed you requested has not been found."), null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };