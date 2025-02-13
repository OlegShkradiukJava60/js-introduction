
function some (array, fun) {
    for (let i = 0; i < array.length; i++) {
        if (fun(array[i], i)) {
            return true;
        }
        return false;
    }
}
function every (array, fun) {
    for (let i = 0; i < array.length; i++) {
        if (fun(array[i], i)){
            return true;
        }
        return false;
    }
}

function evenNumber(num) {
    return num % 2 == 0;
}

function elmGreaterIndex(elem, index) {
    return elem > index;
}


let array = [2, 3, 4];
console.log (`some function for even numbers: ${some(array, evenNumber)}`);
console.log(`every to check elements greater than index: ${every(array, elmGreaterIndex)}`);
