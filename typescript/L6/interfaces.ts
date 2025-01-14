// Interface

interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user: Person;

user = {
  name: "Aazim",
  age: 24,
  greet(text): void {
    console.log(`${text} ${this.name}`);
  },
};
// console.log(user);
// user.greet("Hi there, I am Aazim");

interface Greetable {
  readonly name: string;
  greet(text: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(text: string): void {
    console.log(`${text} ${this.name}`);
  }
}

const p1 = new Person("Faizan");
p1.greet("Hi there, I am");

// Extending Interface

interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  greet(text: string): void;
}

class Person2 implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(text: string): void {
    console.log(`${this}, ${this.name}`);
  }
}
let user1: Greetable;
user1 = new Person2("Moazzam");
console.log(user1);

// function

// type addFunc = (a: number, b:number)=>  number
interface addFunc {
  (a: number, b: number): number;
}

let add: addFunc;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add(10,20));

// optional 

interface Named{      
    readonly name: string;
    outputName ? :string;                                               
}
class Person3 implements Named{
    name: string;
    constructor(n:string){
        this.name = n;      
    }
}