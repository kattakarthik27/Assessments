// Array findIndex()
// findIndex(testFn(element[,index[,array]])[,thisArg])
// testFn <- element: current element
// index  <- index of current element
// array   <- array that the findIndex() was call upon.

let ranks = [1,3,5,7,10,7];
let index = ranks.findIndex(rank => rank === 7);
console.log(index)       // 2

let index1 = ranks.findIndex((rank,index) => rank === 7 && index > 2);
console.log(index1);