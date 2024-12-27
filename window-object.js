// ===============================
//         Window Object
// ===============================

console.log(window);

// -------- Global Object --------
//The window object serves as the global object in client-side JavaScript.
// All global variables, functions, and objects automatically become properties of the window object.

var global_variable = "Hello World!"; // Hello World!
// let global_variable = "Hello World!"; // undefined
// const global_variable = "Hello World!"; // undefined
console.log(window.global_variable);
// var global_var = "Hello World!"; // Hello World!
// let global_var = "Hello World!"; // Hello World!
const global_var = "Hello World!"; // Hello World!
console.log(global_var);

function greet() {
    console.log("Muhammad Hussain");
}
window.greet();
greet();

// ==============================================
//          Core Properties and Methods
// ==============================================

// -------- Document-related properties --------
console.log(window.document); // All (General)
console.log(window.document.head);
console.log(window.document.body);

// -------- Screen Information --------
console.log(window.screen); // All (General)
console.log(window.screen.height);
console.log(window.screen.width);

// -------- Location Object --------
console.log(window.location); // All (General)
console.log(window.location.href);
console.log(window.location.origin);
// window.location.href = "https://www.google.com"; // redirect to new URL
// window.location.reload();
// window.location.replace("https://www.google.com");
// window.location.assign("https://www.google.com");

// -------- Navigator Object --------
console.log(window.navigator); // All (General)
console.log(window.navigator.userAgent); 
console.log(window.navigator.clipboard); 

// -------- History Object --------
console.log(window.history); // All (General)
// window.history.back(); // Go to the previous page
// window.history.forward(); // Go to the next page
// window.history.go(n); // Go to the previous/next page

// -------- Dialog Boxes --------
// window.alert("Hussain");
// window.confirm("You want to delete this message?");
// window.prompt("How are you?", "Fine");
window.console.log("Hello!!!");

// -------- Window Size and Position --------
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.innerWidth);
console.log(window.outerWidth);
console.log(window.scrollX);
console.log(window.scrollY);

// -------- Open and Close Windows --------
// 1. window.open(url, target, features): Opens a new browser window or tab.
// window.open("https://www.google.com", "_blank");
// const newWindow = window.open("https://www.google.com", "_blank");
// newWindow.close(); // Close the opened window

// -------- Focus and Blur --------
window.focus(); //Brings the window to the front.
window.blur(); //Removes focus from the window.