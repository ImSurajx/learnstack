// ✅ JavaScript Array.map() Method — Detailed Notes

// The `map()` method creates a **new array** by applying a function to each element of the original array.
// It **does not modify** the original array.

// 🔹 Syntax:
// const newArray = originalArray.map(callbackFn(currentValue, index, array))

// 🔹 Parameters:
// - currentValue → The current element being processed
// - index (optional) → Index of current element
// - array (optional) → The array map was called upon

// 🔹 Returns:
// - A new array with transformed values

// Example 1: Basic Usage
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Example 2: Extracting Properties from Object Array
const books = [
  { title: "Book A", genre: "Fiction" },
  { title: "Book B", genre: "Horror" }
];
const titles = books.map(book => book.title);
console.log(titles); // ["Book A", "Book B"]

// Example 3: Using Index
const nums = [10, 20, 30];
const indexed = nums.map((num, index) => `${index}: ${num}`);
console.log(indexed); // ["0: 10", "1: 20", "2: 30"]


// ✅ Chaining with `map()` — Applying multiple transformations in sequence

const users = [
  { name: "Suraj", age: 21 },
  { name: "Akash", age: 17 },
  { name: "Ravi", age: 25 }
];

const formattedNames = users
  .map(user => user.name.toUpperCase())
  .map(name => `User: ${name}`);

console.log(formattedNames);
// Output: ["User: SURAJ", "User: AKASH", "User: RAVI"]


// ✅ Example: Chaining map() with filter()
const numbersList = [1, 2, 3, 4, 5, 6];
const processed = numbersList
  .filter(num => num % 2 === 0)      // Step 1: keep even numbers
  .map(num => num * num);           // Step 2: square them

console.log(processed); // [4, 16, 36]


// 🔸 Common Mistake: Forgetting return statement in regular functions
// Wrong:
// const wrong = numbers.map(function(num) {
//   num * 2; // No return → undefined
// });
// console.log(wrong); // [undefined, undefined, undefined, undefined, undefined]

// Correct:
// const correct = numbers.map(function(num) {
//   return num * 2;
// });


// ✅ map() vs forEach()
// - map returns a new array
// - forEach performs action but returns undefined

// Summary:
// - Use `map()` when you want a **transformed array**
// - You can chain `map()`, `filter()`, `reduce()` for powerful data operations
// ******************* Test *******************
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// map
const newNums = myNumbers.map((num) => {return num + 10});
console.log(newNums);

// chaining
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)

console.log(newNums);
