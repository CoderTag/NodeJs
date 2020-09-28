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

## Event Loop
- Sigle Threaded
- Support concurrency via event and callbacks.
- **EventEmitter** class is used to bind event and event listeners.

    EventEmitters --->  Events ---> Event Loop ---> Event Handlers 

## node and npm
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
* goes in the root of your package/application
* Tells npm how package is structured and what to do to install  it

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