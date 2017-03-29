'use strict'

const makeChessboard = () => {

  let chessboard = []
  let mainPiece = ['Benteng', 'Kuda', 'Menteri', 'Raja', 'Ratu', 'Menteri', 'Kuda', 'Benteng'];
  let piece = ['Pion', 'Pion', 'Pion', 'Pion', 'Pion', 'Pion', 'Pion', 'Pion'];

  for(let i = 0; i < mainPiece.length; i++) {
    chessboard.push([]);
    for(let j = 0; j < mainPiece.length; j++) {
      if(i === 0) {
        chessboard[i].push(`${mainPiece[j]} Hitam`);
      } else if (i === 1) {
        chessboard[i].push(`${piece[j]} Hitam`);
      } else if (i === 6) {
        chessboard[i].push(`${piece[j]} Putih`);
      } else if (i === 7) {
        chessboard[i].push(`${mainPiece[j]} Putih`);
      } else {
        chessboard[i].push('');
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
