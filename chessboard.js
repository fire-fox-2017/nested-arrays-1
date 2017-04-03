'use strict'

const makeChessboard = () => {
let chessboard= [];
  // ... write your code here
let susunanPutih=[];
let susunanHitam=[];
let bidakHitam=['bentang Hitam','kuda Hitam','peluncur Hitam','raja Hitam','ratu Hitam','peluncur Hitam','kuda Hitam','benteng Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam'];
let bidakPutih=['bentang Putih','kuda Putih','peluncur Putih','raja Putih','ratu Putih','peluncur Putih','kuda Putih','benteng Putih','pion Putih','pion Putih','pion Putih','pion Putih','pion Putih','pion Putih','pion Putih','pion Putih'];
let kosong=['','','','','','','',''];
  for(let i=0;i<8;i++)
  {
    if(i===0){
        chessboard.push(bidakHitam.slice(0,8));
    }
    else if(i===1){
       chessboard.push(bidakHitam.slice(8,16));
    }
    else if(i===6)
    {
      chessboard.push(bidakPutih.slice(8,16));
    }
    else if(i===7)
    {
      chessboard.push(bidakPutih.slice(0,8));
    }
    else {
      chessboard.push(kosong);
    }
  }

  return chessboard;
}
makeChessboard();
const printBoard = x => {
  // ... write your code here
  console.log(x);
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
