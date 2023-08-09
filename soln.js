/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    // we used BigInt() to convert binary to Integer. Syntax is BigInt(0b11) here `0b` is prefix and `11` is binary number
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    // sum is converted back to string using toString(2), here 2 is radix argument, so toString(2) converts to binary
    return sum.toString(2);
};

let a = "11"
let b = "1"
console.log(addBinary(a, b));

let c = "1010"
let d = "1011"
console.log(addBinary(c, d));

