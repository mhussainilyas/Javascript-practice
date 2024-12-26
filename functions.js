// ===========================
//        Functions
// ===========================

// 1. Function Declaration
// A named function that can be called anywhere in the code (after it's defined).
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // function invocation

// 2. Function Expression
// A function stored in a variable. It can be named or anonymous.
const add = function (a, b) {
  // (a, b) are parameters
  return a + b;
};
console.log(add(2, 3)); // (2, 3) are arguments

// 3. Arrow Functions
// A concise way to write functions, introduced in ES6.
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4));

// 4. Anonymous Function
// A function without name called anonymous function. mostly used with function expression and  Immediately Invoked Function Expressions (IIFE).
let anonymous = function (a, b) {
  return a - b;
};
console.log(anonymous(10, 5));

// 5. Immediately Invoked Function Expressions (IIFE)
// Functions that are executed immediately after being defined.
(function () {
  console.log("IIFE executed!");
})();

//6. Callback Functions
// Functions passed as arguments to other functions.
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}
fetchData((data) => {
  console.log(data);
});

// 7. Default Parameters
// Set default values for function arguments.
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!