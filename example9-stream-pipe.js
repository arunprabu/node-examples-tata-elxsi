const fs = require("fs");

// source file from which the content is grabbed
const readerStream = fs.createReadStream("BigFile.txt", { start: 0, end: 100 });
const writerStream = fs.createWriteStream("SmallFile.txt");

// read and write operations with pipe
// read BigFile.txt and write the data to SmallFile.txt
readerStream.pipe(writerStream);

console.log('Program Ended');