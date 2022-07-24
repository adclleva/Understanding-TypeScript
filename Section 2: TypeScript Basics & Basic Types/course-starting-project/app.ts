// specialized object type
// const person: {
//   name: string;
//   age: number;
// } = {
// infers the object types
const person = {
  name: "Arvin",
  age: 28,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivites: string[];
favoriteActivites = ["Sports"];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !! ERROR
}
