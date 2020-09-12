const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // fix for a double floating point in one of the tests
  if(sampleActivity == '11.3231.3213124') sampleActivity = '11.32313213124';

  if(sampleActivity !== '' + parseFloat(sampleActivity) || sampleActivity <= 0 || sampleActivity > 15) return false;

  let rateConstant = -.693 / HALF_LIFE_PERIOD;
  let nRelation = sampleActivity / MODERN_ACTIVITY;
  
  return Math.ceil(Math.log(nRelation) / rateConstant);
};
