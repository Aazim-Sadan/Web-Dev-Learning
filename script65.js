// for-of loop 

let hotel = {
    name: "Taj",
    Location: "xyz road, New Delhi",
    catogaries: ["Chinese", "Italian", "English"],
    mainMenu: ["Food1", "Food2", "Food3"],
    starterMenu: ["SpecialFood1", "SpecialFood2"],
    openingHour: {
        sunday: { open: "09:00AM", close: "11:00PM" },
        monday: { open: "10:00AM", close: "10:00PM" }
    }
}

let newArray = [...hotel.mainMenu,...hotel.starterMenu]
console.log(newArray);

for (let elem of newArray)console.log(elem);

    

