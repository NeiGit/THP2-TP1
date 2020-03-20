function transformTextToNumberArray(text = "") {
    return text.split("|");
}

const utils = {}

utils.transformTextToNumberArray = transformTextToNumberArray;


module.exports = utils;