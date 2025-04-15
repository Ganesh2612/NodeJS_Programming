const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('greet', () => {
  console.log("Hello from Node.js!");
});

emitter.emit('greet');
emitter.emit('greet');