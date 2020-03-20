const fileManager = require('./FileManager.js');
const utils = require('./Utils.js');


const text = "123 | 456 | 789 ";

console.log(fileManager.readFile('./Sample docs/readFile.rtf'))
fileManager.writeFile('./Sample docs/fileWritten.rtf', "changes....", false);
console.log(utils.transformTextToNumberArray(text))
console.log(fileManager.readFile('./Sample docs/fileWritten.rtf'))

