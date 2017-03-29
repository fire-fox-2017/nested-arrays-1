'use strict'

const makeChessboard = () => {

  // ... write your code here

  var chessboard = [];
  var bidakCatur = ['Benteng', 'Kuda', 'Gajah', 'Menteri', 'Raja', 'Gajah', 'Kuda', 'Benteng'];
  var pionCatur = ['Pion'];

  for (var i = 0; i < 8; i++) {
    chessboard.push([]);
  }

  for (var baris = 0; baris < chessboard.length; baris++) {
    for(var kolom = 0; kolom < chessboard.length; kolom++){
      if (baris === 0) {
        chessboard[baris].push(bidakCatur[kolom] + ' Hitam');
      } else if (baris === 1){
        chessboard[baris].push(pionCatur[0] + ' Hitam');
      } else if (baris === 6){
        chessboard[baris].push(pionCatur[0] + ' Putih');
      } else if (baris === 7){
        chessboard[baris].push(bidakCatur[kolom] + ' Putih');
      } else {
        chessboard[baris].push(' ');
      }
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
