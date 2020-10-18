const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let arrayToReturn = [];
  
  if (!Array.isArray(array)) throw Error;

  for (let i = 0; i < array.length; i++)
    switch (array[i]) {
      case "--double-next":
        if (i !== array.length - 1) arrayToReturn.push(array[i + 1]);
        break;
      case "--double-prev":
        if (i !== 0) arrayToReturn.push(array[i - 1]);
        break;
      case "--discard-next":
        i += 2;
        break;
      case "--discard-prev":
        if (i !== 0) arrayToReturn.pop(array[i - 1]);
        break;
      default:
        arrayToReturn.push(array[i]);
        break;
    }

  return arrayToReturn;
};
