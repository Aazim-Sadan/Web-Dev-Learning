// Functions in JavaScript 

// First class function

function square(num){
   return num * num;
}

function displaySquare(fn){
    console.log("Square is :" + fn(5));
}
displaySquare(square);


// =====================================

// IIFE 

(function(x){
return (function(y){
    console.log(x); // 1 coz of closure
})(2)
})(1)



// =====================================

// Params vs Arguments

const fn = (x,y,z, ...numbers)=>{
    console.log(y,z, numbers[0] * numbers[1]);
}
fn(3,4,5,6,7,8,9)