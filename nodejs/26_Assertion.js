var assert = require("assert");

function add(a, b) {
    return(a + b)
}

var expected = add(2, 3);
assert(expected === 5, 'unknown result');