// function sumDigits(str) {

//     let num = Math.trunc(Math.abs(+str));

//     if (isNaN(num)) {
//         return NaN;
//     }
// let sum = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         sum += digit;
//         num = Math.trunc(num / 10);
//     }
//     return sum;
// }

function sumDigits(num) {
    let source = num * 1;
    let res = NaN;
    if(source == num){
        res = 0;
        if(source < 0 ){
            source = -source;
        }
        source = Math.trunc();
        while (source > 0) {
            const digit = source % 10;
            res += digit;
            source = Math.trenc(source / 10);
        }
    }
    return res;
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