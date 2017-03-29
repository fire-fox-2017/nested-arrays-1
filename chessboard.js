'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let row = 8;
  let col = 8;

  let strBackRowSet = "Rook Knight Bishop King Queen Bishop Knight Rook";
  let backRowSet = strBackRowSet.split(" ");

  let frontRowSet = [];
  for (let i = 0; i < row; i++) {
    frontRowSet.push("Pawn");
  }

  let other = [];
  for (let i = 0; i < row; i++) {
    other.push("Empty");
  }

  let colors = ["White", "Black"];

  for (var i = 0; i < row; i++) {
    chessboard.push([]);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0) {
        chessboard[i].push(colors[0] + " " + backRowSet[j]);
      } else if (i === 1) {
        chessboard[i].push(colors[0] + " " + frontRowSet[j]);
      } else if (i === row-1) {
        chessboard[i].push(colors[1] + " " + backRowSet[j]);
      } else if (i === row-2) {
        chessboard[i].push(colors[1] + " " + frontRowSet[j]);
      } else {
        chessboard[i].push("empty");
      }
    }
  }

  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  for (let i = 0; i < x.length; i++) {
    for (let j =0; j < x[i].length; j++) {
      console.log(x[i][j]);
    }

  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
