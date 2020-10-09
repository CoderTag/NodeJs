const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on("messageLogged",(arg)=>{
    console.log(`Listener called: ${arg.id} -> ${arg.msg}`);
})

logger.log("My message to trigger event");