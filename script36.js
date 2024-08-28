// Map Method

// Create new array from Original array by applying
// Transformation function 

let salaries = [4000, 6000, 9000, 3000, 5000]

let newSalaries = salaries.map(salary => {
    let incrementedAmount = salary / 2;
    return salary + incrementedAmount
})

console.log("After 50% incrementation new salaries are", newSalaries);


// Langth of new array always equal to the original array 



// =============================================================================


let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 40)

console.log(newNums)