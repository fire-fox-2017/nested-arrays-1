'use strict'

const makeChessboard = () => {
  let chessboard = [];
  var pie = ["rook", "knight", "bishop", "king", "queen", "bishop", "knight", "rook"];
  var col = ["black", "white"];
  var paw = "pawn";
  for (var a = 0; a<8; a++){
    chessboard.push([]);
  }
  for (var i=0; i<8; i++){
    chessboard[0].push(" "+col[0]+" "+pie[i]+" ");
    chessboard[1].push( "  " +col[0]+" "+paw+" ");
    chessboard[2].push("             ");
    chessboard[3].push("             ");
    chessboard[4].push("             ");
    chessboard[5].push("             ");
    chessboard[6].push("  "+col[1]+" "+paw+" ");
    chessboard[7].push(" "+col[1]+" "+pie[i]+" ");
  }
  return chessboard.join("  |      ");
}

const printBoard = x => {
  console.log(x);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
