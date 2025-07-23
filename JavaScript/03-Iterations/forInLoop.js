// Detailed Notes on `for...in` Loop in JavaScript

/*
-----------------------------
What is `for...in` loop?
-----------------------------
The `for...in` loop in JavaScript is used to iterate over the enumerable property keys (names) of an object.
It's most suitable for **objects**, not arrays.
*/

// Syntax:
// for (let key in object) {
//     // code block to be executed
// }

// Example 1: Iterating over an object
const person = {
  name: "Suraj",
  age: 21,
  isStudent: true
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
/*
Output:
name: Suraj
age: 21
isStudent: true
*/


/*
---------------------------------------------
Important Notes about `for...in`
---------------------------------------------
1. It iterates **over keys** (property names), not values directly.
2. It works best with plain JavaScript objects.
3. If used on arrays, it will iterate over **index keys** as strings.
4. It can also pick up **inherited enumerable properties**, unless filtered.
*/

// Example 2: Using for...in on arrays (not recommended)
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}
/*
Output:
0 red
1 green
2 blue
*/
// Not recommended because the order is not guaranteed and keys are strings.


/*
-----------------------------------------------------
How to filter out inherited properties using `hasOwnProperty`
-----------------------------------------------------
*/
const parent = { a: 1 };
const child = Object.create(parent);
child.b = 2;

for (let key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(key, child[key]);
  }
}
/*
Output:
b 2
*/


/*
------------------------------------------------
Comparison: for...in vs for...of
------------------------------------------------
- `for...in`: iterates over property keys (mainly objects).
- `for...of`: iterates over values (iterables like arrays, strings, maps).
*/


/*
----------------------------------
When **NOT** to use `for...in`
----------------------------------
- Avoid using it on arrays unless you specifically need index keys.
- It may include keys from prototype chain if not filtered.
*/


/*
--------------------------------
Best use cases:
--------------------------------
- Iterating through object properties.
- Useful when you need both key and value.
*/

// Example 3: Better alternative for arrays
const nums = [10, 20, 30];
for (let value of nums) {
  console.log(value);  // 10, 20, 30
}

// Use for...in only when necessary on arrays (e.g., sparse arrays or specific indices)


// That's a detailed overview of `for...in` in JavaScript.

// ********************** Test **********************
const myObj = {
    js : 'JavaScript',
    c  : 'C',
    cpp : 'C++',
    rb  :  'ruby',
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = [ 'js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map();
map.set('IN', "India");
map.set('US', "United States of America");
map.set('UK', "United Kingdom");
map.set('IN', "India"); // map never take duplicate key value pair.
console.log(map);

// not ittreable by for in
for (const [key, value] in map) {
    console.log(key, value);
}