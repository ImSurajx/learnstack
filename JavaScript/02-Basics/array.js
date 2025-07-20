/*
Arrays: An array is a special variable that holds multiple values in a single place.
*/
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple

// Creates Array
let arr1 = [1, 2, 3];            // Using literals
let arr2 = new Array(4, 5, 6);   // Using constructor
let empty = new Array(3);        // Creates empty array of length 3

// Accessing & Modifying
console.log(arr1[1]);      // 2
arr1[1] = 10;              // Modify value
console.log(arr1);         // [1, 10, 3]
console.log(arr1.length); // 3

// Common Methods (with examples)
arr1.push(4);      // Add to end
arr1.pop();        // Remove from end
arr1.unshift(0);   // Add to start
arr1.shift();      // Remove from start

// Search
console.log(arr1.includes(10)); // true
console.log(arr1.indexOf(10));  // 1

// Combine
let more = [7, 8];
let merged = arr1.concat(more);  // Merge arrays
console.log(merged);

// Convert
let str = arr1.join("-"); // "1-10-3"

// Slice & Splice
let sliced = arr1.slice(1, 3);    // [10, 3] (doesn't modify)
arr1.splice(1, 1, 99);            // [1, 99, 3] (modifies original)

//  Looping Through Arrays
arr1.forEach((item) => console.log(item)); // Simple loop

let doubled = arr1.map(x => x * 2);       // Create new array
let evens = arr1.filter(x => x % 2 === 0);// Filter
let sum = arr1.reduce((acc, x) => acc + x, 0); // Sum

//  Useful Properties
console.log(Array.isArray(arr1)); // true
console.log([1, 2, 3].reverse()); // [3, 2, 1]
console.log([1, 2, 3].sort());    // [1, 2, 3] (but sorts as strings!)

// Multidimensional Arrays
let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3
// ********************* Test *********************

// array
const myArr = [0,1,2,3,4,5];
const myHeros = ["Superman", "Thor"]
const myArr2 = new Array(1,2,3,4,5);
console.log(myArr[0]);

// array methods
myArr.push(6); // add element at the end
myArr.push(7);
myArr.pop(); // remove element from end
console.log(myArr);
myArr.unshift(9); // not optimized but add new element at the start & move all element to forwarded indices.
myArr.shift(); // remove element from the start.

console.log(myArr.includes(9)); // check 9 includes or not
console.log(myArr.indexOf(9)); // check indix, if the value doesn't exist then it will give you -1

const newArr = myArr.join(); // array convert into string.
console.log(myArr);
console.log(newArr);

// slice or splice.
console.log("A ", myArr);

const myn1 = myArr.slice(1,3); // give the copy of element from original array & doesn't includ end rage [1,3) & doesn't make any change into original array.
console.log(myn1); 
console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // give the element from the original array & also include end rage like in maths [1,3] also remove those element from original array.

console.log(myn2); 
console.log("C ", myArr);

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); // push array inside an array [array 1, [array2]]
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
let allHeros =  marvel_heros.concat(dc_heros); // return new array & merge two array.
console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]; // merge multiple arrays & also return an array.
console.log(allNewHeros);

const anotherArray = [1,2,3, [4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = anotherArray.flat(Infinity); // fix array if there is multiple array one inside anothers like [arr1, [arr2, [arr3]],arr4]
console.log(realAnotherArray);

console.log(Array.isArray("Suraj"));
console.log(Array.from("Suraj")); // convert string into array.
console.log(Array.from({name: "Suraj"})) // intersting. -> we have to specify which type of array we need like keys or elements.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

