// Object, Array, Tuple, Enum
//!Object
// const person: {
//   firstname: string;
//   age: number;
//   xyz:{
//     address: string;
//   }
// } = {
//   firstname: "Aazim",
//   age: 24,
//   xyz:{
//     address: "Delhi"
//   }
// };
//!Array
var person = {
    firstname: "Aazim",
    age: 24,
    skills: ["Reactjs", "Nodejs"],
};
var favoriteLanguage; // will loose powerfull feature
favoriteLanguage = ["English", "Hindi", 21, true];
console.log(person);
//! Tuple
var person2 = {
    name: "Aazim Sadan",
    age: 24,
    skills: ["React", "Node"],
    product: [10, "Macbook M4"],
};
// person2.product[1] = 20 // invalid
//! Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
var person3 = {
    name: "Aazim Sadan",
    age: 24,
    skills: ["React", "Node"],
    product: [10, "Macbook M4"],
    role: Role.READ_USER_ONLY,
};
if (person3.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person3.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person3.role === Role.READ_USER_ONLY) {
    console.log("Read user only");
}
