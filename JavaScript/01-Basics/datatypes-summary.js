/*
JavaScript is a dynamically typed language — not statically typed.
You don’t declare variable types explicitly.
	•	The type of a variable is determined at runtime.
	•	A variable can hold any type of value at any time.

# Primitive 
string, number, boolean, null, undefined, symbol, BigInt

# Non Primitive (Reference Type)
array, objects, functions

# data typeof results
Undefined = "undefined"
Null = "object"
Boolean = "boolean"
Number = "number";
String = "string";
object (native and does not implement[[call]]) = object;
object (native or host and does implement [[call]]) = function;
object (host and does not implement ([call])) = implementation-defined expect may not be "undefined", "number" or string;
*/

const score = 100; // number
const scoreValue = 10.3; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined
const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol
console.log(id === anotherId); // false
const bigNumber =  134134713894710328471832471803471304110n; // BigInit

const heros =["shaktiman", "naagraj", "doga"] // array

//object
let myObject = {
    name: "Suraj Kumar",
    age: 22,
}

// function
const myFunction = function(){
    console.log("Hello Suraj");
}

console.log(typeof bigNumber); // bigInt
console.log(typeof outsideTemp); // object
console.log(typeof myFunction); // function
 



