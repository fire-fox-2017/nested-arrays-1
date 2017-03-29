'use strict'

const makeChessboard = () => {
  let chessboard = []
    for (let x = 0; x < 8; x++) {
        let arr_n = []
        for (let y = 0; y < 8; y++) {
            if (x == 1) {
              arr_n.push('Pion wit')
            } else if (x == 6) {
              arr_n.push('Pion hit')
            } else if (x == 0 && y == 0 || x == 0 && y == 7 ) {
              arr_n.push('Ben wit')
            } else if (x == 7 && y == 0 || x == 7 && y == 7) {
              arr_n.push('Ben hit')
            } else if (x == 0 && y == 1 || x == 0 && y == 6) {
              arr_n.push('Kuda wit')
            } else if (x == 7 && y == 1 || x == 7 && y == 6) {
              arr_n.push('Kuda hit')
            } else if (x == 0 && y == 2 || x == 0 && y == 5) {
              arr_n.push('Pelun wit')
            } else if (x == 7 && y == 2 || x == 7 && y == 5) {
              arr_n.push('Pelun hit')
            } else if (x == 0 && y == 3) {
              arr_n.push('Men wit')
            } else if (x == 7 && y == 4) {
              arr_n.push('Men hit')
            } else if (x == 0 && y == 4) {
              arr_n.push('King wit')
            } else if (x == 7 && y == 3) {
              arr_n.push('King hit')
            }else {
              arr_n.push('Kosong')
            }
        }
        chessboard.push(arr_n)
    }
// console.log(chessboard)
    // ... write your code here
    return chessboard
}

const printBoard = x => {
    // ... write your code here
    let chess = makeChessboard()
    for(let i=0; i<8; i++){
      console.log(chess[i].join('|'))
    }
}
// makeChessboard()
printBoard()
// printBoard(makeChessboard())

module.exports = {
    makeChessboard,
    printBoard
}
