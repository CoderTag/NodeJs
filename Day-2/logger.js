const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message){
        // send HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged',{id: 1,msg: "I am fine"});
    }
}

module.exports = Logger;
