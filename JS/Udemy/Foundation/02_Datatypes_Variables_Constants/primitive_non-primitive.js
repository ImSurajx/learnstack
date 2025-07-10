/*
Primitve Data Types:
String, Boolean, Number, Null, Undefined, Symbol

Non-Primitve Data Types:
Objects, Array, Functions
*/

// numbers
let balance = 120;
console.log(typeof(balance));
let anotherBalance = new Number(120)
console.log(anotherBalance);

// boolean
let isActive = true;
let isReallyActive = new Boolean(true);

// null and  undefined
let firstname = null;
let lastname = undefined;
console.log(firstname);

// string
let user = "ItSurajx"
let myString = "hello";
let myStringOne = 'Hola';
let oldGreet = myString + 'Suraj'
let username = `Hello ${user}!`;
let compute = `value is ${3*9}`;
console.log(compute);

let sm1 = Symbol('Suraj'); // always unique
let sm2 = Symbol('Suraj');

console.log(sm1 == sm2);


// objects -> non primitive data types
const username = {
    firstname: "Suraj",
    lastname: "Kumar"
};

username.firstname = "SurajKumar";
username.xyz = "93150";

console.log(username.firstname);
console.log(username);
console.log(username.xyz);

let today = new Date();
console.log(today.getDate());

// array
let heros = ['a', 'b', 'c', true]
let anotherUser = ["Suraj", true]

console.log(anotherUser[0], anotherUser[1]);
console.log("1"+1);
let isValue = "2abc";
console.log(typeof Number(isValue+1));
console.log(Number(null));
console.log(Number(undefined));