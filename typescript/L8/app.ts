// Generics intro

type Person = {
  name: string;
  age: number;
};

const Boy: Person = {
  name: "John",
  age: 32,
};

const Person2: Array<Person> = [{ name: "Doe", age: 30 }];

const fruits: Array<string> = [];
fruits.push("Mango");
fruits.push("Apple");
console.log(fruits);

// example2

function merge<T, U, V>(objA: T, objB: U, objC: V) {
  return { ...objA, ...objB, ...objC };
}
const res = merge(
  { name: "Aazim" },
  { role: "Software Engineer" },
  { id: "d1" }
);
console.log(res);

// Generics Constaints

function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
): { key: T; value: U; isActive: V } {
  return { key, value, isActive };
}

const obj = createObject("Age", 25, true);
console.log(obj);

// Generic Interface

interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 200 };
const stringBox: Box<string> = { value: "Dummy" };
console.log(numberBox);
console.log(stringBox);

// Generic Default

interface User<T = string> {
  data: T;
  status: number;
}

const response: User = { data: "Success", status: 200 }; // default string
const jsonRes: User<object> = { data: { key: "value" }, status: 200 };
console.log(response);
console.log(jsonRes);

// Generic with class

class Container<T> {
  private content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent(): T {
    return this.content;
  }
}

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getContent());

const numberContainer = new Container<number>(150);
console.log(numberContainer.getContent());

// Generic with Array

function getFirst<T>(arr: T[]): T {
  return arr[0];
}
const firstNmuber = getFirst([1, 2, 3, 4, 5]);
const firstString = getFirst(["a", "h"]);
console.log(firstNmuber);
console.log(firstString);

// Generic of keyof

// const Person = { name: "Aazim" };
// function getProperty(obj: object, key: string) {
//   return obj[key];
// }

function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = { name: "Aazim", age: 24 };
const name1 = getProperty(person, "name");
console.log(name1);
