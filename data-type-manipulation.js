// ================================
//   Converting String to Number
// ================================

// Using Number()
// let str1 = "123";
let str1 = "abc";
let num1 = Number(str1);
console.log(num1);

// Using parseInt() or parseFloat()
// parseInt() for integers:
let str2 = "123";
let num2 = parseInt(str2, 10); // 10 is the base (decimal)
console.log(num2);
// parseFloat() for decimals:
let str3 = "123.45";
let num3 = parseFloat(str3);
console.log(num3);

// Using the Unary + Operator
let str4 = "123";
let num4 = +str4;
console.log(num4);

// ================================
//   Converting Number to String
// ================================

// Using String()
let num5 = 123;
let str5 = String(num5);
console.log(str5);

// Using .toString()
let num6 = 123;
let str6 = num6.toString();
console.log(str6);

// Using Template Literals
let num7 = 123;
let str7 = `${num7}`;
console.log(str7);

// ================================
//     Truthy and Falsy Value
// ================================

// -------- Falsy Values --------
// There are exactly 6 falsy values in JavaScript:
// 1: false (the Boolean false)
// 2: 0 (the number zero)
// 3: -0 (negative zero)
// 4: "" or '' (empty string)
// 5: null (no value)
// 6: undefined (a variable that hasn’t been assigned a value)
// 7: NaN (Not-a-Number)
if (0) {
  console.log("This won't run, because 0 is falsy.");
}
if ("") {
  console.log("This won't run, because an empty string is falsy.");
}

// -------- Truthy Values --------
// Examples of truthy values:
// 1: Any non-zero number (e.g., 42, -7, 3.14)
// 2: Any non-empty string (e.g., "hello", '0')
// 3: Objects (e.g., {}, [], even an empty array or object is truthy)
// 4: Functions
// 5: Dates (e.g., new Date())
// 6: Symbol (e.g., Symbol("foo")) etc.
let n = 42;
if (n) {
  console.log("This will run, because 42 is truthy.");
}
let s = "hello";
if (s) {
  console.log("This will run, because a non-empty string is truthy.");
}

// ----------- Checking for Truthy and Falsy -----------
// 1: Use the Boolean() function.
// 2: Use the double NOT operator (!!).
console.log(Boolean(0));
console.log(!!'');
console.log(Boolean(-10));
console.log(!!'Hussain');

// ================================
//      NaN (Not-a-Number)
// ================================
console.log(typeof NaN);

// -------- How NaN Occurs --------
// When trying to parse a non-numeric value with parseInt() or parseFloat()
console.log(parseInt("abc"));
console.log(parseInt("123"));
// Invalid arithmetic operations
console.log(0 / 0); 
console.log(Math.sqrt(-1));

// -------- Properties --------
// NaN is not equal to any value, including itself:
console.log(NaN === NaN);
console.log(!NaN === NaN);
console.log(!NaN === !NaN);

// -------- Checking for NaN --------
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("123"));
console.log(Number.isNaN("abc"));

// -------- Comparison with Number.isFinite() --------
console.log(Number.isFinite(10));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));