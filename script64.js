// Short Circuiting (&&||


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

// False values => 0,false,undefined,null, ''(empty string) 
// AND (&&) operator (Outut true is all input true) 

let result = "programmers" && 0 && "5" // Not move towards next
console.log(result) // original form



// OR (||) operator (Output true if given input true) 

let result1 = "Coders" || 0
console.log(result1)

// As || operators find first output true. It simoly returns that ture value and does not move forward