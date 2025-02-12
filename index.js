
// function is an object with operator () (function call)
// conversion function to string will return string containin text of the function
//conversion function to number will return NaN
const sum = function(a,b){
    return a + b;
}
const subtract = function(a,b){
    return a - b;
}
const multiply = function(a,b){
    return a * b;
}
// console.log(sum + "")
function calculate(fun, a, b){
    return fun(a,b);
}

console.log (calculate(multiply, 10, sum))
console.log(10(1, 6))