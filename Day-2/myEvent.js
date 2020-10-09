let events = require("events");

//  both staments work
// let myEmitter = new events.EventEmitter();
let myEmitter = new events();

// If you notice following line looks like on('click') event to capture a click even on a web object
myEmitter.on("someEvent", (arg) => {
  console.log(msg);
});

// Order matters here. We need to have  on method before emit method. When emit method occur it goes though
// all registered listener and execute synchronously.
// Second part of emit is called event argument. We can provide multiple arguments here.
// But good practice to send those argument as an object.
myEmitter.emit("someEvent", "creating event");

// sending as an object
myEmitter.emit("someEvent", {id: 1, meg: 'some more message'});

