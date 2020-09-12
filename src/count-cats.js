const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  for(var i = 0; i <= matrix.length-1; i++){
    for(var k = 0; k <= matrix[i].length-1; k++){
      if(matrix[i][k] == "^^")
        count++;
    }
  }

  return count;
};
