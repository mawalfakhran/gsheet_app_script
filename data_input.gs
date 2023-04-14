function submitData() {
  var ss        = SpreadsheetApp.getActiveSpreadsheet();
  var formSS    = ss.getSheetByName("input_data_for_master_data"); //Form Sheet
  var datasheet = ss.getSheetByName("master_data_3rd_party"); //Data Sheet
   
  //Input Values
  var values = [[formSS.getRange("C5").getValue(),
                 formSS.getRange("C6").getValue(),
                 formSS.getRange("C7").getValue(),
                 formSS.getRange("C8").getValue(),
                 formSS.getRange("C9").getValue(),
                 formSS.getRange("C10").getValue(),
                 formSS.getRange("C11").getValue(),
                 formSS.getRange("C12").getValue(),
                 formSS.getRange("C13").getValue()]];
   
  datasheet.getRange(datasheet.getLastRow()+1, 1, 1, 9).setValues(values);
}
