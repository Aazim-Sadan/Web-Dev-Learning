// Array Methods

// Splice Method

// used to add new elements/s into the array 
// Array.splice(index, deleteValue, valueToBeAdded)
// Return deleted items in the form of array 

let num = [3,6,9,2]
let updated = num.splice(1,1,1,)

console.log("Original Array", num); // It also mutates the original array 
console.log("Returned Elements Array", updated)
