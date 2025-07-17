/*
number -> 2^53 (range), store numbers
bigint -> for storing big number
string -> " "; use to store character or name
boolean -> true/false; use to state condition
null -> a stand-alone value 
undefined -> when we declare a variable without any value
symbol -> use to find uniqueness
*/

"use strict"; // treat all JS code as newer version.

// alert("Hello Suraj"); --> we are using node.js not browser

console.log(3 + 4);

let name = "string";
let age = 18;
let isLoggedIn = true;
let state; // undefined (null is a representation of empty data type)

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof state);
console.log(typeof BigInt);
console.log(typeof null);
console.log(typeof undefined);
