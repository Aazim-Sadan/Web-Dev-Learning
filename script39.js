// Array Methods

// "find" method
// It return the "first" elemets we are looking for... 

let students = [{id:1,name:"alex"},{id:2,name:"john"}]
let result = students.find(student => {
    return student.id === 1
})
console.log(result);


// FindIndex method 

// Execute funtion for each array element 
// It return "index" of that array element who first pass the 
// test "Otherwise" -1

let ages = [32,34,65,23,48]
let result1 = ages.findIndex(age =>{
return age > 17
})
console.log(result1);
