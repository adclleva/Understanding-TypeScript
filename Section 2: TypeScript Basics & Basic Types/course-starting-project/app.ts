// example of unknown types
// unknown is better than using any because it will allow you to do some type checking
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Arvin";
// userName = userInput //-> this will display an error

// example of type checking
if (typeof userInput === "string") {
  userName = userInput;
}

// example of never type as it will "crash" the script, won't return anything, and can be used for error cases
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured!", 500);
