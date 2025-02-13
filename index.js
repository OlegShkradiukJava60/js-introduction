
function some(array, fun) {
    let i = 0;
    let res = true;
    while (i < array.length && res) {
        if (fun(array[i], i)) {
            res = true; 
        }
        i++
    }
    return res;
}

function every(array, fun) {
    let i = 0;
    let res = true; 
    while (i < array.length && res) {
        if (fun(array[i], i)) {
            res = false; 
        }
        i++
    }
    return res; 
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
