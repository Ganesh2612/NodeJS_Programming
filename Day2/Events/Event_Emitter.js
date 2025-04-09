const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on("hello",()=>{
    console.log("Hello you are starting with event emitter");
});
emitter.emit("hello");