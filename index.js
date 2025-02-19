
function minMax(...operands) {
    let min = Infinity;
    let max = -Infinity;

    function numbersMinMax(num) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }


    for (let i = 0; i < operands.length; i++) {
        let operand = operands[i];

        if (Array.isArray(operand)) {
            for (let j = 0; j < operand.length; j++) {
                numbersMinMax(operand[j]);
            }
        } else if (typeof operand === "number" && isFinite(operand)) {
            numbersMinMax(operand);
        }
    }
    return [min, max];
}

console.log(`minMax(1, 2, 3)=${minMax(1, 2, 3)}`);
console.log(`minMax(1, 2, 3, [100, 50]=${minMax(1, 2, 3, [100, 50])}`);
console.log(`minMax(1, 2, 3, [100, 50], [-2, 40, 200])=${minMax(1, 2, 3, [100, 50], [-2, 40, 200])}`);