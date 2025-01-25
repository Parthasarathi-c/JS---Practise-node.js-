const EventEmitter = require('events');

const x = new EventEmitter();


x.addListener('first_Event',(name) => console.log(`Hello ${name} .How are you ?`));
x.on('sec',(...a) => 
    {
        const para = a.join(' , ');
        console.log(`WE ARE ${para}`);
    });

x.once('start',() => {console.log("STARTING...")} );

x.emit('start');
x.emit('sec',1,2,3,4,5,6,7,8,9);
x.emit('first_Event','x');
