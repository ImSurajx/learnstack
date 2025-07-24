// ===================================================================================
// ||                                                                               ||
// ||                   THE ULTIMATE JAVASCRIPT NOTES FILE                          ||
// ||                                                                               ||
// ||   A comprehensive, beginner-friendly guide to core JavaScript concepts.       ||
// ||   Created by your personal Code Coach.                                        ||
// ||                                                                               ||
// ===================================================================================
//
// 📚 TABLE OF CONTENTS:
//    SECTION 1:  Variables (var, let, const)
//    SECTION 2:  Datatypes
//    SECTION 3:  Type Conversion
//    SECTION 4:  Operations
//    SECTION 5:  Comparison
//    SECTION 6:  Stack & Heap Memory
//    SECTION 7:  Strings
//    SECTION 8:  String Prototypes
//    SECTION 9:  Numbers & Maths
//    SECTION 10: Dates
//    SECTION 11: Arrays
//    SECTION 12: Objects
//    SECTION 13: Destructuring & JSON API
//    SECTION 14: Functions
//    SECTION 15: Passing Values & Rest Operator in Functions
//    SECTION 16: Scope of Variables
//    SECTION 17: Scope of Functions & Conditional Blocks
//    SECTION 18: Arrow Function & `this` Keyword
//    SECTION 19: IIFE (Immediately Invoked Function Expression)
//    SECTION 20: Execution Context
//    SECTION 21: If-Else Statements
//    SECTION 22: Switch Statement
//    SECTION 23: Nullish Coalescing & Ternary Operator
//    SECTION 24: For Loop, Break & Continue
//    SECTION 25: While & Do-While Loop
//    SECTION 26: For...of, For...in & forEach Loop
//    SECTION 27: Filter, Map & Reduce
//    SECTION 28: Promises
//    SECTION 29: Async/Await
//    SECTION 30: Error Handling (try...catch)
//    SECTION 31: PRACTICE PROBLEM SOLUTIONS

// ===================================================================================
// ||  SECTION 1: VARIABLES (var, let, const)                                       ||
// ===================================================================================

// 🧠 Concept: Variables are like labeled jars where you can store information.
// You give a jar a name (the variable name) and put something inside it (the value).

// --- Sub-Topic: `var` (The Old Way) ---
// `var` was the original way to declare variables. It's function-scoped.
var userName = "Alex"; // Declaring and initializing a variable
console.log(userName); // Output: Alex

// `var` can be re-declared and updated.
var userName = "John"; // Re-declaring
console.log(userName); // Output: John
userName = "Mike"; // Updating
console.log(userName); // Output: Mike

// ⚠️ Common Mistake: `var` has some tricky behaviors like "hoisting," where declarations
// are moved to the top of their scope, which can lead to unexpected bugs.
// For this reason, modern JavaScript prefers `let` and `const`.

// --- Sub-Topic: `let` (The Modern, Changeable Way) ---
// `let` is block-scoped, meaning it only exists within the nearest set of curly braces {}.
let userAge = 30;
console.log(userAge); // Output: 30

// `let` can be updated but NOT re-declared in the same scope.
userAge = 31; // This is okay
console.log(userAge); // Output: 31

// let userAge = 32; // This would cause an error: "Identifier 'userAge' has already been declared"

// --- Sub-Topic: `const` (The Constant, Unchangeable Way) ---
// `const` is also block-scoped. It's for values that should never change.
const birthDate = "2000-01-01";
console.log(birthDate); // Output: 2000-01-01

// `const` cannot be updated or re-declared.
// birthDate = "2001-01-01"; // This would cause an error: "Assignment to constant variable."

// 🧠 Pro Tip: Always use `const` by default. If you know the value needs to change,
// use `let`. Avoid using `var` in modern code to prevent scope-related bugs.

// 🔁 Practice Problems:
// 1. (Easy) Declare a variable `favoriteColor` using `let` and assign it your favorite color. On the next line, log it to the console.
// 2. (Easy) Declare a constant `daysInWeek` and set it to 7. Try to reassign it to 8 on the next line. What happens?
// 3. (Medium) Declare a variable `userScore` with `let` and set it to 100. Then, create a new block with curly braces `{}`. Inside the block, declare another `userScore` with `let` and set it to 200. Log the value of `userScore` both inside and outside the block. What are the results and why?
// 4. (Medium) Use `var` to declare a variable `testVar` inside a block `{}`. Can you access `testVar` outside of that block? Why or why not?
// 5. (Hard) Declare a constant `userInfo` and assign it an object with two properties: `name` and `age`. Can you change the `age` property of the `userInfo` object? Can you reassign `userInfo` to a new object? Explain the difference.

// ===================================================================================
// ||  SECTION 2: DATATYPES                                                         ||
// ===================================================================================

// 🧠 Concept: Datatypes are the different types of values we can store in variables.
// JavaScript has two main categories: Primitive Types and Object Type.

// --- Sub-Topic: Primitive Types (Stored directly in memory) ---

// 1. String: Text, wrapped in quotes.
const myName = "JavaScript";
console.log(typeof myName); // "string"

// 2. Number: Both integers and decimals (floating-point numbers).
const myAge = 28;
const pi = 3.14;
console.log(typeof myAge); // "number"

// 3. Boolean: Represents true or false. Used for logical operations.
const isLearning = true;
console.log(typeof isLearning); // "boolean"

// 4. Undefined: A variable that has been declared but not assigned a value.
let futureValue;
console.log(typeof futureValue); // "undefined"

// 5. Null: Represents the intentional absence of any object value. It's a "nothing" value.
const emptyValue = null;
console.log(typeof emptyValue); // "object" (This is a famous, old bug in JS!)

// 6. Symbol: A unique and immutable primitive value, often used as an identifier for object properties.
const uniqueId = Symbol('id');
console.log(typeof uniqueId); // "symbol"

// 7. BigInt: For numbers larger than the standard Number type can hold.
const veryLargeNumber = 9007199254740991n; // note the 'n' at the end
console.log(typeof veryLargeNumber); // "bigint"

// --- Sub-Topic: Object Type (A collection of properties) ---
// Anything that is not a primitive is an object. This includes arrays, functions, and objects themselves.
// An object is a collection of key-value pairs.
const person = {
  name: "Sarah",
  age: 25
};
console.log(typeof person); // "object"

// 🔁 Practice Problems:
// 1. (Easy) Create variables to store your name (string), age (number), and whether you are a student (boolean). Log the type of each variable to the console.
// 2. (Easy) Declare a variable `car` but do not assign it a value. What is its value and type?
// 3. (Medium) What is the result of `typeof null`? Why is it like this?
// 4. (Medium) Create two `Symbol` variables with the same description, for example, `Symbol('key')`. Are they equal to each other? Why or why not?
// 5. (Hard) Create an array that contains a string, a number, a boolean, a null value, and an undefined value. Log the entire array and the type of the array itself.

// ===================================================================================
// ||  SECTION 3: TYPE CONVERSION                                                   ||
// ===================================================================================

// 🧠 Concept: Sometimes JavaScript needs to convert a value from one type to another.
// This can happen automatically (coercion) or manually (conversion).

// --- Sub-Topic: Explicit Conversion (You do it yourself) ---

// To Number
let score = "100";
console.log(typeof score); // "string"
let scoreAsNumber = Number(score);
console.log(typeof scoreAsNumber); // "number"
console.log(scoreAsNumber + 1); // 101

let invalidNumber = Number("hello");
console.log(invalidNumber); // NaN (Not a Number)

// To String
let value = 33;
let valueAsString = String(value);
console.log(typeof valueAsString); // "string"

// To Boolean
// Falsy values: 0, "", null, undefined, NaN
// Everything else is a "truthy" value.
let isLoggedIn = 1;
let isLoggedInAsBoolean = Boolean(isLoggedIn);
console.log(isLoggedInAsBoolean); // true

let emptyString = "";
let emptyStringAsBoolean = Boolean(emptyString);
console.log(emptyStringAsBoolean); // false

// --- Sub-Topic: Implicit Coercion (JS does it for you) ---
// This often happens with operators.
console.log("5" + 5); // "55" (Number 5 is coerced to a string)
console.log("10" - 5); // 5 (String "10" is coerced to a number)

// 🧠 Pro Tip: Rely on explicit conversion (`Number()`, `String()`) to make your
// code clearer and avoid unexpected bugs from implicit coercion.

// 🔁 Practice Problems:
// 1. (Easy) Take the string "50" and explicitly convert it to a number. Add 25 to it and log the result.
// 2. (Easy) Convert the number 0 to a boolean. What is the result? What about the number 1?
// 3. (Medium) What is the result of `Number(null)` and `Number(undefined)`?
// 4. (Medium) Predict the output of `console.log(1 + 2 + "3")` and `console.log("1" + 2 + 3)`. Explain the difference.
// 5. (Hard) What is the result of `Boolean("0")` and `Boolean("")`? Explain why they are different.

// ===================================================================================
// ||  SECTION 4: OPERATIONS                                                        ||
// ===================================================================================

// --- Arithmetic Operators ---
let a = 10;
let b = 4;
console.log(a + b); // 14 (Addition)
console.log(a - b); // 6 (Subtraction)
console.log(a * b); // 40 (Multiplication)
console.log(a / b); // 2.5 (Division)
console.log(a % b); // 2 (Modulus - remainder of division)
console.log(a ** b); // 10000 (Exponentiation - a to the power of b)

// --- Assignment Operators ---
let c = 10;
c += 5; // same as c = c + 5; -> c is now 15
c -= 5; // same as c = c - 5; -> c is now 10
c *= 2; // same as c = c * 2; -> c is now 20
console.log(c);

// --- Logical Operators ---
// && (AND): both sides must be true
console.log(true && true); // true
console.log(true && false); // false

// || (OR): at least one side must be true
console.log(true || false); // true
console.log(false || false); // false

// ! (NOT): inverts the boolean value
console.log(!true); // false

// 🔁 Practice Problems:
// 1. (Easy) Calculate the remainder of 15 divided by 4.
// 2. (Easy) Let `x = 5`. Use the `*=` assignment operator to multiply `x` by 3. Log the new value of `x`.
// 3. (Medium) Let `isMember = true` and `hasCoupon = false`. Write a logical expression that evaluates to true if the user is either a member OR has a coupon.
// 4. (Medium) Let `isLoggedIn = true` and `isAdmin = false`. Write a logical expression that evaluates to true only if the user is logged in AND is an admin.
// 5. (Hard) What is the result of `5 > 4 && "hello" === "hello" || !true`? Break down how JavaScript evaluates this expression.

// ===================================================================================
// ||  SECTION 5: COMPARISON                                                        ||
// ===================================================================================

// 🧠 Concept: Comparing values is fundamental for making decisions in code.

// --- Sub-Topic: Strict Equality (`===`) ---
// This is the recommended comparison operator. It checks for both value AND type.
console.log(5 === 5); // true
console.log(5 === "5"); // false (different types)

// --- Sub-Topic: Loose Equality (`==`) ---
// This operator performs type coercion before comparing. It can lead to weird results.
console.log(5 == 5); // true
console.log(5 == "5"); // true (string "5" is coerced to number 5)
console.log(0 == false); // true
console.log("" == false); // true

// ⚠️ Common Mistake: Using `==` can hide bugs. For example, `null == undefined` is true,
// which is rarely what you want to check for.
console.log(null == undefined); // true
console.log(null === undefined); // false

// --- Other Comparison Operators ---
let x = 10;
let y = 5;
console.log(x > y); // true (Greater than)
console.log(x < y); // false (Less than)
console.log(x >= 10); // true (Greater than or equal to)
console.log(y <= 5); // true (Less than or equal to)
console.log(x !== 5); // true (Strict inequality)

// 🔁 Practice Problems:
// 1. (Easy) Is the number 7 strictly equal to the string "7"? Write the comparison and log the result.
// 2. (Easy) Is the number 10 greater than or equal to 10? Write the comparison.
// 3. (Medium) What do `0 == ""` and `0 === ""` evaluate to? Explain the difference.
// 4. (Medium) Predict the result of `"apple" > "banana"`. Why does it produce this result?
// 5. (Hard) Explain the difference between `null == 0`, `null > 0`, and `null >= 0`. What are the results and why?

// ===================================================================================
// ||  SECTION 6: STACK & HEAP RELATION WITH MEMORY & DATATYPES                     ||
// ===================================================================================

// 🧠 Concept: JavaScript manages memory using two main places: the Stack and the Heap.
// Understanding this helps explain why variables sometimes behave differently.

// --- The Stack (for Primitive Types) ---
// Analogy: A stack of books. It's very organized and fast.
// Stores fixed-size data: `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`.
// When you assign a primitive to a variable, the actual value is stored on the stack.

let myNumber = 10; // The value 10 is put on the stack.
let anotherNumber = myNumber; // A *copy* of the value 10 is put on the stack.

anotherNumber = 20; // We change the copy.

console.log(myNumber); // 10 (The original is unaffected)
console.log(anotherNumber); // 20

// --- The Heap (for Objects, Arrays, Functions) ---
// Analogy: A messy library warehouse. It's for large, dynamic data.
// Stores variable-size data: Objects, Arrays, Functions.
// When you assign an object to a variable, the variable on the stack stores a *reference*
// (like a library card) that points to the actual object's location in the heap.

let userObject = { name: "Alice" }; // The object {name: "Alice"} is created on the heap.
                                     // `userObject` on the stack gets a memory address pointing to it.

let anotherUserObject = userObject; // We copy the *reference* (the library card), not the object itself.
                                    // Both variables now point to the SAME object on the heap.

anotherUserObject.name = "Bob"; // We use our copied library card to go change the original book.

console.log(userObject.name); // "Bob" (The original object was changed!)
console.log(anotherUserObject.name); // "Bob"

// --- Practical Example: Modifying an Array in a Function ---
// This demonstrates why objects/arrays are "passed by reference".
const originalArray = [1, 2, 3];

function addToArray(arr) {
    // `arr` receives a reference to `originalArray`, not a copy.
    arr.push(4); // Modifying `arr` will also modify `originalArray`.
}

console.log("Original array before function call:", originalArray); // [1, 2, 3]
addToArray(originalArray);
console.log("Original array after function call:", originalArray); // [1, 2, 3, 4]


// ✅ Summary:
// - Primitives are copied by value.
// - Objects are copied by reference.

// 🔁 Practice Problems:
// 1. (Easy) If `let str1 = "hello"` and `let str2 = str1`, and then we set `str2 = "world"`, what is the value of `str1`? Why?
// 2. (Easy) If `let obj1 = { a: 1 }` and `let obj2 = obj1`, and then we set `obj2.a = 2`, what is the value of `obj1.a`? Why?
// 3. (Medium) Create a variable `num1` with the value 50. Create a second variable `num2` and assign it the value of `num1`. Then, change `num2` to 100. Log both variables. Explain what is happening in terms of stack memory.
// 4. (Medium) Create an object `person1` with a `name` property. Create a second variable `person2` and assign it `person1`. Change the name property on `person2`. Log `person1.name`. Explain what is happening in terms of stack and heap memory.
// 5. (Hard) Write a function `resetName` that takes a user object (like `{ name: 'John' }`) as an argument and changes the name property to 'Anonymous'. Create a user object, call the function with it, and then log the user's name to see if it changed. Explain why it did or did not change.

// ===================================================================================
// ||  SECTION 7: STRINGS                                                           ||
// ===================================================================================

// 🧠 Concept: Strings are used to store and manipulate text.

const greeting = "Hello, World!";

// --- Properties and Methods ---
console.log(greeting.length); // 13 (Property: gives the length)
console.log(greeting.toUpperCase()); // "HELLO, WORLD!" (Method: returns a new uppercase string)
console.log(greeting.toLowerCase()); // "hello, world!"
console.log(greeting.indexOf('o')); // 4 (Finds the index of the first occurrence)
console.log(greeting.lastIndexOf('o')); // 8 (Finds the index of the last occurrence)
console.log(greeting.slice(0, 5)); // "Hello" (Extracts a part of the string)

const messyString = "   some text   ";
console.log(messyString.trim()); // "some text" (Removes whitespace from both ends)

const url = "https://example.com/page%20one";
console.log(url.replace('%20', '-')); // "https://example.com/page-one"

console.log(greeting.includes('World')); // true (Checks if a substring exists)
console.log(greeting.startsWith('Hello')); // true
console.log(greeting.endsWith('!')); // true

// --- Sub-Topic: Template Literals (The Modern Way) ---
// Use backticks (``) instead of single or double quotes.
// Allows for embedded expressions and multi-line strings.

const personName = "Leo";
const personAge = 35;

// The old way (concatenation)
const messageOld = "My name is " + personName + " and I am " + personAge + " years old.";

// The new way (template literals)
const messageNew = `My name is ${personName} and I am ${personAge} years old.`;
console.log(messageNew);

// 🔁 Practice Problems:
// 1. (Easy) Create a string variable `myCity` with the value "New York". Log its length.
// 2. (Easy) Using the `myCity` variable, create a new variable `myCityUpper` that contains "NEW YORK" using a string method.
// 3. (Medium) Given the string `const message = "I love JavaScript!"`, use `slice()` to get the word "JavaScript".
// 4. (Medium) Use a template literal to create a sentence: "The item costs $PRICE.", where `PRICE` is a number variable you define.
// 5. (Hard) Write a function `censorWord(sentence, word)` that takes a sentence and a word, and returns the sentence with the word replaced by asterisks (`***`). The number of asterisks should match the length of the word.

// ===================================================================================
// ||  SECTION 8: STRING PROTOTYPES                                                 ||
// ===================================================================================

// 🧠 Concept: Every object in JavaScript has a "prototype," which is like a blueprint.
// The prototype is an object itself that contains shared methods and properties.
// When you try to access a property on an object, if it's not found, JavaScript
// looks up the "prototype chain" to find it.

// For strings, all the methods like `.toUpperCase()`, `.trim()`, etc., don't live
// on your specific string instance. They live on `String.prototype`.

const myString = "test";

// `myString` itself doesn't have a `.toUpperCase` method.
// When you call `myString.toUpperCase()`, JavaScript sees it's not on `myString`,
// so it looks at `myString`'s prototype, which is `String.prototype`.
// It finds `toUpperCase` there and executes it.

// You can even add your own methods to the prototype (though it's generally discouraged
// to modify built-in prototypes as it can lead to conflicts with other code/libraries).

// Example (for demonstration only):
/*
String.prototype.shout = function() {
    return `Ahem... ${this.toUpperCase()}!!!`;
};

console.log("hello".shout()); // "Ahem... HELLO!!!"
*/

// ✅ Summary: Prototypes are the mechanism behind how objects inherit features in JavaScript.

// 🔁 Practice Problems:
// 1. (Easy) Create a string `let s = "hello"`. When you call `s.toUpperCase()`, where does JavaScript find the `toUpperCase` method?
// 2. (Medium) For demonstration purposes only, add a method `reverse()` to `String.prototype` that returns the string reversed. Then call it on a sample string like `"world".reverse()`.
// 3. (Hard) Explain why modifying built-in prototypes like `String.prototype` or `Array.prototype` is generally considered bad practice in large applications.

// ===================================================================================
// ||  SECTION 9: NUMBERS & MATHS                                                   ||
// ===================================================================================

const balance = 100.54321;

// --- Number Methods ---
console.log(balance.toFixed(2)); // "100.54" (Returns a string with a specified number of decimals)
console.log(balance.toPrecision(4)); // "100.5" (Returns a string with a specified length)

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" (Formats for a specific locale)

// --- The `Math` Object ---
// `Math` is a built-in object that has properties and methods for mathematical constants and functions.

console.log(Math.abs(-4)); // 4 (Absolute value)
console.log(Math.round(4.6)); // 5 (Rounds to the nearest integer)
console.log(Math.ceil(4.2)); // 5 (Rounds up to the nearest integer)
console.log(Math.floor(4.9)); // 4 (Rounds down to the nearest integer)
console.log(Math.min(0, 150, 30, 20, -8)); // -8 (Finds the minimum value)
console.log(Math.max(0, 150, 30, 20, -8)); // 150 (Finds the maximum value)

// `Math.random()` gives a random decimal between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());

// 🧠 Pro Tip: To get a random integer within a range (e.g., 1 to 10):
const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);

// 🔁 Practice Problems:
// 1. (Easy) Use `Math.random()` to generate a random number between 0 and 1.
// 2. (Easy) Round the number 7.8 to the nearest integer.
// 3. (Medium) Write a function `getRandom(min, max)` that returns a random integer between `min` and `max` (inclusive).
// 4. (Medium) Given the number `12345.6789`, use a `Number` method to format it as a string with only two decimal places.
// 5. (Hard) What is `0.1 + 0.2` in JavaScript? Is it equal to `0.3`? Explain why or why not.

// ===================================================================================
// ||  SECTION 10: DATES                                                            ||
// ===================================================================================

// 🧠 Concept: The `Date` object is used to work with dates and times.

// --- Creating Dates ---
let myDate = new Date(); // Creates a date object for the current date and time.
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString()); // More readable date
console.log(myDate.toLocaleString()); // Locale-specific format

// Creating a specific date
let myCreatedDate = new Date(2023, 0, 23); // Year, Month (0-indexed!), Day
console.log(myCreatedDate.toDateString()); // "Mon Jan 23 2023"

let anotherDate = new Date("2024-07-25"); // Using a string format (YYYY-MM-DD)
console.log(anotherDate.toLocaleString());

// --- Timestamps ---
// `Date.now()` gives the number of milliseconds that have elapsed since Jan 1, 1970.
// This is very useful for comparing dates or measuring time.
let myTimeStamp = Date.now();
console.log(myTimeStamp);

// To get the timestamp from a date object:
console.log(myCreatedDate.getTime());

// To convert the timestamp back to seconds (often needed for APIs):
console.log(Math.floor(Date.now() / 1000));

// --- Getting Components ---
let newDate = new Date();
console.log(newDate.getFullYear()); // e.g., 2024
console.log(newDate.getMonth() + 1); // e.g., 7 (Month is 0-indexed, so add 1)
console.log(newDate.getDay()); // Day of the week (0=Sunday, 1=Monday, ...)
console.log(newDate.getHours());

// 🔁 Practice Problems:
// 1. (Easy) Create a `Date` object for the current time and log it.
// 2. (Easy) Create a `Date` object for your birthday.
// 3. (Medium) Write a function that takes a date object and returns the month name (e.g., "January", "February").
// 4. (Medium) Get the current timestamp in seconds.
// 5. (Hard) Write a function `getDaysUntilChristmas()` that calculates and returns the number of days from today until next Christmas.

// ===================================================================================
// ||  SECTION 11: ARRAYS                                                           ||
// ===================================================================================

// 🧠 Concept: An array is an ordered collection of values. You can store multiple
// values (of any type) in a single variable.

// --- Array Creation & Access ---
const fruits = ["Apple", "Banana", "Cherry"];
const mixedArray = [1, "Hello", true, null];

console.log(fruits[0]); // "Apple" (Arrays are 0-indexed)
console.log(fruits[2]); // "Cherry"

// --- Basic Properties & Methods ---
console.log(fruits.length); // 3

// Add to the end
fruits.push("Dragonfruit");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Dragonfruit"]

// Remove from the end
let lastFruit = fruits.pop();
console.log(lastFruit); // "Dragonfruit"
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// Add to the beginning
fruits.unshift("Mango");
console.log(fruits); // ["Mango", "Apple", "Banana", "Cherry"]

// Remove from the beginning
let firstFruit = fruits.shift();
console.log(firstFruit); // "Mango"
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// --- Other Useful Methods ---
console.log(fruits.includes("Banana")); // true
console.log(fruits.indexOf("Cherry")); // 2

const moreFruits = ["Mango", "Grapes"];
const allFruits = fruits.concat(moreFruits); // Joins arrays
console.log(allFruits);

// `slice` returns a new array, does NOT modify the original.
const someFruits = allFruits.slice(1, 4); // from index 1 up to (but not including) index 4
console.log(someFruits); // ["Banana", "Cherry", "Mango"]

// `splice` MODIFIES the original array. Used to add/remove elements.
// Remove 2 elements starting from index 1
allFruits.splice(1, 2);
console.log(allFruits); // ["Apple", "Grapes"]

// 🔁 Practice Problems:
// 1. (Easy) Create an array of your three favorite movies. Log the second movie to the console.
// 2. (Easy) Using the `push` method, add a fourth favorite movie to your array.
// 3. (Medium) Given an array `[10, 20, 30, 40, 50]`, use `slice` to create a new array `[20, 30]`.
// 4. (Medium) Using the same array, use `splice` to remove the number 40.
// 5. (Hard) Write a function `rotateArray(arr)` that takes an array and moves the last element to the front, returning the new array. E.g., `[1, 2, 3]` becomes `[3, 1, 2]`.

// ===================================================================================
// ||  SECTION 12: OBJECTS                                                          ||
// ===================================================================================

// 🧠 Concept: Objects are collections of key-value pairs. They are used to group
// related data and functionality. This is the most important data structure in JS.

// --- Object Creation (Literal) ---
const user = {
    name: "Peter Parker",
    age: 22,
    isStudent: true,
    "home address": "Queens, NY", // keys with spaces must be in quotes
    sayHi: function() {
        console.log("Hello!");
    }
};

// --- Accessing Properties ---
// 1. Dot Notation (preferred when possible)
console.log(user.name); // "Peter Parker"

// 2. Bracket Notation (required for keys with spaces or dynamic keys)
console.log(user["home address"]); // "Queens, NY"
let key = "age";
console.log(user[key]); // 22

// --- Modifying Objects ---
user.email = "peter.parker@example.com"; // Add a new property
user.age = 23; // Update an existing property
delete user.isStudent; // Remove a property

console.log(user);
user.sayHi(); // Call a method

// --- Useful Object Methods ---
console.log(Object.keys(user)); // Returns an array of all keys
console.log(Object.values(user)); // Returns an array of all values
console.log(Object.entries(user)); // Returns an array of [key, value] pairs

console.log(user.hasOwnProperty('name')); // true (Checks if property is on the object itself)

// 🔁 Practice Problems:
// 1. (Easy) Create an object `book` with properties for `title`, `author`, and `yearPublished`.
// 2. (Easy) Access the `author` of your `book` object and log it to the console.
// 3. (Medium) Add a new property `genre` to your `book` object.
// 4. (Medium) Add a method `getSummary` to your book object that returns a string like "TITLE by AUTHOR".
// 5. (Hard) Write a function `countProperties(obj)` that takes an object and returns the number of properties it has.

// ===================================================================================
// ||  SECTION 13: DESTRUCTURING & JSON API                                         ||
// ===================================================================================

// --- Sub-Topic: Destructuring ---
// 🧠 Concept: A shortcut to unpack values from arrays or properties from objects
// into distinct variables.

// Object Destructuring
const course = {
    courseName: "JavaScript Mastery",
    price: 999,
    instructor: "Code Coach"
};

const { courseName, price, instructor: teacher } = course; // The new way
console.log(courseName); // "JavaScript Mastery"
console.log(teacher); // "Code Coach"

// Array Destructuring
const numbers = [10, 20, 30, 40];
const [first, second, , fourth] = numbers; // Skip an element with a comma
console.log(first); // 10

// --- Sub-Topic: JSON (JavaScript Object Notation) ---
// 🧠 Concept: JSON is a lightweight format for storing and transporting data.
// It's text, written with JavaScript object notation. It's commonly used by APIs.

// --- Practical Example: Simulating an API response ---
const apiResponse = `{
    "id": "001",
    "user": {
        "name": "Bruce Wayne",
        "email": "bruce@wayne.enterprises"
    },
    "orders": [
        {"orderId": "a1", "amount": 500},
        {"orderId": "b2", "amount": 750}
    ],
    "isActive": true
}`;

// 1. Parse the JSON string into a JavaScript object
const responseData = JSON.parse(apiResponse);
console.log(responseData.user.name); // "Bruce Wayne"

// 2. Destructure the parsed object to easily access nested data
const { user: { name: userNameApi, email }, orders } = responseData;
console.log(userNameApi); // "Bruce Wayne"
console.log(orders[0].amount); // 500

// 3. Convert a JS object back to a JSON string to send it somewhere
const newOrder = { orderId: "c3", amount: 1200 };
const jsonToSend = JSON.stringify(newOrder);
console.log(jsonToSend); // '{"orderId":"c3","amount":1200}'

// 🔁 Practice Problems:
// 1. (Easy) Given the object `const student = { name: 'Alice', score: 88 };`, destructure the `name` and `score` into two separate variables.
// 2. (Easy) Given the array `const colors = ['red', 'green', 'blue'];`, destructure the first two colors into variables `primary` and `secondary`.
// 3. (Medium) Create a JSON string representing a product with an `id`, `name`, and `price`.
// 4. (Medium) Take the JSON string from the previous question and parse it back into a JavaScript object.
// 5. (Hard) You have a nested object `const data = { user: { id: 123, info: { name: 'Bob', city: 'London' } } }`. Use destructuring to get the `city` into its own variable.

// ===================================================================================
// ||  SECTION 14: FUNCTIONS                                                        ||
// ===================================================================================

// 🧠 Concept: A function is a reusable block of code that performs a specific task.
// You define the code once and can run it many times.

// --- Sub-Topic: Function Declaration ---
// These are "hoisted," meaning they can be called before they are defined in the code.
function sayHello(name) { // `name` is a parameter
    console.log(`Hello, ${name}!`);
}

sayHello("World"); // "World" is an argument

// --- Sub-Topic: Function Expression ---
// A function is assigned to a variable. These are NOT hoisted.
const addNumbers = function(num1, num2) {
    return num1 + num2; // The `return` keyword sends a value back out of the function.
};

const sum = addNumbers(5, 10);
console.log(sum); // 15

// 🔁 Practice Problems:
// 1. (Easy) Write a function declaration named `greet` that takes a name as an argument and returns the string "Hello, [name]!".
// 2. (Easy) Write a function expression named `calculateArea` that takes `width` and `height` and returns their product.
// 3. (Medium) What is the difference between a parameter and an argument in a function?
// 4. (Medium) Write a function `isEven(number)` that returns `true` if the number is even and `false` otherwise.
// 5. (Hard) Explain what hoisting is in the context of function declarations vs. function expressions. Provide a code example that demonstrates this difference.

// ===================================================================================
// ||  SECTION 15: PASSING OBJECT, ARRAY & REST OPERATOR IN FUNCTION              ||
// ===================================================================================

// 🧠 Concept: Remember Stack vs. Heap? This affects how functions handle variables.
// Primitives are passed by value (a copy). Objects/Arrays are passed by reference.

// --- Passing Objects/Arrays ---
const userProfile = { name: "Diana", location: "Themyscira" };

// Here, `profile` is the PARAMETER. It's a local variable inside the function
// that acts as a placeholder for the data that will be passed in.
function updateUserLocation(profile) {
    // When the function is called, the `userProfile` object's reference is passed in
    // and assigned to `profile`. So, `profile` now points to the same object in memory.
    profile.location = "New York"; // This modifies the ORIGINAL object.
}

console.log("Before:", userProfile.location); // "Themyscira"

// Here, `userProfile` is the ARGUMENT we are passing to the function.
updateUserLocation(userProfile);

console.log("After:", userProfile.location); // "New York"

// --- Sub-Topic: The Rest Operator (`...`) ---
// It collects all remaining arguments into an actual array.
// This allows a function to accept an indefinite number of arguments.
function calculateCartTotal(discount, ...prices) {
    // `prices` is now an array, e.g., [200, 400, 500]
    const totalBeforeDiscount = prices.reduce((acc, price) => acc + price, 0);
    return totalBeforeDiscount * (1 - discount);
}

console.log(calculateCartTotal(0.10, 200, 400, 500)); // 990 (10% discount on 1100)

// 🔁 Practice Problems:
// 1. (Easy) Write a function `logFirstTwo(arg1, arg2, ...rest)` that logs the first two arguments and then logs the array of remaining arguments.
// 2. (Medium) Create an object for a `car` with `make` and `model`. Write a function `paintCar(carObject, newColor)` that adds a `color` property to the car object. Does this modify the original car object? Why?
// 3. (Medium) What is the difference between the rest operator (`...`) and the spread operator (`...`)? Provide an example of each.
// 4. (Hard) Write a function `findMax(...numbers)` that uses the rest operator to accept any number of arguments and returns the largest number.
// 5. (Hard) Write a function `mergeObjects(obj1, obj2)` that takes two objects and returns a new object with all the properties of both. If there are conflicting properties, the second object's property should win. (Hint: use the spread operator).

// ===================================================================================
// ||  SECTION 16: SCOPE OF VARIABLES                                               ||
// ===================================================================================

// 🧠 Concept: Scope determines the accessibility (visibility) of variables.
// Where you declare a variable matters.

// --- Global Scope ---
// Variables declared outside any function are in the global scope.
// They can be accessed from anywhere in the code.
const globalVar = "I am global";

function checkScope() {
    console.log(globalVar); // Accessible here
}
checkScope();

// --- Function Scope ---
// Variables declared with `var` inside a function are only accessible within that function.
function myFunction() {
    var functionScopedVar = "I am inside the function";
    console.log(functionScopedVar);
}
myFunction();
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

// --- Block Scope ---
// Variables declared with `let` and `const` are block-scoped.
// A block is any code within curly braces `{}` (e.g., if statements, loops).
if (true) {
    let blockScopedVar = "I am inside the block";
    const alsoBlockScoped = "Me too!";
    var oldSchoolVar = "I am function-scoped, so I escape the block!";
}
// console.log(blockScopedVar); // Error: blockScopedVar is not defined
// console.log(alsoBlockScoped); // Error: alsoBlockScoped is not defined
console.log(oldSchoolVar); // "I am function-scoped, so I escape the block!"

// 🔁 Practice Problems:
// 1. (Easy) Declare a global variable `appName` and log it from within a function.
// 2. (Medium) Declare a variable with `let` inside a `for` loop. Try to access it after the loop finishes. What happens?
// 3. (Medium) Declare a variable with `var` inside a `for` loop. Try to access it after the loop finishes. What happens and why is it different from `let`?
// 4. (Hard) What is "scope chain"? Explain with a nested function example.
// 5. (Hard) What is the "Temporal Dead Zone" (TDZ)? Provide a code example that would cause a TDZ error.

// ===================================================================================
// ||  SECTION 17: SCOPE OF FUNCTION & IF-ELSE (Lexical Scoping)                    ||
// ===================================================================================

// 🧠 Concept: Lexical Scoping (or Static Scope) means that a function's scope is
// determined by its location in the source code. Child functions can access
// variables from their parent functions.

function parent() {
    const parentVar = "I am the parent";

    function child() {
        const childVar = "I am the child";
        console.log(parentVar); // The child can access the parent's variables.
        console.log(childVar);
    }

    // console.log(childVar); // Error: The parent cannot access the child's variables.
    child();
}

parent();

// This is also why an `if` block can access variables from the function it's in,
// but variables defined with `let`/`const` inside the `if` block cannot be accessed outside it.

// 🔁 Practice Problems:
// 1. (Easy) Create a function `outer` with a variable `outerVar`. Inside `outer`, create another function `inner` that logs `outerVar`. Call `outer`.
// 2. (Medium) In the previous example, can the `outer` function access any variables defined inside the `inner` function? Why or why not?
// 3. (Hard) What is a "closure"? Write a function that returns another function. The inner function should have access to a variable from the outer function's scope, even after the outer function has finished executing.

// ===================================================================================
// ||  SECTION 18: ARROW FUNCTION & `this` KEYWORD                                  ||
// ===================================================================================

// --- Sub-Topic: Arrow Function Syntax ---
// A more concise way to write function expressions.
const addArrow = (a, b) => a + b; // Implicit return for single expressions

// --- Sub-Topic: The `this` Keyword ---
// 🧠 Concept: `this` refers to the object that is currently executing the function.
// Its value is determined by HOW a function is called.

const video = {
    title: "JS Tutorial",
    tags: ["js", "es6", "node"],
    showTagsArrow() {
        this.tags.forEach(tag => {
            // Arrow functions inherit `this` from their parent's scope.
            // Here, `this` is correctly bound to the `video` object.
            console.log(this.title, tag);
        });
    }
};
video.showTagsArrow();

// --- Practical Example: `this` in Event Listeners ---
// Imagine you have an HTML button: `<button id="myButton">Click Me</button>`
// document.getElementById('myButton').addEventListener('click', function() {
//     console.log(this); // `this` refers to the button element itself.
//     this.textContent = 'I was clicked!';
// });

// document.getElementById('myButton').addEventListener('click', () => {
//     console.log(this); // Here, `this` would refer to the global `window` object, NOT the button.
//     // this.textContent = 'This will not work!'; // This would fail.
// });
// ✅ Summary: For event listeners where you need to reference the element that triggered
// the event, use a traditional function. Use arrow functions in object methods like `forEach`.

// 🔁 Practice Problems:
// 1. (Easy) Convert the following function into an arrow function: `const greet = function(name) { return "Hello " + name; }`
// 2. (Medium) Create an object `counter` with a property `count` set to 0. Add a method `increment` that uses a traditional function to increase the count.
// 3. (Medium) Create another object `person` with a `name` and a method `greet` that uses an arrow function to log `Hello, my name is ${this.name}`. What happens when you call it? Why?
// 4. (Hard) Create an object `timer` with a `seconds` property and a `start` method. Inside `start`, use `setInterval` with a traditional function callback to log the `this.seconds` every second. Does it work? Fix it using an arrow function or another method like `.bind(this)`.
// 5. (Hard) What is the value of `this` in the global scope? What about inside a function called in the global scope (not as an object method)?

// ===================================================================================
// ||  SECTION 19: IIFE (Immediately Invoked Function Expression)                   ||
// ===================================================================================

// 🧠 Concept: An IIFE is a function that is defined and executed immediately.
// Its main purpose is to create a private scope.

(function() {
    const privateVar = "I can't be accessed from outside.";
    console.log("This IIFE ran immediately.");
})();

// console.log(privateVar); // Error: privateVar is not defined

// 💡 Use Case: In the past, before `let` and `const` gave us block scope, IIFEs were
// crucial for preventing variables from leaking into the global scope and causing conflicts.
// They are less common today but still useful for certain patterns and module creation.

// 🔁 Practice Problems:
// 1. (Easy) Write an IIFE that logs "Hello from an IIFE!" to the console.
// 2. (Medium) Write an IIFE that takes a `name` argument and logs "Welcome, [name]!".
// 3. (Hard) Why were IIFEs so important for avoiding global scope pollution before ES6 modules and the `let`/`const` keywords were introduced?

// ===================================================================================
// ||  SECTION 20: EXECUTION CONTEXTS                                               ||
// ===================================================================================

// 🧠 Concept: When the JavaScript engine runs your code, it creates execution contexts.
// Think of it as the environment where your code is evaluated and executed.

// 1. Global Execution Context (GEC): The default context, created when the script first starts.
// 2. Function Execution Context (FEC): Created every time a function is called.

// --- The Two Phases of an Execution Context ---
// Phase 1: Creation Phase (Memory Allocation)
// - The engine scans the code.
// - It allocates memory for all variables and functions.
// - Variables declared with `var` are initialized with `undefined` (this is "hoisting").
// - `let` and `const` are noted but remain uninitialized (in the "Temporal Dead Zone").
// - Function declarations are stored in memory completely.

// Phase 2: Execution Phase
// - The engine executes the code line by line.
// - It assigns the actual values to variables.

// Example demonstrating hoisting:
console.log(myVar); // Output: undefined (due to hoisting)
var myVar = 5;

// console.log(myLet); // Error: Cannot access 'myLet' before initialization (Temporal Dead Zone)
let myLet = 10;

// 🔁 Practice Problems:
// 1. (Easy) What is the first execution context created when a JS script runs?
// 2. (Medium) Predict the output of the following code and explain it in terms of hoisting: `console.log(a); var a = 10;`
// 3. (Medium) Predict the output of the following code and explain it: `sayHi(); function sayHi() { console.log("Hi!"); }`
// 4. (Hard) Predict the output of this code and explain it: `console.log(x); let x = 5;`
// 5. (Hard) Describe what happens to the "call stack" when a function calls another function.

// ===================================================================================
// ||  SECTION 21: IF-ELSE STATEMENTS                                               ||
// ===================================================================================

// 🧠 Concept: Used to execute different blocks of code based on a condition.
const temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day!");
} else if (temperature > 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a cool day.");
}

// 🔁 Practice Problems:
// 1. (Easy) Write an if-else statement that logs "Adult" if `age` is 18 or greater, and "Minor" otherwise.
// 2. (Medium) Write an if-else if-else statement to grade a score: 90+ is 'A', 80-89 is 'B', 70-79 is 'C', and below 70 is 'F'.
// 3. (Hard) What is a "truthy" vs a "falsy" value? Write an if statement that checks for a non-empty string.

// ===================================================================================
// ||  SECTION 22: SWITCH STATEMENT                                                 ||
// ===================================================================================

// 🧠 Concept: An alternative to a long `if-else if-else` chain. It checks a
// variable against a series of `case` values.

const userRole = "admin";
switch (userRole) {
    case "admin":
        console.log("Full access granted.");
        break;
    case "editor":
        console.log("Can edit content.");
        break;
    case "viewer":
        console.log("View-only access.");
        break;
    default:
        console.log("Unknown role.");
        break;
}

// 🔁 Practice Problems:
// 1. (Easy) Write a switch statement that logs the name of the day (e.g., "Monday") based on a number variable `dayNum` from 1 to 7.
// 2. (Medium) Rewrite the grading logic from the if-else section using a switch statement. Is it a good fit? Why or why not?
// 3. (Hard) What happens if you forget a `break` statement in a `case`? Provide an example of this "fall-through" behavior.

// ===================================================================================
// ||  SECTION 23: NULLISH COALESCING & TERNARY OPERATOR                            ||
// ===================================================================================

// --- Sub-Topic: Ternary Operator ---
// A shorthand for an `if-else` statement. `condition ? expressionIfTrue : expressionIfFalse`
const userPoints = 110;
const userCategory = userPoints > 100 ? "Gold" : "Silver";
console.log(`User category: ${userCategory}`);

// --- Sub-Topic: Nullish Coalescing Operator (`??`) ---
// It returns the right-hand side operand when the left-hand side is `null` or `undefined`.
// It does NOT trigger for other "falsy" values like `0` or `''`.
let someValue = null;
let defaultValue = "Default";
console.log(someValue ?? defaultValue); // "Default"

let zeroValue = 0;
console.log(zeroValue ?? defaultValue); // 0 (because 0 is not null or undefined)

// 🧠 Pro Tip: Use `??` when you specifically want to provide a fallback for `null` or
// `undefined`, but you want to treat `0` or empty strings as valid values.

// 🔁 Practice Problems:
// 1. (Easy) Use the ternary operator to set a variable `isEven` to `true` if a number is even, and `false` otherwise.
// 2. (Medium) You have a variable `userInput` which could be an empty string `""`. You want to provide a default value "Guest" if `userInput` is null or undefined, but keep the empty string if it is one. Which operator should you use: `||` or `??`?
// 3. (Hard) Chain two ternary operators to check if a number is positive, negative, or zero.

// ===================================================================================
// ||  SECTION 24: FOR LOOP, BREAK & CONTINUE                                       ||
// ===================================================================================

// 🧠 Concept: The `for` loop repeats a block of code a specific number of times.

// `for (initialization; condition; increment)`
for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration number: ${i}`);
}

// --- `break` and `continue` ---
for (let i = 1; i <= 10; i++) {
    if (i === 8) {
        console.log("Detected 8. Stopping the loop.");
        break; // Exits the loop entirely.
    }
    if (i % 2 === 0) {
        continue; // Skips the rest of this iteration and goes to the next one.
    }
    console.log(`Processing odd number: ${i}`);
}

// 🔁 Practice Problems:
// 1. (Easy) Write a `for` loop that prints the numbers from 1 to 10.
// 2. (Easy) Write a `for` loop that prints the even numbers from 2 to 20.
// 3. (Medium) Write a `for` loop that iterates from 1 to 100, but for numbers divisible by 3, print "Fizz", for numbers divisible by 5, print "Buzz", and for numbers divisible by both, print "FizzBuzz". Otherwise, print the number.
// 4. (Medium) Write a `for` loop that prints numbers from 1 to 10, but stops if it encounters the number 7, using the `break` keyword.
// 5. (Hard) Write a `for` loop to find the sum of all numbers in an array `[1, 2, 3, 4, 5]`.

// ===================================================================================
// ||  SECTION 25: WHILE & DO-WHILE LOOP                                            ||
// ===================================================================================

// --- `while` loop ---
// Repeats as long as a condition is true. Checks the condition *before* each iteration.
let count = 0;
while (count < 3) {
    console.log(`While loop count: ${count}`);
    count++;
}

// --- `do-while` loop ---
// Similar to `while`, but it executes the block *at least once* before checking the condition.
let doWhileCount = 5;
do {
    console.log(`Do-while loop count: ${doWhileCount}`); // This will run once.
    doWhileCount++;
} while (doWhileCount < 3); // Condition is false, so it stops.

// 🔁 Practice Problems:
// 1. (Easy) Use a `while` loop to print numbers from 5 down to 1.
// 2. (Medium) What is the main difference between a `while` loop and a `do-while` loop? Provide an example where their behavior would differ.
// 3. (Hard) Write a `do-while` loop that repeatedly prompts a user to enter a password until they enter the correct one ("password123").

// ===================================================================================
// ||  SECTION 26: FOR...OF, FOR...IN & FOREACH LOOP                                ||
// ===================================================================================

// --- `for...of` (For iterating over iterables like Arrays, Strings) ---
// Gives you the *value* of each element.
const techStack = ["React", "Node", "CSS"];
for (const tech of techStack) {
    console.log(`Tech: ${tech}`);
}

// --- `for...in` (For iterating over object properties) ---
// Gives you the *key* of each property.
const car = { make: "Tesla", model: "Model 3", year: 2022 };
for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

// --- `forEach` (An array method) ---
// Executes a provided function once for each array element.
techStack.forEach((item, index, array) => {
    console.log(`Item: ${item} at index ${index}`);
});

// 🔁 Practice Problems:
// 1. (Easy) Use a `for...of` loop to print each character of the string "hello".
// 2. (Easy) Use a `for...in` loop to print the keys and values of an object representing a student's grades.
// 3. (Medium) Use the `forEach` method to print each element of an array of numbers, multiplied by 2.
// 4. (Medium) When should you use `for...of` vs. `for...in`?
// 5. (Hard) Can you use `break` or `continue` inside a `forEach` loop? What happens if you try? How would you achieve a similar result?

// ===================================================================================
// ||  SECTION 27: FILTER, MAP & REDUCE                                             ||
// ===================================================================================

// 🧠 Concept: These are powerful, functional methods for working with arrays.
// They do NOT modify the original array; they return a new one.

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Mouse", category: "Electronics", price: 25 },
    { id: 3, name: "Book", category: "Books", price: 30 },
    { id: 4, name: "Keyboard", category: "Electronics", price: 100 },
    { id: 5, name: "Coffee Maker", category: "Home Goods", price: 75 }
];

// --- `map()`: Creates a new array by transforming each element. ---
// Example 1: Get an array of just the product names.
const productNames = products.map(p => p.name);
console.log(productNames); // ["Laptop", "Mouse", "Book", "Keyboard", "Coffee Maker"]

// Example 2: Create a new array of objects with price including tax.
const productsWithTax = products.map(p => {
    return { ...p, priceWithTax: p.price * 1.08 };
});
console.log(productsWithTax[0]); // { id: 1, name: 'Laptop', ..., priceWithTax: 1296 }

// --- `filter()`: Creates a new array with only the elements that pass a test. ---
// Example 1: Get all electronic products.
const electronics = products.filter(p => p.category === "Electronics");
console.log(electronics); // Array with Laptop, Mouse, Keyboard objects

// Example 2: Get all products that cost more than $50.
const expensiveProducts = products.filter(p => p.price > 50);
console.log(expensiveProducts); // Array with Laptop, Keyboard, Coffee Maker objects

// --- `reduce()`: Executes a function on each element to produce a single output value. ---
// Example 1: Calculate the total cost of all products.
const totalCost = products.reduce((acc, p) => acc + p.price, 0);
console.log(`Total cost: $${totalCost}`); // 1430

// Example 2 (Advanced): Group products by category.
const productsByCategory = products.reduce((acc, p) => {
    const category = p.category;
    if (!acc[category]) {
        acc[category] = []; // If the category doesn't exist in our accumulator, create it
    }
    acc[category].push(p); // Push the current product into its category array
    return acc;
}, {}); // The initial value is an empty object
console.log(productsByCategory);
// Output: { Electronics: [...], Books: [...], 'Home Goods': [...] }

// 🔁 Practice Problems:
// 1. (Easy) Given an array of numbers `[1, 2, 3, 4, 5]`, use `map` to create a new array where each number is squared.
// 2. (Easy) Given the same array, use `filter` to create a new array containing only the odd numbers.
// 3. (Medium) Given the same array, use `reduce` to find the product of all the numbers.
// 4. (Medium) Given the `products` array from the examples, use `filter` to find all products with a price less than $100.
// 5. (Hard) Using the `products` array, chain `filter`, `map`, and `reduce` to calculate the total price of all "Electronics" products.

// ===================================================================================
// ||  SECTION 28: PROMISES                                                         ||
// ===================================================================================

// 🧠 Concept: A Promise is an object representing the eventual completion (or failure)
// of an asynchronous operation. It's a placeholder for a value you don't have yet.
// Analogy: You order a pizza. The receipt is your "promise." You don't have the pizza yet,
// but you have the receipt that guarantees you'll eventually get a pizza (fulfillment)
// or a call saying they're out of cheese (rejection).

// --- Promise States ---
// 1. Pending: The initial state; neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// --- Practical Example: Chaining Promises ---
// Let's simulate fetching a user, then fetching their posts.
const fetchUser = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched user...");
            const users = { 1: { name: "Batman" }, 2: { name: "Superman" } };
            const user = users[userId];
            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found."));
            }
        }, 1000);
    });
};

const fetchPosts = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched posts for ${user.name}...`);
            resolve(["Post 1", "Post 2"]);
        }, 1000);
    });
};

// We use `.then()` to chain these operations.
fetchUser(1)
    .then(user => {
        // The return value of this `.then()` is passed to the next `.then()`.
        // We return a new promise here.
        return fetchPosts(user);
    })
    .then(posts => {
        console.log("User's posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Finished fetching data.");
    });

// 🔁 Practice Problems:
// 1. (Easy) Create a promise that resolves with the string "Success!" after 1 second. Use `.then()` to log the result.
// 2. (Medium) Create a promise that rejects with an `Error` object after 2 seconds. Use `.catch()` to log the error message.
// 3. (Medium) What is `Promise.all()`? Write an example where you have two promises and you wait for both to complete before logging their results.
// 4. (Hard) What is `Promise.race()`? Provide an example.
// 5. (Hard) Create a function `delay(ms)` that returns a promise which resolves after a given number of milliseconds. This is a very common utility function.

// ===================================================================================
// ||  SECTION 29: ASYNC/AWAIT                                                      ||
// ===================================================================================

// 🧠 Concept: `async` and `await` are modern syntactic sugar built on top of Promises.
// They allow you to write asynchronous code that looks and behaves like synchronous code.

// --- The `async` Keyword ---
// Placed before a function, it makes the function automatically return a Promise.
async function myAsyncFunction() {
    return "Hello, Async!";
}
myAsyncFunction().then(console.log);

// --- The `await` Keyword ---
// `await` can ONLY be used inside an `async` function.
// It pauses the execution of the async function until the Promise is settled.

// --- Practical Example: Rewriting the promise chain with async/await ---
// This code does the exact same thing as the `.then()` chain above, but is often easier to read.
const displayUserPosts = async (userId) => {
    try {
        console.log("Starting async fetch...");
        const user = await fetchUser(userId); // Pause here until user is fetched
        const posts = await fetchPosts(user); // Then pause here until posts are fetched
        console.log("Async - User's posts:", posts);
    } catch (error) {
        console.error("Async - Error:", error.message);
    } finally {
        console.log("Async - Finished fetching data.");
    }
};

displayUserPosts(2); // Let's fetch Superman's posts this time.

// 🔁 Practice Problems:
// 1. (Easy) Write an `async` function that returns the string "Done".
// 2. (Medium) Rewrite the `Promise.all()` example from the previous section using `async/await`.
// 3. (Medium) Can you use `await` outside of an `async` function? What is "top-level await"?
// 4. (Hard) Create an `async` function that fetches data from two different (simulated) API endpoints in parallel (at the same time) and then logs both results.
// 5. (Hard) What happens if you don't use `try...catch` in an `async` function and one of the `await`ed promises rejects?

// ===================================================================================
// ||  SECTION 30: ERROR HANDLING (try...catch)                                     ||
// ===================================================================================

// 🧠 Concept: The `try...catch` statement allows you to test a block of code for errors
// and handle them gracefully without crashing your entire application.

// --- Basic Syntax ---
try {
    let nonExistentVar = someUndefinedVariable; // This will cause a ReferenceError.
} catch (error) {
    console.error("An error occurred!");
    console.error("Error message:", error.message);
} finally {
    console.log("The try...catch block has finished.");
}

// --- Practical Example: Throwing Custom Errors ---
// You can create and throw your own errors to handle specific application logic.
function validateUsername(username) {
    if (typeof username !== 'string' || username.length < 3) {
        // We create a new Error object and `throw` it.
        throw new Error("Username must be a string with at least 3 characters.");
    }
    return true;
}

try {
    validateUsername("Al"); // This will fail the validation and throw an error.
    console.log("Username is valid."); // This line will not run.
} catch (err) {
    console.error("Validation failed:", err.message);
}

// 🔁 Practice Problems:
// 1. (Easy) Write a `try...catch` block to handle the error from `JSON.parse("invalid json")`.
// 2. (Medium) What is the purpose of the `finally` block? Provide an example.
// 3. (Medium) Write a function `divide(a, b)` that throws a custom error if `b` is 0.
// 4. (Hard) Create a custom error class `ValidationError` that extends the built-in `Error` class. Use it in a function to throw a more specific type of error.
// 5. (Hard) In an `async` function, how does error handling with `try...catch` compare to using the `.catch()` method on the promise that the `async` function returns?

// ===================================================================================
// ||                                                                               ||
// ||                   SECTION 31: PRACTICE PROBLEM SOLUTIONS                      ||
// ||                                                                               ||
// ||   ⚠️ SPOILER ALERT! Try to solve the problems yourself before looking here.    ||
// ||                                                                               ||
// ===================================================================================

// --- Solutions for Section 1: Variables ---
// 1. let favoriteColor = "blue"; console.log(favoriteColor);
// 2. const daysInWeek = 7; daysInWeek = 8; // This throws a TypeError: Assignment to constant variable.
// 3. let userScore = 100; { let userScore = 200; console.log(userScore); /* 200 */ } console.log(userScore); /* 100 */
//    // The inner `userScore` is a completely separate variable that only exists inside the block (block scope). The outer one is unaffected.
// 4. { var testVar = true; } console.log(testVar); // true. You can access it because `var` is function-scoped, not block-scoped, so it "leaks" out of the block.
// 5. const userInfo = { name: 'John', age: 30 }; userInfo.age = 31; // This is allowed. You can mutate (change) the properties of a constant object.
//    // userInfo = { name: 'Jane', age: 25 }; // This is NOT allowed. You cannot reassign a constant variable to a new object or value.

// --- Solutions for Section 2: Datatypes ---
// 1. const myName = "Your Name"; const myAge = 25; const isStudent = true; console.log(typeof myName, typeof myAge, typeof isStudent);
// 2. let car; console.log(car); // undefined. Its type is also "undefined".
// 3. `typeof null` results in "object". This is a famous historical bug in JavaScript that can't be fixed due to backward compatibility. It should logically be "null".
// 4. const s1 = Symbol('key'); const s2 = Symbol('key'); console.log(s1 === s2); // false. Symbols are always unique, even if their descriptions are the same.
// 5. const myArray = ["text", 42, false, null, undefined]; console.log(myArray); console.log(typeof myArray); // "object". Arrays are a type of object in JavaScript.

// --- Solutions for Section 3: Type Conversion ---
// 1. let numStr = "50"; let num = Number(numStr); console.log(num + 25); // 75
// 2. Boolean(0) is `false`. Boolean(1) is `true`. 0 is a "falsy" value, while any non-zero number is "truthy".
// 3. `Number(null)` is 0. `Number(undefined)` is NaN.
// 4. `1 + 2 + "3"` results in `"33"`. It does the math first (1+2=3), then concatenates with the string. `"1" + 2 + 3` results in `"123"`. The first operation is string concatenation, so all subsequent operations are also concatenation.
// 5. `Boolean("0")` is `true` because it's a non-empty string. `Boolean("")` is `false` because an empty string is a "falsy" value.

// --- Solutions for Section 4: Operations ---
// 1. console.log(15 % 4); // 3
// 2. let x = 5; x *= 3; console.log(x); // 15
// 3. console.log(isMember || hasCoupon); // true
// 4. console.log(isLoggedIn && isAdmin); // false
// 5. Result is `true`. Breakdown: `5 > 4` is `true`. `"hello" === "hello"` is `true`. `!true` is `false`. So it becomes `true && true || false`. `true && true` is `true`. Finally, `true || false` is `true`.

// --- Solutions for Section 5: Comparison ---
// 1. console.log(7 === "7"); // false
// 2. console.log(10 >= 10); // true
// 3. `0 == ""` is `true` because the empty string is coerced to the number 0. `0 === ""` is `false` because they are different types (number vs. string).
// 4. It's `false`. Strings are compared lexicographically (alphabetically). 'a' comes before 'b', so "apple" is considered "less than" "banana".
// 5. `null == 0` is `false`. `null > 0` is `false`. `null >= 0` is `true`. This is a weird corner case. For equality checks (`==`), `null` only equals `undefined`. For relational checks (`>`, `>=`), `null` is coerced to `0`. So `0 >= 0` is `true`.

// --- Solutions for Section 6: Stack & Heap ---
// 1. `str1` is still "hello". Primitives are copied by value. `str2` gets a copy, and changing it doesn't affect the original.
// 2. `obj1.a` is 2. Objects are copied by reference. `obj2` gets a reference to the same object as `obj1`, so changing it through `obj2` affects the original object.
// 3. let num1 = 50; let num2 = num1; num2 = 100; console.log(num1, num2); // 50 100. The value 50 is placed on the stack. `num2` gets a copy of that value. Changing `num2` creates a new value on the stack.
// 4. let person1 = { name: 'John' }; let person2 = person1; person2.name = 'Jane'; console.log(person1.name); // 'Jane'. The object is on the heap. `person1` and `person2` on the stack both hold a reference (pointer) to that same object.
// 5. function resetName(userObj) { userObj.name = 'Anonymous'; } let user = { name: 'John' }; resetName(user); console.log(user.name); // 'Anonymous'. It changed because the function received a reference to the original user object and modified it directly on the heap.

// --- Solutions for Section 7: Strings ---
// 1. let myCity = "New York"; console.log(myCity.length); // 8
// 2. let myCityUpper = myCity.toUpperCase();
// 3. const message = "I love JavaScript!"; console.log(message.slice(7, 17)); // "JavaScript"
// 4. const PRICE = 19.99; const sentence = `The item costs $${PRICE}.`;
// 5. function censorWord(sentence, word) { const asterisks = '*'.repeat(word.length); return sentence.replace(word, asterisks); }

// --- Solutions for Section 8: String Prototypes ---
// 1. It finds it on `String.prototype`.
// 2. String.prototype.reverse = function() { return this.split('').reverse().join(''); }; console.log("world".reverse()); // "dlrow"
// 3. It's called "monkey patching" and it's dangerous because if multiple libraries or parts of your code modify the same prototype, they can overwrite each other's changes, leading to unpredictable behavior and bugs that are hard to trace. It can also break forward compatibility if a future version of JavaScript adds a method with the same name.

// --- Solutions for Section 9: Numbers & Maths ---
// 1. console.log(Math.random());
// 2. console.log(Math.round(7.8)); // 8
// 3. function getRandom(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
// 4. const num = 12345.6789; console.log(num.toFixed(2)); // "12345.68"
// 5. It's `0.30000000000000004`. It is not equal to `0.3`. This is due to floating-point precision errors in how computers store decimal numbers in binary. It's a common issue in many programming languages.

// --- Solutions for Section 10: Dates ---
// 1. console.log(new Date());
// 2. console.log(new Date('1995-12-17')); // Example date
// 3. function getMonthName(date) { const months = ["January", "February", "March", ...]; return months[date.getMonth()]; }
// 4. console.log(Math.floor(Date.now() / 1000));
// 5. function getDaysUntilChristmas() { const today = new Date(); const christmasYear = today.getMonth() === 11 && today.getDate() > 25 ? today.getFullYear() + 1 : today.getFullYear(); const christmas = new Date(christmasYear, 11, 25); const oneDay = 1000 * 60 * 60 * 24; return Math.ceil((christmas.getTime() - today.getTime()) / oneDay); }

// --- Solutions for Section 11: Arrays ---
// 1. const movies = ["Inception", "The Matrix", "Interstellar"]; console.log(movies[1]);
// 2. movies.push("Dune");
// 3. const arr = [10, 20, 30, 40, 50]; const newArr = arr.slice(1, 3);
// 4. arr.splice(3, 1);
// 5. function rotateArray(arr) { if (arr.length <= 1) return arr; const lastElement = arr.pop(); arr.unshift(lastElement); return arr; }

// --- Solutions for Section 12: Objects ---
// 1. const book = { title: "1984", author: "George Orwell", yearPublished: 1949 };
// 2. console.log(book.author);
// 3. book.genre = "Dystopian";
// 4. book.getSummary = function() { return `${this.title} by ${this.author}`; };
// 5. function countProperties(obj) { return Object.keys(obj).length; }

// --- Solutions for Section 13: Destructuring & JSON API ---
// 1. const student = { name: 'Alice', score: 88 }; const { name, score } = student;
// 2. const colors = ['red', 'green', 'blue']; const [primary, secondary] = colors;
// 3. const productJSON = `{ "id": "p001", "name": "Wireless Mouse", "price": 29.99 }`;
// 4. const productObject = JSON.parse(productJSON);
// 5. const data = { user: { id: 123, info: { name: 'Bob', city: 'London' } } }; const { user: { info: { city } } } = data;

// --- Solutions for Section 14: Functions ---
// 1. function greet(name) { return `Hello, ${name}!`; }
// 2. const calculateArea = function(width, height) { return width * height; };
// 3. A parameter is the variable name listed in the function's definition. An argument is the actual value that is passed to the function when it is called.
// 4. function isEven(number) { return number % 2 === 0; }
// 5. Hoisting means function declarations are loaded into memory completely before the code executes, so you can call them before they are defined. Function expressions are not hoisted; the variable declaration is hoisted (`var myFunc = undefined`), but the function body assignment is not, so you can't call it before the line where it's defined.

// --- Solutions for Section 15: Passing Values & Rest Operator ---
// 1. function logFirstTwo(arg1, arg2, ...rest) { console.log(arg1, arg2); console.log(rest); }
// 2. Yes, it modifies the original object because objects are passed by reference. The function receives a pointer to the original object in memory.
// 3. The rest operator (`...`) collects multiple arguments into a single array in a function definition. The spread operator (`...`) expands an iterable (like an array or string) into individual elements, often used in function calls or to create new arrays/objects.
// 4. function findMax(...numbers) { return Math.max(...numbers); } // Here we use spread operator inside Math.max!
// 5. function mergeObjects(obj1, obj2) { return { ...obj1, ...obj2 }; }

// --- Solutions for Section 16: Scope ---
// 1. const appName = "My Notes App"; function logApp() { console.log(appName); } logApp();
// 2. You get a `ReferenceError`. `let` is block-scoped, so the variable ceases to exist after the loop block.
// 3. It works. `var` is function-scoped, so it's accessible anywhere within the function the loop is in, even after the loop finishes.
// 4. The scope chain is the hierarchy of scopes that JavaScript checks to find a variable. If a variable isn't in the current scope, it looks at the parent scope, then its parent, and so on, up to the global scope.
// 5. The TDZ is the period from the start of a block until a `let` or `const` variable is declared. Accessing the variable in this zone throws a `ReferenceError`. Example: `{ console.log(myVar); let myVar = 5; }`

// --- Solutions for Section 17: Lexical Scoping ---
// 1. function outer() { const outerVar = "I'm outside!"; function inner() { console.log(outerVar); } inner(); } outer();
// 2. No. Scoping in JavaScript works from the inside out. The child can see the parent's variables, but the parent cannot see the child's.
// 3. A closure is when a function "remembers" the variables from its lexical scope even when it's executed outside that scope.
//    function makeGreeter(greeting) { return function(name) { console.log(`${greeting}, ${name}`); } }
//    const greetHello = makeGreeter("Hello"); greetHello("John"); // "Hello, John"

// --- Solutions for Section 18: Arrow Function & `this` ---
// 1. const greet = name => `Hello ${name}`;
// 2. const counter = { count: 0, increment: function() { this.count++; } };
// 3. It logs "Hello, my name is undefined". Arrow functions don't have their own `this`; they inherit it from the surrounding scope. In this case, the surrounding scope is global, where `this.name` is undefined.
// 4. It doesn't work with a traditional function because `this` inside `setInterval` refers to the global object. Fix: `setInterval(() => console.log(this.seconds), 1000);`
// 5. In the global scope, `this` refers to the global object (`window` in browsers). Inside a regular function called globally, `this` also refers to the global object (or `undefined` in strict mode).

// --- Solutions for Section 19: IIFE ---
// 1. (function() { console.log("Hello from an IIFE!"); })();
// 2. (function(name) { console.log(`Welcome, ${name}!`); })("Guest");
// 3. Before `let`/`const` (block scope), any variable declared with `var` inside a loop or simple block would leak into the surrounding function or global scope. An IIFE creates a new function scope, effectively creating "private" variables and preventing this pollution.

// --- Solutions for Section 20: Execution Contexts ---
// 1. The Global Execution Context (GEC).
// 2. `undefined`. The declaration `var a` is hoisted and initialized with `undefined`. The assignment `a = 10` happens later.
// 3. "Hi!". Function declarations are fully hoisted, so the entire function is available before it's called.
// 4. `ReferenceError`. `let` declarations are hoisted but not initialized. They are in the Temporal Dead Zone until the line of declaration.
// 5. When `funcA` calls `funcB`, a new execution context for `funcB` is created and pushed onto the top of the call stack. When `funcB` finishes, its context is popped off the stack, and control returns to `funcA`.

// --- Solutions for Section 21: If-Else ---
// 1. if (age >= 18) { console.log("Adult"); } else { console.log("Minor"); }
// 2. if (score >= 90) { grade = 'A'; } else if (score >= 80) { grade = 'B'; } else if (score >= 70) { grade = 'C'; } else { grade = 'F'; }
// 3. A "falsy" value is one that evaluates to false in a boolean context (e.g., `0`, `""`, `null`, `undefined`, `NaN`, `false`). A "truthy" value is any other value. `if (myString)` or `if (myString.length > 0)` would work.

// --- Solutions for Section 22: Switch ---
// 1. switch (dayNum) { case 1: console.log("Monday"); break; /* ...and so on... */ default: console.log("Invalid day"); }
// 2. It's not a good fit. `switch` is best for checking a single variable against multiple discrete values, not ranges (like 80-89). You'd have to list every single case, which is inefficient.
// 3. Forgetting a `break` causes "fall-through", where execution continues into the next case. `case 'a': console.log('A'); /* no break */ case 'b': console.log('B');` If the input is 'a', it will log both 'A' and 'B'.

// --- Solutions for Section 23: Nullish Coalescing & Ternary ---
// 1. const isEven = (myNumber % 2 === 0) ? true : false;
// 2. The nullish coalescing operator `??`. `userInput ?? "Guest"` would result in `""` if `userInput` is an empty string, but "Guest" if it's `null` or `undefined`.
// 3. const result = (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";

// --- Solutions for Section 24: Loops ---
// 1. for (let i = 1; i <= 10; i++) { console.log(i); }
// 2. for (let i = 2; i <= 20; i += 2) { console.log(i); }
// 3. for (let i = 1; i <= 100; i++) { if (i % 15 === 0) console.log("FizzBuzz"); else if (i % 3 === 0) console.log("Fizz"); else if (i % 5 === 0) console.log("Buzz"); else console.log(i); }
// 4. for (let i = 1; i <= 10; i++) { if (i === 7) break; console.log(i); }
// 5. let sum = 0; const arr = [1, 2, 3, 4, 5]; for (let i = 0; i < arr.length; i++) { sum += arr[i]; } console.log(sum); // 15

// --- Solutions for Section 25: While & Do-While ---
// 1. let i = 5; while (i >= 1) { console.log(i); i--; }
// 2. A `do-while` loop always executes its body at least once, because the condition is checked *after* the first iteration. A `while` loop might never execute if its condition is false from the start.
// 3. let password; do { password = prompt("Enter password:"); } while (password !== "password123");

// --- Solutions for Section 26: For...of, For...in, forEach ---
// 1. for (const char of "hello") { console.log(char); }
// 2. const grades = { math: 90, science: 85 }; for (const subject in grades) { console.log(`${subject}: ${grades[subject]}`); }
// 3. const numbers = [1, 2, 3]; numbers.forEach(num => console.log(num * 2));
// 4. Use `for...of` for iterable things where you need the *values* (like arrays, strings). Use `for...in` for objects where you need the *keys*.
// 5. No. `forEach` is a function, not a true loop construct. You cannot use `break` or `continue`. To stop early, you could throw an error inside a try/catch, or use a traditional `for` loop, `for...of`, or array methods like `some()` or `every()`.

// --- Solutions for Section 27: Filter, Map & Reduce ---
// 1. const squared = [1, 2, 3, 4, 5].map(n => n * n); // [1, 4, 9, 16, 25]
// 2. const odds = [1, 2, 3, 4, 5].filter(n => n % 2 !== 0); // [1, 3, 5]
// 3. const product = [1, 2, 3, 4, 5].reduce((acc, n) => acc * n, 1); // 120
// 4. const cheapProducts = products.filter(p => p.price < 100);
// 5. const total = products.filter(p => p.category === "Electronics").map(p => p.price).reduce((acc, price) => acc + price, 0); // 1325

// --- Solutions for Section 28: Promises ---
// 1. const p = new Promise(resolve => setTimeout(() => resolve("Success!"), 1000)); p.then(console.log);
// 2. const p = new Promise((_, reject) => setTimeout(() => reject(new Error("Failure!")), 2000)); p.catch(err => console.log(err.message));
// 3. `Promise.all(iterable)` takes an array of promises and returns a new promise that resolves when *all* of the input promises have resolved, with an array of their results. It rejects if *any* of the promises reject.
// 4. `Promise.race(iterable)` returns a promise that resolves or rejects as soon as *one* of the promises in the iterable resolves or rejects, with the value or reason from that promise.
// 5. function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

// --- Solutions for Section 29: Async/Await ---
// 1. async function myFunc() { return "Done"; }
// 2. async function runAll() { const results = await Promise.all([promise1, promise2]); console.log(results); }
// 3. Traditionally, no. But modern environments support "top-level await", which lets you use `await` at the top level of a module, making setup code cleaner.
// 4. async function fetchParallel() { const [data1, data2] = await Promise.all([fetchApi1(), fetchApi2()]); console.log(data1, data2); }
// 5. The `async` function's returned promise will be rejected. If you don't handle this rejection with a `.catch()` on the function call, it will result in an "Uncaught (in promise)" error, crashing the application.

// --- Solutions for Section 30: Error Handling ---
// 1. try { JSON.parse("invalid json"); } catch (e) { console.error("Invalid JSON string!"); }
// 2. The `finally` block always executes, whether an error was thrown or not. It's used for cleanup code, like closing a file or a database connection.
// 3. function divide(a, b) { if (b === 0) { throw new Error("Cannot divide by zero!"); } return a / b; }
// 4. class ValidationError extends Error { constructor(message) { super(message); this.name = "ValidationError"; } }
// 5. `try...catch` within an `async` function handles errors synchronously inside the function. Using `.catch()` on the function call handles the final rejected state of the promise that the `async` function returns. Both are valid ways to handle errors.
