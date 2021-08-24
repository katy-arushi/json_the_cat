const request = require('request');
const breed = process.argv[2]

const url = 'https://api.thecatapi.com/v1/breeds/search?q='

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  //console.log(data);
  console.log(data[0].description);
});