'use strict'

const makeChessboard = () => {

  // ... write your code here

  let chessboard = [];
  let bidakCatur = ['Benteng', 'Kuda', 'Gajah', 'Menteri', 'Raja', 'Pion',' '];

  for (var i = 0; i < 8; i++) {
    chessboard.push([]);
  }

  for (let baris = 0; baris < 8; baris++) {
    for (let kolom = 0; kolom < 8; kolom++) {
      if (baris === 0) {
        if (kolom === 0 || kolom === 7) {
          chessboard[0].push(bidakCatur[0] + ' Hitam');
        } else if (kolom === 1 || kolom === 6) {
          chessboard[0].push(bidakCatur[1] + ' Hitam');
        } else if (kolom === 2 || kolom === 5) {
          chessboard[0].push(bidakCatur[2] + ' Hitam');
        } else if (kolom === 3) {
          chessboard[0].push(bidakCatur[3] + ' Hitam');
        } else if (kolom === 4) {
          chessboard[0].push(bidakCatur[4] + ' Hitam');
        }
      }

      if (baris === 1) {
        chessboard[1].push(bidakCatur[5] + ' Hitam');
      }

      if (baris === 2){
        chessboard[2].push(bidakCatur[6]);
      }
      if (baris === 3){
        chessboard[3].push(bidakCatur[6]);
      }
      if (baris === 4){
        chessboard[4].push(bidakCatur[6]);
      }

      if (baris === 5) {
        chessboard[5].push(bidakCatur[6]);
      }

      if (baris === 6) {
        chessboard[6].push(bidakCatur[6]);
      }

      if (baris === 7) {
        if (kolom === 0 || kolom === 7) {
          chessboard[7].push(bidakCatur[0] + ' Putih');
        } else if (kolom === 1 || kolom === 6) {
          chessboard[7].push(bidakCatur[1] + ' Putih');
        } else if (kolom === 2 || kolom === 5) {
          chessboard[7].push(bidakCatur[2] + ' Putih');
        } else if (kolom === 3) {
          chessboard[7].push(bidakCatur[3] + ' Putih');
        } else if (kolom === 4) {
          chessboard[7].push(bidakCatur[4] + ' Putih');
        }
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
