// ... write your code here
class Spreadsheet {
  constructor () {
    this._spreadsheet = [
      ['Number', 'Name', 'Position', 'Points per Game']
    ]
  }
  addData (data) {
    this._spreadsheet.push(data)
  }

  getData () {
    return this._spreadsheet;
  }
}

let table = new Spreadsheet();
let data1 = ["12", "Joe Schmo", "Center", [14,32,7,0,23]]
let data2= ["9", "Ken Buckets", "Point Guard", [19,0,11,22,0]]
let data3 = ["31", "Harvey Kay", "Shooting Guard", [0,30,16,0,25]]
table.addData(data1);
table.addData(data2);
table.addData(data3);
console.log(table._spreadsheet[3][2] == "Shooting Guard");
console.log(JSON.stringify(table._spreadsheet[1][3]) == JSON.stringify([14,32,7,0,23]));

module.exports = Spreadsheet
