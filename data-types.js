/*
======================================
        Primitive Data Types
======================================
*/

// Number: Both integers and floating-point numbers
let num1 = 10;
let num2 = 10.02;
console.log(num1, num2);

// String: Text data in single or double quotes
let str1 = "Muhammad Hussain";
let str2 = "Muhammad Hussain";
console.log(str1, str2);

// Boolean: true or false
let bool1 = true;
let bool2 = false;
console.log(bool1, bool2);

// Null: Intentionally empty value
let null_val = null;
console.log(null_val);

// Undefined: Unassigned value
let Undefined_val;
console.log(Undefined_val);

// Symbol: Unique identifiers
let mySymbol = Symbol("This is my symbol.");
console.log(typeof mySymbol);
console.log(mySymbol.description);


// Bigint: Large integers with arbitrary precision
let bigNum1 = 9007199254740991n; // 1st Method
let bigNum2 = BigInt(9007199254740991); // 2nd Method
console.log(bigNum1, bigNum2);

/*
======================================
        Object Data Types
======================================
*/

let obj = {
    name: 'Hussain',
    father: "Ilyas",
    age: 19,
}
console.log(obj);

/*
======================================
        Array Data Types
======================================
*/

let arr1 = ["Hussain", "Suleman", "Zaryab"];
let arr2 = new Array("Hussain", 'Faizan', 'Shoaib');
console.log(arr1, arr2);

/*
======================================
  How to check data types (typeof)
======================================
*/

let num = 10;
let str = "Hussain";
let null_value = null;
let undefined_value;
let bool = true;
let sym = Symbol();
let big_num = 123456789123456789n;
let Obj = { name: 'Hussain', age: 19 };
let arr = [12, 34, 45, 56];
console.log(typeof num);
console.log(typeof str);
console.log(typeof null_value);
console.log(typeof undefined_value);
console.log(typeof bool);
console.log(typeof sym);
console.log(typeof big_num);
console.log(typeof Obj);
console.log(typeof arr);