var events = require('events');
var eventEmitter = new events.EventEmitter();

const messageData = {
    subject: 'Object oriented programming',
    class: 'Override operands',
    lecture: 6,
    students: 60,
    mentor: 'John Smith',
  }

eventEmitter.emit('class1', messageData);
module.exports = eventEmitter;