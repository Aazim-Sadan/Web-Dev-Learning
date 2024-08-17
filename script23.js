// Function

// call and apply method 
// we can set the value of "this" method 


let flight = {
    airline: "Emirates",
    iatacode: "EA",
    bookings: [],
    book: function (flightnum, name) {
        console.log(`${name} Booked his flight in ${this.airline} flight number is ${this.iatacode}${flightnum}`);
        this.bookings.push({ flightName: `${this.airline}`, name: name, flightnum: `${this.iatacode}${flightnum}` })

    }
}
flight.book(455, "Aazim")
flight.book(346, "Faizan")
flight.book(432, "Nawaz")
flight.book(897, "Faisal")

console.log(flight);


let secondFlight = {
    airline: "Air India",
    iatacode: "AI",
    bookings: [],
}

let book = flight.book;

// book(847, "Lara") bbok is regular function 
// "this" value is "undefined" at least in strict mode 


// Solution Using "call" method 

book.call(secondFlight, 349, "Lara");

console.log(secondFlight);



// Apply method 

book.apply(secondFlight, [398, "Arshad"])
console.log(secondFlight);


// bind mehtod 
// this method binds functions() with object 

function greet(){
    console.log(`Welcome ${this.firstName} ${this.secondName} to my Office`);
    
}

let user = {
    firstName: "Adnan",
    secondName: "Ahmad"
}

let greets = greet.bind(user);

greets()
