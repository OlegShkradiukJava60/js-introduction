function sum (...operands) {
    let sum = 0;
    // if(Array.isArray(operands[0])){
    //     operands = [...operands[0]];
    // }
    for (let i = 0; i < operands.length; i++) {
        let operand = operands[i]
        if (Array.isArray(operand)) {
            operand = sumArray(operand);
        }
        sum += operand
    }
    return sum;
}

function sumArray(array) {
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}


// // examples of function sum
// console.log (`sum(1,2, "Hello"=${sum(1,2, "Hello")}}`);
// console.log(`sum([1, 2, 3, 4])=${sum([1, 2, 3, 4])}`);

console.log(`sum(1,2,3,4) = $sum(1,2,3,4)}`)
console.log(`sum([1, 2, 3, 4])=${sum([1, 2, 3, 4])}`)
console.log(`sum([1, 2, 3, 4], 5, 6)=${sum([1, 2, 3, 4], 5, 6)}`)
console.log(`Math.max(1, 2, 3) = ${Math.max(1, 2, 3)}`)
console.log(`Math.max(...[1, 2, 3]) = ${Math.max(...[1, 2, 3])}`)