const array = ['Hello', 122, -10, 'Java', 'JavaScript', 500, 'NodeJS'];
// // finding
// let index = array.indexOf("Java");
// console.log(index);
// const array1 = array.filter(function(e){
//     let res = true; 
//     if(typeof e == "string"){
//         res = !e.includes("Java")
//     }
//     return res;
// })
// console.log(array1)

// forEach

// array.forEach(function(e, i) {
//     console.log(`${i + 1}: ${e}`);
// })


//  MAP
// const array1 = array.map(function(e){
//     let res = typeof e == "number" ? Math.abs(e).toString().length: e.length;
//     return res;
//     })
//     console.log(array1)


const array1 = [16,122,10000,2,9,1000000000];
// console.log (array1.sort());
// console.log (array1.to)

console.log (array1.toSorted(function(a,b) {
    return b - a;
}))