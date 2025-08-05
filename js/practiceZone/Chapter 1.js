// 📦 Chapter 1: Variables & Declarations 

// Declare your name and city using const , and your age using let .
const name = "Suraj Kumar";
const city = "New Delhi";
let age = 21;

// Try this and observe the result:
let x = 5;
// let x = 10; // Error of rediclartion

// Guess the output:
// var count = undefined
console.log(count); // undefinded
var count = 42; 
// count = 42

// Create a const object and add a new key to it — does it work?
const obj = {};
obj.name = name;
obj.city = city;
obj.age = age;
console.log(obj);

// Try accessing a let variable before declaring it — what error do you see?
// console.log(y); // Reference Error
let y = 10;

// Change a const array by pushing a value. Will it throw an error?

const arr = [1,2,3];
arr.push(4);
console.log(arr);


