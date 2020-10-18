const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }

  charTable = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  }

  encrypt(input, key) {
    if(input == undefined || key == undefined) throw new Error();

    input = input.toLowerCase();
    key = key.toLowerCase();

    if (this.direct == false) key = key.split('').reverse().join('');

    let encrypted = "";
    let specialCharCount = 0;

    for(let i = 0; i < input.length; i++){
      let keyLetter = (i - specialCharCount) % key.length;
      let keyIndex = this.charTable.a.indexOf(key[keyLetter]);

      if(this.charTable[input[i]])
        encrypted += this.charTable[input[i]][keyIndex];
      else {
        encrypted += input[i];
        specialCharCount++;
      }
    }

    return encrypted.toUpperCase();
  }

  decrypt(input, key) {
    if(input == undefined || key == undefined) throw new Error();

    input = input.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let decrypted = "";
    let specialCharCount = 0;

    for(let i = 0; i < input.length; i++){
      let keyLetter = (i - specialCharCount) % key.length;
      let keyRow = this.charTable[key[keyLetter]];

      if(keyRow.indexOf(input[i]) !== -1)
        decrypted += this.charTable.a[keyRow.indexOf(input[i])];
      else {
        decrypted += input[i];
        specialCharCount++;
      }
    }

    if (this.direct == false) decrypted = decrypted.split('').reverse().join('');

    return decrypted.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
