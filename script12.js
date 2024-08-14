// Variables and Block Scope

// scope  >>-- Area where variable is defined or accessible


let score = 80;

if (true) {

    let score = 50; // block scope
    score = 60;

    console.log(score) // Nearest Value
}

// =======================================================================


// Ternaty Operators ( ? :)

let age = 20;
let weight = 45;

if ( age > 18) {
    console.log("Qualify");
    
} else {
    console.log("Fail");
    
}

// Single line solution

let result = age > 18 ? weight > 55 ? "Qualify" : "WeightIssue" : "Fail";
console.log(result);
