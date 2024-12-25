// Creating objects
let obj = {
    name: 'Hussain',
    father: "Ilyas",
    age: 19,
}

// Accessing properties
console.log(obj);
console.log(obj.name); // dot notation
console.log(obj["age"]); // array notation

// Modifying
obj.name = "Muhammad Hussain";
delete obj.father;
console.log(obj);

// Methods in objects
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    } // shortcut
}
console.log(calculator.add(10, 20));
console.log(calculator.multiply(10, 20));

// Object methods
console.log(Object.keys(obj)); // Array of keys
console.log(Object.values(obj)); // Array of values
console.log(Object.entries(obj)); // Array of [key, value] pairs
console.log(Object.freeze(obj)); // Make immutable