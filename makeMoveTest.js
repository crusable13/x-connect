var aBoard = {
  xSize : 10,
  ySize : 10,
  board: [[],[],[],[],[],[],[],[],[],[]]
}
var anotherBoard = {
  xSize : 9,
  ySize : 9,
  board: [[],[],[],[],[],[],[],[],[]]
}

function makeMove(x, y, person, thisBoard) {
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
  thisBoard.board[x][y] = person;
}

if(makeMove(7, 5, 'X', anotherBoard) ) {
  console.log("(7,5) = " + anotherBoard.board[7][5] + " should equal X");
    console.log("(8,2) = " + anotherBoard.board[8][2] + " should equal undefined");
}
else {
  console.log('makeMove failed and shouldnt have');
}

if(makeMove(7, 5, 'X', aBoard) ) {
  console.log("(7,5) = " + aBoard.board[7][5] + " should equal X");
    console.log("(8,2) = " + aBaord.board[8][2] + " should equal undefined");
}
else {
  console.log('makeMove failed and shouldnt have');
}
