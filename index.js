
 /*  my code here
 function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
*/


// work code
function myReduce(array, callback, initialValue) {
    if (!Array.isArray(array)) {
        throw new TypeError("Expected an array");
    }

    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        if (array.length === 0) {
            throw new TypeError("Cannot reduce an empty array without an initial value.");
        }
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}


const minMaxReducer = (acc, val) => [
    val < acc[0] ? val : acc[0], // min value
    val > acc[1] ? val : acc[1], // max value
  ];
  // searth min and max values in an array
  const minMax = (arr) =>
    !Array.isArray(arr) || arr.length === 0
      ? [undefined, undefined]
      : myReduce(arr, minMaxReducer, [arr[0], arr[0]]);


// Finds min and max values in the array
console.log("Result 1:", myReduce([8, 4, 2, 6, 0, 9], minMaxReducer, [Infinity, -Infinity])); // [0, 9] minMax
console.log("Result 2:", myReduce([-15, -3, 5, 25, 110], minMaxReducer, [Infinity, -Infinity])); // [-15, 110] minMax
console.log("Result 3:", myReduce([7], minMaxReducer, [Infinity, -Infinity])); // [7, 7] 
console.log("Result 4:", myReduce([], minMaxReducer, [Infinity, -Infinity])); // [Infinity, -Infinity] 

console.log("Sum 1:", myReduce([2, 4, 6, 8, 10], (acc, val) => acc + val, 0)); // 30 Sums up the elements in the array
console.log("String Concatenation:", myReduce(["zolo", "Echo", "999", "Square", "EVENING", " "], (acc, val) => acc + val, " ")); // Concatenates strings into a single string
console.log("MinMax of numbers:", minMax([8, 4, 2, 6, 0, 9])); // [0, 9]
console.log("MinMax of strings:", minMax(["cherry", "kiwi", "mango"])); // ["cherry", "mango"]

console.log("Case 1:", myReduce([9, 12, 18], (acc, val) => acc + val)); // 39 Uses the first element as the initial value
console.log("Case 2:", myReduce([9, 12, 18], (acc, val) => acc + val, 200)); // 239 Initial value is 200
console.log("Case 3:", myReduce([9, 12, 18], (acc, val) => acc + val, undefined)); // 39 Works like Case 1 as initial value is not provided
