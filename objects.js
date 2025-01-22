// Creating objects
// let obj = {
//   "std name": "Hussain",
//   father: "Ilyas",
//   age: 19,
// };

// Accessing properties
// console.log(obj);
// console.log(obj.father); // dot notation
// console.log(obj["std name"]); // array notation

// Modifying properties
// obj["std name"] = "Muhammad Hussain";
// obj.age = 20;
// console.log(obj);

// Adding properties
// obj.job = "Web Development";
// obj["hobby"] = "Reading Books";
// console.log(obj);

// Deleting properties
// delete obj["father"];
// delete obj.father;

// Methods in objects
// let calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   }, // shortcut
// };
// console.log(calculator.add(10, 20));
// console.log(calculator.multiply(10, 20));

// ======================
//     Object methods
// ======================

// Array of properties
// let keys = Object.keys(obj);
// console.log(keys);

// Array of values
// let values = Object.values(obj);
// console.log(values);

// Array of [key, value] pairs
// let entries = Object.entries(obj);
// console.log(entries);

// Make immutable
// Object.freeze(obj);
// obj.age = 20;
// console.log(obj);

// returns a boolean value
// let hasproperty = obj.hasOwnProperty("name"); //false
// let hasproperty = obj.hasOwnProperty("std name"); // true
// console.log(hasproperty);

// create a copy of object doesn't effect the original object
// let target = { a: 1, b: 2 };
// let source = { b: 3, c: 4 }; // source will be overwrite the target (b: 3)
// let mergedObject = Object.assign({}, target, source);
// console.log(target);
// console.log(source);
// console.log(mergedObject);

// ========================================
//   We can add dynamic keys in an object
// ========================================

// let idType = "schoolID";
// let idType = "collegeID";

// let myObj = {
//   [idType]: "ICS595", // Dynamic key based on idType
//   stdName: "Hussain",
//   age: 19,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey! my ${idType} is ${myObj.idType} and my name is ${myObj["stdName"]}`
//     );
//     console.log(
//       `Hey! my ${idType} is ${myObj[idType]} and my name is ${myObj["stdName"]}`
//     );
//   },
// };
// myObj.greet();

// ============================
//      Passing by value
// ============================
// When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

// let a = 10;
// const modifyingValue = (x) => (x = 20);
// console.log(modifyingValue(a));
// console.log(a);

// ============================
//     Passing by reference
// ============================
// When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

// let newObj = { id: 1, name: "Hussain" };
// let copyObj = newObj;
// copyObj.name = "Muhammad Hussain";
// console.log(newObj);
// console.log(copyObj);
// console.log("original " + copyObj); // Error: [object object]
// console.log("original", copyObj); // fixing error

// to avoid this behavior and to create a copy of object we use:
// 1) Object.assign()
// 2) spread operator (...)

// let newObj1 = { id: 2, name: "Suleman" };
//! 1st Method
// let copyObj1 = Object.assign({}, newObj1);
//! 2nd Method
// let assObj = {};
// let copyObj1= Object.assign(assObj, newObj1);
//! 3rd Method
// let copyObj1 = {...newObj1};
// copyObj1.name = "Suleman Amjad";
// console.log(newObj1);
// console.log(copyObj1);

// ============================
//     Passing by reference
// ============================
// Independent objects (even if they look alike) are not equal
// two onjects are equal only if they refers to the same object.

// let obj1 = { name: "Hussain" };
// let obj2 = { name: "Hussain" };
// let obj3 = obj1;
// const isEqual = (obj1 == obj2) ? true : false;
// const isEqual = (obj1 == obj3) ? true : false;
// console.log(isEqual);

// ====================================
//  JSON (Java Script Object Notation)
// ====================================
// JSON is a data interchange format derived from javascript objects. Objects can be easily converted to JSON and vice versa.

// let std = {
//     id: "01",
//     name: "Hussain",
//     age: 19,
//     department: "BSCS"
// };
// let jsonData = JSON.stringify(std);
// let parseData = JSON.parse(jsonData);
// console.log(jsonData);
// console.log(parseData);

// ==============================
//      Practice Examples
// ==============================

//! Example 01
// let std = {
//    name: "Hussain",
//    age: 19,
//    marks: {
//       Math: 88,
//       english: 82,
//       urdu: 75
//    }
// }
// const addSubjectMarks = (obj, subject, marks) => {
//     obj.marks[subject] = marks;
// }
// addSubjectMarks(std, "Computer", 71);
// console.log(std);

//! Example 02
// let obj1 = { name: "Hussain", age: 19, city: "lahore" };
// let obj2 = { name: "Hussain", age: 19, city: "lahore" };
// let obj3 = { name: "shaaib", age: 19, city: "Faisalabad" };
//? 1st method
// const isEqual = (obj1, obj2) => {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// };
//? 2nd method
// const isEqual = (obj1, obj2) => {
//   let o1 = Object.keys(obj1);
//   let o2 = Object.keys(obj2);
//   if (o1.length !== o2.length) {
//     return false;
//   }
//   return o1.every((key) => {
//     return obj1[key] === obj2[key];
//   });
// };
//? 3rd method
// const isEqual = (obj1, obj2) => {
//   let o1 = Object.keys(obj1);
//   let o2 = Object.keys(obj2);
//   if (o1.length !== o2.length) {
//     return false;
//   }
//   for (let key of o1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isEqual(obj1, obj3)); // false
// console.log(isEqual(obj1, obj2)); // true

//! Example 03
let inputArray = [
    { id: 1, name: "Hussain" },
    { id: 2, name: "Suleman" },
    { id: 3, name: "Zaryab" },
    { id: 4, name: "Faizan" }
];
//? 1st method
const arrayToObj = (arr) => {
    let obj = {};
    for(let key of arr) {
        obj[key.id] = key;
    }
    return obj;
}
//? 2nd method 
// const arrayToObj = (arr) => {
//     let result = arr.reduce((obj, item) => ({...obj, [item.id]: item}), {});
//     return result;
// };
console.log(arrayToObj(inputArray));
