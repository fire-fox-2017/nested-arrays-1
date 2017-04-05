
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
    return this._spreadsheet
  }
}
let data = ["9", "Ken Buckets", "Point Guard",    [19, 0, 11, 22, 0]]
let spread = new Spreadsheet()
spread.addData(data)

console.log(spread.getData()[1][2]=="Point Guard");

module.exports = Spreadsheet

/*
data =["12", "Joe Schemo", " Center        ", [14, 32, 7, 0, 23]];
data =["9", "Ken Bucket", " Point Guard    ", [19, 0, 11, 22, 0]];
data =["31", "Joe Schemo", "Shooting Guard ", [0, 30, 16, 0, 25]];
data =["18", "Cenally Talls", "Power Forward", [18, 29, 26, 31, 19]]
data =["22", "Moe DiBoux", "Small Forward ",    [11, 0, 23, 17, 0]]

*/
