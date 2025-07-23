// JavaScript Array.reduce() - Deep Notes with Examples

/*
------------------------------------------------------
🧠 What is reduce()?
------------------------------------------------------
The `reduce()` method executes a *reducer* function on each element of the array, resulting in a single output value.
It is often used to perform operations like summing, flattening, or accumulating results.
*/

// Syntax:
// array.reduce(callbackFunction, initialValue);

// Parameters:
// 1. callbackFunction => function with 4 arguments:
//      - accumulator: accumulates callback's return values
//      - currentValue: current element being processed
//      - currentIndex: index of current element
//      - array: the array reduce() was called upon
// 2. initialValue => optional value to start with (required for empty arrays)

//------------------------------------------------------
// 🛠️ Simple Example - Sum of numbers
//------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // Output: 15

//------------------------------------------------------
// 📚 Use Case - Find Maximum
//------------------------------------------------------
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log("Max:", max); // Output: 5

//------------------------------------------------------
// 📘 Use Case - Grouping by Property
//------------------------------------------------------
const books = [
  { title: "Book A", genre: "Sci-Fi" },
  { title: "Book B", genre: "Fantasy" },
  { title: "Book C", genre: "Sci-Fi" },
];

const grouped = books.reduce((acc, book) => {
  acc[book.genre] = acc[book.genre] || [];
  acc[book.genre].push(book.title);
  return acc;
}, {});
console.log("Grouped Books:", grouped);
/*
Output:
{
  Sci-Fi: ["Book A", "Book C"],
  Fantasy: ["Book B"]
}
*/

//------------------------------------------------------
// 🧱 Use Case - Flatten an array
//------------------------------------------------------
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened:", flat); // [1, 2, 3, 4, 5]

//------------------------------------------------------
// 🔁 Reduce vs forEach / map / for-of
//------------------------------------------------------
// - forEach: performs side-effects, no return
// - map: returns new array of same length
// - reduce: returns single value (or any structure like object, array)

//------------------------------------------------------
// 🔗 Chaining reduce with other methods
//------------------------------------------------------
const result = [1, 2, 3, 4, 5]
  .filter((n) => n % 2 !== 0)     // [1, 3, 5]
  .map((n) => n * 10)            // [10, 30, 50]
  .reduce((acc, curr) => acc + curr, 0); // 90

console.log("Chained Result:", result);

//------------------------------------------------------
// ⚠️ Things to Remember
//------------------------------------------------------
// - Always pass initialValue when unsure if array is empty
// - Return value in reducer is mandatory
// - It can return any data type: number, array, object, etc.

//------------------------------------------------------
// ✅ Best Use Cases
//------------------------------------------------------
// - Sum, average, max/min
// - Building objects/maps
// - Flattening or merging arrays
// - Custom aggregations (e.g. cart total in e-commerce)

//------------------------------------------------------
// 🧪 Test Yourself
//------------------------------------------------------
// 1. Use reduce to count occurrences of elements in an array
// 2. Use reduce to convert an array of strings into one sentence
// 3. Use reduce to find the longest string in an array


// ***************** Test *****************

const myNums = [1,2,3];

const myTotal = myNums.reduce(function(acc, curval){
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0);
console.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Python Coursse",
        price: 4999
    },
    {
        itemName: "Data Science",
        price: 21999
    }
]
const toatlCartValue = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
console.log(toatlCartValue);
