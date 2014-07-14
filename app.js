var readline = require('readline');  // this line imports a new module and returns an object
// how it works is a little complecated and we will get to it later, but for now know that the
// funciton 'require' takes a string and returns an object

// readline is an object with a method createInterface
// createInterface is returning an object, which we store in the variable 'rl'
var rl = readline.createInterface({ // create interface takes an object as its argument
    input: process.stdin,  // with 2 properties, input and output
    output: process.stdout // stdin and stdout < stand for standard in and standard out
});


var answers = [];  // I create an array for my answers

// rl.question is a function that takes 2 arguments: a string, and a 'callback' function
// what is a call back funciton you may ask? a call back is a function that is called some time in the future
// in this case the callback passed into the question function is executed after you hit enter.
// the callback function also gets passed a single arguement, where the value of that arguement
// is the string you typed before you hit enter

function getMove() {
    var move = {}; // moves are objects
    console.log("Where on the board would you like to move?");
    rl.question("X:",
        function(X) { // <<< start of callback 1
            // we are inside the call back function it gets executed after
            // the user hits 'enter'
            rl.question("Y:", function(Y) { // << start of callback 2.
                var Y = parseInt(Y);
                if(isNaN(Y)) {Y = 2}
                //This callback is called after the user hits 'enter'
                move.y = Y; // moves have a property y
                answers.push(move);
                if (answers.length > 2) { // this is where we decide how many moves to collect
                    rl.close();
                }
                else { // if we don't have enough moves, call getMove again and get another
                    getMove();
                }
            }); // << start of callback 2
            var X = parseInt(X);
            if(isNaN(X)) {X = 1}
            move.x = X; // moves have a property x

        }); // <<< end of callback 1

}

getMove();


/// A message from nathan

