// The buffer provides a way of handling streams of binary data. 
const dummyText = "Lorem ipsum dolar sit amit ..... ...... . . .. . . ..."

// converting string into stream of binary data
const buffer = new Buffer.from(dummyText, "utf8");

console.log(buffer); // prints dummyText in utf8
console.log(buffer.toString()); // prints dummyText in string
console.log(buffer.toJSON()); // shows type and also data in unicode

console.log(buffer[4]); // will show 4th index -- in the above json you can find 109

buffer.write("PLACEHOLDER TEXT");
console.log(buffer.toString());
