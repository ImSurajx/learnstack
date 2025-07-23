// JavaScript Notes: `filter()` Method in Detail

/*
---------------------------
🌟 What is `filter()`? (Concept)
---------------------------
The `filter()` method is used to create a **new array** containing only the elements from the original array that **pass a specific test** (callback function).

It does NOT modify the original array.
*/

// Syntax:
// array.filter(callbackFn(element, index, array), thisArg)

/*
---------------------------
🔍 Parameters
---------------------------
1. `callbackFn` - A function that tests each element. Returns `true` to keep the element, `false` otherwise.
    - `element` - The current element being processed.
    - `index` (optional) - The index of the current element.
    - `array` (optional) - The original array being processed.
2. `thisArg` (optional) - Value to use as `this` inside callback.
*/

/*
---------------------------
✅ Example 1: Filter Even Numbers
---------------------------
*/
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

/*
---------------------------
✅ Example 2: Filter Books Published After 2000
---------------------------
*/
const books = [
  { title: "Book A", publishYear: 1995 },
  { title: "Book B", publishYear: 2005 },
  { title: "Book C", publishYear: 2015 },
];

const recentBooks = books.filter(book => book.publishYear > 2000);
console.log(recentBooks); // Output: [{ title: 'Book B', ... }, { title: 'Book C', ... }]

/*
---------------------------
📌 Use Cases
---------------------------
- Get all active users from a user list
- Filter products in stock
- Filter tasks that are incomplete
- Search/filter based on user input
*/

/*
---------------------------
⚠️ Notes
---------------------------
- `filter()` returns a NEW array (original remains unchanged)
- If no elements pass the test, it returns an empty array
- Works only on arrays (not objects directly)
*/

/*
---------------------------
❌ Common Mistakes
---------------------------
1. Forgetting the return statement in traditional function:

  const result = arr.filter(function(item) {
    // return item > 10; ← required
  });

2. Trying to use on object (e.g., not in an array)
*/

// ********************** Test ********************** 

const coding = ["JS", "Ruby", "Java", "Python", "CPP"];

// won't return any values
const values = coding.forEach((item) => {
    // console.log(item);
    return item;
})

console.log(values);

filter: return values if condtion match
const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter((num) => {
    return num > 4
});
console.log(newNums);

const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = [];
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishYear: 1949
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publishYear: 1925
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publishYear: 1937
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publishYear: 1997
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    publishYear: 2003
  },
  {
    title: "The Alchemist",
    genre: "Adventure",
    publishYear: 1988
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishYear: 1813
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-Age",
    publishYear: 1951
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-fiction",
    publishYear: 2011
  }
];

let userBooks = books.filter((books) => books.genre === 'Fantasy');
userBooks = books.filter((bk) => bk.publishYear > 1995 && bk.genre === 'Non-fiction');
console.log(userBooks);


