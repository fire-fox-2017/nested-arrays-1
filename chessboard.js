'use strict'

const makeChessboard = () => {
  let chessboard = [];
  // ... write your code here
  var bidak1 = ['Benteng', 'Kuda', 'Gajah', 'Ratu', 'Raja', 'Gajah', 'Kuda', 'Benteng'];
  var bidak2 = 'Pion'
  var warna = ['Hitam','Putih'];
  var array=[];

  for(var i=0;i<bidak1.length;i++){
    array.push(bidak1[i]+' '+warna[0]);
  }

  for(var i=0;i<8;i++){
    array.push(bidak2+' '+warna[0]);
  }

  //dibawah ini klo mau jelaskan keterangan warna kotak yang kosong
  /*
  for(var x=0;x<2;i++){
    for(var i=0;i<8;i++){
      if (i%2===0) {
        array.push('tidak ada bidak, hanya ada kotak kosong '+warna[1]);
      } else {
        array.push('tidak ada bidak, hanya ada kotak kosong '+warna[0]);
      }
    }

    for(var i=0;i<8;i++){
      if (i%2===0) {
        array.push('tidak ada bidak, hanya ada kotak kosong '+warna[0]);
      } else {
        array.push('tidak ada bidak, hanya ada kotak kosong '+warna[1]);
      }
    }
  }
  */

  for(var i=0;i<32;i++){
    array.push('kosong');
  }

  for(var i=0;i<8;i++){
    array.push(bidak2+' '+warna[1]);
  }

  for(var i=0;i<bidak1.length;i++){
    array.push(bidak1[i]+' '+warna[1]);
  }

  for(var j=0;j<array.length;j+=8){
    chessboard.push(array.slice(j,j+8));
  }
  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  var temp=[];
  for(var k=0;k<8;k++){
    console.log(x.slice(k,k+1).join('  '));
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
