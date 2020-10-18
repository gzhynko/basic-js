const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity !== '' + parseFloat(sampleActivity) || sampleActivity <= 0 || sampleActivity > 15) return false;

  let rateConstant = -.693 / HALF_LIFE_PERIOD;
  let nRelation = sampleActivity / MODERN_ACTIVITY;
  
  return Math.ceil(Math.log(nRelation) / rateConstant);
};
