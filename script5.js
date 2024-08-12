// Numbers

let score = 50;
// console.log(score , typeof score)

// Mathematical Operators * / % + - ** 

// let result = score / 2

// console.log(result)


// Mathematical Expressions

let result = score *2 + (3+4) / 3 - 8 

console.log(result);

// Concatination of Numbers

let marksline = ("My total marks is =" + result)
console.log(marksline)


// ========================================================================================================


// Loose Equality (==) VS Strict Equality Operator

// Loose Equality Operator

// let age = 24; // Number type value
// console.log(age == "24") // Focus only on value not on type

// // Strict Equality Operator

// console.log(age === "24") // Focus on both value and type



// =========================================================================================================



// Type Conversion

// let stringTyoe = "50";

// console.log(stringTyoe, typeof stringTyoe)

// Number Method

// let numberType = Number(stringTyoe)
// console.log(numberType, typeof numberType)

// Imp Note
// In number method passing String must be numeric value

let numberType = 67;

// String Method

let stringType = String(numberType)
console.log(stringTyoe, typeof stringType)


// =================================================================================

// Boolean Method True/False

let abc = ""; // Emptly strings are false

let age = 32;

let booleanValueOfAge = Boolean(age);
console.log("Boolean Value of age is", booleanValueOfAge)