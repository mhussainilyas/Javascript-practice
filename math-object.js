// ========================
//        Math object
// ========================

// ------- Constants -------
// Provides useful mathematical constants.

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

// ------- Methods -------
// Includes functions for performing calculations

// ========================
//     Rounding Methods
// ========================

// 1. Math.round(x)
// Rounds to the nearest integer.
console.log(Math.round(4.5));

// 2. Math.ceil(x)
// Rounds up to the next integer.
console.log(Math.ceil(4.2));

// 3. Math.floor(x)
// Rounds down to the nearest integer.
console.log(Math.floor(4.8));

// 4. Math.trunc(x)
// Removes the fractional part (truncates the number).
console.log(Math.trunc(4.9));

// ========================
//   Trigonometric Methods
// ========================

// 1. Math.sin(x)
// Returns the sine of x (in radians).
console.log(Math.sin(Math.PI / 2));

// 2. Math.cos(x)
// Returns the cosine of x (in radians).
console.log(Math.cos(0));

// 3. Math.tan(x)
// Returns the tangent of x (in radians).
console.log(Math.tan(Math.PI / 4));

// =====================================
//  Logarithmic and Exponential Methods
// =====================================

// 1. Math.log(x)
// Returns the natural logarithm (base e) of x.
console.log(Math.log(Math.E));

// 2. Math.log10(x)
// Returns the base-10 logarithm of x.
console.log(Math.log10(Math.E));

// 3. Math.exp(x)
// Returns e raised to the power x.
console.log(Math.exp(3));

// ========================
//   Other Useful Methods
// ========================

// 1. Math.sign(x)
// Returns 1, -1, or 0 depending on the sign of x.
console.log(Math.sign(3));

// 2. Math.min(a, b, c, ...)
// Returns the minimum value.
console.log(Math.min(3, 12, 98, 32, 2, 64, 4));

// 3. Math.max(a, b, c, ...)
// Returns the maximum value.
console.log(Math.max(3, 12, 98, 32, 2, 64, 4));

// ========================
//      Math.random()
// ========================

// 1. Generate a Random Number
console.log(Math.random());

// 2. Random Number between 0 and 10
console.log(Math.random() * 10);

// 3. Random Number between 0 and 100
console.log(Math.random() * 100);

// 4. Random Number in a range.
let min = 5;
let max = 10;
let random_number = Math.random() * (max - min) + min;
console.log(random_number);

// 5. 4. Simulate a Dice Roll (1-6): 
let dice_roll = Math.round(Math.random() * (6 - 1) + 1);
console.log(dice_roll);