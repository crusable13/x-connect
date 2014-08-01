var readline = require('readline');  // this line imports a new module and returns an object
// how it works is a little complecated and we will get to it later, but for now know that the
// funciton 'require' takes a string and returns an object

// readline is an object with a method createInterface
// createInterface is returning an object, which we store in the variable 'rl'
var rl = readline.createInterface({ // create interface takes an object as its argument
    input: process.stdin,  // with 2 properties, input and output
    output: process.stdout // stdin and stdout < stand for standard in and standard out
});

/*
problems

var thing = 'baz'
thing = thing + 'bar' + '|'
thing == 'bazbar|'
var row1 = aBoard.board[0][0];
row1 = row1 + aBoard.board[1][0];
*/

// problem 1 what about when a space is undefined -> ' '
// problem 2 XXO X in between each element we need '|'
// problme 3 X|O|X| |
///          X|X| |O| ------------- no bar between lines
// we also  | | | |
//          +-+-+-+
//          | | | |
//          rl.write("somestrg v ping")


aBoard = {
  xSize : 10,
  ySize : 10,
  board: [ ['X', 'O', 'X', 'X'] ,['X', 'O', 'O'], ['X', , 'O'], [],[],[],[],[],[],[]]
}
function presentBoard(thisBoard){
//  <arrayname>[0]
  for(var i = 0; i < thisBoard.board.length; i++) {
  var arrayValue = thisBoard.board[i];
    var line = '';
    var divider = '';
    for(var j =0; j < arrayValue.length; j++) {
      if(arrayValue[j] !== undefined) {
    line = line + arrayValue[j] + "|";
      divider = divider +      "-+"
      }
      else {
        line = line + "|";
      divider =divider + "-+"
      }
    }
    line = line + "\n"
    divider = line + "\n"
    rl.write(line);
  rl.write(divider);  
  }
}


// X|O|X|X|X|O|O|X| |O|
//problems:
// 1) all in one line -> \n
// 2) no bars between lines
// 3)
presentBoard(aBoard);
// I Have an idea on how to  make it better but i have no idea where i would start
rl.close();

