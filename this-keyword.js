// =========================
//     "this" keyword
// =========================
// The "this" keyword refers to the diferent objects depending on how it is used:
// 1) In an object method, "this" refers to the object. 
// 2) Alone, "this" refers to the global object. 
// 3) In a function, "this" refers to the global object. 
// 4) In a function, in strict mode, "this" is undefined. 
// 5) In an event, "this" refers to the element that recieved the event. 
// 6) methods like call(), apply(), and bind() can refer "this" to any Object.
// 7) In an object method(fat arrow function), "this" refers to the global Object.

// ====================================================
//  In a function, "this" refers to the global object.
// ====================================================

// function callMe() {
//     console.log(this);
// }
// callMe(); // window Object (global)

// ============================================
//  Alone, "this" refers to the global object. 
// ============================================

// let result = this;
// console.log(result);

// =====================================================
//  In a function, in strict mode, "this" is undefined.
// =====================================================

// "use strict"
// x = 10;
// console.log(x); // ❌ Error
// function callMe() {
//     return this;
// };
// console.log(callMe()); // undefined

// ===================================================
//  In an object method, "this" refers to the object.
// ===================================================

//! Example 01
// let obj = {
//   id: 1,
//   name: "Hussain",
//   age: 19,
//   greet: function() {
//     return this;
//   }
// }
// console.log(obj.greet());

//! Example 02
// let obj = {
//     id: 1,
//     name: "Hussain",
//     age: 19,
//     greet: function () {
//         return `Hey! I am ${this.name} and I am ${this.age} years old,`;
//     }
// }
// console.log(obj.greet());

// ==============================================================================
//  In an object method(fat arrow function), "this" refers to the global Object.
// ==============================================================================

let obj = {
  id: 1,
  name: "Hussain",
  age: 19,
  greet: () => {
    return this;
  }
}
console.log(obj.greet());