// ... write your code here


var _spreadsheet = [
  ['Number', 'Name', 'Position', 'Points per Game']
]

function addData (data) {
  _spreadsheet.push(data)
}
function getData () {
  console.log(_spreadsheet);
}

addData([12,"Joe Schmo","Center",[14,32,7,0,23]]);
addData([9,"Ken Buckets","Point Guard",[19,0,11,12,0]]);
addData([31,"Harvey Kay", "Shooting Guard",[0,30,16,0,25]]);
addData([18,"Sally Talls","Power Forward",[18,29,26,31,19]]);
addData([22,"Mo DiBoux","Small Forward",[11,0,23,17,0]]);
getData();
