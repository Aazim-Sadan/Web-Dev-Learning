// Array Methods

// "some" and "every" method 

// some method return "true" if "any" array elements pass the test 

// every method return "true" if "all" array elements pass the test 

let scores = [34,67,87,34,94]
let result = scores.some(score => {
    return score > 90
})

console.log(result);
