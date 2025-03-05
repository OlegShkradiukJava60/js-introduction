export function myReduce(array, callback, initialValue) {
    //first parameter is an array for reducing
    //returns one value after reducing
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    let acc = initialValue == undefined ? array[0] : initialValue;
    const index = initialValue == undefined ? 1 : 0;
    for (let i = index; i < array.length; i++) {
      acc = callback(acc, array[i], i, array);
    }
    return acc;
  }
  export function minMax(arr) {
    //arr is an array containing either strings or numbers
    // returns array with two elemnts: first is min value, second is max value
    //requirement: to use myReduce method described above (only one call)
    const res = myReduce(
      arr,
      (acc, curr) => [
        acc[0] > curr ? curr : acc[0],
        acc[1] < curr ? curr : acc[1],
      ],
      [arr[0], arr[0]]
    );
    return res;
  }