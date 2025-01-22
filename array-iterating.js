// ========================================
//         Iterating Over An Array
// ========================================

// 1. Using a for() loop
// The traditional for loop allows you to manually control the index and loop through each element.
const numbers1 = [10, 20, 30, 40];
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

// 2. Using for...of() loop
// The for...of loop is a simpler way to iterate through the array without using an index.
const numbers2 = [10, 20, 30, 40];
for (const number of numbers2) {
  console.log(number);
}

// 3. Using forEach() method
// The forEach() method executes a provided function once for each array element.
const numbers3 = [10, 20, 30, 40];
numbers3.forEach((number) => {
  console.log(number * 2);
});

// 4. Using map() method
// The map() method creates a new array by applying a function to each element of the original array.
const numbers4 = [10, 20, 30, 40];
const doubled = numbers4.map((num, index, arr) => {
  return num;
//   return index;
//   return arr;
});
console.log(doubled);
numbers4.map((item, index, arr) => {
    console.log(index + ": " + item);
})

// 5. Using filter() method
// The filter() method creates a new array with all elements that pass a test implemented by the provided function.
const numbers5 = [10, 20, 30, 40, 50];
const filtered = numbers5.filter((number, index, arr) => {
    return number > 30;
});
console.log(filtered); // [40, 50]

// 6. Using reduce() method
// The reduce() method applies a function to accumulate a result from all array elements.
const numbers6 = [100, 20, 30, 40];
const sum = numbers6.reduce((acc, number, index, arr) => {
    return acc + number;
}, 0);
console.log(sum); // 100

// 7. Using find() method
// returns the value of the first element that passes a test.
const ages = [4, 12, 16, 20];
let result = ages.find((age, index, arr) => {
    return age <= 18;
});
console.log(result); // 4

// 8. Using findLast() method
// returns the value of the last element that passes a test
const age = [4, 12, 16, 20];
let results = age.findLast((age, index, arr) => {
    return age <= 18;
});
console.log(results); // 16

// 9. Using findIndex() method
// returns the index (position) of the first element that passes a test.
const ages1 = [4, 12, 16, 20];
let result1 = ages1.findIndex((age, index, arr) => {
    return age <= 18;
});
console.log(result1);

// 10. Using findLastIndex() method
// returns the index (position) of the last element that passes a test.
const ages2 = [4, 12, 16, 20];
let result2 = ages2.findLastIndex((age, index, arr) => {
    return age <= 18;
});
console.log(result2);

// 11.Using every() method
// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const array1 = [1, 30, 39, 29, 10, 13];
let bool = array1.every((key) => {
    return key < 10;
});
console.log(bool);

// ===================================
//         Sorting an array
// ===================================
// The sort() method in JavaScript is used to sort the elements of an array in place. By default, it sorts the array elements as strings in ascending order

// Basic Example: Sorting Strings
const fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits); 

// Basic Example: Sorting Numbers
const numbers = [10, 2, 5, 1];
numbers.sort();
console.log(numbers); // ['1', '10', '2', '5']

// ----------- Custom Compare Function for Numbers ------------
const num = [10, 2, 5, 1];

// Ascending order
num.sort((a, b) => {
    return a - b;
});
console.log(num); // [1, 2, 5, 10]

// Descending order
num.sort((a, b) => {
    return b - a;
});
console.log(num); // [10, 5, 2, 1]

// The compareFunction(a, b):
// 1. Returns a negative number if a < b (sort a before b).
// 2. Returns a positive number if a > b (sort b before a).
// 3. Returns 0 if a === b (leave them unchanged).

// Sorting with reverse()
// You can chain reverse() with sort() to reverse the order after sorting.
const fru = ['banana', 'apple', 'cherry', 'date'];
fru.sort().reverse();
console.log(fru);

// ===================================
//        new Set() Constructor
// ===================================
// The Set() constructor is used to create a new Set object in JavaScript. A Set is a collection of unique values, meaning it will automatically remove duplicates and store values in insertion order.

let myArr = [1, 2, 2, 3, 3, 4];
console.log(myArr);
let anotherSet = new Set(myArr);
console.log(anotherSet); // Output: Set { 1, 2, 3, 4 }
console.log(...anotherSet); // Output: 1, 2, 3, 4 
