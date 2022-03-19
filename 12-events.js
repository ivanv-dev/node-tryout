const EventEmmitter = require('events');

const customEmitter = new EventEmmitter()

customEmitter.on('response', ()=> {
    console.log(`data recieved`)
})

customEmitter.on('response', (person)=> {
    console.log(`some other logic here ${person.name} ${person.surname}`)
})

customEmitter.emit('response', {name: 'greg', surname: 'rocky'});