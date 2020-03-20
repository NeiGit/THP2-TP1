function transformTextToNumberArray(text = "", separator = ",") {
    return text.split(separator)
    .filter(v => Number(v))
    .map(v => Number(v))
}

function combineArrays(arr) {
    let result = [];
    arr.forEach(element => {
        element.filter(e => !result.includes(e)).forEach(e => result.push(e));
    });
    return result;
}

function compare(a, b) {
    return a - b;
}

const utils = {}

utils.transformTextToNumberArray = transformTextToNumberArray;
utils.combineArrays = combineArrays;
utils.compare = compare;

module.exports = utils;