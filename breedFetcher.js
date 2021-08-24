const request = require('request');
const breed = process.argv[2];

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(url, (error, response, body) => {
  if (error) {
    console.log(`The following error occured: ${error}`);
  } else {
    const data = JSON.parse(body);
    if ((data[0] !== undefined) && (response.statusCode === 200)) {
      console.log(data[0].description);
    } else {
      console.log("Sorry, the breed you requested has not been found.");
    }
  }
});