const path = require("path");
const os = require("os");

console.log(__dirname);
console.log(__filename);

let pathObj = path.parse(__filename);
console.log(pathObj);

let totMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total Memory ${totMemory}  and free memory ${freeMemory}`);
console.log(module);
