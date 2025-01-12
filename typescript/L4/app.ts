// Function return type

function add(num1: number, num2: number) : number {
  return num1 + num2; // return 30
}
// console.log(add(10, 20));



function greet(name:string) : void{
    console.log(`Hi, ${name}`);
}
greet("Aazim") 


// let combineFunction : Function;

// combineFunction = 10; // invalid
// combineFunction = function(){} valid 
// combineFunction = add; // valid
// console.log(combineFunction(1,2));

let combineFunction : (a: number, b: number)=> number;
combineFunction = add;
console.log(combineFunction(50,100));


// Function type and callbacks

function addHandle(num1:number, num2: number, cb:(n:number)=> void){
  const result = num1 + num2;
  cb(result);
}
addHandle(15, 20, (result:number)=>{
  console.log(result);
})
