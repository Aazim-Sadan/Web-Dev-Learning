// "object/arrays" how "reference" are passed to variable


let arr = [1,2,3,4,5];
let getRef = arr;

// getRef[5] = 7;
// getRef.shift()

console.log("Original Array", arr); // also change
console.log("getReff Array", getRef);

// pass by value

let getValue = [...arr]

getValue[5] = 8
getValue.shift()

console.log("Original Array", arr); // NO change
console.log("getValue Array", getValue);