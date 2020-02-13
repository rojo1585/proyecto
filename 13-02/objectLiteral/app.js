// JavaScript source code
//un objeto literal
//import './greetOne';
var person = {
    firstname: 'Jorge',
    lastname: 'Mendoza',
    //duncion anonima para mostrar datos
    greet: function () { console.log('hello ' + this.firstname + ' ' + this.lastname); }

}

person.greet();

console.log(person['firstname'])