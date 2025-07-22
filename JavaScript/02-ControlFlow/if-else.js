// ============================================
// JavaScript Comparison Operators, if-else, &&, ||
// ============================================

// =====================
// 🔸 Comparison Operators
// =====================

// These are used to compare two values and return a Boolean (true/false).

// 1. Equal to (==)
console.log(5 == '5'); // true (type coercion)

// 2. Strict equal to (===)
console.log(5 === '5'); // false (no type coercion)

// 3. Not equal to (!=)
console.log(5 != '5'); // false (because values are equal after coercion)

// 4. Strict not equal to (!==)
console.log(5 !== '5'); // true

// 5. Greater than (>)
console.log(10 > 5); // true

// 6. Less than (<)
console.log(10 < 5); // false

// 7. Greater than or equal to (>=)
console.log(10 >= 10); // true

// 8. Less than or equal to (<=)
console.log(10 <= 5); // false


// =====================
// 🔸 if, else if, else Statement
// =====================

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// How it works:
// - JS checks condition from top to bottom
// - As soon as a condition is true, it executes that block
// - Remaining blocks are skipped


// =====================
// 🔸 Logical Operators (&&, ||)
// =====================

// AND (&&) - Returns true only if **both** expressions are true
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Eligible to drive");
} else {
  console.log("Not eligible to drive");
}

// OR (||) - Returns true if **at least one** expression is true
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("You can rest today");
} else {
  console.log("Go to work!");
}

// NOT (!) - Negates the boolean value
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in to continue.");
} else {
  console.log("Welcome back!");
}


// =====================
// 🔍 Extra Tip: Truthy & Falsy
// =====================
// In JavaScript, some values behave as true/false in conditions

// Falsy values: false, 0, '', null, undefined, NaN
// Everything else is considered truthy

let username = "";
if (username) {
  console.log("Username exists");
} else {
  console.log("No username found");
} // Output: No username found


// ============================================
// ✅ Summary:
// ============================================
// - Use == when type doesn’t matter, === when it does
// - if-else helps control the flow of logic
// - && requires both conditions to be true
// - || requires at least one condition to be true
// - ! negates a boolean
// ============================================

// ******************** Test ********************
// comparision: <,>,<=,>=,==, !=, ===;
// 3 != 2
// if 
if(condition /* true/false -> condtion */) { // if condition is true the code inside if block will run else not.

}
const isUserLoggedIn = true;
const temprature  = 41;
if(temprature<50){
    console.log(`temprature is less the 50.`);
} else{
    console.log(`temprature is greater than 50.`);
}
const score = 200;
if(score>100){
    let power = "fly";
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);

const balance = 1000;
if(balance>500) console.log("test"), console.log("test2");

if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else{
    console.log("less than 1200");
    
}

const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard){ // && -> both statement must be true, || -> any one statement must be true.
    console.log("allow it buy course");
    
}
