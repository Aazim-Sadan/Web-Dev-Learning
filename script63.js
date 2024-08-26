// Rest pattern and parameter


let hotel = {
    name: "Taj",
    Location: "xyz road, New Delhi",
    catogaries: ["Chinese", "Italian", "English"],
    mainMenu: ["Food1", "Food2", "Food3"],
    openingHour: {
        sunday: { open: "09:00AM", close: "11:00PM" },
        monday: { open: "10:00AM", close: "10:00PM" }
    }
}

// Spread(...) operator It is present in the RHS of = 
let nums = [7,6,5,4,3]
let newArray = [8, ...nums]
console.log(newArray);


// Syntax of REST(...) Get elements and packed them into Array 
// Use in LHS 

let [a,b, ...rest] = nums
console.log(rest);
 