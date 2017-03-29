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

let dataTable = new Spreadsheet;
let data1 = [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]];
dataTable.addData(data1);
let data2 = [9, 'Ken Buckets', 'Point Guard', [19, 0, 11, 22, 0]];
dataTable.addData(data2);
let data3 = [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]];
dataTable.addData(data3);
let data4 = [18, 'Sally Talls', 'Power Forward', [18, 29, 26, 31, 19]];
dataTable.addData(data4);

dataTable.getData();

module.exports = Spreadsheet
