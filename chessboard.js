'use strict'

const makeChessboard = () => {
  let chessboard = []
  var warna = [' Hitam', ' Putih'];
  var nama = ['Benteng', 'Kuda', 'Gajah', 'Raja', 'Menteri', 'Gajah', 'Kuda', 'Benteng'];

  // ... write your code here
  for (var i = 0 ; i < 8 ; i++){
     var newArr=[];
     chessboard.push(newArr);

    for (var j = 0; j < 8 ; j++){
      if (i === 0){
        chessboard[i].push(nama[j]+warna[0]);
      }else if(i === 7){
        chessboard[i].push(nama[j]+warna[1]);
      }else if(i === 1){
        chessboard[i].push('Bidak'+warna[0]);
      }else if(i === 6){
        chessboard[i].push('Bidak'+warna[1]);
      }else{
        chessboard[i].push('');
      }
    }
  }
  return chessboard
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
