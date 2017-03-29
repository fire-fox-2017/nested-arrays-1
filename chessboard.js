'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
    let chessboard = [];
  // ... write your code here
  var chessColor = ['black', 'white'];
  var chessKingdom = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  var chessPion = ['pion', 'pion', 'pion', 'pion', 'pion', 'pion', 'pion', 'pion'];
  var chessKingdomWhite = [];
  var chessKingdomBlack = [];
  var pionWhite = [];
  var pionBlack = [];
  for (var i=0; i<chessKingdom.length; i++){
    chessKingdomWhite.push(chessColor[1] + " " + chessKingdom[i]);
    chessKingdomBlack.push(chessColor[0] + " " + chessKingdom[i]);
    pionWhite.push(chessColor[1] + " " + chessPion[i]);
    pionBlack.push(chessColor[0] + " " + chessPion[i]);
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

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
