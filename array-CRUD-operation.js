// ============================
//     Array CRUD Operations
// ============================

let arr = [];
console.log(arr);

// ------- Create - Adding element -------
arr.push("Hussain"); // add at the end
arr.push("Suleman", "Zaryab"); // add at the end
arr.unshift("Hamid"); // add at the beginning
console.log(arr);

// ------- Read - Accessing element -------
let firstElement = arr[0];
let lastElement = arr[arr.length - 1];
let midElement = arr[2];
console.log(`Frist: ${firstElement}, Last: ${lastElement}, Mid: ${midElement}`);

// ------- Update - Modifying element -------
arr[1] = "Shoaib";
arr.splice(2, 1, "Faizan");
console.log(arr);

// ------- Delete - Removing element -------
arr.pop(); // remove from last
arr.shift(); // remove from start
arr.splice(1, 1); // remove any specified
arr.length = 0; // remove all element
arr = []; // remove all element
console.log(arr);

// ============================
//       Array Searching
// ============================

let fruits = ["Apple", "Banana", "Orange", "Grapse", "Mango", "Banana"];

// --------- Using .includes() --------
let hasElement = fruits.includes("Mango"); //true
// let hasElement = fruits.includes("mango"); // false
console.log(hasElement);

// --------- Using .indexOf() & .lastIndexOf() --------
// let bananaIndex = fruits.indexOf("Banana");
let bananaIndex = fruits.lastIndexOf("Banana");
console.log(bananaIndex);

// --------- Using .find() --------
let findOrange = fruits.find((items, index, arr) => {
    return items === "Orange";
});
console.log(findOrange);