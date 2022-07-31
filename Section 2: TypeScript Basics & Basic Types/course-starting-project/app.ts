// specialized object type
// const person: {
//   name: string;
//   age: number;
// } = {
// infers the object types
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
}= {
  name: "Arvin",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"]
};

// TS doesn't catch tuples when pushing items more than once
person.role.push('admin')
// person.role[1]= 10;

let favoriteActivites: string[];
favoriteActivites = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !! ERROR
}
