const request = require('request');
const address = require('./address.js')

b = address(1);
console.log(b.StreetAddress);

request(`https://api.mapbox.com/geocoding/v5/mapbox.places/{b.StreetAddress}?access_token=pk.eyJ1Ijoicm9qbzE1ODUiLCJhIjoiY2s3bTAxdGljMGR1YzNkbzJqcnVta2Z5NSJ9.n59DT2Y3acqCEOlqplNt3A`, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log('body:',body)
});



