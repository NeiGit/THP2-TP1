const fs = require('fs')

function readFile(path) {
    return fs.readFileSync(path, 'utf-8')
}

const reader = {}
reader.readFile = readFile;

module.exports = reader;