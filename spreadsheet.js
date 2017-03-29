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

    return this._spreadsheet;
  }
}

let data = ['12','Joe Schmo','Center',[14,32,7,0,23]];
let data2 = ['9','Ken Buckets','Point Guard',[19,0,11,22,0]];
let data3 = ['31','Harvey Kay','Shooting Guard',[0,30,16,0,25]];
let data4 = ['18','Sally Talls','Power Forward',[18,29,26,31,19]];
let data5 = ['2','Mo DiBoux','Small Forward',[11,0,23,17,0]];

let Spreadsheets=new Spreadsheet();
Spreadsheets.addData(data);
Spreadsheets.addData(data2);
Spreadsheets.addData(data3);
Spreadsheets.addData(data4);
Spreadsheets.addData(data5);

console.log(Spreadsheets.getData());

module.exports = Spreadsheet
