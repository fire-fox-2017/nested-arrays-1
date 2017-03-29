'use strict'

const chessboardLength = 8;

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  const chess = ["Raja", "Menteri", "Gajah", "Kuda", "Benteng", "Bidak"];
  const color = ["Putih", "Hitam"];

  for (let i = 0; i < chessboardLength; i++) {
    chessboard.push([])
    for (let j = 0; j < chessboardLength; j++) {
      chessboard[i].push("");
    }
  }

  // Bar 1 and 8 Assignment
  for (let i = 0, j = 1; i < chessboardLength; i += 7, j--) {
    chessboard[i][0] = chess[4] + " " + color[j];
    chessboard[i][1] = chess[3] + " " + color[j];
    chessboard[i][2] = chess[2] + " " + color[j];
    chessboard[i][3] = chess[1] + " " + color[j];
    chessboard[i][4] = chess[0] + " " + color[j];
    chessboard[i][5] = chess[2] + " " + color[j];
    chessboard[i][6] = chess[3] + " " + color[j];
    chessboard[i][7] = chess[4] + " " + color[j];
  }


  // Bar 2 and 7 Assignment
  for (let i = 1, j = 1; i < chessboardLength - 1; i += 5, j--) {
    for (let k = 0; k < chessboardLength; k++) {
      chessboard[i][k] = chess[5] + " " + color[j];
    }
  }

  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  console.log(x);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
