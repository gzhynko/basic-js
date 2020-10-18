const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, arrDepth = [], depthCount = 1) {
    arrDepth.push(depthCount);

    for (let i in array)
      if (Array.isArray(array[i]))
        this.calculateDepth(array[i], arrDepth, depthCount + 1);
    
    return arrDepth.sort(maxToMin)[0];
  }
};

function maxToMin(f, s) {
  if (parseInt(f) < parseInt(s)) return 1;
  if (parseInt(f) >= parseInt(s)) return -1;
}