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
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }

const person
// : {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } 
= {
  name: "Arvin",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  // role: [2, "author"]
  role: Role.ADMIN
};

// TS doesn't catch tuples when pushing items more than once
// person.role.push('admin')
// person.role[1]= 10;

let favoriteActivites: string[];
favoriteActivites = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !! ERROR
}

if (person.role === Role.ADMIN) {
 console.log('is admin') 
}