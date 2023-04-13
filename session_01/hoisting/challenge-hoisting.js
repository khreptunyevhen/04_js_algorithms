var color = "Yellow";

f();

function f() {
  // ...
  if (typeof color === "undefined") {
    var color = "Green";
  }

  console.log(color);
}
