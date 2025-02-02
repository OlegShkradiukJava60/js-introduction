// let a=2;
// a="abc";
// console.log(a);
// const b =3;
//  b = "lmn"; -const cannit be updated
//  primirive types
/*
1. number  like double in Java
2. string "abc" < "b"
3. boolean (true, false)
4. undefined (undefined)
5. null (null) 

*/
//  1. number
let a = 100;
a /= 3; 

console.log("non-normolizef result of division 100 on 3", a);
a = Math.trunc(a);

console.log("normolizef result of division 100 on 3", a);
a = Math.round(30.6);

console.log("30.6 rounded - ", a);

console.log("30.1 after method floor - ", Math.floor(30.1));

console.log("30.1 after method floor - ", Math.ceil(30.1));
