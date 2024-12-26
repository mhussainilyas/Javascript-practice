// ============================
//       Array Methods
// ============================

const arr = [1, 2, 3];

// 1. push()
// Adds an element to the end of the array.
arr.push(4);
console.log(arr);

// 2. pop()
// Removes the last element.
arr.pop();
console.log(arr);

// 3. unshift()
// Adds an element to the beginning.
arr.unshift(0);
console.log(arr);

// 4. shift()
// Removes the first element.
arr.shift();
console.log(arr);

// 5. splice()
// Adds or removes elements at a specific index.
const fruits = ["apple", "banana", "cherry"];
// splice(index, count, item1, ....., itemX)
fruits.splice(1, 1, "orange"); // Removes "banana", adds "orange"
console.log(fruits);

// 6. slice()
// Extracts a portion of the array.
const numbers = [1, 2, 3, 4];
// slice(start, end)
const subset = numbers.slice(1, 3); // Extracts index 1 to 2
console.log(subset);

// 7. concat()
// Merges two or more arrays.
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined);

// 8. indexOf()
// Finds the first index of an element.
const items = ["a", "b", "c"];
console.log(items.indexOf("b")); 

// 9. lastIndexOf()
// returns the last index (position) of a specified value.
const fruit = ["Apple", "Orange", "Apple", "Mango"];
let index = fruit.lastIndexOf("Apple");
// let index = fruit.indexOf("Apple");
console.log(index);

// 10. includes()
// Checks if an element exists.
const item = ["a", "b", "c"];
console.log(item.includes("b")); // true
console.log(item.includes("h")); // false