// JavaScript Scopes Explained

// 1. Global Scope
let globalVar = "I'm global";

function printGlobal() {
  console.log(globalVar); // Accessible
}

printGlobal();
console.log(globalVar); // Accessible globally

// --------------------------------------------------

// 2. Function Scope
function localScope() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible inside function
}

localScope();
// console.log(localVar); // Error: localVar is not defined

// --------------------------------------------------

// 3. Block Scope (let and const only)
{
  let blockLet = "I'm block scoped";
  const blockConst = "I'm also block scoped";
  console.log(blockLet);   // Accessible
  console.log(blockConst); // Accessible
}
// console.log(blockLet);   // Error
// console.log(blockConst); // Error

// var is NOT block-scoped
{
  var notBlockScoped = "I'm NOT block scoped";
}
console.log(notBlockScoped); // Accessible

// --------------------------------------------------

// 4. Lexical Scope
function outerFunction() {
  let outerVar = "I'm in outer";

  function innerFunction() {
    console.log(outerVar); // Accesses variable from outer function
  }

  innerFunction();
}

outerFunction();

// --------------------------------------------------

// 5. Scope Chain
let a = "global";

function outer() {
  let b = "outer";

  function inner() {
    let c = "inner";
    console.log(a); // from global
    console.log(b); // from outer
    console.log(c); // from inner
  }

  inner();
}

outer();

// Summary:
// - Global Scope: variables accessible everywhere
// - Function Scope: variables accessible only in function
// - Block Scope: variables with let/const accessible inside { }
// - Lexical Scope: inner function can use outer function's variables
// - Scope Chain: JS searches outer scopes if variable not found inside

// ***************** Test *****************

// global scope
let a = 300; // in global scope a is = 300;
if (true) {
  // block scope
  let a = 10;
  const b = 20;
  // var c = 30; // global variable access from whole file (avoid var use case)
  console.log("Inner: ", a);
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // index is limited to block scope.
}
console.log(a);
console.log(b);
// console.log(c);
