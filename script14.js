// Arrow Function (ES6)

// Special form of fucntion expression
// It allows us to write function more fast becouse
// NO need to use function keywords
// NO need to use paranthesis() in case of single parameter
// NO need to use curly {} if sinlge line of code in function
// NO need to use teturn statement if single line of code in function


// Function Expression 

let invitation = function(coders){
    console.log(`Welcome ${coders} to this event`);
    
}

invitation("Aazim")


// Arrow Function

let invitation1 = name => `Welcome ${name} to this event`

console.log(invitation1("Sadan"))


// ====================================================


// Passing Function as an Argument (Higher order function example)

// Example

let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}


let transformer = function(str,func){
    return func(str)
}

console.log(transformer("HELLO", lowerCase));
compliment("You are a good coder")("Aazim");

// ========================================================


// Function returning another function 

let compliment = function(msg){
    return function(name1){
        console.log(`${msg} ${name1}`);
        
    }
}


// compliment("You are a good coder")("Aazim");


// =========================================================

// 2nd Method 

let complimented = compliment("You are a good coder");

 complimented("Aazim")


//  Compliment is higher order function 
