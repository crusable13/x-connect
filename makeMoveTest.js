var aBoard = {
  xSize : 10,
  ySize : 10,
  board: [[],[],[],[],[],[],[],[],[],[]]
}

function makeMove(x, y, person, board) {
  // is this a valid move
  if (true ) {
  // update the board

    return true;
  }
  else {
    return false;
  }
}
if(makeMove(7, 5, 'X', aBoard) ) {
	console.log("(7,5) = " + aBoard.board[7][5] + " should equal X");
}
else {
  console.log('makeMove failed and shouldnt have');
}
