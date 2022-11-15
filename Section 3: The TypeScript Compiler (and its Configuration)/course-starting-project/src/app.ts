// doing `tsc app.ts -w` within the terminal when in the directory watches the file through the tsc compiler

const userName = "Arvin"

console.log(userName)

// notes:

/**
 * tsc --init
 * the command above enables to initialize the typescript compilation for the project and enables us
 * to compile multiple files
 */


/**
 * ts doesn't complain about the code below because not only the ! but also the target and module and lib settings within the 
 * tsconfi.json file within the project.
 * since lib is commented out, it uses the default given by the target settings which is why the error is not showing below
 */
const button = document.querySelector('button')!;

button.addEventListener('click', () => {
  console.log('clicked!')
})