var readline = require('readline');  // this line imports a new module and returns an object

aBoard = {
  xSize : 10,
  ySize : 10,
  board: [ ['X','O','X','X', , , , , , ] ,
           ['X','O','O',   , , , , , , ],
           ['X',   ,'O',   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ],
           [   ,   ,   ,   , , , , , , ] ]
}

function presentBoard(thisBoard){
    var rl = readline.createInterface({ // create interface takes an object as its argument
        input: process.stdin,  // with 2 properties, input and output
        output: process.stdout // stdin and stdout < stand for standard in and standard out
    });
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
  rl.close();
}

module.exports = presentBoard;
