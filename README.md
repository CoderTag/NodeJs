# Node.js

Juvascript runtime environment built on Chrome V8 JavaScript engine. Node.js uses event driven, non-blocking model.
Node.js actuaaly written in C++. Javascript engine V8 also written in C++.V8 engine convert JS code to machine code.
Uses event driven, non-blocking IO model. Works in single thread non blocking IO calls. Supports tens of thousands 
concurrent connections. Those connections are held in what's call an event loop and that's why its called an event driven 
system.

Where as PHP and apache at the backend, each connection/request spawns a new thread, and consume system memeory. 
Eventually maxes out whatever that the maximum memory load handles. It wait one process to finish before the next. 

## Event Loop
- Sigle Threaded
- Support concurrency via event and callbacks.
- **EventEmitter** class is used to bind event and event listeners.

## Global Object
Global object for JS in browser is window. Using this object we can product alert, scroll etc. But there is no window
object for JS in Node. So global object in Node is called 'global'. [global object](https://nodejs.org/api/globals.html)

## Installation

```bash
node --version
v12.14.0

node -v
v12.14.0

```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
