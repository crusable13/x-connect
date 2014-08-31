var readline = require('readline');  // this line imports a new module and returns an object
// how it works is a little complecated and we will get to it later, but for now know that the
// funciton 'require' takes a string and returns an object

// readline is an object with a method createInterface
// createInterface is returning an object, which we store in the variable 'rl'
var rl = readline.createInterface({ // create interface takes an object as its argument
    input: process.stdin,  // with 2 properties, input and output
    output: process.stdout // stdin and stdout < stand for standard in and standard out
});


var aBoard = {
  xSize : 10,
  ySize : 10,
  currentPlayer: 'X',
  board: [ [, ,,, , , , , , ] ,
           [,,,   , , , , , , ],
           [,,,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ] ]
}


function handleTurn (move, aBoard) {
    if(  makeMove(move.x, move.y, aBoard) ) {
        var winner = checkWin(aBoard);
        if (winner) {
            rl.close();
        }
        else {
            if(aBoard.currentPlayer == 'X') {
                aBoard.currentPlayer = 'O'
            }
            else {
                aBoard.currentPlayer = 'X'
            }
            gameOn(aBoard);
        }


    }
    else {
        gameOn(aBoard);
        // tell them the move wasn't vaild
    }
}


function gameOn(aBoard) {
    presentBoard(aBoard);
    getMove(aBoard, handleTurn);
}


function vector (x, y) {
    this.x = x;
    this.y = y;
}

/**
* return the substring that is the user string 'X', 'O'
* otherwise ''
*/
function checkWin (aBoard) {
    var directions = [
        new vector(-1,0), // left
        new vector(-1,1), // left-up
        new vector(0,1),  // up
        new vector(1,1),  // up-right
        new vector(1,0),  // right
        new vector(1,-1), // down-right
        new vector(0,-1), // down
        new vector(-1,-1) // down-left
                      ];

    for(var i = 0; i < aBoard.xSize; i++) {
        for(var j = 0; j < aBoard.ySize; j++) {
            for(var dir = 0; dir < directions.length; dir++){
                var loc = {x:i, y:j};
                var winner = checkDirection(aBoard, directions[dir], loc );
                if(winner) {
                    return winner;
                }
            }
        }
    }
    return '';
}

function checkDirection (aBoard, dirVec, loc) {
    // while I there is still a chance for a win
    var person = aBoard.board[loc.x][loc.y];
    for(var i = 1; i < 4; i++) {
        var column = aBoard.board[loc.x + (dirVec.x * i)];
        if (column) {
/*            console.log("person " + person +
                        " loc " + loc.x + " " + loc.y +
                        " value  " + column[loc.y + (dirVec.y * i)] +
                        " vector " + dirVec.x + " " + dirVec.y) */
            if (person !==  column[loc.y + (dirVec.y * i)]) {
                return '';
            }
        }
        else {
            return '';
        }
    }
    return person;
}


function makeMove(x, y, thisBoard) {
  // is this a valid move
  if(x >= thisBoard.xSize || x < 0) {

    return false
  }
  if(y >= thisBoard.ySize || y < 0) {

    return false
  }
  if(thisBoard.board[x][y] !== undefined) {

    return false
  }
  // this is now a valid move
  // update board
  thisBoard.board[x][y] = thisBoard.currentPlayer;
return true
}


function presentBoard(thisBoard){
  for(var i = 0; i < thisBoard.board.length; i++) {
  var arrayValue = thisBoard.board[i];
    var line = '|';
    var divider = '';
    for(var j =0; j < arrayValue.length; j++) {
      if(arrayValue[j] !== undefined) {
      line = line + arrayValue[j] + "|";
      divider = divider +      "+-"
      }
      else {
        line = line + " |";
        divider =divider + "+-"
      }
    }
    line = line + "\n"
    divider = divider + "+\n"
    rl.write(line);
  rl.write(divider);
  }
}




function getMove(aBoard, handleMove) {
    var move = {}; // moves are objects
    console.log("Where on the board would you like to move?");
    rl.question("X:",
        function(X) { // <<< start of callback 1
            // we are inside the call back function it gets executed after
            // the user hits 'enter'
            rl.question("Y:", function(Y) { // << start of callback 2.
                var Y = parseInt(Y);
                if(isNaN(Y)) {
                    Y = -1
                }
                //This callback is called after the user hits 'enter'
                move.y = Y; // moves have a property y
                handleMove(move, aBoard);
            }); // << start of callback 2
            var X = parseInt(X);
            if(isNaN(X)) {
                X = -1
            }
            move.x = X; // moves have a property x

        }); // <<< end of callback 1
}


gameOn(aBoard);
