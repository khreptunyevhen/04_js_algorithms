// The literal meaning of it is lifting up.
// Execute a function and then define it - This is due to a feature called Hoisting!

welcome();

function welcome() {
  console.log("Hello");
}

// For variables
// var

console.log(x);
var x = "Hello";

// let

// console.log(y);
// let y = "Hello"; // ReferenceError: Cannot access 'y' before initialization

// // const

// console.log(z);
// const z = "Hello"; // ReferenceError: Cannot access 'y' before initialization

const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
