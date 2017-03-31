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

  var kosong = [];
  for (var k=0; k<chessKingdom.length; k++){
    kosong.push('kosong');
  }
  chessboard.splice(2, 0, kosong, kosong, kosong, kosong);
  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  var tampil = '';
  var baris = [];
  for (var l=0; l<x.length; l++){
      baris.push(x[l].join(' - '));
  }
  for (l=0; l<x.length; l++){
    console.log('Baris ke '+l+' : '+baris[l]);
  }
}

printBoard(makeChessboard());

module.exports = {
  makeChessboard,
  printBoard
}
