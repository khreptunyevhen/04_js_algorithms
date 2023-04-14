// 1. One important point to keep in mind is that the value of this in normal functions is different from the value of this in Arrow Functions. As mentioned, the value of this in regular functions refers to an object that is executing that function. But in Arrow Functions, this refers to the owner (scope) of the object in which the Arrow Function is defined. Regardless of how the function is used:
var name = "John";

const person = {
  name: "David",

  printName: () => {
    console.log(this);
    console.log(this.name);
  },
};

person.printName();
