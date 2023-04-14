function onEdit(e) {

var row = e.range.getRow();
var col = e.range.getColumn();

if(col === 6 && row > 1 && e.source.getActiveSheet().getName() === "team_bo_approach"  ){
  e.source.getActiveSheet().getRange(row,13).setValue(new Date());
}
if(col === 7 && row > 1 && e.source.getActiveSheet().getName() === "team_bo_approach"  ){
  e.source.getActiveSheet().getRange(row,14).setValue(new Date());
}
if(col === 8 && row > 1 && e.source.getActiveSheet().getName() === "team_bo_approach"  ){
  e.source.getActiveSheet().getRange(row,15).setValue(new Date());
}
if(col === 9 && row > 1 && e.source.getActiveSheet().getName() === "team_bo_approach"  ){
  e.source.getActiveSheet().getRange(row,16).setValue(new Date());
}
if(col === 10 && row > 1 && e.source.getActiveSheet().getName() === "team_bo_approach"  ){
  e.source.getActiveSheet().getRange(row,17).setValue(new Date());
}
}
