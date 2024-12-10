const fs = require('fs');
const assert = require('assert');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js') + '');

// Orignal tests:
assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

// New Test(s) Implemented

const tolerance = 0.0001;

function calculateSeriesSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += 1 / factorial(i);
    }
    return sum;
}

// The test for Euler's number approximation
const testE = jsc.forall("nat", function(n) {
    const calculated = e(n);
    const expected = calculateSeriesSum(n);
    const difference = Math.abs(calculated - expected);

    if (n === 0) {
        assert(calculated === 1, `Test failed for n = 0: expected e = 1, but got e = ${calculated}`);
    } else if (n === 1) {
        assert(calculated === 2, `Test failed for n = 1: expected e = 2, but got e = ${calculated}`);
    } else {
        assert(difference <= tolerance, `Test failed for n = ${n}: expected e ≈ ${expected}, but got e = ${calculated}`);
    }
    return true;
});

jsc.assert(testE);
