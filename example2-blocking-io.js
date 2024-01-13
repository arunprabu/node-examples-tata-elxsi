// Let's access the file system 
// Let's read a file 

/* Module Approaches  
    1. Common JS Module   
        To Import: require, 
        To Export: module.exports

    2. ES Module -- introduced in 2015 
        To Import: import 
        To Export: export default or export 
*/

const fs = require('fs'); // importing fs module
// import fs from 'fs'; // To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

console.log("1. Program Started");

const data = fs.readFileSync('sample.txt');  // reading file sync'ly -- Blocking I/O
console.log(`2. ${data.toString()}`); 

// will be printed at last as the program runs line by line
console.log("3. Program Ended");
