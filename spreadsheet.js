'use strict'

// ... write your code here
var file = ['12','joe Schmo','center',['14','32','7','0','23']];
var file1 = ['9','ken buckets','point guard',['19','0','11','22','0']];
var file2 = ['31','harvey kay','shooting guard',['0','30','16','0','25']];
var file3 = ['18','sally talls','power forward',['18','29','26','31','19']];
var file4 = ['22','mo diboux','small forward',['11','0','23','17','0']];

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
  	 return this._spreadsheet;
  }


}
let newData = new Spreadsheet();

newData.addData(file);
newData.addData(file1);
newData.addData(file2);
newData.addData(file3);
newData.addData(file4);

console.log(newData.getData());


module.exports = Spreadsheet

