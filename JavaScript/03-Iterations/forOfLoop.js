// for...of Loop in JavaScript - Detailed Notes

/**
 * The `for...of` loop is used to iterate over **iterable** objects like:
 *  - Arrays
 *  - Strings
 *  - Maps
 *  - Sets
 *  - NodeLists (from DOM)
 * 
 * It does NOT work directly on plain Objects unless you use Object methods.
 */

// ========== Syntax ==========
// for (const variable of iterable) {
//     // code block to execute
// }

// ========== Example 1: Iterating over an Array ==========
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Output:
// red
// green
// blue

// ========== Example 2: Iterating over a String ==========
const name = "Suraj";
for (const char of name) {
    console.log(char);
}

// Output:
// S
// u
// r
// a
// j

// ========== Example 3: Iterating over a Set ==========
const fruits = new Set(["apple", "banana", "cherry"]);
for (const fruit of fruits) {
    console.log(fruit);
}

// ========== Example 4: Iterating over a Map ==========
const student = new Map();
student.set("name", "Suraj");
student.set("age", 21);

for (const [key, value] of student) {
    console.log(`${key} = ${value}`);
}

// Output:
// name = Suraj
// age = 21

// ========== for...of with DOM Elements (NodeList) ==========
// const items = document.querySelectorAll('li');
// for (const item of items) {
//     console.log(item.textContent);
// }

// ========== Limitations of for...of ==========
const person = {
    name: "Suraj",
    age: 21
};

// for...of doesn't work directly on objects
// for (const key of person) { // ❌ TypeError
//     console.log(key);
// }

// Workaround: Convert object to iterable using Object methods
for (const key of Object.keys(person)) {
    console.log(key, person[key]);
}

// Output:
// name Suraj
// age 21

// ========== Summary ==========
/**
 * ✅ Use for...of when working with:
 *   - Arrays
 *   - Strings
 *   - Sets
 *   - Maps
 *   - NodeLists
 * 
 * ❌ Don't use for...of on plain objects directly.
 *    Use Object.keys(), Object.values(), or Object.entries() instead.
 */

// ********************** Test **********************
// for of
["", "", ""];
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const gretting = 'Hello Suraj';
for(const greet of gretting){
    console.log(greet);
}

// Maps (itreatable)
const map = new Map();
map.set('IN', "India");
map.set('US', "United States of America");
map.set('UK', "United Kingdom");
map.set('IN', "India"); // map never take duplicate key value pair.
console.log(map);

for(const [key, value] of map){
    console.log(key, value);
}

// object is not iteratable
const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}


for(const game of myObj){
    console.log(game);
}