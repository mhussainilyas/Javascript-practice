// =========================
//         Arrays
// =========================

// -------- Creating an Array --------

// 1. Using square brackets
const fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// 2. Using the Array constructor
const numbers = new Array(1, 2, 3, 4);
console.log(numbers);

// -------- Accessing Elements --------
const colors1 = ["red", "green", "blue"];
console.log(colors1[0]);
console.log(colors1[2]);

// -------- Modufying Elements --------
const colors2 = ["red", "green", "blue"];
console.log(colors2);
colors2[1] = "purple";
console.log(colors2);

// -------- Length of an array (.length) --------
const colors3 = ["red", "green", "blue"];
console.log(colors3.length);

// ==========================
//  Multi-dimensional Arrays
// ==========================
// You can create arrays within arrays to represent grids or tables.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]); // 6