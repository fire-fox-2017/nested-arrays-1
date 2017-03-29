'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let bidak = ["benteng", "   kuda", " mentri", "   raja", "   ratu", " mentri", "   kuda", "benteng"]
  let kubu = ["hitam", "putih"]
  let pion = "   pion"
  let kosong = "_____________"

  for(let i = 0; i < 8; i++){
    let tampung = []
    chessboard.push(tampung)
    for(let j = 0; j < 8; j++){
      tampung.push([])
    }
  }

  for(let k = 0; k < 8; k++){
    chessboard[0][k] = `${bidak[k]} ${kubu[0]}`
    chessboard[1][k] = `${pion} ${kubu[0]}`
    chessboard[2][k] = kosong
    chessboard[3][k] = kosong
    chessboard[4][k] = kosong
    chessboard[5][k] = kosong
    chessboard[6][k] = `${pion} ${kubu[1]}`
    chessboard[7][k] = `${bidak[k]} ${kubu[1]}`
  }

  return chessboard
}

const printBoard = x => {
  // ... write your code here
  for(let k = 0; k < 8; k++){
    //for(let l = 0; l < 8; l++){
      console.log(x[k].join("|"))
    //}
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
