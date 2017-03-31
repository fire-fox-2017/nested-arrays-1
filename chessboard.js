'use strict'

const makeChessboard = () => {
  let chessboard = []

  // ... write your code here
  let chess = ["Benteng","Kuda","Peluncur","Menteri","Raja","Peluncur","Kuda","Benteng","Pion"];
  let color = ["Hitam","Putih"];

  for(var i=0;i<8;i++){
    chessboard.push([]);
    for(var j=0;j<chess.length-1;j++){
      if(i===0){
        chessboard[i].push(chess[j]+" "+color[0]);
      }else if(i===1){
        chessboard[i].push(" "+chess[8]+" "+color[0]+" ");
      }else if(i===2){
        chessboard[i].push("____________");
      }else if(i===3){
        chessboard[i].push("____________");
      }else if(i===4){
        chessboard[i].push("____________");
      }else if(i===5){
        chessboard[i].push("____________");
      }else if(i===6){
        chessboard[i].push(" "+chess[8]+" "+color[1]+" ");
      }else if(i===7){
        chessboard[i].push(chess[j]+" "+color[1]);
        if(j===3){
        chessboard[i].pop(chess[3]+" "+color[1]);
        chessboard[i].push(chess[4]+" "+color[1]);
      } else if(j===4){
        chessboard[i].pop(chess[4]+" "+color[1]);
        chessboard[i].push(chess[3]+" "+color[1]);
      }

      }
    }
  }
  return chessboard;
}

const printBoard = x => {
  // ... write your code here
  var tampil = '';
  var baris = [];
  for (var k=0; k<x.length; k++){
      baris.push(x[k].join(' | '));
  }
  for (k=0; k<x.length; k++){
    console.log(baris[k]);
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
