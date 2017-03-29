'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  var arrTroops=["Benteng","Kuda","Gajah","Menteri","Raja","Gajah","Kuda","Benteng"];
  for (var i = 0; i < 8; i++) {
  	var arrTemp=[];
  	for (var j = 0; j < 8; j++) {
  		if(i==0){
  			arrTemp.push(arrTroops[j]+" Hitam");
  		}else if(i==1){
  			arrTemp.push("Budak Hitam");
  		}else if(i==6){
  			arrTemp.push("Budak Putih");
  		}else if(i==7){
  			arrTemp.push(arrTroops[j]+" Putih");
  		}else{
  			arrTemp.push("");
  		}
  	}
  	chessboard.push(arrTemp);
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
