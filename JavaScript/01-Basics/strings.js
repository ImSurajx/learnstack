/*
# String: (" " , '' , ` ${} `);

String interpolation is a powerful feature in many programming languages that allows you to embed expressions directly into strings, making string formatting more readable and concise
*/

const name = "suraj "; // normal string
const name1 = 'Kumar'; // same as name
const stringInterpolation = `Suraj ${Kumar}`;
const repoCount = 50;

console.log(name + repoCount + " repos"); 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`Suraj-Kumar`); // string interpolation - the new way of using string with primitive or non-primitive datatypes
console.log(gameName.__proto__); // access prototypes of gameName
console.log(gameName.length); // tell string length
console.log(gameName.toLowerCase()); // convert into lower case
console.log(gameName.toUpperCase()); // convert into upper case
console.log(gameName.indexOf('j')); // find the index of a word inside string

let newString = gameName.substring(0,5); // extract according to indices
console.log(newString);

let anotherString = gameName.slice(-5); // extract from the end.
console.log(anotherString);

const newStringOne = "   Suraj  ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove extra space from start & end used for taking input.

const url = "https://suraj.com/suraj%20kumar";
console.log(url.replace('%20', '-')); // replace existing text with new one
console.log(url.includes('suraj')); // check the particular word is part of string or not.
console.log(gameName.split('-')); // split url from - part.








