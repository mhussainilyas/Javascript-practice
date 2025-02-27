// ===============================
//         String Methods
// ===============================

let str = "A quick brown fox jumps over the lazy dog.";

// 1. toUpperCase()
// convert the whole string in capital letters
console.log(str.toUpperCase());

// 2. toLowerCase()
// convert the whole string in small letters
console.log(str.toLowerCase());

// 3. indexOf() 
// Finds the index of the first occurrence of a substring.
console.log(str.indexOf("a"));

// 4. lastIndexOf() 
// Finds the index of the last occurrence of a substring.
console.log(str.lastIndexOf("a"));

// 5. includes() 
// Checks if a substring is present.
console.log(str.includes("a"));

// 6. slice() 
// Extracts a part of a string.
// slice(start, end);
console.log(str.slice(8, 13));

// 7. replace()
// Replaces only a single(1st) part of substring with another.
console.log(str.replace('a', "H"));

// 8. replaceAll()
// Replaces all parts of substring with another.
console.log(str.replaceAll('a', "H"));
// replacing multiple space with ha single space.
let text = "This    is         extra     spaces.";
const normalizedText = text.replaceAll(/\s+/g, " ");
console.log(normalizedText);

// 9. split()
// Splits a string into an array based on a delimiter.
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split("o"));

// 10. trim()
// Removes whitespace from both ends of a string.
let str2 = "       Hussain Ilyas  ";
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

// 11. search()
// matches a string against a regular expression **, and returns the index (position) of the first match.
console.log(str.search(/a/)); // 34 (a)
console.log(str.search(/a/i)); // 0 (A)

// 12. match()
// matches a string against a regular expression **, and returns an array with the matches.
console.log(str.match(/a/)); // a
console.log(str.match(/a/i)); // A

// 13. startWith()
// returns true if a string starts with a specified string.
console.log(str.startsWith("a")); // false
console.log(str.startsWith("A")); // true

// 13. endsWith()
// returns true if a string ends with a specified string.
console.log(str.endsWith(".")); // true
console.log(str.endsWith("g")); // false

// 14. charAt()
// returns the character at a specified index (position) in a string.
console.log(str.charAt(str.indexOf('a')));
console.log(str.charAt(-1)); // return empty

// 14. charCodeAt()
// returns the Unicode of the character at a specified index (position) in a string.
console.log(str.charCodeAt(str.indexOf('a')));

// 15. at()
// returns an indexed character from a string.
console.log(str.at(str.indexOf('a')));
console.log(str.at(-1)); // return last character

// 16.String.fromCharCode()
// method converts Unicode values to characters.
console.log(String.fromCharCode(97)); // a
console.log(String.fromCharCode(122)); // z