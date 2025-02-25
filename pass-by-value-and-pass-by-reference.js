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
//     TODO NOTES :=>
// ============================
// Independent objects (even if they look alike) are not equal
// two onjects are equal only if they refers to the same object.

// let obj1 = { name: "Hussain" };
// let obj2 = { name: "Hussain" };
// let obj3 = obj1;
// const isEqual = (obj1 == obj2) ? true : false;
// const isEqual = (obj1 == obj3) ? true : false;
// console.log(isEqual);