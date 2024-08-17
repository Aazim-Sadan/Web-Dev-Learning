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
