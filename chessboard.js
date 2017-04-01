'use strict'

const makeChessboard = () => {
  let chessboard = []
  let anakCatur = ['Benteng', 'Kuda', 'Menteri', 'Ratu', 'Raja', 'Menteri', 'Kuda', 'Benteng'];
  let row;
  for (let i = 0; i < 8; i++) {
    row = []
    chessboard.push(row)
    switch (i) {
      case 0:
        for (let k = 0; k < anakCatur.length; k++) {
          row.push(anakCatur[k] + " Hitam")
        }
        break
      case 1:
        for (let l = 0; l < 8; l++) {
          row.push("Pion Hitam")
        }
        break
      case 2:
      case 3:
      case 4:
      case 5:
        for (let k = 0; k < anakCatur.length; k++) {
          row.push(0)
        }
        break;
      case 6:
        for (let l = 0; l < 8; l++) {
          row.push("Pion Putih")
        }
        break
      case 7:
        for (let k = 0; k < anakCatur.length; k++) {
          row.push(anakCatur[k] + " Putih")
        }
        break
      default:
        console.log('default');
        
    }
  }

  return chessboard
}

const printBoard = x => {
  console.log(x)
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}