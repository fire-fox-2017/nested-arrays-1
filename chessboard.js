'use strict'

let chessboard = []
const makeChessboard = () => {

    for (let x = 0; x < 8; x++) {
        chessboard.push([])
        for (let y = 0; y < 8; y++) {
            if (x == 1) {
              chessboard[x].push('Pion wit')
            } else if (x == 6) {
              chessboard[x].push('Pion hit')
            } else if (x == 0 && y == 0 || x == 0 && y == 7 ) {
              chessboard[x].push('Ben wit')
            } else if (x == 7 && y == 0 || x == 7 && y == 7) {
              chessboard[x].push('Ben hit')
            } else if (x == 0 && y == 1 || x == 0 && y == 6) {
              chessboard[x].push('Kuda wit')
            } else if (x == 7 && y == 1 || x == 7 && y == 6) {
              chessboard[x].push('Kuda hit')
            } else if (x == 0 && y == 2 || x == 0 && y == 5) {
              chessboard[x].push('Pelun wit')
            } else if (x == 7 && y == 2 || x == 7 && y == 5) {
              chessboard[x].push('Pelun hit')
            } else if (x == 0 && y == 3) {
              chessboard[x].push('Men wit')
            } else if (x == 7 && y == 4) {
              chessboard[x].push('Men hit')
            } else if (x == 0 && y == 4) {
              chessboard[x].push('King wit')
            } else if (x == 7 && y == 3) {
              chessboard[x].push('King hit')
            }else {
              chessboard[x].push('Kosong')
            }
        }
    }
// console.log(chessboard)
    // ... write your code here
    return chessboard
}

const printBoard = x => {
    // ... write your code here
    let chess = makeChessboard()
    let baris2 = []
    for(let i=0; i<8; i++){
      baris2.push(chess[i].join('|'))
    }
    baris2 = baris2.join('\n')
    console.log(baris2)
}

printBoard(makeChessboard())

module.exports = {
    makeChessboard,
    printBoard
}
