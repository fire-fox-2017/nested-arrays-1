// ... write your code here
class Spreadsheet {
  constructor () {
      this.spreadsheet = [
      ['Number', 'Name', 'Position', 'Points per Game']
    ]
  }
  addData (data) {
    this.spreadsheet.push(data);
  }
  getData () {
    console.log(this.spreadsheet);
  }

}

const example = new Spreadsheet()
example.addData(['9', 'Ken Buckets', 'Point Guard', [19, 0, 11, 22, 0]])
example.getData();

module.exports = Spreadsheet
