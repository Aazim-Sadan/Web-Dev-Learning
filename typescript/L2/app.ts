// Object, Array, Tuple, Enum

//!Object
const employee: {
  firstname: string;
  age: number;
  xyz:{
    address: string;
  }
} = {
  firstname: "Aazim",
  age: 24,
  xyz:{
    address: "Delhi"
  }
};

//!Array
const person: {
  firstname: string;
  age: number;
  skills: string[];
} = {
  firstname: "Aazim",
  age: 24,
  skills: ["Reactjs", "Nodejs"],
};

let favoriteLanguage: any[]; // will loose powerfull feature
favoriteLanguage = ["English", "Hindi", 21, true];

console.log(person);



//! Tuple

const person2: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string]; // fixed array of two types
} = {
  name: "Aazim Sadan",
  age: 24,
  skills: ["React", "Node"],
  product: [10, "Macbook M4"],
};
// person2.product[1] = 20 // invalid



//! Enum
enum Role {
  ADMIN,
  AUTHOR,
  READ_USER_ONLY,
}

const person3 = {
  name: "Aazim Sadan",
  age: 24,
  skills: ["React", "Node"],
  product: [10, "Macbook M4"],
  role: Role.READ_USER_ONLY,
};

if (person3.role === Role.AUTHOR) {
  console.log("Author");
} else if (person3.role === Role.ADMIN) {
  console.log("Admin");
}else if (person3.role === Role.READ_USER_ONLY){
    console.log("Read user only");
    
}
