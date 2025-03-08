import { testframework } from "./testframework.js";

let first = 1;
let second = 2;

[first, second] = [second, first];

console.log(`second = ${second}`); 
console.log(`first = ${first}`);  
