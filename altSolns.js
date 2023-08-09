function addBinary(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        
        const sum = digitA + digitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        
        i--;
        j--;
    }
    
    return result;
}

// Example usage
const a1 = "11";
const b1 = "1";
console.log(addBinary(a1, b1)); // Output: "100"

const a2 = "1010";
const b2 = "1011";
console.log(addBinary(a2, b2)); // Output: "10101"
