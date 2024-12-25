// ============================
//      types of loops
// ============================

// 1. for Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. while Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 3. do...while Loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// 4. for...of Loop
const array = [10, 20, 30];
for (const num of array) {
  console.log(num);
}

// 5. for...in Loop
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// 6. Array.forEach()
const arr = [1, 2, 3];
arr.forEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});

// ================================
//      break; And continue;
// ================================

// 1. break Statement
// The break statement is used to exit a loop (or a switch statement) immediately, regardless of the loop's condition. It stops the execution of the loop entirely.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// 2. continue Statement
// The continue statement skips the current iteration of the loop and jumps to the next iteration. The loop itself continues to execute as normal.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
