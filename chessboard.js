'use strict'

const makeChessboard = () => {

    let chessboard = [];
    let data = 8;
    let chess_hitam = ['Benteng','Kuda' ,'Bishop' ,'Raja' ,'Mentri' ,'Bishop' , 'Kuda' ,'Benteng' ]

    for (let i=0; i<data; i++){
      chessboard.push([])
        for(let j=0; j<data; j++) {
            if(i==0){
              chessboard[i].push(`${chess_hitam[j]} Hitam`)
            }
              //batas if 1
            if(i == 1) {
                if(j<8) {
                chessboard[i].push("Pion Hitam");
                }
            } else if (i>1 && i<6) {
              chessboard[i].push(" ");
            } else if(i==6) {
              chessboard[i].push("Pion Putih");
              }
              //batas if 2
              if(i==7){
                chessboard[i].push(`${chess_hitam[j]} Putih`)
              }
                  //Batas If 2
        }
    }


    // ... write your code here
    return chessboard;
}


const printBoard = x => {
  // ... write your code here
  let Rapihkan = makeChessboard()
    for(let i=0; i<8; i++){
      console.log(Rapihkan[i].join('|'))
    }

}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
