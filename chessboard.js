'use strict'

function susun(indexRow){
  let pasukan = ['pion','benteng','kuda','mentri','raja','permaisuri'];
  let w = '';
  let susunan = [];


  if(indexRow==0||indexRow==7){
    if(indexRow==0){
      w=' hitam';
    }else{
      w=' putih';
    }
    for(let i = 1;i<pasukan.length;i++){
      susunan.push(pasukan[i]+w);
    }
    for(let i = pasukan.length-3;i>=1;i--){
      susunan.push(pasukan[i]+w);
    }
  } else if(indexRow == 1||indexRow == 6){
    if(indexRow==1){
      w=' hitam';
    }else{
      w=' putih';
    }
    for(let i=0;i<8;i++){
      susunan.push(pasukan[0]+w);
    }
  } else{
    for(let i=0;i<8;i++){
      susunan.push(" ");
    }
  }

  return susunan;
}

const makeChessboard = () => {
  let chessboard = [];

  for(let i=0;i<8;i++){
    chessboard.push(susun(i));
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
