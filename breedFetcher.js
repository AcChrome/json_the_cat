const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  if (!data.length) {
    console.log(`no cat found`);
    return;
  }

  const record = data[0];
  console.log(record.description);
});


// const args = process.argv;
// let newArray = args.slice(2);
