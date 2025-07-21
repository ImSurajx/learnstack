// JavaScript Functions:

// 1. Function Declaration
function greet() {
  console.log("Hello, welcome to JS functions!");
}
greet(); // Output: Hello, welcome to JS functions!

// 2. Function Parameters & Arguments
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8

// 3. Default Parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(4)); // Output: 8 (uses default value of b)

// 4. Function Expressions
const subtract = function (x, y) {
  return x - y;
};
console.log(subtract(10, 3)); // Output: 7

// 5. Arrow Functions
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // Output: 5

// 6. Anonymous Functions
setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

// 7. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed immediately!");
})();

// 8. Returning Values from Function
function square(num) {
  return num * num;
}
let result = square(6); // 36
console.log("Square is:", result);

// 9. Function Scope
let outer = "I am outer";
function testScope() {
  let inner = "I am inner";
  console.log(outer); // accessible
  // console.log(inner); // Error if called outside this function
}
testScope();

// 10. Hoisting (Only works with function declarations)
sayHi(); // Works due to hoisting
function sayHi() {
  console.log("Hi from hoisted function!");
}

// 11. Rest Parameters
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// 12. Callback Functions
function processUserInput(callback) {
  let name = "Suraj";
  callback(name);
}
processUserInput(function (name) {
  console.log("Hello " + name);
});

// 13. Arrow Function Differences (No 'this' binding)
const obj = {
  name: "Suraj",
  regularFunc: function () {
    console.log("Regular:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // Undefined in arrow
  },
};
obj.regularFunc(); // Suraj
obj.arrowFunc();   // Undefined

// 14. Function Constructor (Not recommended)
const myFunc = new Function("a", "b", "return a * b");
console.log(myFunc(3, 4)); // Output: 12

// 15. Recursion (Function calling itself)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 16. Nested Functions
function outerFunction() {
  let outerVar = "I'm outside!";
  function innerFunction() {
    console.log(outerVar); // Accesses outer scope
  }
  innerFunction();
}
outerFunction();


// ************************** Test Case ***************************

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

sayMyName();
function addTwoNum(num1, num2){
    return num1 + num2;
}

// console.log(addTwoNum(5,4));

function loginUserMessage(username = "xyz"){
    if(username === undefined){
        return console.log("username is not defined");
    } else {
     return `${username}, just logged in`;
    }
}

console.log(loginUserMessage("Suraj"));

// passing multiple values
function calculateCartPrice(val1, val2, ...num){ // rest opearator
    return num; // 500 (val1, val2, ..num) or if (...num) [200, 400, 500]
}

// passing object into function
const user = {
    username: "Suraj Kumar",
    prices: "199"
}

function handleObj(anyObj){
    return console.log(`Username is ${anyObj.username} & price is ${anyObj.prices}`);
}

console.log(calculateCartPrice(200, 400, 500));
handleObj(user);
handleObj({
    username: "Sam",
    price: "$399"
})

// passing array into function
const myArray = [200, 300, 400, 500, 500];

function returnSecondValue(getArray){
    return (getArray[1]);
}

// returnSecondValue(myArray);
console.log(returnSecondValue([200, 300, 400, 500, 500]));
