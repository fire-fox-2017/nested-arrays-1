'use strict'

const makeChessboard = () => {
  let chessboard = [];
  


  // ... write your code here
  var jabatan = ['benteng', 'kuda', 'menteri', 'ratu', 'raja', 'menteri','kuda','benteng'];
  var pion = ['pion', 'pion','pion','pion','pion','pion','pion','pion']
  var warna = ['hitam','putih'];
  var posisijabatanhitam=[];
  var posisijabatanputih=[];
  var posisipionhitam=[];
  var posisipionputih=[];
  var papan=['','','','','','','',''];
   for (var i=0; i<jabatan.length; i++){

   	posisijabatanhitam.push(jabatan[i]+ " " +warna[0]);
   	posisijabatanputih.push(jabatan[i]+ " " +warna[1]);
   	posisipionhitam.push(pion[i]+" "+warna[0]);
   	posisipionputih.push(pion[i]+" "+warna[1]);
   	
   }
   for ( var a=0; a<=papan.length-1; a++){

   }
   

   for (var b=0; b<=7; b++){
    if (b===0){
      chessboard.push(posisijabatanhitam);
    }
    else if (b===1){
      chessboard.push(posisipionhitam);
    }
    else if (b===2){
      chessboard.push(papan);
    }
    else if (b===3){
      chessboard.push(papan);
    }
    else if (b===4){
      chessboard.push(papan);
    }
    else if (b===5){
      chessboard.push(papan);
    }
    else if (b===6){
      chessboard.push(posisipionputih);
    }
    else if (b===7){
      chessboard.push(posisijabatanputih);
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
