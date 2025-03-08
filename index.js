import { testframework } from "./testframework.js";
import { mergeObj } from "./mergeObj.js"

let first = 1;
let second = 2;

[first, second] = [second, first];

console.log(`second = ${second}`);
console.log(`first = ${first}`);


const obj1 = { x: 2, y: 3 };
const obj2 = { z: 1, i: -10 };

console.log(mergeObj(obj1, obj2, true));
// { x: 2, y: 3, z: 1, i: -10 }

console.log(mergeObj(obj1, obj2, false));
// { x: 2, y: 3, z: 1, i: -10 }

const obj3 = { x: 99, y: 5 };
console.log(mergeObj(obj1, obj3, true));
// { x: 2, y: 3 } (берёт из obj1, так как p === true)

console.log(mergeObj(obj1, obj3, false));
// { x: 99, y: 5 } (берёт из obj3, так как p === false)
