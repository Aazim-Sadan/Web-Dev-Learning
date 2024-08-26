// Destructuring the Object 


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

// let { name, Location, mainMenu } = hotel
// console.log(name, Location, mainMenu)



// Set customize name to Object properties

let { name: hotelName, Location: hotelLocation, mainMenu: Menu } = hotel
console.log(hotelName, hotelLocation, Menu)


// Destructuring nested Object 

let { name, openingHour } = hotel
console.log(name, openingHour);

let { sunday: { open, close } } = openingHour
console.log(open,close)