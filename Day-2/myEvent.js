let events = require('events');

let myEmitter = new events.EventEmitter();

// If you notice following line looks like on('click') event to capture a click even on a web object
myEmitter.on('someEvent', (msg)=>{
    console.log(msg);
})

myEmitter.emit('someEvent',"creating event");