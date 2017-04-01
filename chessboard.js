'use strict'
'use strict'

const makeChessboard = () => {
  var chessboard = [];
  var empty = " ";
  var catur = ["Benteng", "Kuda", "Luncur", "Raja", "Ster", "Luncur", "Kuda", "Benteng"];
  var warna = ["Hitam", "Putih"];
  var pion = "Pion";
  for (var a = 0; a<8; a++){
    chessboard.push([]);
  }
  for (var i=0; i<8; i++){
    chessboard[0].push(" "+catur[i]+" "+warna[1]+" ");
    chessboard[1].push( "  " + pion + " " + warna[1] +" ");
    chessboard[2].push(empty);
    chessboard[3].push(empty);
    chessboard[4].push(empty);
    chessboard[5].push(empty);
    chessboard[6].push("  "+ pion + " " +warna[1]+" ");
    chessboard[7].push(" "+catur[i]+" "+warna[1]+" ");
  }
  return chessboard;
}


const printBoard = x => {
console.log(x);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
