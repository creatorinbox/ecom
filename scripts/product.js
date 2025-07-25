const XLSX = require('xlsx');
const workbook = XLSX.readFile('./Final-product-export-15-7-2025.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const products = XLSX.utils.sheet_to_json(sheet);

// Export or log to inspect structure
console.log(products);
module.exports = products;