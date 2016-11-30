var XLSX = require('xlsx')

var workbook = XLSX.readFile('./excel/test.xlsx',{cellStyles:true})

var first_sheet_name = workbook.SheetNames[0];
var address_of_cell = 'A3';

/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];

/* Find desired cell */
var desired_cell = worksheet[address_of_cell];

/* Get the value */
var desired_style = desired_cell.s;

console.log(desired_style)