// we are using someone else module
var readline = require('readline');

// readline is an object witha method createInterface
// createInterface is returning an object, which we store in the variable 'rl'
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


rl.question("Where on the board would you like to move? ", 
	function(answer) {
   // we are inside the call back function it gets executed after
   // the user hits 'enter'
   console.log("Did you want to move here?",answer);
	var baz = answer;
});

console.log("Your first move was", answer)
// You must close the readline interface  or the program will never exit
// so I close it after waiting 5000 ms (or 5 sec)
setTimeout(function(){
   rl.close();
}, 10000);
