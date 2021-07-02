const request = require('request');


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data.length) {

      return callback(`no cat found`, null);
    }
    const record = data[0];
    return callback(null, record.description);
  });
};
module.exports = { fetchBreedDescription };

