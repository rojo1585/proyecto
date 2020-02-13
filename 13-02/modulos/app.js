// JavaScript source code
//
let greet = require('./greetOne.js');
greet();
//reciviendo una funcion anonima()
let greet2 = require('./greetTwo.js').greet;
greet2();

//mandando a llamar al funcion del modulo 3
let greet3 = require('./greetThree.js');
greet3.greet();
//cambiando el valor del metodo del modo
greet3.greeting = 'new hello world';

let greet3b = require('./greetThree.js');
greet3b.greet();

// importa la clase
let Greet4 =  require('./greetFour.js');
// hace una instancia de la clase para poder utili
var grtr = new Greet4();
grtr.greet();