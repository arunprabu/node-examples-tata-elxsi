// Events and Custom Events
const events = require('events');

const eventEmitter = new events.EventEmitter()

// defining custom event
eventEmitter.on('START_FILE_READING', () => {
  console.log('File Reading has Started');
  eventEmitter.emit("FILE_READ_SUCCESS");
});

eventEmitter.on("FILE_READ_SUCCESS", () => {
  console.log("File Reading over!");
});

// Trigger the custom event
eventEmitter.emit("START_FILE_READING");
