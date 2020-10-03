// Avoid using Synchronous method. They have provided for simplicity.
// All Asynchronous methods take function as their last arguments. They call this function when asynchronous 
// operation complete. This function is called callback function.
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files)

// we will get either err or files. 
fs.readdir('./',(err,files)=>{
    if(err) console.log(`Error: ${err}`);
    else console.log(`Result: ${files}`);
})

// Inject Error to see Error message 
fs.readdir('./notExist',(err,files)=>{
    if(err) console.log(`Error: ${err}`);
    else console.log(`Result: ${files}`);
})

