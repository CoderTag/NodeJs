let counter = require('./counterModule');
let multipleExport = require('./multipleExportModule');
let other = require('./otherwayMultipleExportModule');

counter(['aryan','laryan']);

multipleExport.counter(['aryan','laryan','laryan2','laryan3']);
multipleExport.add(2,3);
console.log(multipleExport.PI);

other.anotherCounter(['aryan','laryan','laryan2','laryan3','laryan4']);
other.anotherAdd(20,13);
console.log(other.anotherPI);