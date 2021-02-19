"use strict";

// comment
function firstRepeatedChar(str) {
  while (str.length > 0 && str[0] !== str[1]) {
    str = str.slice(1)
  }
  return str[0] ? str[0] : null
}

module.exports = firstRepeatedChar;

// console.log(firstRepeatedChar("abc"))
console.log( firstRepeatedChar ("abc") )
