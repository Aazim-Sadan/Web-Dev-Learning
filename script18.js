// Function vs Method 

let ageCalculator = function (birthyear) {
    let age = 2024 - birthyear
    console.log(`Current age is = ${age}`);

}

ageCalculator(2003)


// Method >-- Its is nothing but object property(Key) holding Function as "Value"


let person = {

     ageCalculate : function (birthYear) {
        let age = 2024 - birthYear;
        return age;
    }

}
console.log(`Your current age is = ${person.ageCalculate(2003)}`);
