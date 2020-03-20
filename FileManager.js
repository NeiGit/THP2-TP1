const fs = require('fs')

function readFile(path) {
    return fs.readFileSync(path, 'utf-8')
}

function writeFile(path, value, isCreationEnabled) {
    if(fs.existsSync(path) || isCreationEnabled){
        fs.writeFileSync(path, value)
    }    
}

const reader = {}
reader.readFile = readFile;
reader.writeFile = writeFile;

module.exports = reader;