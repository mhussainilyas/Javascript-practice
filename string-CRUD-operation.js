// ==================================
//      string CRUD Operation
// ==================================

// --------- Create ---------
let str = "Muhammad Hussain"; // string literal
let str1 = new String("Hussain Ilyas"); // string constructor
let str2 = `Hello ${str}`; // template string
let str3 = str + str1; // string concatenation

// --------- Read(Accessing) ---------
// Getting Individual Element
console.log(str[0]);
console.log(str[12]);
console.log(str.charAt(5));
// Getting Length
console.log(str.length);
// Find Substring
console.log(str.indexOf("a")); // 03
console.log(str.lastIndexOf("a")); // 13
console.log(str.includes("Huss")); // true
console.log(str.startsWith("Muha")); // true 
console.log(str.endsWith("ain")); // true 
// Extracting Substring
console.log(str.substring(3));
console.log(str.substring(3, 8));
console.log(str.slice(4));
console.log(str.slice(4, 8));

// --------- Update(Modifying) ---------
// Convert Case
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// Replace Content
console.log(str.replace("Hussain", "Suleman"));
console.log(str.replaceAll("a", "A"));
// Remove White Spaces
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
// split & join
console.log(str.split("")); // string to array
console.log(["Muhammad", "Hussain"].join(" ")); // array to atring
// pad string
console.log("5".padStart(2, "0")); // 05
console.log("5".padEnd(2, "0")); // 50

// --------- Delete(Removing) ---------
// removing a part of string
console.log(str.slice(0, 8));
// removing specific character
console.log(str.replace("a", ""));
console.log(str.replaceAll("a", ""));
// removing complete string
str = "";
// OR
str = String();
console.log(str);