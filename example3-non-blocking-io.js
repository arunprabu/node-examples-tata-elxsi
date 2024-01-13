// Let's access the file system 
// Let's read a file async'ly
// This is an example of Non Blocking I/O

const fs = require("fs"); 

console.log("1. Program Started");

fs.readFile('sample.txt', (err, data) => {  // error first callback
  console.log('3. File Reading Successful!');
  if(!err){
    console.log(data.toString());
  } else {
    console.log(err);
  }
});

// the following line will get executed before file is completely read 
console.log('2. Program Ended');

