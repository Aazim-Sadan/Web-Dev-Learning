// Arrays

// let phone1 = "iPhone";
// let phone2 = "Samsung";

let phones = ["iPhone", "Samsung", "Oneplus"]
console.log(phones[2])

// Modify the Array

phones[0] = "Vivo";
console.log(phones)

// Array Methods 

// Join Methods

console.log(phones.join(" "))

// indexOf

console.log(phones.indexOf("samsung"))  //case Sensitive


// concat Method

let iPhoneModel = ["13pro", "14promax", "12pro"]
console.log(phones.concat(iPhoneModel))
let updatePhone = phones.concat(iPhoneModel)


// Length Method
console.log(phones.length)
console.log(updatePhone.length)



// Push Method
console.log(updatePhone.push("iPad")) // return new length of array
console.log(updatePhone)


// Pop Method
console.log(updatePhone.pop())
console.log(updatePhone)

