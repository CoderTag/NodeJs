const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/courses',(req,res)=>{
    res.send( [1,2,3]);
});

app.get('/courses/:id',(req,res)=>{
    res.send(req.params.id);
});

// send 404 if given id not found
// /courses/notfound/4
app.get('/courses/notfound/:id',(req,res)=>{
    res.status(404).send('The course id not found ... ');
        
});


// process is global object which has a property called env.
const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listenting on port ${port} ...`));