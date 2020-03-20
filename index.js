const fileManager = require('./FileManager.js');
const utils = require('./Utils.js');


// leerArchivoComoString
console.log(fileManager.readFile('./Sample docs/readFile.rtf'))

// escribirTextoEnArchivo
fileManager.writeFile('./Sample docs/fileWritten.rtf', "changes....", false);
console.log(fileManager.readFile('./Sample docs/fileWritten.rtf'))

//transformarStringEnArrayDeNumeros
const text = '123 | 456 | 789 | 1bc | 10';
console.log(utils.transformTextToNumberArray(text, '|'))

//transformarArrayDeNumerosAUnSoloString
const text2 = '[123, 456, 789, 10]'
const numberArray = utils.transformTextToNumberArray(text2)
console.log(numberArray.toString());

// combinarDosArrays
const array1 = [1, 5, 10],
      array2 = [2, 3, 8, 11]
      array3 = [3, 4, 98, 10];

const combinedArray = utils.combineArrays([array1, array2, array3])      
console.log(combinedArray.sort(utils.compare).toString());

// combinar arrays hechos a partir de leer archivos
const array4 = utils.transformTextToNumberArray(fileManager.readFile('./Sample docs/10NumerosOrdenadosEntre1y50(setA).in'))
const array5 = utils.transformTextToNumberArray(fileManager.readFile('./Sample docs/10NumerosOrdenadosEntre1y50(setB).in'))
console.log(utils.combineArrays([array4, array5]).toString());


