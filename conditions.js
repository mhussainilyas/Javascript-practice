// =============================
//      type of conditions
// =============================

// 1: if Statement
let age1 = 18;
if (age1 >= 18) {
  console.log("You are an adult.");
}

// 2: if...else Statement
let age2 = 16;
if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// 3: if...else if...else Statement
let age3 = 20;
if (age3 < 13) {
  console.log("You are a child.");
} else if (age3 < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

// 4: switch Statement
let color = "red";
switch (color) {
  case "red":
    console.log("You choose red.");
    break;
  case "blue":
    console.log("You choose blue.");
    break;
  default:
    console.log("Unknown color.");
}

// 5: Ternary Operator
let age = 20;
let message = age >= 18 ? "Adult" : "Not an adult";
console.log(message);

// 6: Nullish Coalescing Operator (??)
let myName = null;
let defaultName = myName ?? "Guest";
console.log(defaultName);
  