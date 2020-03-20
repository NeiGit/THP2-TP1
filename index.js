const reader = require('./Reader.js');
const utils = require('./Utils.js');


const text = "123 | 456 | 789 ";

console.log(reader.readFile('./Sample docs/readFile.rtf'))
console.log(utils.transformTextToNumberArray(text))

