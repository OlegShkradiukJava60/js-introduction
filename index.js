const deltaDigit = "0".charCodeAt(0);
const deltaLetter = "a".charCodeAt(0) + 10
function myParseInt(numStr, radix = 10) {
    let res = NaN;

    if(radix > 1 && radix <37 ){


    }


    numStr = getPreparedString(numStr);
    let index = getIndex(numStr);
    const sign = getSign(numStr);

    while (!isNaN(digit = getDigit(numStr[index], radix))) {
        if(isNaN(res)){
            res = 0;
        }
        res = res * radix + digit;
        index++;
    }
    return res * sign;
}
function getPreparedString(str){
    str = str + "";
    str = str.trim();
    str = str.toLowerCase()
    return str;
}
function getIndex(str) {
    let index = 0;
    if(str[0] == '-' ||[0] == '+'){
        index++;
    }
    return index;
}
function getSign(str) {
    let sign = 1;
    if(str[0] == '-'){
        sign = -1
    }
    return sign
}
function getDigit(symbol, radix){
    let res = NaN;
    const code = symbol.charCodeAt(0);
    const digit = symbol / symbol == 1 ? code -deltaDigit : code - deltaLetter;
    if (digit >= 0 && digit < radix ) {
        res = digit;
    }

 return res;
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
