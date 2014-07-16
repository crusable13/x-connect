var readline = require('readline');  // this line imports a new module and returns an object
// how it works is a little complecated and we will get to it later, but for now know that the
// funciton 'require' takes a string and returns an object

// readline is an object with a method createInterface
// createInterface is returning an object, which we store in the variable 'rl'
var rl = readline.createInterface({ // create interface takes an object as its argument
    input: process.stdin,  // with 2 properties, input and output
    output: process.stdout // stdin and stdout < stand for standard in and standard out
});


rl.question("this", function (baz) { console.log(baz)});

setTimeout(function() {rl.close();}, 5000);