class Spreadsheet {
  constructor () {
    this.spreadsheet = [
      ['Number', 'Name', 'Position', 'Points per Game'],
    ]
  }
   guy (data) {
    this.spreadsheet.push(data);
  }
  getData () {
    return this.spreadsheet;
  }
}

let sheet = new Spreadsheet();

let guy1 = [ '12', 'Joe Schmo', 'Center', [ 14, 32, 7, 0, 23 ] ];
let guy2 =  ['9', 'Ken Bucktes', 'Point Guard', [19,0,11,22,0]];
let guy3 = ['31', 'Harvey Kay', 'Shooting Guard', [0,30,16,0,25]];
let guy4 = ['18', 'Sally Talls', 'Power Forward', [18,29,26,31,19]];
let guy5 = ['22', 'Mo DiBoux', 'Small Forward', [11,0,23,7,0]];

sheet.guy(guy1);
sheet.guy(guy2);
sheet.guy(guy3);
sheet.guy(guy4);
sheet.guy(guy5);

let table = sheet.getData();
console.log(table);

module.exports = Spreadsheet
