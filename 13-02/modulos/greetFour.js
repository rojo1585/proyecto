// JavaScript source code
function Greet() {
    this.greeting = 'Hello world'
    this.greet = function () {
        console.log(this.greeting);
    }
}
//inportando al clase gret
module.exports = Greet;