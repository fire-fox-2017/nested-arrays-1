// ... write your code here
class Spreadsheet {
  constructor () {
    this._spreadsheet = [
      ['Number', 'Name', 'Position', 'Points per Game']
    ]
  }
  addData (data) {
    this._spreadsheet.push(data)
    // return this._spreadsheet
  }
  getData () {
  }
}

let ss = new Spreadsheet()
ss.addData(['12','Joe Schmo','Center','[14,32,7,0,23]']);
ss.addData(['9','Ken Buckets','Point Guard','[19,0,11,22,0]']);
ss.addData(['31','Harvey Kay','Shooting Guard','[0,36,16,0,25]']);
ss.addData(['18','Sally Talls','Power Forward','[18,29,26,31,19]']);
ss.addData(['22','Mo DiBoux','Small Forward','[11,0,23,17,0]']);
console.log(ss)
let table = ss._spreadsheet
console.log(table[3][2])
console.log(JSON.stringify(table[1][3]) == JSON.stringify('[14,32,7,0,23]'));
module.exports = Spreadsheet
