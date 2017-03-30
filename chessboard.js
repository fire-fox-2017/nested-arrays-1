'use strict'

const makeChessboard = () => {

    let chessboard = [];
    let data = 8;
    for (let i=0; i<data; i++){
      chessboard.push([])

        for(let j=0; j<data; j++) {
            if(i == 0 && j == 0) {
              chessboard[i].push("Benteng Hitam");
            } else if(i==0 && j==1) {
              chessboard[i].push("Kuda Hitam");
            } else if(i==0 && j==2) {
              chessboard[i].push("Bishop Hitam");
            } else if(i==0 && j==3) {
              chessboard[i].push("Raja Hitam");
            } else if(i==0 && j==4) {
              chessboard[i].push("Mentri Hitam");
            } else if(i==0 && j==5) {
              chessboard[i].push("Bishop Hitam");
            } else if(i==0 && j==6) {
              chessboard[i].push("Kuda Hitam");
            } else if(i==0 && j==7) {
              chessboard[i].push("Benteng Hitam");
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

              if(i == 7 && j == 0) {
                chessboard[i].push("Benteng Putih");
              } else if(i==7 && j==1) {
                chessboard[i].push("Kuda Putih");
              } else if(i==7 && j==2) {
                chessboard[i].push("Bishop Putih");
              } else if(i==7 && j==3) {
                chessboard[i].push("Raja Putih");
              } else if(i==7 && j==4) {
                chessboard[i].push("Mentri Putih");
              } else if(i==7 && j==5) {
                chessboard[i].push("Bishop Putih");
              } else if(i==7 && j==6) {
                chessboard[i].push("Kuda Putih");
              } else if(i==7 && j==7) {
                chessboard[i].push("Benteng Putih");
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
