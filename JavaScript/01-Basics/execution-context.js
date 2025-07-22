// ============================================
//  JavaScript Code Execution - In Depth Notes
// ============================================

// 🔰 JavaScript is a single-threaded, synchronous, and non-blocking language
// It uses an "Execution Context" to execute any code

// =========================================
// 🔸 What is an Execution Context (EC)?
// =========================================
// It's an environment where JS code is evaluated and executed.
// Every time JS runs a script/function, it creates a new Execution Context.

// Types of Execution Contexts:
// 1️⃣ Global Execution Context (GEC)
// 2️⃣ Function Execution Context (FEC)
// 3️⃣ Eval Execution Context (rare, unsafe, and discouraged)

// =========================================
// 1️⃣ Global Execution Context (GEC)
// =========================================
// - Created when the JS file starts executing
// - It does 2 things:
//   a) Creates a global `this` (in browsers, it's the `window` object)
//   b) Allocates memory for all global variables & functions

// Example:
var x = 10;
function sayHello() {
  console.log("Hello Suraj!");
}

// At this point, the GEC is created
// Memory Phase: allocates memory to x and sayHello
// Execution Phase: assigns value 10 to x, function definition to sayHello

sayHello(); // creates a Function Execution Context (FEC)

// =========================================
// 2️⃣ Function Execution Context (FEC)
// =========================================
// When a function is invoked, a new FEC is created.
// It has its own memory and execution phase, similar to GEC.

function add(a, b) {
  var total = a + b;
  return total;
}

let result = add(5, 3); // Creates a new FEC for add()

// ➕ Call Stack:
// [GEC] -> [FEC for add()]
// After the function finishes, FEC is popped off the stack

// =========================================
// 3️⃣ Eval Execution Context (rare)
// =========================================
// When `eval()` is used to execute a string as JS code

eval("var num = 42;");
console.log(num); // 42

// This also creates an execution context but it's not recommended due to security/performance

// =========================================
// 🔁 2 Phases in Every Execution Context:
// =========================================

// ✅ Phase 1: Memory Creation Phase (aka Creation Phase)
// - Memory is allocated to variables and functions
// - Variables are initialized with `undefined`
// - Functions are stored entirely

// ✅ Phase 2: Code Execution Phase
// - Code is executed line-by-line
// - Variables are assigned actual values
// - Functions are invoked when encountered

// Example to explain both phases:

function example() {
  console.log(x); // undefined (due to hoisting)
  var x = 20;
  console.log(x); // 20
}
example();

// 🔸 During memory phase:
// var x is hoisted and set to undefined
// 🔸 During execution:
// console.log(x) → undefined
// x is set to 20
// console.log(x) → 20

// =========================================
// 🔍 Call Stack Summary
// =========================================
// JS uses a Call Stack to manage execution contexts

function one() {
  console.log("Function One");
  two();
}

function two() {
  console.log("Function Two");
}

one();

// Stack trace:
// [GEC]
// → [FEC: one()]
// → [FEC: two()]
// ← two() completes, popped
// ← one() completes, popped
// ← GEC completes

// =========================================
// 🔚 END OF NOTES
// =========================================

// **************************** Test ****************************
/*
{} -> Global Execution Context 
      Function Execution Context
      Eval Execution Context

      Memory Creation Phase.
      Execution Phase.
*/
// 1: Global Execution Inside this

// 2: Memory Phase (first cycle)
    // val1 = undefined, val2 = undefined;
    // addNum = defination
    // result1 = undefined, result2 = undefined

// 3: Execution Phase
    // val1 = 10, val2 = 5
    // addNum {new execution context created each time whenever we call a function & once function work is done it will be deleted.} 
    // { new variable enviorment  + execution thread}

    // 3.1: Memory Phase
        // val1 = undefined, val2 = undefined, total = undefined.
    // 3.2: Execution Phase
        // num1 = 10, num2 = 5, total = 15;
    // total: will return to gloabl execution context;
    // result1: 15
    // result2: 12, same process from 3.1 to 3.2

let val1 = 10; 
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);