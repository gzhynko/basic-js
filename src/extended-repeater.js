const CustomError = require("../extensions/custom-error");

const DEFAULT_SEPARATOR = '+';
const DEFAULT_ADDITION_SEPARATOR = '|';

module.exports = function repeater(str, options) {
  if(options.separator == undefined) options.separator = DEFAULT_SEPARATOR;
  if(options.additionSeparator == undefined) options.additionSeparator = DEFAULT_ADDITION_SEPARATOR; else if(options.addition == null) options.addition = "null";

  let stringToReturn = "";
  let addition = getAddition(options.addition, options.additionRepeatTimes, options.additionSeparator);

  for(var i = 0; i <= options.repeatTimes-1; i++){
    if(i < options.repeatTimes-1){
      stringToReturn += str;
      if(options.addition != undefined)
        stringToReturn += addition; 
      stringToReturn += options.separator;
    } else {
      stringToReturn += str;
      if(options.addition != undefined)
        stringToReturn += addition;
    }
  }

  if(options.repeatTimes == undefined)
    stringToReturn = str + options.addition;

  return stringToReturn;
};

function getAddition(addition, repeatTimes, separator){
  let stringToReturn = "";

  for(var i = 0; i <= repeatTimes-1; i++){
    if(i < repeatTimes-1){
      stringToReturn += addition;
      if(separator != undefined)
        stringToReturn += separator;
    } else {
      stringToReturn += addition;
    }
  }

  return stringToReturn;
}
  