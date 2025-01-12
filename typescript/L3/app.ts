// UNION | -> pipe in Typescript

function combine(num1: number | string, num2: number | string) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sum = combine(10, 20); // 30
const combineName = combine("Aazim", "FullStack");
console.log(sum, combineName);




// LITERAL TYPES

function combine2(
    num1: number | string,
    num2: number | string,
    conversionType: "as-number" | "as-string"
) {
    let result;
    if (
        (typeof num1 === "number" && typeof num2 === "number") ||
        conversionType === "as-number"
    ) {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sum2 = combine2("10", "20", "as-number"); // 30
const sum3 = combine2(10, 50, "as-number");
const combineName2 = combine2("Aazim", "FullStack", "as-string");
console.log(sum2, sum3, combineName2);





// TYPE ALIAS / CUSTOM TYPES

type Combinable = number | string;
type CovertionType = "as-number" | "as-string"

function combine3(
    num1: Combinable,
    num2: Combinable,
    conversionType: CovertionType
) {
    let result;
    if (
        (typeof num1 === "number" && typeof num2 === "number") ||
        conversionType === "as-number"
    ) {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

const sums = combine3("10", "20", "as-number"); // 30
const sum4 = combine3(10, 50, "as-number");
const combineName3 = combine3("Aazim", "FullStack", "as-string");
console.log(sums, sum4, combineName3);


type User = {
    name: string;
    age:24;
    skills: string[]
}

const user : User = {
    name : "Aazim",
    age: 24,
    skills: ["React", "Node"]
}

function greet(user : User){
    console.log(`Hi, I am ${user.name}`);  
}
greet(user)