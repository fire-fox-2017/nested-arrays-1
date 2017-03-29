'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let chess = ["Benteng","Kuda","Peluncur","Menteri","Raja","Peluncur","Kuda","Benteng"];
  let pawn = ["Pion","Pion","Pion","Pion","Pion","Pion","Pion","Pion"];

  for(var i=0;i<8;i++){
    chessboard.push([]);
    for(var j=0;j<8;j++){
      if(i===0){
        chessboard[i].push(chess[j]+" Hitam");
      }else if(i===1){
        chessboard[i].push(pawn[j]+" Hitam");
      }else if(i===6){
        chessboard[i].push(pawn[j]+" Putih");
      }else if(i===7){
        chessboard[i].push(chess[j]+" Putih");
      }
    }
  }

  return chessboard
}

const printBoard = x => {
  // ... write your code here
  console.log(x[0][1]);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
