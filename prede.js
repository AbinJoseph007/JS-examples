// function definition of greet function
function greet(name, callback) {
    console.log('hai',name);
    callback()
}
// function definition of callme function
function callme() {
    console.log('i am a call back function');
}
// function call
greet('peter',callme)