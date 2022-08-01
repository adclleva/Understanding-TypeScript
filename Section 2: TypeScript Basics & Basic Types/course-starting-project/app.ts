// example type aliases  which is useful for multiple union types
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

// example of an alias of a possibly complese object type
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };

// exampled of a return type
function add(number1: number, number2: number): number {
  return number1 + number2;
}

// example of function types
// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5

console.log(combineValues(1, 1));

// example of return void type
// a return undefined type should only be used when you are using undefined explicitly
function printResult(num: number): void {
  console.log("Result: " + num);
}

console.log(printResult(12));

// combineValues = printResult // -> this will send an error because of the declared function type

// the pipe symbol is a good example for union types and makes the types be flexible
// resultConversion is an example of literal types to be specific versions of the types
function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;

  if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
  // if (resultConversion === " as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log({ combinedAges });

const combinedStringAges = combine(30, 40, "as-number");
console.log({ combinedStringAges });

const combinedNames = combine("Arvin", "Hisui", "as-text");
console.log({ combinedNames });

// specialized object type
// const person: {
//   name: string;
//   age: number;
// } = {
// infers the object types

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

// custom type
// you can have no numbers and it would increment
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person =
  // : {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string]
  // }
  {
    name: "Arvin",
    age: 28,
    hobbies: ["Sports", "Cooking"],
    // role: [2, "author"]
    role: Role.ADMIN,
  };

// TS doesn't catch tuples when pushing items more than once
// person.role.push('admin')
// person.role[1]= 10;

// not really suggested when developing only when you're not sure about the data
let anyType: any;
let favoriteActivites: string[];
favoriteActivites = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !! ERROR
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
