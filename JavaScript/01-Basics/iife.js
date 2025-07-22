// =====================
// IIFE - Immediately Invoked Function Expression
// =====================

// 🔸 What is an IIFE?
// An IIFE is a JavaScript function that runs as soon as it is defined.
// Syntax:
// (function(){ /* code */ })();  <-- (function definition)(invocation)

// ---------------------
// ✅ Example 1: Basic IIFE
(function () {
  console.log("IIFE executed immediately!");
})();

// ---------------------
// ✅ Example 2: IIFE with a named function
(function greetUser() {
  console.log("Hello from a named IIFE!");
})();

// 🔸 Why IIFE is used?
// - To create a private scope
// - To avoid polluting the global namespace
// - Used in module pattern
// - Prevent variable leakage

// ---------------------
// ✅ Example 3: IIFE with variables
(function () {
  let message = "Inside IIFE";
  console.log(message);
})();

// console.log(message); ❌ ReferenceError: message is not defined

// ---------------------
// ✅ Example 4: IIFE with parameters
(function (name) {
  console.log(`Hello, ${name}`);
})("Suraj");

// ---------------------
// ✅ Example 5: IIFE with return value
const result = (function () {
  let x = 10;
  let y = 20;
  return x + y;
})();
console.log("Result:", result);

// ---------------------
// ✅ Example 6: Arrow function IIFE
(() => {
  console.log("Arrow function IIFE executed!");
})();

// ---------------------
// ✅ Example 7: IIFE as a block to isolate logic
const globalData = "Outside";

(function () {
  const globalData = "Inside IIFE";
  console.log(globalData); // Inside IIFE
})();
console.log(globalData); // Outside

// 🔸 Common Mistake:
// Omitting parentheses causes syntax errors
// ❌ function (){}();   --> Invalid
// ✅ (function (){})(); --> Correct

// ---------------------
// ✅ Real use case: Module pattern
const Counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.getCount());  // 2
console.log(Counter.decrement()); // 1

// Immediately Invoked Function Expressions (IIFE)

// to fix global scope polution problem we use iife, so removing that polution we use iffe
// (function defination) (execution)

// ********************* Test *********************

(function chai(){
    // named iife
    console.log(('DB CONNECTED'));
})(); // remember semicolon before writing second iife.

((name) => {
    // simple iife / un-named iffe
    console.log(`DB CONNECTED TWO ${name}`);
})("Suraj");