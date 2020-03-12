const  randomNum = require('random-numbers-generators');
const direccions = require('./address.js')

const request = require('request');
//conexion con l aapi para conseguir un nombre random 
request('https://swapi.co/api/people/'+randomNum(5)+'/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }//manejo de error
  console.log('body:',body)//los datos obtenido se almacenan en boby
});

direccions(1);