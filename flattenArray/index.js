function flatten(arr) {
    var result = []
    arr.forEach( function( element ) {
        if (!Array.isArray(element)) {
            result.push(element)
        } else {
            result = result.concat(flatten(element))
        }
    })
    return result
}

module.exports = flatten

// console.log( flatten([1, [2, [2.1]], 3]) );
