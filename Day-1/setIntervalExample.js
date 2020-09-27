let time = 2

let timer = setInterval(()=>{
    console.log(`${time} sec passed`)
    time = time + 2;
    // verify output for timer value after every 2 secs
    console.log(timer);

    if(time > 6){        
        // clearInterval is like exit.
        clearInterval(timer);
        // verify output for timer value after every 2 secs
        console.log(timer);
    }
},2000)