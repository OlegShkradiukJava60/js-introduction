function some(array, fun) {
    let index = 0;
    while (index < array.length &&!fun(array[index], index)) {
    index++;
    }
    return index < array.length;
}

function every(array, fun) {
    let index = 0;
    while (index < array.length && fun(array[index], index)) {
    index++;
    }
    return index == array.length;
}


function evenNumber(num) {
    return num % 2 === 0;
}

function elmGreaterIndex(elem, index) {
    return elem < index;
}


function elmGreaterIndex(elem, index) {
    return elem > index;
}

const array = [2, 3, 4];
console.log(`some function for even numbers: ${some(array, evenNumber)} - true`);
console.log(`every to check elements greater than index: ${every(array, elmGreaterIndex)} - true`);

const array2 = [1, 3, 5];
console.log(`some() to check even numbers (all odd): ${some(array2, evenNumber)} - false`);
console.log(`every() to check elements greater than index (all greater): ${every(array2, elmGreaterIndex)} - true`);

const array3 = [0, 2, 4, 6];
console.log(`some() to check even numbers (all even): ${some(array3, evenNumber)} - true`);
console.log(`every() to check even numbers (all even): ${every(array3, evenNumber)} - true`);

const array4 = [0, 1, 2, 3];
console.log(`some() to check elements greater than index: ${some(array4, elmGreaterIndex)} - false`);
console.log(`every() to check elements greater than index: ${every(array4, elmGreaterIndex)} - false`);
