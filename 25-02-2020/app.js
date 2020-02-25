/* JavaScript source code
let person = {
    firstName: ' ',
    lastName: ' ',
    greet: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
//Object.create crea un nuevo objeto apartir de un objec literal .
let jhon = Object.create(person);
jhon.firstName = 'jhon';
jhon.lastName = 'doe';

let jane = Object.create(person);
jane.firstName = 'jane';
jane.lastName = 'doe';

console.log(jhon.greet());
*/
/*
var EventEmitter = require('events');
var until = require('util');

function Greetr() {
    this.greeting = 'hello world';
}

until.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting);
    this.emit('greet',data);
}

let greeter1 = new Greetr();

greeter1.on('greet', function (data) {
    console.log('some greeted: ' + data + '' + param);
})

greeter1.greet('red');
*/

let obj = {
    name: 'jhon doe',
    greet: function (param) {
        console.log('hello ' + this.name + '' + param);
    }
}
var param = 'h';
obj.greet(param);
obj.greet.call({ name: 'jane Doe' }, param);
obj.greet.apply({ name: 'jane Doe' }, [param]);



