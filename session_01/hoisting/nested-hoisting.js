// undefined because the inner() function execute before declare a var x.
// outer();

// function outer() {
//   inner();
//   var x = "Hello";

//   function inner() {
//     console.log(x);
//     var y = "Hi";
//   }
// }

// 'Hello' because the inner() function execute after declare a var x.
// outer();

// function outer() {
//   var x = "Hello";
//   inner();

//   function inner() {
//     console.log(x);
//     var y = "Hi";
//   }
// }

function outer() {
  var x = undefined;

  function inner() {
    var y = undefined;
    console.log(x);
    y = "Hi";
  }

  inner();
  x = "Hello";
}

outer();
