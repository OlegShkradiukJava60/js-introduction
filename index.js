function myParseInt(numStr, radix = 10) {
    if (typeof numStr !== 'string') numStr = String(numStr);
    if (radix < 2 || radix > 37) return NaN;
    numStr = numStr.trim();
    if (numStr.length === 0) return NaN;
    
    let res = 0;
    let sign = 1;
    let i = 0;
    
    if (numStr[0] === '-') {
        sign = -1;
        i = 1;
    } else if (numStr[0] === '+') {
        i = 1;
    }
    
    for (; i < numStr.length; i++) {
        let char = numStr[i];
        let digit;
        
        if (char >= '0' && char <= '9') {
            digit = char.charCodeAt(0) - '0'.charCodeAt(0);
        } else if (char >= 'a' && char <= 'z') {
            digit = char.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
        } else if (char >= 'A' && char <= 'Z') {
            digit = char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        } else {
            break;
        }
        
        if (digit >= radix) break;
        res = res * radix + digit;
    }
    
    return res * sign;
}


console.log(`conversion string to number in decimal number system myParseInt("123")=123 ${myParseInt("123") == 123}`)
console.log(`conversion string to number in binary number system myParseInt("123",2)=1 ${myParseInt("123", 2) == 1}`)
console.log(`conversion string to number in 36-th number system myParseInt("z.", 36) = 35 ${myParseInt("z.", 36) == 35}`)
console.log(`conversion string to number in decimal number system myParseInt("123.6", 10) = 123 ${myParseInt("123.6", 10) == 123}`)
console.log(`NaN conversion if first symbol doesn't exist in the specified number system myParseInt(".z", 36)=NaN ${isNaN(myParseInt(".z", 36))}`)
console.log(`NaN conversion if radix is incorrect myParseInt("123", 37)=NaN ${isNaN(myParseInt("123", 37))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 1)=NaN ${isNaN(myParseInt("123", 1))}`);
console.log(`conversion string with spaces myParseInt(" 123 ")=123 ${myParseInt(" 123 ") == 123}`)
console.log(`conversion string with spaces myParseInt(" 12 3 ")=12 ${myParseInt(" 12 3 ") == 12}`)
console.log(`conversion empty string myParseInt("")=NaN ${isNaN(myParseInt(""))}`)
console.log(`conversion blank string myParseInt("  ")=NaN ${isNaN(myParseInt("  "))}`)
console.log(`conversion string with a negative number myParseInt("-123") = -123 ${myParseInt("-123") == -123}`)
console.log(`conversion if string is a number myParseInt(123) = 123 ${myParseInt(123) == 123}`)
