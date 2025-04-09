const eventemitter=require('events');
const emitter=new eventemitter();
emitter.once("fish",(num)=>{
    console.log(`Fish can live for ${num} years`);
})
emitter.emit("fish",10);

