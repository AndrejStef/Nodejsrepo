const {eventEmitter} = require('./emmiter');

eventEmitter.on('listener', (respondData) => {
    console.log('Message logged.', respondData);
  });

eventEmitter.on('class1', (argEvent) => {
    argEvent.forEach(item => {
        eventEmitter.emit('listener', item);
    });
});