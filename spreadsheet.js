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
var execute  = new Spreadsheet();

execute.addData(['12', 'Joe Schmo', 'Center',[14,32,7,0,23]]);
execute.addData(['9','Ken Buckets','Point Guard', [19,0,11,22,0]]);
execute.addData(['31','Harvey Kay','Shooting Guard', [0,30,16,0,25]]);
execute.addData(['18','Sally Talls','Power Forward', [18,29,26,31,19]]);
execute.addData(['22','My DiBoux','Small Forward', [11,0,23,17,0]]);

execute.getData();

module.exports = Spreadsheet
