'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let pieces = ["Pawn", "Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"];
  let pawn = ["Pawn"];
  let color = ["Black", "White"];

  for (let i = 0 ; i < 8 ; i++) {
    let row = [];
    if (i == 0) {
      // insert black pieces
      for (let j = 1 ; j <= 8 ; j++) {
          row.push(color[0] + " " + pieces[j]);
      }

    } else if (i == 1) {
      // insert black pawn
      for (let j = 1 ; j <= 8 ; j++) {
          // only insert pawn (pieces[0])
          row.push(color[0] + " " + pieces[0]);
      }
    } else if (i == 6) {
      // insert white pawn
      for (let j = 1 ; j <= 8 ; j++) {
          // only insert pawn (pieces[0])
          row.push(color[1] + " " + pieces[0]);
      }
    } else if (i == 7) {
      // insert white pieces
      for (let j = 1 ; j <= 8 ; j++) {
          row.push(color[1] + " " + pieces[j]);
      }
    } else {
      // insert empty string
      for (let j = 1 ; j <= 8 ; j++) {
          row.push(" ");
      }
    }

    chessboard.push(row);

  }

  // console.log(chessboard);
  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  let board = "";
  for ( let i = 0 ; i < 8 ; i++ ) {
    // console.log(x[i][0], x[i][1]);
    for (let j = 0 ; j < 8 ; j++ ) {
      board += "[" + x[i][j] + "]";
    }
    board += "\n";
  }

  console.log(board);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
