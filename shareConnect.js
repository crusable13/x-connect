

aBoard = {
  xSize : 10,
  ySize : 10,
  board: [[],[],[],[],[],[],[],[],[],[]]
}

function makeMove(x, y, person, board) {
  // is this a valid move
  if ( ) {
  // update the board
    
    return true;
  }
  else {
    return false;
  }
}

if(makeMove(9, 2, 'X' aBoard) ){
   console.log(aBoard.board[9][2])
}
else {
  console.log('make move failed and shouldnt have');
}

if(makeMove(9, 2, 'Y', aBoard) ) {
  console.log('make move shouldnt have worked');
}
else {
  console.log("yeah!")
}

function checkWin(board) {
  // return either 'X', 'Y', ''  
}


function presentBoard(board){
  //  display board
}



var currentPlayer = 'X';
var gameOn = true;
while (gameOn) {
  presentBoard(aBoard);

  var moves = [];
  getMoves(1);
  move = moves[0];
  

  if(  makeMove(move.x, move.y, currentPlayer, aBoard) ) {
    var winner = checkWin(aBoard);
    if (winner) {
       gameOn = false;
    }
  else {
      // we don't really do anything
    }
  if(currentPlayer == 'X') {
      currentPlayer = 'Y'
  }
  else {
      currentPlayer = 'X'
  }
  }
  else {
    // tell them the move wasn't vaild
  }
}

/*
to build:
makeMove
checkWin
presentBoard

*/