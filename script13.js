// Functions

// It is simply a piece of code which can use in our program many times

// It is just like a variable holding some piece of code



// Declaration

function nameOfFunction() {
    console.log("We are writing code present inside the function");

}

// Function call

nameOfFunction()


// Function Expression

let func = function () { // Also called anonymous function
    console.log("Example of function expression");

}

// Calling function expression

func()



// Paasing Values (Arguments and Parameters)

let invitation = function (name = "defaultName", time = "night") { // Local variable to this function
    console.log(`Welcome! ${name} You are are invited in our event at ${time}`);

}

invitation("Faizan", "morning")
invitation()
invitation("Golden")




// Returning Values (How to return value from the function)

let ageCalculator = function (birthYear, currentYear = 2024) {
    let age = currentYear - birthYear
    // console.log(`Your age is = ${age}`);

    return age;

    // console.log("After return statement no code will be executed");

}

// console.log(ageCalculator(1999));
let ageResult = ageCalculator(1999);
console.log(`Your age is = ${ageResult}`);

