const fs = require("fs");

// source file from which the content is grabbed
const readerStream = fs.createReadStream("BigFile.txt", "utf-8");
const writerStream = fs.createWriteStream('AnotherBigFile.txt');

readerStream.on('data', (chunk) => {
   console.log("===========================");
   console.log("NEW CHUNK ARRIVED");
   console.log("===========================");
   console.log(chunk);// buffer
   writerStream.write(chunk);
});

