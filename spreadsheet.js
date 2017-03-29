// ... write your code here
function Spreadsheet() {
  this.spreadsheet = [
    ['Number', 'Name', 'Position', 'Points per Game']
  ],
  this.addData = data => {
    this.spreadsheet.push(data);
  },
  this.getData = () => {
    return this.spreadsheet;
  }
}

let table = new Spreadsheet();
let data = ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]];
table.addData(data);
data = ["9", "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]];
table.addData(data);
data = ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]];
table.addData(data);
data = ["18", "Sally Talls", "Power Forward", [18, 29, 26, 31, 19]];
table.addData(data);
data = ["22", "Mo DiBoux", "Small Forward", [11, 0, 23, 17, 0]];
table.addData(data);
console.log(table.getData());
console.log(table.getData()[3][2] == "Shooting Guard");
console.log(JSON.stringify(table.getData()[1][3]) == JSON.stringify([14, 32, 7, 0, 23]));

module.exports = Spreadsheet
