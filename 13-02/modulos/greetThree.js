// JavaScript source code

//
function Greet() {
    this.greeting = 'Hello world' 
    this.greet = function () {
        console.log(this.greeting);
    }
}
//instanciando al clase gret
module.exports = new Greet();