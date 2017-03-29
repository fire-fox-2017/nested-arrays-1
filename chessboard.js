'use strict'

const makeChessboard = () => {
  let chessboard = [];
  var caturhitam = ["Benteng Hitam", "Kuda Hitam", "Luncur Hitam", "Ster Hitam", "Raja Hitam","Luncur Hitam","Kuda Hitam","Benteng Hitam"];
  var pionputih = ["Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih"];
  var pionhitam = ["Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam"];
  var caturputih = ["Benteng Putih", "Kuda Putih", "Luncur Putih", "Ster Putih", "Raja Putih","Luncur Putih","Kuda Putih","Benteng Putih"];
  var empty = [" "," "," "," "," "," "," "," "];
  chessboard.push(caturputih,pionputih,empty,empty,pionhitam,caturhitam);

console.log(chessboard);
}
makeChessboard();


const printBoard = x => {
  // ... write your code here
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
