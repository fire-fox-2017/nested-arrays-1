// ... write your code here
class Spreadsheet {
  constructor (data) {
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

var laporan = new Spreadsheet;

laporan.addData(['01', 'james', 'center', '50']);
laporan.getData();
module.exports = Spreadsheet
