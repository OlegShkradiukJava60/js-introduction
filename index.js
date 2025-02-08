function sumDigits(str) {

    let sum = 0;

    let num = Math.trunc(Math.abs(+str));

    if (isNaN(num)) {
        return NaN;
    }


    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.trunc(num / 10);
    }
    return sum;
}

console.log (`result:  ${sumDigits(" ")}`) // => 6
console.log (`result:  ${sumDigits("123")}`) // => 6
console.log (`result:  ${sumDigits("a123")}`) // => NaN
console.log (`result:  ${sumDigits("123a")}`) // => NaN
console.log (`result:  ${sumDigits(-123)}`) // => 6
console.log (`result:  ${sumDigits(123.3333)}`) // => 6

function displayAnanas() {
console.log(('a' + -("as") + 'as').toLowerCase());
}
 displayAnanas();