'use strict'

const isPalindrome = function(s) {

    const reverseString = function(str) {
        return str.split("").reverse().join("")
    }

    const stringLength = s.length
    let middleIndex = Math.floor(stringLength/2)
    const leftPart = s.slice(0, middleIndex)
    let rightPart = s.slice(middleIndex, stringLength)

    if (stringLength % 2 === 1) {
        rightPart = rightPart.slice(1)
    }

    return leftPart.toLowerCase() ===  reverseString(rightPart).toLowerCase() // rightPart
    // return leftPart.toLowerCase() + ' ' +  rightPart.split("").reverse().join("").toLowerCase() // rightPart
    // return reverseString("abc")
    // return "abc"//.split("").reverse().join("")

}

console.log(isPalindrome("aaadAAA"))


