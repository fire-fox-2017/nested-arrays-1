// ... write your code here
class Spreadsheet {
  constructor () {
    this._spreadsheet = [
      ['Number', 'Name', 'Position', 'Points per Game']
    ]
  }
  addData (data) {
    this._spreadsheet.push(data);
  }
  getData () {
  }
}

//Comment line below if you find proper solution
let data0 = ["12", "Joe Schmo", "Center", [14,32,7,0,23]];
let data1 = ["9", "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]];
let data2 = ["31", "Harvey Kay", "Shooting Guard", [0,30,16,0,25]];
let data3 = ["18","Sally Talls","Power Forward",[18,29,26,31,19]];
let data4 = ["22","Mo Diboux", "Small Forward", [11,0,23,17,0]];

let Spreadsheets = new Spreadsheet();
Spreadsheets.addData(data0);
Spreadsheets.addData(data1);
Spreadsheets.addData(data2);
Spreadsheets.addData(data3);
Spreadsheets.addData(data4);

console.log(Spreadsheets._spreadsheet);
module.exports = Spreadsheet
