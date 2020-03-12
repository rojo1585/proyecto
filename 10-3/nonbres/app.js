var  randomNum = require('random-numbers-generators');
var direccions = require('./address.js')

const request = require('request');

request('https://swapi.co/api/people/'+randomNum(5)+'/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log('body:',body)
});

direccions(1);