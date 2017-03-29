// ... write your code here
class Spreadsheet {
  constructor () {
    this.spreadsheet = [
      ['Number', 'Name', 'Position', 'Points per Game'],
    ],
    this.table = [];
  }
  addData (data) {
    this.spreadsheet.push(data);
  }
  getData () {
    return this.spreadsheet;
  }
}

let sheet = new Spreadsheet();

let data1 = [ '12', 'Joe Schmo', 'Center', [ 14, 32, 7, 0, 23 ] ];
let data2 =  ['9', 'Ken Bucktes', 'Point Guard', [19,0,11,22,0]];
let data3 = ['31', 'Harvey Kay', 'Shooting Guard', [0,30,16,0,25]];
let data4 = ['18', 'Sally Talls', 'Power Forward', [18,29,26,31,19]];
let data5 = ['22', 'Mo DiBoux', 'Small Forward', [11,0,23,7,0]];

sheet.addData(data1);
sheet.addData(data2);
sheet.addData(data3);
sheet.addData(data4);
sheet.addData(data5);

let table = sheet.getData();

console.log(table);

module.exports = Spreadsheet
