'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let chessPion = [];
  let chessResult = [];
  let chessSize = 8;
  let chessName1 = ["Benteng", "Kuda", "Bishop", "Ratu", "Raja", "Bishop", "Kuda", "Benteng"];
  let chessName2 = "pion";

  // ... write your code here
  for (var i = 0; i < 8; i++) {
    chessPion.push(chessName2);
  }

  for (let idxRow = 0; idxRow < chessSize; idxRow++) {
    for (let idxCol = 0; idxCol < chessSize; idxCol++) {
      if (idxRow === 0) {
        chessboard.push(chessName1[idxCol]+ " Putih");
      } else if (idxRow === 1) {
        chessboard.push(chessPion[idxCol]+ " Putih");
      } else if (idxRow === 6) {
        chessboard.push(chessPion[idxCol]+ " Hitam");
      } else if (idxRow === 7) {
        chessboard.push(chessName1[idxCol]+ " Hitam");
      } else {
        chessboard.push(" ");
      }
    }
  }

  for (let n = 0; n < chessboard.length; n+=8) {
    chessResult.push(chessboard.slice(n, n+8));
  }
  return chessResult;
}

const printBoard = x => {
  // ... write your code let
  for (let c = 0; c < 8; c++) {
    console.log(x.slice(c, c+1).join(' '));
  }

  // console.log(x[7][0]);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
