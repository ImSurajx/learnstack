// Q1. Predict
console.log("10" + 1);
console.log("10" - 1);
console.log(true + false);
console.log(!!"Sheryians");

// Q2. Convert using unary
let str = "42";
let num = +str;
console.log(num); // 42

// Q3.  Use Ternary
let age = 17;
let msg = age >= 18 ? "Adult" : "Minor"; // Minor

// Q4. Build Calculator
// Using switch + arithmetic operators
function calc(a, b, operator) {
    if (operator === '+') {
        return console.log(a + b);
    } else if (operator === '-') {
        return console.log(a - b);
    } else if (operator === '*') {
        return console.log(a * b);
    } else if (operator === '/') {
        return console.log(a / b);
    }
}
calc(10, 20, '/');

// Q5. Print "Excellent", "Good", "Average", or "Fail" based on ranges
let marks = 82;
marks >= 90 ? console.log("Excellent") : marks >= 70 ? console.log("Good") : marks >= 50 ? console.log("Average") : console.log("Fail");
;



