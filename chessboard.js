'use strict'

const makeChessboard = () => {
  let chessboard = []
  let bPieces = ['Black Rook','Black Knight','Black Bishop','Black Queen','Black King','Black Bishop','Black Knight','Black Rook']
  let bPawn = ['Black Pawn','Black Pawn','Black Pawn','Black Pawn','Black Pawn','Black Pawn','Black Pawn','Black Pawn']
  let wPieces = ['White Rook','White Knight','White Bishop','White Queen','White King','White Bishop','White Knight','White Rook']
  let wPawn = ['White Pawn','White Pawn','White Pawn','White Pawn','White Pawn','White Pawn','White Pawn','White Pawn']

  for (var a=0; a<8; a++) {
    chessboard[a] = []
  }
  chessboard[0] = bPieces
  chessboard[1] = bPawn
  chessboard[6] = wPawn
  chessboard[7] = wPieces
  return chessboard
}

const printBoard = x => {
  return makeChessboard
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
