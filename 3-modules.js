const {john, peter} = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-falvor')
console.log('daaaataa', data.singlePerson)
console.log([john, peter]);


sayHi('susan');
sayHi(john);
sayHi(peter);