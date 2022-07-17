function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!')
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return result;
  }
}

// type inferance
let someNumber: number; // this is "better" practice
someNumber = 3;

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is ";

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);
