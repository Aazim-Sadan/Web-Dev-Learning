// Working with Arrays(Simple Methods)

// sorting array using sort method 

// By default sort method used to sort strings
// It is firstly convert everything into string and then .....


let letters = ["b","f","a","c"]
console.log(letters.sort());

let nums = [2,4,6,8,-45,-23]
console.log(nums.sort()); // Unexpected 

// if a-b < 0 => a<b => A,B (Keep order same)

// if a-b < 0 => a>b => B,A (Switch the order)

// Ascending Order 

nums.sort((a,b) =>{
    return a-b
})

console.log("Sorted", nums);



// ===============================



// let nums = [2,4,6,8,-45,-23]
// nums.sort((a,b) =>{
//     if(a<b){
// return -1
// }
// if(a>b){
// return 1
// }
// })

// console.log("Sorted", nums);

// =========================================



// Chain of Methods

let num = [1,2,3,4,5,6]
let result = num.slice(0,3).splice(2,1,7).push(8);
// push methods return new length of the array 

console.log(result);
