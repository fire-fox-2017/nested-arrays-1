'use strict'

const makeChessboard = () => {
  let chessboard = [];
  var pie = ["rook", "knight", "bishop", "king", "queen", "bishop", "knight", "rook"];
  var col = ["black", "white"];
  var paw = "pawn";
  for (var a = 0; a<8; a++){
    chessboard.push([]);
  }
  for (var b=0; b<8; b++){
    chessboard[1].push(col[0]+" "+paw);
    chessboard[2].push("");
    chessboard[3].push("");
    chessboard[4].push("");
    chessboard[5].push("");
    chessboard[6].push(col[1]+" "+paw);
  }
  for (var i = 0; i<pie.length; i++){
    chessboard[0].push(col[0]+" "+pie[i]);
    chessboard[7].push(col[1]+" "+pie[i]);
  }
  return chessboard
}

const printBoard = x => {
  console.log(x[0]);
  console.log(x[1]);
  console.log(x[2]);
  console.log(x[3]);
  console.log(x[4]);
  console.log(x[5]);
  console.log(x[6]);
  console.log(x[7]);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
