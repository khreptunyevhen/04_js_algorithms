// In general, Scope refers to the parts of a program where a variable, function, object, etc. can be accessed.
const x = 10;

function getX() {
  console.log(x);

  const y = 20;
}

getX(); // 10
// console.log(y); // error

// Global Scope
console.log("=================Global Scope===================");
const name = "Diego";

function func() {
  console.log(name); // Diego
}

func();

console.log("=================Local Scope===================");

// Global Scope

function getUser() {
  // Local Scope

  const user = "Mario";
  console.log(user);
}

getUser(); // Mario
// console.log(user); // ReferenceError: user is not defined

// Global Scope

function func1() {
  // Local Scope #1
  const name = "John";

  function func2() {
    // Local Scope #2
    const lastname = "Doe";
    console.log(`${name} ${lastname}`);
  }

  func2();
}

func1(); // John Doe

console.log("=================Block Scope===================");

{
  let x = 29;
}

// console.log(x); // ReferenceError: x is not defined

{
  var z = 12;
}

console.log(z); // 12

const x1 = 1;
{
  const y1 = 2;
  {
    console.log(x1); // ok
    console.log(y1); // ok
    const z1 = 3;
  }
  // console.log(z1); // error
}

// console.log(y1); // error
