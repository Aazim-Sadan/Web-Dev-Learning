// Logical Operators

// And && , Or || , Not !

let password = "qwerdd@dd"

if( password.length > 5 && password.includes("@")){
    console.log("Password Strength is Strong")
}
else{
    console.log("Change Your Password")
}



// Not Operator  !  true to false and false to true

let status = false;
if(!status){ // change into true
    console.log("Your status is = ", status);
    
}


// Priorities
// Not
// And , OR , From left to right

// Example

let result = true && true || false && !false 
result = true && true || false && true
result = true || false && true
result = true && true 
result = true
console.log(result);
