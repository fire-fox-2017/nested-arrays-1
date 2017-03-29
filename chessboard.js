'use strict'

const makeChessboard = () => {
  let chessboard = []
  /*
  Posisi [0][0] adalah Benteng Hitam sebelah kanan dari pemain Hitam
  atau sebelah kiri pemain Putih
  */

  var petinggi = ["Benteng","Kuda","Gajah","Raja","Ratu","Gajah","Kuda","Benteng"];
  var pion = ["Pion"];
  var warna = ["Hitam","Putih"];
  var kosong = ["Kosong"];
  var baris_0 = [];
  var baris_1 = [];
  var baris_2 = [];
  var baris_3 = []
  var baris_4 = [];
  var baris_5 = [];
  var baris_6 = [];
  var baris_7 = [];
  for (let i = 0; i < 8; i++){
    switch (i) {
      case 0:
      for (let j = 0, k = 8; j < k;j++){
        baris_0.push(petinggi[j]+ " " + warna[0]);
      }
      chessboard.push(baris_0);
        break;

        case 1:
        for (let j = 0, k = 8; j < k;j++){
          baris_1.push(pion[0]+ " " + warna[0]);
        }
        chessboard.push(baris_1);
          break;

        case 2:
        case 3:
        case 4:
        case 5:
          for (let j = 0, k = 8; j < k;j++){
            baris_2.push(kosong[0]);
            baris_3.push(kosong[0]);
            baris_4.push(kosong[0]);
            baris_5.push(kosong[0]);
          }
        chessboard.push(baris_2);
        chessboard.push(baris_3);
        chessboard.push(baris_4);
        chessboard.push(baris_5);
          break;

        case 6:
          for (let j = 0, k = 8; j < k;j++){
            baris_6.push(pion[0]+ " " + warna[1]);
          }
          chessboard.push(baris_6);
            break;

          case 7:
            for (let j = 0, k = 8; j < k;j++){
              baris_7.push(petinggi[j]+ " " + warna[1]);
            }
            chessboard.push(baris_7);
              break;

      default:
      "";
    }

  }

  /*
  Uncomment bila tidak menemukan prinsip pengulangan yang baik
  chessboard = [["Benteng Hitam","Kuda Hitam","Gajah Hitam","Raja Hitam","Ratu Hitam","Gajah Hitam","Kuda Hitam","Benteng Hitam"],
                ["Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam"],
                ["","","","","","","","","",""]];
                ["","","","","","","","","",""]];
                ["","","","","","","","","",""]];
                ["","","","","","","","","",""]];
                ["Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih"],
                ["Benteng Putih","Kuda Putih","Gajah Putih","Raja Putih","Ratu Putih","Gajah Putih","Kuda Putih","Benteng Putih"]]
  */
  return chessboard
}
const printBoard = x => {
  console.log(x)
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
