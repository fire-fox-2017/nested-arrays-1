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
    console.log(this._spreadsheet);
  }
}

var table = new Spreadsheet();

let data1 = ["12", "Joe Schmo", "Center", [14,32,7,0,23]];
let data2 = ["9", "Ken Buckets", "Point Guard", [19,0,11,22,0]];
let data3 = ["31", "Harvey Kay", "Shooting Guard", [0,30,16,0,25]];
//etc

table.addData(data1);
table.addData(data2);
table.addData(data3);
//etc

table.getData();

console.log(table._spreadsheet[1][3]);
console.log(table._spreadsheet[2][2]);
console.log(JSON.stringify(table._spreadsheet[1][3]) === JSON.stringify([14,32,7,0,23]));

module.exports = Spreadsheet
