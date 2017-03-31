'use strict'

const makeChessboard = () => {
  let chessboard = []

  let pionPutih = 'Pion Putih'
  let pionHitam = 'Pion Hitam'
  let rajaHitam = ['Benteng Hitam','Kuda Hitam', 'Peluncur Hitam', 'Menteri Hitam', 'Raja Hitam', 'Peluncur Hitam', 'Kuda Hitam', 'Benteng Hitam'];
  let rajaPutih = ['Benteng Putih','Kuda Putih', 'Peluncur Putih', 'Menteri Putih', 'Raja Putih', 'Peluncur Putih', 'Kuda Putih', 'Benteng Putih'];

  // ... write your code here

  for(let i = 0 ; i < 8 ; i++ )
  {
    chessboard.push([]);
      if(i==0)
      {
        chessboard[i] = rajaHitam ;
      }

      else if(i==1)
      {
        for(let j=0;j<8;j++){
          chessboard[i].push(pionHitam);
        }
      }

      else if(i==6)
      {
        for(let j=0;j<8;j++){
          chessboard[i].push(pionPutih);
        }
      }

      else if(i==7)
      {
        chessboard[i] = rajaPutih;
      }

      else
      {
        for(let j=0;j<8;j++){
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
