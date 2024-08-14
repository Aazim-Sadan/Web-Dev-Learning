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


// Switch statement

let age1 = 17;

switch(age1){
    case 15:
        case 16:
            case 17:
                result = "These ages are allowed to sit in the exam"
                break;

                default:
                    result = "Not Allowed"

}
// If there is no break statement then "next" case will be executed
console.log(result);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
