// Short Circuiting (&&||


// False values => 0,false,undefined,null, ''(empty string) 
// AND (&&) operator (Outut true is all input true) 

let result = "programmers" && 0 && "5" // Not move towards next
console.log(result) // original form



// OR (||) operator (Output true if given input true) 

let result1 = "Coders" || 0
console.log(result1)

// As || operators find first output true. It simoly returns that ture value and does not move forward