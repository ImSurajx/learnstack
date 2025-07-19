/*
# NUMBERS
if we want to store a particular number then we can create an object for storing that particular number.

like:
const balance = new Number(100)

or if don't want particular number we can also do like:
const num = 28340;

there are few prototypes of numbers:
toString(): convert number into string & we can apply all the propeties on string on it.
toFixed(number): rounds a number and returns it as a string, keeping a specified number of digits after the decimal point;
toPrecision(round off value):returns a string representing the number in either fixed-point or exponential notation with a specified number of significant digits, not just digits after the decimal.
*/

// const score = 400;
// console.log(score); // 400
// const balance = new Number(100);
// console.log(balance); // [Number: 100]
// console.log(balance.toString()); // 100
// console.log(typeof balance.toString().length); // number
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00
// const num = 123.8966; 
// console.log(num.toPrecision(4)); // 123.9
// const numx = 1000000;
// console.log(numx.toLocaleString('en-IN')); // 10,00,000

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++

/*
Math:
is a built-in global object that provides mathematical constants and functions. You can use it to perform complex math operations like rounding, trigonometry, logarithms, powers, random numbers, etc.
Rounding: round(), ceil(), floor(), trunc()
Random: random()
Power & Root: pow(), sqrt()
Min/Max: min(), max()
Trig & Log: sin(), cos(), log(), exp()
*/

console.log(Math.PI); // 3.141592653589793
Math.abs(-10)      // 10 → absolute value
Math.ceil(4.2)     // 5  → round up
Math.floor(4.9)    // 4  → round down
Math.round(4.5)    // 5  → round to nearest
Math.trunc(4.7)    // 4  → remove decimal

Math.pow(2, 3)     // 8 → 2^3
Math.sqrt(25)      // 5 → square root

Math.min(1, 4, -2, 9) // -2
Math.max(1, 4, -2, 9) // 9

Math.random()        // 0.0 to <1.0
Math.floor(Math.random() * 10) // 0–9

let num = Math.floor(Math.random() * 100) + 1;

Math.log(10);         // Natural log
Math.log10(100);      // Base-10 log → 2
Math.exp(1);          // e^1 ≈ 2.718

Math.sin(Math.PI / 2);  // 1
Math.cos(0);            // 1
Math.tan(Math.PI / 4);  // 1


// 🎲 Generate random integer between min and max (inclusive)
const min = 10;
const max = 20;

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

/*
📝 Explanation:
- Math.random()        → gives a float between 0 (inclusive) and 1 (exclusive)
- (max - min + 1)      → total possible values (e.g. 20 - 10 + 1 = 11)
- Multiply & floor     → gives int from 0 to 10
- Add min              → shifts range from 0–10 to 10–20
✅ So final result is a number between min and max, inclusive
*/


