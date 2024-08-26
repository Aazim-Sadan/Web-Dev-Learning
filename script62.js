// Spread Operator

// function arr(...add) {
// return add
// }

// let addArray = arr([34,35,54,67])
// console.log(addArray)

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


let num = [5,6,4,7]
console.log(...num)


// usecase

let newArray = [22,33, ...num]
console.log(newArray)


// Upadating main menu 

let updatedMenu = [...hotel.mainMenu, "Food4", "Food5"]
console.log(updatedMenu);


// Join 2 Arrays

let joinedArray = [...num, ...newArray]
console.log(joinedArray);


// Create shallow copy using spead operator

// Deep copy 

// let copyArray = [...updatedMenu] // reference
// copyArray[1] = "new Food"
// console.log(copyArray);
// console.log(updatedMenu);


// We can also use spread operator in Strings

let passion = "programming"
console.log(...passion);




