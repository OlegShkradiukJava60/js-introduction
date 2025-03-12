
import { testframework } from './testframework.js';

function f1() {
  return "kuku"
}

function sum(op1 = 10, op2) {
  
  return op1 + op2
}

Function.prototype.toString = function () {
  return this().toString();
}

// console.log(`sum.apply(undefined, [ 1, 2 ])=${sum.apply(undefined, ({x:1}) [1, 2 ])}`);
// console.log(`sum(1,2)=${sum(1,2)}`)
console.log(sum.bind(undefined, 1,2 ).toString())