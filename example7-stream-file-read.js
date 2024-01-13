/* Types of streams
  1. Readable stream
  2. Writable stream
  3. Duplex stream
  4. Transform stream
*/

const fs = require('fs');

const readerStream = fs.createReadStream('BigFile.txt', 'utf-8');

readerStream.on("open", () => {
  console.log("STREAM OPENED");
});

// data is an event emitted upon successful createReadStream
readerStream.on('data', (chunk) => {
  console.log("===========================");
  console.log('NEW CHUNK ARRIVED');
  console.log("===========================");
  console.log(chunk);
});

readerStream.on('end', () => {
  console.log("****************************");
  console.log("ALL CHUNKS ARRIVED");
  console.log("****************************");
});

readerStream.on('error', (err) => {
  console.log(err);
});