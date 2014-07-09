

// readline is an object witha method createInterface
// createInterface is returning an object, which we store in the variable 'rl'
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var answers = [];

function getMove() {
    var move = {};
    console.log("Where on the board would you like to move?");
    rl.question("X:",
        function(X) {
            // we are inside the call back function it gets executed after
            // the user hits 'enter'
            rl.question("Y:", function(Y) {
                move.y = Y;
                answers.push(move);
                if (answers.length > 9) {
                    rl.close();
                }
                else {
                    getMove();
                }
            });
            move.x = X;

        });

}

getMove();
