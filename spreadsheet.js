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

let data = ["9", "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]]
let ss = new Spreadsheet()
ss.addData(data)
console.log(ss.getData()[1][2]=="Point Guard");
module.exports = Spreadsheet
