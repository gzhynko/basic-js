const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = [];

  if(!Array.isArray(members)) return false;
  
  for(var i = 0; i <= members.length; i++){
    if(typeof members[i] === 'string'){
      teamName.push(members[i].trim().substr(0, 1).toUpperCase());
    }
  }

  return teamName.sort((f, s) => f.charCodeAt(0) - s.charCodeAt(0)).join("");
};
