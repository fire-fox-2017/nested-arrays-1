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

var sp = new Spreadsheet();
sp.addData([12,"Joe Schmo","Center",[14,32,7,0,23]]);
sp.addData([9,"Ken Buckets","Point Guard",[19,0,11,12,0]]);
sp.addData([31,"Harvey Kay", "Shooting Guard",[0,30,16,0,25]]);
sp.addData([18,"Sally Talls","Power Forward",[18,29,26,31,19]]);
sp.addData([22,"Mo DiBoux","Small Forward",[11,0,23,17,0]]);
sp.getData();
console.log(sp._spreadsheet[3][2]=="Shooting Guard");
console.log(JSON.stringify(sp._spreadsheet[1][3]) == JSON.stringify([14,32,7,0,23]));
