aBoard = {
  xSize : 10,
  ySize : 10,
  board: [ ['X','O','X','X',   , , , , , ] ,
           ['X','O','O',   ,   , , , , , ],
           ['X',   ,'O',   ,   , , , , , ],
           ['O',   ,   ,'O',   , , , , , ],
           [   ,   ,   ,   ,'O', , , , , ],
           [   ,   ,   ,   ,   , , , , , ],
           [   ,   ,   ,   ,   , , , , , ],
           [   ,   ,   ,   ,   , , , , , ],
           [   ,   ,   ,   ,   , , , , , ],
           [   ,   ,   ,   ,   , , , , , ] ]
};

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

console.log(checkWin(aBoard));
