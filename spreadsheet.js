// ... write your code here
class Spreadsheet {
  constructor () {
    this._spreadsheet = [
      	['Number', 'Name', 'Position', 'Points per Game'],
		["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
		["9", "Ken Buckets", "Point Guard", [19,0,11,22,0]],
		["31", "Harvey Kay", "Shooting Guard", [0,30,16,0,25]],
		["18", "Sally Talls", "Power Forward", [18,29,26,31,19]],
		["22", "Mo DiBoux", "Small Forward", [11,0,23,17,0]]
    ]
  }
  addData (data) {
  	this._spreadsheet.push(data)
  }
}

let spreed = new Spreadsheet()

let data = ["1", "John Doe", "Director", [10,10,10,10]];

spreed.addData(data)
console.log(spreed._spreadsheet)
console.log(spreed._spreadsheet[3][2] == "Shooting Guard");
true

console.log(JSON.stringify(spreed._spreadsheet[1][3]) == JSON.stringify([14, 32, 7, 0, 23]));
true

module.exports = Spreadsheet


