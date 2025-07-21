// Arrow Functions in JavaScript 

// ✅ What are Arrow Functions?
// Arrow functions are a concise way to write function expressions in JavaScript.
// They were introduced in ES6 (2015) and have a shorter syntax compared to traditional function expressions.

// Syntax:
// Traditional Function
function add(a, b) {
    return a + b;
}

// Arrow Function Equivalent
const addArrow = (a, b) => a + b;

console.log("Traditional:", add(2, 3));        // 5
console.log("Arrow:", addArrow(2, 3));          // 5

// ✅ Single parameter can omit parentheses
const square = x => x * x;
console.log("Square:", square(4));              // 16

// ✅ Multiple parameters need parentheses
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(3, 4));        // 12

// ✅ If using multiple statements, you need curly braces and return keyword
const divide = (a, b) => {
    console.log("Dividing...");
    return a / b;
};
console.log("Divide:", divide(10, 2));           // 5

// ✅ Arrow functions do NOT have their own 'this'
const user = {
    name: "Suraj",
    regularFunction: function() {
        console.log("Regular Function this:", this.name);  // 'Suraj'
    },
    arrowFunction: () => {
        console.log("Arrow Function this:", this.name);     // 'undefined' (or global object)
    }
};

user.regularFunction();  // Suraj
user.arrowFunction();    // undefined

// Why? Because arrow functions don't bind their own 'this'. They inherit it from the parent scope.

// ✅ Use cases of arrow functions
// 1. Great for short callbacks and array operations:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);               // [2, 4, 6, 8]

// 2. When you want to preserve 'this' in callbacks:
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log("Timer:", this.seconds);
    }, 1000);
}

// new Timer(); // Uncomment to test

// ⚠️ Things to Remember:
// - Arrow functions can't be used as constructors (i.e., can't use 'new' with them).
// - No 'arguments' object inside arrow functions.
// - Not suitable for defining object methods that need 'this'.

// ✅ Summary:
// - Arrow functions provide a cleaner, shorter syntax.
// - They are best for simple operations and callbacks.
// - Be cautious with 'this' binding, constructors, and advanced scenarios.

// ************************ Test ************************

const user = {
    username: "Suraj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this is used against currrent context
        console.log(this); // talk about current value of function
        
    }

}

// user.welcomeMessage();
// user.username = "Hitesh";
// user.welcomeMessage();

console.log(this); // in node this is empty but in browser this is not empty b/c there alot of things

function chai(){
    let username = "Suraj";
    console.log(this.username); // this not work inside function 
}

chai();

// arrow function
const chai = () => {
    let username = "Suraj Kumar";
    console.log(this.username);
}
chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2);
const addTwo = (num1, num2) =>  ({username: "Suraj Kumar"});

console.log(addTwo(3,4));

const myArray  = [2, 5, 7, 8, 9];
myArray.forEach()