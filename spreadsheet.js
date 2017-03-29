// ... write your code here
function Spreadsheet() {
  var box = [];
  var menu = ["Number", "Name", "Position", "Points per Game"];
  var guy0 = [12,"Joe Schmo", "Center", [14,32,7,0,23]];
  var guy1 = [9, "Ken Buckets", "Point Guard", [19,0,11,22,0]  ];
  var guy2 = [31, "Harvey Kay", "Shooting Guard", [0,30,16,0,25]];
  var guy3 = [18, "Sally Talls", "Power Forward", [18,29,26,31,19]];
  var guy4 = [22, "Mo DiBoux", "Small Forward", [11,0,23,17,0]];

  for(var i = 0; i < menu.length; i++) {
    box.push(menu[i]); }
    for(var j = 0; j < guy0.length; j++) {
        box.push(guy0[j]); }
          for(var a = 0; a < guy1.length; a++) {
            box.push(guy1[a]); }
            for(var b = 0; b < guy2.length; b++) {
              box.push(guy2[b]); }
              for(var c = 0; c < guy3.length; c++) {
                box.push(guy3[c]); }
                  for(var d = 0; d < guy4.length; d++) {
                    box.push(guy4[d]); }

console.log(box);
}

Spreadsheet();

module.exports = Spreadsheet
