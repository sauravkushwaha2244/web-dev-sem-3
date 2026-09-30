const EventEmitter = require('events');
class button extends EventEmitter {
    constructor(label) {
        super();
        this.label = label;
    }

    click() {
        console.log(`Button clicked: ${this.label}`);
    }
}

const button = new button();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js`);
});

myEmitter.on('exit', () => {
    console.log('Application Closed.');
});

myEmitter.emit('greet', 'Rohit');

myEmitter.emit('exit');
