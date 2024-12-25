// ===========================
//         Expressions
// ===========================

// ---------- Types of Expressions ----------

// 1: Literal Expressions: Represent fixed values.
console.log(42); // Number literal
console.log("Hello World"); // String literal
console.log(true); // Boolean literal
console.log(null); // Null literal

// 2: Variable Expressions: Access or use variable values.
let x = 5;
console.log(x); // Evaluates to 5

// 3: Arithmetic Expressions: Perform mathematical operations.
console.log(10 + 5);
console.log(10 * 5);

// 4: String Expressions: Concatenate or manipulate strings.
console.log('Muhammad' + " " + 'Hussain');

// 5: Logical Expressions: Evaluate to true or false using logical operators.
console.log(true && false);
console.log(10 > 5 || 5 < 3);
console.log(!(10 > 5));

// 6: Function Call Expressions: Invoke a function and return its value.
console.log(Math.max(10, 20, 30, 40, 50));

// 7: Conditional (Ternary) Expressions: Shorthand for an if...else statement.
let age = 18;
let val = age >= 18 ? "Adult" : "Minor";
console.log(val);

// ===========================
//         Operations
// ===========================

// ----------- Types of Operations and Operators -----------

// 1: Arithmetic Operators: Perform mathematical calculations.
let sum = 10 + 5; // Addition (+)
console.log(sum);
let difference = 10 - 5; // Subtraction (-)
console.log(difference);
let product = 10 * 5; // Multiplication (*)
console.log(product);
let quotient = 10 / 2; // Division (/)
console.log(quotient);
let remainder = 10 % 3; // Modulus (%)
console.log(remainder);
let exponent = 2 ** 3; // Exponentiation (**)
console.log(exponent);

// 2: Assignment Operators: Assign values to variables.
let y = 10;  // Assignment (=)
console.log(y);
y += 5;      // Addition assignment (x = x + 5)
console.log(y);
y -= 2;      // Subtraction assignment (x = x - 2)
console.log(y);
y *= 3;      // Multiplication assignment (x = x * 3)
console.log(y);
y /= 2;      // Division assignment (x = x / 2)
console.log(y);
y %= 4;      // Modulus assignment (x = x % 4)
console.log(y);

// 3: Comparison Operators: Compare values and return a boolean.
console.log(10 == "10");  // true (Equality, type coercion allowed)
console.log(10 != "10");  // true (Equality, type coercion allowed)
console.log(10 === "10"); // false (Strict equality, no type coercion)
console.log(10 !== "10"); // false (Strict equality, no type coercion)
console.log(5 > 3);       // true (Greater than)
console.log(5 < 3);       // true (Greater than)
console.log(5 <= 5);      // true (Less than or equal to)
console.log(5 >= 5);      // true (Less than or equal to)

// 4: Logical Operators: Combine or invert boolean values.
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)

// 5: Unary Operators: Work on a single operand.
let a = 5;
console.log(++a);     // Increment (x becomes 6)
console.log(--a);     // Decrement (x becomes 5)
console.log(-a);      // Unary negation (-5)
console.log(+a);      // Unary Positive (+5)
console.log(+true);   // Converts to a number (1)
console.log(+false);   // Converts to a number (0)

// 6: Nullish Coalescing Operator (??): Returns the right-hand value if the left-hand value is null or undefined.
let myName = null;
// let myName = 10;
let defaultName = myName ?? "Guest";
console.log(defaultName);

// ===========================
//        .toFixed()
// ===========================

// .toFixed() rounds the number to the nearest value based on the specified digits.
// The return type is always a string, so if you need it back as a number, you can convert it using parseFloat() or Number()
let num = 3.14159;
let formatted = num.toFixed(2); // "3.14" (string)
console.log(formatted);
let asNumber = parseFloat(formatted); // 3.14 (number)
console.log(asNumber);