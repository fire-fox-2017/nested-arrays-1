'use strict'

const makeChessboard = () => {
  let chessboard = [];
  // ... write your code here
  var color = "black white";
  var bidak = "rook knight bishop queen king bishop knight rook";
  var chessColor = color.split(' ');
  var chessKingdom = bidak.split(' ');
  var chessPion = [];
  var i, j;
  for (i=0; i<chessKingdom.length; i++){
    chessPion.push("pion");
  }
  var chessKingdomWhite = [];
  var chessKingdomBlack = [];
  var pionWhite = [];
  var pionBlack = [];
    for(j=0; j<chessKingdom.length; j++){
      chessKingdomWhite.push(chessColor[1] + " " + chessKingdom[j]);
      chessKingdomBlack.push(chessColor[0] + " " + chessKingdom[j]);
      pionWhite.push(chessColor[1] + " " + chessPion[j]);
      pionBlack.push(chessColor[0] + " " + chessPion[j]);
    }
  chessboard.push(chessKingdomBlack);
  chessboard.push(pionBlack);
  chessboard.push(pionWhite);
  chessboard.push(chessKingdomWhite);

  chessboard.splice(2, 0, [], [], [], []);
  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  console.log(x);
}

printBoard(makeChessboard());

module.exports = {
  makeChessboard,
  printBoard
}
