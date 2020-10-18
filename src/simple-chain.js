const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain: [],

  getLength() {
    this.currentChain.length;
  },

  addLink(value) {
   this.currentChain.push(value);
   return this;
  },

  removeLink(pos) {
    if (this.currentChain.length - 1 < pos || pos <= 0 || !Number.isInteger(pos)) {
      this.currentChain = [];
      throw Error;
    }

    this.currentChain.splice(pos - 1, 1);
    return this;
  },

  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  
  finishChain() {
    const chainValue = this.currentChain.map(member => member === null ? '( null )' : `( ${member} )`).join("~~");
    this.currentChain = [];
    return chainValue;
  }
};

module.exports = chainMaker;
