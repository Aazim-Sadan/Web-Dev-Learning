// This is String
console.log("Hello Its me Aazim")
let firstname = "Aazim"
let lastname = "Sadan"
// console.log(firstname,lastname)

// String Concatination

// Method 1 using + operator

// console.log(firstname + " " + lastname)

// Method 2 using template literals

let fullName = `My name is ${firstname} ${lastname}`
console.log(fullName)

// Getting string character
console.log(firstname[0])

// String Methods

console.log(firstname.toUpperCase())
console.log(fullName.toLowerCase())
console.log(lastname.indexOf("d"))
console.log(lastname.lastIndexOf("a"))

// Common String method

let Myname = ("  Mohd Aazim Sadan  ")

// Trim Method

let trim = Myname.trim()
console.log(Myname)
console.log(trim)

console.log(trim.indexOf("Mohd"))

// Includes Method

console.log(trim.includes("sadan")) //Case Sensetive