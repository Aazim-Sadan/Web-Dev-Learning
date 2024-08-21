// Array Methods 

// flat method 

// It creates s new array with the elements of the subarrays
// concatenated into it. 

let arr = [1,2,3,[4,5,[6,7,8]]]

console.log("Before flat", arr);

let result = arr.flat(2) // by default 1(depth value) value

console.log("After flat", result);

