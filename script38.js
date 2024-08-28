// Array Methods 

// reduce Method 

// Run reducer function for each array element 
// Array.reduce(function(total,currentValue),initialValue)
// It return single vlaue 


let myNum = [1,2,3]

let myTotal = myNum.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);



// ===============================================================

// Sum of all elements using reduce method 

let nums = [6,4,7,8,1]
let  sum = nums.reduce(function(total,currentValue){
    return total + currentValue
},0)

console.log(sum);

// Does not mutate original array 
console.log(nums);



// ================================================================


let shoppingCart = [
    {
        courseName: "JavaScript",
        Price: 3999
    },
    {
        courseName: "Data Science",
        Price: 4999
    },
    {
        courseName: "FullStack",
        Price: 6999
    }
]

let totalPay = shoppingCart.reduce((acc, item) => acc + item.Price, 0)

console.log("You have to pay::", totalPay)