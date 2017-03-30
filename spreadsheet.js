// ... write your code here
class Spreadsheet {
  constructor () {
    this._spreadsheet = [
      ['Number', 'Name', 'Position', 'Points per Game']
    ]
  }
  addData (data) {
    // utk push ke spreadsheet
    this._spreadsheet.push(data);
  }

  getData () {
    //console log spreadsheet
    console.log(this._spreadsheet);
  }
}
  let spreadsheet1 = ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]];
  let spreadsheet2 = ["9", "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]];
  let spreadsheet3 = ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]];
  let spreadsheet4 = ["18", "Sally Talls", "Power Forward", [18, 29, 26, 31, 19]];
  let spreadsheet5 = ["22", "Mo DiBoux", "Small Forward", [11, 0, 23, 17, 0]];

  let result1 = new Spreadsheet();
  result1.addData(spreadsheet1);
  result1.addData(spreadsheet2);
  result1.addData(spreadsheet3);
  result1.addData(spreadsheet4);
  result1.addData(spreadsheet5);
  result1.getData();


module.exports = Spreadsheet
