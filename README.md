# Node.js

Browser provides runtime environement for JS code. Javasript runtime environment means an environment which understand Javascript and convert
it to machine code which computer can understand. e.g MS edge uses Chakra, Firefox uses SpiderMonkey and Chrome uses V8 Javascript engine.
Because of these variety of engine JS code behave differently from one browser to another.Till 2009 JS could run only within browser.

In 2009 Ryan Dahl came up with idea to run JS outside browser. So he used Chrome's V8 JS engine and embedded it with C++ program and called
it Node.exe. i.e Node.js and JS engine V8 written in C++.Similar to browser Node.js provides runtime environment for JS code.
Node.js uses event driven, single threaded non-blocking IO model.Supports tens of thousands concurrent connections. Those connections are
held in what's call an event loop and that's why its called an event driven system. Node.js is asynchronous.

Node.js has certain objects that provides environment for JS code. These environment objects are different than browser. e.g we don't have
document object [document.getElementById('');]. But it has some other object that provides interesting capabilities e.g

- fs.readfile() --> can work with file system
- http.createServer() --> listen for request on a given port etc.

Don't compare Node with C#, Ruby or any other programmig languages. Node is not a programming language. It's an environment.
Again Node should not be compare with framework like Django, ASP.NET etc. Node is not framework.

Don't use Node for CPU intensive operation like video encoding, image manipulation services. Such app more uses CPU but few time
access FS or n/w. Node is perfect for data intensive real time app.

Where as PHP and apache at the backend, each connection/request spawns a new thread, and consume system memeory.
Eventually maxes out whatever that the maximum memory load handles. It wait one process to finish before the next.
It is synchronous.

Used by PayPal, NetFlix, Uber, Walmart etc. PayPal build their Java and Spring based application using Nodes and found that

- Node app built twice as fast with fewer people
- 33% few lines of code
- 40% fewer files
- Double the number of request server per seconds. 2x req/sec
- 35% faster response time

## node nvm and npm

Install nvm (node version manager) - https://github.com/nvm-sh/nvm
It helps to manage multiple active node.js module in a single computer.

```
$nvm --version
0.35.2

$node --version
v12.14.0

 $nvm list
->     v12.14.0
       v12.18.2
         system
default -> 12.14.0 (-> v12.14.0)
node -> stable (-> v12.18.2) (default)
stable -> 12.18 (-> v12.18.2) (default)

$nvm install 12.19
Downloading and installing node v12.19.0...
Downloading https://nodejs.org/dist/v12.19.0/node-v12.19.0-linux-x64.tar.xz...
################################################################################################################################################################# 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v12.19.0 (npm v6.14.8)

$nvm list
       v12.14.0
       v12.18.2
->     v12.19.0
         system
default -> 12.14.0 (-> v12.14.0)
node -> stable (-> v12.19.0) (default)
stable -> 12.19 (-> v12.19.0) (default)

$node --version
v12.19.0

$nvm uninstall 12.14.0
Uninstalled node v12.14.0

$nvm list
       v12.18.2
->     v12.19.0
         system
default -> 12.14.0 (-> N/A)
node -> stable (-> v12.19.0) (default)
stable -> 12.19 (-> v12.19.0) (default)
```

npm is node package manager. All modules get installed in node_modules folder.

```bash
node --version
v12.14.0

node -v
v12.14.0

# following install will install express in node_modules folder. If the folder does not exist it will create.
npm install express

# Follwing install will install the module globall and can be acccessed from anywhere.
npm install -g express

#package.json
npm init
```

## package.json File

- goes in the root of your package/application
- Tells npm how package is structured and what to do to install it

## Global Object

Gobal object is an object which can be accessed anywhere.Global object for JS in browser is window. Using this object we can product alert,
scroll etc. But window object not present in Node,instead global obeject in Node is called "global". Refer 'global'. [global object](https://nodejs.org/api/globals.html)
Couple of gobal objects e.g cosole.log(), setTimeout(), clearTimeout(), setInterval(),clearInterval() etc.
In browser above mentioned object can all be called as - windows.setTimeout(), windows.console.log()
In Node above mentioned object can also be called as - global.console.log(), global.setTimeout()

var message = "";
var abc = function() {}
In browser above variable and function will be added to window global object. e.g window.message,window.abc()
But same is not true in Node. The variable will not be added to global.message. The scope of that variable only with in the file.
Node uses module concept to access that variable in other program.

## Module

Every Node application says to be have at least one file i.e one module.

```javascript
console.log(module);

output:
Module {
  id: '.',
  path: '/home/kaushik/Public_GIT/NodeJs/Day-1',
  exports: {},
  parent: null,
  filename: '/home/kaushik/Public_GIT/NodeJs/Day-1/getCurrentFileAndDirector.js',
  loaded: false,
  children: [],
  paths: [
    '/home/kaushik/Public_GIT/NodeJs/Day-1/node_modules',
    '/home/kaushik/Public_GIT/NodeJs/node_modules',
    '/home/kaushik/Public_GIT/node_modules',
    '/home/kaushik/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
```

# Day-1

## In Linux nvm is the good tool to change the node version

```bash
$ node -v
v12.14.0

$ nvm ls
->     v12.14.0
       v12.18.2
         system
default -> 12.14.0 (-> v12.14.0)
node -> stable (-> v12.18.2) (default)
stable -> 12.18 (-> v12.18.2) (default)

$ nvm use 12.18.2
Now using node v12.18.2 (npm v6.14.5)

$ nvm ls
       v12.14.0
->     v12.18.2
         system
default -> 12.14.0 (-> v12.14.0)
node -> stable (-> v12.18.2) (default)
stable -> 12.18 (-> v12.18.2) (default)

$ node -v
v12.18.2

```

## Use jshint to do syntax check of a file

```bash
$ npm install -g jshint
$ jshint myEvent.js
myEvent.js: line 1, col 1, 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
myEvent.js: line 3, col 1, 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
myEvent.js: line 6, col 31, 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
myEvent.js: line 8, col 3, Missing semicolon.
```

## Module Wrapper function

> node does not execute our module directly it wrap it inside of a function like
>
> > (function(export, require, module, **filename, **dirname) {
> > <Our module comes here> >> [refer at 35th min](https://youtu.be/TlB_eWDSMt4)
> > })

> require function above appears to be global. But actually it is not global. It is local to each module.

# Day-2

## Avoid using Synchronous Method

Many methods are available in two form - Synchronous and Asynchronous. Avoid using Synchronous methods. Use more
Asynchronous methods. As they are non blocking

```javascript
// Avoid using Synchronous method. They have provided for simplicity.
// All Asynchronous methods take function as their last arguments. They call this function when asynchronous
// operation complete. This function is called callback function.
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files)

// we will get either err or files.
fs.readdir('./',(err,files)=>{
    if(err) console.log(`Error: ${err}`);
    else console.log(`Result: ${files}`);
})

// Inject Error to see Error message
fs.readdir('./notExist',(err,files)=>{
    if(err) console.log(`Error: ${err}`);
    else console.log(`Result: ${files}`);
})

$ node synMethonAndAsyncMethod.js
[ 'myEvent.js', 'synMethonAndAsyncMethod.js' ]
Error: Error: ENOENT: no such file or directory, scandir './notExist'
Result: myEvent.js,synMethonAndAsyncMethod.js
```

## Event

One of the core concept of node is event.Its basically a signal which tells something has happened to our application.
e.g there is a class called http to create webserver. It listen to a port. Whenever a request come to the port it raises
an event. Event: New Request.
Then job is response to the event. Like read the request and send right response. Refer node documentation, several classes
of node raised different kind of event. In our code we can response to those event.

## EventEmitter

In event module we can find a class called EventEmitter.Its one of the core building blocks of node.Lot of classes are based on this EventEmitter.
[Refer: myEvent.js in Day2]

## Extending EventEmitter

In real world hardly we interact with EventEmitter directly. Instead we create a class that has all capabilities of
EventEmitter and use that Class in our code. [Refer: app.js and logger.js in Day-2]

## Event Loop

- Sigle Threaded
- Support concurrency via event and callbacks.
- **EventEmitter** class is used to bind event and event listeners.

  EventEmitters ---> Events ---> Event Loop ---> Event Handlers

# Day-3

## HTTP Module

```javascript
const http = require("http");

// This server is EventEmitter
const server = http.createServer();

// From browser try localhost:3000. Console we can find "connection" event triggered
server.on("connection", (socket) => {
  console.log("New Connection");
});
server.listen(3000);

console.log("Listening on port 3000...");
```

In real world we will not use connection event to build http service. It's very low level to understand what happens
internally. Similarly in real world we will not use http module to create web server. As you can see in example app.js in Day-3
application gets complex as we add more route. As we add all route in linear way in callback function. Instead we will use express
which uses http module internally.

# Day-4

## Express

```bash
$ npm init --yes
Wrote to /home/kaushik/Public_GIT/NodeJs/Day-4/package.json:

{
  "name": "Day-4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

$ npm install express
```

```javascript
// Express module return function. In this example we are calling it express
const express = require('express');

// when we call this function it returns object of type express. By convention we call this object app
const appp = express()

// Tnis app is having bunch of useful methods
app.get()
app.put()
app.post()
app.delete()

app.get('/',(req,res)=>{ ...})
// req object has couple of properties. Refer Express dicument to go through those property in detail.
```

### Post Method

In Post method should have a body to read from. We can use body property of req object to read the body

```javascript
app.post("/courses", (req, res) => {
  // Assuming body property has an object name
  console.log(res.body.name);
});
```
