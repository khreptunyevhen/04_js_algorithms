// 1.
// console.log(this);

// 2;
// function f() {
//   console.log(this);
// }

// f();

// 3. With global scope
// let name = "Yevhen";

// // function f() {
// //   console.log(this);
// //   console.log(this.name);
// // }

// // f();

// const result = () => {
//   console.log(this);
//   console.log(this.name);
// };

// result();

// 4. with object
// let name = "David";

// function getName() {
//   console.log(this);
//   console.log(this.name);
// }

// const obj = {
//   name: "John",
//   print: getName,
// };

// obj.print(); // John

// 5.

// let name = "David";

// const person = {
//   name: "John",
//   getName() {
//     console.log(this.name);
//   },
// };

// const myGetName = person.getName;

// myGetName(); // David
// person.getName(); // John
