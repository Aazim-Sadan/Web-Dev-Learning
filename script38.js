// Array Methods 

// reduce Method 

// Run reducer function for each array element 
// Array.reduce(function(total,currentValue),initialValue)
// It return single vlaue 

// Sum of all elements using reduce method 

let nums = [6,4,7,8,1]
let  sum = nums.reduce(function(total,currentValue){
    return total + currentValue
},0)

console.log(sum);


// Does not mutate original array 
console.log(nums);
